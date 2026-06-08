import { useEffect, useState } from "react";

import { getTemplates } from "../services/templateService";
import type { Template } from "../types/template.types";

export function useTemplates() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isLoadingTemplates, setIsLoadingTemplates] = useState(true);
  const [templatesError, setTemplatesError] = useState("");

  useEffect(() => {
    async function loadTemplates() {
      try {
        const data = await getTemplates();

        setTemplates(data.slice(0, 6));
      } catch {
        setTemplatesError("Failed to load templates.");
      } finally {
        setIsLoadingTemplates(false);
      }
    }

    loadTemplates();
  }, []);

  return {
    templates,
    isLoadingTemplates,
    templatesError,
  };
}