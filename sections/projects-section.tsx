"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const selectedProject = projects.find((project) => project.slug === activeProject) ?? null;

  return (
    <section id="projects" className="relative min-h-screen px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Proof through hard problems."
          description="The most interesting work sits where product ambition meets operational complexity. These projects highlight that edge."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.button
              key={project.slug}
              type="button"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
              onClick={() => setActiveProject(project.slug)}
              className="glass-panel rounded-[32px] p-7 text-left"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-200">Case study</span>
                <span className="text-sm text-slate-400">Tap for deep dive</span>
              </div>
              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-white">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
              <p className="mt-6 text-sm font-medium text-white">{project.impact}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 py-10 backdrop-blur-xl"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 18 }}
              transition={{ duration: 0.25 }}
              className="glass-panel max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[32px] p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">Expanded view</div>
                  <h3 className="mt-4 text-3xl font-semibold text-white">{selectedProject.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
                >
                  Close
                </button>
              </div>
              <p className="mt-6 text-base leading-8 text-slate-300">{selectedProject.description}</p>
              <p className="mt-6 text-lg font-medium text-white">{selectedProject.impact}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {selectedProject.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 space-y-4">
                {selectedProject.details.map((detail) => (
                  <div
                    key={detail}
                    className="rounded-[24px] border border-white/8 bg-white/5 p-5 text-sm leading-7 text-slate-300"
                  >
                    {detail}
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-5">
                {selectedProject.caseStudy.map((section) => (
                  <div
                    key={section.label}
                    className="rounded-[24px] border border-cyan-300/12 bg-cyan-300/5 p-6"
                  >
                    <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                      {section.label}
                    </div>
                    <div className="mt-4 space-y-3">
                      {section.items.map((item) => (
                        <p key={item} className="text-sm leading-7 text-slate-300">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
