'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card3D } from '@/components/ui/card-3d';
import { SectionReveal } from '@/components/ui/section-reveal';
import { projectIconMap } from '@/lib/iconography';
import { projects } from '@/lib/data';
import { TbCodeCircle2 } from 'react-icons/tb';

export function ProjectsSection() {
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const selectedProject =
        projects.find((project) => project.slug === activeProject) ?? null;

    return (
        <section
            id="projects"
            className="section-shell relative px-6 py-28 sm:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Projects"
                    title="Proof through hard problems."
                    description="Case studies where integrations, automation, product UX, and scalable backend systems had to work together."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => {
                        const iconSpec = projectIconMap[project.slug];
                        const Icon = iconSpec?.icon;
                        const glow =
                            index % 3 === 0
                                ? 'cyan'
                                : index % 3 === 1
                                  ? 'blue'
                                  : 'purple';
                        const gradientBg =
                            glow === 'cyan'
                                ? 'from-cyan-500/20'
                                : glow === 'blue'
                                  ? 'from-blue-500/20'
                                  : 'from-fuchsia-500/20';
                        const iconColor =
                            glow === 'cyan'
                                ? 'text-cyan-300'
                                : glow === 'blue'
                                  ? 'text-blue-300'
                                  : 'text-fuchsia-300';

                        return (
                            <SectionReveal
                                key={project.slug}
                                delay={index * 0.04}
                                className="col-span-1"
                            >
                                <Card3D
                                    glow={glow}
                                    className="h-full rounded-[32px] p-2 flex flex-col group bg-black/40 backdrop-blur-xl border border-white/5"
                                >
                                    {/* Top Visual Area */}
                                    <div
                                        className={`relative h-48 sm:h-52 w-full overflow-hidden rounded-[26px] bg-gradient-to-br ${gradientBg} to-transparent p-6 flex items-center justify-center`}
                                    >
                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

                                        {/* The Faux Browser Window */}
                                        <div className="relative w-full max-w-[85%] aspect-video rounded-t-xl bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col overflow-hidden translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                                            <div className="h-6 w-full border-b border-white/10 bg-white/5 flex items-center px-3 gap-1.5">
                                                <div className="h-2 w-2 rounded-full bg-rose-500/80" />
                                                <div className="h-2 w-2 rounded-full bg-amber-500/80" />
                                                <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
                                            </div>
                                            <div className="relative flex-1 bg-[#0a0a0a] overflow-hidden">
                                                {project.url ? (
                                                    <>
                                                        {/* Overlay to prevent interaction with the iframe */}
                                                        <div className="absolute inset-0 z-10 bg-transparent" />
                                                        <iframe
                                                            src={project.url}
                                                            className="absolute top-0 left-0 w-[400%] h-[400%] border-0 opacity-70 group-hover:opacity-100 transition-opacity duration-700 origin-top-left scale-[0.25] pointer-events-none"
                                                            title={`${project.title} Thumbnail`}
                                                            loading="lazy"
                                                            tabIndex={-1}
                                                        />
                                                    </>
                                                ) : (
                                                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-white/5 to-transparent">
                                                        {Icon ? (
                                                            <Icon
                                                                size={28}
                                                                className={`${iconColor} drop-shadow-md opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                                                            />
                                                        ) : null}
                                                        <span className="font-display font-medium text-sm tracking-wide text-slate-300 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                                            {project.title}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Platform Badge */}
                                        <div className="absolute bottom-4 right-4 rounded-md bg-white/10 border border-white/10 px-2.5 py-1 text-[10px] font-mono text-white uppercase tracking-wider backdrop-blur-md">
                                            Web App
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                                        <h3 className="font-display text-2xl font-semibold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack Pills */}
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {project.stack
                                                .slice(0, 5)
                                                .map((item) => (
                                                    <span
                                                        key={item}
                                                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            {project.stack.length > 5 && (
                                                <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                                                    +{project.stack.length - 5}
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between gap-3 mt-auto">
                                            <button
                                                onClick={() =>
                                                    setActiveProject(
                                                        project.slug,
                                                    )
                                                }
                                                className={`flex-1 rounded-xl px-4 py-2.5 text-center text-sm font-medium ${iconColor} transition-all inline-flex justify-center items-center gap-2 border ${
                                                    glow === 'cyan'
                                                        ? 'bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/20'
                                                        : glow === 'blue'
                                                          ? 'bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20'
                                                          : 'bg-fuchsia-500/10 hover:bg-fuchsia-500/20 border-fuchsia-500/20'
                                                }`}
                                            >
                                                <TbCodeCircle2 size={16} /> Case
                                                Study
                                            </button>
                                            {project.url ? (
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex-1 rounded-xl border border-white/10 px-4 py-2.5 text-center text-sm font-medium text-slate-300 transition-all hover:border-cyan-500/30 hover:text-white inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10"
                                                >
                                                    Website{' '}
                                                    <FiArrowUpRight size={16} />
                                                </a>
                                            ) : null}
                                        </div>
                                    </div>
                                </Card3D>
                            </SectionReveal>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/78 px-6 py-10 backdrop-blur-xl"
                        onClick={() => setActiveProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 24 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 14 }}
                            transition={{ duration: 0.28 }}
                            className="terminal-surface max-h-[90vh] w-full max-w-5xl !overflow-y-auto rounded-[36px] p-7 sm:p-9"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex flex-wrap items-start justify-between gap-4">
                                <div className="max-w-3xl">
                                    <div className="eyebrow-chip">
                                        Expanded case study
                                    </div>
                                    <h3 className="mt-5 font-display text-4xl font-semibold tracking-[-0.06em] text-white">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="mt-5 text-base leading-8 text-slate-300">
                                        {selectedProject.description}
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    {selectedProject.url ? (
                                        <a
                                            href={selectedProject.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="data-chip inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-cyan-300 transition hover:border-cyan-400 hover:text-cyan-200"
                                        >
                                            View Live{' '}
                                            <FiArrowUpRight size={16} />
                                        </a>
                                    ) : null}
                                    <button
                                        type="button"
                                        onClick={() => setActiveProject(null)}
                                        className="data-chip rounded-full px-5 py-3 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:text-white"
                                    >
                                        Close view
                                    </button>
                                </div>
                            </div>

                            {selectedProject.url ? (
                                <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-black/50 p-2 sm:p-4">
                                    <div className="flex items-center gap-2 px-3 pb-3 pt-2">
                                        <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                                        <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                                        <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                                        <div className="ml-4 font-mono text-[10px] text-slate-400">
                                            {selectedProject.url.replace(
                                                'https://',
                                                '',
                                            )}
                                        </div>
                                    </div>
                                    <div className="relative aspect-video w-full overflow-hidden rounded-[20px] border border-white/5 bg-slate-900/50">
                                        <iframe
                                            src={selectedProject.url}
                                            className="absolute inset-0 h-full w-full border-0"
                                            title={`${selectedProject.title} Live Preview`}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ) : null}

                            <div className="mt-8 rounded-[28px] border border-cyan-300/10 bg-cyan-300/5 p-6">
                                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-200">
                                    Impact
                                </div>
                                <p className="mt-4 text-lg leading-8 text-white">
                                    {selectedProject.impact}
                                </p>
                            </div>

                            <div className="mt-8 grid gap-4 md:grid-cols-3">
                                {selectedProject.details.map((detail) => (
                                    <div
                                        key={detail}
                                        className="rounded-[24px] border border-white/8 bg-white/5 p-5 text-sm leading-7 text-slate-300"
                                    >
                                        {detail}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 grid gap-5 lg:grid-cols-2">
                                {selectedProject.caseStudy.map((section) => (
                                    <div
                                        key={section.label}
                                        className="card-shell rounded-[28px] p-6"
                                    >
                                        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-200">
                                            {section.label}
                                        </div>
                                        <div className="mt-4 space-y-3">
                                            {section.items.map((item) => (
                                                <p
                                                    key={item}
                                                    className="text-sm leading-7 text-slate-300"
                                                >
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </section>
    );
}
