import fs from 'fs-extra';

type Role = 'patient' | 'doctor';
type Lang = 'en' | 'fr' | 'wo';

export function generateScript(role: Role, lang: Lang): string {
  const templates = {
    en: {
      patient: "Welcome to MediLingua. Let's get you started.",
      doctor: "Welcome, doctor. Here's how to onboard your patients."
    },
    fr: {
      patient: "Bienvenue sur MediLingua. Commençons votre inscription.",
      doctor: "Bienvenue docteur. Voici comment onboarder vos patients."
    },
    wo: {
      patient: "Jamm rekk ci MediLingua. Ñu tambali.",
      doctor: "Jamm rekk, dockitër. Lii la onboarding bi."
    }
  };
  return templates[lang][role];
}

// CLI usage
if (require.main === module) {
  const [role, lang] = process.argv.slice(2) as [Role, Lang];
  const script = generateScript(role, lang);
  console.log(script);
}
