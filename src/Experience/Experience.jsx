// Dependencies
import { DragControls, OrbitControls } from "@react-three/drei";
import { useRef, useEffect } from "react";

// World
import Room from "./World/Room";

// Utils
import { surfaces } from "./Utils/surface";
import { orbitControlsSetup } from "./Utils/orbitControlsSetup";
import { dragLockGrid } from "./Utils/dragLockGrid";

export default function Experience({
  models,
  handleSetWhichSurface,
  whichSurface,
  setIsCameraReset,
  isCameraReset,
  leftWallColor,
  rightWallColor,
  floorColor,
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
      orbitControls.current.zoom0 = 137.5;
      orbitControls.current.reset();
    }
    setIsCameraReset(false);
  };

  useEffect(() => {
    if (isCameraReset) {
      resetCamera();
    }
  }, [isCameraReset]);

  const updateSurfaceOnDrag = (e) => {
    if (e.object.name.includes("floor")) {
      handleSetWhichSurface("floor");
    } else if (e.object.name.includes("leftWall")) {
      handleSetWhichSurface("leftWall");
    } else if (e.object.name.includes("rightWall")) {
      handleSetWhichSurface("rightWall");
    }
  };

  return (
    <>
      {/* Controls */}
      <OrbitControls
        ref={orbitControls}
        makeDefault
        {...orbitControlsSetup}
        // Line Breaks
      />
      <group position={[0, -1.9, 0]}>
        <Room
          whichSurface={whichSurface}
          handleSetWhichSurface={handleSetWhichSurface}
          gridSize={gridSize}
          leftWallColor={leftWallColor}
          rightWallColor={rightWallColor}
          floorColor={floorColor}
        />

        {/* Objects */}
        {models.map((model, index) => (
          <DragControls
            key={index}
            axisLock={surfaces.axis[whichSurface]}
            onDrag={(localMatrix) => {
              dragLockGrid(localMatrix, gridSize, cellSize, whichSurface);
            }}
          >
            <mesh
              position={[model.positionX, model.positionY, model.positionZ]}
              name={model.name}
              onPointerDown={updateSurfaceOnDrag}
            >
              <boxGeometry args={[0.5, 0.5, 0.5]} />
              <meshBasicMaterial color={model.color} />
            </mesh>
          </DragControls>
        ))}
      </group>
    </>
  );
}
