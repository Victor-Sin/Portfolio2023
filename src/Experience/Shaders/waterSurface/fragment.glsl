#include "../noise.glsl"

varying vec2 vUv;
varying float vElevation;

uniform vec3 uTopColor;
uniform vec3 uBottomColor;
uniform float uDepthFactor;

void main() {
    // Couleur de base pour la surface de l'eau
    vec3 baseColor = mix(uBottomColor, uTopColor, vElevation * 4.0);

    // Ajouter un dégradé vertical pour simuler la profondeur
    float depthY = vUv.y * uDepthFactor;
    float depth1 = smoothstep(0.0, 1.0, depthY * 1.5);
    float depth2 = smoothstep(0.0, 1.0, 1.0 - depthY);
    float depthX = vUv.x * 1.5;
    float depth = 1.0 - depth1 * depth2 * depthX;

    // Mélanger les couleurs en fonction de la profondeur
    vec3 finalColor = mix(baseColor, uTopColor, depth);

    gl_FragColor = vec4(finalColor, 1.0 - depth);
}