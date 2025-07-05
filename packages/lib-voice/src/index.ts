export function speakText(text: string, lang: string = 'en') {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  speechSynthesis.speak(utterance);
}

// Placeholder for STT — browser or ElevenLabs integration
export function startSpeechRecognition(lang: string, onResult: (text: string) => void) {
  const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
  if (!SpeechRecognition) return;

  const recognition = new SpeechRecognition();
  recognition.lang = lang;
  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };
  recognition.start();
}
