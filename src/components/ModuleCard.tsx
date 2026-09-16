import type { ModuleDefinition } from "@/config/modules";

interface ModuleCardProps {
  module: ModuleDefinition;
  url?: string;
  delayMs: number;
}

export function ModuleCard({ module, url, delayMs }: ModuleCardProps) {
  const available = Boolean(url);

  return (
    <article
      className="card-hover rise flex flex-col rounded-2xl bg-surface p-6 ring-1 ring-black/5"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-deep font-display text-xl font-semibold text-surface">
          {module.initials}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
          {module.code}
        </span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-foreground">
        {module.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{module.description}</p>

      {available ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-surface transition-colors hover:bg-brand-deep"
        >
          Acceder a la aplicación <span aria-hidden="true">→</span>
        </a>
      ) : (
        <>
          <button
            type="button"
            disabled
            className="mt-5 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-line/60 px-4 py-3 text-sm font-semibold text-muted"
          >
            Acceder a la aplicación
          </button>
          <span className="mt-3 inline-flex items-center justify-center rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold text-accent">
            Próximamente
          </span>
        </>
      )}
    </article>
  );
}
