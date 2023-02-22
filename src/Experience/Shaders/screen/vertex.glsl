#include "../noise.glsl"

varying vec2 vUv;
uniform vec2 uCursor;
uniform sampler2D uTexture;
uniform float uTime;

void main() {



    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    vUv = uv;
}
