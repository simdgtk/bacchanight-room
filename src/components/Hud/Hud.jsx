// Components
import { useState } from "react";
import BackBtn from "../BackBtn/BackBtn.jsx";
import Button from "../Button/Button.jsx";
import Choice from "../Choice/Choice.jsx";
import Select from "../Select/Select.jsx";
import Color from "../Color/Color.jsx";

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
    { label: "Couleurs", category: "color", uiPath: "./img/button/test.jpg" },
    { label: "Textures", category: "texture", uiPath: "./img/button/test.jpg" },
    { label: "Tableaux", category: "tableau", uiPath: "./img/button/test.jpg" },
    { label: "Statues", category: "statue", uiPath: "./img/button/test.jpg" },
    {
      label: "Mobilier",
      category: "furniture",
      uiPath: "./img/button/test.jpg",
    },
    {
      label: "Décorations",
      category: "decoration",
      uiPath: "./img/button/test.jpg",
    },
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
      { label: "Texture", uiPath: "./img/button/test-1.png", modelPath: "" },
      { label: "Texture", uiPath: "./img/button/test-1.png", modelPath: "" },
      { label: "Texture", uiPath: "./img/button/test-1.png", modelPath: "" },
    ],
    tableau: [
      {
        label: "Tableau",
        uiPath: "./img/choice/texture.svg",
        modelPath: "/src/assets/walls/paintings/tableau-test.glb",
      },
      {
        label: "Tableau",
        uiPath: "./img/choice/texture.svg",
        modelPath: "/src/assets/walls/paintings/tableau-test.glb",
      },
    ],
    statue: [
      {
        label: "Statue",
        uiPath: "./img/choice/texture.svg",
        modelPath: "/src/assets/floor/statues/statue-test.glb",
      },
      {
        label: "Statue",
        uiPath: "./img/choice/texture.svg",
        modelPath: "/src/assets/floor/statues/statue-test.glb",
      },
    ],
    furniture: [
      {
        label: "Sofa",
        uiPath: "./img/choice/texture.svg",
        modelPath: "/src/assets/floor/furnitures/chair-test.glb",
      },
      {
        label: "Sofa",
        uiPath: "./img/choice/texture.svg",
        modelPath: "/src/assets/floor/furnitures/chair-test.glb",
      },
    ],
    decoration: [
      {
        label: "Plante",
        uiPath: "./img/choice/texture.svg",
        modelPath: "/src/assets/floor/decorations/decoration-test.glb",
      },
      {
        label: "Plante",
        uiPath: "./img/choice/texture.svg",
        modelPath: "/src/assets/floor/decorations/decoration-test.glb",
      },
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
                    uiPath={option.uiPath}
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
                    modelPath={config.modelPath}
                    uiPath={config.uiPath}
                    addModel={addModel}
                    whichSurface={whichSurface}
                    name={whichSurface}
                    position={[0, 0, 0]}
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
