import { extend } from "@react-three/fiber";
import { ShaderMaterial } from "three";

class BakedMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uDayTexture: { value: undefined },
        uNightTexture: { value: undefined },
        uNightMix: { value: 1.0 },
      },
      vertexShader:
        /* glsl */
        `
        #include <encodings_pars_fragment>
        varying vec2 vUv;
        void main()
        {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,
      fragmentShader:
        /* glsl */
        `
        varying vec2 vUv;
        uniform sampler2D uDayTexture;
        uniform sampler2D uNightTexture;
        uniform float uNightMix;
        void main()
        {
          vec3 bakedDayColor = texture2D(uDayTexture, vUv).rgb;
          vec3 bakedNightColor = texture2D(uNightTexture, vUv).rgb;
          vec3 bakedColor = mix(bakedDayColor, bakedNightColor, uNightMix);
          gl_FragColor = vec4(bakedColor, 1.0);
        }
                `,
    });
  }
  get uDayTexture() {
    return this.uniforms.uDayTexture.value;
  }
  set uDayTexture(v) {
    return (this.uniforms.uDayTexture.value = v);
  }
  get uNightTexture() {
    return this.uniforms.uNightTexture.value;
  }
  set uNightTexture(v) {
    return (this.uniforms.uNightTexture.value = v);
  }
  get uNightMix() {
    return this.uniforms.uNightMix.value;
  }
  set uNightMix(v) {
    return (this.uniforms.uNightMix.value = v);
  }
}

extend({ BakedMaterial });

export default BakedMaterial;
