# Navya Bagga — Netflix-Themed Portfolio

A Netflix-inspired personal portfolio for **Navya Bagga, AI Python Developer** at Tata Consultancy Services. Built with React + TypeScript, it mimics the Netflix UI with profile selection, animated cards, and dedicated pages for skills, experience, projects, and more.

---

## Deployed URL

https://navyabagga.github.io/Portfolio/

---

## Profiles

On the browse screen you pick who's watching — each profile opens the same portfolio content:

| Profile | Description |
|---|---|
| **Recruiter** | Full view — Top Picks + Continue Watching (projects) |
| **Developer** | Full view — Top Picks + Continue Watching (projects) |
| **Adventurer** | Top Picks only (no Continue Watching) |
| **Stalker** | Top Picks only (no Continue Watching) |

---

## Pages

- **Skills** — categorised skill cards (AI Concepts, AI Frameworks, Backend, Cloud, Technical Skills, Soft Skills) with animated letter reveal
- **Work Experience** — timeline of education and work (TCS)
- **Projects** — HR Policy Bot, OneOrder, Lung Cancer Detection with modal popups
- **Hobbies** — Listening to Songs, Reading, Badminton, Painting, Travelling, Adventure Sports, Gym
- **Contact Me** — profile photo, contact details, LinkedIn
- **Blogs** — blogs section (coming soon / placeholder)
- **Certifications** — currently commented out from navigation

---

## Tech Stack

- **React 18** + **TypeScript** (Create React App)
- **React Router v6** — client-side routing with scroll reset on navigation
- **CSS animations** — Netflix-style zoom intro, fade-in cards, letter-reveal on skills
- **React Icons** — icon set across all pages
- **Static local data** — all content in `src/data/localProfile.ts`, no CMS dependency

---

## Getting Started

```bash
# Requires Node 18+
nvm install 18
nvm use 18

# Install dependencies
npm install

# Start dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── data/
│   └── localProfile.ts        # All portfolio content (projects, skills, timeline)
├── images/                    # Local image assets
├── pages/
│   ├── Skills.tsx
│   ├── WorkExperience.tsx
│   ├── Projects.tsx
│   ├── Hobbies.tsx
│   ├── ContactMe.tsx
│   ├── Blogs.tsx
│   └── Certifications.tsx
├── profilePage/
│   ├── profilePage.tsx        # Profile routing + layout
│   ├── ProfileBanner.tsx      # Hero banner with resume/LinkedIn links
│   ├── TopPicksRow.tsx        # Navigation cards row
│   └── ContinueWatching.tsx   # Projects row (recruiter/developer only)
├── browse/
│   └── browse.tsx             # Profile selection screen
├── NetflixTitle.tsx           # Intro animation + sound
├── Layout.tsx                 # Navbar + scroll-to-top wrapper
└── App.tsx                    # Route definitions
```

---

## Contact

- **Email:** navyabagga34@gmail.com
- **LinkedIn:** [navya-bagga-899848338](https://www.linkedin.com/in/navya-bagga-899848338/)
- **Resume:** [View on Google Drive](https://drive.google.com/file/d/1tALSq0ONKiUDM_5KA2sbfzCzjvKCKxjL/view?usp=drivesdk)
- **GitHub:** [navyabagga](https://github.com/navyabagga)
