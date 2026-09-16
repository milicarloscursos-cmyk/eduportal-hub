import { createFileRoute, Link } from "@tanstack/react-router";
import { MODULES } from "@/config/modules";
import { useModuleUrls } from "@/hooks/useModuleUrls";
import { ModuleCard } from "@/components/ModuleCard";
import { PortalShell } from "@/components/PortalShell";

const TITLE = "Sistema Integral de Gestión Educativa";
const DESCRIPTION =
  "Plataforma integrada para la gestión, seguimiento y apoyo a la comunidad educativa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${TITLE} | Portal principal` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Portal,
});

function Portal() {
  const { getUrl, ready } = useModuleUrls();
  const disponibles = ready ? MODULES.filter((m) => getUrl(m.id)).length : 0;
  const proximos = MODULES.length - disponibles;

  return (
    <PortalShell>
      <section className="rise pb-10 pt-14">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          (a) Portal principal
        </p>
        <h1 className="max-w-[18ch] text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl">
          Sistema Integral de Gestión Educativa
        </h1>
        <p className="mt-6 max-w-[52ch] text-pretty text-lg text-muted">{DESCRIPTION}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-muted">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent" />
            {MODULES.length} módulos
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-brand" />
            {disponibles} disponibles
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-line" />
            {proximos} próximamente
          </span>
        </div>
      </section>

      <section className="pb-20">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            (b) Módulos del establecimiento
          </p>
          <Link
            to="/configuracion"
            className="shrink-0 font-mono text-xs text-muted underline-offset-4 hover:text-foreground hover:underline"
          >
            configurar enlaces
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((module, i) => (
            <ModuleCard
              key={module.id}
              module={module}
              url={ready ? getUrl(module.id) : undefined}
              delayMs={60 * (i + 1)}
            />
          ))}
        </div>
      </section>
    </PortalShell>
  );
}
