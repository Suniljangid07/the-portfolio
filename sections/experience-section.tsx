"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Built across product, platform, and operational reality."
          description="Each chapter added a different kind of engineering judgment: reliability, shipping discipline, and ownership at company-building speed."
        />
        <div className="mt-16 space-y-8">
          {experiences.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="grid gap-6 rounded-[32px] border border-white/10 bg-[rgba(7,11,22,0.82)] p-7 shadow-[0_25px_70px_rgba(0,0,0,0.28)] lg:grid-cols-[220px_1fr]"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">{item.period}</div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.company}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.role}</p>
                <p className="mt-2 text-sm text-slate-500">{item.location}</p>
              </div>
              <div>
                <p className="text-base leading-8 text-slate-300">{item.summary}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {item.achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className="rounded-[24px] border border-white/8 bg-white/4 p-5 text-sm leading-7 text-slate-300"
                    >
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
