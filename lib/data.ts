import { label } from 'framer-motion/client';

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
    url?: string;
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

export type Capability = {
    title: string;
    description: string;
    points: string[];
};

export const navItems: NavItem[] = [
    { id: 'hero', label: 'Start', eyebrow: 'Entry' },
    { id: 'about', label: 'About', eyebrow: 'Journey' },
    { id: 'skills', label: 'Skills', eyebrow: 'Stack' },
    { id: 'projects', label: 'Projects', eyebrow: 'Proof' },
    { id: 'experience', label: 'Experience', eyebrow: 'Timeline' },
    { id: 'architecture', label: 'Architecture', eyebrow: 'Systems' },
    { id: 'github', label: 'GitHub', eyebrow: 'Open Work' },
    { id: 'contact', label: 'Contact', eyebrow: 'Connect' },
];

export const heroStats = [
    { label: 'Core focus', value: 'AI systems + integrations' },
    { label: 'Operating mode', value: 'Product, platform, ownership' },
    {
        label: 'Favorite problems',
        value: 'Multi-tenant, real-time, AI-first automation',
    },
];

export const heroSignals = [
    'Founding Software Engineer',
    'AI-first platforms',
    'Integrations and automation',
    'Multi-tenant system design',
];

export const heroHighlights = [
    {
        label: 'Builds',
        value: 'Products with strong backend foundations and crisp frontend execution.',
    },
    {
        label: 'Specializes in',
        value: 'Integrations, workflow automation, realtime systems, and tenant-safe architecture.',
    },
    {
        label: 'Works like',
        value: 'An owner who moves from UX details to system-level tradeoffs without losing clarity.',
    },
    {
        label: 'Believes in',
        value: 'Building technology that empowers users and scales effortlessly.',
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
        id: 'founding',
        step: '01',
        title: 'Founding engineer mindset',
        eyebrow: 'Current operating mode',
        description:
            'Now focused on end-to-end product delivery: architecture, integrations, UX, automation, and the unglamorous pieces that make systems scale.',
        signal: 'Ownership across product, platform, and execution',
        strengths: [
            'Architecture and system design',
            'Integration-heavy delivery',
            'Product-minded frontend and backend ownership',
        ],
        outcome:
            'The goal is not just to ship features, but to build systems that teams can trust and scale.',
    },
    {
        id: 'software',
        step: '02',
        title: 'Software engineering jump',
        eyebrow: 'Product engineering chapter',
        description:
            'Moved into product engineering with a backend-first mindset, learning how to turn complexity into clean interfaces and resilient services.',
        signal: 'Backend-first thinking with product delivery discipline',
        strengths: [
            'API and service design',
            'Turning complexity into usable interfaces',
            'Building resilient production systems',
        ],
        outcome:
            'This phase shaped the habit of making systems understandable for both users and future engineers.',
    },
    {
        id: 'plc',
        step: '03',
        title: 'PLC foundations',
        eyebrow: 'Engineering foundation',
        description:
            'Started with industrial logic and control systems, building intuition for reliability, edge cases, and real-world operations.',
        signal: 'Reliability-first thinking from physical systems',
        strengths: [
            'Operational clarity',
            'Fault handling and edge-case awareness',
            'Practical systems thinking',
        ],
        outcome:
            'That early environment built the instinct to design for failure modes, not just happy paths.',
    },
];

export const skillCategories: SkillCategory[] = [
    {
        name: 'Frontend',
        description: 'High-fidelity UX with performance-aware engineering.',
        skills: [
            'Next.js',
            'React',
            'TypeScript',
            'Redux',
            'Tailwind CSS',
            'Framer Motion',
            'Responsive UI',
            'Component Architecture',
            'UX Systems',
            'Performance Optimization',
            'JavaScript',
            'Context API',
            'Bootstrap',
            'Fluent UI',
        ],
    },
    {
        name: 'Backend',
        description:
            'API design, automation, real-time messaging, and durable workflows.',
        skills: [
            'Node.js',
            'Express.js',
            'C#',
            '.NET',
            'OOP',
            'REST APIs',
            'Postgres',
            'SQL',
            'MongoDB',
            'Supabase',
            'Webhooks',
            'Authentication',
            'Authorization',
            'Background Jobs',
            'Queue-driven automation',
            'Python',
            'SQL Server',
            'LLMs integration',
            '.NET Core',
        ],
    },
    {
        name: 'Cloud',
        description:
            'Secure multi-tenant deployment models with strong operational visibility.',
        skills: [
            'RLS',
            'Serverless',
            'Observability',
            'Caching',
            'Edge-ready architecture',
            'Multi-tenant Systems',
            'Scalable Architecture',
            'Monitoring',
            'Deployment Pipelines',
            'Azure',
            'AWS',
            'Docker',
            'CI/CD',
            'Git',
        ],
    },
    {
        name: 'Integrations',
        description:
            'Complex third-party systems made reliable, composable, and measurable.',
        skills: [
            'Google APIs',
            'Microsoft APIs',
            'OpenAI APIs (ChatGPT)',
            'Meta APIs',
            'Open Dental',
            'NexHealth',
            'NetSuite APIs',
            'OAuth 2.0',
            'Webhook Orchestration',
            'API Normalization',
            'Retry Logic',
            'Event-driven Integrations',
            'Microservices',
            'RabbitMQ',
            'SignalR',
            'WebSocket',
        ],
    },
    {
        name: 'Engineering Principles',
        description:
            'Heavyweight software fundamentals used to keep systems maintainable as scope grows.',
        skills: [
            'SOLID Principles',
            'Design Patterns',
            'Clean Architecture',
            'Domain Modeling',
            'Scalable System Design',
            'Separation of Concerns',
            'Code Review',
            'Debugging',
            'Refactoring',
            'Problem Solving',
        ],
    },
    {
        name: 'Security & Authentication',
        description: 'Protecting user data and controlling system access.',
        skills: ['JWT', 'Okta SSO', 'Role-Based Access Control (RBAC)'],
    },
    {
        name: 'Tools & Methodologies',
        description:
            'Development environments, project management, and collaborative workflows.',
        skills: [
            'Claude Code',
            'Cursor',
            'Codex',
            'JIRA',
            'Agile',
            'Postman',
            'Power Platform',
            'GitHub',
            'GitLab',
            'Figma',
        ],
    },
];

export const capabilities: Capability[] = [
    {
        title: 'Full Stack Engineer',
        description:
            'Owns the visible product surface and the platform underneath it from interaction quality to data and service boundaries.',
        points: [
            'Frontend delivery',
            'Backend architecture',
            'UX + systems ownership',
        ],
    },
    {
        title: 'Integration Specialist',
        description:
            'Turns messy third-party systems into dependable internal workflows with normalization, retries, and observability.',
        points: [
            'OAuth flows',
            'Webhook orchestration',
            'Provider-safe abstractions',
        ],
    },
    {
        title: 'AI Workflow Builder',
        description:
            'Designs AI-assisted product flows that connect prompts, automation, data state, and team operations.',
        points: [
            'AI-first product flows',
            'Automation triggers',
            'Human-in-the-loop design',
        ],
    },
    {
        title: 'SaaS Architect',
        description:
            'Builds systems that stay clean as products grow with tenant-safe models and reusable platform layers.',
        points: [
            'Multi-tenant patterns',
            'Policy-first access',
            'Scalable domain design',
        ],
    },
    {
        title: 'HealthTech Engineer',
        description:
            'Works comfortably in operationally sensitive environments where automation, communication, and data trust all matter.',
        points: [
            'Healthcare workflows',
            'Operational reliability',
            'Secure automation design',
        ],
    },
];

export const projects: Project[] = [
    {
        title: 'Invira Health',
        slug: 'invira-health',
        url: 'https://invirahealth.com',
        description:
            'A U.S.-based health technology platform modernizing and simplifying healthcare interactions between patients and medical/dental practices.',
        impact: 'Unified automation, multi-channel communication, and practice operations into a single platform, streamlining workflows and reducing no-shows.',
        stack: ['Next.js', 'Node.js', 'PostgreSQL', 'CI/CD', 'Realtime'],
        details: [
            'Implemented multi-channel patient outreach (WhatsApp, SMS, email) from a centralized dashboard.',
            'Developed smart scheduling tools with auto-reminders and digital intake/consent forms.',
            'Engineered automated recall, reminder, and follow-up campaigns with real-time analytics.',
        ],
        caseStudy: [
            {
                label: 'Challenge',
                items: [
                    'Medical and dental practices struggle with fragmented communication and manual scheduling, leading to high no-show rates and administrative overhead.',
                ],
            },
            {
                label: 'What I Built',
                items: [
                    'An AI-driven operational layer handling patient communication, digital consent, and scheduling automation.',
                ],
            },
            {
                label: 'Architecture Focus',
                items: [
                    'Secure, encrypted multi-tenant data modeling with role-based access controls and audit logs.',
                    'Integration-friendly backend patterns for smooth communication flow.',
                ],
            },
        ],
    },
    {
        title: 'Invira Careers',
        slug: 'invira-careers',
        url: 'https://inviracareers.com',
        description:
            'An AI-driven recruitment and applicant tracking platform designed to modernize hiring processes while keeping human recruiters in control.',
        impact: 'Reduced screening time and improved candidate experience through AI-driven resume analysis and automated interview scheduling.',
        stack: ['React.js', 'Node.js', 'MongoDB', 'GitHub Actions', 'Realtime'],
        details: [
            'Built AI-driven screening features that analyze resumes and score candidates based on job requirements.',
            'Implemented hiring automation workflows for candidate responses and assessment triggers.',
            'Developed collaborative tools for teams to manage scorecards, notes, and candidate pipelines.',
        ],
        caseStudy: [
            {
                label: 'Core Need',
                items: [
                    'Organizations face bottlenecks in reviewing resumes and coordinating interviews, while candidates experience slow feedback loops.',
                ],
            },
            {
                label: 'System Design',
                items: [
                    'Developed a centralized applicant tracking system (ATS) with AI integrations for scoring and filtering.',
                    'Engineered customizable careers pages and automated communication flows.',
                ],
            },
            {
                label: 'Business Effect',
                items: [
                    'Streamlined the recruitment lifecycle, improving both organizational efficiency and candidate satisfaction.',
                ],
            },
        ],
    },
    {
        title: 'Acting Office',
        slug: 'acting-office',
        url: 'https://actingoffice.com',
        description:
            'An AI-powered, all-in-one enterprise software platform designed specifically for medium and large-sized UK accounting firms.',
        impact: 'Unified fragmented legacy accounting systems into a single continuous workflow from lead management to accounts submission.',
        stack: ['Next.js', 'C#', '.NET', 'PostgreSQL', 'CI/CD'],
        details: [
            'Integrated CRM, practice management, time & billing, and workflow automation into a unified platform.',
            'Utilized an AI workflow engine for real-time data fetching and filing with Companies House and HMRC.',
            'Developed features for AML checks, bookkeeping, and corporate/personal tax production.',
        ],
        caseStudy: [
            {
                label: 'Context',
                items: [
                    'UK accounting firms typically rely on disconnected software for CRM, compliance, and tax filing, leading to manual data entry and errors.',
                ],
            },
            {
                label: 'Technical Approach',
                items: [
                    'Engineered a comprehensive enterprise platform accredited by the ICAEW.',
                    'Built secure, real-time API integrations with government tax and corporate registries.',
                ],
            },
            {
                label: 'Result',
                items: [
                    'Created a reliable platform that standardizes processes, improves productivity, and modernizes accounting operations.',
                ],
            },
        ],
    },
    {
        title: 'Debitam',
        slug: 'debitam',
        url: 'https://debitam.com',
        description:
            'A UK-based digital accounting firm specializing in online accounting and paperless tax filing for small businesses and contractors.',
        impact: 'Delivered a seamless, digital-first client portal that reduced the need for in-person meetings and simplified financial data sharing.',
        stack: ['React.js', 'Node.js', 'PostgreSQL', 'CI/CD', 'Realtime'],
        details: [
            'Built a paperless platform allowing clients to securely share financial information online.',
            'Automated draft approvals and submission workflows to HMRC and Companies House.',
            'Focused the user experience on micro-businesses, sole traders, and freelancers.',
        ],
        caseStudy: [
            {
                label: 'Problem',
                items: [
                    'Small business owners often find traditional accounting slow, paper-heavy, and difficult to manage remotely.',
                ],
            },
            {
                label: 'Solution',
                items: [
                    'Designed a secure, easy-to-use client dashboard for document uploads, draft reviews, and automated filings.',
                ],
            },
            {
                label: 'Engineering Benefits',
                items: [
                    'Streamlined the data collection process, reducing administrative bottlenecks for the firm.',
                ],
            },
        ],
    },
    {
        title: 'Sponiscore',
        slug: 'sponiscore',
        url: 'https://sponiscore.com',
        description:
            'A digital platform designed to provide actionable scoring, analytics, and insights for complex datasets.',
        impact: 'Created a robust system for tracking and scoring metrics, providing users with a clear, data-driven dashboard.',
        stack: ['Next.js', 'Node.js', 'MongoDB', 'CI/CD', 'Realtime'],
        details: [
            'Developed interactive dashboards and reporting tools for real-time analytics.',
            'Engineered a scalable backend to process and score large datasets efficiently.',
            'Focused on delivering an intuitive user experience for complex data visualization.',
        ],
        caseStudy: [
            {
                label: 'Use Case',
                items: [
                    'Users needed a reliable way to calculate, track, and visualize complex scoring metrics over time.',
                ],
            },
            {
                label: 'Execution',
                items: [
                    'Built a highly responsive frontend paired with a performance-optimized data aggregation backend.',
                ],
            },
            {
                label: 'Outcome',
                items: [
                    'Provided a clear, accessible interface that turns raw data into actionable insights.',
                ],
            },
        ],
    },
    {
        title: 'Total Time Pay',
        slug: 'total-time-pay',
        url: 'https://totaltimepay.com',
        description:
            'A comprehensive business application designed for employee attendance, payroll processing, and leave management.',
        impact: 'Streamlined time tracking and HR processes across multiple platforms including web, iOS, and Android.',
        stack: ['React.js', 'Node.js', 'PostgreSQL', 'CI/CD', 'Realtime'],
        details: [
            'Built a centralized dashboard for employees to track daily attendance and submit leave requests.',
            'Engineered cross-platform experiences distributed across multiple app ecosystems.',
            'Ensured reliable, real-time synchronization of attendance data for HR and management reporting.',
        ],
        caseStudy: [
            {
                label: 'Challenge',
                items: [
                    'Organizations struggle with disjointed time tracking systems, leading to payroll errors and administrative friction.',
                ],
            },
            {
                label: 'Architecture Focus',
                items: [
                    'Developed a unified backend API to serve both the web dashboard and mobile applications seamlessly.',
                ],
            },
            {
                label: 'Impact',
                items: [
                    'Reduced HR workload and provided employees with a transparent, easy-to-use tool for managing their time and attendance.',
                ],
            },
        ],
    },
];

export const experiences: Experience[] = [
    {
        company: 'Invira Health',
        role: 'Founding Software Engineer',
        period: 'Mar 2025 - Present',
        location: 'Atlanta, Georgia (Remote)',
        summary: '',
        achievements: [
            'Architected and engineered the core of an AI-first dental automation platform using Node.js, Supabase, and RPC-driven Postgres design, implementing HIPAA-aligned, RLS-enforced multi-tenant security with production-grade scalability.',
            'Designed and built enterprise-grade integration pipelines connecting OpenAI APIs, Open Dental, NexHealth, Google Workspace, Microsoft 365, and Meta Cloud APIs (WhatsApp/Facebook), enabling real-time, bidirectional sync across scheduling, communication, and patient engagement systems.',
            'Developed resilient API orchestration layers handling OAuth flows, token lifecycle management, webhooks, rate-limits, and client-scoped data isolation to streamline cross-platform workflows.',
            'Engineered intelligent patient communication systems integrating SMS, email, calendar, meetings, and marketing automation - driving operational efficiency and unified engagement across business channels.',
            'Led full-stack delivery in Next.js with performance-first architecture, aligning UX precision with backend integrity in a high-velocity startup environment enhanced by AI-assisted engineering workflows.',
            'Operated as a technical force multiplier within the founding team - owning architectural direction, integration strategy, and high-impact product decisions from zero to scale.',
        ],
    },
    {
        company: 'Capsitech IT Solutions Limited',
        role: 'Software Development Engineer',
        period: 'Apr 2022 - Oct 2024',
        location: 'Jodhpur, Rajasthan',
        summary: '',
        achievements: [
            'Built and optimized backend systems using .NET Core and Node.js, integrating MongoDB and SQL Server for efficient data handling, and reducing API response times by 40% via indexing, query optimization, and caching.',
            'Designed secure, scalable RESTful APIs and real-time communication with WebSockets (SignalR), implementing Okta SSO, JWT, and OAuth for authentication across distributed services.',
            'Deployed scalable cloud architecture using Azure Blob Storage, RabbitMQ, and Docker; streamlined deployments with GitHub Actions CI/CD pipelines for faster, stable releases.',
            'Integrated and fine-tuned Azure Document Intelligence LLMs to automate financial data extraction from bank statements, and developed a custom transition prediction model to forecast data patterns, boosting accuracy and processing efficiency.',
            'Developed frontend interfaces with React.js and Next.js, collaborated in Agile teams via JIRA, mentored junior developers, and ensured code quality through reviews and best practices.',
        ],
    },
    {
        company: 'Amit Electric',
        role: 'Junior Automation Engineer',
        period: 'May 2021 - Mar 2022',
        location: 'Jodhpur, Rajasthan',
        summary: '',
        achievements: [
            'Automated tasks through scripting and PLC programming, doubling overall operational efficiency.',
            'Developed and tested clean PLC project code to ensure quality standards and validation readiness.',
            'Collaborated cross-functionally to resolve software bugs, integrate builds, and change requests.',
            'Supported Agile projects by solving technical challenges quickly and interfacing pneumatics, field instruments, PLCs, and GSM modems for mobile communication.',
        ],
    },
];

export const architectureBlocks: ArchitectureBlock[] = [
    {
        id: 'integration',
        title: 'Integration Mesh',
        eyebrow: 'Ingress Layer',
        caption: 'External APIs normalized into one dependable workflow graph.',
        points: [
            'Auth + token lifecycle management',
            'Webhook ingestion and replay-safe processing',
            'Normalized events feeding product actions',
        ],
        signal: 'Google, Microsoft, Meta, Open Dental, NexHealth',
        outcome:
            'Vendor complexity is absorbed once, so product workflows stay stable.',
    },
    {
        id: 'tenant-core',
        title: 'Multi-tenant Core',
        eyebrow: 'Security Layer',
        caption:
            'Organization-aware data model with policy-first access control.',
        points: [
            'Tenant boundaries enforced with RLS',
            'Shared primitives without shared risk',
            'Auditable data paths for sensitive workflows',
        ],
        signal: 'Policy-aware schema and least-privilege defaults',
        outcome:
            'Security is enforced in the platform itself, not left to UI discipline.',
    },
    {
        id: 'automation',
        title: 'Automation Engine',
        eyebrow: 'Execution Layer',
        caption:
            'Trigger-driven actions with observability, retries, and human override.',
        points: [
            'Event queues and workflow orchestration',
            'Real-time status propagation',
            'Failure visibility for operational teams',
        ],
        signal: 'Queues, workflow state, retries, and realtime feedback',
        outcome:
            'Automation stays reliable enough for production, not just demos.',
    },
];

export const architectureStages: ArchitectureStage[] = [
    {
        step: '01',
        title: 'Ingress',
        description:
            'External systems emit events through APIs, webhooks, calendar updates, and messaging callbacks.',
    },
    {
        step: '02',
        title: 'Normalization',
        description:
            'Provider-specific payloads are converted into product-safe primitives so the app works on stable internal models.',
    },
    {
        step: '03',
        title: 'Policy Layer',
        description:
            'Tenant-aware access rules and organization boundaries protect data before business logic or UI can misuse it.',
    },
    {
        step: '04',
        title: 'Execution',
        description:
            'Automation pipelines, real-time updates, and user-facing workflows run on a shared event spine with observability built in.',
    },
];

export const repoFallbacks = [
    {
        name: 'automation-orchestrator',
        description:
            'Patterns for webhook handling, connector normalization, and event-driven automation for enterprise architectures.',
        language: 'TypeScript',
        stars: 34,
        url: 'https://github.com/Suniljangid07',
    },
    {
        name: 'tenant-secure-platform',
        description:
            'Examples of multi-tenant data modeling with RLS-first access control and secure API boundaries.',
        language: 'C#',
        stars: 28,
        url: 'https://github.com/Suniljangid07',
    },
    {
        name: 'realtime-command-center',
        description:
            'Realtime messaging UX with operational telemetry, distributed tracing, and resilient state propagation.',
        language: 'React',
        stars: 42,
        url: 'https://github.com/Suniljangid07',
    },
];

export const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/suniljangid07/' },
    { label: 'GitHub', href: 'https://github.com/Suniljangid07' },
];

export const footerLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/suniljangid07/' },
    { label: 'GitHub', href: 'https://github.com/Suniljangid07' },
    { label: 'Email', href: 'mailto:jangidsunil248@gmail.com' },
    { label: 'X', href: 'https://x.com/suniljangid07' },
    { label: 'Instagram', href: 'https://www.instagram.com/sunil.jangid.07/' },
];
