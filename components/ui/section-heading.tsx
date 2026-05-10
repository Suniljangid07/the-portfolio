import { FiArrowUpRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description: string;
    align?: 'left' | 'center';
};

export function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'left',
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                'section-divider relative z-10',
                align === 'center'
                    ? 'mx-auto max-w-4xl text-center'
                    : 'max-w-6xl',
            )}
        >
            <div
                className={cn(
                    'flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between',
                    align === 'center' && 'lg:block',
                )}
            >
                <div
                    className={cn('max-w-3xl', align === 'center' && 'mx-auto')}
                >
                    <div className="eyebrow-chip">
                        <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(0,212,255,0.95)]" />
                        {eyebrow}
                    </div>
                    <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl">
                        {title}
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        {description}
                    </p>
                </div>

                <div
                    className={cn(
                        'data-chip inline-flex items-center gap-2 self-start font-mono text-[11px] uppercase tracking-[0.28em] text-slate-300',
                        align === 'center' && 'mx-auto mt-2',
                    )}
                >
                    <FiArrowUpRight className="text-cyan-300" size={14} />
                    Scroll to inspect
                </div>
            </div>
        </div>
    );
}
