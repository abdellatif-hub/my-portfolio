export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading mb-4">
      <span className="section-eyebrow">
        {eyebrow}
      </span>
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="section-description mb-0">{description}</p>
      ) : null}
    </div>
  );
}
