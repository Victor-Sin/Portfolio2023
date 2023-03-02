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


void main() {
    vec2 uv = vUv ;

    float noise = snoise(vec3(uv.x, uv.y, uTime *  0.00025)) ;

    float disc = 1.;
    float distortion = 0.000075 + diff*0.05;

    if(uCursor.x != -1.){
        float pct = 0.0;
        pct = distance( vUv*uProgMouse, uCursor*uProgMouse) ;
        float dist = dot(pct,pct);
        disc = smoothstep( 0.05, 0.25, dist*(noise+2.));
    }


//    distortion += noise*0.5;
    distortion += noise  ;
    vec2 offset = vec2(
    texture(uTexture, uv + vec2(distortion, 0.0)).r - texture(uTexture, uv - vec2(distortion, 0.0)).r,
    texture(uTexture, uv + vec2(0.0, distortion)).r - texture(uTexture, uv - vec2(0.0, distortion)).r
    );
    uv += offset * mix(0.001,disc, .05);
    vec3 newColor = texture(uTexture, uv).rgb;

    newColor = mix(uCubeColor * uMLightColor ,newColor,0.75);
    newColor = mix(uLightColor * diff ,newColor,.65);

    float strength = 1. - ( max(abs(vUv.x - 0.5), abs(vUv.y - 0.5))-0.15)*(noise*1.5+2.5);

//    gl_FragColor = vec4(vec3(strength),1.);
    gl_FragColor = vec4(newColor,strength);


}