'use client';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card3D } from '@/components/ui/card-3d';
import { SectionReveal } from '@/components/ui/section-reveal';
import {
    architectureBlockIconMap,
    architectureStageIconMap,
} from '@/lib/iconography';
import { architectureBlocks, architectureStages } from '@/lib/data';

const blockGlow = ['cyan', 'blue', 'purple'] as const;

export function ArchitectureSection() {
    return (
        <section
            id="architecture"
            className="section-shell relative px-6 py-28 sm:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Architecture"
                    title="Three layers, one reliable event spine."
                    description="A product-facing view of how integrations enter, tenants stay isolated, and automation remains observable."
                />

                <div className="mt-16 grid gap-6">
                    <div className="grid gap-6 xl:grid-cols-3">
                        {architectureBlocks.map((block, index) => {
                            const iconSpec = architectureBlockIconMap[block.id];
                            const Icon = iconSpec.icon;

                            return (
                                <SectionReveal
                                    key={block.id}
                                    delay={index * 0.06}
                                >
                                    <Card3D
                                        glow={blockGlow[index]}
                                        className="rounded-[34px] p-7"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                                                    <Icon
                                                        className={
                                                            iconSpec.className
                                                        }
                                                        size={
                                                            iconSpec.size ?? 20
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-display text-2xl font-semibold text-white">
                                                        {block.eyebrow}
                                                    </h3>
                                                    <div className=" text-[11px] tracking-[0.28em] text-slate-400">
                                                        {block.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mt-5 text-sm leading-7 text-slate-300">
                                            {block.caption}
                                        </p>

                                        <div className="mt-5 space-y-3">
                                            {block.points.map((point) => (
                                                <div
                                                    key={point}
                                                    className="rounded-[22px] border border-white/8 bg-white/5 px-4 py-4 text-sm text-slate-200"
                                                >
                                                    {point}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 rounded-[22px] border border-cyan-300/10 bg-cyan-300/5 p-4">
                                            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-200">
                                                Why it matters
                                            </div>
                                            <p className="mt-3 text-sm leading-7 text-slate-300">
                                                {block.outcome}
                                            </p>
                                        </div>
                                    </Card3D>
                                </SectionReveal>
                            );
                        })}
                    </div>

                    <SectionReveal>
                        <div className="terminal-surface rounded-[36px] p-7 sm:p-8">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <div className="eyebrow-chip">
                                        Flow stages
                                    </div>
                                    <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                                        From ingress to execution.
                                    </h3>
                                </div>
                                <div className="hidden data-chip font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300 lg:inline-flex">
                                    Sequential event path
                                </div>
                            </div>

                            <div className="mt-8 grid gap-5 xl:grid-cols-4">
                                {architectureStages.map((stage, index) => {
                                    const iconSpec =
                                        architectureStageIconMap[stage.step];
                                    const Icon = iconSpec.icon;

                                    return (
                                        <div
                                            key={stage.step}
                                            className="relative"
                                        >
                                            <Card3D
                                                glow={
                                                    blockGlow[
                                                        index % blockGlow.length
                                                    ]
                                                }
                                                className="rounded-[28px] p-5"
                                            >
                                                <div className="inline-flex items-center gap-3">
                                                    <Icon
                                                        className={
                                                            iconSpec.className
                                                        }
                                                        size={32}
                                                    />
                                                    <div>
                                                        <h4 className="font-display text-lg font-semibold text-white">
                                                            {stage.title}
                                                        </h4>
                                                        <div className="text-[8px] uppercase tracking-[0.18em] text-cyan-100">
                                                            Stage {stage.step}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                                    {stage.description}
                                                </p>
                                            </Card3D>

                                            {index <
                                            architectureStages.length - 1 ? (
                                                <div className="pointer-events-none absolute right-[-18px] top-1/2 hidden h-px w-9 -translate-y-1/2 bg-gradient-to-r from-cyan-300/40 to-purple-400/0 xl:block" />
                                            ) : null}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-8 grid gap-4 lg:grid-cols-3">
                                {[
                                    'Integrations should be normalized once, then reused everywhere.',
                                    'Tenant safety should be structural, not dependent on UI discipline.',
                                    'Automation is only valuable when it stays visible and debuggable.',
                                ].map((thesis) => (
                                    <div
                                        key={thesis}
                                        className="rounded-[24px] border border-white/8 bg-white/4 p-5 text-sm leading-7 text-slate-300"
                                    >
                                        {thesis}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
}
