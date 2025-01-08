// Custom import
import { Canvas } from "@react-three/fiber";
import Experience from "../Experience/Experience.jsx";

export default function Index() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 1.5], fov: 75, near: 0.001, far: 100 }}
        style={{ position: "fixed", top: "0", left: "0", zIndex: "0" }}
      >
        <Experience></Experience>
      </Canvas>
    </>
  );
}
