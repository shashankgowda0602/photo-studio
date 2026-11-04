# Aperture & Grain Photo Studio

An editorial photography studio website for showcasing creative work and helping clients plan and book photo sessions. The experience includes a curated portfolio, studio rental information, session packages, and booking tools.

## Features

- Browse and filter portfolio work, with an image lightbox.
- Explore studio spaces and rental options.
- Compare packages and estimate session pricing with add-ons.
- Start a booking with a selected package, studio space, or add-ons.
- View photographer profiles, testimonials, and FAQs.

## Tech stack

- React 19 and TypeScript
- Vite
- Tailwind CSS
- Lucide icons and Motion
- Google GenAI SDK (for Gemini API integrations)

## Getting started

### Prerequisites

- Node.js (a current LTS release is recommended)
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite serves the development app on port `3000`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server on port 3000. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run the TypeScript compiler without emitting files. |
| `npm run clean` | Remove the `dist/` directory and `server.js`. |

## Environment variables

The project includes an `.env.example` with the following variables:

| Variable | Purpose |
| --- | --- |
| `GEMINI_API_KEY` | API key for Gemini integrations, if used. |
| `APP_URL` | Hosted application URL, used for application links and endpoints. |

Copy `.env.example` to `.env.local` for local configuration and provide real values when needed. Do not commit secrets. In Google AI Studio deployments, these values may be injected through the platform at runtime.

## Project structure

```text
src/
  components/   Page sections, gallery, pricing, and booking/lightbox UI
  data/         Studio and portfolio content
  types/        TypeScript types
  App.tsx       Main page composition and application state
  main.tsx      Application entry point
```

## License

The source files identify the project as Apache-2.0 licensed. See the repository for license details.
