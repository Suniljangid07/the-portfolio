'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navIconMap } from '@/lib/iconography';
import { navItems } from '@/lib/data';
import { GlowButton } from '../ui/glow-button';
import { FaLinkedin } from 'react-icons/fa6';

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-40 px-4 py-5 sm:px-8 lg:px-12">
                <div className="glass-panel mx-auto flex w-full max-w-7xl items-center justify-between rounded-full px-5 py-3">
                    <a
                        href="#hero"
                        className="font-display text-base uppercase tracking-[0.38em] text-white sm:text-lg"
                    >
                        Sunil Jangid
                    </a>

                    <nav className="hidden items-center gap-5 md:flex">
                        {navItems.slice(1, -1).map((item) => {
                            const iconSpec = navIconMap[item.label];
                            const NavIcon = iconSpec?.icon;

                            return (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
                                >
                                    {NavIcon ? (
                                        <NavIcon
                                            className={iconSpec.className}
                                            size={iconSpec.size ?? 14}
                                        />
                                    ) : null}
                                    {item.label}
                                </a>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        <GlowButton
                            href="https://www.linkedin.com/in/suniljangid07/"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-transparent min-w-32 min-h-8 h-8 hidden sm:inline-flex"
                            icon={
                                <FaLinkedin
                                    size={16}
                                    className="text-blue-600"
                                />
                            }
                            text="Connect"
                        />

                        <button
                            type="button"
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            onClick={() => setOpen((value) => !value)}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
                        >
                            {open ? <FiX size={18} /> : <FiMenu size={18} />}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {open ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-[rgba(4,5,10,0.88)] px-6 py-6 backdrop-blur-2xl md:hidden"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-display text-base uppercase tracking-[0.38em] text-white">
                                Navigation
                            </span>
                            <button
                                type="button"
                                aria-label="Close menu"
                                onClick={() => setOpen(false)}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                            >
                                <FiX size={18} />
                            </button>
                        </div>

                        <div className="mt-10 space-y-4">
                            {navItems.map((item, index) => {
                                const iconSpec = navIconMap[item.label];
                                const NavIcon = iconSpec?.icon;

                                return (
                                    <motion.a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        initial={{ opacity: 0, x: 24 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 12 }}
                                        transition={{ delay: index * 0.04 }}
                                        onClick={() => setOpen(false)}
                                        className="glass-panel flex items-center justify-between rounded-[24px] px-5 py-4"
                                    >
                                        <span className="inline-flex items-center gap-3 text-base text-white">
                                            {NavIcon ? (
                                                <NavIcon
                                                    className={
                                                        iconSpec.className
                                                    }
                                                    size={iconSpec.size ?? 16}
                                                />
                                            ) : null}
                                            {item.label}
                                        </span>
                                        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
                                            {item.eyebrow}
                                        </span>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
}
