"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/glow-button";
import { heroHighlights, heroSignals, heroStats } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-16 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-x-0 top-16 h-[34rem] bg-[radial-gradient(circle_at_30%_30%,rgba(92,225,255,0.16),transparent_26%),radial-gradient(circle_at_65%_15%,rgba(91,124,255,0.18),transparent_24%),radial-gradient(circle_at_55%_50%,rgba(244,141,255,0.12),transparent_28%)]" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative max-w-3xl"
        >
          <div className="mb-6 inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100">
            Engineering depth, product precision
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {heroSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300"
              >
                {signal}
              </span>
            ))}
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.065em] text-white sm:text-7xl lg:text-[5.7rem]">
            Sunil Jangid
            <span className="mt-2 block text-shimmer">
              builds systems that feel clear, fast, and inevitable.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Founding software engineer focused on AI-enabled products, integration-heavy platforms,
            secure multi-tenant systems, and the invisible architecture that makes polished user
            experiences hold up in production.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {heroHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + index * 0.08, duration: 0.6 }}
                className="rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
              >
                <div className="text-xs uppercase tracking-[0.28em] text-slate-500">{item.label}</div>
                <p className="mt-3 text-sm leading-7 text-slate-200">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <GlowButton href="#projects">Explore the work</GlowButton>
            <GlowButton
              href="https://github.com/Suniljangid07"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent"
            >
              View GitHub
            </GlowButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.9, ease: "easeOut" }}
          className="glass-panel relative overflow-hidden rounded-[34px] p-6 sm:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(92,225,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(91,124,255,0.14),transparent_26%)]" />

          <div className="relative">
            <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
              <span>Live profile</span>
              <span>System signal</span>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">Current focus</div>
              <p className="mt-4 text-2xl font-semibold leading-9 tracking-[-0.04em] text-white">
                Building AI-native products with integration depth and production-grade architecture.
              </p>
            </div>

            <div className="mt-5 space-y-4">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-white/8 bg-white/4 p-5"
                >
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    {item.label}
                  </div>
                  <div className="mt-3 text-lg font-medium text-white">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Owns both product feel and system behavior.",
                "Designs for scale, observability, and operational trust.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-cyan-300/12 bg-cyan-300/6 p-4 text-sm leading-7 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-cyan-200">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(92,225,255,0.95)]" />
              Scroll to move through the portfolio space
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm uppercase tracking-[0.35em] text-slate-400"
      >
        Explore ↓
      </motion.a>
    </section>
  );
}
