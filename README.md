# Unique Creations Family Salon — Website

A premium, animated, fully responsive salon website built for **Unique Creations Family Salon**, Bhopal.

## Tech Stack

- **React 19 + Vite** — fast dev/build tooling
- **Tailwind CSS 3** — utility-first styling with a custom luxury design system
- **Framer Motion** — scroll-triggered, hover, and page-load animations
- **React Router** — client-side routing (Home + 404)
- **Lucide React** — icon set

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview   # serve the production build locally to check it
```

## Project Structure

```
src/
  components/
    layout/        Navbar, Footer
    sections/       Hero, About, Services, WhyChooseUs, Gallery,
                     Testimonials, Offers, Contact, ContactForm
    ui/             Reusable primitives: Button, SectionHeading, GoldStroke
                     (signature animated underline), LazyImage, Lightbox,
                     LoadingScreen, ScrollProgressBar, BackToTop,
                     WhatsAppFloat, StickyMobileCTA
  data/
    siteData.js     All business info & content in one place — edit here
                     to update services, gallery images, testimonials, etc.
  hooks/
    useScrollProgress.js
    useLockBodyScroll.js
    useSEO.js        Lightweight head-tag manager (no extra dependency)
  pages/
    Home.jsx
    NotFound.jsx
  App.jsx            Router + global chrome (navbar, footer, floating UI)
  main.jsx
  index.css           Tailwind directives + global styles/utilities
```

## Editing Business Content

Almost everything — address, phone, Instagram handle, services, gallery
images, testimonials, offers, business hours — lives in
**`src/data/siteData.js`**. Update that file and the whole site updates.

Gallery and service images currently point to royalty-free Unsplash URLs.
Swap in your own photos by replacing the `src` values in `siteData.js`
(or the inline image in `Hero.jsx` / `About.jsx`).

## Design System

| Token | Value |
|---|---|
| Primary (Ink) | `#0D0D0D` |
| Secondary (Gold) | `#D4AF37` |
| Accent (Rose Gold) | `#E8B4B8` |
| Background (Ivory) | `#FDF8F3` |
| Text (Charcoal) | `#1E1E1E` |
| Headings | Playfair Display |
| Body | Poppins |

All tokens are defined in `tailwind.config.js` under `theme.extend`.

## Notable Features

- Animated loading screen on first load
- Scroll progress bar + back-to-top button
- Sticky glassmorphism navbar with mobile slide-in menu
- Parallax hero with floating animated badges
- Masonry gallery with category filters and a keyboard-friendly lightbox
- Interactive testimonial carousel
- Contact form with inline validation (client-side; wire up your own
  backend/email service in `ContactForm.jsx`'s `handleSubmit` to receive
  submissions)
- Floating WhatsApp button + sticky mobile call/book bar
- Local-business structured data (`schema.org/BeautySalon`) and Open Graph
  tags in `index.html` for SEO
- Respects `prefers-reduced-motion`
- Visible keyboard focus states throughout

## Connecting the Contact Form

The form currently validates and shows a success state, but does not send
data anywhere. To make it functional, send the form values to:
- An email service (e.g. Resend, EmailJS), or
- A simple backend endpoint / serverless function, or
- A form service (e.g. Formspree)

Look for the `handleSubmit` function in
`src/components/sections/ContactForm.jsx`.

## Updating the Google Map

The map in the Contact section uses a query-based embed (no API key
needed). For a pinned, exact-address embed, replace the `iframe src` in
`src/components/sections/Contact.jsx` with an embed URL generated from
Google Maps → Share → Embed a map.
