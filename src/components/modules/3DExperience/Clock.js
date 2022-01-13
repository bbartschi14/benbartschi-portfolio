import { useGLTF } from "@react-three/drei";
import { useFrame, extend, useLoader } from "@react-three/fiber";
import { useRef, useMemo, useLayoutEffect, Suspense } from "react";
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
    color: [0.8, 0.8, 0.8],
    position: [-0.268, 0.67, -0.503],
  });

  const font = useLoader(FontLoader, "/typefaces/Roboto_Mono_Reversed.json");
  const config = useMemo(() => ({ font, size: 0.065, height: 0.001 }), [font]);
  //useLayoutEffect(() => void ref.current.geometry.center(), [text]);

  return (
    <>
      <mesh rotation={[0, Math.PI / 2, 0]} position={position} scale={[0.75, 1, 1]}>
        <textGeometry args={[month.current, config]} />
        <meshBasicMaterial color={color} />
      </mesh>

      <mesh
        rotation={[0, Math.PI / 2, 0]}
        position={[position[0], position[1], -0.65025]}
        scale={[0.9, 1, 1]}
      >
        <textGeometry args={[zeroPad(dayNumber.current, 2), config]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  );
};

const Clock = (props) => {
  //console.log(nodes);
  //const startTime = useRef(0.0);

  const date = useRef(new Date());
  const hour = useRef(date.current.getHours());
  const minutes = useRef(date.current.getMinutes());
  const seconds = useRef(date.current.getSeconds());

  const minuteHandMesh = useRef();
  const hourHandMesh = useRef();
  const secondHandMesh = useRef();

  useFrame((state, deltaSeconds) => {
    //startTime.current += deltaSeconds;
    if (props.nodes == null) return;
    seconds.current += deltaSeconds;
    date.current = new Date();
    hour.current = date.current.getHours();
    minutes.current = date.current.getMinutes();
    //seconds.current = date.current.getSeconds();

    secondHandMesh.current.rotation.x = -(Math.PI / 180) * seconds.current * 6;
    minuteHandMesh.current.rotation.x = -(Math.PI / 180) * minutes.current * 6; // 6 degrees per minute plus
    hourHandMesh.current.rotation.x =
      -(Math.PI / 180) * (hour.current * 30 + minutes.current * 0.5); // 30 degrees per hour plus half a degree per minute (as 60 minutes gives an extra 30 degrees)
  });

  return props.nodes ? (
    <group {...props} dispose={null} position={[0, 0, 0]}>
      <mesh
        ref={hourHandMesh}
        geometry={props.nodes.hourhand.geometry}
        position={props.nodes.hourhand.position}
      >
        <meshBasicMaterial map={props.bakedTexture} map-flipY={false} color={"white"} />
      </mesh>
      <mesh
        ref={minuteHandMesh}
        geometry={props.nodes.minutehand.geometry}
        position={props.nodes.minutehand.position}
      >
        <meshBasicMaterial map={props.bakedTexture} map-flipY={false} color={"white"} />
      </mesh>
      <mesh
        ref={secondHandMesh}
        geometry={props.nodes.secondhand.geometry}
        position={props.nodes.secondhand.position}
      >
        <meshBasicMaterial map={props.bakedTexture} map-flipY={false} color={"white"} />
      </mesh>
      <Suspense fallback={null}>
        <DateText />
      </Suspense>
    </group>
  ) : null;
};

export default Clock;
