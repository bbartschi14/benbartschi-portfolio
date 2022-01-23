import { Sky, calcPosFromAngles } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const dayColor = [0.5, 0.8, 0.92];
const nightColor = [0.02, 0.02, 0.03];

const daySky = {
  distance: 10,
  mieCoefficient: 0.005,
  mieDirectionalG: 0.7,
  rayleigh: 0.0,
  turbidity: 10,
  inclination: 0.8,
  azimuth: 0.9,
};

const nightSky = {
  distance: 15,
  mieCoefficient: 0.02,
  mieDirectionalG: 0.7,
  rayleigh: 5,
  turbidity: 10,
  sunPosition: [-2.5, -0.2, 0.58],
};

const transitionDuration = 10;
const CustomSky = (props) => {
  return <>{props.isDay ? <Sky {...daySky} /> : <color attach="background" args={nightColor} />}</>;
};

export default CustomSky;
