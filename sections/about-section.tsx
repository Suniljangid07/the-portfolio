'use client';

import { SectionHeading } from '@/components/ui/section-heading';
import { Card3D } from '@/components/ui/card-3d';
import { SectionReveal } from '@/components/ui/section-reveal';
import {
    RiBrain2Line,
    RiRocketLine,
    RiCpuLine,
    RiLightbulbFlashLine,
} from 'react-icons/ri';
import { TbTopologyStar3 } from 'react-icons/tb';
import Image from 'next/image';

export function AboutSection() {
    return (
        <section
            id="about"
            className="section-shell relative px-6 py-28 sm:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="About"
                    title="Elevating human potential through transformative technology."
                    description="A self-taught engineer driven by curiosity, bridging the gap between creative vision and analytical execution."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {/* Main Mission - spans 2 cols, 2 rows */}
                    <SectionReveal className="md:col-span-2 md:row-span-2 h-full">
                        <Card3D
                            glow="cyan"
                            className="h-full rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col justify-between group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px] transition-all duration-700 group-hover:bg-cyan-400/20" />

                            <div className="relative">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-20 w-20 min-w-[5rem] items-center justify-center ">
                                        <Image
                                            src="/globe_world.png"
                                            alt="Globe Vector"
                                            width={100}
                                            height={100}
                                            className="object-contain drop-shadow-[0_0_8px_rgba(34,211,238,0.)]"
                                        />
                                    </div>
                                    <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.04em] text-white leading-tight">
                                        On a mission to unravel the complexities
                                        of the digital landscape.
                                    </h3>
                                </div>
                                <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300">
                                    Driven by an adventurous spirit and an
                                    unyielding thirst for knowledge, I believe
                                    in the transformative power of technology to
                                    elevate human potential. My goal is to
                                    pioneer solutions that not only advance
                                    industries but also inspire curiosity and
                                    seamless collaboration.
                                </p>
                                <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
                                    I am eager to engage with visionary teams to
                                    co-create groundbreaking advancements that
                                    redefine what&apos;s possible.
                                </p>
                            </div>
                        </Card3D>
                    </SectionReveal>

                    {/* Interests - spans 1 col, 1 row */}
                    <SectionReveal
                        className="md:col-span-1 md:row-span-1 h-full"
                        delay={0.1}
                    >
                        <Card3D
                            glow="purple"
                            className="h-full rounded-[32px] p-8 border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col justify-between group overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 -mb-8 -mr-8 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-[60px] transition-all duration-700 group-hover:bg-fuchsia-400/20" />
                            <div className="relative flex items-center">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-300">
                                    <RiRocketLine size={24} />
                                </div>
                                <h4 className="font-display text-lg font-semibold text-white ml-3 flex-1 text-left">
                                    Future Horizons
                                </h4>
                                <TbTopologyStar3
                                    className="shrink-0 text-slate-500/30 group-hover:text-fuchsia-400/50 transition-colors duration-500"
                                    size={36}
                                />
                            </div>
                            <div className="relative mt-6">
                                <p className="text-sm leading-relaxed text-slate-300">
                                    Profoundly interested in Artificial
                                    Intelligence, Robotics, and Space
                                    Innovation. Always looking toward the next
                                    frontier.
                                </p>
                            </div>
                        </Card3D>
                    </SectionReveal>

                    {/* The Why - spans 1 col, 1 row */}
                    <SectionReveal
                        className="md:col-span-1 md:row-span-1 h-full"
                        delay={0.2}
                    >
                        <Card3D
                            glow="blue"
                            className="h-full rounded-[32px] p-8 border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col justify-between group overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 -mb-8 -mr-8 h-40 w-40 rounded-full bg-blue-500/10 blur-[60px] transition-all duration-700 group-hover:bg-blue-400/20" />
                            <div className="relative flex items-center">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                                    <RiLightbulbFlashLine size={24} />
                                </div>
                                <h4 className="font-display text-lg font-semibold text-white ml-3 flex-1 text-left">
                                    The &quot;Why&quot;
                                </h4>
                                <RiBrain2Line
                                    className="shrink-0 text-slate-500/30 group-hover:text-blue-400/50 transition-colors duration-500"
                                    size={36}
                                />
                            </div>
                            <div className="relative mt-6">
                                <p className="text-sm leading-relaxed text-slate-300">
                                    Fueled by a relentless pursuit of
                                    understanding the fundamental reasons behind
                                    technology, thriving at the intersection of
                                    creativity and logic.
                                </p>
                            </div>
                        </Card3D>
                    </SectionReveal>

                    {/* Toolkit / Origin - spans 3 cols, 1 row */}
                    <SectionReveal
                        className="md:col-span-3 md:row-span-1 h-full"
                        delay={0.3}
                    >
                        <Card3D
                            glow="cyan"
                            className="h-full rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col md:flex-row gap-8 items-center justify-between overflow-hidden group"
                        >
                            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-64 w-64 rounded-full bg-emerald-500/5 blur-[100px] transition-all duration-700 group-hover:bg-emerald-400/15" />
                            <div className="relative md:w-1/2">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                                        <RiCpuLine size={20} />
                                    </div>
                                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-200">
                                        The Engineering Mindset
                                    </span>
                                </div>
                                <h3 className="font-display text-2xl font-semibold text-white">
                                    Bridging Automation & Architecture
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                                    Starting in industrial automation instilled
                                    a deep respect for reliability—where systems
                                    simply cannot fail. I carry this resilience
                                    into modern software engineering. Whether
                                    orchestrating complex data pipelines or
                                    crafting intuitive product interfaces, my
                                    approach centers on building scalable,
                                    fault-tolerant architectures that seamlessly
                                    unite vision with execution.
                                </p>
                            </div>

                            <div className="relative md:w-1/2 flex flex-wrap gap-3 justify-start md:justify-end">
                                {[
                                    'Systems Architecture',
                                    'Product Engineering',
                                    'Resilient Design',
                                    'Cross-System Integrations',
                                    'Rapid Adaptation',
                                    'End-to-End Execution',
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-slate-300 shadow-sm backdrop-blur-md transition-all hover:bg-white/10 hover:text-white hover:border-cyan-300/30"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card3D>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
}
