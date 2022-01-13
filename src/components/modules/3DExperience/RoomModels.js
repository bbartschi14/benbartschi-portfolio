import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import Clock from "./Clock";
import Robot from "./Robot";
import HtmlPoint from "./HtmlPoint";
import { useEffect, useState } from "react";

const RoomModels = (props) => {
  const { nodes } = useGLTF("/room_merged_day.glb");
  const clockNodes = useGLTF("/clockHands.glb").nodes;
  const robotNodes = useGLTF("/robot.glb").nodes;

  const bakedTexture = useTexture("/baked_day.jpg");
  bakedTexture.encoding = THREE.sRGBEncoding;
  const [doneLoading, setDoneLoading] = useState(false);

  useEffect(() => {
    setDoneLoading(true);
  }, [nodes]);

  return (
    <>
      <mesh geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>

      {/* Create a shadow catcher of the same mesh. TODO: Profile performance, as it's creating a second copy of everything */}
      <mesh geometry={nodes.baked.geometry} receiveShadow>
        <shadowMaterial attach="material" opacity={0.2} />
      </mesh>

      <Clock bakedTexture={bakedTexture} sceneRoot={nodes.baked.position} nodes={clockNodes} />
      <Robot bakedTexture={bakedTexture} sceneRoot={nodes.baked.position} nodes={robotNodes} />
      <HtmlPoint position={[0.2, -0.1, 0.775]} doneLoading={doneLoading}>
        One of my first introductions to engineering was putting together a kit of a wooden
        hydraulic robot arm. This one is made of recycled cardboard!
      </HtmlPoint>
      <HtmlPoint position={[-0.1, -0.1, 0.225]} doneLoading={doneLoading}>
        <i>Dracaena trifasciata</i>, aka Snake Plant. One of many dotting the corners of our
        apartment.
      </HtmlPoint>
      <HtmlPoint position={[-0.07, 0.09, -0.16]} doneLoading={doneLoading}>
        This robot is one of the first characters I ever fully modeled and rigged, so it gained the
        privilege of becoming a figurine on this desk!
      </HtmlPoint>
      <HtmlPoint position={[-0.25, 0.225, -0.25]} doneLoading={doneLoading}>
        I'm half Taiwanese, and growing up, my family honored our heritage with many Chinese New
        Year and Harvest Festival celebrations.
      </HtmlPoint>
      <HtmlPoint position={[-0.25, 0.14, -0.375]} doneLoading={doneLoading}>
        Married to my best friend and all-time project partner.
      </HtmlPoint>
      <HtmlPoint position={[-0.25, 0.12, -0.7]} doneLoading={doneLoading}>
        After high school I spent 2 years as a full-time missionary in Ecuador, proselyting and
        serving communities across the southern part of the country.
      </HtmlPoint>
      <HtmlPoint position={[-0.25, 0.32, -0.325]} doneLoading={doneLoading}>
        West coast born and raised!
      </HtmlPoint>
      <HtmlPoint position={[-0.25, 0.45, -0.72]} doneLoading={doneLoading}>
        Attending MIT is probably the only reason I'd ever brave snowy New England. Currently
        studying CS, graduating in '23
      </HtmlPoint>
      <HtmlPoint position={[-0.25, 0.55, -0.52]} doneLoading={doneLoading}>
        In homage to my hometown and love of strategy games, I designed and modeled this Las Vegas
        chess set.
      </HtmlPoint>

      {/* <Cubes bakedTexture={bakedTexture} /> */}
    </>
  );
};

useGLTF.preload("/room_merged_day.glb");
useGLTF.preload("/clockHands.glb");
useGLTF.preload("/robot.glb");

export default RoomModels;