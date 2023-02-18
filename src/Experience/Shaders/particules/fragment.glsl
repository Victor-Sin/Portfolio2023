
void main(){
    float strength =  0.15 / (distance(vec2(gl_PointCoord.x, (gl_PointCoord.y - 0.5) * 5.0 + 0.5), vec2(0.5)));
    strength *= 0.15 / (distance(vec2(gl_PointCoord.y, (gl_PointCoord.x - 0.5) * 5.0 + 0.5), vec2(0.5)));
    float offset = 1. - step(0.015,strength);
    strength -= offset;

    vec3 finalColor = mix(vec3(0.0),vec3(1.),strength);

    gl_FragColor = vec4(finalColor,strength);
}