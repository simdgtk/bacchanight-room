import { useRef } from "react";

export default function Room({
  whichSurface,
  handleSetWhichSurface,
  gridSize,
}) {
  // Grid References
  const leftWallGrid = useRef();
  const rightWallGrid = useRef();
  const floorGrid = useRef();

  return (
    <>
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
    </>
  );
}
