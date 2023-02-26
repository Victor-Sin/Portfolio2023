#include "../noise.glsl"

varying vec2 vUv;
varying float diff;

uniform vec2 uCursor;
uniform sampler2D uTexture;
uniform float uTime;
uniform vec3 uLightPos;
uniform vec3 uLightColor;

void main() {



    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    vec3 norm = normal;
    vec3 lightDir = normalize(uLightPos-modelPosition.xyz);

    diff = dot(norm, lightDir);
    //    diff = uLightColor*norm;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    vUv = uv;
}
