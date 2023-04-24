void main() {
    vec2 distCoord1 = vec2(gl_PointCoord.x, (gl_PointCoord.y - 0.5) * 5.0 + 0.5) - vec2(0.5);
    vec2 distCoord2 = vec2(gl_PointCoord.y, (gl_PointCoord.x - 0.5) * 5.0 + 0.5) - vec2(0.5);

    float strength1 = 0.15 / dot(distCoord1, distCoord1);
    float strength2 = 0.15 / dot(distCoord2, distCoord2);
    float strength = strength1 * strength2;

    float offset = 1.0 - step(0.015, strength);
    strength -= offset;

    vec3 finalColor = mix(vec3(0.0), vec3(1.0), strength);

    gl_FragColor = vec4(finalColor, normalize(strength) * .5);
}