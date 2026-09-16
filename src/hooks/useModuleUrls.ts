import { useCallback, useEffect, useState } from "react";
import {
  DEFAULT_MODULE_URLS,
  isValidUrl,
  loadModuleUrls,
  saveModuleUrls,
  type ModuleId,
  type ModuleUrls,
} from "@/config/modules";

/**
 * Fuente única de verdad para las URLs de los módulos.
 * Hoy persiste en el navegador; mañana puede conectarse a una base de datos
 * sin cambiar la interfaz que lo consume.
 */
export function useModuleUrls() {
  const [urls, setUrls] = useState<ModuleUrls>(DEFAULT_MODULE_URLS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUrls(loadModuleUrls());
    setReady(true);
  }, []);

  const save = useCallback((next: ModuleUrls) => {
    const cleaned: ModuleUrls = {};
    (Object.keys(next) as ModuleId[]).forEach((id) => {
      const value = (next[id] ?? "").trim();
      if (value) cleaned[id] = value;
    });
    setUrls(cleaned);
    saveModuleUrls(cleaned);
  }, []);

  const getUrl = useCallback(
    (id: ModuleId) => {
      const value = urls[id];
      return value && isValidUrl(value) ? value : undefined;
    },
    [urls],
  );

  return { urls, ready, save, getUrl };
}
