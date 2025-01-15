// Style
import "./color.scss";

// Test
export default function Choice({
  color,
  positionX,
  positionY,
  positionZ,
  addModel,
  label,
  path
}) {
  return (
    <>
      <button
        className="color"
        onClick={() => {
          addModel(color, positionX, positionY, positionZ);
        }}
      >
        <div
          className="color-container"
          style={{ backgroundColor: color }} // Ajout de la couleur dynamique
        ></div>
        <p className="label-color">{label}</p>
      </button>
    </>
  );
}
