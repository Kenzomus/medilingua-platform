import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>MediLingua Portal</h1>
      <ul>
        <li><Link href="/chatbot">Chatbot</Link></li>
        <li><Link href="/patients">Patient Portal</Link></li>
        <li><Link href="/doctors">Doctor Dashboard</Link></li>
        <li><Link href="/docs">Documentation</Link></li>
      </ul>
    </main>
  );
}
