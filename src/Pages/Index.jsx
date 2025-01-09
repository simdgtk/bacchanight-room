import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "../Experience/Experience.jsx";
import CanvasToImg from "../components/CanvasToImg.jsx";

export default function Index() {
  const glRef = useRef(null);
  const toImgButton = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // console.log("glRef (useEffect):", glRef);
    // console.log(canvasRef);
  }, []);

  function download() {
    console.log("test");
  }

  return (
    <>
      <Canvas
        onCreated={({ gl }) => {
          glRef.current = gl; // Stocke le renderer dans la ref
          console.log("glRef (onCreated):", glRef);
        }}
        ref={canvasRef}
        camera={{ position: [-2, 0, 6], fov: 75, near: 0.01, far: 100 }}
        style={{ position: "fixed", top: "0", left: "0", zIndex: "0" }}
      >
        <Experience />
      </Canvas>
      <button
        onClick={() => {
          download();
        }}
        ref={toImgButton}
      >
        Télécharger
      </button>
      {/* <CanvasToImg infos={glRef} /> */}
    </>
  );
}
