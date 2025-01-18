import { useGLTF, useTexture } from "@react-three/drei";

export default function Painting({
  orientation = "paysage",
  texture = "/assets/walls/paintings/por-picture3.jpg",
  name,
  position,
  rotation,
  whichSurface,
  ...props
}) {
  const glbFile =
    orientation == "portrait"
      ? "/assets/walls/paintings/portrait-cadre.glb"
      : "/assets/walls/paintings/paysage-cadre.glb";
  const { nodes, materials } = useGLTF(glbFile);
  const texturePlane = useTexture(texture);

  position[1] += orientation === "portrait" ? 0 : 1;
  rotation[1] = whichSurface === "rightWall" ? Math.PI / 2 : Math.PI;
  // rotation[1] = orientation === "portrait" ? -Math.PI : Math.PI;
  rotation[2] = Math.PI;

  return (
    <group {...props} dispose={null}>
      <group
        position={position}
        rotation={rotation}
        // Line Breaks
      >
        {/* Cadre */}
        <mesh
          castShadow
          receiveShadow
          name={name}
          geometry={
            orientation === "portrait"
              ? nodes.Cube001_1.geometry
              : nodes.Cube001.geometry
          }
          material={
            orientation === "portrait"
              ? materials.Cadre
              : materials["Cadre.001"]
          }
        />
        {/* Plane avec texture */}
        <mesh
          castShadow
          receiveShadow
          name={name}
          geometry={
            orientation === "portrait"
              ? nodes.Cube001_2.geometry
              : nodes.Cube001_1.geometry
          }
        >
          <meshStandardMaterial map={texturePlane} />
        </mesh>
      </group>
    </group>
  );
}
