// Composant
import { useState } from "react";
import BackBtn from "../BackBtn/BackBtn";
import Button from "../Button/Button";
import Choice from "../Choice/Choice";
import Select from "../Select/Select";
import Color from "../Color/Color";

// Style
import "./hud.scss";

export default function Hud({
  title,
  text,
  addModel,
  changeColor,
  whichSurface,
}) {
  // État local pour gérer "select" ou "choice" et la catégorie active
  const [state, setState] = useState("select");
  const [activeCategory, setActiveCategory] = useState(null);

  // Mapping des catégories pour l'état select
  const selectOptions = [
    { label: "Textures", category: "texture" },
    { label: "Surfaces", category: "surface" },
    { label: "Couleurs", category: "color" },
  ];

  // Mapping des composants dynamiques pour l'état choice
  const componentMapping = {
    texture: [
      { label: "Texture", path: "./img/button/test-1.png", color: "black" },
      { label: "Texture", path: "./img/button/test-1.png", color: "red" },
      { label: "Texture", path: "./img/button/test-1.png", color: "black" },
    ],
    surface: [
      { label: "Surface", path: "./img/choice/surface.svg", color: "blue" },
      { label: "Surface", path: "./img/choice/surface.svg", color: "green" },
    ],
    color: [
      { label: "Rouge", color: "red" },
      { label: "Bleu", color: "blue" },
      { label: "Noir", color: "black" },
      { label: "Blanc", color: "white" },
      { label: "Jaune", color: "yellow" },
    ],
  };

  const componentsToRender = componentMapping[activeCategory] || [];

  return (
    <>
      <div className="hud-container">
        <div className="hud-top-content">
          <BackBtn onClick={() => setState("select")} />
          <h2 className="hud-title">{title}</h2>
          <p className="hud-subtitle">{componentsToRender[activeCategory]}</p>
          <hr />
          <p className="hud-text">{text}</p>
        </div>
        <div className="hud-flex">
          {state === "select"
            ? // Rendu des boutons Select
              selectOptions.map((option, index) => (
                <Select
                  key={index}
                  label={option.label}
                  onClick={() => {
                    setState("choice");
                    setActiveCategory(option.category);
                  }}
                />
              ))
            : activeCategory === "color"
            ? // Rendu des boutons Color
              componentsToRender.map((config, index) => (
                <Color
                  key={index}
                  label={config.label}
                  color={config.color}
                  whichSurface={whichSurface}
                  changeColor={changeColor}
                />
              ))
            : // Rendu des composants Choice
              componentsToRender.map((config, index) => (
                <Choice
                  key={index}
                  label={config.label}
                  path={config.path}
                  addModel={addModel}
                  color={config.color}
                  positionX={0}
                  positionY={0}
                  positionZ={0}
                  whichSurface={whichSurface}
                  name={whichSurface}
                />
              ))}
        </div>
        <div className="flex-button">
          <Button onClick={() => setState("select")} label={"Précédent"} />
        </div>
      </div>
    </>
  );
}
