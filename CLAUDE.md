# claude.md — Project Principles & Claude Code Behavior Guide

This file defines how Claude Code should reason, prioritize, and behave throughout this project.

---

## Project Identity

**What this is**: A 3D redesign of Sunil Jangid's portfolio (suniljangid.vercel.app), transforming the content rendering, section layouts, and visual style into a full immersive 3D dark-theme experience inspired by aniketj.dev.

**What this is NOT**: A content rewrite. All biographical information, project names, descriptions, company names, dates, and copy come from the original site. Do not invent content.

---

## The Single Most Important Rule

> **The background animation is sacred. Do not touch it.**

Find it. Read it. Note its filename. Note how it is mounted. Then build everything else around it without modifying it. The background animation is what makes this portfolio unique and is the owner's primary creative signature.

If you are unsure whether a change affects the background animation, **don't make the change**. Ask first.

---

## How to Read the Project Files

| File | Purpose |
|------|---------|
| `PROMPT.md` | The full design specification — what to build, how each section should look, the color system, motion system, and content inventory |
| `AGENT.md` | The execution playbook — ordered steps, rules, error recovery, completion criteria |
| `CODEX.md` | Code reference — CSS tokens, TypeScript schemas, component templates, data files |
| `claude.md` | This file — reasoning principles, behavior rules, decision heuristics |

Read all four before writing a single line of code.

---

## Decision Hierarchy

When making any decision, ask in this order:

1. **Will this break the background animation?** → If yes or maybe: don't do it.
2. **Does PROMPT.md specify how to handle this?** → If yes: follow it exactly.
3. **Does CODEX.md have a pattern for this?** → If yes: use it (don't reinvent).
4. **Does AGENT.md specify this step?** → If yes: follow the step.
5. **Is this a stylistic judgment call?** → Default to: more 3D, more glass, more dark, more monospace.

---

## Content Fidelity Rules

- **All 11 projects** from PROMPT.md must appear in the Projects section
- **All 5 skill clusters** must appear with all their tags
- **All 3 experience roles** must appear with correct dates and bullet points
- **All 4 architecture stages** must appear in the Architecture section
- **All contact info** (email, LinkedIn, GitHub) must be correct
- **Hero copy** ("builds systems that feel clear, fast, and inevitable.") must appear verbatim
- Do **not** add, invent, or embellish any professional claims

---

## Style Rules

### Dark theme always
Every surface uses dark backgrounds. No light sections. No white backgrounds anywhere on the page.

### Glass over solid
Prefer `backdrop-filter: blur()` glass surfaces over opaque ones for cards. Exception: the terminal block, which should be near-black (`rgba(5,5,8,0.95)`).

### Monospace for labels
All section labels, tech tags, terminal content, dates, and status indicators use `--font-mono`. Display headings use `--font-display`. Body copy uses `--font-body`.

### 3D is the default
Every card, panel, or interactive element should have 3D hover behavior unless it's inline text. Use `use3DTilt` hook or the CSS `.card-3d` pattern from CODEX.md.

### Cyan is the primary accent
When in doubt about which accent color to use, use cyan (`#00d4ff`). Blue, purple, green, and orange are secondary accents for skill categories and company colors.

---

## Code Quality Standards

### TypeScript
- All data has typed interfaces (see CODEX.md schemas)
- No `any` types — use `unknown` and narrow, or define proper types
- Props interfaces for every component

### React
- `'use client'` on every component that uses hooks or event handlers
- `React.memo()` on list item components that receive primitive props
- Keys must be stable (use IDs, not array indices for dynamic lists)

### Performance
- Images: use `next/image` with proper `width`, `height`, `alt`
- Fonts: use `next/font/google` (already in layout.tsx)
- Animations: use `will-change: transform` on 3D card elements
- Intersection Observer: clean up in `useEffect` return

### Accessibility
- All `<a>` elements have descriptive text or `aria-label`
- All interactive elements are keyboard reachable
- All images have `alt` text
- Color is not the only signal (use text labels alongside colored dots)
- `@media (prefers-reduced-motion: reduce)` disables all animation

---

## What to Do When Stuck

### If a component breaks the build
1. Read the full TypeScript error message
2. Check that `'use client'` is present if the component uses hooks
3. Check that all imports are correct (especially from local paths)
4. Check that all required props are passed

### If a visual doesn't look right
1. Check z-index (background animation at z-0, content at z-10+)
2. Check `overflow: hidden` on parents — it clips 3D transforms; use `overflow: visible`
3. Check `perspective` is on the parent, not the element itself (or use the inline style approach in Card3D)
4. Check that `backdrop-filter` is supported (add `-webkit-backdrop-filter` too)

### If the animation feels wrong
- Entrance animations: use `cubic-bezier(0.16, 1, 0.3, 1)` (spring-like easeOut)
- 3D hover: use `cubic-bezier(0.23, 1, 0.32, 1)` (slightly stiffer spring)
- Number counters: use `easeOutCubic`: `1 - Math.pow(1 - progress, 3)`

### If GitHub API rate-limits
The fetch will fail silently. The component shows `fallbackRepos` from `src/data/githubFallback.ts` instead. Never throw errors to the user for the GitHub section.

---

## Execution Mindset

**Think like a senior frontend engineer doing a design-engineering handoff.**

You have a complete spec (PROMPT.md), a full component library blueprint (CODEX.md), and a step-by-step execution plan (AGENT.md). Your job is to faithfully implement the spec with high craft, not to second-guess the design direction.

The owner chose the 3D dark aesthetic deliberately. Honor that choice in every decision.

**Ship in layers**: Get the structure right first (all sections present, all content correct), then polish the 3D effects, then fine-tune animations. Don't get lost perfecting one section while others are missing.

**Verify before committing each step**: After each major step in AGENT.md, run the dev server mentally and confirm the step is complete before moving on.

---

## Final Checklist (run before marking done)

```
Content:
☐ All 11 projects present with correct names, descriptions, tags
☐ All 5 skill clusters present with all tech tags  
☐ All 3 experience roles present with correct dates/bullets
☐ All 4 architecture stages present
☐ Hero copy accurate
☐ Contact info accurate (email, LinkedIn, GitHub URLs)

Visual:
☐ Background animation renders correctly, unchanged
☐ Dark theme throughout (no light sections)
☐ Glass surfaces have backdrop-filter blur
☐ 3D hover works on: project cards, skill cards, experience cards
☐ Monospace font renders for: labels, tags, terminal, dates
☐ Cyan accent consistent throughout

Motion:
☐ Hero terminal types out on load
☐ Section reveals trigger on scroll
☐ Number counters animate on scroll-into-view
☐ 3D tilt responds to mouse position

Code quality:
☐ npm run build passes
☐ npm run lint passes  
☐ No console errors
☐ No missing key props
☐ All interactive elements have proper labels

Responsive:
☐ Mobile: sections stack, 3D effects disabled
☐ Tablet: 2-column grids
☐ Desktop: full layout
☐ Nav: hamburger on mobile works
```
