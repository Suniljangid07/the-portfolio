"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type GlowButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
};

export function GlowButton({
  children,
  className,
  ...props
}: GlowButtonProps) {
  return (
    <motion.a
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(92,225,255,0.18)] backdrop-blur-xl transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/12",
        className,
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
