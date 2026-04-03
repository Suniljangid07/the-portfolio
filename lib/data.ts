export type NavItem = {
  id: string;
  label: string;
  eyebrow: string;
};

export type SkillCategory = {
  name: string;
  description: string;
  skills: string[];
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  impact: string;
  stack: string[];
  details: string[];
  caseStudy: {
    label: string;
    items: string[];
  }[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
};

export type ArchitectureBlock = {
  id: string;
  title: string;
  eyebrow: string;
  caption: string;
  points: string[];
  signal: string;
  outcome: string;
};

export type ArchitectureStage = {
  step: string;
  title: string;
  description: string;
};

export const navItems: NavItem[] = [
  { id: "hero", label: "Start", eyebrow: "Entry" },
  { id: "about", label: "About", eyebrow: "Journey" },
  { id: "skills", label: "Skills", eyebrow: "Stack" },
  { id: "projects", label: "Projects", eyebrow: "Proof" },
  { id: "experience", label: "Experience", eyebrow: "Timeline" },
  { id: "architecture", label: "Architecture", eyebrow: "Systems" },
  { id: "github", label: "GitHub", eyebrow: "Open Work" },
  { id: "contact", label: "Contact", eyebrow: "Connect" },
];

export const heroStats = [
  { label: "Core focus", value: "AI systems + integrations" },
  { label: "Operating mode", value: "Product, platform, ownership" },
  { label: "Favorite problems", value: "Multi-tenant, real-time, AI-first automation" },
];

export const heroSignals = [
  "Founding Software Engineer",
  "AI-first platforms",
  "Integrations and automation",
  "Multi-tenant system design",
];

export const heroHighlights = [
  {
    label: "Builds",
    value: "Products with strong backend foundations and crisp frontend execution.",
  },
  {
    label: "Specializes in",
    value: "Integrations, workflow automation, realtime systems, and tenant-safe architecture.",
  },
  {
    label: "Works like",
    value: "An owner who moves from UX details to system-level tradeoffs without losing clarity.",
  },
];

export type JourneyStage = {
  id: string;
  step: string;
  title: string;
  eyebrow: string;
  description: string;
  signal: string;
  strengths: string[];
  outcome: string;
};

export const journey: JourneyStage[] = [
  {
    id: "founding",
    step: "01",
    title: "Founding engineer mindset",
    eyebrow: "Current operating mode",
    description:
      "Now focused on end-to-end product delivery: architecture, integrations, UX, automation, and the unglamorous pieces that make systems scale.",
    signal: "Ownership across product, platform, and execution",
    strengths: [
      "Architecture and system design",
      "Integration-heavy delivery",
      "Product-minded frontend and backend ownership",
    ],
    outcome:
      "The goal is not just to ship features, but to build systems that teams can trust and scale.",
  },
  {
    id: "software",
    step: "02",
    title: "Software engineering jump",
    eyebrow: "Product engineering chapter",
    description:
      "Moved into product engineering with a backend-first mindset, learning how to turn complexity into clean interfaces and resilient services.",
    signal: "Backend-first thinking with product delivery discipline",
    strengths: [
      "API and service design",
      "Turning complexity into usable interfaces",
      "Building resilient production systems",
    ],
    outcome:
      "This phase shaped the habit of making systems understandable for both users and future engineers.",
  },
  {
    id: "plc",
    step: "03",
    title: "PLC foundations",
    eyebrow: "Engineering foundation",
    description:
      "Started with industrial logic and control systems, building intuition for reliability, edge cases, and real-world operations.",
    signal: "Reliability-first thinking from physical systems",
    strengths: [
      "Operational clarity",
      "Fault handling and edge-case awareness",
      "Practical systems thinking",
    ],
    outcome:
      "That early environment built the instinct to design for failure modes, not just happy paths.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    description: "High-fidelity UX with performance-aware engineering.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive UI",
      "Component Architecture",
      "Performance Optimization",
      "UX Systems",
    ],
  },
  {
    name: "Backend",
    description: "API design, automation, real-time messaging, and durable workflows.",
    skills: [
      "Node.js",
      "Express.js",
      "C#",
      ".NET",
      "OOP",
      "REST APIs",
      "Postgres",
      "SQL",
      "Supabase",
      "Webhooks",
      "Queue-driven automation",
      "Authentication",
      "Authorization",
      "Background Jobs",
    ],
  },
  {
    name: "Cloud",
    description: "Secure multi-tenant deployment models with strong operational visibility.",
    skills: [
      "RLS",
      "Serverless",
      "Observability",
      "Caching",
      "Edge-ready architecture",
      "Multi-tenant Systems",
      "Scalable Architecture",
      "Monitoring",
      "Deployment Pipelines",
    ],
  },
  {
    name: "Integrations",
    description: "Complex third-party systems made reliable, composable, and measurable.",
    skills: [
      "Google APIs",
      "Microsoft APIs",
      "OpenAI APIs (ChatGPT)",
      "Meta APIs",
      "Open Dental",
      "NexHealth",
      "NetSuite APIs",
      "OAuth 2.0",
      "Webhook Orchestration",
      "API Normalization",
      "Retry Logic",
      "Event-driven Integrations",
    ],
  },
  {
    name: "Engineering Principles",
    description: "Heavyweight software fundamentals used to keep systems maintainable as scope grows.",
    skills: [
      "SOLID Principles",
      "Design Patterns",
      "Clean Architecture",
      "Domain Modeling",
      "Scalable System Design",
      "Separation of Concerns",
      "Code Review",
      "Debugging",
      "Refactoring",
      "Problem Solving",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "AI Dental Platform",
    slug: "ai-dental-platform",
    description:
      "An AI-first operating layer for dental workflows, reducing manual coordination across patient communication, scheduling, and operational follow-through.",
    impact:
      "Unified automation, communication, and data flow into one product surface for a faster care-team workflow.",
    stack: ["Next.js", "Node.js", "Supabase", "AI workflows", "Realtime"],
    details: [
      "Designed product architecture for an automation-heavy healthcare workflow.",
      "Balanced user-facing UX with secure, multi-tenant platform design.",
      "Connected product decisions directly to clinical operations and adoption.",
    ],
    caseStudy: [
      {
        label: "Challenge",
        items: [
          "Dental operations span scheduling, patient communication, reminders, internal follow-up, and fragmented data systems.",
          "The product needed to reduce manual coordination without creating a brittle workflow layer.",
        ],
      },
      {
        label: "What I Built",
        items: [
          "An AI-first application layer for workflow automation, communication triggers, and operational visibility.",
          "A product experience that connected frontend usability with backend automation depth.",
        ],
      },
      {
        label: "Architecture Focus",
        items: [
          "Multi-tenant data modeling with secure boundaries.",
          "Realtime product feedback loops and automation triggers.",
          "Integration-friendly backend patterns for future system expansion.",
        ],
      },
      {
        label: "Outcome",
        items: [
          "Created a platform foundation that could support operational speed, better team coordination, and more scalable automation.",
        ],
      },
    ],
  },
  {
    title: "Integration Pipelines",
    slug: "integration-pipelines",
    description:
      "Built resilient connectors across Google, Microsoft, WhatsApp/Meta, Open Dental, and NexHealth to synchronize events across fragmented systems.",
    impact:
      "Turned brittle vendor-specific flows into reusable integration primitives with observability and safer retries.",
    stack: ["OAuth", "Webhooks", "API orchestration", "Event handling", "Retry systems"],
    details: [
      "Created normalization layers to tame inconsistent external payloads.",
      "Reduced operational friction with automated sync and clearer failure states.",
      "Enabled product teams to ship new workflows without rebuilding core plumbing.",
    ],
    caseStudy: [
      {
        label: "Systems Involved",
        items: [
          "Google, Microsoft, WhatsApp/Meta, Open Dental, and NexHealth.",
          "Different auth models, payload structures, rate limits, and failure behaviors.",
        ],
      },
      {
        label: "Technical Approach",
        items: [
          "Built reusable connector patterns around OAuth, token refresh, webhook ingestion, and normalized event processing.",
          "Used retries, replay-safe handlers, and monitoring-friendly flow design to reduce brittleness.",
        ],
      },
      {
        label: "Engineering Depth",
        items: [
          "Turned vendor-specific APIs into stable internal abstractions.",
          "Made new integration workflows easier to ship without rewriting core orchestration logic.",
        ],
      },
      {
        label: "Impact",
        items: [
          "Reduced operational complexity and created a stronger platform layer for feature delivery.",
        ],
      },
    ],
  },
  {
    title: "Real-time Communication Systems",
    slug: "realtime-communication-systems",
    description:
      "Delivered messaging and coordination systems where state changes, alerts, and user interactions needed to remain fast, traceable, and reliable.",
    impact:
      "Improved responsiveness while keeping event delivery and user context coherent across channels.",
    stack: ["Realtime", "Notifications", "State machines", "WebSockets", "Queues"],
    details: [
      "Structured event propagation to reduce race conditions and drift.",
      "Designed for responsive UX without sacrificing backend consistency.",
      "Used delivery-aware patterns for a better operational feedback loop.",
    ],
    caseStudy: [
      {
        label: "Challenge",
        items: [
          "Messages, notifications, and user actions needed to remain coherent across fast-changing product state.",
          "The system had to feel immediate while remaining traceable and reliable.",
        ],
      },
      {
        label: "Execution",
        items: [
          "Designed event propagation and state transition patterns that reduced race conditions and stale state.",
          "Built communication flows with delivery awareness, observability, and operational debugging in mind.",
        ],
      },
      {
        label: "Key Skills Applied",
        items: [
          "Realtime architecture, state machines, WebSockets, queue-backed workflows, and frontend responsiveness.",
        ],
      },
      {
        label: "Outcome",
        items: [
          "Produced faster user feedback loops and a more dependable communication backbone for product workflows.",
        ],
      },
    ],
  },
  {
    title: "Supabase + RLS Architecture",
    slug: "supabase-rls-architecture",
    description:
      "Implemented tenant-aware data models with strong authorization boundaries and developer-friendly data access patterns.",
    impact:
      "Made secure multi-tenant behavior the default, not an afterthought, while keeping development velocity high.",
    stack: ["Supabase", "Postgres", "RLS", "Policies", "Type-safe data access"],
    details: [
      "Designed tables and policies around organizational boundaries and least privilege.",
      "Protected critical workflows at the data layer instead of trusting UI-only checks.",
      "Kept the architecture understandable for future teams and features.",
    ],
    caseStudy: [
      {
        label: "Goal",
        items: [
          "Make tenant isolation and authorization part of the system foundation, not an afterthought.",
        ],
      },
      {
        label: "Architecture Decisions",
        items: [
          "Used Postgres and Supabase RLS to enforce organization-aware access at the data layer.",
          "Modeled policies and relationships so secure behavior remained the default path for development teams.",
        ],
      },
      {
        label: "Why It Matters",
        items: [
          "Reduced the risk of cross-tenant leakage.",
          "Improved trust in the platform while keeping product iteration speed high.",
        ],
      },
      {
        label: "Engineering Principles",
        items: [
          "Least privilege, separation of concerns, clean abstractions, and maintainable schema design.",
        ],
      },
    ],
  },
  {
    title: "Google + Microsoft Calendar Sync",
    slug: "calendar-sync-platform",
    description:
      "Designed synchronization flows between product workflows and external calendar providers so operational schedules stayed accurate across systems.",
    impact:
      "Reduced calendar drift and made scheduling workflows more dependable for both internal teams and end users.",
    stack: ["Google APIs", "Microsoft Graph", "OAuth 2.0", "Webhooks", "Node.js"],
    details: [
      "Handled token lifecycle management and provider-specific edge cases.",
      "Mapped external calendar events into stable internal scheduling primitives.",
      "Improved reliability around sync, updates, and cancellation flows.",
    ],
    caseStudy: [
      {
        label: "Problem Space",
        items: [
          "Calendar systems look similar at a product level but differ meaningfully in payloads, auth, and event semantics.",
          "Even small sync errors can break booking and communication workflows.",
        ],
      },
      {
        label: "What Was Built",
        items: [
          "Provider-aware sync handlers for create, update, cancel, and reconciliation events.",
          "Internal normalization patterns so product logic did not depend directly on vendor-specific data shapes.",
        ],
      },
      {
        label: "Technical Challenges",
        items: [
          "OAuth renewal, webhook verification, delayed events, duplicate updates, and conflict handling.",
        ],
      },
      {
        label: "Outcome",
        items: [
          "Created a more trustworthy scheduling backbone for downstream reminders, communication, and operational automation.",
        ],
      },
    ],
  },
  {
    title: "WhatsApp and Meta Messaging Flows",
    slug: "meta-messaging-flows",
    description:
      "Built messaging workflows around WhatsApp and Meta APIs to support automated and context-aware communication across customer journeys.",
    impact:
      "Made outbound and event-triggered communication faster to ship, easier to trace, and more tightly connected to product state.",
    stack: ["Meta APIs", "WhatsApp", "Webhooks", "Automation", "Templates"],
    details: [
      "Integrated provider messaging events back into product workflows.",
      "Designed for delivery state awareness and operational troubleshooting.",
      "Connected communication logic to automation triggers and user actions.",
    ],
    caseStudy: [
      {
        label: "Communication Goals",
        items: [
          "Messages needed to be timely, contextual, and tied to real product events rather than sent as isolated blasts.",
        ],
      },
      {
        label: "Implementation",
        items: [
          "Webhook-driven delivery tracking, template-based workflows, and trigger-aware orchestration.",
          "Messaging primitives that could be reused by different product experiences.",
        ],
      },
      {
        label: "Operational Value",
        items: [
          "Created clearer visibility into what was sent, delivered, failed, or needed intervention.",
        ],
      },
      {
        label: "Result",
        items: [
          "Improved communication reliability while making new automation use cases easier to add.",
        ],
      },
    ],
  },
  {
    title: "Multi-tenant Admin Platform",
    slug: "multi-tenant-admin-platform",
    description:
      "Created internal and tenant-facing administrative workflows for managing organizations, permissions, operational settings, and product controls.",
    impact:
      "Made the platform easier to operate at scale while keeping tenant boundaries and role clarity intact.",
    stack: ["Next.js", "Supabase", "RLS", "Admin UX", "Role-based access"],
    details: [
      "Built admin-facing interfaces on top of tenant-aware data rules.",
      "Balanced usability with strict authorization behavior.",
      "Reduced manual overhead for configuration and platform operations.",
    ],
    caseStudy: [
      {
        label: "Scope",
        items: [
          "Administrative products often become dangerous if speed is prioritized over access control and auditability.",
        ],
      },
      {
        label: "Approach",
        items: [
          "Combined product-friendly admin interfaces with data-layer security and role-aware behavior.",
          "Structured workflows so privileged actions still felt fast and understandable.",
        ],
      },
      {
        label: "Design Concerns",
        items: [
          "Permission clarity, tenant isolation, operational safety, and maintainability as platform scope expanded.",
        ],
      },
      {
        label: "Outcome",
        items: [
          "Produced a safer admin foundation that supported growth without sacrificing speed of internal operations.",
        ],
      },
    ],
  },
  {
    title: "Workflow Automation Engine",
    slug: "workflow-automation-engine",
    description:
      "Built reusable trigger-action pipelines for operational automation so teams could orchestrate follow-up, notifications, and system responses with less manual effort.",
    impact:
      "Turned one-off business logic into reusable automation capabilities that could power multiple product surfaces.",
    stack: ["Node.js", "Queues", "Event-driven systems", "Automation", "Retries"],
    details: [
      "Created event-based workflow patterns with retry and failure-awareness.",
      "Separated triggers, actions, and execution state for maintainability.",
      "Improved system extensibility for future automations.",
    ],
    caseStudy: [
      {
        label: "Core Need",
        items: [
          "Manual follow-up does not scale well when product actions and external systems constantly generate new events.",
        ],
      },
      {
        label: "System Design",
        items: [
          "Composable trigger-action flows, durable execution state, and failure-aware processing.",
          "Operational visibility so teams could understand what ran, failed, or needed a retry.",
        ],
      },
      {
        label: "Engineering Principles",
        items: [
          "Separation of concerns, scalability, observability, and predictable execution behavior.",
        ],
      },
      {
        label: "Business Effect",
        items: [
          "Reduced repetitive work and created a stronger base for shipping AI-assisted and event-driven workflows.",
        ],
      },
    ],
  },
  {
    title: "Realtime Ops Dashboard",
    slug: "realtime-ops-dashboard",
    description:
      "Delivered a live operational dashboard for tracking communication status, workflow progress, and system-level activity in one responsive interface.",
    impact:
      "Gave teams faster visibility into ongoing work, making it easier to spot issues and act before they cascaded.",
    stack: ["React", "Next.js", "Realtime", "Dashboards", "Operational UX"],
    details: [
      "Combined live state updates with an interface optimized for fast scanning.",
      "Reduced the gap between backend events and human decision-making.",
      "Focused on clarity, responsiveness, and operational confidence.",
    ],
    caseStudy: [
      {
        label: "Use Case",
        items: [
          "Operations teams need more than logs; they need a real-time surface that explains the current state of the system clearly.",
        ],
      },
      {
        label: "UX + Engineering",
        items: [
          "Paired responsive frontend rendering with dependable realtime data flow.",
          "Designed for state clarity, not just visual density.",
        ],
      },
      {
        label: "Signals Surfaced",
        items: [
          "Workflow progress, communication status, failures, retries, and action-required states.",
        ],
      },
      {
        label: "Outcome",
        items: [
          "Improved operational awareness and reduced time-to-diagnosis for active issues.",
        ],
      },
    ],
  },
  {
    title: "API and Domain Layer Refactors",
    slug: "api-domain-layer-refactors",
    description:
      "Refactored backend modules to improve maintainability, reduce coupling, and support larger product scope without constant rewrites.",
    impact:
      "Made feature delivery more sustainable by improving internal system structure and reducing accidental complexity.",
    stack: ["C#", ".NET", "OOP", "SOLID", "Refactoring"],
    details: [
      "Applied stronger boundaries between responsibilities in service and domain layers.",
      "Reduced tightly coupled logic that slowed future changes.",
      "Used engineering fundamentals to support long-term delivery speed.",
    ],
    caseStudy: [
      {
        label: "Context",
        items: [
          "As products grow, delivery slows down when business logic, infrastructure concerns, and API behavior are mixed together.",
        ],
      },
      {
        label: "Refactor Focus",
        items: [
          "OOP design improvements, cleaner abstractions, SOLID-driven boundaries, and more understandable service responsibilities.",
        ],
      },
      {
        label: "Why It Helped",
        items: [
          "Improved testability, readability, and the ability to evolve features without destabilizing adjacent code paths.",
        ],
      },
      {
        label: "Result",
        items: [
          "Created a healthier backend foundation for scaling both features and team velocity.",
        ],
      },
    ],
  },
  {
    title: "Cross-system Data Normalization",
    slug: "cross-system-data-normalization",
    description:
      "Built normalization layers that transformed inconsistent third-party data into stable internal models for product use.",
    impact:
      "Reduced downstream complexity by ensuring product logic consumed consistent internal objects instead of vendor-specific payloads.",
    stack: ["Data Mapping", "Integrations", "Node.js", "TypeScript", "Validation"],
    details: [
      "Created reusable mappers for third-party event and record formats.",
      "Improved resilience against payload drift and vendor inconsistencies.",
      "Simplified application logic across downstream features.",
    ],
    caseStudy: [
      {
        label: "Problem",
        items: [
          "Third-party systems rarely agree on naming, shape, completeness, or semantics, which creates chaos in application logic.",
        ],
      },
      {
        label: "Solution",
        items: [
          "Built a normalization layer between external APIs and the internal domain model.",
          "Added stronger assumptions around validation, fallback handling, and predictable object shapes.",
        ],
      },
      {
        label: "Engineering Benefits",
        items: [
          "Cleaner downstream code, easier debugging, and lower vendor-specific leakage into core product logic.",
        ],
      },
      {
        label: "Outcome",
        items: [
          "Made the integration platform easier to extend and safer to operate over time.",
        ],
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Invira Health",
    role: "Founding Software Engineer",
    period: "Mar 2025 - Current",
    location: "Atlanta, Georgia - Remote",
    summary:
      "Helping shape the product and platform from the ground up, from AI workflow design to integration-heavy systems and user-facing product craft.",
    achievements: [
      "Built AI-first automation capabilities tied to real operational outcomes.",
      "Owned full-stack delivery across product UX, APIs, data models, and infrastructure decisions.",
      "Established patterns for secure multi-tenant architecture and integration reliability.",
    ],
  },
  {
    company: "Capsitech",
    role: "Software Development Engineer",
    period: "Apr 2022 - Nov 2024",
    location: "Jodhpur",
    summary:
      "Worked across application layers, sharpening delivery discipline and learning how to ship maintainable features under real constraints.",
    achievements: [
      "Delivered production-ready features across frontend and backend surfaces.",
      "Grew deeper expertise in API design, debugging, and iterative product improvement.",
      "Contributed to systems that required both technical correctness and user empathy.",
    ],
  },
  {
    company: "Amit Electric",
    role: "PLC Engineer",
    period: "Apr 2021 - Mar 2022",
    location: "Bilara",
    summary:
      "Started with controls and industrial workflows, building the habit of designing for reliability in environments where failure is expensive.",
    achievements: [
      "Developed a strong instinct for system behavior, fault handling, and operational clarity.",
      "Built the bridge from physical systems thinking into modern software architecture.",
      "Carried a practical engineering mindset into every later software role.",
    ],
  },
];

export const architectureBlocks: ArchitectureBlock[] = [
  {
    id: "integration",
    title: "Integration Mesh",
    eyebrow: "Ingress Layer",
    caption: "External APIs normalized into one dependable workflow graph.",
    points: [
      "Auth + token lifecycle management",
      "Webhook ingestion and replay-safe processing",
      "Normalized events feeding product actions",
    ],
    signal: "Google, Microsoft, Meta, Open Dental, NexHealth",
    outcome: "Vendor complexity is absorbed once, so product workflows stay stable.",
  },
  {
    id: "tenant-core",
    title: "Multi-tenant Core",
    eyebrow: "Security Layer",
    caption: "Organization-aware data model with policy-first access control.",
    points: [
      "Tenant boundaries enforced with RLS",
      "Shared primitives without shared risk",
      "Auditable data paths for sensitive workflows",
    ],
    signal: "Policy-aware schema and least-privilege defaults",
    outcome: "Security is enforced in the platform itself, not left to UI discipline.",
  },
  {
    id: "automation",
    title: "Automation Engine",
    eyebrow: "Execution Layer",
    caption: "Trigger-driven actions with observability, retries, and human override.",
    points: [
      "Event queues and workflow orchestration",
      "Real-time status propagation",
      "Failure visibility for operational teams",
    ],
    signal: "Queues, workflow state, retries, and realtime feedback",
    outcome: "Automation stays reliable enough for production, not just demos.",
  },
];

export const architectureStages: ArchitectureStage[] = [
  {
    step: "01",
    title: "Ingress",
    description:
      "External systems emit events through APIs, webhooks, calendar updates, and messaging callbacks.",
  },
  {
    step: "02",
    title: "Normalization",
    description:
      "Provider-specific payloads are converted into product-safe primitives so the app works on stable internal models.",
  },
  {
    step: "03",
    title: "Policy Layer",
    description:
      "Tenant-aware access rules and organization boundaries protect data before business logic or UI can misuse it.",
  },
  {
    step: "04",
    title: "Execution",
    description:
      "Automation pipelines, real-time updates, and user-facing workflows run on a shared event spine with observability built in.",
  },
];

export const repoFallbacks = [
  {
    name: "integration-orchestrator",
    description: "Patterns for webhook handling, connector normalization, and event-driven automation.",
    language: "TypeScript",
    stars: 12,
    url: "https://github.com/Suniljangid07",
  },
  {
    name: "tenant-secure-platform",
    description: "Examples of multi-tenant data modeling with RLS-first access control.",
    language: "SQL",
    stars: 8,
    url: "https://github.com/Suniljangid07",
  },
  {
    name: "realtime-command-center",
    description: "Realtime messaging UX with operational telemetry and resilient state propagation.",
    language: "React",
    stars: 10,
    url: "https://github.com/Suniljangid07",
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/suniljangid07/" },
  { label: "GitHub", href: "https://github.com/Suniljangid07" },
];

export const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/suniljangid07/" },
  { label: "GitHub", href: "https://github.com/Suniljangid07" },
  { label: "Email", href: "mailto:suniljangid07@gmail.com" },
];
