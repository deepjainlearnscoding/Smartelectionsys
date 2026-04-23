import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT = `You are an expert Election Guide AI Assistant for Indian elections. Your role is to help citizens understand:
- Voter registration process and requirements
- Documents needed to vote (Voter ID, Aadhaar, etc.)
- How to find polling booths
- Election timeline and key dates
- Voting day procedures
- Electoral roll verification
- How to check voter ID application status
- Rights of voters

Guidelines:
- Always respond in simple, clear English (unless asked otherwise)
- Use numbered steps for procedures
- Be encouraging and civic-minded
- Keep responses concise (3-5 sentences or a short list)
- If asked about something unrelated to elections, politely redirect
- Always end with a helpful tip or next step`;

export async function POST(req: NextRequest) {
  try {
    const { messages, userMessage } = await req.json();

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const history = (messages || []).map((msg: { role: string; content: string }) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: [
        { role: 'user', parts: [{ text: 'You are an election guide assistant.' }] },
        { role: 'model', parts: [{ text: SYSTEM_PROMPT }] },
        ...history,
      ],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(userMessage);
    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to get AI response. Please check your GEMINI_API_KEY.' },
      { status: 500 }
    );
  }
}
