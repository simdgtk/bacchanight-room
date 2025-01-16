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
  return (
    <>
      <mesh
        position={[
          surfaceWeight / 2,
          gridSize / 2 + 0.001,
          -gridSize / 2 - surfaceWeight / 2,
        ]}
        name="mur gauche"
        onPointerUp={() => {
          if (whichSurface !== "leftWall") {
            handleSetWhichSurface("leftWall");
          } else {
            handleSetWhichSurface("");
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
        <meshBasicMaterial color={leftWallColor} />
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
        onPointerUp={() => {
          if (whichSurface !== "rightWall") {
            handleSetWhichSurface("rightWall");
          } else if (whichSurface) {
            handleSetWhichSurface("");
          }
        }}
      >
        <boxGeometry
          args={[gridSize, gridSize + surfaceWeight / 2, surfaceWeight]}
        />

        <meshBasicMaterial color={rightWallColor} />
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
        onPointerUp={() => {
          if (whichSurface !== "floor") {
            handleSetWhichSurface("floor");
          } else if (whichSurface) {
            handleSetWhichSurface("");
          }
        }}
      >
        <boxGeometry
          args={[
            gridSize + surfaceWeight + 0.01,
            gridSize + surfaceWeight + 0.01,
            surfaceWeight,
          ]}
        />

        <meshBasicMaterial color={floorColor} />
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
