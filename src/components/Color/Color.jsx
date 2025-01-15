// Style
import "./color.scss";

export default function Color({ color, label, whichSurface, changeColor }) {
  return (
    <>
      <button
        className="color"
        onPointerDown={() => {
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
