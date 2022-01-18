import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useSpring, animated, config } from "@react-spring/three";
import { useEffect, useState } from "react";

const Robot = (props) => {
  //console.log(nodes);

  const robotProps = useControls("Robot", {
    position: [-0.2923, -0.74, 0.116],
  });

  const [baseSpring, baseApi] = useSpring(
    () => ({ "rotation-y": 0, config: { mass: 3, friction: 20 } }),
    []
  );
  const [middleSpring, middleApi] = useSpring(
    () => ({ "rotation-z": 0, config: { mass: 3, friction: 20 } }),
    []
  );
  const [topSpring, topApi] = useSpring(
    () => ({ "rotation-z": 0, config: { mass: 3, friction: 20 } }),
    []
  );
  const [leftClawSpring, leftClawApi] = useSpring(
    () => ({ "rotation-y": 0, config: { friction: 10, bounce: true } }),
    []
  );
  const [rightClawSpring, rightClawApi] = useSpring(
    () => ({ "rotation-y": 0, config: { friction: 10, bounce: true } }),
    []
  );

  useEffect(() => {
    let timeout;
    const wander = () => {
      baseApi.start({ "rotation-y": 0.25 + Math.random() });
      middleApi.start({ "rotation-z": 0.25 - Math.random() });
      topApi.start({ "rotation-z": 0.25 - Math.random() * 0.75 });

      timeout = setTimeout(wander, (2 + Math.random() * 4) * 1000);
    };
    wander();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let timeout;
    const wander = () => {
      let clawAngle = Math.random() * 1;
      leftClawApi.start({ "rotation-y": clawAngle });
      rightClawApi.start({ "rotation-y": -clawAngle });

      timeout = setTimeout(wander, (1 + Math.random() * 1) * 1000);
    };
    wander();
    return () => clearTimeout(timeout);
  }, []);

  return props.nodes != null ? (
    <group {...props} position={robotProps.position}>
      <animated.mesh
        geometry={props.nodes.robotBottom.geometry}
        position={props.nodes.robotBottom.position}
        rotation={[0, Math.PI / 180, 0]}
        {...baseSpring}
        castShadow
      >
        <meshBasicMaterial map={props.bakedTexture} map-flipY={false} />
        <animated.mesh
          geometry={props.nodes.robotMid.geometry}
          position={props.nodes.robotMid.position}
          rotation={[0, 0, Math.PI / 180]}
          {...middleSpring}
          castShadow
        >
          <meshBasicMaterial map={props.bakedTexture} map-flipY={false} />
          <animated.mesh
            geometry={props.nodes.robotTop.geometry}
            position={props.nodes.robotTop.position}
            rotation={[0, 0, Math.PI / 180]}
            castShadow
            {...topSpring}
          >
            <meshBasicMaterial map={props.bakedTexture} map-flipY={false} />
            <animated.mesh
              geometry={props.nodes.robotClawLeft.geometry}
              position={props.nodes.robotClawLeft.position}
              rotation={[0, Math.PI / 3, 0]}
              castShadow
              {...leftClawSpring}
            >
              <meshBasicMaterial map={props.bakedTexture} map-flipY={false} />
            </animated.mesh>
            <animated.mesh
              geometry={props.nodes.robotClawRight.geometry}
              position={props.nodes.robotClawRight.position}
              rotation={[0, -Math.PI / 3, 0]}
              castShadow
              {...rightClawSpring}
            >
              <meshBasicMaterial map={props.bakedTexture} map-flipY={false} />
            </animated.mesh>
          </animated.mesh>
        </animated.mesh>
      </animated.mesh>
    </group>
  ) : null;
};

export default Robot;
