import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";

const VERT = `attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAG = `precision highp float;
uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  vec3 color1 = uColorStops[0];
  vec3 color2 = uColorStops[1];
  vec3 color3 = uColorStops[2];

  vec3 rampColor = mix(color1, color2, uv.x * 2.0);
  rampColor = mix(rampColor, color3, pow(uv.x, 2.0));

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;

  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

  vec3 auroraColor = intensity * rampColor;

  gl_FragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}`;

export default function Aurora(props) {
  const {
    colorStops = ["#5227FF", "#7cff67", "#5227FF"],
    amplitude = 1.0,
    blend = 0.5,
  } = props;

  const propsRef = useRef(props);
  propsRef.current = props;

  const ctnDom = useRef(null);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: true,
    });

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.backgroundColor = "transparent";

    let program;

    const resize = () => {
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      renderer.setSize(width, height);
      if (program && program.uniforms?.uResolution) {
        program.uniforms.uResolution.value = [width, height];
      }
    };

    const debounce = (fn, delay = 150) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
      };
    };

    const geometry = new Triangle(gl);
    if (geometry.attributes && geometry.attributes.uv) {
      delete geometry.attributes.uv;
    }

    const defaultStops = colorStops.map((hex) => {
      const c = new Color(hex);
      return [c.r, c.g, c.b];
    });

    program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { value: defaultStops },
        uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
        uBlend: { value: blend },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    let animateId = null;
    let startTime = performance.now();

    const update = (t) => {
      animateId = requestAnimationFrame(update);

      if (document.hidden) return; // Pause when tab is not visible

      const elapsed = (t - startTime) * 0.001;
      const { speed = 1.0, amplitude, blend, colorStops } = propsRef.current;

      program.uniforms.uTime.value = elapsed * speed;
      program.uniforms.uAmplitude.value = amplitude ?? 1.0;
      program.uniforms.uBlend.value = blend ?? 0.5;

      if (Array.isArray(colorStops) && colorStops.length === 3) {
        program.uniforms.uColorStops.value = colorStops.map((hex) => {
          const c = new Color(hex);
          return [c.r, c.g, c.b];
        });
      }

      renderer.render({ scene: mesh });
    };

    animateId = requestAnimationFrame(update);
    resize();

    const handleResize = debounce(resize);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", handleResize);
      if (ctn.contains(gl.canvas)) ctn.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <div ref={ctnDom} className="w-full h-full" />;
}
