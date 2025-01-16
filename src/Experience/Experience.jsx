// Dependencies
import { DragControls, OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";

// World
import Room from "./World/Room";
import Painting from "../components/Painting";

// Utils
import { surfaces } from "./Utils/surface";
import { orbitControlsSetup } from "./Utils/orbitControlsSetup";
import { dragLockGrid } from "./Utils/dragLockGrid";
import { updateSurfaceOnDrag } from "./Utils/updateSurfaceOnDrag";

export default function Experience({
  models,
  handleSetWhichSurface,
  whichSurface,
  setIsCameraReset,
  isCameraReset,
  leftWallColor,
  rightWallColor,
  floorColor,
  removeModel,
  replaceModel,
}) {
  const gridSize = 8;
  const gridDivision = 8;
  const cellSize = gridSize / gridDivision;

  // Controls References
  const orbitControls = useRef();

  const resetCamera = () => {
    if (orbitControls.current) {
      orbitControls.current.zoom0 = 60;
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
        {...orbitControlsSetup}
        // Line Breaks
      />

      {/* Ligths */}
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* World */}
      <group position={[0, -3.9, 0]}>
        <Room
          whichSurface={whichSurface}
          handleSetWhichSurface={handleSetWhichSurface}
          gridSize={gridSize}
          gridDivision={gridDivision}
          leftWallColor={leftWallColor}
          rightWallColor={rightWallColor}
          floorColor={floorColor}
        />

        {/* Objects */}
        {models.map((model, index) => {
          const gltf = useGLTF(model.modelPath);
          return (
            <DragControls
              key={index}
              axisLock={surfaces.axis[whichSurface]}
              onDrag={(localMatrix) => {
                dragLockGrid(
                  localMatrix,
                  gridSize,
                  cellSize,
                  whichSurface,
                  model.sizes
                );
              }}
            >
              {model.texture && (
                <group
                  onPointerDown={(e) => {
                    updateSurfaceOnDrag(e, handleSetWhichSurface);
                  }}
                  position={model.position}
                  rotation={model.rotation}
                >
                  <Painting texture={model.texture} name={model.name} />
                </group>
              )}
              {!model.texture && (
                <group
                  name={model.name}
                  onPointerDown={(e) => {
                    updateSurfaceOnDrag(e, handleSetWhichSurface);
                  }}
                >
                  <primitive
                    object={gltf.scene}
                    name={model.name}
                    position={model.position}
                    rotation={model.rotation}
                  />
                </group>
              )}
            </DragControls>
          );
        })}
      </group>
    </>
  );
}
