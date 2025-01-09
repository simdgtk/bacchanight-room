// Custom import
import { Canvas } from "@react-three/fiber";
import Experience from "../Experience/Experience.jsx";

export default function Index() {
  return (
    <>
      <Canvas
        camera={{ position: [-2, 0, 6], fov: 75, near: 0.01, far: 100 }}
        style={{ position: "fixed", top: "0", left: "0", zIndex: "0" }}
      >
        <Experience></Experience>
      </Canvas>
    </>
  );
}
