#include "../noise.glsl"

varying float diff;
varying vec2 vUv;
uniform vec2 uCursor;
uniform sampler2D uTexture;
uniform float uTime;
uniform vec3 uLightColor;
uniform vec3 uMLightColor;
uniform vec3 uCubeColor;
uniform float uProgMouse;
uniform float uDepth;

void main() {
    vec2 uv = vUv;
    float noise = snoise(vec3(uv.x, uv.y, uTime * 0.00025)) * .25;

    float disc = 1.0;
    float distortion = 0.000075 + diff * 0.05;

    if (uCursor.x != -1.0) {
        float dist = distance(vUv * uProgMouse, uCursor * uProgMouse);
        disc = smoothstep(0.05, 0.25, dist * dist * (noise + 2.0));
    }
    float progress = (20.- uProgMouse)/40.;

    distortion += noise + progress;
    vec2 distortionVec = vec2(distortion, 0.0);
    vec2 offset = vec2(
    texture(uTexture, uv + distortionVec).r - texture(uTexture, uv - distortionVec).r,
    texture(uTexture, uv + vec2(0.0, distortion)).r - texture(uTexture, uv - vec2(0.0, distortion)).r
    );
    uv += offset * mix(0.001, disc, 0.025);
    vec3 newColor = texture(uTexture, uv).rgb ;


    newColor = mix(uCubeColor * uMLightColor * .5, newColor, min(0.75, 1.0 - uDepth* 0.8 ) );
    newColor = mix(uLightColor *.5 * diff, newColor, 0.65);

    float strength = 1.0 - (max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)) - 0.1) * (noise * 1.5 + 2.5);

    gl_FragColor = vec4(newColor, strength);
}