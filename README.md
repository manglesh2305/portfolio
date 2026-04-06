# Modern Portfolio (React + Tailwind + Node.js)

Production-ready, responsive personal portfolio with dark glassmorphism UI, animated sections and backend contact endpoint.

## Features

- Modern React + Vite + Tailwind setup
- Dark theme with light mode toggle
- Sticky navbar + scroll progress indicator
- Smooth scroll navigation
- Hero, About, Skills, Projects, Experience, Certifications, Blog placeholder, Contact
- Project filtering and modal details
- Animated skills bars and section transitions (Framer Motion)
- Contact form posting to Node.js
- Social links, resume button, SEO meta tags
- Lazy loading of images

## Frontend setup

1. Install Node.js (>=18) and npm.
2. `cd frontend`
3. `npm install`
4. `npm run dev` (http://localhost:5173)

### Build

- `npm run build`
- `npm run preview`

## Backend setup

1. Install Node.js (>=18) and npm.
2. `cd backend`
3. `npm install`
4. `npm run dev` (development with auto-reload) or `npm start` (production)

Endpoints:
- `GET /health`
- `POST /contact` (JSON: `{name,email,message}`)

## How it works

- The frontend proxies `/api` to `http://localhost:8000` in `vite.config.js`.
- Contact messages are persisted to `backend/messages.json`.

## Deployment

### Vercel (frontend only)

1. Add project, connect Git repository.
2. Root directory: `frontend`.
3. Install commands: `npm ci`.
4. Build command: `npm run build`.
5. Output directory: `dist`.

### Render (backend)

1. Create Node.js service.
2. Start command: `node server.js`
3. Set environment and enable CORS from frontend domain.

## Notes

- Add a real `resume.pdf` under `frontend/public` for `Resume` download.
- Replace placeholder social links and personal details in `src/data.js` and `src/App.jsx`.

---

Enjoy your modern portfolio!
