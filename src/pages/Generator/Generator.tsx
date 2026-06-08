import { useEffect, useMemo, useState } from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import TemplateCard from "../../components/TemplateCard/TemplateCard";
import Textarea from "../../components/Textarea/Textarea";

import { formFields } from "../../data/formFields";
import { templateOptions } from "../../data/templateOptions";
import { useTemplates } from "../../hooks/useTemplates";

import type { FormFieldEvent } from "../../types/form.types";

type GeneratorFormData = {
  businessName: string;
  audience: string;
  offer: string;
  transformation: string;
  templateType: string;
  bonuses: string;
  guarantee: string;
};

const initialFormData: GeneratorFormData = {
  businessName: "",
  audience: "",
  offer: "",
  transformation: "",
  templateType: "coach",
  bonuses: "",
  guarantee: "",
};

function Generator() {
  const [formData, setFormData] = useState<GeneratorFormData>(() => {
    const savedFormData = localStorage.getItem("smartstart-generator-form");

    if (savedFormData) {
      return JSON.parse(savedFormData);
    }

    return initialFormData;
  });

  const [isSaved, setIsSaved] = useState(false);
  const [templateSearch, setTemplateSearch] = useState("");

  const { templates, isLoadingTemplates, templatesError } = useTemplates();

  const filteredTemplates = useMemo(() => {
    const searchValue = templateSearch.toLowerCase();

    return templates.filter((template) => {
      return (
        template.title.toLowerCase().includes(searchValue) ||
        template.body.toLowerCase().includes(searchValue)
      );
    });
  }, [templates, templateSearch]);

  function handleFieldChange(event: FormFieldEvent) {
    const { name, value } = event.target;

    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  }

  function resetForm() {
    setFormData(initialFormData);
    localStorage.removeItem("smartstart-generator-form");
  }

  useEffect(() => {
    localStorage.setItem("smartstart-generator-form", JSON.stringify(formData));

    setIsSaved(true);

    const timer = setTimeout(() => {
      setIsSaved(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [formData]);

  return (
    <section className="generator">
      <div className="generator__layout">
        <div className="generator__form">
          <h2 className="generator__heading">SmartStart Generator</h2>

          <Select
            label="Template Type"
            name="templateType"
            value={formData.templateType}
            options={templateOptions}
            onChange={handleFieldChange}
          />

          {formFields.map((field) => (
            <Input
              key={field.name}
              label={field.label}
              name={field.name}
              value={formData[field.name as keyof GeneratorFormData]}
              onChange={handleFieldChange}
            />
          ))}

          <Textarea
            label="Bonuses"
            name="bonuses"
            value={formData.bonuses}
            onChange={handleFieldChange}
          />

          <Textarea
            label="Guarantee"
            name="guarantee"
            value={formData.guarantee}
            onChange={handleFieldChange}
          />

          <Button text="Reset Form" variant="secondary" onClick={resetForm} />
        </div>

        <div className="generator__preview">
          {isSaved && <div className="generator__saved">Auto-saved</div>}

          <span className="generator__eyebrow">AI Landing Preview</span>

          <p className="generator__template">Template: {formData.templateType}</p>

          <h1 className="generator__title">
            {formData.businessName || "Your Business Name"}
          </h1>

          <p className="generator__description">
            Helping {formData.audience || "your audience"} achieve{" "}
            {formData.transformation || "real transformation"}.
          </p>

          <div className="generator__offer">
            {formData.offer || "Your offer appears here"}
          </div>

          <div className="generator__bonuses">
            {formData.bonuses || "Your bonuses appear here"}
          </div>

          <div className="generator__guarantee">
            {formData.guarantee || "Your guarantee appears here"}
          </div>
        </div>
      </div>

      <div className="generator__templates">
        <h3 className="generator__templates-title">Template Gallery</h3>

        <Input
          label="Search Templates"
          name="templateSearch"
          value={templateSearch}
          onChange={(event) => {
            setTemplateSearch(event.target.value);
          }}
        />

        {isLoadingTemplates && (
          <p className="generator__templates-message">Loading templates...</p>
        )}

        {templatesError && (
          <p className="generator__templates-message">{templatesError}</p>
        )}

        {!isLoadingTemplates && !templatesError && (
          <>
            {filteredTemplates.length === 0 && (
              <p className="generator__templates-message">No templates found.</p>
            )}

            <div className="generator__templates-grid">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Generator;