import React, { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export default function Painting({
  orientation = "paysage",
  texture = "/src/assets/walls/paintings/por-picture3.jpg",
  name,
  ...props
}) {
  const glbFile =
    orientation == "portrait"
      ? "/src/assets/walls/paintings/portrait-cadre.glb"
      : "/src/assets/walls/paintings/paysage-cadre.glb";
  const { nodes, materials } = useGLTF(glbFile);
  const texturePlane = useTexture(texture);

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI, 0, 0]}>
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
