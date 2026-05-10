'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SectionRevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    amount?: number;
};

export function SectionReveal({
    children,
    className,
    delay = 0,
    amount = 0.2,
}: SectionRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 4 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount }}
            transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
