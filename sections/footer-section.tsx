import { navItems, footerLinks } from '@/lib/data';
import { socialIconMap } from '@/lib/iconography';

export function FooterSection() {
    return (
        <footer className="relative px-6 pb-10 pt-8 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="h-px bg-[linear-gradient(90deg,rgba(0,212,255,0),rgba(0,212,255,0.55),rgba(124,58,237,0))]" />

                <div className="mt-8 grid gap-8 lg:grid-cols-3">
                    <div>
                        <div className="font-display text-2xl font-semibold tracking-[-0.05em] text-white">
                            Sunil Jangid
                        </div>
                        <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
                            Founding Software Engineer building systems that
                            feel clear, fast, and inevitable.
                        </p>
                        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.26em] text-slate-500">
                            © 2026 Sunil Jangid
                        </p>
                    </div>

                    <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
                            Navigation
                        </div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {navItems.slice(1).map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="data-chip font-mono text-[11px] uppercase tracking-[0.18em] text-slate-200"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
                            Social
                        </div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {footerLinks.map((link) => {
                                const iconSpec = socialIconMap[link.label];
                                const Icon = iconSpec?.icon;

                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={
                                            link.href.startsWith('http')
                                                ? '_blank'
                                                : undefined
                                        }
                                        rel={
                                            link.href.startsWith('http')
                                                ? 'noreferrer'
                                                : undefined
                                        }
                                        className="data-chip inline-flex items-center gap-2 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:text-white"
                                    >
                                        {Icon ? (
                                            <Icon
                                                className={iconSpec.className}
                                                size={iconSpec.size ?? 16}
                                            />
                                        ) : null}
                                        {link.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
