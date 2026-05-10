import type { IconType } from 'react-icons';
import { cn } from '@/lib/utils';

type TechBadgeProps = {
    label: string;
    icon?: IconType;
    iconClassName?: string;
    className?: string;
};

export function TechBadge({
    label,
    icon: Icon,
    iconClassName,
    className,
}: TechBadgeProps) {
    return (
        <span
            className={cn(
                'data-chip font-stretch-normal text-[14px] tracking-[0.22em] text-slate-200',
                className,
            )}
        >
            {Icon ? <Icon className={iconClassName} size={28} /> : null}
            {label}
        </span>
    );
}
