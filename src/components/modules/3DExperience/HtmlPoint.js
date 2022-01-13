import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import "./HtmlPoint.css";

const HtmlPoint = (props) => {
  const pointRef = useRef();
  const sphere = useRef(
    new THREE.Sphere(
      new THREE.Vector3(props.position[0], props.position[1], props.position[2]),
      0.4
    )
  );
  const mouseRay = useRef(new THREE.Ray(new THREE.Vector3(), new THREE.Vector3()));
  const [isVisible, setVisible] = useState(false);
  const [forceVisible, setForceVisible] = useState(false);
  const { camera, mouse } = useThree();

  useFrame(() => {
    mouseRay.current.origin.set(camera.position.x, camera.position.y, camera.position.z);
    mouseRay.current.direction.set(mouse.x, mouse.y, 0);
    mouseRay.current.direction.unproject(camera);
    mouseRay.current.direction.sub(mouseRay.current.origin).normalize();
    sphere.current.center.set(props.position[0], props.position[1], props.position[2]);
    setVisible(mouseRay.current.intersectsSphere(sphere.current));
  });

  useEffect(() => {
    if (props.doneLoading) {
      let timer;
      const popup = () => {
        timer = setTimeout(() => {
          setForceVisible(true);
          timer = setTimeout(() => {
            setForceVisible(false);
          }, 1000 * (1 + props.position[0]));
        }, 2000);
      };
      popup();
      return () => clearTimeout(timer);
    }
  }, [props.doneLoading]);

  return (
    <Html position={props.position} zIndexRange={[100, 0]}>
      <div className="HtmlPoint">
        <div className="HtmlPoint-text">{props.children}</div>
        <div
          ref={pointRef}
          className={"HtmlPoint-point" + (isVisible || forceVisible ? " visible" : "")}
        ></div>
      </div>
    </Html>
  );
};

export default HtmlPoint;
