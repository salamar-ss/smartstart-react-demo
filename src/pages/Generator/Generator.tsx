import { useState } from "react";

import Input from "../../components/Input/Input";
import { formFields } from "../../data/formFields";

type GeneratorFormData = {
  businessName: string;
  audience: string;
  offer: string;
  transformation: string;
};

function Generator() {
  const [formData, setFormData] =
    useState<GeneratorFormData>({
      businessName: "",
      audience: "",
      offer: "",
      transformation: "",
    });

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target;

    setFormData((previousFormData) => ({
      ...previousFormData,
      [name as keyof GeneratorFormData]: value,
    }));
  }

  return (
    <section className="generator">
      <div className="generator__layout">
        <div className="generator__form">
          <h2 className="generator__heading">
            SmartStart Generator
          </h2>
          
          {
            formFields.map((field) => (
              <Input
                key={field.name}
                label={field.label}
                name={field.name}
                value={
                  formData[
                    field.name as keyof GeneratorFormData
                  ]
                }
                onChange={handleInputChange}
              />
            ))
          }
        </div>

        <div className="generator__preview">
          <span className="generator__eyebrow">
            AI Landing Preview
          </span>

          <h1 className="generator__title">
            {formData.businessName ||
              "Your Business Name"}
          </h1>

          <p className="generator__description">
            Helping{" "}
            {formData.audience || "your audience"}{" "}
            achieve{" "}
            {formData.transformation ||
              "real transformation"}
            .
          </p>

          <div className="generator__offer">
            {formData.offer ||
              "Your offer appears here"}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Generator;