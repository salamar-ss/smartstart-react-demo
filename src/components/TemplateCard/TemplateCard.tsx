import { Link } from "react-router-dom";
import type { Template } from "../../types/template.types";
import { memo } from "react";

type TemplateCardProps = {
  template: Template;
};

const TemplateCard = memo(
  function TemplateCard({ template }: TemplateCardProps) {
    return (
      <Link to={`/templates/${template.id}`}>
        <article className="template-card">
          <h4 className="template-card__title">{template.title}</h4>
          <p className="template-card__text">{template.body}</p>
        </article>
      </Link>
    );
  }
);

export default TemplateCard;