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


const vec2 blurSize = vec2(0.01, 0.01); // ajuste la taille du flou
void main() {
    vec2 uv = vUv ;
    vec4 text = texture2D(uTexture, vUv);

    float luminance = dot(text.rgb, vec3(0.299, 0.587, 0.114));


    vec3 color = vec3(0.0);
    float sum = 0.;
    for(float x = -4.0; x <= 2.0; x += 1.0) {
        for(float y = -4.0; y <= 2.0; y += 1.0) {
            vec2 offset = vec2(x, y) * blurSize;
            float weight = 1.0 - length(vec2(x, y)) / 2.8284;
            color += texture2D(uTexture, vUv + offset).rgb * weight;
            sum += weight;
        }
    }

    color /= sum;


    float threshold = 0.2;
    float intensity = smoothstep(threshold - 0.1, threshold + 0.1, luminance);
    vec3 newColor = mix(color, vec3(1.0), intensity);

    float noise = snoise(vec3(uv.x, uv.y, uTime *  0.00025)) ;

    float disc = 1.;
    float distortion = 0.000075 + diff*0.05;

    if(uCursor.x != -1.){
        float pct = 0.0;
        pct = distance( vUv*uProgMouse, uCursor*uProgMouse) ;
        float dist = dot(pct,pct);
        disc = smoothstep( 0.05, 0.25, dist*(noise+1.75));
    }


    distortion += noise ;
    vec2 offset = vec2(
    texture(uTexture, uv + vec2(distortion, 0.0)).r - texture(uTexture, uv - vec2(distortion, 0.0)).r,
    texture(uTexture, uv + vec2(0.0, distortion)).r - texture(uTexture, uv - vec2(0.0, distortion)).r
    );
    uv += offset * mix(0.001,disc, .05);
    newColor = texture(uTexture, uv).rgb;

    newColor = mix(uCubeColor * uMLightColor ,newColor,0.75);
    newColor = mix(uLightColor * diff,newColor,.75);

    float strength = 1. - ( max(abs(vUv.x - 0.5), abs(vUv.y - 0.5))-0.1)*(noise+2.);

    gl_FragColor = vec4(newColor,strength);

}