# Sweta Patil — Next.js Portfolio

A dark, responsive portfolio starter built with Next.js App Router, React, TypeScript and custom CSS.

## Run locally

1. Install Node.js 20.9+.
2. Open this folder in VS Code / terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Before publishing — personalize these items

- Replace `YOUR_EMAIL@example.com` in `src/components/portfolio.tsx` with your professional email.
- Replace the LinkedIn placeholder URL with your actual profile URL.
- Add your verified employer names, job titles, dates and achievements in the `experience` array.
- Add your resume PDF to `public/` and add a Resume link if desired.
- Verify the project URLs and descriptions. MediBook is identified as in development.
- Add real project screenshots in `public/` and replace the CSS mock project artwork when available.

## Deployment

The project is configured with `output: 'export'` for static hosting. For Vercel, import the GitHub repository, use `npm run build`, and deploy. For GitHub Pages, publish the generated `out/` folder using a GitHub Actions workflow and configure the correct base path if deploying under a repository subpath.
