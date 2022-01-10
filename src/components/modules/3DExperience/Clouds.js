import { Billboard, useTexture, Plane } from "@react-three/drei";
import { useRef, useMemo, useLayoutEffect } from "react";
import { useControls } from "leva";
const CLOUD_URL =
  "https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png";

const SingleCloud = (props) => {
  const texture = useTexture(CLOUD_URL);

  return (
    <Billboard>
      <Plane args={[1, 1]} scale={[10, 10, 1]}>
        <meshBasicMaterial
          attach="material"
          map={texture}
          color="white"
          transparent={true}
          opacity={0.5}
        />
      </Plane>
    </Billboard>
  );
};

const Clouds = (props) => {
  return (
    <group {...props} dispose={null} position={[-200, 20, 0]}>
      <SingleCloud />
    </group>
  );
};

export default Clouds;
