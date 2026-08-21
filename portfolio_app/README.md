# Portfolio Website

A responsive personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Run Locally

```bash
npm install
npm run dev
```

Create `.env` from `.env.example` for the contact form:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

## Commands

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## Vercel Deployment

The repository includes a root-level `vercel.json` so Vercel installs dependencies inside `portfolio_app`, runs the local npm build script, and publishes `portfolio_app/dist`.

Use these project settings when configuring Vercel manually:

- Root Directory: repository root, or `portfolio_app` when configuring it manually
- Build Command: `cd portfolio_app && npm run build` when using the repository root
- Output Directory: `portfolio_app/dist` when using the repository root
- Framework Preset: `Vite`

Add `VITE_WEB3FORMS_ACCESS_KEY` under Vercel Project Settings > Environment Variables for Production.
