import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PresentationControls, useProgress, Html, Sky } from "@react-three/drei";
import { useControls, Leva } from "leva";
import RoomModels from "../modules/3DExperience/RoomModels";
import * as THREE from "three";
import Clouds from "../modules/3DExperience/Clouds";

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

function CustomLoader() {
  return (
    <Html position={[0, startingCameraPos[1], startingCameraPos[2]]}>
      <p style={{ color: "black", width: "200px" }}>Preparing scene</p>
    </Html>
  );
}

const Home = (props) => {
  const orbitMaxAngle = Math.PI / 32;
  const halfwayAngle = Math.PI / 2;

  const lightProps = useControls("Light", {
    position: [-0.4, 0.8, 0.2],
  });

  // const sunProps = useControls("Sun", {
  //   distance: 450000,
  //   sunPosition: [0, 1, 0],
  //   inclination: { value: 0.0, min: 0.0, max: 1.0, step: 0.001 },
  //   azimuth: { value: 0.25, min: 0.0, max: 1.0, step: 0.001 },
  // });

  const sunProps = useControls("Sun", {
    distance: 10,
    inclination: { value: 0.8, min: 0.0, max: 1.0, step: 0.001 },
    azimuth: { value: 0.9, min: 0.0, max: 1.0, step: 0.001 },
    mieCoefficient: { value: 0.005, min: 0.0, max: 1.0, step: 0.001 },
    mieDirectionalG: { value: 0.7, min: 0.0, max: 1.0, step: 0.001 },
    rayleigh: 0,
    turbidity: 10,
  });

  return (
    <>
      <Leva collapsed={true} />
      <Canvas
        dpr={[1, 2]}
        camera={{ position: startingCameraPos, fov: 15, rotation: [0, Math.PI / 2, 0] }}
        shadows
      >
        {/* <OrbitControls /> */}

        <Suspense fallback={<CustomLoader />}>
          <ambientLight intensity={0.6} />
          <directionalLight
            castShadow
            intensity={0.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={4}
            shadow-camera-left={-1}
            shadow-camera-right={1}
            shadow-camera-top={1}
            shadow-camera-bottom={-1}
            {...lightProps}
          />
          <Sky {...sunProps} />

          <color attach="background" args={["#aaaaaa"]} />
          <RoomModels />
          <Clouds
            count={100}
            minPosition={[-60, 10, 30]}
            maxPosition={[30, -5, -120]}
            minScale={[10, 10, 10]}
            maxScale={[20, 20, 20]}
          />
        </Suspense>
        <Rig />
      </Canvas>
    </>
  );
};

export default Home;
