# MediLingua Platform

Multilingual, voice-enabled healthcare assistant platform.

## Structure

- `apps/web`: Patient & provider portal (Next.js)
- `apps/chatbot`: Voice + text assistant (API + UI)
- `apps/mobile`: Expo mobile app
- `apps/docs`: Documentation site
- `packages/`: Shared AI, i18n, voice, and onboarding tools

## Getting Started

```bash
yarn install
cp .env.example .env.local
yarn dev:web
