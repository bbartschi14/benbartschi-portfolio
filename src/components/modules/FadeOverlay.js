import { useEffect, useRef } from "react";
import { extend } from "@react-three/fiber";
import { ShaderMaterial } from "three";
import { Plane } from "@react-three/drei";
import { gsap } from "gsap";

class FadeMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: { uAlpha: { type: "f", value: 1.0 } },
      transparent: true,
      vertexShader:
        /* glsl */
        `
        void main()
        {
            gl_Position = vec4(position, 1.0);
        }`,
      fragmentShader:
        /* glsl */
        `
        uniform float uAlpha;
        void main()
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
        }`,
    });
  }
  get alpha() {
    return this.uniforms.uAlpha.value;
  }

  set alpha(v) {
    this.uniforms.uAlpha.value = v;
  }
}

extend({ FadeMaterial });

const FadeOverlay = (props) => {
  const fadeMatRef = useRef();

  useEffect(() => {
    if (props.doneLoading == true)
      gsap.to(fadeMatRef.current.uniforms.uAlpha, { duration: 2.5, value: 0 });
  }, [props.doneLoading]);

  return (
    <Plane args={[2, 2]}>
      <fadeMaterial ref={fadeMatRef} />
    </Plane>
  );
};

export default FadeOverlay;
