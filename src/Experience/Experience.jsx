// Dependencies
import {
  DragControls,
  OrbitControls,
  useGLTF,
  // useHelper,
} from "@react-three/drei";
import { useRef, useEffect } from "react";
// import { DirectionalLightHelper } from "three";

// World
import Room from "./World/Room";
import Painting from "../components/Painting";

// Utils
import { surfaces } from "./Utils/surface";
import { orbitControlsSetup } from "./Utils/orbitControlsSetup";
import { dragLockGrid } from "./Utils/dragLockGrid";
import { updateSurfaceOnDrag } from "./Utils/updateSurfaceOnDrag";
import state from "./Utils/state";

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
  hide = false,
}) {
  const directionalLight = useRef();

  // useHelper(directionalLight, DirectionalLightHelper, 0.5, "red");

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

  return (
    <>
      {/* Controls */}
      <OrbitControls
        ref={orbitControls}
        makeDefault
        {...orbitControlsSetup}
        // Line Breaks
      />

      <directionalLight
        ref={directionalLight}
        position={[-4, 1, 4]}
        intensity={3}
        scale={5}
        castShadow={false}
      />
      <ambientLight intensity={3} />

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
        {models.map((model) => {
          const gltf = useGLTF(model.modelPath);
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              child.geometry.computeVertexNormals(true);
            }
          });
          let initialMatrix;
          return (
            <DragControls
              key={model.id}
              axisLock={surfaces.axis[whichSurface]}
              onDragStart={(origin) => {
                initialMatrix = origin;
                if (state.draggingModelIndex === null) {
                  state.draggingModelIndex = model.id;
                }
              }}
              onDrag={(localMatrix) => {
                handleSetWhichSurface(model.name);
                if (state.draggingModelIndex != model.id) {
                  localMatrix.elements[12] = initialMatrix.x;
                  localMatrix.elements[13] = initialMatrix.y;
                  localMatrix.elements[14] = initialMatrix.z;
                  return;
                }
                dragLockGrid(
                  localMatrix,
                  gridSize,
                  cellSize,
                  whichSurface,
                  model.sizes
                );

                if (model.id >= 11 && localMatrix.elements[12] >= 1) {
                  localMatrix.elements[0] = 0;
                  localMatrix.elements[2] = 1;
                  localMatrix.elements[8] = -1;
                  localMatrix.elements[10] = 0;
                } else if (model.id >= 11) {
                  localMatrix.elements[0] = 1;
                  localMatrix.elements[2] = 0;
                  localMatrix.elements[8] = 0;
                  localMatrix.elements[10] = 1;
                }
              }}
              onDragEnd={() => {
                state.draggingModelIndex = null;
              }}
            >
              {model.texture && (
                <group
                  onClick={(e) => {
                    updateSurfaceOnDrag(e, handleSetWhichSurface);
                  }}
                  onDoubleClick={() => {
                    removeModel(model.id);
                  }}
                >
                  <Painting
                    texture={model.texture}
                    orientation={model.orientation}
                    name={model.name}
                    position={model.position}
                    rotation={model.rotation}
                    large={model.large}
                    long={model.long}
                    whichSurface={whichSurface}
                  />
                </group>
              )}
              {!model.texture && (
                <group
                  name={model.name}
                  onPointerDown={(e) => {
                    updateSurfaceOnDrag(e, handleSetWhichSurface);
                  }}
                  onDoubleClick={() => {
                    removeModel(model.id);
                  }}
                >
                  <primitive
                    object={gltf.scene}
                    name={model.name}
                    position={model.position}
                    rotation={model.rotation}
                    castShadow
                  />
                  {/* <Html>
                    <button
                      className="button"
                      style={{
                        position: "absolute",
                        bottom: "32px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                      onClick={() => {
                        removeModel(model.id);
                      }}
                    >
                      test
                    </button>
                  </Html> */}
                </group>
              )}
            </DragControls>
          );
        })}
      </group>
    </>
  );
}

useGLTF.preload("assets/walls/paintings/portrait-cadre.glb");
useGLTF.preload("assets/walls/paintings/paysage-cadre.glb");
