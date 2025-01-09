import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "../Experience/Experience.jsx";
import CanvasToImg from "../components/CanvasToImg.jsx";

export default function Index() {
  const glRef = useRef(null);

  return (
    <>
      <Canvas
        onCreated={({ gl }) => {
          glRef.current = gl;
          gl.preserveDrawingBuffer = true;
        }}
        gl={{
          preserveDrawingBuffer: true,
        }}
        camera={{ position: [-2, 0, 6], fov: 75, near: 0.01, far: 100 }}
        style={{ position: "fixed", top: "0", left: "0", zIndex: "0" }}
      >
        <Experience />
      </Canvas>
      <CanvasToImg glRef={glRef} />
    </>
  );
}
