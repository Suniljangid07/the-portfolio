'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Card3DProps = {
    children: ReactNode;
    className?: string;
    tilt?: number;
    glow?: 'cyan' | 'blue' | 'purple' | 'green' | 'orange';
    as?: 'div' | 'article' | 'button' | 'a';
} & Record<string, unknown>;

const glowMap = {
    cyan: 'hover:border-cyan-400/35 hover:shadow-[0_24px_60px_rgba(0,212,255,0.16)]',
    blue: 'hover:border-blue-400/35 hover:shadow-[0_24px_60px_rgba(79,142,247,0.16)]',
    purple: 'hover:border-purple-400/35 hover:shadow-[0_24px_60px_rgba(124,58,237,0.16)]',
    green: 'hover:border-emerald-400/35 hover:shadow-[0_24px_60px_rgba(0,255,136,0.14)]',
    orange: 'hover:border-orange-400/35 hover:shadow-[0_24px_60px_rgba(255,107,53,0.14)]',
};

export function Card3D({
    children,
    className,
    tilt = 6,
    glow = 'cyan',
    as = 'div',
    ...props
}: Card3DProps) {
    const Comp = motion[as] as typeof motion.div;

    return (
        <Comp
            whileHover={{
                y: -8,
                rotateX: -tilt * 0.45,
                rotateY: tilt,
                translateZ: 10,
            }}
            transition={{ type: 'spring', stiffness: 240, damping: 20 }}
            className={cn(
                'card-3d card-shell spotlight-card',
                glowMap[glow],
                className,
            )}
            {...props}
        >
            {children}
        </Comp>
    );
}
