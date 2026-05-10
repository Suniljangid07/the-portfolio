'use client';

import { motion } from 'framer-motion';
import {
    MdHub,
    MdOutlineEngineering,
    MdOutlineHealthAndSafety,
} from 'react-icons/md';
import { RiRobot2Line, RiShieldCheckLine } from 'react-icons/ri';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card3D } from '@/components/ui/card-3d';
import { SectionReveal } from '@/components/ui/section-reveal';
import { TechBadge } from '@/components/ui/tech-badge';
import { categoryIconMap, skillIconMap } from '@/lib/iconography';
import { capabilities, skillCategories } from '@/lib/data';

const capabilityIcons = [
    MdOutlineEngineering,
    MdHub,
    RiRobot2Line,
    RiShieldCheckLine,
    MdOutlineHealthAndSafety,
];

const capabilityGlows = ['cyan', 'blue', 'purple', 'green', 'orange'] as const;

const tickerItems = skillCategories
    .flatMap((category) => category.skills)
    .slice(0, 32);

export function SkillsSection() {
    return (
        <section
            id="skills"
            className="section-shell relative px-6 py-28 sm:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Skills"
                    title="A stack organized around product leverage."
                    description="Frontend, backend, cloud, integrations, and engineering principles arranged like a product system."
                />

                <div className="tech-ticker mt-10 overflow-hidden rounded-full border border-white/8 bg-white/4 py-3">
                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: 'linear',
                        }}
                        className="flex min-w-max items-center gap-3 pl-4"
                    >
                        {[...tickerItems, ...tickerItems].map((item, index) => (
                            <span
                                key={`${item}-${index}`}
                                className="data-chip font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300"
                            >
                                {item}
                            </span>
                        ))}
                    </motion.div>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-2">
                    {skillCategories.map((category, index) => {
                        const iconSpec = categoryIconMap[category.name];
                        const CategoryIcon = iconSpec.icon;
                        const glow =
                            capabilityGlows[index % capabilityGlows.length];

                        return (
                            <SectionReveal
                                key={category.name}
                                delay={index * 0.06}
                            >
                                <Card3D
                                    glow={glow}
                                    className="rounded-[32px] p-6 h-full"
                                >
                                    <div className="flex items-start  justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                                                <CategoryIcon
                                                    className={
                                                        iconSpec.className
                                                    }
                                                    size={iconSpec.size ?? 20}
                                                />
                                            </div>
                                            <div>
                                                <h3 className="mt-1 font-display text-2xl font-semibold text-white">
                                                    {category.name}
                                                </h3>
                                                <p className="text-sm leading-7 text-slate-300">
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-3">
                                        {category.skills.map((skill) => {
                                            const spec = skillIconMap[skill];
                                            return (
                                                <TechBadge
                                                    key={skill}
                                                    label={skill}
                                                    icon={spec?.icon}
                                                    iconClassName={
                                                        spec?.className
                                                    }
                                                />
                                            );
                                        })}
                                    </div>
                                </Card3D>
                            </SectionReveal>
                        );
                    })}
                </div>

                <div className="mt-14">
                    <div className="eyebrow-chip">Capabilities</div>
                    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        {capabilities.map((capability, index) => {
                            const Icon =
                                capabilityIcons[index] ?? MdOutlineEngineering;
                            const glow =
                                capabilityGlows[index % capabilityGlows.length];

                            return (
                                <SectionReveal
                                    key={capability.title}
                                    delay={index * 0.05}
                                >
                                    <Card3D
                                        glow={glow}
                                        className="rounded-[28px] p-5"
                                    >
                                        <div className="flex items-center  gap-4">
                                            <div className="flex h-14 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                                                <Icon
                                                    className="text-cyan-300"
                                                    size={26}
                                                />
                                            </div>
                                            <h3 className=" font-display text-xl font-semibold text-white">
                                                {capability.title}
                                            </h3>
                                        </div>
                                        <p className="mt-3 text-sm leading-7 text-slate-300">
                                            {capability.description}
                                        </p>
                                    </Card3D>
                                </SectionReveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
