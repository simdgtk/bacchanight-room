// Style
import "./choice.scss";
// test
export default function Choice({
  color,
  positionX,
  positionY,
  positionZ,
  addModel,
}) {
  const test = null;
  return (
    <>
      <button
        className="choice"
        onClick={() => {
          addModel(color, positionX, positionY, positionZ);
        }}
      >
        <img src="/img/button/test.jpg" width={40} alt="" />
      </button>
    </>
  );
}
