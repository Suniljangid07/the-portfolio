import { FaGithub, FaStar } from 'react-icons/fa6';
import { FiArrowUpRight, FiGitBranch } from 'react-icons/fi';
import { Card3D } from '@/components/ui/card-3d';

type GithubRepoCardProps = {
    repo: {
        id?: number;
        name: string;
        description: string | null;
        language: string | null;
        stargazers_count?: number;
        html_url: string;
    };
    glow?: 'cyan' | 'blue' | 'purple';
};

export function GithubRepoCard({ repo, glow = 'cyan' }: GithubRepoCardProps) {
    return (
        <Card3D
            glow={glow}
            as="a"
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="group block h-full w-full rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
        >
            {/* Inner Card Surface */}
            <div className="relative flex h-full flex-col justify-between rounded-[23px] bg-[#080B14]/90 p-8 backdrop-blur-md transition-all duration-300 group-hover:bg-[#0A0D18]/90">
                {/* Glow effect on hover */}
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-[23px] bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-blue-500/0 opacity-0 blur-2xl transition-all duration-500 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 group-hover:opacity-100" />

                <div>
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                            <FaGithub className="text-white/80" size={14} />
                            <span className="font-mono text-[10px] uppercase tracking-wider text-white/70">
                                Repository
                            </span>
                        </div>
                        {repo.language && (
                            <div className="flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                                <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-cyan-300">
                                    {repo.language}
                                </span>
                            </div>
                        )}
                    </div>

                    <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
                        {repo.name}
                    </h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                        {repo.description ??
                            'Public work focused on product systems and engineering craft.'}
                    </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors group-hover:text-amber-400">
                            <FaStar size={14} />
                            <span>{repo.stargazers_count ?? 0}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors group-hover:text-slate-200">
                            <FiGitBranch size={14} />
                            <span>Main</span>
                        </div>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
                        <FiArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </div>
                </div>
            </div>
        </Card3D>
    );
}
