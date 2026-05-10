import { FaGithub } from 'react-icons/fa6';
import { GithubRepos } from '@/components/portfolio/github-repos';
import { SectionHeading } from '@/components/ui/section-heading';

export function GithubSection() {
    return (
        <section
            id="github"
            className="section-shell relative px-6 py-28 sm:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="GitHub"
                    title="Public work, live from GitHub."
                    description="A client-side fetch with graceful fallback, rendered in the same glass and depth language as the rest of the portfolio."
                />

                <div className="terminal-surface mt-16 rounded-[36px] p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 pb-5">
                        <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400">
                            <FaGithub className="text-slate-100" size={18} />
                            public-signal.feed
                        </div>
                        <div className="data-chip font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-100">
                            live + curated fallback
                        </div>
                    </div>

                    <div className="mt-8">
                        <GithubRepos />
                    </div>
                </div>
            </div>
        </section>
    );
}
