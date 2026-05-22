# أتيليه مصر — Atelier Egypt

The website for Atelier Egypt, a web design studio in Cairo. Built with
[Astro](https://astro.build) — a static site that ships almost no JavaScript,
loads fast on phones, and deploys free.

- **Arabic-first**, right-to-left by default, with an Arabic ⇄ English toggle
  on every page (the choice is remembered between pages).
- Pages: **Home** (`/`), **About** (`/about`), **Contact** (`/contact`),
  **Start a project** (`/start`).
- `atelier-masr.reference.html` in this folder is the original design — kept
  as the visual source of truth. It is **not** part of the built site.

---

## (a) Running it locally

You need [Node.js](https://nodejs.org) 18 or newer (you have it if
`node --version` prints a number).

```bash
# 1. install dependencies — run once, the first time
npm install

# 2. start the dev server
npm run dev
```

Then open the address it prints — usually **http://localhost:4321**.
The site reloads automatically as you edit files.

To preview the real production build:

```bash
npm run build      # outputs the finished site into  dist/
npm run preview    # serves dist/ exactly as it will be deployed
```

---

## (b) Deploying free, with your own domain later

The site builds to plain static files, so any free static host works.
Two good options:

### Option 1 — Netlify

1. Push this folder to a GitHub repository.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an
   existing project** → pick your GitHub repo.
3. Netlify reads `netlify.toml` automatically:
   build command `npm run build`, publish directory `dist`. Click **Deploy**.
4. You get a free `*.netlify.app` address straight away.

### Option 2 — Cloudflare Pages

1. Push this folder to GitHub.
2. Go to the Cloudflare dashboard → **Workers & Pages** → **Create** →
   **Pages** → **Connect to Git**.
3. Set **Build command** to `npm run build` and **Build output directory**
   to `dist`. Deploy.

### Connecting your own domain (when you buy one)

1. Buy a domain (Namecheap, GoDaddy, Cloudflare Registrar, etc.).
2. In Netlify: **Domain settings → Add a custom domain**. In Cloudflare
   Pages: **Custom domains → Set up a domain**. Each shows the exact DNS
   records to add.
3. After the domain is connected, open `astro.config.mjs` and set `site` to
   your real address (e.g. `https://atelier-egypt.com`), then redeploy.

HTTPS is added automatically and free on both hosts.

---

## Project structure

```
src/
  data/        site.ts (contact info + Web3Forms key), nav.ts (menu)
  components/  Header, Footer, FloatWhatsApp, Bilingual, WhatsAppIcon
  layouts/     Base.astro — shared <head>, header, footer, fonts
  pages/       index / about / contact / start  → routes / /about /contact /start
  scripts/     site.js — language toggle, WhatsApp prefill, scroll reveal
  styles/      global.css — all brand tokens and styles
```

### Editing common things

- **Contact details** (phone, email, Instagram): `src/data/site.ts`.
- **Web3Forms access key** (for the Start-a-project form): `src/data/site.ts`.
- **WhatsApp prefilled message**: the `MSG` object in `src/scripts/site.js`.
- **Colours, fonts, spacing**: the `:root` block at the top of
  `src/styles/global.css`.
- **Menu links**: `src/data/nav.ts`.
