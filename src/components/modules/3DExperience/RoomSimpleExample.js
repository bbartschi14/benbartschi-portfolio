import { useGLTF, useTexture, Canvas } from "@react-three/drei";

const Room = (props) => {
  const { nodes } = useGLTF("/room.glb");
  const bakedTexture = useTexture("/baked.jpg");

  // "baked" is the name of the mesh object in blender.
  return (
    <Canvas>
      <mesh geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
    </Canvas>
  );
};

useGLTF.preload("/room.glb");

export default Room;
