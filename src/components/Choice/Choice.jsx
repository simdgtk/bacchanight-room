// Style
import "./choice.scss";

export default function Choice({
  id,
  position,
  label,
  uiPath,
  modelPath,
  addModel,
  whichSurface,
  name,
}) {
  switch (whichSurface) {
    case "leftWall":
      position[0] += -0.1;
      position[1] += 16 / 4.2 / 2 + 0.1;
      position[2] += -4.2 / 2 + 0.1 + 0.1 + 0.25;
      break;
    case "rightWall":
      position[0] += 2 - 0.1 - 0.25;
      position[1] += 16 / 4.2 / 2 + 0.1;
      position[2] += 0;
      break;
    case "floor":
      position[0] += 0;
      position[1] += 0;
      position[2] += 0;
      break;
  }

  return (
    <>
      <button
        className="choice"
        onClick={() => {
          addModel(id, modelPath, name, position);
        }}
      >
        <img src={uiPath} width={40} />
        <p className="label-choice">{label}</p>
      </button>
    </>
  );
}
