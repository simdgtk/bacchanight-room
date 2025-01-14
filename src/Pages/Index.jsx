// Depedencies
import { Canvas } from "@react-three/fiber";
import { useState, useRef } from "react";

// Custom import
import Experience from "../Experience/Experience.jsx";
import Hud from "../components/Hud/Hud.jsx";
import { surfaces } from "../Experience/Utils/surface.jsx";

export default function Index() {
  const [models, setModels] = useState([]);
  const [whichSurface, setWhichSurface] = useState(null);
  const [isCameraReset, setIsCameraReset] = useState(false);

  const [leftWallColor, setLeftWallColor] = useState("#ff00ff");
  const [rightWallColor, setRightWallColor] = useState("#ffff00");
  const [floorColor, setFloorColor] = useState("#00ffff");

  const glRef = useRef(null);

  const handleSetWhichSurface = (surface) => {
    setWhichSurface(surface);
  };

  const addModel = (color, positionX, positionY, positionZ, name) => {
    if (whichSurface !== null) {
      setModels((prevModels) => [
        ...prevModels,
        {
          color: color,
          positionX: positionX,
          positionY: positionY,
          positionZ: positionZ,
          name: name,
        },
      ]);
    }
  };

  const changeColor = (color, whichSurface) => {
    if (whichSurface === "leftWall") {
      setLeftWallColor(color);
    }
    if (whichSurface === "rightWall") {
      setRightWallColor(color);
    }
    if (whichSurface === "floor") {
      setFloorColor(color);
    }
  };

  return (
    <>
      <Canvas
        camera={{
          position: [-10, 10, 10],
          near: 0.01,
          far: 100,
          zoom: 60,
        }}
        style={{ position: "fixed", top: "0", left: "0", zIndex: "0" }}
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

      <Hud
        title={surfaces.uiTitle[whichSurface]}
        subtitle={
          "Lorem ipsum dolor sit amet consectetur. Lacus posuere auctor velit integer platea fusce."
        }
        addModel={addModel}
        changeColor={changeColor}
        whichSurface={whichSurface}
      />
    </>
  );
}
