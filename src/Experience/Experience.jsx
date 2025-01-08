// Dependencies
import { OrbitControls } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      {/* Controls */}
      <OrbitControls makeDefault />

      <mesh>
        <boxGeometry args={[1, 1, 1.5]} />
        <meshBasicMaterial />
      </mesh>
    </>
  );
}
