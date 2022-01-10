import { useGLTF } from "@react-three/drei";
import { useFrame, extend, useLoader } from "@react-three/fiber";
import { useRef, useMemo, useLayoutEffect } from "react";
import { useControls } from "leva";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

extend({ TextGeometry });

const monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const zeroPad = (num, places) => String(num).padStart(places, "0");

const DateText = (props) => {
  const date = useRef(new Date());
  const month = useRef(monthNames[date.current.getMonth()]);
  const dayNumber = useRef(date.current.getDate());

  const { color, position } = useControls("Text", {
    color: "white",
    position: [-0.268, 0.67, -0.503],
  });

  const font = useLoader(FontLoader, "/typefaces/Roboto_Mono_Bold_Reversed.json");
  const config = useMemo(() => ({ font, size: 0.065, height: 0.001 }), [font]);
  //useLayoutEffect(() => void ref.current.geometry.center(), [text]);

  return (
    <>
      <mesh rotation={[0, Math.PI / 2, 0]} position={position} scale={[0.75, 1, 1]}>
        <textGeometry args={[month.current, config]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh
        rotation={[0, Math.PI / 2, 0]}
        position={[position[0], position[1], -0.65025]}
        scale={[0.9, 1, 1]}
      >
        <textGeometry args={[zeroPad(dayNumber.current, 2), config]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};

const Clock = (props) => {
  const { nodes } = useGLTF("/clockHands.glb");
  const startTime = useRef(0.0);

  const date = useRef(new Date());
  const hour = useRef(date.current.getHours());
  const minutes = useRef(date.current.getMinutes());

  const minuteHandMesh = useRef();
  const hourHandMesh = useRef();

  useFrame((state, deltaSeconds) => {
    startTime.current += deltaSeconds;
    if (startTime.current >= 1) {
      // Update every second
      console.log("Updating");
      startTime.current = startTime.current % 1;
      date.current = new Date();
      hour.current = date.current.getHours();
      minutes.current = date.current.getMinutes();
    }
    minuteHandMesh.current.rotation.x = -(Math.PI / 180) * minutes.current * 6; // 6 degrees per minute
    hourHandMesh.current.rotation.x =
      -(Math.PI / 180) * (hour.current * 30 + minutes.current * 0.5); // 30 degrees per hour plus half a degree per minute (as 60 minutes gives an extra 30 degrees)
  });

  return (
    <group {...props} dispose={null} position={[0, 0, 0]}>
      <mesh
        ref={hourHandMesh}
        geometry={nodes.hourhand.geometry}
        position={nodes.hourhand.position}
      >
        <meshBasicMaterial map={props.bakedTexture} map-flipY={false} color={"lightgray"} />
      </mesh>
      <mesh
        ref={minuteHandMesh}
        geometry={nodes.minutehand.geometry}
        position={nodes.minutehand.position}
      >
        <meshBasicMaterial map={props.bakedTexture} map-flipY={false} color={"lightgray"} />
      </mesh>
      <DateText />
    </group>
  );
};

useGLTF.preload("/clockHands.glb");

export default Clock;
