import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MODULES, isValidUrl, type ModuleId, type ModuleUrls } from "@/config/modules";
import { useModuleUrls } from "@/hooks/useModuleUrls";
import { PortalShell } from "@/components/PortalShell";

const TITLE = "Configuración de módulos";
const DESCRIPTION =
  "Conecte cada aplicación externa del establecimiento. Los módulos sin URL se muestran como próximamente.";

export const Route = createFileRoute("/configuracion")({
  head: () => ({
    meta: [
      { title: `${TITLE} | Sistema Integral de Gestión Educativa` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Configuracion,
});

function Configuracion() {
  const { urls, ready, save } = useModuleUrls();
  const [draft, setDraft] = useState<ModuleUrls>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (ready) setDraft(urls);
  }, [ready, urls]);

  const invalid = (Object.keys(draft) as ModuleId[]).filter(
    (id) => (draft[id] ?? "").trim() !== "" && !isValidUrl(draft[id] as string),
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (invalid.length > 0) return;
    save(draft);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  return (
    <PortalShell>
      <section className="py-14">
        <form
          onSubmit={handleSubmit}
          className="rise rounded-2xl bg-surface p-6 ring-1 ring-black/5 sm:p-8"
        >
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                (c) Administración
              </p>
              <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {TITLE}
              </h1>
            </div>
            <p className="max-w-[40ch] text-pretty text-sm text-muted">{DESCRIPTION}</p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {MODULES.map((module) => {
              const value = draft[module.id] ?? "";
              const hasError = value.trim() !== "" && !isValidUrl(value);
              return (
                <div key={module.id}>
                  <label
                    htmlFor={`url-${module.id}`}
                    className="font-mono text-xs uppercase tracking-wider text-muted"
                  >
                    {module.name}
                  </label>
                  <input
                    id={`url-${module.id}`}
                    type="url"
                    inputMode="url"
                    value={value}
                    onChange={(e) => setDraft((d) => ({ ...d, [module.id]: e.target.value }))}
                    placeholder="Sin configurar — próximamente"
                    className={`mt-1.5 w-full rounded-lg border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 ${
                      hasError
                        ? "border-destructive focus:ring-destructive/40"
                        : "border-line focus:ring-brand/40"
                    }`}
                  />
                  {hasError && (
                    <p className="mt-1 text-xs text-destructive">
                      Ingrese una dirección válida que comience con https://
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-xs text-muted">
              {saved
                ? "Configuración guardada."
                : "Los cambios se aplican al portal sin reconstruir las aplicaciones."}
            </p>
            <button
              type="submit"
              disabled={invalid.length > 0}
              className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-surface transition-colors hover:bg-brand-deep disabled:cursor-not-allowed disabled:bg-line/60 disabled:text-muted"
            >
              Guardar configuración
            </button>
          </div>
        </form>
      </section>
    </PortalShell>
  );
}
