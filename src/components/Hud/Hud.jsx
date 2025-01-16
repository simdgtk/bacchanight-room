
import { useState, useEffect } from "react";
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
  handleSetWhichSurface,
}) {
  const [state, setState] = useState("select");
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    setState("select");
    setActiveCategory(null);
  }, [whichSurface]);

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
  const activeCategoryLabel = state === "select" 
  ? "" 
  : selectOptions.find(option => option.category === activeCategory)?.label;

  return (
    <div
      className="hud-container"
      style={whichSurface === "" ? { display: 'flex', alignItems: 'center' } : {}}
    >
      <div className="hud-top-content">
        {whichSurface !== "" && (
          <BackBtn
            onClick={() => {
              if (state === "select") {
                handleSetWhichSurface("");
              } else {
                setState("select");
              }
            }}
          />
        )}

        <h2 className="hud-title">{title}</h2>
        {activeCategoryLabel && (
          <p className="hud-subtitle">({activeCategoryLabel})</p>
        )}
        <hr />
        <p className="hud-text">{text}</p>
      </div>
      {whichSurface !== "" && (
        <div className="hud-flex">
          {state === "select"
            ? selectOptions.map((option, index) => (
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
              ? componentsToRender.map((config, index) => (
                <Color
                  key={index}
                  label={config.label}
                  color={config.color}
                  whichSurface={whichSurface}
                  changeColor={changeColor}
                />
              ))
              : componentsToRender.map((config, index) => (
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
          {whichSurface !== "" && (
            <Button
              label={"Précédent"}
              onClick={() => {
                if (state === "select") {
                  handleSetWhichSurface(""); // Réinitialiser la surface à ""
                } else {
                  setState("select"); // Retourner à "select"
                }
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
