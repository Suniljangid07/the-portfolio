"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaStar } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { repoFallbacks } from "@/lib/data";

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
          "https://api.github.com/users/Suniljangid07/repos?sort=updated&per_page=6",
        );

        if (!response.ok) {
          throw new Error("GitHub API request failed.");
        }

        const data = (await response.json()) as Repo[];

        if (!active) {
          return;
        }

        setRepos(
          data
            .filter((repo) => !repo.name.toLowerCase().includes("portfolio"))
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
    <div className="grid gap-6 lg:grid-cols-3">
      {repos.map((repo, index) => (
        <motion.a
          key={repo.id ?? repo.name}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.08, duration: 0.55 }}
          whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
          className="glass-panel glass-panel-soft group rounded-[28px] p-6"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-slate-400">
              <FaGithub className="text-slate-100" size={16} />
              Repository
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-200">
              {repo.language ?? "Mixed"}
            </span>
          </div>
          <h3 className="mt-6 text-2xl font-semibold text-white">{repo.name}</h3>
          <p className="mt-4 min-h-24 text-sm leading-7 text-slate-300">
            {repo.description ?? "Public work focused on product systems and engineering craft."}
          </p>
          <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <FaStar className="text-amber-300" size={14} />
              {repo.stargazers_count ?? 0} stars
            </span>
            <span className="inline-flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
              Open source signal
              <FiArrowUpRight size={15} className="text-cyan-300" />
            </span>
          </div>
        </motion.a>
      ))}
      {!loaded && repos.length === 0 ? (
        <div className="glass-panel rounded-[28px] p-6 text-slate-300">
          Loading repositories...
        </div>
      ) : null}
    </div>
  );
}
