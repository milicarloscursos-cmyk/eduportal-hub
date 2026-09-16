import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

function Masthead() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/85 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-3 sm:h-16 sm:py-0">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand font-display text-lg font-semibold text-surface">
            S
          </div>
          <div className="min-w-0 leading-tight">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Portal institucional
            </p>
            <p className="truncate text-sm font-semibold text-foreground">
              Sistema Integral de Gestión
            </p>
          </div>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "bg-brand text-surface font-medium" }}
            inactiveProps={{ className: "text-muted hover:text-foreground hover:bg-line/50" }}
            className="rounded-full px-3 py-2 transition-colors"
          >
            Portal
          </Link>
          <Link
            to="/configuracion"
            activeProps={{ className: "bg-brand text-surface font-medium" }}
            inactiveProps={{ className: "text-muted hover:text-foreground hover:bg-line/50" }}
            className="rounded-full px-3 py-2 transition-colors"
          >
            Configuración
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function PortalShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Masthead />
      <main className="mx-auto max-w-6xl px-6">{children}</main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-muted">
          <p className="font-mono text-xs uppercase tracking-[0.15em]">
            Sistema Integral · Portal Principal
          </p>
          <p>Arquitectura preparada para roles, permisos e integraciones futuras.</p>
        </div>
      </footer>
    </div>
  );
}
