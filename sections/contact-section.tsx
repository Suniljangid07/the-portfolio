"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/glow-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { socialLinks } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something with real leverage."
          description="If the challenge spans product, platform, integrations, or system design, this is the kind of work Sunil does best."
          align="center"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="glass-panel mx-auto mt-14 max-w-4xl rounded-[36px] p-8 sm:p-10"
        >
          <form className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-[20px] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50 focus:bg-white/8"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Email</span>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-[20px] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50 focus:bg-white/8"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">What are you building?</span>
              <textarea
                rows={6}
                placeholder="Tell me about the product, system, or challenge."
                className="w-full rounded-[24px] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50 focus:bg-white/8"
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3">
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <GlowButton key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </GlowButton>
                ))}
              </div>
              <div className="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-sm text-cyan-100">
                Reach out on LinkedIn or GitHub to start the conversation
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
