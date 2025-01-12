// Style
import "./choice.scss";
// test
export default function Choice({
  color,
  positionX,
  positionY,
  positionZ,
  addModel,
  whichSurface,
}) {
  switch (whichSurface) {
    case "leftWall":
      positionX += -0.1;
      positionY += 16 / 4.2 / 2 + 0.1;
      positionZ += -4.2 / 2 + 0.1 + 0.1 + 0.25;
      break;
    case "rightWall":
      positionX += 2 - 0.1 - 0.25;
      positionY += 16 / 4.2 / 2 + 0.1;
      positionZ += 0;
      break;
    case "floor":
      positionX += 0;
      positionY += 0 + 0.1 + 0.25;
      positionZ += 0;
      break;
  }
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
