// Dependencies
import { DragControls, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

export default function Experience({ model }) {
  const floorGrid = useRef();

  return (
    <>
      {/* Controls */}
      <OrbitControls
        makeDefault
        // minPolarAngle={Math.PI / 2 - 0.3}
        // maxPolarAngle={Math.PI / 2 - 0.05}
        // minAzimuthAngle={Math.PI * 1.5 + 0.3}
        // maxAzimuthAngle={Math.PI * 2 - 0.3}
        // minZoom={90}
        // maxZoom={175}
        // rotateSpeed={0.15}
        // enablePan={false}
      />

      {/* Walls  */}
      <mesh position={[-1.5, 0.91, 0]}>
        <boxGeometry args={[4.2, 16 / 4.2, 0.2]} />
        <meshBasicMaterial color={"brown"} />
      </mesh>
      <mesh position={[0.5, 0.911, 2]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[4.2, 16 / 4.2, 0.2]} />
        <meshBasicMaterial color={"pink"} />
      </mesh>

      {/* Floor */}
      <mesh position={[-1.5, -1.09, 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[4.2, 4.2, 0.2]} />
        <meshBasicMaterial color={"#beb8da"} />
      </mesh>

      <gridHelper
        ref={floorGrid}
        args={[4, 8, 0xffffff, "teal"]}
        position={[-1.6, -0.98, 2.1]}
        scale={[1, 1, 1]}
        visible={false}
      />

      {/* Objects */}
      <DragControls
        axisLock="y"
        onDrag={() => {
          floorGrid.current.visible = true;
        }}
        onDragEnd={() => {
          floorGrid.current.visible = false;
        }}
      >
        {model && (
          <mesh position={[model.positionX, model.positionY, model.positionZ]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshBasicMaterial color={model.color} />
          </mesh>
        )}
      </DragControls>
    </>
  );
}

// const gridSize = 4; // Taille de la grille
// const cellSize = gridSize / 10; // Taille d'une case de la grille (10 divisions)
// const [cubePosition, setCubePosition] = useState([-1.6, -0.75, 2.1]);

// const handleDrag = (event) => {
//   // Position actuelle du cube
//   const { x, y, z } = event.object.position;

//   // Limiter les mouvements du cube à la grille
//   const clampedX = Math.max(-gridSize / 2, Math.min(gridSize / 2, x));
//   const clampedZ = Math.max(-gridSize / 2, Math.min(gridSize / 2, z));

//   // Snapper les positions aux cases de la grille
//   const snappedX = Math.round(clampedX / cellSize) * cellSize;
//   const snappedZ = Math.round(clampedZ / cellSize) * cellSize;

//   // Appliquer les nouvelles positions
//   event.object.position.set(snappedX, y, snappedZ);

//   // Mettre à jour l'état (si nécessaire pour d'autres usages)
//   setCubePosition([snappedX, y, snappedZ]);
// };

// const mesh = useRef();
// const [isDragging, setIsDragging] = useState(false);

// const snapToGrid = (position, gridSize) => {
//   return position.map((coord) => Math.round(coord / gridSize) * gridSize);
// };

// useFrame(() => {
//   if (isDragging) {
//     const snappedPosition = snapToGrid(
//       mesh.current.position.toArray(),
//       gridSize
//     );
//     mesh.current.position.set(...snappedPosition);
//   }
// });
