// Depedencies
import { Canvas } from "@react-three/fiber";
import { useState, useRef } from "react";

// Custom import
import Experience from "../Experience/Experience.jsx";
import Choice from "../components/Choice/Choice.jsx";
import CanvasToImg from "../components/CanvasToImg.jsx";

export default function Index() {
  const [model, setModel] = useState({});
  const [whichSurface, setWhichSurface] = useState("");
  const [isCameraReset, setIsCameraReset] = useState(false);

  const glRef = useRef(null);

  const handleSetWhichSurface = (surface) => {
    setWhichSurface(surface);
  };

  const addModel = (color, positionX, positionY, positionZ) => {
    if (Object.keys(model).length === 0 && whichSurface !== "") {
      setModel({
        color: color,
        positionX: positionX,
        positionY: positionY,
        positionZ: positionZ,
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
          zoom: 60,
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
          // leftWall={leftWall}
          // rightWall={rightWall}
          // floor={floor}
        />
      </Canvas>
      <div className="test">
        <Choice
          color={"black"}
          positionX={0}
          positionY={0}
          positionZ={0}
          addModel={addModel}
          whichSurface={whichSurface}
        />
        <Choice
          color={"red"}
          positionX={0}
          positionY={0}
          positionZ={0}
          addModel={addModel}
          whichSurface={whichSurface}
        />
        <Choice
          color={"blue"}
          positionX={0}
          positionY={0}
          positionZ={0}
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
    </>
  );
}

// x
// :
// -0.412081694755545
// y
// :
// -0.7409232738240863
// z
// :
// -0.28689536218159506

// x
// :
// -11.483429532241647
// y
// :
// 6.2759649630207965
// z
// :
// 11.464590192774713
