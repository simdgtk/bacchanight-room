import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export default function Painting({
  orientation = "portrait",
  texture = "/assets/walls/paintings/por-picture3.jpg",
  name,
  position,
  rotation,
  whichSurface,
  large = false,
  long = false,
  ...props
}) {
  const glbFile =
    orientation == "portrait"
      ? "/assets/walls/paintings/tableau-portrait-moyen.glb"
      : large == true
      ? "/assets/walls/paintings/tableau-paysage-grand.glb"
      : "/assets/walls/paintings/tableau-paysage-moyen.glb";

  const { nodes, materials } = useGLTF(glbFile);
  const texturePlane = useTexture(texture);

  return (
    <>
      {!large && (
        <group {...props} dispose={null}>
          <group position={position} rotation={rotation} scale={[1, 1.0, 1.0]}>
            <mesh
              castShadow
              receiveShadow
              name={name}
              geometry={nodes.Cube004.geometry}
              material={materials.outline}
              rotation={[0, Math.PI, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              name={name}
              geometry={nodes.Cube004_1.geometry}
              material={materials.cadre}
              rotation={[0, Math.PI, Math.PI]}
            />
            {/* Plane avec texture */}
            <mesh
              castShadow
              receiveShadow
              name={name}
              geometry={nodes.Cube004_2.geometry}
              rotation={[0, Math.PI, Math.PI]}
            >
              <meshStandardMaterial map={texturePlane} />
            </mesh>
          </group>
        </group>
      )}
      {large && (
        <group {...props} dispose={null}>
          <group position={position} rotation={rotation} scale={[1, 1.0, 1.0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001.geometry}
              material={materials.outline}
              name={name}
              rotation={[0, Math.PI, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_1.geometry}
              material={materials.gold}
              name={name}
              rotation={[0, Math.PI, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_2.geometry}
              material={materials.cadre}
              name={name}
              rotation={[0, Math.PI, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_3.geometry}
              name={name}
              rotation={[0, Math.PI, Math.PI]}
            >
              <meshStandardMaterial map={texturePlane} />
            </mesh>
          </group>
        </group>
      )}
    </>
  );
}
