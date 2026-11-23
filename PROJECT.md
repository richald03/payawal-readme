# PROJECT.md — payawal-readme (John Aldrich C. Payawal Portfolio)

> Give this file to Google Antigravity at the start of every session: "Read PROJECT.md and follow it strictly."

## 1. Goal
Build a one-page personal portfolio website named **payawal-readme** for John Aldrich C. Payawal (Tech Enthusiast, BS Information Technology student, T.I.P. Manila) to present projects, skills, education, work immersion, certifications, and a photo journey to recruiters and clients.

Naming:
- Project folder / repo / npm package name: `payawal-readme`
- Browser tab title: `payawal-readme | John Aldrich C. Payawal`
- Sidebar logo text: `payawal-readme` (README-style or monospace touch is welcome, e.g., `README.md` motif in the hero or footer)
- Target hosting project name: `payawal-readme` (URL depends on availability, e.g., `payawal-readme.vercel.app` or `payawal-readme.pages.dev`)

Design inspiration: a Brando-style one-page layout (fixed left sidebar, split-color hero, details table, filterable portfolio grid). The design must be **recreated from scratch**. Do NOT copy any code, text, images, or assets from the Brando theme or any other portfolio.

## 2. Tech Stack (all free)

| Layer | Choice |
|---|---|
| Framework | React + Vite (JavaScript) |
| Styling | Tailwind CSS |
| Animation | Framer Motion (light use) |
| Icons | lucide-react |
| Fonts | Google Fonts (Poppins or Montserrat for headings, Inter for body, optional mono font for the logo) |
| Contact form (optional) | Formspree free tier, or a plain `mailto:` link |
| Version control | Git + GitHub (repo: `payawal-readme`) |
| Hosting | Cloudflare Pages or Vercel (Hobby) |
| Tooling | Google Antigravity, Node.js LTS, npm, ESLint, Lighthouse |

No backend, database, login, or admin dashboard in version 1. All content lives in `src/data/`.

## 3. Folder Structure
```
payawal-readme/
├── PROJECT.md
├── public/
│   ├── images/
│   │   ├── profile/        # main photo
│   │   ├── projects/       # screenshots per project
│   │   ├── certificates/   # certificate images
│   │   └── journey/        # journey/gallery photos
│   └── docs/               # public resume PDF (no reference phone numbers)
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── MobileNav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── WorkImmersion.jsx
│   │   ├── Portfolio.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Journey.jsx
│   │   ├── Lightbox.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   ├── profile.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── education.js
│   │   ├── certifications.js
│   │   └── journey.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── index.html
```

## 4. Content Rules (strict)
1. Use ONLY the owner's real information from the resume and files provided.
2. Never invent links, metrics, client names, testimonials, dates, captions, or experience.
3. If a link, image, or detail is missing, **hide that element** (no placeholders, no fake URLs).
4. Do not display: date of birth, home address, or character references' names and phone numbers.
5. Mark unverified items with `// TODO: verify`; do not publish unverified claims (e.g., "7 projects built").
6. Do not reuse text, facts, projects, or stats from any reference site.
7. Journey photos: show only photos the owner supplies. No stock photos. Do not publish photos of other people unless the owner confirms they agreed. Remove location metadata (EXIF) before adding.

## 5. Owner Content

### Profile
- Name: John Aldrich C. Payawal
- Site name: payawal-readme
- Role label: Tech Enthusiast
- Location: Manila, Philippines
- Email: aldrichpayawal3@gmail.com
- GitHub: https://github.com/richald03
- LinkedIn: John Aldrich Payawal (add the exact profile URL: `// TODO`)

### Education
- Technological Institute of the Philippines – Quiapo, Manila | BS Information Technology | S.Y. 2023–2027
- AMA Computer Learning Center – Legarda, Manila | Senior High School, ICT Strand | S.Y. 2020–2022

### Work Immersion
- Library Assistant / Records Encoder, AMA Computer Learning Center College of Manila (Senior High School practicum)
- Encoded library book information in Microsoft Excel; organized and updated digital records; maintained accurate records.

### Projects (add screenshots and verified links later)
1. **MATYAG** (Capstone): cross-platform disaster reporting system for T.I.P. Manila CCS students and faculty administrators; sentiment analysis, approximate geolocation, hazard alerts. Stack: React, TypeScript, FastAPI, PostgreSQL.
2. **BrightTrack LMS**: school LMS and student support platform; role-based workflows for classes, attendance, grades, submissions, messaging, wellness monitoring, at-risk detection, interventions. Stack: Django, PostgreSQL, Tailwind CSS, Gemini API, Render; OTP, permissions, audit logging.
3. **PhishSwish**: Android phishing and scam detection app; camera, SMS, and paste scanning. Stack: Java, ML Kit OCR, Gemini, VirusTotal, Firebase authentication, scan history, login lockout.
4. **Android Chatbot**: Java/XML chatbot using Gemini API; asynchronous responses, theme controls, chat state preservation, API error handling.
5. **SeekyFind**: campus lost-and-found application (academic project).
6. **MapaBaha**: flood-focused weather web application (Laravel and React); contributor.
7. **Camera E-commerce Website**: Shopify client project.

Project categories for the filter: All, Capstone, Web, Mobile, Client.

### Skills
- Programming: Python, Java, PHP, JavaScript, TypeScript, SQL
- Web and Mobile: HTML, CSS, Tailwind CSS, Bootstrap, React, Django, Flask, FastAPI, Android Studio, XML; basic Shopify
- Databases: PostgreSQL, MongoDB Atlas, Firebase Firestore, SQLite
- Tools: Git, GitHub, Docker, Render, GitHub Pages, VS Code, Microsoft Excel, REST APIs, Gemini API, Firebase Authentication, ML Kit OCR, Cloudinary, VirusTotal
- Cloud: basic hands-on AWS S3 and EC2

### Certifications
- Responsive Web Design Developer Certification — freeCodeCamp — September 3, 2023
- Prompt Engineering for Claude: Master Anthropic's AI — FreeAcademy.ai — November 23, 2026
- React (Basic) — HackerRank — November 23, 2026
- SQL (Basic) — HackerRank — November 23, 2026

### Events (optional block, can sit inside Journey)
- Current Trends and Issues in Computing, T.I.P. Manila, 2026
- Generative AI Camp, AWS Cloud Club – T.I.P. Manila (Oct 18, 2024)
- T.I.P. TechX Summit 2026 (Oct 15, 2026)
- CEDA AU Mixer, PwC Acceleration Centres (Oct 16, 2026)

### Journey (photo gallery) — owner supplies photos
Data shape in `src/data/journey.js`:
```js
export const journey = [
  // { id, image: "/images/journey/file.webp", title, date, category, caption }
];
```
Categories: All, Events, School, Projects, Milestones.
If the array is empty, hide the entire Journey section and its menu item.

## 6. Design Spec
- Layout: fixed left sidebar (`payawal-readme` logo + vertical menu) on desktop; top bar with hamburger on mobile.
- Menu: About Me, Skills, Education, Work Immersion, Portfolio, Journey, Certifications, Contact.
- Hero: full-height split color-block background (pink / yellow) behind the owner's photo; small "HELLO I'M" line; large bold name; role label "Tech Enthusiast".
- About: photo on a color block, details table (Name, Email, GitHub, Location), black "Download Resume" button.
- Portfolio: category filter list on the left, responsive card grid on the right; click opens ProjectModal (role, features, stack, screenshots, links).
- Journey section:
  - Section label "My Journey" with the red dash marker and a short intro line.
  - Category filter chips (All, Events, School, Projects, Milestones).
  - Grid: 1 column on phone, 2 on tablet, 3 on desktop; images keep aspect ratio, lazy-loaded.
  - Each tile shows title and date on hover (always visible on touch devices).
  - Click opens a Lightbox: large image, caption, date, previous/next, swipe on mobile, arrow keys, Esc to close, focus trapped inside.
  - Optional: vertical timeline toggle sorted by date.
- Footer: "© payawal-readme" with the current year and a back-to-top link.
- Section titles: small uppercase label with a red dash marker.
- Colors (CSS variables / Tailwind theme): `--pink #E91E63`, `--yellow #FFD600`, `--red #E31B3D`, `--ink #111111`, `--bg #FFFFFF`. Dark mode toggle, preference saved in localStorage.
- Typography: bold sans-serif headings, readable body text (min 16px), generous spacing.
- Motion: subtle scroll reveal and hover effects; respect `prefers-reduced-motion`.

## 7. Build Phases (Antigravity: complete one phase, then stop for review)
0. **Startup**: create the `payawal-readme` folder and follow this file.
1. **Setup**: scaffold Vite + React, install Tailwind, create folders, set the site title, commit.
2. **Data and theme**: create the 6 data files from Section 5; define theme tokens and reusable styles; implement theme toggle.
3. **Sidebar and hero**: Sidebar, MobileNav, Hero.
4. **About, Skills, Education, Work Immersion**: one component per prompt.
5. **Portfolio**: filter, ProjectCard, ProjectModal; hide missing links.
6. **Journey**: grid, category filter, Lightbox with keyboard and swipe support.
7. **Certifications, Contact, Footer**.
8. **Polish**: smooth scroll, active-section highlight, accessibility, image optimization, SEO meta (title `payawal-readme | John Aldrich C. Payawal`, description, favicon, social preview).
9. **QA**: run the checklist in Section 9.
10. **Deploy**: push to GitHub repo `payawal-readme`, connect Cloudflare Pages or Vercel (build `npm run build`, output `dist`), name the project `payawal-readme`.

## 8. Coding Standards
- Functional components with hooks; one component per file.
- All content imported from `src/data/`; no hardcoded personal text in components.
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`); one `h1`.
- Accessible: alt text on every image, visible focus states, AA contrast, keyboard-navigable menu, modal, and lightbox.
- Responsive breakpoints: 360, 768, 1280 px; no horizontal scroll.
- Images: WebP or compressed JPG, max about 1600 px wide, lazy-loaded.
- No secrets or API keys in the repo. No unused dependencies.
- Small commits with clear messages after each working step.

## 9. Definition of Done
- [ ] Site named `payawal-readme` in folder, package.json, title, logo, and footer
- [ ] All sections present and match the design spec
- [ ] Every fact matches the resume; no invented content
- [ ] No reference phone numbers, DOB, or address on the site
- [ ] Missing links/images are hidden, not faked; empty Journey hides itself
- [ ] Journey filter and Lightbox work with mouse, keyboard, and touch
- [ ] Works at 360 / 768 / 1280 px; mobile menu works
- [ ] Theme toggle works and persists
- [ ] `npm run build` passes with no errors
- [ ] Lighthouse: no red scores
- [ ] No text, code, or images copied from Brando or other sites
- [ ] Deployed; live URL tested (links, resume, gallery, mobile)

## 10. Prompt Template for Each Step
```
Read PROJECT.md. Current phase: <number and name>.
Build only: <component/feature>.
Use data from src/data/. Do not invent content. Hide missing elements.
Do not change other files unless necessary. Explain what you changed.
Stop when done so I can review.
```
