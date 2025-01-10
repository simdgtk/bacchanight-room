// Depedencies
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

// Custom import
import Experience from "../Experience/Experience.jsx";
import Choice from "../components/Choice/Choice.jsx";
import Hud from "../components/Hud/Hud.jsx";

export default function Index() {
  const [model, setModel] = useState({});

  const addModel = (color, positionX, positionY, positionZ) => {
    if (Object.keys(model).length === 0) {
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
          position: [-4.2, 4, 4.2],
          near: 0.01,
          far: 100,
          zoom: 120,
        }}
        style={{ position: "fixed", top: "0", left: "0", zIndex: "0" }}
        orthographic={true}
      >
        <Experience model={model} />
      </Canvas>
      <div className="test">

        <Choice
          color={"black"}
          positionX={-1}
          positionY={-0.75}
          positionZ={1}
          addModel={addModel}
        />

      </div>
      <Hud
        title={"Mur de gauche"}
        subtitle={"Lorem ipsum dolor sit amet consectetur. Lacus posuere auctor velit integer platea fusce."}
      />
    </>
  );
}
