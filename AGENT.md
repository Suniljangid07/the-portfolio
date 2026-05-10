# AGENT.md — Portfolio 3D Redesign Agent

## Purpose

This file tells Claude Code how to autonomously execute the full 3D portfolio redesign for Sunil Jangid's website. Read `PROMPT.md` for the complete design spec. Read `claude.md` for overall project principles. This file defines the execution strategy.

---

## Mission

Transform suniljangid.vercel.app from its current layout into a full 3D immersive portfolio inspired by aniketj.dev — while keeping the existing background animation completely intact.

---

## Pre-Flight Checklist

Before touching any code, the agent must:

1. **Map the codebase** — run `find . -type f -name "*.tsx" -o -name "*.ts" -o -name "*.css" | head -60` to understand the full file tree
2. **Identify the background animation** — find the canvas/particle component. Note its filename and all props. **Never edit this file.**
3. **Read `globals.css`** — understand existing CSS variables before adding new ones
4. **Read `page.tsx`** — understand how sections are assembled
5. **Check `package.json`** — note current dependencies before installing anything new

---

## Execution Plan (Ordered Steps)

### Step 0 — Audit
```bash
cat package.json
find . -type f -name "*.tsx" | sort
find . -type f -name "*.css" | sort
cat src/app/globals.css
cat src/app/page.tsx
```

### Step 1 — Install Dependencies
```bash
npm install framer-motion react-intersection-observer
```
If framer-motion is already installed, skip. Never downgrade existing packages.

### Step 2 — Update globals.css
Add to the existing globals.css (don't replace — append):
- New CSS custom properties for 3D dark theme
- `.card-3d` base class
- `.reveal` / `.reveal.visible` animation classes
- `.glass` surface class
- `.glow-*` utility classes
- `@keyframes` for typing cursor, pulse, shimmer
- Scrollbar styling (dark, thin, cyan thumb)

### Step 3 — Create Reusable UI Primitives
Create these in `src/components/ui/` (or equivalent path):
- `Card3D.tsx` — wrapper with mouse-tracking 3D tilt + glow
- `SectionReveal.tsx` — Intersection Observer reveal wrapper
- `TechBadge.tsx` — colored pill badge for tech tags
- `TerminalBlock.tsx` — monospace terminal-style display block
- `CountUp.tsx` — animated number that counts up when in view
- `GlowButton.tsx` — primary/secondary CTA button variants

### Step 4 — Create Hooks
- `src/hooks/use3DTilt.ts` — mouse position → rotateX/rotateY calc
- `src/hooks/useScrollReveal.ts` — Intersection Observer hook
- `src/hooks/useCountUp.ts` — requestAnimationFrame count-up

### Step 5 — Create Data Files
Extract all content from `PROMPT.md` into typed data files:
- `src/data/projects.ts` — 11 projects with title, description, tags, featured flag
- `src/data/skills.ts` — 5 skill clusters with names, tags, color accent
- `src/data/experience.ts` — 3 roles with dates, bullets, company color
- `src/data/content.ts` — hero copy, about chapters, architecture layers, contact info

### Step 6 — Redesign Navbar
Replace existing navbar with floating glassmorphism pill:
- Fixed top, centered, `backdrop-filter: blur(20px)`
- Smooth scroll to sections
- Active section highlight (Intersection Observer)
- Mobile hamburger → full-screen overlay menu

### Step 7 — Redesign Hero Section
Replace existing hero with:
- Left: Display name + animated rotating role text + description + CTAs
- Right: Floating 3D terminal card (typed-out lines with blinking cursor)
- Below: Animated stats row (count-up numbers)
- Keep existing background animation in the same z-layer

### Step 8 — Redesign About Section
- Left: Terminal identity block
- Right: 3 numbered chapter cards with 3D hover effect
- Engineering thesis statements at bottom
- Staggered scroll reveal

### Step 9 — Redesign Skills Section
- 5 skill cluster cards in grid
- Each card: icon, category, tech pill tags, category-specific glow color
- Scrolling tech ticker row (CSS marquee)
- 3D hover on each card

### Step 10 — Redesign Projects Section
- Bento grid layout
- First 2 projects: featured large cards (full-width)
- Rest: 3-column grid
- Each: glass card, title, description, tech tags, hover 3D lift

### Step 11 — Redesign Experience Section
- Vertical glowing timeline (animated SVG line)
- Cards float to the side of timeline
- Animated dots that appear on scroll
- CURRENT badge with pulsing green dot for Invira Health

### Step 12 — Redesign Architecture Section
- 3 layer cards (glass, 3D, colored borders)
- Flow diagram: 4 stages with animated connectors
- Sequential reveal animation (each stage lights up after previous)
- Design thesis blockquotes

### Step 13 — Redesign GitHub Section
- Client-side fetch from `https://api.github.com/users/Suniljangid07/repos`
- 3-column grid of glass repo cards
- Graceful loading state + fallback if rate-limited

### Step 14 — Redesign Contact Section
- Two-column: copy + social links left, form right
- Glowing input focus states
- Form submit handler (connect to existing if available)

### Step 15 — Redesign Footer
- 3-column layout
- Gradient top border
- Social links with hover glow

### Step 16 — Assemble in page.tsx
Wire all sections together. Ensure:
- Background animation component is rendered at the correct layer (behind all content)
- Section IDs match nav links
- Scroll behavior is smooth (`html { scroll-behavior: smooth }`)

### Step 17 — QA Pass
```bash
npm run build
npm run lint
```
Fix all errors. Check for:
- Missing `key` props in lists
- Untyped `any` (add proper types)
- Missing alt text on images
- Accessibility: all interactive elements have aria labels

---

## Rules the Agent Must Follow

### 🔴 NEVER
- Edit, rename, or move the background animation component/file
- Change the background animation's props or parent container styles
- Remove existing functionality (GitHub fetch, contact form logic)
- Use `!important` unless absolutely necessary
- Install Three.js, GSAP, or other large 3D libraries — use CSS 3D transforms

### 🟡 BE CAREFUL
- When editing `globals.css` — append, don't replace existing rules
- When editing `layout.tsx` — preserve existing metadata and font loading
- When adding Tailwind classes — ensure they don't conflict with existing ones
- When adding `perspective` transforms — test that they don't clip content

### 🟢 ALWAYS
- Use TypeScript interfaces for all data shapes
- Add `'use client'` directive to components with hooks/event handlers
- Use `React.memo` for static list items (tech badges, project cards)
- Respect the content in `PROMPT.md` — all 11 projects, all 3 roles, all 5 skill clusters must appear
- Make all 3D effects opt-out-able via `@media (prefers-reduced-motion: reduce)`

---

## 3D Effect Implementation Reference

### Card 3D Tilt (use3DTilt hook)
```typescript
// src/hooks/use3DTilt.ts
import { useRef, useCallback } from 'react'

export function use3DTilt(maxDeg = 12) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    ref.current.style.transform = 
      `perspective(1000px) rotateY(${x * maxDeg}deg) rotateX(${-y * maxDeg}deg) translateZ(10px)`
  }, [maxDeg])

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
  }, [])

  return { ref, handleMouseMove, handleMouseLeave }
}
```

### Count-Up Hook
```typescript
// src/hooks/useCountUp.ts
import { useState, useEffect, useRef } from 'react'

export function useCountUp(target: number, duration = 1500, inView = false) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return count
}
```

### Glass Card CSS
```css
.glass-card {
  background: rgba(15, 15, 25, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
}

.glass-card-accent-cyan {
  border-top: 2px solid rgba(0, 212, 255, 0.5);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.05);
}

.glass-card-accent-cyan:hover {
  border-top-color: rgba(0, 212, 255, 0.9);
  box-shadow: 0 20px 60px rgba(0, 212, 255, 0.15);
}
```

### Typing Animation CSS
```css
@keyframes typing-cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.cursor {
  display: inline-block;
  width: 8px;
  height: 1.2em;
  background: #00d4ff;
  vertical-align: text-bottom;
  animation: typing-cursor 1s step-end infinite;
}
```

### Scroll Reveal CSS
```css
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

---

## Error Recovery

If `npm run build` fails:
1. Read the full error output
2. Fix TypeScript errors first (they cascade)
3. Then fix import errors
4. Then fix runtime errors
5. Never comment out code to suppress errors — fix them properly

If a section looks broken visually:
1. Check that the parent has `position: relative` if children use `position: absolute`
2. Check z-index stacking (background animation should be z-0, content z-10+)
3. Check that `overflow: hidden` isn't clipping 3D transforms (use `overflow: visible` on transform containers)

---

## Completion Signal

The task is complete when:
1. `npm run build` exits with code 0
2. `npm run lint` exits with 0 errors
3. All 15 redesign steps above are checked off
4. The background animation is verified unchanged
5. All content from PROMPT.md is present in the redesigned site
