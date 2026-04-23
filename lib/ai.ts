export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export async function sendChatMessage(
  messages: ChatMessage[],
  userMessage: string
): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, userMessage }),
  });

  if (!response.ok) {
    throw new Error('Failed to get AI response');
  }

  const data = await response.json();
  return data.response;
}

export async function verifyInformation(text: string): Promise<{
  verdict: 'TRUE' | 'FALSE' | 'MISLEADING' | 'UNVERIFIABLE';
  explanation: string;
  confidence: number;
}> {
  const response = await fetch('/api/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error('Failed to verify information');
  }

  return response.json();
}
