import { useTexture } from "@react-three/drei";
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
  const surfaceWeight = 0.2;
  const gradientAlphaMaterial = useTexture(
    "/assets/walls/textures/wallGradient.png"
  );

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
          // alphaMap={gradientAlphaMaterial}
          roughnessMap={gradientAlphaMaterial}
          roughness={0.4}
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

        <meshStandardMaterial color={rightWallColor} />
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

        <meshStandardMaterial color={floorColor} />
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
