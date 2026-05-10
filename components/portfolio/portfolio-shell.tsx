'use client';

import dynamic from 'next/dynamic';
import { motion, useScroll } from 'framer-motion';
import { Navbar } from '@/components/nav/navbar';
import { AboutSection } from '@/sections/about-section';
import { ArchitectureSection } from '@/sections/architecture-section';
import { ContactSection } from '@/sections/contact-section';
import { ExperienceSection } from '@/sections/experience-section';
import { FooterSection } from '@/sections/footer-section';
import { GithubSection } from '@/sections/github-section';
import { HeroSection } from '@/sections/hero-section';
import { ProjectsSection } from '@/sections/projects-section';
import { SkillsSection } from '@/sections/skills-section';

const SceneCanvas = dynamic(
    () =>
        import('@/components/portfolio/scene-canvas').then(
            (mod) => mod.SceneCanvas,
        ),
    { ssr: false },
);

export function PortfolioShell() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="bg-noise relative min-h-screen overflow-x-hidden">
            <div className="pointer-events-none fixed inset-0 opacity-90">
                <SceneCanvas scrollProgress={scrollYProgress} />
            </div>

            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-[linear-gradient(90deg,#00d4ff,#4f8ef7,#7c3aed)]"
            />

            <div className="relative z-10">
                <Navbar />

                <main className="relative">
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <ExperienceSection />
                    <ProjectsSection />
                    <ArchitectureSection />
                    <GithubSection />
                    <ContactSection />
                    <FooterSection />
                </main>
            </div>
        </div>
    );
}
