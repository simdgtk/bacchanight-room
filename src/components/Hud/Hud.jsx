import { useState, useEffect } from "react";
import BackBtn from "../BackBtn/BackBtn.jsx";
import Button from "../Button/Button.jsx";
import Choice from "../Choice/Choice.jsx";
import Select from "../Select/Select.jsx";
import Color from "../Color/Color.jsx";
import { componentMapping } from "../../Experience/Utils/sources.jsx";

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
    {
      label: "Couleurs",
      description: "Changez la couleur",
      surfaces: "all",
      category: "color",
    },
    {
      label: "Tableaux",
      description: "Ajoutez des tableaux",
      surfaces: "leftWall & rightWall",
      category: "tableau",
    },
    {
      label: "Statues",
      description: "Ajoutez des statues",
      surfaces: "floor",
      category: "statue",
    },
    {
      label: "Mobilier",
      description: "Ajoutez du mobilier",
      surfaces: "floor",
      category: "furniture",
    },
    {
      label: "Plantes",
      description: "Ajoutez des plantes",
      surfaces: "floor",
      category: "decoration",
    },
  ];

  const componentsToRender = componentMapping[activeCategory] || [];
  const activeCategoryLabel =
    state === "select"
      ? ""
      : selectOptions.find((option) => option.category === activeCategory)
          ?.label;

  const descriptionCategoryLabel =
    state === "select"
      ? ""
      : selectOptions.find((option) => option.category === activeCategory)
          ?.description;

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
          <img src="/img/logo.webp" alt="Logo Virtu'Aile" className="logo"></img>
        )}
        <h2 className="hud-title">{title}</h2>
        {activeCategoryLabel && (
          <p className="hud-subtitle">{descriptionCategoryLabel}</p>
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
                  author={config.author}
                  reserve={config.reserve}
                  large={config.large}
                  long={config.long}
                  date={config.date}
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
