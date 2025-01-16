// Depedencies
import { Canvas } from "@react-three/fiber";
import { useState, useRef } from "react";

// Custom import
import Experience from "../Experience/Experience.jsx";
import Hud from "../components/Hud/Hud.jsx";
import { surfaces } from "../Experience/Utils/surface.jsx";

import "../styles/pages/_index.scss";
import CanvasToImg from "../components/CanvasToImg.jsx";
import Button from "../components/Button/Button.jsx";

export default function Index() {
  const [models, setModels] = useState([]);
  const [whichSurface, setWhichSurface] = useState("");
  const [isCameraReset, setIsCameraReset] = useState(false);

  // Wall Color
  // const [leftWallColor, setLeftWallColor] = useState("#fefefe");
  // const [rightWallColor, setRightWallColor] = useState("#eeeeee");
  // const [floorColor, setFloorColor] = useState("#cccccc");
  const [leftWallColor, setLeftWallColor] = useState("#ff00ff");
  const [rightWallColor, setRightWallColor] = useState("#00ffff");
  const [floorColor, setFloorColor] = useState("#ffff00");

  const glRef = useRef(null);

  const handleSetWhichSurface = (surface) => {
    setWhichSurface(surface);
  };

  const removeModel = (id) => {
    setModels((prevModels) => prevModels.filter((model) => model.id !== id));
  };

  const replaceModel = (id, newColor) => {
    setModels((prevModels) => {
      const modelToUpdate = prevModels.find((model) => model.id === id);
      if (modelToUpdate) {
        modelToUpdate.color = newColor;
      }
      return [...prevModels];
    });
  };

  const addModel = (
    id,
    modelPath,
    name,
    position,
    rotation,
    texture,
    orientation,
    sizes
  ) => {
    if (whichSurface !== "") {
      setModels((prevModels) => [
        ...prevModels,
        {
          id: id,
          modelPath: modelPath,
          name: name,
          position: position,
          rotation: rotation,
          texture: texture,
          orientation: orientation,
          sizes: sizes,
        },
      ]);
    }
  };

  const changeColor = (newColor, whichSurface) => {
    if (whichSurface === "leftWall") {
      setLeftWallColor(newColor);
    }
    if (whichSurface === "rightWall") {
      setRightWallColor(newColor);
    }
    if (whichSurface === "floor") {
      setFloorColor(newColor);
    }
  };

  return (
    <>
      <Hud
        title={surfaces.uiTitle[whichSurface]}
        text={surfaces.uiDescription[whichSurface]}
        addModel={addModel}
        changeColor={changeColor}
        whichSurface={whichSurface}
        handleSetWhichSurface={handleSetWhichSurface}
      />

      <Canvas
        camera={{
          position: [-10, 20, 10],
          near: 0.01,
          far: 100,
          zoom: 40,
        }}
        style={{ width: "70vw" }}
        orthographic={true}
        onCreated={({ gl }) => {
          glRef.current = gl;
          gl.preserveDrawingBuffer = true;
        }}
        gl={{
          preserveDrawingBuffer: true,
        }}
      >
        <Experience
          isCameraReset={isCameraReset}
          setIsCameraReset={setIsCameraReset}
          models={models}
          handleSetWhichSurface={handleSetWhichSurface}
          whichSurface={whichSurface}
          leftWallColor={leftWallColor}
          rightWallColor={rightWallColor}
          floorColor={floorColor}
          removeModel={removeModel}
          replaceModel={replaceModel}
        />
      </Canvas>

      <div
        className=""
        onClick={() => {
          setIsCameraReset(true);
        }}
      >
        <CanvasToImg glRef={glRef} />
      </div>
      <div className="legals-link">
        <a href="/mentions-legales">Mentions légales</a>
      </div>
    </>
  );
}
