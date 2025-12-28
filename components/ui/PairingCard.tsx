/**
 * PairingCard — Apple-like "pairing sheet" (A) used as the main stage.
 *
 * It intentionally supports:
 * - Hero icon slot
 * - Title/subtitle
 * - Single primary CTA area (optional)
 */
import React from 'react';
import { cn } from '@/utils/cn';

type PairingCardProps = {
  hero?: React.ReactNode;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

export function PairingCard({
  hero,
  eyebrow,
  title,
  subtitle,
  children,
  footer,
  className,
}: PairingCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10',
        'bg-white/70 dark:bg-slate-900/30',
        className
      )}
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 dark:opacity-100 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(34,211,238,0.12),transparent_55%),radial-gradient(700px_circle_at_100%_10%,rgba(45,212,191,0.10),transparent_55%)]" />
      <div className="relative p-4 sm:p-5 space-y-2">
        <div className="flex items-start gap-3">
          {hero ? (
            <div className="shrink-0 w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-200 dark:border-cyan-900/30 flex items-center justify-center">
              {hero}
            </div>
          ) : null}
          <div className="min-w-0">
            {eyebrow ? (
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {eyebrow}
              </div>
            ) : null}
            <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {title}
            </div>
            {subtitle ? (
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {subtitle}
              </div>
            ) : null}
          </div>
        </div>

        {children ? <div className="pt-1">{children}</div> : null}
        {footer ? <div className="pt-3 border-t border-slate-200 dark:border-white/10">{footer}</div> : null}
      </div>
    </div>
  );
}

