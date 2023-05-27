#include "../noise.glsl"
varying vec2 vUv;
uniform float uTime;
uniform int uIndex;


void main() {
    float PI =  3.1415926538;
    vec3 color = vec3(1.);
    float brightness = vUv.y;




    color.x *= 0.1 + (brightness * 0.37);
    color.y *= 0.3 + (brightness * 0.55);
    color.z *= 0.5 + (brightness * 0.65);

    float opacity = 0.5 - distance(vUv,vec2(0.5,vUv.y))   ;
    if(uIndex == 0){
        opacity *= 1.5;
    }
    else{
        opacity *= sin(uTime*0.001)+1.75;
    }
    opacity *= vUv.y;
    opacity *= 0.25;


    gl_FragColor = vec4(color,opacity);
}
