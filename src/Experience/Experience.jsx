// Dependencies
import { DragControls, OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function Experience({
  model,
  handleSetWhichSurface,
  whichSurface,
  setIsCameraReset,
  isCameraReset,
}) {
  const gridSize = whichSurface === "floor" ? 4 : 16 / 4.2;
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

  useEffect(() => {
    if (isCameraReset) resetCamera();
  }, [isCameraReset]);

  return (
    <>
      {/* Controls */}
      <OrbitControls
        ref={orbitControls}
        makeDefault
        // minPolarAngle={Math.PI / 2 - 0.3}
        // maxPolarAngle={Math.PI / 2 - 0.05}
        // minAzimuthAngle={Math.PI * 1.5 + 0.3}
        // maxAzimuthAngle={Math.PI * 2 - 0.3}
        // minZoom={50}
        // maxZoom={300}
        // rotateSpeed={0.15}
        // enablePan={false}
      />

      {/* Left Wall  */}
      <mesh
        position={[-0.1, 16 / 4.2 / 2 + 0.1, -4.2 / 2 + 0.1]}
        onClick={() => {
          if (whichSurface !== "leftWall") {
            handleSetWhichSurface("leftWall");
          } else if (whichSurface) {
            handleSetWhichSurface("");
          }
        }}
      >
        <boxGeometry args={[4, 16 / 4.2, 0.2]} />
        <meshBasicMaterial color={"blue"} />
      </mesh>

      <gridHelper
        ref={leftWallGrid}
        args={[gridSize, 8, 0x000, "white"]}
        position={[-0.1, 16 / 4.2 / 2 + 0.1, -4.2 / 2 + 0.21]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={whichSurface === "leftWall" ? true : false}
      />

      {/* Right Wall  */}
      <mesh
        position={[2, 16 / 4.2 / 2 + 0.1, 0]}
        rotation={[0, Math.PI / 2, 0]}
        onClick={() => {
          if (whichSurface !== "rightWall") {
            handleSetWhichSurface("rightWall");
          } else if (whichSurface) {
            handleSetWhichSurface("");
          }
        }}
      >
        <boxGeometry args={[4.2, 16 / 4.2, 0.2]} />
        <meshBasicMaterial color={"red"} />
      </mesh>

      <gridHelper
        ref={rightWallGrid}
        args={[gridSize, 8, 0x000, "white"]}
        position={[1.89, 16 / 4.2 / 2 + 0.1, 0.1]}
        rotation={[0, 0, Math.PI / 2]}
        visible={whichSurface === "rightWall" ? true : false}
      />

      {/* Floor */}
      <mesh
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={() => {
          if (whichSurface !== "floor") {
            handleSetWhichSurface("floor");
          } else if (whichSurface) {
            handleSetWhichSurface("");
          }
        }}
      >
        <boxGeometry args={[4.2, 4.2, 0.2]} />
        <meshBasicMaterial color={"#beb8da"} />
      </mesh>

      <gridHelper
        ref={floorGrid}
        args={[gridSize, 8, 0x000000, "white"]}
        position={[-0.1, 0.11, 0.1]}
        visible={whichSurface === "floor" ? true : false}
      />

      {/* Objects */}
      <DragControls
        axisLock="y"
        onDrag={(localMatrix) => {
          const clampedX = Math.max(
            -gridSize / 2 + 0.15,
            Math.min(gridSize / 2 - 0.351, localMatrix.elements[12])
          );
          const clampedZ = Math.max(
            -gridSize / 2 + 0.36,
            Math.min(gridSize / 2 - 0.15, localMatrix.elements[14])
          );

          localMatrix.elements[12] =
            Math.round(clampedX / cellSize) * cellSize - 0.1 + 0.25;
          localMatrix.elements[14] =
            Math.round(clampedZ / cellSize) * cellSize + 0.1 - 0.25;
          console.log(localMatrix.elements[12]);
          console.log(localMatrix.elements[14]);
        }}
      >
        {model && (
          <mesh position={[model.positionX, model.positionY, model.positionZ]}>
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

// useFrame(() => {
//   if (isDragging) {
//     const snappedPosition = snapToGrid(
//       mesh.current.position.toArray(),
//       gridSize
//     );
//     mesh.current.position.set(...snappedPosition);
//   }
// });
