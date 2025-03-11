import { useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Room({
  whichSurface,
  handleSetWhichSurface,
  gridSize,
  gridDivision,
  leftWallColor,
  rightWallColor,
  floorColor,
  hide = false,
}) {
  const floor = useRef();
  const surfaceWeight = 0.2;

  const wallsRougnessMap = useTexture(
    "/assets/walls/textures/wallGradient.png"
  );

  const floorRougnessMap = useTexture(
    "/assets/walls/textures/floorGradient.png"
  );

  useEffect(() => {
    if (!floor.current) return;

    // Récupérer la géométrie
    const geometry = floor.current.geometry;

    // Forcer la mise à jour des UVs
    geometry.computeBoundingBox();
    geometry.attributes.uv.needsUpdate = true;

    // Modifier les UVs pour mieux correspondre
    const uvAttribute = geometry.getAttribute("uv");
    const uvs = new Float32Array(uvAttribute.count * 2);

    for (let i = 0; i < uvAttribute.count; i++) {
      uvs[i * 2] = uvAttribute.getX(i) * 2; // Ajuste l'échelle
      uvs[i * 2 + 1] = uvAttribute.getY(i) * 2;
    }

    geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  }, []);

  return (
    <>
      <mesh
        position={[
          surfaceWeight / 2,
          gridSize / 2 + 0.001,
          -gridSize / 2 - surfaceWeight / 2,
        ]}
        receiveShadow
        name="mur gauche"
        onPointerDown={() => {
          if (whichSurface !== "leftWall") {
            handleSetWhichSurface("leftWall");
          }
        }}
      >
        <boxGeometry
          args={[
            gridSize + surfaceWeight,
            gridSize + surfaceWeight / 2,
            surfaceWeight,
          ]}
        />
        <meshStandardMaterial
          color={leftWallColor}
          roughnessMap={wallsRougnessMap}
          metalness={0.75}
          roughness={1}
        />
      </mesh>

      {!hide && (
        <gridHelper
          args={[gridSize, gridDivision, 0x000, "white"]}
          position={[0, gridSize / 2, -gridSize / 2]}
          rotation={[Math.PI / 2, 0, 0]}
          visible={whichSurface === "leftWall" ? true : false}
        />
      )}

      {/* Right Wall  */}
      <mesh
        position={[gridSize / 2 + surfaceWeight / 2, gridSize / 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        onPointerDown={() => {
          if (whichSurface !== "rightWall") {
            handleSetWhichSurface("rightWall");
          }
        }}
        receiveShadow
      >
        <boxGeometry
          args={[gridSize, gridSize + surfaceWeight / 2, surfaceWeight]}
        />

        <meshStandardMaterial
          color={rightWallColor}
          roughnessMap={wallsRougnessMap}
          metalness={0.75}
          roughness={1}
        />
      </mesh>
      {!hide && (
        <gridHelper
          args={[gridSize, gridDivision, 0x000, "white"]}
          position={[gridSize / 2, gridSize / 2, 0]}
          rotation={[0, 0, Math.PI / 2]}
          visible={whichSurface === "rightWall" ? true : false}
        />
      )}

      {/* Floor */}
      <mesh
        ref={floor}
        position={[surfaceWeight / 2, -surfaceWeight / 2, -surfaceWeight / 2]}
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerDown={() => {
          if (whichSurface !== "floor") {
            handleSetWhichSurface("floor");
          }
        }}
        castShadow
      >
        <boxGeometry
          args={[
            gridSize + surfaceWeight + 0.01,
            gridSize + surfaceWeight + 0.01,
            surfaceWeight,
          ]}
        />

        <meshStandardMaterial
          color={floorColor}
          roughnessMap={floorRougnessMap}
          metalness={0.5}
          roughness={1}
        />
      </mesh>

      {!hide && (
        <gridHelper
          args={[gridSize, gridDivision, 0x000000, "white"]}
          position={[0, 0, 0]}
          visible={whichSurface === "floor" ? true : false}
        />
      )}
    </>
  );
}
