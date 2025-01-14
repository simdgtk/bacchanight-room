// Dependencies
import { DragControls, OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

// World
import Room from "./World/Room";

// Utils
import { surfaces } from "./Utils/surface";
import { orbitControlsSetup } from "./Utils/orbitControlsSetup";

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

  // Controls References
  const orbitControls = useRef();

  const resetCamera = () => {
    if (orbitControls.current) {
      orbitControls.current.reset();
    }
    setIsCameraReset(false);
  };

  useEffect(() => {
    if (isCameraReset) {
      resetCamera();
    }
  }, [isCameraReset]);

  return (
    <>
      {/* Controls */}
      <OrbitControls
        ref={orbitControls}
        makeDefault
        // {...orbitControlsSetup}
        // Line Breaks
      />
      <group position={[0, -1.9, 0]}>
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
              whichSurface === "rightWall"
                ? localMatrix.elements[12]
                : whichSurface === "leftWall"
                ? Math.round(clampedX / cellSize) * cellSize + 0.25
                : whichSurface === "floor"
                ? Math.round(clampedX / cellSize) * cellSize - 0.1 + 0.25
                : undefined;

            localMatrix.elements[13] =
              whichSurface === "floor"
                ? localMatrix.elements[13]
                : Math.round(clampedY / cellSize) * cellSize - 0.25;

            localMatrix.elements[14] =
              whichSurface === "leftWall"
                ? localMatrix.elements[14]
                : Math.round(clampedZ / cellSize) * cellSize + 0.1 - 0.25;
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
        {/* <axesHelper args={[100]} /> */}
      </group>
    </>
  );
}
