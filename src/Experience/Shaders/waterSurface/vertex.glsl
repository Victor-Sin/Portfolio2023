#include "../noise.glsl"

uniform float uTime;
uniform float uAmplitude;
uniform float uFrequency;
uniform float uSpeed;


varying vec2 vUv;
varying float vElevation;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float noise = snoise(vec3(uFrequency * modelPosition.xz, uTime * uSpeed));
    // Ajouter des déformations basées sur le bruit pour simuler les ondulations
    float elevation = uAmplitude * noise;
    modelPosition.y += elevation;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    vUv = uv;
    vElevation = elevation;
}