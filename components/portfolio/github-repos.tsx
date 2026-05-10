'use client';

import { useEffect, useState } from 'react';
import { GithubRepoCard } from './github-repo-card';
import { SectionReveal } from '@/components/ui/section-reveal';
import { repoFallbacks } from '@/lib/data';

type Repo = {
    id?: number;
    name: string;
    description: string | null;
    language: string | null;
    stargazers_count?: number;
    html_url: string;
};

export function GithubRepos() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let active = true;

        async function loadRepos() {
            try {
                const response = await fetch(
                    'https://api.github.com/users/Suniljangid07/repos?sort=updated&per_page=6',
                );

                if (!response.ok) {
                    throw new Error('GitHub API request failed.');
                }

                const data = (await response.json()) as Repo[];

                if (!active) {
                    return;
                }

                setRepos(
                    data
                        .filter(
                            (repo) =>
                                !repo.name.toLowerCase().includes('portfolio'),
                        )
                        .slice(0, 3),
                );
            } catch {
                if (active) {
                    setRepos(
                        repoFallbacks.map((repo, index) => ({
                            id: index,
                            name: repo.name,
                            description: repo.description,
                            language: repo.language,
                            stargazers_count: repo.stars,
                            html_url: repo.url,
                        })),
                    );
                }
            } finally {
                if (active) {
                    setLoaded(true);
                }
            }
        }

        loadRepos();
        return () => {
            active = false;
        };
    }, []);

    return (
        <div className="grid gap-12 lg:grid-cols-3">
            {repos.map((repo, index) => (
                <SectionReveal key={repo.id ?? repo.name} delay={index * 0.06}>
                    <GithubRepoCard
                        repo={repo}
                        glow={
                            index === 0
                                ? 'cyan'
                                : index === 1
                                  ? 'blue'
                                  : 'purple'
                        }
                    />
                </SectionReveal>
            ))}

            {!loaded && repos.length === 0 ? (
                <div className="card-shell rounded-[30px] p-6 text-slate-300">
                    Loading repositories...
                </div>
            ) : null}
        </div>
    );
}
