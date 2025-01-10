// Style
import "./choice.scss";
// test
export default function Choice({
  color,
  positionX,
  positionY,
  positionZ,
  addModel,
  path
}) {
  return (
    <>
      <button
        className="choice"
        onClick={() => {
          addModel(color, positionX, positionY, positionZ);
        }}
      >
        <img src={path} width={40} />
      </button>
    </>
  );
}
