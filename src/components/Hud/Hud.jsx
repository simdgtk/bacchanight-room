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
    { label: "Couleurs", category: "color" },
    { label: "Textures", category: "texture" },
    { label: "Tableaux", category: "tableau" },
    { label: "Statues", category: "statue" },
    { label: "Mobilier", category: "furniture" },
    { label: "Décorations", category: "decoration" },
  ];

  // Mapping des composants dynamiques pour l'état choice
  const componentMapping = {
    color: [
      { label: "Rouge", color: "red" },
      { label: "Bleu", color: "blue" },
      { label: "Noir", color: "black" },
      { label: "Blanc", color: "white" },
      { label: "Jaune", color: "yellow" },
    ],
    texture: [
      { label: "Texture", path: "./img/button/test-1.png", color: "black" },
      { label: "Texture", path: "./img/button/test-1.png", color: "red" },
      { label: "Texture", path: "./img/button/test-1.png", color: "black" },
    ],
    tableau: [
      { label: "Tableau", path: "./img/choice/tableau.svg", color: "blue" },
      { label: "Tableau", path: "./img/choice/tableau.svg", color: "green" },
    ],
    statue: [
      { label: "Statue", path: "./img/choice/tableau.svg", color: "blue" },
      { label: "Statue", path: "./img/choice/tableau.svg", color: "green" },
    ],
    furniture: [
      { label: "Sofa", path: "./img/choice/tableau.svg", color: "blue" },
      { label: "Sofa", path: "./img/choice/tableau.svg", color: "green" },
    ],
    decoration: [
      { label: "Plante", path: "./img/choice/tableau.svg", color: "blue" },
      { label: "Plante", path: "./img/choice/tableau.svg", color: "green" },
    ],
  };

  const componentsToRender = componentMapping[activeCategory] || [];

  return (
    <>
      <div className="hud-container">
        <div className="hud-top-content">
          <BackBtn
            onClick={() => {
              setState("select");
            }}
          />
          <h2 className="hud-title">{title}</h2>
          <p className="hud-subtitle">{componentsToRender[activeCategory]}</p>
          <hr />
          <p className="hud-text">{text}</p>
        </div>
        {whichSurface !== "" && (
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
        )}
        {whichSurface !== "" && (
          <div className="flex-button">
            <Button onClick={() => setState("select")} label={"Précédent"} />
          </div>
        )}
      </div>
    </>
  );
}
