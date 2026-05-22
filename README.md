# أتيليه مصر — Atelier Masr

The website for Atelier Masr, a web design studio in Cairo. Built with
[Astro](https://astro.build) — a static site that ships almost no JavaScript,
loads fast on phones, and deploys free.

- **Arabic-first**, right-to-left by default, with an Arabic ⇄ English toggle
  on every page (the choice is remembered between pages).
- Pages: **Home** (`/`), **Work** (`/work`), **About** (`/about`),
  **Contact** (`/contact`).
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

## (b) Adding a new Work / portfolio project

Everything lives in **one file**: `src/data/projects.ts`.

1. Open `src/data/projects.ts`.
2. Copy an existing `{ ... }` block inside the `projects` array.
3. Paste it at the **top** of the array (newest projects show first).
4. Edit the fields:

   | Field        | What it is                                                        |
   |--------------|-------------------------------------------------------------------|
   | `slug`       | A short unique id, lowercase-with-dashes. Used internally.        |
   | `titleAr` / `titleEn` | Project title, Arabic and English.                       |
   | `descAr` / `descEn`   | One or two sentences, Arabic and English.                |
   | `tagAr` / `tagEn`     | Small label, e.g. `مطعم · موقع` / `Restaurant · Website`. |
   | `image`      | *Optional.* See below. Omit it to show a letter monogram instead. |
   | `url`        | *Optional.* A live link to the project.                           |
   | `monogram`   | The letter shown when there is no image (e.g. `'ر'`).             |

5. **To add a project image:** drop the image file into the `public/work/`
   folder (create the folder if it isn't there), then set
   `image: '/work/your-file.jpg'`. Use a wide image (around 1200×825).

Save the file — the Work page updates automatically. That's it.

---

## (c) Deploying free, with your own domain later

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
   your real address (e.g. `https://ateliermasr.com`), then redeploy.

HTTPS is added automatically and free on both hosts.

---

## Project structure

```
src/
  data/        projects.ts (Work), site.ts (contact info), nav.ts (menu)
  components/  Header, Footer, FloatWhatsApp, Bilingual, ProjectCard, WhatsAppIcon
  layouts/     Base.astro — shared <head>, header, footer, fonts
  pages/       index / work / about / contact  → routes / /work /about /contact
  scripts/     site.js — language toggle, WhatsApp prefill, scroll reveal
  styles/      global.css — all brand tokens and styles
```

### Editing common things

- **Contact details** (phone, email, Instagram): `src/data/site.ts`.
- **WhatsApp prefilled message**: the `MSG` object in `src/scripts/site.js`.
- **Colours, fonts, spacing**: the `:root` block at the top of
  `src/styles/global.css`.
- **Menu links**: `src/data/nav.ts`.
