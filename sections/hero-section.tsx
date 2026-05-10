'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FiArrowDownRight } from 'react-icons/fi';
import { MdHub, MdOutlineEngineering } from 'react-icons/md';
import { RiBrain2Line, RiShieldCheckLine } from 'react-icons/ri';
import { CountUp } from '@/components/ui/count-up';
import { GlowButton } from '@/components/ui/glow-button';
import { Card3D } from '@/components/ui/card-3d';
import { SectionReveal } from '@/components/ui/section-reveal';
import { TerminalBlock } from '@/components/ui/terminal-block';
import { heroHighlights, heroSignals } from '@/lib/data';

const rotatingSignals = [
    'Founding Software Engineer',
    'AI-first platforms',
    'Integrations and automation',
    'Multi-tenant system design',
    'Scalable backend architecture',
    'Low-latency distributed systems',
    'Developer tooling and observability',
];

const heroMetrics = [
    { value: 4, suffix: '+', label: 'Years building' },
    { value: 11, suffix: '', label: 'Case studies shipped' },
    { value: 8, suffix: '+', label: 'Integration APIs' },
];

const pillarIcons = [MdOutlineEngineering, MdHub, RiBrain2Line];
const signalIcons = [
    MdOutlineEngineering,
    RiBrain2Line,
    MdHub,
    RiShieldCheckLine,
];

export function HeroSection() {
    const [signalIndex, setSignalIndex] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setSignalIndex((current) => (current + 1) % rotatingSignals.length);
        }, 2300);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <section
            id="hero"
            className="section-shell relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24"
        >
            <div className="absolute inset-x-0 top-8 h-[42rem] bg-[radial-gradient(circle_at_24%_24%,rgba(0,212,255,0.16),transparent_22%),radial-gradient(circle_at_70%_15%,rgba(79,142,247,0.18),transparent_24%),radial-gradient(circle_at_60%_62%,rgba(124,58,237,0.12),transparent_26%)]" />
            <div className="mx-auto w-full max-w-7xl">
                <div className="mt-7 flex gap-3">
                    {heroSignals.map((signal, index) => {
                        const SignalIcon =
                            signalIcons[index] ?? MdOutlineEngineering;

                        return (
                            <span
                                key={signal}
                                className="data-chip font-space_grotesk_154b09cb-module__lmdqzG__variable text-[11px] uppercase tracking-[0.24em] text-slate-300"
                            >
                                <SignalIcon
                                    className={
                                        index % 2 === 0
                                            ? 'text-cyan-300'
                                            : 'text-purple-300'
                                    }
                                    size={14}
                                />
                                {signal}
                            </span>
                        );
                    })}
                </div>
                <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                    <SectionReveal className="relative z-10 max-w-full">
                        <h1 className="mt-10 font-display text-[3.7rem] font-semibold leading-[0.88] tracking-[-0.09em] text-white sm:text-[5.4rem] lg:text-[6.45rem]">
                            Sunil Jangid
                            <span className="mt-3 block text-shimmer">
                                builds systems feel clear, fast, and inevitable.
                            </span>
                        </h1>

                        <div className="mt-7 flex items-center gap-3">
                            <div className="data-chip font-mono text-[11px] uppercase tracking-[0.26em] text-cyan-100">
                                rotating role
                            </div>
                            <div className="relative h-7 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={rotatingSignals[signalIndex]}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -16 }}
                                        transition={{ duration: 0.35 }}
                                        className="font-mono text-sm text-slate-300"
                                    >
                                        {rotatingSignals[signalIndex]}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                            Founding Software Engineer focused on AI-enabled
                            products, integration-heavy platforms, secure
                            multi-tenant systems, and clean interfaces backed by
                            resilient product architecture.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <GlowButton
                                href="#projects"
                                text="Explore Work"
                                icon={
                                    <FiArrowDownRight
                                        size={16}
                                        className="text-indigo-900"
                                    />
                                }
                                className="bg-indigo-900 min-w-40"
                            />
                            <GlowButton
                                href="https://github.com/Suniljangid07"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-transparent min-w-40"
                                icon={
                                    <FaGithub
                                        size={16}
                                        className="text-gray-950"
                                    />
                                }
                                text="View GitHub"
                            />
                            <GlowButton
                                href="https://www.linkedin.com/in/suniljangid07/"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-transparent min-w-40"
                                icon={
                                    <FaLinkedin
                                        size={16}
                                        className="text-blue-600"
                                    />
                                }
                                text="Linkedin"
                            />
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            {heroMetrics.map((metric, index) => (
                                <Card3D
                                    key={metric.label}
                                    glow={
                                        index === 0
                                            ? 'cyan'
                                            : index === 1
                                              ? 'blue'
                                              : 'purple'
                                    }
                                    className="rounded-[26px] p-5"
                                >
                                    <div className="font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                                        <CountUp
                                            end={metric.value}
                                            suffix={metric.suffix}
                                        />
                                    </div>
                                    <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.26em] text-slate-500">
                                        {metric.label}
                                    </div>
                                </Card3D>
                            ))}
                        </div>
                    </SectionReveal>

                    <SectionReveal delay={0.08} className="relative">
                        <Card3D
                            glow="cyan"
                            className="rounded-[36px] p-6 sm:p-8"
                        >
                            <div className="grid gap-5">
                                <TerminalBlock
                                    title="~/suniljangid"
                                    lines={[
                                        'name     -> Sunil Jangid',
                                        'role     -> Founding Software Engineer',
                                        'location -> Jodhpur, India',
                                        'focus    -> AI + Integrations + Multi-tenant',
                                        'experience -> 4+ years crafting platforms',
                                        'status   -> [LIVE] Available',
                                    ]}
                                />

                                <div className="grid gap-4 sm:grid-cols-2">
                                    {heroHighlights.map((item, index) => {
                                        const HighlightIcon =
                                            pillarIcons[index] ??
                                            MdOutlineEngineering;

                                        return (
                                            <Card3D
                                                key={item.label}
                                                glow={
                                                    index === 0
                                                        ? 'cyan'
                                                        : index === 1
                                                          ? 'blue'
                                                          : 'purple'
                                                }
                                                className="rounded-[28px] p-5 sm:col-span-1"
                                            >
                                                <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
                                                    <HighlightIcon
                                                        className="text-cyan-300"
                                                        size={14}
                                                    />
                                                    {item.label}
                                                </div>
                                                <p className="mt-4 text-sm leading-7 text-slate-200">
                                                    {item.value}
                                                </p>
                                            </Card3D>
                                        );
                                    })}
                                </div>
                            </div>
                        </Card3D>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
}
