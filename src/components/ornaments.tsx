import { cn } from "@/lib/utils";

export function EightPointStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("text-gold", className)}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M32 2.5 36.8 22.2 56 18.5 41.8 32 56 45.5 36.8 41.8 32 61.5 27.2 41.8 8 45.5 22.2 32 8 18.5 27.2 22.2Z"
      />
    </svg>
  );
}

export function CornerFrame({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-3 md:inset-5", className)} aria-hidden="true">
      <span className="absolute top-0 left-0 h-10 w-10 border-t border-l border-gold/50 md:h-14 md:w-14" />
      <span className="absolute top-0 right-0 h-10 w-10 border-t border-r border-gold/50 md:h-14 md:w-14" />
      <span className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-gold/50 md:h-14 md:w-14" />
      <span className="absolute right-0 bottom-0 h-10 w-10 border-b border-r border-gold/50 md:h-14 md:w-14" />
    </div>
  );
}

export function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="gold-rule" />
      <EightPointStar className="size-3 opacity-90" />
      <span className="gold-rule" />
    </div>
  );
}
