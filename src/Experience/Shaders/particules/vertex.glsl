uniform float uSize;
uniform float uTime;
varying vec2 vUv;
attribute float aScale;

float random(float seed) {
    return fract(sin(seed) * 143758.5453123);
}

void main() {
    float frequency = 2.0; // fréquence des oscillations
    float amplitude = random(aScale)*2.; // amplitude des oscillations
    float offset = 0.1; // décalage de la position initiale
    float timeMultiplier = random(aScale)*0.001; // multiplication du temps pour ajuster la vitesse des oscillations
    float yPos = sin(uTime * frequency * timeMultiplier) * amplitude + offset;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += yPos;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    gl_PointSize = uSize * aScale;
    gl_PointSize *=  0.1 + (1.0 / - viewPosition.z);

    vUv = uv;
}
