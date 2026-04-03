"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { journey } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="An engineer shaped by systems thinking."
          description="The throughline across controls, product engineering, and founding work is the same: understand the system deeply, then remove friction until it feels inevitable."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            {
              label: "Core throughline",
              value: "Understand the system deeply before trying to optimize it.",
            },
            {
              label: "Working style",
              value: "Reduce friction until the product and the underlying system both feel inevitable.",
            },
            {
              label: "Engineering lens",
              value: "Reliability, ownership, and clarity across every layer of the stack.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className="glass-panel rounded-[26px] p-5"
            >
              <div className="text-xs uppercase tracking-[0.28em] text-slate-500">{item.label}</div>
              <p className="mt-3 text-sm leading-7 text-white">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6">
          {journey.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="glass-panel rounded-[30px] p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-100">
                    {item.step}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      {item.eyebrow}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {item.signal}
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {item.strengths.map((strength) => (
                  <span
                    key={strength}
                    className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-slate-200"
                  >
                    {strength}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-[22px] border border-white/8 bg-black/20 px-4 py-4">
                <div className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  What it shaped
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.outcome}</p>
              </div>
            </motion.article>
          ))}
          </div>

          <div className="space-y-6">
            <div className="glass-panel rounded-[32px] p-7">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                Narrative arc
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                From controls to product systems.
              </h3>
              <div className="mt-6 space-y-5">
                {journey.map((item, index) => (
                  <motion.div
                    key={`${item.id}-arc`}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="rounded-[22px] border border-white/8 bg-white/4 p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-100">
                        {item.step}
                      </div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{item.signal}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[32px] p-7">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                Engineering thesis
              </div>
              <div className="mt-6 space-y-4">
                {[
                  "Reliable systems come from understanding edge cases early, not patching them late.",
                  "Great product engineering connects user experience and backend correctness instead of treating them separately.",
                  "Ownership means building the invisible layers that keep the visible product strong.",
                ].map((principle, index) => (
                  <motion.div
                    key={principle}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    className="rounded-[22px] border border-white/8 bg-white/4 p-5 text-sm leading-7 text-slate-300"
                  >
                    {principle}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
