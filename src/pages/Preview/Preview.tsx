import { useGenerator } from "../../hooks/useGenerator";

function Preview() {
  const { formData } = useGenerator();

  return (
    <main className="preview-page">
      <section className="preview-page__hero">
        <span className="preview-page__template">
          {formData.templateType}
        </span>

        <h1 className="preview-page__title">
          {formData.businessName || "Your Business Name"}
        </h1>

        <p className="preview-page__description">
          Helping {formData.audience || "your audience"} achieve{" "}
          {formData.transformation || "real transformation"}.
        </p>

        <button className="button button--primary">
          Get Started
        </button>
      </section>

      <section className="preview-page__section">
        <h2>Offer</h2>

        <p>
          {formData.offer || "Your offer will appear here."}
        </p>
      </section>

      <section className="preview-page__section">
        <h2>Bonuses</h2>

        <p>
          {formData.bonuses || "Your bonuses will appear here."}
        </p>
      </section>

      <section className="preview-page__section">
        <h2>Guarantee</h2>

        <p>
          {formData.guarantee || "Your guarantee will appear here."}
        </p>
      </section>
    </main>
  );
}

export default Preview;