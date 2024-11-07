interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const titleWithoutSpaces = title.split(" ").join("-");
  return (
    <div className="accordion" id={`accordion-${titleWithoutSpaces}`}>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${titleWithoutSpaces}`}
            aria-expanded="false"
            aria-controls={`collapse-${titleWithoutSpaces}`}
          >
            {title}
          </button>
        </h2>
        <div
          id={`collapse-${titleWithoutSpaces}`}
          className="accordion-collapse collapse"
          data-bs-parent={`#accordion-${titleWithoutSpaces}`}
        >
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
