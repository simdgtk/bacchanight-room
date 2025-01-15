// Style
import "./color.scss";

export default function Color({
  color,
  positionX,
  positionY,
  positionZ,
  addModel,
  label,
  path,
  whichSurface,
  changeColor,
}) {
  return (
    <>
      <button
        className="color"
        onClick={() => {
          changeColor(color, whichSurface);
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
