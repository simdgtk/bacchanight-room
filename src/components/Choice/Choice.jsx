// Style
import "./choice.scss";

export default function Choice({
  id,
  positionX,
  positionY,
  positionZ,
  label,
  uiPath,
  modelPath,
  addModel,
  whichSurface,
  name,
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
          addModel(id, modelPath, name);
        }}
      >
        <img src={uiPath} width={40} />
        <p className="label-choice">{label}</p>
      </button>
    </>
  );
}
