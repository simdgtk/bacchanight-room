// Dependencies
import { OrbitControls } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      {/* Controls */}
      <OrbitControls
        makeDefault
        // minPolarAngle={Math.PI / 2 - 0.25}
        // maxPolarAngle={Math.PI / 2 + 0.1}
        // minAzimuthAngle={Math.PI * 1.5 + 0.3}
        // maxAzimuthAngle={Math.PI * 2 - 0.3}
        // rotateSpeed={0.3}
        // minDistance={3}
        // maxDistance={7}
        // enablePan={false}
      />

      {/* Walls  */}
      <mesh position={[-0.45, 0, 0]}>
        <boxGeometry args={[4.2, 2, 0.2]} />
        <meshBasicMaterial color={"pink"} />
      </mesh>
      <mesh position={[0.5, 0, 1]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[4.2, 2, 0.2]} />
        <meshBasicMaterial color={"pink"} />
      </mesh>

      {/* Floor */}
      <mesh position={[-0.45, -1.09, 0.95]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[2.1, 2.1, 0.2]} />
        <meshBasicMaterial color={"#beb8da"} />
      </mesh>

      {/* Grid Helper */}
      <gridHelper
        args={[10, 10, 0xffffff, "teal"]}
        position={[-0.65, -0.98, 1.15]}
        scale={[0.21, 1, 0.21]}
      />
    </>
  );
}
