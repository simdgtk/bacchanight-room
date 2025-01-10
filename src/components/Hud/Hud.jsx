// Style
import "./hud.scss";
// Composant
import BackBtn from "../BackBtn/BackBtn";
import Choice from "../Choice/Choice";

// test
export default function Hud(
  {
    title,
    subtitle
  }
) {
  return (
    <>
      <div className="hud-container">
        <div className="hud-top-content">
          <BackBtn/>
          <h2 className="hud-title">{title}</h2>
          <p className="hud-subtitle">{subtitle}</p>
        </div>
        <div className="hud-flex">
          <Choice
          label={"Texture"}
          path={"/public/img/choice/texture.svg"}/>
          <Choice/>
          <Choice/>
          <Choice/>
          <Choice/>
        </div>
      </div>
    </>
  );
}
