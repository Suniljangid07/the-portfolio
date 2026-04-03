import type { IconType } from "react-icons";
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
} from "react-icons/fa6";
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
} from "react-icons/md";
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
} from "react-icons/ri";
import {
  SiDotnet,
  SiExpress,
  SiFramer,
  SiGoogle,
  SiMeta,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiWhatsapp,
} from "react-icons/si";
import { TbActivityHeartbeat, TbBrandOauth, TbCloudCog, TbCodeCircle2, TbLockSquareRounded, TbProgressCheck, TbRouteAltLeft, TbTopologyStar3, TbWebhook } from "react-icons/tb";

export type IconSpec = {
  icon: IconType;
  className: string;
  size?: number;
};

export const categoryIconMap: Record<string, IconSpec> = {
  Frontend: { icon: MdDevices, className: "text-sky-300", size: 22 },
  Backend: { icon: FaDatabase, className: "text-emerald-300", size: 21 },
  Cloud: { icon: MdCloudQueue, className: "text-indigo-300", size: 22 },
  Integrations: { icon: MdHub, className: "text-cyan-300", size: 22 },
  "Engineering Principles": {
    icon: MdOutlineEngineering,
    className: "text-fuchsia-300",
    size: 22,
  },
};

export const skillIconMap: Record<string, IconSpec> = {
  "Next.js": { icon: SiNextdotjs, className: "text-white", size: 16 },
  React: { icon: FaReact, className: "text-cyan-300", size: 16 },
  TypeScript: { icon: SiTypescript, className: "text-sky-400", size: 15 },
  "Tailwind CSS": { icon: SiTailwindcss, className: "text-cyan-300", size: 16 },
  "Framer Motion": { icon: SiFramer, className: "text-fuchsia-300", size: 15 },
  "Responsive UI": { icon: MdDevices, className: "text-slate-200", size: 16 },
  "Component Architecture": { icon: TbTopologyStar3, className: "text-indigo-300", size: 16 },
  "Performance Optimization": { icon: FaBolt, className: "text-amber-300", size: 14 },
  "UX Systems": { icon: RiRadarLine, className: "text-teal-300", size: 15 },
  "Node.js": { icon: FaNodeJs, className: "text-green-400", size: 16 },
  "Express.js": { icon: SiExpress, className: "text-slate-200", size: 15 },
  "C#": { icon: TbCodeCircle2, className: "text-violet-300", size: 15 },
  ".NET": { icon: SiDotnet, className: "text-indigo-300", size: 15 },
  OOP: { icon: TbCodeCircle2, className: "text-fuchsia-300", size: 15 },
  "REST APIs": { icon: MdApi, className: "text-cyan-300", size: 16 },
  Postgres: { icon: SiPostgresql, className: "text-sky-400", size: 15 },
  SQL: { icon: FaDatabase, className: "text-blue-300", size: 14 },
  Supabase: { icon: SiSupabase, className: "text-emerald-300", size: 15 },
  Webhooks: { icon: TbWebhook, className: "text-cyan-300", size: 16 },
  "Queue-driven automation": { icon: RiRobot2Line, className: "text-amber-300", size: 15 },
  Authentication: { icon: RiLock2Line, className: "text-emerald-300", size: 15 },
  Authorization: { icon: RiShieldCheckLine, className: "text-sky-300", size: 15 },
  "Background Jobs": { icon: RiSettings4Line, className: "text-violet-300", size: 15 },
  RLS: { icon: TbLockSquareRounded, className: "text-cyan-300", size: 15 },
  Serverless: { icon: TbCloudCog, className: "text-indigo-300", size: 16 },
  Observability: { icon: TbActivityHeartbeat, className: "text-rose-300", size: 16 },
  Caching: { icon: FaDatabase, className: "text-amber-300", size: 14 },
  "Edge-ready architecture": { icon: MdArchitecture, className: "text-slate-200", size: 16 },
  "Multi-tenant Systems": { icon: RiBuilding2Line, className: "text-cyan-300", size: 15 },
  "Scalable Architecture": { icon: RiFlowChart, className: "text-indigo-300", size: 15 },
  Monitoring: { icon: RiRadarLine, className: "text-emerald-300", size: 15 },
  "Deployment Pipelines": { icon: TbProgressCheck, className: "text-fuchsia-300", size: 15 },
  "Google APIs": { icon: SiGoogle, className: "text-rose-300", size: 15 },
  "Microsoft APIs": { icon: FaWindows, className: "text-sky-300", size: 15 },
  "Meta APIs": { icon: SiMeta, className: "text-indigo-300", size: 15 },
  "Open Dental": { icon: RiShieldCheckLine, className: "text-cyan-300", size: 15 },
  NexHealth: { icon: RiBrain2Line, className: "text-teal-300", size: 15 },
  "OAuth 2.0": { icon: TbBrandOauth, className: "text-fuchsia-300", size: 15 },
  "Webhook Orchestration": { icon: TbRouteAltLeft, className: "text-cyan-300", size: 15 },
  "API Normalization": { icon: MdHub, className: "text-indigo-300", size: 15 },
  "Retry Logic": { icon: RiSettings4Line, className: "text-amber-300", size: 15 },
  "Event-driven Integrations": { icon: RiFlowChart, className: "text-teal-300", size: 15 },
  "SOLID Principles": { icon: FaShieldHalved, className: "text-cyan-300", size: 14 },
  "Design Patterns": { icon: MdArchitecture, className: "text-fuchsia-300", size: 16 },
  "Clean Architecture": { icon: MdArchitecture, className: "text-sky-300", size: 16 },
  "Domain Modeling": { icon: RiFlowChart, className: "text-emerald-300", size: 15 },
  "Scalable System Design": { icon: MdHub, className: "text-indigo-300", size: 16 },
  "Separation of Concerns": { icon: TbTopologyStar3, className: "text-amber-300", size: 15 },
  "Code Review": { icon: TbProgressCheck, className: "text-cyan-300", size: 15 },
  Debugging: { icon: RiRadarLine, className: "text-rose-300", size: 15 },
  Refactoring: { icon: RiSettings4Line, className: "text-violet-300", size: 15 },
  "Problem Solving": { icon: RiBrain2Line, className: "text-fuchsia-300", size: 15 },
};

export const projectIconMap: Record<string, IconSpec> = {
  "ai-dental-platform": { icon: SiOpenai, className: "text-cyan-300", size: 22 },
  "integration-pipelines": { icon: MdHub, className: "text-emerald-300", size: 22 },
  "realtime-communication-systems": { icon: RiRadarLine, className: "text-fuchsia-300", size: 22 },
  "supabase-rls-architecture": { icon: RiShieldCheckLine, className: "text-sky-300", size: 22 },
  "calendar-sync-platform": { icon: MdOutlineSchedule, className: "text-amber-300", size: 22 },
  "meta-messaging-flows": { icon: SiWhatsapp, className: "text-green-400", size: 21 },
  "multi-tenant-admin-platform": { icon: MdOutlineManageAccounts, className: "text-indigo-300", size: 22 },
  "workflow-automation-engine": { icon: RiRobot2Line, className: "text-amber-300", size: 22 },
  "realtime-ops-dashboard": { icon: TbActivityHeartbeat, className: "text-rose-300", size: 22 },
  "api-domain-layer-refactors": { icon: MdArchitecture, className: "text-fuchsia-300", size: 22 },
  "cross-system-data-normalization": { icon: RiFlowChart, className: "text-cyan-300", size: 22 },
};

export const socialIconMap: Record<string, IconSpec> = {
  LinkedIn: { icon: FaLinkedin, className: "text-sky-300", size: 18 },
  GitHub: { icon: FaGithub, className: "text-slate-100", size: 18 },
  Email: { icon: FaEnvelope, className: "text-fuchsia-300", size: 17 },
};

export const navIconMap: Record<string, IconSpec> = {
  Start: { icon: FaBolt, className: "text-cyan-300", size: 13 },
  About: { icon: MdOutlineEngineering, className: "text-fuchsia-300", size: 14 },
  Skills: { icon: MdDevices, className: "text-sky-300", size: 14 },
  Projects: { icon: MdHub, className: "text-emerald-300", size: 14 },
  Experience: { icon: MdOutlineWorkHistory, className: "text-amber-300", size: 14 },
  Architecture: { icon: MdArchitecture, className: "text-indigo-300", size: 14 },
  GitHub: { icon: FaGithub, className: "text-slate-100", size: 14 },
  Contact: { icon: FaEnvelope, className: "text-cyan-300", size: 14 },
};

export const experienceIcons = {
  period: { icon: MdOutlineWorkHistory, className: "text-cyan-300", size: 16 },
  role: { icon: FaGear, className: "text-fuchsia-300", size: 14 },
  location: { icon: RiMapPin2Line, className: "text-emerald-300", size: 15 },
};

export const aboutSummaryIconMap: Record<string, IconSpec> = {
  "Core throughline": { icon: RiFlowChart, className: "text-cyan-300", size: 18 },
  "Working style": { icon: RiSettings4Line, className: "text-fuchsia-300", size: 18 },
  "Engineering lens": { icon: MdOutlineEngineering, className: "text-emerald-300", size: 18 },
};

export const aboutJourneyIconMap: Record<string, IconSpec> = {
  "Founding engineer mindset": {
    icon: MdHub,
    className: "text-cyan-300",
    size: 22,
  },
  "Software engineering jump": {
    icon: TbCodeCircle2,
    className: "text-fuchsia-300",
    size: 21,
  },
  "PLC foundations": {
    icon: FaGear,
    className: "text-amber-300",
    size: 20,
  },
};

export const architectureSummaryIconMap: Record<string, IconSpec> = {
  "Primary concerns": { icon: MdHub, className: "text-cyan-300", size: 18 },
  "Design posture": { icon: RiShieldCheckLine, className: "text-fuchsia-300", size: 18 },
  "Engineering goal": { icon: MdOutlineEngineering, className: "text-emerald-300", size: 18 },
};

export const architectureBlockIconMap: Record<string, IconSpec> = {
  "integration-mesh": { icon: MdHub, className: "text-cyan-300", size: 22 },
  "multi-tenant-core": { icon: RiBuilding2Line, className: "text-indigo-300", size: 22 },
  "automation-engine": { icon: RiRobot2Line, className: "text-amber-300", size: 22 },
};

export const architectureStageIconMap: Record<string, IconSpec> = {
  "01": { icon: RiRadarLine, className: "text-cyan-300", size: 18 },
  "02": { icon: RiFlowChart, className: "text-fuchsia-300", size: 18 },
  "03": { icon: RiShieldCheckLine, className: "text-emerald-300", size: 18 },
  "04": { icon: RiRobot2Line, className: "text-amber-300", size: 18 },
};
