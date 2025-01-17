// Dependencies
import {
  DragControls,
  OrbitControls,
  useGLTF,
  useHelper,
} from "@react-three/drei";
import { useRef, useEffect } from "react";
import { DirectionalLightHelper } from "three";

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
  hide = false,
}) {
  const gridSize = 8;
  const gridDivision = 8;
  const cellSize = gridSize / gridDivision;

  // Controls References
  const orbitControls = useRef();
  const dirLight = useRef();

  useHelper(dirLight, DirectionalLightHelper, 3, "red");

  const resetCamera = () => {
    if (orbitControls.current) {
      orbitControls.current.zoom0 = 40;
      orbitControls.current.getPolarAngle = Math.PI / 2 - 0.65;
      console.log(orbitControls.current);
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
      <ambientLight intensity={3} />
      <directionalLight
        ref={dirLight}
        position={[-10, 2, 10]}
        scale={[1.5, 1.5, 1.5]}
        intensity={1.5}
        castShadow
      />

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
          hide={hide}
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
                  <Painting
                    texture={model.texture}
                    orientation={model.orientation}
                    name={model.name}
                  />
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
                    castShadow
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

useGLTF.preload("/src/assets/walls/paintings/picture1.glb");
useGLTF.preload("/src/assets/walls/paintings/picture2.glb");
