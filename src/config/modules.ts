/**
 * Configuración centralizada de módulos del portal.
 *
 * Aquí se define el catálogo de módulos. Las URLs NO se escriben en los
 * componentes: se almacenan y se leen desde este módulo (ver useModuleUrls).
 * En una segunda etapa, este almacenamiento local puede reemplazarse por una
 * base de datos sin modificar la interfaz.
 */

export type ModuleId =
  | "tutor-ia"
  | "pipeline-apoderados"
  | "evaluaciones"
  | "asistencia"
  | "notas"
  | "panel-direccion";

/** Roles previstos para una futura capa de autenticación y permisos. */
export type Role = "direccion" | "docente" | "estudiante" | "apoderado" | "administrador";

export interface ModuleDefinition {
  id: ModuleId;
  code: string;
  name: string;
  description: string;
  initials: string;
  /** Roles que podrán acceder cuando se active el control de permisos. */
  roles: Role[];
  featured?: boolean;
}

export const MODULES: ModuleDefinition[] = [
  {
    id: "tutor-ia",
    code: "Mod. 01",
    name: "Tutor de IA",
    description:
      "Asistente inteligente que apoya el aprendizaje de estudiantes y el trabajo docente.",
    initials: "T",
    roles: ["direccion", "docente", "estudiante", "administrador"],
  },
  {
    id: "pipeline-apoderados",
    code: "Mod. 02",
    name: "Pipeline de Apoderados",
    description:
      "Registro y seguimiento de inasistencias, atrasos, calificaciones, conducta y otras situaciones.",
    initials: "P",
    roles: ["direccion", "docente", "administrador"],
  },
  {
    id: "evaluaciones",
    code: "Mod. 03",
    name: "Evaluaciones y Pruebas",
    description:
      "Creación y gestión de instrumentos de evaluación construidos con inteligencia artificial.",
    initials: "E",
    roles: ["direccion", "docente", "administrador"],
  },
  {
    id: "asistencia",
    code: "Mod. 04",
    name: "Asistencia",
    description: "Consulta y gestión de asistencia, inasistencias y atrasos de los estudiantes.",
    initials: "A",
    roles: ["direccion", "docente", "apoderado", "administrador"],
  },
  {
    id: "notas",
    code: "Mod. 05",
    name: "Notas",
    description: "Consulta y gestión de las calificaciones de los estudiantes del establecimiento.",
    initials: "N",
    roles: ["direccion", "docente", "estudiante", "apoderado", "administrador"],
  },
  {
    id: "panel-direccion",
    code: "Mod. 06",
    name: "Panel de Dirección",
    description: "Vista ejecutiva e integrada para apoyar la gestión y la toma de decisiones.",
    initials: "D",
    roles: ["direccion", "administrador"],
    featured: true,
  },
];

export type ModuleUrls = Partial<Record<ModuleId, string>>;

const STORAGE_KEY = "sige.module-urls.v1";

/** Sin URLs por defecto: ningún enlace se inventa. */
export const DEFAULT_MODULE_URLS: ModuleUrls = {};

export function isValidUrl(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function loadModuleUrls(): ModuleUrls {
  if (typeof window === "undefined") return DEFAULT_MODULE_URLS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_MODULE_URLS;
    const parsed = JSON.parse(raw) as ModuleUrls;
    return typeof parsed === "object" && parsed ? parsed : DEFAULT_MODULE_URLS;
  } catch {
    return DEFAULT_MODULE_URLS;
  }
}

export function saveModuleUrls(urls: ModuleUrls): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
}
