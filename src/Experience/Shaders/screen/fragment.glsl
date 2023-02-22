#include "../noise.glsl"

varying vec2 vUv;
uniform vec2 uCursor;
uniform sampler2D uTexture;
uniform float uTime;


const vec2 blurSize = vec2(0.01, 0.01); // ajuste la taille du flou
void main() {
    float strength = 1.;

    vec4 text = texture2D(uTexture, vUv);

//    vec4 color = vec4(0.0);
//    for(float x = -4.0; x <= 4.0; x += 1.0) {
//        for(float y = -4.0; y <= 4.0; y += 1.0) {
//            vec2 offset = vec2(x, y) * blurSize;
//            color += texture2D(uTexture, vUv + offset) * 0.01;
//        }
//    }

    vec2 uv = vUv ;

    float noise = snoise(vec3(uv.x, uv.y, uTime *  0.001)) + 0.75;


    float disc = 0.;
    if(uCursor.x != -1.){
        float pct = 0.0;
        // The DISTANCE from the pixel to the mouse
        pct = distance( vUv, uCursor);
        float dist = dot(pct,pct);
        disc = smoothstep( 0.03, 0.02, dist);
    }

    vec3 newColor = mix(text.rgb,vec3(noise),0.1);
    newColor = mix(newColor,vec3(0.,0.,0.5),0.25);
    gl_FragColor = vec4(newColor+(disc*0.5*text.rgb),1.);
}