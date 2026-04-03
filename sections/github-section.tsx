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
        <div className="mt-14">
          <GithubRepos />
        </div>
      </div>
    </section>
  );
}
