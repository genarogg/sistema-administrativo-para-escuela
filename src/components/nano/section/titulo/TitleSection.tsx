interface TitleSectionProps {
  id?: string;
  titulo: string;
  className?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ titulo, id = " ", className = " " }) => {
  return (
    <div className={`title-section ${className}`} style={{ position: "relative" }}>
      {id && (
        <div
          id={id}
          style={{
            position: "absolute",
            top: "-90px",
            left: "0",
            height: "100px",
            width: "100%",
            pointerEvents: "none",
            zIndex: -10000000,
          }}
        />
      )}
      <a>
        <label>{titulo}</label>
      </a>
    </div>
  );
};

export default TitleSection;
