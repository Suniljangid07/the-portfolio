# CODEX.md — Implementation Reference & Code Patterns

All reusable patterns, component templates, CSS systems, and data schemas for the 3D portfolio redesign.

---

## 1. CSS Design System

### globals.css additions (append to existing file)

```css
/* ============================================
   3D PORTFOLIO — DESIGN TOKENS
   ============================================ */

:root {
  /* Colors */
  --bg-primary: #050508;
  --bg-secondary: #0a0a12;
  --bg-card: rgba(15, 15, 25, 0.8);
  --bg-card-hover: rgba(20, 20, 35, 0.9);

  /* Accents */
  --accent-cyan: #00d4ff;
  --accent-blue: #4f8ef7;
  --accent-purple: #7c3aed;
  --accent-green: #00ff88;
  --accent-orange: #ff6b35;

  /* Text */
  --text-primary: #f0f0f8;
  --text-secondary: #8888aa;
  --text-muted: #44445a;
  --text-code: #00d4ff;

  /* Borders */
  --border-glass: rgba(255, 255, 255, 0.06);
  --border-glass-hover: rgba(255, 255, 255, 0.12);
  --border-cyan: rgba(0, 212, 255, 0.3);
  --border-cyan-hover: rgba(0, 212, 255, 0.8);

  /* Glows */
  --glow-cyan: 0 0 30px rgba(0, 212, 255, 0.15);
  --glow-cyan-strong: 0 20px 60px rgba(0, 212, 255, 0.2);
  --glow-blue: 0 20px 60px rgba(79, 142, 247, 0.2);
  --glow-purple: 0 20px 60px rgba(124, 58, 237, 0.2);

  /* Typography */
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --section-padding: 120px 0;
  --section-padding-mobile: 80px 0;
  --card-radius: 16px;
  --card-radius-lg: 24px;
}

/* ============================================
   GLASS SURFACE SYSTEM
   ============================================ */

.glass {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-glass);
  border-radius: var(--card-radius);
}

.glass-hover {
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.glass-hover:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-glass-hover);
}

/* Accent border variants */
.glass-cyan  { border-top: 2px solid rgba(0, 212, 255, 0.4); }
.glass-blue  { border-top: 2px solid rgba(79, 142, 247, 0.4); }
.glass-purple{ border-top: 2px solid rgba(124, 58, 237, 0.4); }
.glass-green { border-top: 2px solid rgba(0, 255, 136, 0.4); }
.glass-orange{ border-top: 2px solid rgba(255, 107, 53, 0.4); }

.glass-cyan:hover   { box-shadow: var(--glow-cyan-strong); border-top-color: rgba(0,212,255,0.9); }
.glass-blue:hover   { box-shadow: var(--glow-blue); border-top-color: rgba(79,142,247,0.9); }
.glass-purple:hover { box-shadow: var(--glow-purple); border-top-color: rgba(124,58,237,0.9); }

/* ============================================
   3D TRANSFORM SYSTEM
   ============================================ */

.card-3d-wrapper {
  perspective: 1000px;
}

.card-3d {
  transform-style: preserve-3d;
  transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
              box-shadow 0.35s ease;
  will-change: transform;
}

/* 3D is handled via JS for precise mouse tracking, but this is the fallback */
.card-3d:hover {
  transform: rotateX(-4deg) rotateY(6deg) translateZ(8px);
}

@media (prefers-reduced-motion: reduce) {
  .card-3d { transition: none; }
  .card-3d:hover { transform: none; }
}

/* ============================================
   SCROLL REVEAL SYSTEM
   ============================================ */

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

/* Stagger delays */
.reveal-delay-1 { transition-delay: 100ms; }
.reveal-delay-2 { transition-delay: 200ms; }
.reveal-delay-3 { transition-delay: 300ms; }
.reveal-delay-4 { transition-delay: 400ms; }
.reveal-delay-5 { transition-delay: 500ms; }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}

/* ============================================
   TYPOGRAPHY SYSTEM
   ============================================ */

.text-display {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.text-mono {
  font-family: var(--font-mono);
  font-size: 0.85em;
}

.text-section-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-cyan);
}

.text-gradient-cyan {
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ============================================
   BUTTON SYSTEM
   ============================================ */

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: var(--accent-cyan);
  color: #050508;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 212, 255, 0.4);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: transparent;
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  border: 1px solid var(--border-glass-hover);
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
  text-decoration: none;
}
.btn-ghost:hover {
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
  transform: translateY(-2px);
}

/* ============================================
   TECH BADGE / TAG SYSTEM
   ============================================ */

.tech-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  border-radius: 6px;
  border: 1px solid;
  white-space: nowrap;
}

.tech-badge-cyan   { color: #00d4ff; border-color: rgba(0,212,255,0.3); background: rgba(0,212,255,0.08); }
.tech-badge-blue   { color: #4f8ef7; border-color: rgba(79,142,247,0.3); background: rgba(79,142,247,0.08); }
.tech-badge-purple { color: #a78bfa; border-color: rgba(124,58,237,0.3); background: rgba(124,58,237,0.08); }
.tech-badge-green  { color: #00ff88; border-color: rgba(0,255,136,0.3); background: rgba(0,255,136,0.08); }
.tech-badge-gray   { color: #8888aa; border-color: rgba(136,136,170,0.3); background: rgba(136,136,170,0.08); }

/* ============================================
   TERMINAL BLOCK SYSTEM
   ============================================ */

.terminal {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  padding: 24px;
  background: rgba(5, 5, 8, 0.95);
  border: 1px solid var(--border-glass);
  border-radius: 12px;
  color: var(--text-secondary);
}

.terminal-header {
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
}

.terminal-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-dot-red    { background: #ff5f57; }
.terminal-dot-yellow { background: #ffbd2e; }
.terminal-dot-green  { background: #28c940; }

.terminal-path {
  color: var(--accent-cyan);
  font-size: 0.8rem;
  margin-bottom: 16px;
}

.terminal-line {
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
  line-height: 1.6;
}

.terminal-key   { color: var(--text-muted); }
.terminal-arrow { color: var(--text-muted); }
.terminal-value { color: var(--text-primary); }
.terminal-value-accent { color: var(--accent-cyan); }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.terminal-cursor {
  display: inline-block;
  width: 8px;
  height: 1.1em;
  background: var(--accent-cyan);
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}

/* ============================================
   TIMELINE SYSTEM
   ============================================ */

.timeline-container {
  position: relative;
  padding-left: 40px;
}

.timeline-line {
  position: absolute;
  left: 16px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple), transparent);
}

.timeline-dot {
  position: absolute;
  left: -31px;
  top: 24px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--accent-cyan);
  background: var(--bg-primary);
}

.timeline-dot.active {
  background: var(--accent-cyan);
  box-shadow: 0 0 0 4px rgba(0, 212, 255, 0.2);
}

/* ============================================
   SCROLLING TICKER
   ============================================ */

.ticker-wrapper {
  overflow: hidden;
  mask: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.ticker-track {
  display: flex;
  gap: 24px;
  width: max-content;
  animation: ticker-scroll 30s linear infinite;
}

.ticker-track:hover {
  animation-play-state: paused;
}

@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ============================================
   SECTION DIVIDERS
   ============================================ */

.section-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, var(--border-glass), transparent);
  margin: 0 auto;
  max-width: 800px;
}

/* ============================================
   GLOW DECORATIONS
   ============================================ */

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
  pointer-events: none;
}

.glow-orb-cyan   { background: var(--accent-cyan); }
.glow-orb-blue   { background: var(--accent-blue); }
.glow-orb-purple { background: var(--accent-purple); }

/* ============================================
   SCROLLBAR
   ============================================ */

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-primary); }
::-webkit-scrollbar-thumb {
  background: linear-gradient(var(--accent-cyan), var(--accent-purple));
  border-radius: 3px;
}

/* ============================================
   LIVE BADGE
   ============================================ */

@keyframes pulse-ring {
  0%   { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}

.live-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 100px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: #00ff88;
}

.live-dot {
  position: relative;
  width: 6px;
  height: 6px;
}
.live-dot::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #00ff88;
}
.live-dot::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  border: 2px solid #00ff88;
  animation: pulse-ring 1.5s ease-out infinite;
}
```

---

## 2. TypeScript Data Schemas

### src/data/projects.ts
```typescript
export interface Project {
  id: string
  title: string
  description: string
  longDesc: string
  tags: string[]
  featured: boolean
  accent: 'cyan' | 'blue' | 'purple' | 'green'
}

export const projects: Project[] = [
  {
    id: 'ai-dental',
    title: 'AI Dental Platform',
    description: 'An AI-first operating layer for dental workflows, reducing manual coordination across patient communication, scheduling, and operational follow-through.',
    longDesc: 'Unified automation, communication, and data flow into one product surface for a faster care-team workflow.',
    tags: ['Next.js', 'Node.js', 'Supabase', 'AI workflows', 'Realtime'],
    featured: true,
    accent: 'cyan',
  },
  {
    id: 'integration-pipelines',
    title: 'Integration Pipelines',
    description: 'Built resilient connectors across Google, Microsoft, WhatsApp/Meta, Open Dental, and NexHealth to synchronize events across fragmented systems.',
    longDesc: 'Turned brittle vendor-specific flows into reusable integration primitives with observability and safer retries.',
    tags: ['OAuth', 'Webhooks', 'API orchestration', 'Event handling', 'Retry systems'],
    featured: true,
    accent: 'blue',
  },
  {
    id: 'realtime-comms',
    title: 'Real-time Communication Systems',
    description: 'Delivered messaging and coordination systems where state changes, alerts, and user interactions needed to remain fast, traceable, and reliable.',
    longDesc: 'Improved responsiveness while keeping event delivery and user context coherent across channels.',
    tags: ['Realtime', 'Notifications', 'State machines', 'WebSockets', 'Queues'],
    featured: false,
    accent: 'green',
  },
  {
    id: 'rls-architecture',
    title: 'Supabase + RLS Architecture',
    description: 'Implemented tenant-aware data models with strong authorization boundaries and developer-friendly data access patterns.',
    longDesc: 'Made secure multi-tenant behavior the default, not an afterthought, while keeping development velocity high.',
    tags: ['Supabase', 'Postgres', 'RLS', 'Policies', 'Type-safe data access'],
    featured: false,
    accent: 'purple',
  },
  {
    id: 'calendar-sync',
    title: 'Google + Microsoft Calendar Sync',
    description: 'Designed synchronization flows between product workflows and external calendar providers so operational schedules stayed accurate across systems.',
    longDesc: 'Reduced calendar drift and made scheduling workflows more dependable for both internal teams and end users.',
    tags: ['Google APIs', 'Microsoft Graph', 'OAuth 2.0', 'Webhooks', 'Node.js'],
    featured: false,
    accent: 'cyan',
  },
  {
    id: 'whatsapp-flows',
    title: 'WhatsApp & Meta Messaging Flows',
    description: 'Built messaging workflows around WhatsApp and Meta APIs to support automated and context-aware communication across customer journeys.',
    longDesc: 'Made outbound and event-triggered communication faster to ship, easier to trace, and more tightly connected to product state.',
    tags: ['Meta APIs', 'WhatsApp', 'Webhooks', 'Automation', 'Templates'],
    featured: false,
    accent: 'blue',
  },
  {
    id: 'admin-platform',
    title: 'Multi-tenant Admin Platform',
    description: 'Created internal and tenant-facing administrative workflows for managing organizations, permissions, operational settings, and product controls.',
    longDesc: 'Made the platform easier to operate at scale while keeping tenant boundaries and role clarity intact.',
    tags: ['Next.js', 'Supabase', 'RLS', 'Admin UX', 'Role-based access'],
    featured: false,
    accent: 'purple',
  },
  {
    id: 'workflow-engine',
    title: 'Workflow Automation Engine',
    description: 'Built reusable trigger-action pipelines for operational automation so teams could orchestrate follow-up, notifications, and system responses.',
    longDesc: 'Turned one-off business logic into reusable automation capabilities that could power multiple product surfaces.',
    tags: ['Node.js', 'Queues', 'Event-driven systems', 'Automation', 'Retries'],
    featured: false,
    accent: 'green',
  },
  {
    id: 'ops-dashboard',
    title: 'Realtime Ops Dashboard',
    description: 'Delivered a live operational dashboard for tracking communication status, workflow progress, and system-level activity in one responsive interface.',
    longDesc: 'Gave teams faster visibility into ongoing work, making it easier to spot issues and act before they cascaded.',
    tags: ['React', 'Next.js', 'Realtime', 'Dashboards', 'Operational UX'],
    featured: false,
    accent: 'cyan',
  },
  {
    id: 'api-refactors',
    title: 'API & Domain Layer Refactors',
    description: 'Refactored backend modules to improve maintainability, reduce coupling, and support larger product scope without constant rewrites.',
    longDesc: 'Made feature delivery more sustainable by improving internal system structure and reducing accidental complexity.',
    tags: ['C#', '.NET', 'OOP', 'SOLID', 'Refactoring'],
    featured: false,
    accent: 'blue',
  },
  {
    id: 'data-normalization',
    title: 'Cross-system Data Normalization',
    description: 'Built normalization layers that transformed inconsistent third-party data into stable internal models for product use.',
    longDesc: 'Reduced downstream complexity by ensuring product logic consumed consistent internal objects instead of vendor-specific payloads.',
    tags: ['Data Mapping', 'Integrations', 'Node.js', 'TypeScript', 'Validation'],
    featured: false,
    accent: 'purple',
  },
]
```

### src/data/skills.ts
```typescript
export interface SkillCluster {
  id: string
  label: string
  icon: string
  accent: string
  glowClass: string
  tags: string[]
}

export const skillClusters: SkillCluster[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '⚡',
    accent: 'cyan',
    glowClass: 'glass-cyan',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive UI', 'Component Architecture', 'Performance Optimization', 'UX Systems'],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    accent: 'blue',
    glowClass: 'glass-blue',
    tags: ['Node.js', 'Express.js', 'C#', '.NET', 'OOP', 'REST APIs', 'PostgresSQL', 'Supabase', 'Webhooks', 'Queue-driven automation', 'Authentication', 'Authorization', 'Background Jobs'],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    icon: '☁️',
    accent: 'purple',
    glowClass: 'glass-purple',
    tags: ['RLS', 'Serverless', 'Observability', 'Caching', 'Edge-ready architecture', 'Multi-tenant Systems', 'Scalable Architecture', 'Monitoring', 'Deployment Pipelines'],
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: '🔗',
    accent: 'green',
    glowClass: 'glass-green',
    tags: ['Google APIs', 'Microsoft APIs', 'OpenAI APIs', 'Meta APIs', 'Open Dental', 'NexHealth', 'NetSuite APIs', 'OAuth 2.0', 'Webhook Orchestration', 'API Normalization', 'Retry Logic', 'Event-driven Integrations'],
  },
  {
    id: 'principles',
    label: 'Engineering Principles',
    icon: '🧠',
    accent: 'orange',
    glowClass: 'glass-orange',
    tags: ['SOLID Principles', 'Design Patterns', 'Clean Architecture', 'Domain Modeling', 'Scalable System Design', 'Separation of Concerns', 'Code Review', 'Debugging', 'Refactoring', 'Problem Solving'],
  },
]

export const allTechForTicker = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'C#', '.NET',
  'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'OAuth 2.0',
  'REST APIs', 'WebSockets', 'Queues', 'RLS', 'Serverless', 'OpenAI APIs',
  'Google APIs', 'Microsoft APIs', 'Meta APIs', 'Webhooks', 'SOLID', 'OOP',
  'Clean Architecture', 'Domain Modeling', 'Caching', 'Observability',
]
```

### src/data/experience.ts
```typescript
export interface Experience {
  company: string
  role: string
  period: string
  location: string
  current: boolean
  accentColor: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Invira Health',
    role: 'Founding Software Engineer',
    period: 'Mar 2025 – Current',
    location: 'Atlanta, Georgia — Remote',
    current: true,
    accentColor: 'cyan',
    bullets: [
      'Built AI-first automation capabilities tied to real operational outcomes.',
      'Owned full-stack delivery across product UX, APIs, data models, and infrastructure decisions.',
      'Established patterns for secure multi-tenant architecture and integration reliability.',
    ],
  },
  {
    company: 'Capsitech',
    role: 'Software Development Engineer',
    period: 'Apr 2022 – Nov 2024',
    location: 'Jodhpur',
    current: false,
    accentColor: 'blue',
    bullets: [
      'Delivered production-ready features across frontend and backend surfaces.',
      'Grew deeper expertise in API design, debugging, and iterative product improvement.',
      'Contributed to systems that required both technical correctness and user empathy.',
    ],
  },
  {
    company: 'Amit Electric',
    role: 'PLC Engineer',
    period: 'Apr 2021 – Mar 2022',
    location: 'Bilara',
    current: false,
    accentColor: 'purple',
    bullets: [
      'Developed a strong instinct for system behavior, fault handling, and operational clarity.',
      'Built the bridge from physical systems thinking into modern software architecture.',
      'Carried a practical engineering mindset into every later software role.',
    ],
  },
]
```

---

## 3. Component Templates

### Card3D.tsx
```tsx
'use client'
import { useRef, useCallback, ReactNode } from 'react'

interface Card3DProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function Card3D({ children, className = '', glowColor = 'rgba(0,212,255,0.2)' }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    ref.current.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(8px)`
    ref.current.style.boxShadow = `0 25px 60px ${glowColor}`
  }, [glowColor])

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
    ref.current.style.boxShadow = ''
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`card-3d ${className}`}
      style={{ transition: 'transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s ease' }}
    >
      {children}
    </div>
  )
}
```

### SectionReveal.tsx
```tsx
'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionReveal({ children, className = '', delay = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el) } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
```

### TerminalBlock.tsx
```tsx
'use client'
import { useEffect, useState } from 'react'

const lines = [
  { key: 'name',     value: 'Sunil Jangid',                          accent: false },
  { key: 'role',     value: 'Founding Software Engineer',             accent: false },
  { key: 'location', value: 'Jodhpur, Rajasthan, India',              accent: false },
  { key: 'focus',    value: 'AI · Integrations · Multi-tenant',       accent: true  },
  { key: 'status',   value: 'Open to the right opportunities',        accent: true  },
]

export function TerminalBlock() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= lines.length) clearInterval(interval)
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
      </div>
      <div className="terminal-path">~/suniljangid ❯</div>
      {lines.slice(0, visibleLines).map((line, i) => (
        <div key={i} className="terminal-line">
          <span className="terminal-key">❯</span>
          <span className="terminal-key">{line.key}</span>
          <span className="terminal-arrow">→</span>
          <span className={line.accent ? 'terminal-value-accent' : 'terminal-value'}>
            {line.value}
          </span>
        </div>
      ))}
      {visibleLines < lines.length && (
        <div className="terminal-line">
          <span className="terminal-key">❯</span>
          <span className="terminal-cursor" />
        </div>
      )}
    </div>
  )
}
```

### CountUp.tsx
```tsx
'use client'
import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  target: number
  suffix?: string
  duration?: number
}

export function CountUp({ target, suffix = '', duration = 1500 }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setCount(Math.round(ease * target))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.unobserve(el)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}
```

---

## 4. Section-Specific Component Patterns

### Hero Stats Row
```tsx
const stats = [
  { value: 3, suffix: '+', label: 'Years Building' },
  { value: 11, suffix: '+', label: 'Projects Shipped' },
  { value: 8, suffix: '+', label: 'Integration APIs' },
]

// Render as:
<div className="flex gap-12 mt-16">
  {stats.map((s) => (
    <div key={s.label} className="text-center">
      <div className="text-4xl font-bold text-display text-gradient-cyan">
        <CountUp target={s.value} suffix={s.suffix} />
      </div>
      <div className="text-mono text-muted text-sm mt-1">{s.label}</div>
    </div>
  ))}
</div>
```

### Project Card Pattern
```tsx
<Card3D className="glass glass-hover glass-cyan p-6 rounded-xl">
  <div className="text-mono text-muted text-xs mb-4">Case study</div>
  <h3 className="text-display text-xl mb-3">{project.title}</h3>
  <p className="text-secondary text-sm leading-relaxed mb-4">{project.description}</p>
  <div className="flex flex-wrap gap-2 mt-auto">
    {project.tags.map(tag => (
      <span key={tag} className="tech-badge tech-badge-cyan">{tag}</span>
    ))}
  </div>
</Card3D>
```

### Experience Timeline Card Pattern
```tsx
<div className="timeline-container">
  <div className="timeline-line" />
  {experiences.map((exp, i) => (
    <SectionReveal key={exp.company} delay={i * 150}>
      <div className="relative mb-12">
        <div className={`timeline-dot ${exp.current ? 'active' : ''}`} />
        <Card3D className={`glass glass-${exp.accentColor} p-6 rounded-xl`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-display text-xl">{exp.company}</h3>
            {exp.current && <span className="live-badge"><span className="live-dot"/><span>CURRENT</span></span>}
          </div>
          <div className="text-mono text-muted text-sm mb-1">{exp.role}</div>
          <div className="text-mono text-muted text-xs mb-4">{exp.period} · {exp.location}</div>
          <ul className="space-y-2">
            {exp.bullets.map((b, j) => (
              <li key={j} className="flex gap-2 text-sm text-secondary">
                <span className="text-cyan mt-0.5">›</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Card3D>
      </div>
    </SectionReveal>
  ))}
</div>
```

### Architecture Flow Pattern
```tsx
const stages = [
  { num: '01', title: 'Ingress', desc: 'External systems emit events through APIs, webhooks, calendar updates, and messaging callbacks.' },
  { num: '02', title: 'Normalization', desc: 'Provider-specific payloads converted into product-safe primitives.' },
  { num: '03', title: 'Policy Layer', desc: 'Tenant-aware access rules protect data before business logic can misuse it.' },
  { num: '04', title: 'Execution', desc: 'Automation pipelines and real-time updates run on a shared event spine.' },
]

// Render as horizontal flow with SVG arrows between
<div className="flex items-start gap-4">
  {stages.map((s, i) => (
    <>
      <SectionReveal key={s.num} delay={i * 200} className="flex-1">
        <div className="glass glass-cyan p-5 rounded-xl text-center">
          <div className="text-mono text-cyan text-xs mb-2">Stage {s.num}</div>
          <div className="text-display font-bold mb-2">{s.title}</div>
          <p className="text-secondary text-xs">{s.desc}</p>
        </div>
      </SectionReveal>
      {i < stages.length - 1 && (
        <div className="text-muted text-2xl mt-8">→</div>
      )}
    </>
  ))}
</div>
```

---

## 5. Font Loading (layout.tsx)

```tsx
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500', '600'],
})

// Add to body className:
<body className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
```

---

## 6. GitHub API Integration

```typescript
// src/data/githubFallback.ts
export const fallbackRepos = [
  { name: 'portfolio', description: 'Personal portfolio — AI-first, integration-heavy', language: 'TypeScript', stars: 0, forks: 0 },
  { name: 'supabase-rls-patterns', description: 'Multi-tenant RLS architecture patterns', language: 'TypeScript', stars: 0, forks: 0 },
]

// src/components/sections/GitHub.tsx (client component)
'use client'
import { useEffect, useState } from 'react'

interface Repo { id: number; name: string; description: string; language: string; stargazers_count: number; forks_count: number; html_url: string }

export function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/Suniljangid07/repos?sort=updated&per_page=6')
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(setRepos)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-mono text-muted text-center py-12">Loading repositories...</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map(repo => (
        <Card3D key={repo.id} className="glass glass-hover p-5 rounded-xl">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <h4 className="font-bold mb-2 text-primary hover:text-cyan transition-colors">{repo.name}</h4>
            <p className="text-secondary text-sm mb-4 line-clamp-2">{repo.description}</p>
            <div className="flex items-center gap-4 text-mono text-xs text-muted">
              {repo.language && <span>● {repo.language}</span>}
              <span>★ {repo.stargazers_count}</span>
              <span>⑂ {repo.forks_count}</span>
            </div>
          </a>
        </Card3D>
      ))}
    </div>
  )
}
```

---

## 7. Responsive Breakpoints

```css
/* Mobile: stack everything, disable 3D tilts */
@media (max-width: 768px) {
  .card-3d:hover { transform: none; }
  .card-3d { transition: opacity 0.3s ease; }
  :root { --section-padding: 80px 0; }
}

/* Tablet: 2-column grids */
@media (min-width: 768px) and (max-width: 1024px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop: full 3-column layouts */
@media (min-width: 1024px) {
  .skills-grid { grid-template-columns: repeat(3, 1fr); }
  .projects-grid { grid-template-columns: repeat(3, 1fr); }
}
```

---

## 8. z-index Stacking Reference

```
z-0   → Background animation canvas (DO NOT CHANGE)
z-10  → Section content
z-20  → Cards and interactive elements
z-30  → Sticky section labels
z-40  → Navbar
z-50  → Modals, drawers, overlays
```

Background animation must always remain at z-0 or the defined z-index it currently uses.
