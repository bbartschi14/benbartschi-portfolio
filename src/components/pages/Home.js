import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import { useControls } from "leva";
import RoomModels from "../modules/3DExperience/RoomModels";
import * as THREE from "three";

// softShadows({
//   frustum: 3.75,
//   size: 0.005,
//   near: 9.5,
//   samples: 17,
//   rings: 11, // Rings (default: 11) must be a int
// });

const startingCameraPos = [4.5, 0.3, 0.15];
function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() => {
    camera.position.lerp(
      vec.set(
        startingCameraPos[0],
        startingCameraPos[1] + mouse.y * 0.05,
        startingCameraPos[2] + mouse.x * -0.05
      ),
      0.02
    );
  });
}

const Home = (props) => {
  const orbitMaxAngle = Math.PI / 32;
  const halfwayAngle = Math.PI / 2;

  const lightProps = useControls("Light", {
    position: [0, 1, 0],
  });

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: startingCameraPos, fov: 15, rotation: [0, Math.PI / 2, 0] }}
      shadows
    >
      {/* <OrbitControls /> */}
      <Suspense fallback={null}>
        <directionalLight
          castShadow
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={4}
          shadow-camera-left={-1}
          shadow-camera-right={1}
          shadow-camera-top={1}
          shadow-camera-bottom={-1}
          {...lightProps}
        />
        <ambientLight intensity={0.25} />
        <color attach="background" args={["#aaaaaa"]} />
        <RoomModels />
      </Suspense>
      <Rig />
    </Canvas>
  );
};

export default Home;
