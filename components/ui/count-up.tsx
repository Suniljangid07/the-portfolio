'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type CountUpProps = {
    end: number;
    suffix?: string;
    durationMs?: number;
};

export function CountUp({ end, suffix = '', durationMs = 1400 }: CountUpProps) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!isInView) {
            return;
        }

        let start = 0;
        const startTime = performance.now();

        const tick = (time: number) => {
            const progress = Math.min((time - startTime) / durationMs, 1);
            const eased = 1 - (1 - progress) * (1 - progress);
            start = Math.round(end * eased);
            setValue(start);

            if (progress < 1) {
                window.requestAnimationFrame(tick);
            }
        };

        window.requestAnimationFrame(tick);
    }, [durationMs, end, isInView]);

    return (
        <span ref={ref}>
            {value}
            {suffix}
        </span>
    );
}
