import type { IconType } from 'react-icons';
import { BsMicrosoft } from 'react-icons/bs';
import {
    FaBolt,
    FaDatabase,
    FaEnvelope,
    FaGear,
    FaGithub,
    FaLinkedin,
    FaNodeJs,
    FaReact,
    FaShieldHalved,
    FaWindows,
    FaPython,
    FaJs,
    FaGitAlt,
    FaMicrosoft,
    FaX,
} from 'react-icons/fa6';
import { LiaAws } from 'react-icons/lia';
import {
    MdApi,
    MdArchitecture,
    MdCloudQueue,
    MdDevices,
    MdHub,
    MdOutlineEngineering,
    MdOutlineManageAccounts,
    MdOutlineSchedule,
    MdOutlineWorkHistory,
    MdOutlineSync,
    MdWifiTethering,
} from 'react-icons/md';
import {
    RiBrain2Line,
    RiBuilding2Line,
    RiFlowChart,
    RiLock2Line,
    RiMapPin2Line,
    RiRadarLine,
    RiRobot2Line,
    RiSettings4Line,
    RiShieldCheckLine,
} from 'react-icons/ri';
import {
    SiDotnet,
    SiExpress,
    SiFramer,
    SiGoogle,
    SiMeta,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiBootstrap,
    SiRabbitmq,
    SiDocker,
    SiOkta,
    SiJira,
    SiPostman,
    SiGitlab,
    SiFigma,
} from 'react-icons/si';
import {
    TbActivityHeartbeat,
    TbBrandOauth,
    TbCloudCog,
    TbCodeCircle2,
    TbLockSquareRounded,
    TbProgressCheck,
    TbRouteAltLeft,
    TbTopologyStar3,
    TbWebhook,
    TbPlugConnected,
} from 'react-icons/tb';
import { TiSocialInstagram } from 'react-icons/ti';
import { VscAzure } from 'react-icons/vsc';

export type IconSpec = {
    icon: IconType;
    className: string;
    size?: number;
};

export const categoryIconMap: Record<string, IconSpec> = {
    Frontend: { icon: MdDevices, className: 'text-sky-300', size: 24 },
    Backend: { icon: FaDatabase, className: 'text-emerald-300', size: 23 },
    Cloud: { icon: MdCloudQueue, className: 'text-indigo-300', size: 24 },
    Integrations: { icon: MdHub, className: 'text-cyan-300', size: 24 },
    'Engineering Principles': {
        icon: MdOutlineEngineering,
        className: 'text-fuchsia-300',
        size: 24,
    },
    'Tools & Methodologies': {
        icon: FaGear,
        className: 'text-slate-300',
        size: 22,
    },
    'Security & Authentication': {
        icon: RiShieldCheckLine,
        className: 'text-emerald-300',
        size: 24,
    },
};

export const skillIconMap: Record<string, IconSpec> = {
    'Next.js': { icon: SiNextdotjs, className: 'text-white', size: 16 },
    React: { icon: FaReact, className: 'text-cyan-300', size: 16 },
    Redux: { icon: FaReact, className: 'text-emerald-300', size: 16 },
    TypeScript: { icon: SiTypescript, className: 'text-sky-400', size: 15 },
    'Tailwind CSS': {
        icon: SiTailwindcss,
        className: 'text-cyan-300',
        size: 16,
    },
    'Framer Motion': {
        icon: SiFramer,
        className: 'text-fuchsia-300',
        size: 15,
    },
    'Responsive UI': { icon: MdDevices, className: 'text-slate-200', size: 16 },
    'Component Architecture': {
        icon: TbTopologyStar3,
        className: 'text-indigo-300',
        size: 16,
    },
    'Performance Optimization': {
        icon: FaBolt,
        className: 'text-amber-300',
        size: 14,
    },
    'UX Systems': { icon: RiRadarLine, className: 'text-teal-300', size: 15 },
    'Node.js': { icon: FaNodeJs, className: 'text-green-400', size: 16 },
    'Express.js': { icon: SiExpress, className: 'text-slate-200', size: 15 },
    'C#': { icon: TbCodeCircle2, className: 'text-violet-300', size: 15 },
    '.NET': { icon: SiDotnet, className: 'text-indigo-300', size: 15 },
    OOP: { icon: TbCodeCircle2, className: 'text-fuchsia-300', size: 15 },
    'REST APIs': { icon: MdApi, className: 'text-cyan-300', size: 16 },
    Postgres: { icon: SiPostgresql, className: 'text-sky-400', size: 15 },
    SQL: { icon: FaDatabase, className: 'text-blue-300', size: 14 },
    MongoDB: { icon: SiMongodb, className: 'text-green-400', size: 14 },
    Supabase: { icon: SiSupabase, className: 'text-emerald-300', size: 15 },
    Webhooks: { icon: TbWebhook, className: 'text-cyan-300', size: 16 },
    'Queue-driven automation': {
        icon: RiRobot2Line,
        className: 'text-amber-300',
        size: 15,
    },
    Authentication: {
        icon: RiLock2Line,
        className: 'text-emerald-300',
        size: 15,
    },
    Authorization: {
        icon: RiShieldCheckLine,
        className: 'text-sky-300',
        size: 15,
    },
    'Background Jobs': {
        icon: RiSettings4Line,
        className: 'text-violet-300',
        size: 15,
    },
    RLS: { icon: TbLockSquareRounded, className: 'text-cyan-300', size: 15 },
    Serverless: { icon: TbCloudCog, className: 'text-indigo-300', size: 16 },
    Observability: {
        icon: TbActivityHeartbeat,
        className: 'text-rose-300',
        size: 16,
    },
    Caching: { icon: FaDatabase, className: 'text-amber-300', size: 14 },
    'Edge-ready architecture': {
        icon: MdArchitecture,
        className: 'text-slate-200',
        size: 16,
    },
    'Multi-tenant Systems': {
        icon: RiBuilding2Line,
        className: 'text-cyan-300',
        size: 15,
    },
    'Scalable Architecture': {
        icon: RiFlowChart,
        className: 'text-indigo-300',
        size: 15,
    },
    Monitoring: { icon: RiRadarLine, className: 'text-emerald-300', size: 15 },
    'Deployment Pipelines': {
        icon: TbProgressCheck,
        className: 'text-fuchsia-300',
        size: 15,
    },
    'Google APIs': { icon: SiGoogle, className: 'text-rose-300', size: 15 },
    'Microsoft APIs': { icon: FaWindows, className: 'text-sky-300', size: 15 },
    'Meta APIs': { icon: SiMeta, className: 'text-indigo-300', size: 15 },
    'Open Dental': {
        icon: RiShieldCheckLine,
        className: 'text-cyan-300',
        size: 15,
    },
    NexHealth: { icon: RiBrain2Line, className: 'text-teal-300', size: 15 },
    'OAuth 2.0': {
        icon: TbBrandOauth,
        className: 'text-fuchsia-300',
        size: 15,
    },
    'Webhook Orchestration': {
        icon: TbRouteAltLeft,
        className: 'text-cyan-300',
        size: 15,
    },
    'API Normalization': {
        icon: MdHub,
        className: 'text-indigo-300',
        size: 15,
    },
    'Retry Logic': {
        icon: RiSettings4Line,
        className: 'text-amber-300',
        size: 15,
    },
    'Event-driven Integrations': {
        icon: RiFlowChart,
        className: 'text-teal-300',
        size: 15,
    },
    'SOLID Principles': {
        icon: FaShieldHalved,
        className: 'text-cyan-300',
        size: 14,
    },
    'Design Patterns': {
        icon: MdArchitecture,
        className: 'text-fuchsia-300',
        size: 16,
    },
    'Clean Architecture': {
        icon: MdArchitecture,
        className: 'text-sky-300',
        size: 16,
    },
    'Domain Modeling': {
        icon: RiFlowChart,
        className: 'text-emerald-300',
        size: 15,
    },
    'Scalable System Design': {
        icon: MdHub,
        className: 'text-indigo-300',
        size: 16,
    },
    'Separation of Concerns': {
        icon: TbTopologyStar3,
        className: 'text-amber-300',
        size: 15,
    },
    'Code Review': {
        icon: TbProgressCheck,
        className: 'text-cyan-300',
        size: 15,
    },
    Debugging: { icon: RiRadarLine, className: 'text-rose-300', size: 15 },
    Refactoring: {
        icon: RiSettings4Line,
        className: 'text-violet-300',
        size: 15,
    },
    'Problem Solving': {
        icon: RiBrain2Line,
        className: 'text-fuchsia-300',
        size: 15,
    },
    Python: { icon: FaPython, className: 'text-yellow-400', size: 15 },
    'SQL Server': { icon: FaDatabase, className: 'text-rose-400', size: 14 },
    'LLMs integration': {
        icon: RiBrain2Line,
        className: 'text-fuchsia-300',
        size: 16,
    },
    JavaScript: { icon: FaJs, className: 'text-yellow-300', size: 15 },
    'Context API': { icon: FaReact, className: 'text-cyan-300', size: 15 },
    Bootstrap: { icon: SiBootstrap, className: 'text-violet-400', size: 15 },
    'Fluent UI': { icon: BsMicrosoft, className: 'text-sky-400', size: 14 },
    Microservices: {
        icon: TbTopologyStar3,
        className: 'text-indigo-300',
        size: 16,
    },
    RabbitMQ: { icon: SiRabbitmq, className: 'text-orange-400', size: 15 },
    SignalR: { icon: MdWifiTethering, className: 'text-sky-300', size: 16 },
    WebSocket: {
        icon: TbPlugConnected,
        className: 'text-emerald-300',
        size: 16,
    },
    Azure: { icon: VscAzure, className: 'text-sky-400', size: 15 },
    AWS: { icon: LiaAws, className: 'text-amber-400', size: 15 },
    Docker: { icon: SiDocker, className: 'text-blue-400', size: 15 },
    'CI/CD': { icon: TbProgressCheck, className: 'text-green-400', size: 16 },
    Git: { icon: FaGitAlt, className: 'text-orange-500', size: 15 },
    JWT: { icon: RiLock2Line, className: 'text-fuchsia-300', size: 15 },
    'Okta SSO': { icon: SiOkta, className: 'text-blue-500', size: 15 },
    'Role-Based Access Control (RBAC)': {
        icon: MdOutlineManageAccounts,
        className: 'text-teal-300',
        size: 16,
    },
    'Claude Code': {
        icon: RiRobot2Line,
        className: 'text-orange-300',
        size: 15,
    },
    Cursor: { icon: TbCodeCircle2, className: 'text-slate-100', size: 15 },
    Codex: { icon: TbCodeCircle2, className: 'text-blue-300', size: 15 },
    JIRA: { icon: SiJira, className: 'text-blue-400', size: 15 },
    Agile: { icon: MdOutlineSync, className: 'text-emerald-300', size: 16 },
    Postman: { icon: SiPostman, className: 'text-orange-400', size: 15 },
    'Power Platform': {
        icon: FaMicrosoft,
        className: 'text-sky-400',
        size: 14,
    },
    GitHub: { icon: FaGithub, className: 'text-slate-100', size: 15 },
    GitLab: { icon: SiGitlab, className: 'text-orange-400', size: 15 },
    Figma: { icon: SiFigma, className: 'text-fuchsia-400', size: 15 },
    '.NET Core': { icon: SiDotnet, className: 'text-indigo-300', size: 15 },
};

export const projectIconMap: Record<string, IconSpec> = {
    'invira-health': {
        icon: RiRadarLine,
        className: 'text-cyan-300',
        size: 22,
    },
    'invira-careers': {
        icon: MdOutlineManageAccounts,
        className: 'text-fuchsia-300',
        size: 22,
    },
    'acting-office': {
        icon: RiBuilding2Line,
        className: 'text-emerald-300',
        size: 22,
    },
    debitam: { icon: TbActivityHeartbeat, className: 'text-sky-300', size: 22 },
    sponiscore: { icon: RiFlowChart, className: 'text-amber-300', size: 22 },
    'total-time-pay': {
        icon: MdOutlineSchedule,
        className: 'text-indigo-300',
        size: 22,
    },
};

export const socialIconMap: Record<string, IconSpec> = {
    LinkedIn: { icon: FaLinkedin, className: 'text-sky-300', size: 18 },
    GitHub: { icon: FaGithub, className: 'text-slate-100', size: 18 },
    Email: { icon: FaEnvelope, className: 'text-fuchsia-300', size: 17 },
    Instagram: {
        icon: TiSocialInstagram,
        className: 'text-pink-300',
        size: 17,
    },
    X: { icon: FaX, className: 'text-slate-300', size: 17 },
};

export const navIconMap: Record<string, IconSpec> = {
    Start: { icon: FaBolt, className: 'text-cyan-300', size: 13 },
    About: {
        icon: MdOutlineEngineering,
        className: 'text-fuchsia-300',
        size: 14,
    },
    Skills: { icon: MdDevices, className: 'text-sky-300', size: 14 },
    Projects: { icon: MdHub, className: 'text-emerald-300', size: 14 },
    Experience: {
        icon: MdOutlineWorkHistory,
        className: 'text-amber-300',
        size: 14,
    },
    Architecture: {
        icon: MdArchitecture,
        className: 'text-indigo-300',
        size: 14,
    },
    GitHub: { icon: FaGithub, className: 'text-slate-100', size: 14 },
    Contact: { icon: FaEnvelope, className: 'text-cyan-300', size: 14 },
};

export const experienceIcons = {
    period: {
        icon: MdOutlineWorkHistory,
        className: 'text-cyan-300',
        size: 16,
    },
    role: { icon: FaGear, className: 'text-fuchsia-300', size: 14 },
    location: { icon: RiMapPin2Line, className: 'text-emerald-300', size: 15 },
};

export const aboutSummaryIconMap: Record<string, IconSpec> = {
    'Core throughline': {
        icon: RiFlowChart,
        className: 'text-cyan-300',
        size: 18,
    },
    'Working style': {
        icon: RiSettings4Line,
        className: 'text-fuchsia-300',
        size: 18,
    },
    'Engineering lens': {
        icon: MdOutlineEngineering,
        className: 'text-emerald-300',
        size: 18,
    },
};

export const aboutJourneyIconMap: Record<string, IconSpec> = {
    'Founding engineer mindset': {
        icon: MdHub,
        className: 'text-cyan-300',
        size: 22,
    },
    'Software engineering jump': {
        icon: TbCodeCircle2,
        className: 'text-fuchsia-300',
        size: 21,
    },
    'PLC foundations': {
        icon: FaGear,
        className: 'text-amber-300',
        size: 20,
    },
};

export const architectureSummaryIconMap: Record<string, IconSpec> = {
    'Primary concerns': { icon: MdHub, className: 'text-cyan-300', size: 18 },
    'Design posture': {
        icon: RiShieldCheckLine,
        className: 'text-fuchsia-300',
        size: 18,
    },
    'Engineering goal': {
        icon: MdOutlineEngineering,
        className: 'text-emerald-300',
        size: 18,
    },
};

export const architectureBlockIconMap: Record<string, IconSpec> = {
    integration: { icon: MdHub, className: 'text-cyan-300', size: 24 },
    'tenant-core': {
        icon: RiBuilding2Line,
        className: 'text-indigo-300',
        size: 24,
    },
    automation: { icon: RiRobot2Line, className: 'text-amber-300', size: 24 },
};

export const architectureStageIconMap: Record<string, IconSpec> = {
    '01': { icon: RiRadarLine, className: 'text-cyan-300', size: 24 },
    '02': { icon: RiFlowChart, className: 'text-fuchsia-300', size: 24 },
    '03': { icon: RiShieldCheckLine, className: 'text-emerald-300', size: 24 },
    '04': { icon: RiRobot2Line, className: 'text-amber-300', size: 24 },
};
