import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `You are an expert fact-checker specializing in Indian election news and political misinformation.

Analyze the following text and determine if it is TRUE, FALSE, MISLEADING, or UNVERIFIABLE.

Text to verify: "${text}"

Respond ONLY in this exact JSON format (no markdown, no code blocks):
{
  "verdict": "TRUE" | "FALSE" | "MISLEADING" | "UNVERIFIABLE",
  "explanation": "A clear 2-3 sentence explanation of why this verdict was given. Cite what is accurate or inaccurate.",
  "confidence": 85
}

Rules:
- verdict must be exactly one of: TRUE, FALSE, MISLEADING, UNVERIFIABLE
- confidence is a number 0-100 representing how confident you are
- explanation should be helpful and educational
- If you cannot determine the veracity, use UNVERIFIABLE`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text().trim();

    // Parse JSON response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('Invalid AI response format');

    const parsed = JSON.parse(jsonMatch[0]);

    return NextResponse.json({
      verdict: parsed.verdict || 'UNVERIFIABLE',
      explanation: parsed.explanation || 'Unable to verify this information.',
      confidence: parsed.confidence || 50,
    });
  } catch (error) {
    console.error('Verify API error:', error);
    return NextResponse.json(
      { verdict: 'UNVERIFIABLE', explanation: 'Could not verify. Please check your GEMINI_API_KEY.', confidence: 0 },
      { status: 500 }
    );
  }
}
