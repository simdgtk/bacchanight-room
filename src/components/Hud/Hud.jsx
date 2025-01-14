// Composant
import BackBtn from "../BackBtn/BackBtn";
import Choice from "../Choice/Choice";
import Color from "../Color/Color";

// Style
import "./hud.scss";

export default function Hud({
  title,
  subtitle,
  whichSurface,
  addModel,
  changeColor,
}) {
  return (
    <>
      <div className="hud-container">
        <div className="hud-top-content">
          <BackBtn />
          <h2 className="hud-title">{title}</h2>
          <p className="hud-subtitle">{subtitle}</p>
        </div>
        <div className="hud-flex">
          <Choice
            label={"Texture"}
            path={"./img/choice/texture.svg"}
            addModel={addModel}
            color={"black"}
            positionX={0}
            positionY={0}
            positionZ={0}
            whichSurface={whichSurface}
            name={whichSurface}
          />
          <Choice
            label={"Texture"}
            path={"./img/choice/texture.svg"}
            addModel={addModel}
            color={"black"}
            positionX={0}
            positionY={0}
            positionZ={0}
            whichSurface={whichSurface}
            name={whichSurface}
          />
          <Choice
            label={"Texture"}
            path={"./img/choice/texture.svg"}
            addModel={addModel}
            color={"black"}
            positionX={0}
            positionY={0}
            positionZ={0}
            whichSurface={whichSurface}
            name={whichSurface}
          />
          <Choice
            label={"Texture"}
            path={"./img/choice/texture.svg"}
            addModel={addModel}
            color={"black"}
            positionX={0}
            positionY={0}
            positionZ={0}
            whichSurface={whichSurface}
            name={whichSurface}
          />
          <Choice
            label={"Texture"}
            path={"./img/choice/texture.svg"}
            addModel={addModel}
            color={"black"}
            positionX={0}
            positionY={0}
            positionZ={0}
            whichSurface={whichSurface}
            name={whichSurface}
          />
          <Color
            whichSurface={whichSurface}
            color={"#000000"}
            changeColor={changeColor}
          />
        </div>
      </div>
    </>
  );
}
