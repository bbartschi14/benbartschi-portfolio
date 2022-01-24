import { ShaderMaterial } from "three";
import { extend } from "@react-three/fiber";

class StarMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uSize: { value: 80 },
      },
      vertexShader: `
          uniform float uPixelRatio;
          uniform float uSize;
          uniform float uTime;
          attribute float aScale;
          out vec3 worldPosition;    
          out float customScale;
          void main() {
              worldPosition = position;
              customScale = aScale;
            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectionPostion = projectionMatrix * viewPosition;    
            gl_Position = projectionPostion;
            gl_PointSize = uSize * aScale * uPixelRatio;
          }`,
      fragmentShader: `
          uniform float uTime;
          in float customScale;
          in vec3 worldPosition;
          void main() {
            float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
            float strength = clamp(0.05 / distanceToCenter - 0.25, 0.0, 1.0);
            float yAlpha = strength;// * (worldPosition.y + 2.5);
            gl_FragColor = vec4(1.0, 1.0, 1.0, yAlpha * (0.5 * cos((uTime + worldPosition.x) * 0.1 / customScale) + 0.5) );
          }`,
    });
  }

  get time() {
    return this.uniforms.uTime.value;
  }

  set time(v) {
    this.uniforms.uTime.value = v;
  }
}

extend({ StarMaterial });
export default StarMaterial;
