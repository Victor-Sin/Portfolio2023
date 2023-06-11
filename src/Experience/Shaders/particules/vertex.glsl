uniform float uSize;
uniform float uTime;
uniform bool uIos;
varying vec2 vUv;
attribute float aScale;

float random(float seed) {
    return fract(sin(seed) * 143758.5453123);
}

void main() {
    float randVal = random(aScale);
    float frequency = 2.0;
    float amplitude = randVal * 2.0;
    float offset = 0.1;
    float timeMultiplier = randVal * 0.001;
    float timeValue = uTime * timeMultiplier;
    float yPos = sin(timeValue * frequency) * amplitude + offset;
    float xPos = yPos * sin(timeValue * 0.001 + randVal * 10.0);

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.xy += vec2(xPos, yPos);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    float pointScale = uSize * aScale;
    pointScale *= 0.1 + (1.0 / -viewPosition.z);
    pointScale *= sin(randVal * 100.0 + uTime * 0.001);
    gl_PointSize = uIos ? 12.5 : pointScale;

    vUv = uv;
}