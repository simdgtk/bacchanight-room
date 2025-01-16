// Depedencies
import { Canvas } from "@react-three/fiber";
import { useState, useRef } from "react";

// Custom import
import Experience from "../Experience/Experience.jsx";
import Hud from "../components/Hud/Hud.jsx";
import { surfaces } from "../Experience/Utils/surface.jsx";

import "../styles/pages/_index.scss";

export default function Index() {
  const [models, setModels] = useState([]);
  const [whichSurface, setWhichSurface] = useState("");
  const [isCameraReset, setIsCameraReset] = useState(false);

  // Wall Color
  const [leftWallColor, setLeftWallColor] = useState("#ffffff");
  const [rightWallColor, setRightWallColor] = useState("#ffffff");
  const [floorColor, setFloorColor] = useState("#ffffff");

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

  const addModel = (id, modelPath, name, position) => {
    if (whichSurface !== "") {
      setModels((prevModels) => [
        ...prevModels,
        {
          id: id,
          modelPath: modelPath,
          name: name,
          position: position,
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
      />

      <Canvas
        camera={{
          position: [-10, 10, 10],
          near: 0.01,
          far: 100,
          zoom: 103,
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

      <div className="test">
        <button
          onClick={() => {
            setIsCameraReset(true);
          }}
        >
          Reset Camera
        </button>
      </div>

      <div className="legals-link">
        <a href="/mentions-legales">mentions légales</a>
      </div>
    </>
  );
}
