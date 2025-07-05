'use client';
import { useState } from 'react';
import { speakText } from '@lib-voice';
import { queryAI } from '@lib-ai';

export default function ChatbotPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = async () => {
    const reply = await queryAI(input);
    setMessages([...messages, `🧑: ${input}`, `🤖: ${reply}`]);
    speakText(reply, 'en'); // Replace with dynamic lang
    setInput('');
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>MediLingua Assistant</h1>
      <div>
        {messages.map((msg, i) => <p key={i}>{msg}</p>)}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleSubmit}>Send</button>
    </main>
  );
}
