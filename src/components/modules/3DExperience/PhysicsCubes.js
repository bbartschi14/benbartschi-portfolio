import { useGLTF } from "@react-three/drei";
import { useFrame, extend, useLoader } from "@react-three/fiber";
import { useRef, useMemo, useLayoutEffect } from "react";
import { useControls } from "leva";

const PhysicsCubes = (props) => {
  const { nodes } = useGLTF("/cube.glb");
  console.log(nodes);

  return (
    <group {...props} dispose={null} position={[0, 0, 0]}>
      <mesh geometry={nodes.Cube006.geometry} position={nodes.Cube006.position} castShadow>
        <meshStandardMaterial />
      </mesh>
    </group>
  );
};

useGLTF.preload("/cube.glb");

export default PhysicsCubes;
