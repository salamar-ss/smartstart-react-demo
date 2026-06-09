import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTemplateById } from "../../services/templateService";
import type { Template } from "../../types/template.types";

function TemplateDetails() {
  const { id } = useParams();

  const [template, setTemplate] = useState<Template | null>(null);

  useEffect(() => {
    async function loadTemplate() {
      if (!id) {
        return;
      }

      const data = await getTemplateById(id);

      setTemplate(data);
    }

    loadTemplate();
  }, [id]);

  if (!template) {
    return <main className="template-details">Loading...</main>;
  }

  return (
    <main className="template-details">
      <h1>{template.title}</h1>
      <p>{template.body}</p>
    </main>
  );
}

export default TemplateDetails;