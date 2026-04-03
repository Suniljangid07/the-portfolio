# The Portfolio

An immersive portfolio for Sunil Jangid built with Next.js, React, Tailwind CSS, Framer Motion, and React Three Fiber.

This project is designed as a futuristic, high-polish developer portfolio that presents engineering depth through interactive storytelling, 3D motion, system design framing, and project-led case studies.

## Overview

The experience is structured as a single-page journey where scroll movement, motion design, layered gradients, glass panels, and a fixed 3D scene work together to create a premium product feel.

The portfolio highlights:

- founding-engineer level product ownership
- AI-first and integration-heavy systems
- multi-tenant platform architecture
- workflow automation and realtime product thinking
- polished frontend execution backed by strong backend fundamentals

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js
- React Three Fiber
- React Three Drei

## Key Sections

- Hero: editorial landing section with system-focused positioning
- About: structured journey from PLC engineering to founding engineer ownership
- Skills: capability clusters across frontend, backend, cloud, integrations, and engineering principles
- Selected Work: detailed case-study cards with expanded modal content
- Experience: timeline with role, location, and date ranges
- Architecture: productized system-design showcase with layers and flow stages
- GitHub + Work: public repo surface with graceful fallback data
- Contact + Footer: conversion-ready close with social links and final positioning

## Project Structure

```text
app/
components/
  portfolio/
  ui/
lib/
sections/
public/
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Run lint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Customization

Most content is managed from:

- `lib/data.ts` for portfolio content, skills, projects, experience, architecture, and hero data

Main section implementations live in:

- `sections/hero-section.tsx`
- `sections/about-section.tsx`
- `sections/skills-section.tsx`
- `sections/projects-section.tsx`
- `sections/experience-section.tsx`
- `sections/architecture-section.tsx`
- `sections/github-section.tsx`
- `sections/contact-section.tsx`
- `sections/footer-section.tsx`

Global styling is defined in:

- `app/globals.css`

The 3D background scene is implemented in:

- `components/portfolio/scene-canvas.tsx`

## Notes

- GitHub repositories are fetched client-side and fall back to curated static data if the API is unavailable or rate-limited.
- The project is intentionally data-driven so content changes can be made without redesigning the section components.
- The design system uses gradients, glassmorphism, and neon-accented dark visuals to keep the experience visually distinctive.

## Author

Sunil Jangid  
Founding Software Engineer

- LinkedIn: https://www.linkedin.com/in/suniljangid07/
- GitHub: https://github.com/Suniljangid07
