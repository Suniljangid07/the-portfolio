"use client";

import dynamic from "next/dynamic";
import { motion, useScroll } from "framer-motion";
import { AboutSection } from "@/sections/about-section";
import { ArchitectureSection } from "@/sections/architecture-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { FooterSection } from "@/sections/footer-section";
import { GithubSection } from "@/sections/github-section";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";
import { navItems } from "@/lib/data";

const SceneCanvas = dynamic(
  () => import("@/components/portfolio/scene-canvas").then((mod) => mod.SceneCanvas),
  {
    ssr: false,
  },
);

export function PortfolioShell() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-noise bg-grid relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 opacity-90">
        <SceneCanvas scrollProgress={scrollYProgress} />
      </div>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 right-0 top-0 z-50 h-0.5 origin-left bg-[linear-gradient(90deg,#5ce1ff,#67f5d6,#f48dff)]"
      />

      <div className="pointer-events-none fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
        <div className="glass-panel rounded-full px-3 py-4">
          <div className="flex flex-col items-center gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="pointer-events-auto rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300 transition hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <header className="fixed inset-x-0 top-0 z-40 px-6 py-5 sm:px-10 lg:px-16">
          <div className="glass-panel mx-auto flex w-full max-w-7xl items-center justify-between rounded-full px-5 py-3">
            <a href="#hero" className="text-sm uppercase tracking-[0.35em] text-white">
              Sunil Jangid
            </a>
            <div className="hidden items-center gap-5 md:flex">
              {navItems.slice(1, -1).map((item) => (
                <a key={item.id} href={`#${item.id}`} className="text-sm text-slate-300 transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="https://www.linkedin.com/in/suniljangid07/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:text-white"
            >
              Connect
            </a>
          </div>
        </header>

        <main className="relative">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ArchitectureSection />
          <GithubSection />
          <ContactSection />
          <FooterSection />
        </main>
      </div>
    </div>
  );
}
