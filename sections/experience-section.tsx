'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card3D } from '@/components/ui/card-3d';
import { SectionReveal } from '@/components/ui/section-reveal';
import { experiences } from '@/lib/data';

const experienceGlow = ['cyan', 'blue', 'purple'] as const;

export function ExperienceSection() {
    return (
        <section
            id="experience"
            className="section-shell relative px-6 py-28 sm:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Experience"
                    title="Built across product, platform, and operational reality."
                    description="A timeline where reliability, shipping discipline, and ownership evolved into founding-engineer execution."
                />

                <div className="relative mt-16">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: '-10%' }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="absolute left-6 md:left-10 top-0 bottom-0 w-[2px] -translate-x-1/2 origin-top bg-gradient-to-b from-cyan-500/0 via-cyan-500/40 to-purple-500/0 z-0"
                    />

                    <div className="space-y-12">
                        {experiences.map((item, index) => {
                            const live = item.company === 'Invira Health';

                            return (
                                <SectionReveal
                                    key={item.company}
                                    delay={index * 0.08}
                                    className="relative w-full"
                                >
                                    <div className="absolute top-10 left-6 md:left-10 h-5 w-5 -translate-x-1/2 rounded-full border border-cyan-300/30 bg-[rgba(5,8,18,0.9)] z-10 flex items-center justify-center">
                                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(0,212,255,0.95)]" />
                                    </div>

                                    <div className="relative pl-16 md:pl-24 w-full">
                                        <Card3D
                                            glow={experienceGlow[index]}
                                            className="rounded-[32px] sm:rounded-[40px] p-7 sm:p-10 border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.07]"
                                        >
                                            <div className="flex flex-wrap items-start justify-between gap-6">
                                                <div>
                                                    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-200">
                                                        {item.period}
                                                        {live ? (
                                                            <span className="data-chip gap-2 border-emerald-400/20 bg-emerald-400/10 text-emerald-200">
                                                                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                                                                current
                                                            </span>
                                                        ) : null}
                                                    </div>
                                                    <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                                                        {item.role}
                                                    </h3>
                                                    <p className="mt-2 text-lg text-slate-300">
                                                        {item.company}{' '}
                                                    </p>
                                                    <p className="mt-1 font-sans text-[14px] tracking-[0.24em] text-slate-500">
                                                        {item.location}
                                                    </p>
                                                </div>
                                                <div className="data-chip font-sans text-[11px] tracking-[0.22em] text-slate-300">
                                                    Chapter{' '}
                                                    {String(index + 1).padStart(
                                                        2,
                                                        '0',
                                                    )}
                                                </div>
                                            </div>

                                            {item.summary && (
                                                <p className="mt-6 text-base leading-8 text-slate-300">
                                                    {item.summary}
                                                </p>
                                            )}

                                            <ul className="mt-8 space-y-4 text-[15px] leading-relaxed text-slate-300 list-disc pl-5 marker:text-cyan-400">
                                                {item.achievements.map(
                                                    (achievement, i) => (
                                                        <li
                                                            key={i}
                                                            className="pl-2"
                                                        >
                                                            {achievement}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </Card3D>
                                    </div>
                                </SectionReveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
