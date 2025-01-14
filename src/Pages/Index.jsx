// Depedencies
import { Canvas } from "@react-three/fiber";
import { useState, useRef } from "react";

// Custom import
import Experience from "../Experience/Experience.jsx";
import Choice from "../components/Choice/Choice.jsx";
import Hud from "../components/Hud/Hud.jsx";
import CanvasToImg from "../components/CanvasToImg.jsx";

export default function Index() {
  const [model, setModel] = useState({});
  const [whichSurface, setWhichSurface] = useState(null);
  const [isCameraReset, setIsCameraReset] = useState(false);

  const glRef = useRef(null);

  const handleSetWhichSurface = (surface) => {
    setWhichSurface(surface);
  };

  const addModel = (color, positionX, positionY, positionZ, name) => {
    if (Object.keys(model).length === 0 && whichSurface !== "") {
      setModel({
        color: color,
        positionX: positionX,
        positionY: positionY,
        positionZ: positionZ,
        name: name,
      });
    }
  };

  return (
    <>
      <Canvas
        camera={{
          position: [-10, 10, 10],
          near: 0.01,
          far: 100,
          zoom: 103,
          // left: -300,
          // right: 300,
          // top: 303.15,
          // bottom: -300,
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
          model={model}
          handleSetWhichSurface={handleSetWhichSurface}
          whichSurface={whichSurface}
        />
      </Canvas>
      <div className="test">

        <Choice
          color={"black"}
          positionX={0}
          positionY={0}
          positionZ={0}
          name={whichSurface + "Object"}
          addModel={addModel}
          whichSurface={whichSurface}
        />
        <Choice
          color={"red"}
          positionX={0}
          positionY={0}
          positionZ={0}
          name={whichSurface + "Object"}
          addModel={addModel}
          whichSurface={whichSurface}
        />
        <Choice
          color={"blue"}
          positionX={0}
          positionY={0}
          positionZ={0}
          name={whichSurface + "Object"}
          addModel={addModel}
          whichSurface={whichSurface}
        />

        <button
          onClick={() => {
            setIsCameraReset(true);
          }}
        >
          Reset Camera
        </button>
      </div>
      <Hud
        title={"Mur de gauche"}
        subtitle={"Lorem ipsum dolor sit amet consectetur. Lacus posuere auctor velit integer platea fusce."}
      />
    </>
  );
}
