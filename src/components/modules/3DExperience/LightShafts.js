import { Instance, Instances, Plane, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const LightShaft = (props) => {
  return (
    <group {...props}>
      <Instance />
    </group>
  );
};

const numberOfShafts = 20;
const spacing = 0.095 / 2;
const positions = Array.from({ length: numberOfShafts }, (value, index) => ({
  position: [index * spacing, Math.random() * 0.2, Math.random() * 0.1],
  scale: [1.5 + Math.random(), 2 + Math.random() * 1.25, 1],
}));
const randoms = Array.from({ length: numberOfShafts }, (value, index) => Math.random() * 100.0);

const LightShafts = (props) => {
  const alphaTexture = useTexture("/lightShaft.png");
  const elapsedTime = useRef({ value: 0 });

  const onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      `#include <common>
        uniform float uTime;
        varying float vRandom;
        attribute float random;`
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `#include <begin_vertex>
            //transformed.x += uTime;
          vRandom = random;`
    );

    shader.uniforms.uTime = elapsedTime.current;

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      `#include <common>
        uniform float uTime;
        varying float vRandom;`
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <alphamap_fragment>",
      `
        #include <alphamap_fragment>
        diffuseColor.a *= (1.25 * sin((uTime + vRandom) * .5) - 0.25 - (vRandom * 0.005));
        `
    );
  };

  const materialRef = useRef();
  const planeGeo = useRef();
  const randomBuffer = useRef(new THREE.InstancedBufferAttribute(new Float32Array(randoms), 1));

  useEffect(() => {
    planeGeo.current.setAttribute("random", randomBuffer.current);
    // console.log(materialRef);
  }, [planeGeo]);

  useFrame((state, deltaTime) => {
    elapsedTime.current.value += deltaTime;
  });

  return (
    <Instances rotation={[0, Math.PI / 2, 0]} position={[-0.2, 0.3, 0.8]}>
      <planeGeometry args={[0.2, 1.7]} ref={planeGeo}></planeGeometry>
      <meshBasicMaterial
        ref={materialRef}
        attach="material"
        onBeforeCompile={(shader) => onBeforeCompile(shader)}
        alphaMap={alphaTexture}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        color={[1, 0.7, 0.5]}
        uniforms={{ uTime: { value: 0 } }}
      />
      {positions.map((props, i) => (
        <LightShaft key={i} {...props} rotation={[-0.8, 0.0, 0.5]} />
      ))}
    </Instances>
  );
};

export default LightShafts;
