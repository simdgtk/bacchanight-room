// Dependencies
import { DragControls, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
  const draggableObjects = useRef();

  return (
    <>
      {/* Controls */}
      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 2 - 0.3}
        maxPolarAngle={Math.PI / 2 - 0.05}
        minAzimuthAngle={Math.PI * 1.5 + 0.3}
        maxAzimuthAngle={Math.PI * 2 - 0.3}
        rotateSpeed={0.15}
        enablePan={false}
        minZoom={90}
        maxZoom={175}
      />

      {/* Walls  */}
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[4.2, 2, 0.2]} />
        <meshBasicMaterial color={"pink"} />
      </mesh>
      <mesh position={[0.5, 0, 2]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[4.2, 2, 0.2]} />
        <meshBasicMaterial color={"pink"} />
      </mesh>

      {/* Floor */}
      <mesh position={[-1.5, -1.09, 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[4.2, 4.2, 0.2]} />
        <meshBasicMaterial color={"#beb8da"} />
      </mesh>

      {/* Objects */}
      <DragControls axisLock="y">
        <mesh position={[-2, -0.75, 2]} ref={draggableObjects}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color={"#000000"} />
        </mesh>
      </DragControls>

      {/* Grid Helper */}
      <gridHelper
        args={[4, 10, 0xffffff, "teal"]}
        position={[-1.6, -0.98, 2.1]}
        scale={[1, 1, 1]}
      />
    </>
  );
}
