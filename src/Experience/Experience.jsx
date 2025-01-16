// Dependencies
import { DragControls, OrbitControls, useGLTF } from "@react-three/drei";
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

  const updateSurfaceOnDrag = (e) => {
    if (e.object.parent.name.includes("floor")) {
      handleSetWhichSurface("floor");
    } else if (e.object.parent.name.includes("leftWall")) {
      handleSetWhichSurface("leftWall");
    } else if (e.object.parent.name.includes("rightWall")) {
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
      <ambientLight intensity={1} /> {/* Lumière générale */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.8} />
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
                dragLockGrid(localMatrix, gridSize, cellSize, whichSurface);
              }}
            >
              <group
                onPointerDown={(e) => {
                  updateSurfaceOnDrag(e);
                }}
              >
                <primitive
                  object={gltf.scene}
                  // name={model.name}
                  // position={[0, 0, 0]}
                />
              </group>
            </DragControls>
          );
        })}
      </group>
      {/* <axesHelper args={[100]} position={[0, 0, 0]} /> */}
    </>
  );
}
