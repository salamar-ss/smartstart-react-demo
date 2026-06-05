import { useState } from "react";

import Input from "../../components/Input/Input";

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

          <Input
            label="Business Name"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
          />

          <Input
            label="Audience"
            name="audience"
            value={formData.audience}
            onChange={handleInputChange}
          />

          <Input
            label="Offer"
            name="offer"
            value={formData.offer}
            onChange={handleInputChange}
          />

          <Input
            label="Transformation"
            name="transformation"
            value={formData.transformation}
            onChange={handleInputChange}
          />
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