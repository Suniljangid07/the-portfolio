"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { categoryIconMap, skillIconMap } from "@/lib/iconography";
import { skillCategories } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="A stack organized around product leverage."
          description="Frontend polish matters, but the real differentiator is how every layer supports speed, security, and operational confidence."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.65 }}
              whileHover={{ y: -8 }}
              className="glass-panel rounded-4xl p-7"
            >
              {(() => {
                const IconSpec = categoryIconMap[category.name];
                const CategoryIcon = IconSpec.icon;

                return (
                  <>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                    <CategoryIcon className={IconSpec.className} size={IconSpec.size ?? 20} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
                  Interactive node cluster
                </div>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{category.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-sm text-cyan-100"
                  >
                    {(() => {
                      const iconSpec = skillIconMap[skill];

                      if (!iconSpec) {
                        return null;
                      }

                      const SkillIcon = iconSpec.icon;
                      return (
                        <SkillIcon className={iconSpec.className} size={iconSpec.size ?? 14} />
                      );
                    })()}
                    {skill}
                  </motion.span>
                ))}
              </div>
                  </>
                );
              })()}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
