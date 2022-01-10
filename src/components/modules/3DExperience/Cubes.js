import { useGLTF } from "@react-three/drei";
import { useFrame, extend, useLoader } from "@react-three/fiber";
import { useRef, useMemo, useLayoutEffect } from "react";
import { useControls } from "leva";

const Cubes = (props) => {
  const { nodes } = useGLTF("/bakedCubes.glb");
  console.log(nodes);

  return (
    <group {...props} dispose={null} position={[0, 0, 0]}>
      <mesh geometry={nodes.cubes.geometry} position={nodes.cubes.position} receiveShadow>
        <meshBasicMaterial map={props.bakedTexture} map-flipY={false} />
      </mesh>
    </group>
  );
};

useGLTF.preload("/bakedCubes.glb");

export default Cubes;
