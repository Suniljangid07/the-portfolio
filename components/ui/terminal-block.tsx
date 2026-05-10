'use client';

import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

type TerminalBlockProps = {
    prompt?: string;
    lines: string[];
    title?: string;
    className?: string;
    typeSpeedMs?: number;
};

export function TerminalBlock({
    prompt = '~/suniljangid',
    lines,
    title = 'Terminal',
    className,
    typeSpeedMs = 18,
}: TerminalBlockProps) {
    const totalText = useMemo(() => lines.join('\n'), [lines]);
    const [visibleLength, setVisibleLength] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setVisibleLength((current) => {
                if (current >= totalText.length) {
                    window.clearInterval(timer);
                    return current;
                }

                return current + 1;
            });
        }, typeSpeedMs);

        return () => window.clearInterval(timer);
    }, [totalText, typeSpeedMs]);

    const visibleText = totalText.slice(0, visibleLength).split('\n');
    const activeLineIndex = visibleText.length - 1;

    return (
        <div className={cn('terminal-surface rounded-[30px] p-5', className)}>
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <div className="flex items-center gap-2">
                    <span className="terminal-header-dot bg-cyan-300" />
                    <span className="terminal-header-dot bg-blue-400" />
                    <span className="terminal-header-dot bg-purple-400" />
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    {title}
                </div>
            </div>

            <div className="mt-5 space-y-3 font-mono text-sm leading-7 text-slate-300">
                <div className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                    {prompt} {'\u276F'}
                </div>
                {visibleText.map((line, index) => (
                    <div key={`${line}-${index}`} className="flex gap-3">
                        <span className="text-cyan-300">$</span>
                        <span>
                            {line}
                            {index === activeLineIndex &&
                            visibleLength < totalText.length ? (
                                <span className="terminal-cursor">|</span>
                            ) : null}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
