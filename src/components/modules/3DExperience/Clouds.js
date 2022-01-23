import { Billboard, useTexture, Plane, Stars } from "@react-three/drei";
import React, { useRef, useLayoutEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const CLOUD_URL =
  "https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png";

Math.lerp = function (value1, value2, amount) {
  amount = amount < 0 ? 0 : amount;
  amount = amount > 1 ? 1 : amount;
  return value1 + (value2 - value1) * amount;
};

const SingleCloud = (props) => {
  const texture = useTexture(CLOUD_URL);

  return (
    <Billboard>
      <Plane args={[1, 1]} scale={props.scale} position={props.position}>
        <meshBasicMaterial
          attach="material"
          map={texture}
          color={props.isDay ? [0.8, 0.8, 0.8] : [0.075, 0.075, 0.11]}
          transparent={true}
          opacity={props.opacity}
        />
      </Plane>
    </Billboard>
  );
};

const Clouds = (props) => {
  const currentGroup = useRef();

  const getRandomInRange = (minVal, maxVal) => {
    return Math.lerp(minVal, maxVal, Math.random() * 2 - 1);
  };

  const getRandomVec3InRange = (minPos, maxPos) => {
    return [
      getRandomInRange(minPos[0], maxPos[0]),
      getRandomInRange(minPos[1], maxPos[1]),
      getRandomInRange(minPos[2], maxPos[2]),
    ];
  };

  const [positions, scales, opacities, speeds] = React.useMemo(() => {
    const positions = [];
    const scales = [];
    const opacities = [];
    const speeds = [];

    for (let i = 0; i < props.count; i++) {
      positions.push(getRandomVec3InRange(props.minPosition, props.maxPosition));
      scales.push(getRandomVec3InRange(props.minScale, props.maxScale));
      opacities.push(props.isDay ? getRandomInRange(0.5, 1) : getRandomInRange(0.2, 0.7));
      speeds.push(getRandomInRange(0.5, 2));
    }

    //console.log(positions);
    //console.log(scales);

    return [positions, scales, opacities, speeds];
  }, [
    props.count,
    props.minPosition,
    props.maxPosition,
    props.minScale,
    props.maxScale,
    props.isDay,
  ]);

  useFrame((state, deltaSeconds) => {
    if (currentGroup.current != null) {
      currentGroup.current.children.forEach((child, index) => {
        child.children[0].position.x += 0.2 * deltaSeconds * speeds[index];
        child.children[0].rotation.z += 0.025 * deltaSeconds * speeds[index];
        if (child.children[0].position.x > props.maxPosition[0]) {
          child.children[0].position.x = props.minPosition[0];
        }
      });
    }
  });

  return (
    <group ref={currentGroup} {...props} dispose={null} position={[-200, 20, 0]}>
      {positions.map((pos, i) => (
        <SingleCloud
          key={i}
          scale={scales[i]}
          position={pos}
          opacity={opacities[i]}
          isDay={props.isDay}
        />
      ))}
    </group>
  );
};

export default Clouds;
