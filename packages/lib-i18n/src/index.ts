export function detectLanguage(text: string): string {
  if (/^\s*(bonjour|salut|merci)/i.test(text)) return 'fr';
  if (/^\s*(nanga def|jërëjëf|waaw)/i.test(text)) return 'wo';
  return 'en';
}

export async function translate(text: string, to: string): Promise<string> {
  // Placeholder — replace with Azure or Google Translate API
  return `[${to}] ${text}`;
}
