import React, { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export default function Painting({
  orientation = "paysage",
  texture = "/assets/walls/paintings/por-picture3.jpg",
  name,
  ...props
}) {
  const glbFile =
    orientation == "portrait"
      ? "/assets/walls/paintings/portrait-cadre.glb"
      : "/assets/walls/paintings/paysage-cadre.glb";
  const { nodes, materials } = useGLTF(glbFile);
  const texturePlane = useTexture(texture);

  const position = orientation === "portrait" ? [0, 0, 0] : [0, 1, 0];
  const rotationModel =
    orientation === "portrait" ? [Math.PI, 0, 0] : [Math.PI, 0, 0];

  return (
    <group {...props} dispose={null}>
      <group
        position={position}
        rotation={rotationModel}
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
