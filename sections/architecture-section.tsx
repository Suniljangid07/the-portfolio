"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  architectureBlockIconMap,
  architectureStageIconMap,
  architectureSummaryIconMap,
} from "@/lib/iconography";
import { architectureBlocks, architectureStages } from "@/lib/data";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="relative min-h-screen px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Architecture"
          title="System design, presented like a product."
          description="This section is the operating model underneath the portfolio: how external systems enter, how data becomes safe and usable, and how automation stays observable once it is live."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            {
              label: "Primary concerns",
              value: "Integrations, tenant isolation, automation reliability",
            },
            {
              label: "Design posture",
              value: "Policy-first, event-driven, product-aware",
            },
            {
              label: "Engineering goal",
              value: "Absorb complexity once and reuse it across workflows",
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
              {(() => {
                const iconSpec = architectureSummaryIconMap[item.label];
                const SummaryIcon = iconSpec?.icon;

                return (
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-slate-500">
                    {SummaryIcon ? (
                      <SummaryIcon className={iconSpec.className} size={iconSpec.size ?? 16} />
                    ) : null}
                    {item.label}
                  </div>
                );
              })()}
              <p className="mt-3 text-sm leading-7 text-white">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="glass-panel relative overflow-hidden rounded-[36px] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(92,225,255,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(103,245,214,0.16),transparent_24%),radial-gradient(circle_at_50%_75%,rgba(244,141,255,0.12),transparent_26%)]" />
            <div className="relative">
              <div className="mb-8 flex items-end justify-between gap-6 border-b border-white/10 pb-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                    Architecture map
                  </div>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                    Three layers, one reliable event spine.
                  </h3>
                </div>
                <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300 lg:block">
                  Product + platform view
                </div>
              </div>

              <div className="grid gap-6">
              {architectureBlocks.map((block, index) => (
                <motion.div
                  key={block.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="rounded-[30px] border border-white/10 bg-[rgba(4,8,18,0.72)] p-6"
                >
                  {(() => {
                    const iconSpec = architectureBlockIconMap[block.id];
                    const BlockIcon = iconSpec?.icon;

                    return (
                      <>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                        {BlockIcon ? (
                          <BlockIcon className={iconSpec.className} size={iconSpec.size ?? 20} />
                        ) : (
                          <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(92,225,255,0.95)]" />
                        )}
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.28em] text-slate-500">
                          {block.eyebrow}
                        </div>
                        <h3 className="mt-2 text-xl font-semibold text-white">{block.title}</h3>
                      </div>
                    </div>
                    <div className="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-3 py-1 text-xs text-cyan-100">
                      {block.signal}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{block.caption}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {block.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-slate-200"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 rounded-[22px] border border-white/8 bg-black/20 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Why it matters
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{block.outcome}</p>
                  </div>
                      </>
                    );
                  })()}
                </motion.div>
              ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel rounded-[36px] p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">Flow map</div>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                A precise path from outside signal to product action.
              </h3>
              <div className="mt-8 space-y-5">
                {architectureStages.map((stage, index) => (
                  <motion.div
                    key={stage.step}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: index * 0.08, duration: 0.55 }}
                    className="rounded-[24px] border border-white/8 bg-white/4 p-5"
                  >
                    {(() => {
                      const iconSpec = architectureStageIconMap[stage.step];
                      const StageIcon = iconSpec?.icon;

                      return (
                        <>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-100">
                        Stage {stage.step}
                      </div>
                      {StageIcon ? (
                        <StageIcon className={iconSpec.className} size={iconSpec.size ?? 16} />
                      ) : null}
                      <div className="text-sm font-medium text-white">{stage.title}</div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{stage.description}</p>
                        </>
                      );
                    })()}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[36px] p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">Design thesis</div>
              <div className="mt-6 space-y-4">
                {[
                  "External complexity should be contained at the edge, not leak into product logic.",
                  "Security has to be structural, especially in multi-tenant systems.",
                  "Automation is only valuable when teams can observe, debug, and trust it.",
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
