import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Sky, Stats } from "@react-three/drei";
import { useControls, Leva } from "leva";
import RoomModels from "../modules/3DExperience/RoomModels";
import * as THREE from "three";
import Clouds from "../modules/3DExperience/Clouds";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useLocation, Link } from "react-router-dom";
import "./Home.css";
import useWindowDimensions from "../modules/WindowHelpers";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import LoadingScreen from "../modules/LoadingScreen";

const startingCameraPos = [4.3, 0.3, 0.1];
const Rig = (props) => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  const { gl, viewport, size } = useThree();

  return useFrame(() => {
    let zPosFactor =
      viewport.aspect > 1.9
        ? 0.04
        : 0.1856 * viewport.aspect * viewport.aspect - 1.049 * viewport.aspect + 1.364; // 1.74 = .1, 1 = .5, .65 = .75 quadratic fit
    camera.position.lerp(
      vec.set(
        startingCameraPos[0],
        startingCameraPos[1] + mouse.y * 0.05,
        startingCameraPos[2] + mouse.x * -1 * zPosFactor
      ),
      0.02
    );
  });
};

const Home = (props) => {
  const orbitMaxAngle = Math.PI / 32;
  const halfwayAngle = Math.PI / 2;

  const lightProps = useControls("Light", {
    position: [-0.4, 0.8, 0.2],
  });

  const { hash } = useLocation();

  if (hash == "#debug") {
    console.log("Entering debug mode");
  }

  const sunProps = useControls("Sun", {
    distance: 10,
    inclination: { value: 0.8, min: 0.0, max: 1.0, step: 0.001 },
    azimuth: { value: 0.9, min: 0.0, max: 1.0, step: 0.001 },
    mieCoefficient: { value: 0.005, min: 0.0, max: 1.0, step: 0.001 },
    mieDirectionalG: { value: 0.7, min: 0.0, max: 1.0, step: 0.001 },
    rayleigh: 0,
    turbidity: 10,
  });

  const { height, width } = useWindowDimensions();

  return (
    <div className="Home-container">
      <Leva collapsed={true} hidden />
      {/* <LoadingScreen /> */}
      <Suspense fallback={<LoadingScreen />}>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: startingCameraPos, fov: 15, rotation: [0, Math.PI / 2, 0] }}
          shadows
        >
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
          <EffectComposer>
            <Vignette
              offset={0.5}
              darkness={0.35}
              eskil={false}
              blendFunction={BlendFunction.NORMAL}
            />
          </EffectComposer>
          {hash == "#debug" ? <Stats /> : null}
          <Rig />
        </Canvas>
        <div className="Home-enterSiteWrapper">
          <div className="Home-enterSiteHeader">Ben Bartschi</div>
          <div className="Home-enterSiteSubtitle">
            {width >= 768 ? "Computer Science @ MIT" : "CS @ MIT"}
          </div>
          <div className="u-flex">
            <Link to="/portfolio" className="Home-enterSiteContainer u-noselect">
              Portfolio
            </Link>
            <Link to="/reel" className="Home-enterSiteContainer u-noselect Home-tertiaryHover">
              Reel
            </Link>
          </div>
        </div>
        <div className="Home-info">
          <FontAwesomeIcon icon={faInfo} />
          <div className="Home-infoText">
            Scene modeled in Blender, site created with React <FontAwesomeIcon icon={faReact} />.
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
