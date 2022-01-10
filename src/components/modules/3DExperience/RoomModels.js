import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import Clock from "./Clock";
import Robot from "./Robot";
import Cubes from "./Cubes";

const RoomModels = (props) => {
  const { nodes } = useGLTF("/room_merged_updatedUVs.glb");
  const bakedTexture = useTexture("/baked_neutral_darker.jpg");
  console.log(nodes);
  //console.log(bakedTexture);
  return (
    <>
      <mesh geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>

      {/* Create a shadow catcher of the same mesh. TODO: Profile performance, as it's creating a second copy of everything */}
      <mesh geometry={nodes.baked.geometry} receiveShadow>
        <shadowMaterial attach="material" opacity={0.05} />
      </mesh>

      <Clock bakedTexture={bakedTexture} sceneRoot={nodes.baked.position} />
      <Robot bakedTexture={bakedTexture} sceneRoot={nodes.baked.position} />
      <Cubes bakedTexture={bakedTexture} />
    </>
  );
};

useGLTF.preload("/room_merged_updatedUVs.glb");
export default RoomModels;
