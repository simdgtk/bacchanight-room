// Custom import
import { Canvas } from "@react-three/fiber";
import Experience from "../Experience/Experience.jsx";

export default function Index() {
  return (
    <>
      <Canvas
        camera={{
          position: [-4, 0, 5.225],
          near: 0.01,
          far: 100,
          zoom: 130,
        }}
        style={{ position: "fixed", top: "0", left: "0", zIndex: "0" }}
        orthographic={true}
      >
        <Experience></Experience>
      </Canvas>
    </>
  );
}
