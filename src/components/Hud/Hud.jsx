import { useState, useEffect } from "react";
import BackBtn from "../BackBtn/BackBtn.jsx";
import Button from "../Button/Button.jsx";
import Choice from "../Choice/Choice.jsx";
import Select from "../Select/Select.jsx";
import Color from "../Color/Color.jsx";
import { componentMapping } from "../../Experience/Utils/sources.jsx";

// Style
import "./hud.scss";
import { surfaces } from "../../Experience/Utils/surface.jsx";

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
    {
      label: "Couleurs",
      surfaces: "all",
      category: "color",
      uiPath: "./img/button/test.jpg",
    },
    {
      label: "Tableaux",
      surfaces: "leftWall & rightWall",
      category: "tableau",
      uiPath: "./img/button/test.jpg",
    },
    {
      label: "Statues",
      surfaces: "floor",
      category: "statue",
      uiPath: "./img/button/test.jpg",
    },
    {
      label: "Mobilier",
      surfaces: "floor",
      category: "furniture",
      uiPath: "./img/button/test.jpg",
    },
    {
      label: "Plantes",
      surfaces: "floor",
      category: "decoration",
      uiPath: "./img/button/test.jpg",
    },
  ];

  const componentsToRender = componentMapping[activeCategory] || [];
  const activeCategoryLabel =
    state === "select"
      ? ""
      : selectOptions.find((option) => option.category === activeCategory)
          ?.label;

  return (
    <div
      className="hud-container"
      style={
        whichSurface === "" ? { display: "flex", alignItems: "center" } : {}
      }
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
        {whichSurface === "" && (
          <img src="/img/logo.svg" alt="Logo Virtu'Aile" className="logo"></img>
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
            ? selectOptions
                .filter(
                  (option) =>
                    option.surfaces.includes(whichSurface) ||
                    option.surfaces === "all"
                )
                .map((option, index) => (
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
            ? componentsToRender.map((config, index) => (
                <Color
                  key={index}
                  label={config.label}
                  color={config.color}
                  uiPath={config.uiPath}
                  whichSurface={whichSurface}
                  changeColor={changeColor}
                />
              ))
            : componentsToRender.map((config, index) => (
                <Choice
                  key={index}
                  label={config.label}
                  uiPath={config.uiPath}
                  modelPath={config.modelPath}
                  addModel={addModel}
                  whichSurface={whichSurface}
                  name={whichSurface}
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                  orientation={config.orientation}
                  sizes={config.sizes}
                  texture={config.texture}
                  id={config.id}
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
