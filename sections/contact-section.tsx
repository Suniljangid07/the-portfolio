'use client';

import { FiSend } from 'react-icons/fi';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card3D } from '@/components/ui/card-3d';
import { GlowButton } from '@/components/ui/glow-button';
import { SectionReveal } from '@/components/ui/section-reveal';
import { socialIconMap } from '@/lib/iconography';
import { socialLinks } from '@/lib/data';

export function ContactSection() {
    return (
        <section
            id="contact"
            className="section-shell relative px-6 py-28 sm:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Connect"
                    title="Let’s build something with real leverage."
                    description="If the challenge touches product, platform, AI workflows, or integrations, this is the kind of work Sunil does best."
                />

                <div className="mt-16 grid gap-6 xl:grid-cols-[0.76fr_1.24fr]">
                    <SectionReveal>
                        <Card3D glow="cyan" className="rounded-[34px] p-7">
                            <div className="eyebrow-chip">Get in touch</div>
                            <h3 className="mt-6 font-display text-4xl font-semibold tracking-[-0.06em] text-white">
                                Build the system behind the product.
                            </h3>
                            <p className="mt-5 text-sm leading-8 text-slate-300">
                                Product engineering, integrations, automation,
                                and architecture all connected into one
                                execution model.
                            </p>

                            <div className="mt-8 space-y-4">
                                {socialLinks.map((link, index) => {
                                    const iconSpec = socialIconMap[link.label];
                                    const Icon = iconSpec.icon;

                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="rounded-[24px] px-5 py-4"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="inline-flex items-center gap-3 text-white">
                                                    <Icon
                                                        className={
                                                            iconSpec.className
                                                        }
                                                        size={
                                                            iconSpec.size ?? 18
                                                        }
                                                    />
                                                    {link.label}
                                                </span>
                                                <FiSend
                                                    className="text-cyan-300"
                                                    size={15}
                                                />
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </Card3D>
                    </SectionReveal>

                    <SectionReveal delay={0.08}>
                        <div className="terminal-surface rounded-[36px] p-7 sm:p-8">
                            <div className="flex items-center justify-between border-b border-white/8 pb-5">
                                <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400">
                                    ~/contact
                                </div>
                                <div className="data-chip font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-100">
                                    terminal form
                                </div>
                            </div>

                            <form className="mt-8 grid gap-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <label className="block">
                                        <span className="mb-2 block text-sm text-slate-300">
                                            Name
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full rounded-[22px] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50 focus:bg-white/8"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="mb-2 block text-sm text-slate-300">
                                            Email
                                        </span>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full rounded-[22px] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50 focus:bg-white/8"
                                        />
                                    </label>
                                </div>

                                <label className="block">
                                    <span className="mb-2 block text-sm text-slate-300">
                                        What are you building?
                                    </span>
                                    <textarea
                                        rows={7}
                                        placeholder="Tell me about the product, system, or challenge."
                                        className="w-full rounded-[28px] border border-white/10 bg-white/6 px-4 py-4 text-white outline-none transition focus:border-cyan-300/50 focus:bg-white/8"
                                    />
                                </label>

                                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                                    <div className="text-sm leading-7 text-slate-400">
                                        Reach out through LinkedIn, GitHub, or
                                        email to start the conversation.
                                    </div>
                                    <GlowButton
                                        href="mailto:suniljangid07@gmail.com"
                                        className="w-fit !min-w-[220px]"
                                        icon={
                                            <FiSend
                                                size={16}
                                                className="text-cyan-300"
                                            />
                                        }
                                        text={'Start the conversation'}
                                    />
                                </div>
                            </form>
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
}
