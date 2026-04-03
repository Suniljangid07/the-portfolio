import { FaGithub } from "react-icons/fa6";
import { GithubRepos } from "@/components/portfolio/github-repos";
import { SectionHeading } from "@/components/ui/section-heading";

export function GithubSection() {
  return (
    <section id="github" className="relative min-h-screen px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="GitHub + Work"
          title="Public signal, live pull from GitHub."
          description="This section fetches public repositories client-side and gracefully falls back to curated highlights if the API is rate-limited."
        />
        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
          <FaGithub className="text-slate-100" size={18} />
          Live public repositories and curated fallback highlights
        </div>
        <div className="mt-14">
          <GithubRepos />
        </div>
      </div>
    </section>
  );
}
