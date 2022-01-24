import * as THREE from "three";
import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import StarMaterial from "./StarMaterial";

const NightStars = ({ count = 400 }) => {
  const shader = useRef();
  const [positionArray, scaleArray] = useMemo(() => {
    const positionArray = new Float32Array(count * 3);
    const scaleArray = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      new THREE.Vector3(
        (Math.random() - 0.5) * 1,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 75
      ).toArray(positionArray, i * 3);
      scaleArray[i] = Math.max(Math.random() * 0.175, 0.01);
    }
    return [positionArray, scaleArray];
  }, [count]);

  useFrame((state, delta) => (shader.current.time += delta / 2));

  return (
    <points key={count} position={[-300, 15, 27]}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={count}
          array={positionArray}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "aScale"]}
          count={count}
          array={scaleArray}
          itemSize={1}
        />
      </bufferGeometry>
      <starMaterial ref={shader} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
};

export default NightStars;
