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
    { label: "Couleurs", category: "color" },
    { label: "Textures", category: "texture" },
    { label: "Tableaux", category: "tableau" },
    { label: "Statues", category: "statue" },
    { label: "Mobilier", category: "furniture" },
    { label: "Décorations", category: "decoration" },
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
