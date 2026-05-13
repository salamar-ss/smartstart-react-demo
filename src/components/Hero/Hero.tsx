import Button from "../Button/Button";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__eyebrow">
          AI Landing Page System
        </span>

        <h1 className="hero__title">
          Build a smarter online business start.
        </h1>

        <p className="hero__description">
          SmartStart helps freelancers,
          coaches and creators launch
          faster with structured landing pages.
        </p>

        <div className="hero__actions">
          <Button
            text="Start Project"
            variant="primary"
          />

          <Button
            text="View Templates"
            variant="secondary"
          />
        </div>
      </div>

      <div className="hero__preview">
        <div className="hero__card">
          <span className="hero__card-label">
            Landing Preview
          </span>

          <h3 className="hero__card-title">
            Your offer becomes a clear sales page.
          </h3>

          <p className="hero__card-description">
            Audience → Offer → Transformation → CTA
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;