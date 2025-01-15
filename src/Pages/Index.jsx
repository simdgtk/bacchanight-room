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
          "(Couleurs)"
        }
        text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam non, assumenda accusantium itaque autem quisquam voluptate voluptatem sint at tenetur facere! Esse accusantium, nobis inventore ipsa modi optio reprehenderit non."}
        addModel={addModel}
        whichSurface={whichSurface}
      />
    </>
  );
}