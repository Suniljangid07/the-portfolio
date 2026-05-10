'use client';

import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type GlowButtonProps = HTMLMotionProps<'a'> & {
    icon: ReactNode;
    text: string;
};

export function GlowButton({
    text,
    icon,
    className,
    ...props
}: GlowButtonProps) {
    return (
        <motion.a
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.975 }}
            className={cn(
                'rubber-button relative inline-flex min-h-12 items-center justify-start overflow-hidden rounded-full border border-white/12 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl',
                className,
            )}
            {...props}
        >
            <span aria-hidden="true" className="rubber-button__base" />
            <span aria-hidden="true" className="rubber-button__fill">
                {icon}
            </span>
            <span className="rubber-button__content">{text}</span>
        </motion.a>
    );
}
