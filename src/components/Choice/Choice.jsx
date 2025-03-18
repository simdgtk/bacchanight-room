// Style
import "./choice.scss";

export default function Choice({
  id,
  position,
  rotation,
  label,
  author,
  reserve,
  date,
  uiPath,
  modelPath,
  addModel,
  whichSurface,
  name,
  texture,
  orientation,
  sizes,
}) {
  switch (whichSurface) {
    case "leftWall":
      position[0] = position[0] + 0;
      position[1] = position[1] + 4;
      position[2] = position[2] + -4 + 0.2;
      break;
    case "rightWall":
      position[0] = position[0] + 4 - 0.2;
      position[1] = position[1] + 4;
      position[2] = position[2];
      rotation[1] = -Math.PI / 2;
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
        className={`choice ${reserve ? "reserve" : ""}`}
        title={
          label
            ? `${label}${author ? ` - ${author}` : ""}${
                date ? `, ${date}` : ""
              }`
            : ""
        }
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
        <p className="label-choice">
          <span className={author ? "italic" : ""}>{label}</span>
          {label
            ? `${author ? ` - ${author}` : ""}${date ? `, ${date}` : ""}`
            : ""}
        </p>
      </button>
    </>
  );
}
