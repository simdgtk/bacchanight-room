import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Painting({
  orientation = "portrait",
  texture = "/src/assets/walls/paintings/por-picture3.jpg",
  ...props
}) {
  const glbFile =
    orientation === "portrait"
      ? "/src/assets/picture1.glb"
      : "/src/assets/picture2.glb";
  const { nodes, materials } = useGLTF(glbFile);
  const texturePlane = useTexture(texture);

  return (
    <group {...props} dispose={null}>
      <group position={[0, 1, 0]} rotation={[Math.PI, 0, 0]}>
        {/* Cadre */}
        <mesh
          castShadow
          receiveShadow
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
        {/* Plan avec texture */}
        <mesh
          castShadow
          receiveShadow
          geometry={
            orientation === "portrait"
              ? nodes.Cube001_2.geometry
              : nodes.Cube001_1.geometry
          }
        >
          <meshStandardMaterial map={texturePlane} side={DoubleSide} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/src/assets/picture1.glb");
useGLTF.preload("/src/assets/picture2.glb");
