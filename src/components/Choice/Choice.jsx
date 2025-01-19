// Style
import "./choice.scss";

export default function Choice({
  id,
  position,
  rotation,
  label,
  uiPath,
  modelPath,
  addModel,
  whichSurface,
  name,
  texture,
  orientation,
  sizes,
}) {
  console.log("position avant ", position);
  console.log("surface: ", whichSurface);

  switch (whichSurface) {
    case "leftWall":
      position[0] = position[0] + 0;
      position[1] = position[1] + 2;
      position[2] = position[2] + -2 + 0.1;
      break;
    case "rightWall":
      position[0] = position[0] + 2 - 0.1;
      position[1] = position[1] + 2;
      position[2] = position[2];
      rotation[1] = -Math.PI / 2;
      break;
    case "floor":
      position[0] += 0;
      position[1] += 0;
      position[2] += 0;
      break;
  }
  console.log("position après calcul ", position);

  return (
    <>
      <button
        className="choice"
        onClick={() => {
          addModel(
            id,
            modelPath,
            name,
            position,
            rotation,
            sizes,
            texture,
            orientation
          );
        }}
      >
        <img src={uiPath} width={40} />
        <p className="label-choice">{label}</p>
      </button>
    </>
  );
}
