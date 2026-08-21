# Portfolio Website

A responsive personal portfolio website built with React and Vite. The site showcases projects, technical skills, achievements, social profiles, a downloadable resume, and a contact form.

## Features

- Terminal-inspired dark interface
- Responsive layout for desktop and mobile
- Project cards with technology tags and external links
- Animated sections and interaction states
- Floating navigation dock
- Resume download
- Contact form powered by Web3Forms
- Reduced-motion and accessibility support

## Built With

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Run Locally

```bash
cd client
npm install
npm run dev
```

Create `client/.env` from `client/.env.example` and add the Web3Forms key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

## Available Commands

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## Project Structure

```text
client/
├── public/       # Static files and resume
└── src/
	├── assets/   # Images and other assets
	├── components/
	├── App.jsx
	└── index.css
```

## Live Website

[Visit the portfolio](https://sheikhsahil.me)

## Run Locally

The portfolio is a Vite client application.

```bash
cd client
npm install
npm run dev
```

For the contact form, create `client/.env` from `client/.env.example`:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Useful commands:

```bash
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Check the code with ESLint
```

## License

This is a personal portfolio. Please contact Sheikh Sahil before reusing personal content, branding, or project materials.