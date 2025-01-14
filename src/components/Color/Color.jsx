// Style
import "./color.scss";
// test
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
        <div className="circle"></div>
        <p className="label-color">{label}</p>
      </button>
    </>
  );
}
