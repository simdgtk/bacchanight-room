// Dependencies
import { DragControls, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

// World
import Room from "./World/Room";

// Utils
import { surfaces } from "./Utils/surface";
import { orbitControlsSetutp } from "./Utils/orbitControlsSetup";

export default function Experience({
  model,
  handleSetWhichSurface,
  whichSurface,
  setIsCameraReset,
  isCameraReset,
}) {
  const gridSize =
    whichSurface === "floor"
      ? 4
      : whichSurface === "leftWall"
      ? 16 / 4.2
      : whichSurface === "rightWall"
      ? 16 / 4.2
      : undefined;
  const cellSize = gridSize / 8;

  // Grid References
  const leftWallGrid = useRef();
  const rightWallGrid = useRef();
  const floorGrid = useRef();

  // Controls References
  const orbitControls = useRef();

  const resetCamera = () => {
    orbitControls.current.reset();
    setIsCameraReset(false);
  };

  return (
    <>
      {/* Controls */}
      <OrbitControls
        ref={orbitControls}
        makeDefault
        // {...orbitControlsSetutp}
        // Line Breaks
      />

      <Room
        whichSurface={whichSurface}
        handleSetWhichSurface={handleSetWhichSurface}
        gridSize={gridSize}
      />

      {/* Objects */}
      <DragControls
        axisLock={surfaces[whichSurface]}
        onDrag={(localMatrix) => {
          const clampedX = Math.max(
            -gridSize / 2 + 0.15,
            Math.min(gridSize / 2 - 0.351, localMatrix.elements[12])
          );
          const clampedY = Math.max(
            -gridSize / 2 + 0.36,
            Math.min(gridSize / 2 - 0.15, localMatrix.elements[13])
          );
          const clampedZ = Math.max(
            -gridSize / 2 + 0.36,
            Math.min(gridSize / 2 - 0.15, localMatrix.elements[14])
          );

          localMatrix.elements[12] =
            whichSurface !== "rightWall"
              ? Math.round(clampedX / cellSize) * cellSize - 0.1 + 0.25
              : localMatrix.elements[12];
          localMatrix.elements[13] =
            whichSurface !== "floor"
              ? Math.round(clampedY / cellSize) * cellSize + 0.1 - 0.25
              : localMatrix.elements[13];
          localMatrix.elements[14] =
            whichSurface !== "leftWall"
              ? Math.round(clampedZ / cellSize) * cellSize + 0.1 - 0.25
              : localMatrix.elements[14];
        }}
      >
        {model && (
          <mesh
            position={[model.positionX, model.positionY, model.positionZ]}
            name={model.name}
            onPointerDown={(e) => {
              if (e.object.name.includes("floor")) {
                handleSetWhichSurface("floor");
              } else if (e.object.name.includes("leftWall")) {
                handleSetWhichSurface("leftWall");
              } else if (e.object.name.includes("rightWall")) {
                handleSetWhichSurface("rightWall");
              }
            }}
          >
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshBasicMaterial color={model.color} />
          </mesh>
        )}
      </DragControls>
      <axesHelper args={[100]} />
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
