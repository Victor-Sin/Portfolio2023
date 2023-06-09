var Ym=Object.defineProperty;var $m=(a,e,t)=>e in a?Ym(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var kt=(a,e,t)=>($m(a,typeof e!="symbol"?e+"":e,t),t),ph=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var Ae=(a,e,t)=>(ph(a,e,"read from private field"),t?t.call(a):e.get(a)),Yn=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)},ai=(a,e,t,n)=>(ph(a,e,"write to private field"),n?n.call(a,t):e.set(a,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cu="148",is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Km=0,mh=1,Zm=2,kf=1,Uf=2,To=3,cr=0,Wn=1,Cl=2,ma=3,sr=0,Ps=1,Vc=2,gh=3,_h=4,Jm=5,Ms=100,Qm=101,eg=102,xh=103,vh=104,tg=200,ng=201,ig=202,rg=203,Bf=204,Vf=205,sg=206,og=207,ag=208,lg=209,cg=210,ug=0,hg=1,dg=2,Gc=3,fg=4,pg=5,mg=6,gg=7,Gf=0,_g=1,xg=2,Fi=0,vg=1,yg=2,bg=3,Hf=4,Mg=5,Wf=300,Bs=301,Vs=302,Hc=303,Wc=304,Ll=306,Gs=1e3,Un=1001,pl=1002,Vt=1003,jc=1004,Ja=1005,mn=1006,jf=1007,Hr=1008,Wr=1009,wg=1010,Sg=1011,Xf=1012,Tg=1013,Ar=1014,Ji=1015,Ko=1016,Eg=1017,Ag=1018,Ds=1020,Cg=1021,Lg=1022,Bn=1023,Pg=1024,Dg=1025,Ir=1026,Hs=1027,Rg=1028,Ig=1029,zg=1030,Og=1031,Ng=1033,Vl=33776,Gl=33777,Hl=33778,Wl=33779,yh=35840,bh=35841,Mh=35842,wh=35843,Fg=36196,Sh=37492,Th=37496,Eh=37808,Ah=37809,Ch=37810,Lh=37811,Ph=37812,Dh=37813,Rh=37814,Ih=37815,zh=37816,Oh=37817,Nh=37818,Fh=37819,kh=37820,Uh=37821,Bh=36492,Zo=2300,Ws=2301,jl=2302,Vh=2400,Gh=2401,Hh=2402,kg=2500,Ug=1,qf=2,jr=3e3,rt=3001,Bg=3200,Vg=3201,Yf=0,Gg=1,ci="srgb",Jo="srgb-linear",Xl=7680,Hg=519,Xc=35044,Wh="300 es",qc=1035;class Jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jh=1234567;const Ro=Math.PI/180,Qo=180/Math.PI;function ii(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[a&255]+$t[a>>8&255]+$t[a>>16&255]+$t[a>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Jt(a,e,t){return Math.max(e,Math.min(t,a))}function Lu(a,e){return(a%e+e)%e}function Wg(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function jg(a,e,t){return a!==e?(t-a)/(e-a):0}function Io(a,e,t){return(1-t)*a+t*e}function Xg(a,e,t,n){return Io(a,e,1-Math.exp(-t*n))}function qg(a,e=1){return e-Math.abs(Lu(a,e*2)-e)}function Yg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function $g(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Kg(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Zg(a,e){return a+Math.random()*(e-a)}function Jg(a){return a*(.5-Math.random())}function Qg(a){a!==void 0&&(jh=a);let e=jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e_(a){return a*Ro}function t_(a){return a*Qo}function Yc(a){return(a&a-1)===0&&a!==0}function $f(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function ml(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function n_(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),d=r((e-n)/2),h=s((e-n)/2),f=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*d,l*h,o*c);break;case"YZY":a.set(l*h,o*u,l*d,o*c);break;case"ZXZ":a.set(l*d,l*h,o*u,o*c);break;case"XZX":a.set(o*u,l*g,l*f,o*c);break;case"YXY":a.set(l*f,o*u,l*g,o*c);break;case"ZYZ":a.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zi(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ut(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var i_=Object.freeze({__proto__:null,DEG2RAD:Ro,RAD2DEG:Qo,generateUUID:ii,clamp:Jt,euclideanModulo:Lu,mapLinear:Wg,inverseLerp:jg,lerp:Io,damp:Xg,pingpong:qg,smoothstep:Yg,smootherstep:$g,randInt:Kg,randFloat:Zg,randFloatSpread:Jg,seededRandom:Qg,degToRad:e_,radToDeg:t_,isPowerOfTwo:Yc,ceilPowerOfTwo:$f,floorPowerOfTwo:ml,setQuaternionFromProperEuler:n_,normalize:ut,denormalize:zi});class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(){Ln.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],p=i[0],m=i[3],_=i[6],v=i[1],x=i[4],b=i[7],y=i[2],E=i[5],A=i[8];return r[0]=s*p+o*v+l*y,r[3]=s*m+o*x+l*E,r[6]=s*_+o*b+l*A,r[1]=c*p+u*v+d*y,r[4]=c*m+u*x+d*E,r[7]=c*_+u*b+d*A,r[2]=h*p+f*v+g*y,r[5]=h*m+f*x+g*E,r[8]=h*_+f*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,h=o*l-u*r,f=c*r-s*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*s)*p,e[3]=h*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-o*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(s*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ql.makeScale(e,t)),this}rotate(e){return this.premultiply(ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(ql.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ql=new Ln;function Kf(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ea(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function zr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Qa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Yl={[ci]:{[Jo]:zr},[Jo]:{[ci]:Qa}},Kt={legacyMode:!0,get workingColorSpace(){return Jo},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Yl[e]&&Yl[e][t]!==void 0){const n=Yl[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dt={r:0,g:0,b:0},$n={h:0,s:0,l:0},ga={h:0,s:0,l:0};function $l(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function _a(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Kt.workingColorSpace){if(e=Lu(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=$l(s,r,e+1/3),this.g=$l(s,r,e),this.b=$l(s,r,e-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(e,t=ci){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Kt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Kt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Kt.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Kt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ci){const n=Zf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Kt.fromWorkingColorSpace(_a(this,Dt),e),Jt(Dt.r*255,0,255)<<16^Jt(Dt.g*255,0,255)<<8^Jt(Dt.b*255,0,255)<<0}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kt.workingColorSpace){Kt.fromWorkingColorSpace(_a(this,Dt),t);const n=Dt.r,i=Dt.g,r=Dt.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(_a(this,Dt),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=ci){return Kt.fromWorkingColorSpace(_a(this,Dt),e),e!==ci?`color(${e} ${Dt.r} ${Dt.g} ${Dt.b})`:`rgb(${Dt.r*255|0},${Dt.g*255|0},${Dt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL($n),$n.h+=e,$n.s+=t,$n.l+=n,this.setHSL($n.h,$n.s,$n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(ga);const n=Io($n.h,ga.h,t),i=Io($n.s,ga.s,t),r=Io($n.l,ga.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Oe.NAMES=Zf;let ss;class Jf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ss===void 0&&(ss=ea("canvas")),ss.width=e.width,ss.height=e.height;const n=ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=zr(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zr(t[n]/255)*255):t[n]=zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Qf{constructor(e=null){this.isSource=!0,this.uuid=ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Kl(i[s].image)):r.push(Kl(i[s]))}else r=Kl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Kl(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Jf.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let r_=0;class Yt extends Jr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=Un,i=Un,r=mn,s=Hr,o=Bn,l=Wr,c=Yt.DEFAULT_ANISOTROPY,u=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=ii(),this.name="",this.source=new Qf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ln,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Wf;Yt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(f+1)/2,y=(_+1)/2,E=(u+h)/4,A=(d+p)/4,M=(g+m)/4;return x>b&&x>y?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=A/n):b>y?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=E/i,r=M/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=A/r,i=M/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-p)*(d-p)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-p)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xr extends Jr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ep extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class s_ extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=r[s+0],f=r[s+1],g=r[s+2],p=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=p;return}if(d!==p||l!==h||c!==f||u!==g){let m=1-o;const _=l*h+c*f+u*g+d*p,v=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const y=Math.sqrt(x),E=Math.atan2(y,_*v);m=Math.sin(m*E)/y,o=Math.sin(o*E)/y}const b=o*v;if(l=l*m+h*b,c=c*m+f*b,u=u*m+g*b,d=d*m+p*b,m===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[s],h=r[s+1],f=r[s+2],g=r[s+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(r/2),h=l(n/2),f=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(s-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(s-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-r*l,this._y=i*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-r*i,d=l*i+r*n-s*t,h=-r*t-s*n-o*i;return this.x=c*l+h*-r+u*-o-d*-s,this.y=u*l+h*-s+d*-r-c*-o,this.z=d*l+h*-o+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zl.copy(this).projectOnVector(e),this.sub(Zl)}reflect(e){return this.sub(Zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zl=new N,Xh=new vi;class to{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>r&&(r=u),d>s&&(s=d),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>r&&(r=u),d>s&&(s=d),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let s=0,o=r.count;s<o;s++)_r.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(_r)}else n.boundingBox===null&&n.computeBoundingBox(),Jl.copy(n.boundingBox),Jl.applyMatrix4(e.matrixWorld),this.union(Jl);const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_r),_r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),xa.subVectors(this.max,uo),os.subVectors(e.a,uo),as.subVectors(e.b,uo),ls.subVectors(e.c,uo),Vi.subVectors(as,os),Gi.subVectors(ls,as),xr.subVectors(os,ls);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-xr.z,xr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,xr.z,0,-xr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-xr.y,xr.x,0];return!Ql(t,os,as,ls,xa)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,os,as,ls,xa))?!1:(va.crossVectors(Vi,Gi),t=[va.x,va.y,va.z],Ql(t,os,as,ls,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _r.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_r).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new N,new N,new N,new N,new N,new N,new N,new N],_r=new N,Jl=new to,os=new N,as=new N,ls=new N,Vi=new N,Gi=new N,xr=new N,uo=new N,xa=new N,va=new N,vr=new N;function Ql(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){vr.fromArray(a,r);const o=i.x*Math.abs(vr.x)+i.y*Math.abs(vr.y)+i.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),u=n.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const o_=new to,ho=new N,ec=new N;class no{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):o_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const t=ho.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ho,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(ec)),this.expandByPoint(ho.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new N,tc=new N,ya=new N,Hi=new N,nc=new N,ba=new N,ic=new N;class Pl{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.direction).multiplyScalar(t).add(this.origin),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){tc.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(tc);const r=e.distanceTo(t)*.5,s=-this.direction.dot(ya),o=Hi.dot(this.direction),l=-Hi.dot(ya),c=Hi.lengthSq(),u=Math.abs(1-s*s);let d,h,f,g;if(u>0)if(d=s*l-o,h=s*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const p=1/u;d*=p,h*=p,f=d*(d+s*h+2*o)+h*(s*d+h+2*l)+c}else h=r,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-s*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(s*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=s>0?-r:r,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(ya).multiplyScalar(h).add(tc),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),i=Si.dot(Si)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,r){nc.subVectors(t,e),ba.subVectors(n,e),ic.crossVectors(nc,ba);let s=this.direction.dot(ic),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Hi.subVectors(this.origin,e);const l=o*this.direction.dot(ba.crossVectors(Hi,ba));if(l<0)return null;const c=o*this.direction.dot(nc.cross(Hi));if(c<0||l+c>s)return null;const u=-o*Hi.dot(ic);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,o,l,c,u,d,h,f,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=h,_[3]=f,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),s=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=s*u,f=s*d,g=o*u,p=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=g+f*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,p=c*d;t[0]=h+p*o,t[4]=g*o-f,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=f*o-g,t[6]=p+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,p=c*d;t[0]=h-p*o,t[4]=-s*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=s*u,t[9]=p-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,f=s*d,g=o*u,p=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+p,t[1]=l*d,t[5]=p*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,f=s*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-h*d,t[8]=g*d+f,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-p*d}else if(e.order==="XZY"){const h=s*l,f=s*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+p,t[5]=s*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=p*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a_,e,l_)}lookAt(e,t,n){const i=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Wi.crossVectors(n,Mn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Wi.crossVectors(n,Mn)),Wi.normalize(),Ma.crossVectors(Mn,Wi),i[0]=Wi.x,i[4]=Ma.x,i[8]=Mn.x,i[1]=Wi.y,i[5]=Ma.y,i[9]=Mn.y,i[2]=Wi.z,i[6]=Ma.z,i[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],p=n[6],m=n[10],_=n[14],v=n[3],x=n[7],b=n[11],y=n[15],E=i[0],A=i[4],M=i[8],S=i[12],D=i[1],k=i[5],G=i[9],z=i[13],R=i[2],B=i[6],H=i[10],Z=i[14],V=i[3],Q=i[7],L=i[11],W=i[15];return r[0]=s*E+o*D+l*R+c*V,r[4]=s*A+o*k+l*B+c*Q,r[8]=s*M+o*G+l*H+c*L,r[12]=s*S+o*z+l*Z+c*W,r[1]=u*E+d*D+h*R+f*V,r[5]=u*A+d*k+h*B+f*Q,r[9]=u*M+d*G+h*H+f*L,r[13]=u*S+d*z+h*Z+f*W,r[2]=g*E+p*D+m*R+_*V,r[6]=g*A+p*k+m*B+_*Q,r[10]=g*M+p*G+m*H+_*L,r[14]=g*S+p*z+m*Z+_*W,r[3]=v*E+x*D+b*R+y*V,r[7]=v*A+x*k+b*B+y*Q,r[11]=v*M+x*G+b*H+y*L,r[15]=v*S+x*z+b*Z+y*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+r*l*d-i*c*d-r*o*h+n*c*h+i*o*f-n*l*f)+p*(+t*l*f-t*c*h+r*s*h-i*s*f+i*c*u-r*l*u)+m*(+t*c*d-t*o*f-r*s*d+n*s*f+r*o*u-n*c*u)+_*(-i*o*u-t*l*d+t*o*h+i*s*d-n*s*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],p=e[13],m=e[14],_=e[15],v=d*m*c-p*h*c+p*l*f-o*m*f-d*l*_+o*h*_,x=g*h*c-u*m*c-g*l*f+s*m*f+u*l*_-s*h*_,b=u*p*c-g*d*c+g*o*f-s*p*f-u*o*_+s*d*_,y=g*d*l-u*p*l-g*o*h+s*p*h+u*o*m-s*d*m,E=t*v+n*x+i*b+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=v*A,e[1]=(p*h*r-d*m*r-p*i*f+n*m*f+d*i*_-n*h*_)*A,e[2]=(o*m*r-p*l*r+p*i*c-n*m*c-o*i*_+n*l*_)*A,e[3]=(d*l*r-o*h*r-d*i*c+n*h*c+o*i*f-n*l*f)*A,e[4]=x*A,e[5]=(u*m*r-g*h*r+g*i*f-t*m*f-u*i*_+t*h*_)*A,e[6]=(g*l*r-s*m*r-g*i*c+t*m*c+s*i*_-t*l*_)*A,e[7]=(s*h*r-u*l*r+u*i*c-t*h*c-s*i*f+t*l*f)*A,e[8]=b*A,e[9]=(g*d*r-u*p*r-g*n*f+t*p*f+u*n*_-t*d*_)*A,e[10]=(s*p*r-g*o*r+g*n*c-t*p*c-s*n*_+t*o*_)*A,e[11]=(u*o*r-s*d*r-u*n*c+t*d*c+s*n*f-t*o*f)*A,e[12]=y*A,e[13]=(u*p*i-g*d*i+g*n*h-t*p*h-u*n*m+t*d*m)*A,e[14]=(g*o*i-s*p*i-g*n*l+t*p*l+s*n*m-t*o*m)*A,e[15]=(s*d*i-u*o*i+u*n*l-t*d*l-s*n*h+t*o*h)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,d=o+o,h=r*c,f=r*u,g=r*d,p=s*u,m=s*d,_=o*d,v=l*c,x=l*u,b=l*d,y=n.x,E=n.y,A=n.z;return i[0]=(1-(p+_))*y,i[1]=(f+b)*y,i[2]=(g-x)*y,i[3]=0,i[4]=(f-b)*E,i[5]=(1-(h+_))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(g+x)*A,i[9]=(m-v)*A,i[10]=(1-(h+p))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=cs.set(i[0],i[1],i[2]).length();const s=cs.set(i[4],i[5],i[6]).length(),o=cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Kn.copy(this);const c=1/r,u=1/s,d=1/o;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,t.setFromRotationMatrix(Kn),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),h=-(s+r)/(s-r),f=-2*s*r/(s-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,s){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),d=(t+e)*l,h=(n+i)*c,f=(s+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cs=new N,Kn=new $e,a_=new N(0,0,0),l_=new N(1,1,1),Wi=new N,Ma=new N,Mn=new N,qh=new $e,Yh=new vi;class ha{constructor(e=0,t=0,n=0,i=ha.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ha.DefaultOrder="XYZ";ha.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Pu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let c_=0;const $h=new N,us=new vi,Ti=new $e,wa=new N,fo=new N,u_=new N,h_=new vi,Kh=new N(1,0,0),Zh=new N(0,1,0),Jh=new N(0,0,1),d_={type:"added"},Qh={type:"removed"};class yt extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DefaultUp.clone();const e=new N,t=new ha,n=new vi,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new Ln}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=yt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DefaultMatrixWorldAutoUpdate,this.layers=new Pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(fo,wa,this.up):Ti.lookAt(wa,fo,this.up),this.quaternion.setFromRotationMatrix(Ti),i&&(Ti.extractRotation(i.matrixWorld),us.setFromRotationMatrix(Ti),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(d_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Qh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,u_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,h_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),f=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DefaultUp=new N(0,1,0);yt.DefaultMatrixAutoUpdate=!0;yt.DefaultMatrixWorldAutoUpdate=!0;const Zn=new N,Ei=new N,rc=new N,Ai=new N,hs=new N,ds=new N,ed=new N,sc=new N,oc=new N,ac=new N;class Ri{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Zn.subVectors(e,t),i.cross(Zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Zn.subVectors(i,t),Ei.subVectors(n,t),rc.subVectors(e,t);const s=Zn.dot(Zn),o=Zn.dot(Ei),l=Zn.dot(rc),c=Ei.dot(Ei),u=Ei.dot(rc),d=s*c-o*o;if(d===0)return r.set(-2,-1,-1);const h=1/d,f=(c*l-o*u)*h,g=(s*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ai),Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,Ai),l.set(0,0),l.addScaledVector(r,Ai.x),l.addScaledVector(s,Ai.y),l.addScaledVector(o,Ai.z),l}static isFrontFacing(e,t,n,i){return Zn.subVectors(n,t),Ei.subVectors(e,t),Zn.cross(Ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Zn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ri.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;hs.subVectors(i,n),ds.subVectors(r,n),sc.subVectors(e,n);const l=hs.dot(sc),c=ds.dot(sc);if(l<=0&&c<=0)return t.copy(n);oc.subVectors(e,i);const u=hs.dot(oc),d=ds.dot(oc);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(hs,s);ac.subVectors(e,r);const f=hs.dot(ac),g=ds.dot(ac);if(g>=0&&f<=g)return t.copy(r);const p=f*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ds,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return ed.subVectors(r,i),o=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(ed,o);const _=1/(m+p+h);return s=p*_,o=h*_,t.copy(n).addScaledVector(hs,s).addScaledVector(ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let f_=0;class mi extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Ps,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Bf,this.blendDst=Vf,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Gc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xl,this.stencilZFail=Xl,this.stencilZPass=Xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==cr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cr extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new N,Sa=new Ne;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class tp extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class np extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ki extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let p_=0;const In=new $e,lc=new yt,fs=new N,wn=new to,po=new to,Ut=new N;class si extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kf(e)?np:tp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ln().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return lc.lookAt(e),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ki(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];po.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(wn.min,po.min),wn.expandByPoint(Ut),Ut.addVectors(wn.max,po.max),wn.expandByPoint(Ut)):(wn.expandByPoint(po.min),wn.expandByPoint(po.max))}wn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ut.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(e,c),Ut.add(fs)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<o;D++)c[D]=new N,u[D]=new N;const d=new N,h=new N,f=new N,g=new Ne,p=new Ne,m=new Ne,_=new N,v=new N;function x(D,k,G){d.fromArray(i,D*3),h.fromArray(i,k*3),f.fromArray(i,G*3),g.fromArray(s,D*2),p.fromArray(s,k*2),m.fromArray(s,G*2),h.sub(d),f.sub(d),p.sub(g),m.sub(g);const z=1/(p.x*m.y-m.x*p.y);isFinite(z)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(z),v.copy(f).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(z),c[D].add(_),c[k].add(_),c[G].add(_),u[D].add(v),u[k].add(v),u[G].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let D=0,k=b.length;D<k;++D){const G=b[D],z=G.start,R=G.count;for(let B=z,H=z+R;B<H;B+=3)x(n[B+0],n[B+1],n[B+2])}const y=new N,E=new N,A=new N,M=new N;function S(D){A.fromArray(r,D*3),M.copy(A);const k=c[D];y.copy(k),y.sub(A.multiplyScalar(A.dot(k))).normalize(),E.crossVectors(M,k);const z=E.dot(u[D])<0?-1:1;l[D*4]=y.x,l[D*4+1]=y.y,l[D*4+2]=y.z,l[D*4+3]=z}for(let D=0,k=b.length;D<k;++D){const G=b[D],z=G.start,R=G.count;for(let B=z,H=z+R;B<H;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new N,r=new N,s=new N,o=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),p=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,m),u.subVectors(s,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let p=0,m=l.length;p<m;p++){o.isInterleavedBufferAttribute?f=l[p]*o.data.stride+o.offset:f=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[f++]}return new Gt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new si,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new $e,ps=new Pl,cc=new no,mo=new N,go=new N,_o=new N,uc=new N,Ta=new N,Ea=new Ne,Aa=new Ne,Ca=new Ne,hc=new N,La=new N;class zt extends yt{constructor(e=new si,t=new Cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(uc.fromBufferAttribute(d,e),s?Ta.addScaledVector(uc,u):Ta.addScaledVector(uc.sub(t),u))}t.add(Ta)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(r),e.ray.intersectsSphere(cc)===!1)||(td.copy(r).invert(),ps.copy(e.ray).applyMatrix4(td),n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1))return;let s;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,d=n.groups,h=n.drawRange;if(o!==null)if(Array.isArray(i))for(let f=0,g=d.length;f<g;f++){const p=d[f],m=i[p.materialIndex],_=Math.max(p.start,h.start),v=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let x=_,b=v;x<b;x+=3){const y=o.getX(x),E=o.getX(x+1),A=o.getX(x+2);s=Pa(this,m,e,ps,c,u,y,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const f=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let p=f,m=g;p<m;p+=3){const _=o.getX(p),v=o.getX(p+1),x=o.getX(p+2);s=Pa(this,i,e,ps,c,u,_,v,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let f=0,g=d.length;f<g;f++){const p=d[f],m=i[p.materialIndex],_=Math.max(p.start,h.start),v=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let x=_,b=v;x<b;x+=3){const y=x,E=x+1,A=x+2;s=Pa(this,m,e,ps,c,u,y,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const f=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let p=f,m=g;p<m;p+=3){const _=p,v=p+1,x=p+2;s=Pa(this,i,e,ps,c,u,_,v,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function m_(a,e,t,n,i,r,s,o){let l;if(e.side===Wn?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===cr,o),l===null)return null;La.copy(o),La.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(La);return c<t.near||c>t.far?null:{distance:c,point:La.clone(),object:a}}function Pa(a,e,t,n,i,r,s,o,l){a.getVertexPosition(s,mo),a.getVertexPosition(o,go),a.getVertexPosition(l,_o);const c=m_(a,e,t,n,mo,go,_o,hc);if(c){i&&(Ea.fromBufferAttribute(i,s),Aa.fromBufferAttribute(i,o),Ca.fromBufferAttribute(i,l),c.uv=Ri.getUV(hc,mo,go,_o,Ea,Aa,Ca,new Ne)),r&&(Ea.fromBufferAttribute(r,s),Aa.fromBufferAttribute(r,o),Ca.fromBufferAttribute(r,l),c.uv2=Ri.getUV(hc,mo,go,_o,Ea,Aa,Ca,new Ne));const u={a:s,b:o,c:l,normal:new N,materialIndex:0};Ri.getNormal(mo,go,_o,u.normal),c.face=u}return c}class io extends si{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ki(c,3)),this.setAttribute("normal",new ki(u,3)),this.setAttribute("uv",new ki(d,2));function g(p,m,_,v,x,b,y,E,A,M,S){const D=b/A,k=y/M,G=b/2,z=y/2,R=E/2,B=A+1,H=M+1;let Z=0,V=0;const Q=new N;for(let L=0;L<H;L++){const W=L*k-z;for(let q=0;q<B;q++){const ne=q*D-G;Q[p]=ne*v,Q[m]=W*x,Q[_]=R,c.push(Q.x,Q.y,Q.z),Q[p]=0,Q[m]=0,Q[_]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(q/A),d.push(1-L/M),Z+=1}}for(let L=0;L<M;L++)for(let W=0;W<A;W++){const q=h+W+B*L,ne=h+W+B*(L+1),te=h+(W+1)+B*(L+1),oe=h+(W+1)+B*L;l.push(q,ne,oe),l.push(ne,te,oe),V+=6}o.addGroup(f,V,S),f+=V,h+=Z}}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function on(a){const e={};for(let t=0;t<a.length;t++){const n=js(a[t]);for(const i in n)e[i]=n[i]}return e}function g_(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function ip(a){return a.getRenderTarget()===null&&a.outputEncoding===rt?ci:Jo}const __={clone:js,merge:on};var x_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x_,this.fragmentShader=v_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=g_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let rp=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class cn extends rp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ro*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ms=-90,gs=1;class y_ extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new cn(ms,gs,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new cn(ms,gs,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new cn(ms,gs,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const o=new cn(ms,gs,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new cn(ms,gs,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new cn(ms,gs,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,o,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Fi,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Du extends Yt{constructor(e,t,n,i,r,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,i,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b_ extends Xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Du(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new io(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:sr});r.uniforms.tEquirect.value=t;const s=new zt(i,r),o=t.minFilter;return t.minFilter===Hr&&(t.minFilter=mn),new y_(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const dc=new N,M_=new N,w_=new Ln;class Mr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=dc.subVectors(n,t).cross(M_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(dc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||w_.getNormalMatrix(e),i=this.coplanarPoint(dc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new no,Da=new N;class Dl{constructor(e=new Mr,t=new Mr,n=new Mr,i=new Mr,r=new Mr,s=new Mr){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],f=n[9],g=n[10],p=n[11],m=n[12],_=n[13],v=n[14],x=n[15];return t[0].setComponents(o-i,d-l,p-h,x-m).normalize(),t[1].setComponents(o+i,d+l,p+h,x+m).normalize(),t[2].setComponents(o+r,d+c,p+f,x+_).normalize(),t[3].setComponents(o-r,d-c,p-f,x-_).normalize(),t[4].setComponents(o-s,d-u,p-g,x-v).normalize(),t[5].setComponents(o+s,d+u,p+g,x+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Da.x=i.normal.x>0?e.max.x:e.min.x,Da.y=i.normal.y>0?e.max.y:e.min.y,Da.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sp(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function S_(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,f=a.createBuffer();a.bindBuffer(u,f),a.bufferData(u,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const h=u.array,f=u.updateRange;a.bindBuffer(d,c),f.count===-1?a.bufferSubData(d,0,h):(t?a.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):a.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:s,remove:o,update:l}}class Qr extends si{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],p=[],m=[];for(let _=0;_<u;_++){const v=_*h-s;for(let x=0;x<c;x++){const b=x*d-r;g.push(b,-v,0),p.push(0,0,1),m.push(x/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<o;v++){const x=v+c*_,b=v+c*(_+1),y=v+1+c*(_+1),E=v+1+c*_;f.push(x,b,E),f.push(b,y,E)}this.setIndex(f),this.setAttribute("position",new ki(g,3)),this.setAttribute("normal",new ki(p,3)),this.setAttribute("uv",new ki(m,2))}static fromJSON(e){return new Qr(e.width,e.height,e.widthSegments,e.heightSegments)}}var T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,E_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,C_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D_="vec3 transformed = vec3( position );",R_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,z_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,W_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,j_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,X_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",J_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,r0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,c0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,u0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,p0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,m0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,y0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,S0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,A0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,C0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,N0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,F0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,U0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,X0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,sx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ax=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,px=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,mx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,gx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,_x=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,xx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,vx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,yx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,bx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ox=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,tv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xe={alphamap_fragment:T_,alphamap_pars_fragment:E_,alphatest_fragment:A_,alphatest_pars_fragment:C_,aomap_fragment:L_,aomap_pars_fragment:P_,begin_vertex:D_,beginnormal_vertex:R_,bsdfs:I_,iridescence_fragment:z_,bumpmap_pars_fragment:O_,clipping_planes_fragment:N_,clipping_planes_pars_fragment:F_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:U_,color_fragment:B_,color_pars_fragment:V_,color_pars_vertex:G_,color_vertex:H_,common:W_,cube_uv_reflection_fragment:j_,defaultnormal_vertex:X_,displacementmap_pars_vertex:q_,displacementmap_vertex:Y_,emissivemap_fragment:$_,emissivemap_pars_fragment:K_,encodings_fragment:Z_,encodings_pars_fragment:J_,envmap_fragment:Q_,envmap_common_pars_fragment:e0,envmap_pars_fragment:t0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:p0,envmap_vertex:i0,fog_vertex:r0,fog_pars_vertex:s0,fog_fragment:o0,fog_pars_fragment:a0,gradientmap_pars_fragment:l0,lightmap_fragment:c0,lightmap_pars_fragment:u0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:d0,lights_pars_begin:f0,lights_toon_fragment:m0,lights_toon_pars_fragment:g0,lights_phong_fragment:_0,lights_phong_pars_fragment:x0,lights_physical_fragment:v0,lights_physical_pars_fragment:y0,lights_fragment_begin:b0,lights_fragment_maps:M0,lights_fragment_end:w0,logdepthbuf_fragment:S0,logdepthbuf_pars_fragment:T0,logdepthbuf_pars_vertex:E0,logdepthbuf_vertex:A0,map_fragment:C0,map_pars_fragment:L0,map_particle_fragment:P0,map_particle_pars_fragment:D0,metalnessmap_fragment:R0,metalnessmap_pars_fragment:I0,morphcolor_vertex:z0,morphnormal_vertex:O0,morphtarget_pars_vertex:N0,morphtarget_vertex:F0,normal_fragment_begin:k0,normal_fragment_maps:U0,normal_pars_fragment:B0,normal_pars_vertex:V0,normal_vertex:G0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:X0,iridescence_pars_fragment:q0,output_fragment:Y0,packing:$0,premultiplied_alpha_fragment:K0,project_vertex:Z0,dithering_fragment:J0,dithering_pars_fragment:Q0,roughnessmap_fragment:ex,roughnessmap_pars_fragment:tx,shadowmap_pars_fragment:nx,shadowmap_pars_vertex:ix,shadowmap_vertex:rx,shadowmask_pars_fragment:sx,skinbase_vertex:ox,skinning_pars_vertex:ax,skinning_vertex:lx,skinnormal_vertex:cx,specularmap_fragment:ux,specularmap_pars_fragment:hx,tonemapping_fragment:dx,tonemapping_pars_fragment:fx,transmission_fragment:px,transmission_pars_fragment:mx,uv_pars_fragment:gx,uv_pars_vertex:_x,uv_vertex:xx,uv2_pars_fragment:vx,uv2_pars_vertex:yx,uv2_vertex:bx,worldpos_vertex:Mx,background_vert:wx,background_frag:Sx,backgroundCube_vert:Tx,backgroundCube_frag:Ex,cube_vert:Ax,cube_frag:Cx,depth_vert:Lx,depth_frag:Px,distanceRGBA_vert:Dx,distanceRGBA_frag:Rx,equirect_vert:Ix,equirect_frag:zx,linedashed_vert:Ox,linedashed_frag:Nx,meshbasic_vert:Fx,meshbasic_frag:kx,meshlambert_vert:Ux,meshlambert_frag:Bx,meshmatcap_vert:Vx,meshmatcap_frag:Gx,meshnormal_vert:Hx,meshnormal_frag:Wx,meshphong_vert:jx,meshphong_frag:Xx,meshphysical_vert:qx,meshphysical_frag:Yx,meshtoon_vert:$x,meshtoon_frag:Kx,points_vert:Zx,points_frag:Jx,shadow_vert:Qx,shadow_frag:ev,sprite_vert:tv,sprite_frag:nv},fe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ln},uv2Transform:{value:new Ln},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ln}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ln}}},hi={basic:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:on([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:on([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:on([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:on([fe.points,fe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:on([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:on([fe.common,fe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:on([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:on([fe.sprite,fe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ln},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:on([fe.common,fe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:on([fe.lights,fe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};hi.physical={uniforms:on([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ra={r:0,b:0,g:0};function iv(a,e,t,n,i,r,s){const o=new Oe(0);let l=r===!0?0:1,c,u,d=null,h=0,f=null;function g(m,_){let v=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const b=a.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?p(o,l):x&&x.isColor&&(p(x,1),v=!0),(a.autoClear||v)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ll)?(u===void 0&&(u=new zt(new io(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:js(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==rt,(d!==x||h!==x.version||f!==a.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,f=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new zt(new Qr(2,2),new Xn({name:"BackgroundMaterial",uniforms:js(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,f=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(Ra,ip(a)),n.buffers.color.setClear(Ra.r,Ra.g,Ra.b,_,s)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(o,l)},render:g}}function rv(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function d(R,B,H,Z,V){let Q=!1;if(s){const L=p(Z,H,B);c!==L&&(c=L,f(c.object)),Q=_(R,Z,H,V),Q&&v(R,Z,H,V)}else{const L=B.wireframe===!0;(c.geometry!==Z.id||c.program!==H.id||c.wireframe!==L)&&(c.geometry=Z.id,c.program=H.id,c.wireframe=L,Q=!0)}V!==null&&t.update(V,34963),(Q||u)&&(u=!1,M(R,B,H,Z),V!==null&&a.bindBuffer(34963,t.get(V).buffer))}function h(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function f(R){return n.isWebGL2?a.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?a.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R,B,H){const Z=H.wireframe===!0;let V=o[R.id];V===void 0&&(V={},o[R.id]=V);let Q=V[B.id];Q===void 0&&(Q={},V[B.id]=Q);let L=Q[Z];return L===void 0&&(L=m(h()),Q[Z]=L),L}function m(R){const B=[],H=[],Z=[];for(let V=0;V<i;V++)B[V]=0,H[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:Z,object:R,attributes:{},index:null}}function _(R,B,H,Z){const V=c.attributes,Q=B.attributes;let L=0;const W=H.getAttributes();for(const q in W)if(W[q].location>=0){const te=V[q];let oe=Q[q];if(oe===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),te===void 0||te.attribute!==oe||oe&&te.data!==oe.data)return!0;L++}return c.attributesNum!==L||c.index!==Z}function v(R,B,H,Z){const V={},Q=B.attributes;let L=0;const W=H.getAttributes();for(const q in W)if(W[q].location>=0){let te=Q[q];te===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));const oe={};oe.attribute=te,te&&te.data&&(oe.data=te.data),V[q]=oe,L++}c.attributes=V,c.attributesNum=L,c.index=Z}function x(){const R=c.newAttributes;for(let B=0,H=R.length;B<H;B++)R[B]=0}function b(R){y(R,0)}function y(R,B){const H=c.newAttributes,Z=c.enabledAttributes,V=c.attributeDivisors;H[R]=1,Z[R]===0&&(a.enableVertexAttribArray(R),Z[R]=1),V[R]!==B&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),V[R]=B)}function E(){const R=c.newAttributes,B=c.enabledAttributes;for(let H=0,Z=B.length;H<Z;H++)B[H]!==R[H]&&(a.disableVertexAttribArray(H),B[H]=0)}function A(R,B,H,Z,V,Q){n.isWebGL2===!0&&(H===5124||H===5125)?a.vertexAttribIPointer(R,B,H,V,Q):a.vertexAttribPointer(R,B,H,Z,V,Q)}function M(R,B,H,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=Z.attributes,Q=H.getAttributes(),L=B.defaultAttributeValues;for(const W in Q){const q=Q[W];if(q.location>=0){let ne=V[W];if(ne===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ne!==void 0){const te=ne.normalized,oe=ne.itemSize,j=t.get(ne);if(j===void 0)continue;const ze=j.buffer,pe=j.type,De=j.bytesPerElement;if(ne.isInterleavedBufferAttribute){const he=ne.data,ke=he.stride,me=ne.offset;if(he.isInstancedInterleavedBuffer){for(let ye=0;ye<q.locationSize;ye++)y(q.location+ye,he.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ye=0;ye<q.locationSize;ye++)b(q.location+ye);a.bindBuffer(34962,ze);for(let ye=0;ye<q.locationSize;ye++)A(q.location+ye,oe/q.locationSize,pe,te,ke*De,(me+oe/q.locationSize*ye)*De)}else{if(ne.isInstancedBufferAttribute){for(let he=0;he<q.locationSize;he++)y(q.location+he,ne.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let he=0;he<q.locationSize;he++)b(q.location+he);a.bindBuffer(34962,ze);for(let he=0;he<q.locationSize;he++)A(q.location+he,oe/q.locationSize,pe,te,oe*De,oe/q.locationSize*he*De)}}else if(L!==void 0){const te=L[W];if(te!==void 0)switch(te.length){case 2:a.vertexAttrib2fv(q.location,te);break;case 3:a.vertexAttrib3fv(q.location,te);break;case 4:a.vertexAttrib4fv(q.location,te);break;default:a.vertexAttrib1fv(q.location,te)}}}}E()}function S(){G();for(const R in o){const B=o[R];for(const H in B){const Z=B[H];for(const V in Z)g(Z[V].object),delete Z[V];delete B[H]}delete o[R]}}function D(R){if(o[R.id]===void 0)return;const B=o[R.id];for(const H in B){const Z=B[H];for(const V in Z)g(Z[V].object),delete Z[V];delete B[H]}delete o[R.id]}function k(R){for(const B in o){const H=o[B];if(H[R.id]===void 0)continue;const Z=H[R.id];for(const V in Z)g(Z[V].object),delete Z[V];delete H[R.id]}}function G(){z(),u=!0,c!==l&&(c=l,f(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:z,dispose:S,releaseStatesOfGeometry:D,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:b,disableUnusedAttributes:E}}function sv(a,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function o(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let h,f;if(i)h=a,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](r,c,u,d),t.update(u,r,d)}this.setMode=s,this.render=o,this.renderInstances=l}function ov(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),h=a.getParameter(35660),f=a.getParameter(3379),g=a.getParameter(34076),p=a.getParameter(34921),m=a.getParameter(36347),_=a.getParameter(36348),v=a.getParameter(36349),x=h>0,b=s||e.has("OES_texture_float"),y=x&&b,E=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:E}}function av(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Mr,o=new Ln,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,f){const g=d.length!==0||h||n!==0||i;return i=h,t=u(d,f,0),n=d.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(d,h,f){const g=d.clippingPlanes,p=d.clipIntersection,m=d.clipShadows,_=a.get(d);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,x=v*4;let b=_.clippingState||null;l.value=b,b=u(g,h,x,f);for(let y=0;y!==x;++y)b[y]=t[y];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const p=d!==null?d.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=f+p*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,b=f;x!==p;++x,b+=4)s.copy(d[x]).applyMatrix4(v,o),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function lv(a){let e=new WeakMap;function t(s,o){return o===Hc?s.mapping=Bs:o===Wc&&(s.mapping=Vs),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Hc||o===Wc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new b_(l.height/2);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ru extends rp{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,nd=[.125,.215,.35,.446,.526,.582],Er=20,fc=new Ru,id=new Oe;let pc=null;const wr=(1+Math.sqrt(5))/2,xs=1/wr,rd=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,wr,xs),new N(0,wr,-xs),new N(xs,0,wr),new N(-xs,0,wr),new N(wr,xs,0),new N(-wr,xs,0)];class sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){pc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pc),e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Ko,format:Bn,encoding:jr,depthBuffer:!1},i=od(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cv(r)),this._blurMaterial=uv(r,e,t)}return i}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,fc)}_sceneToCubeUV(e,t,n,i){const o=new cn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(id),u.toneMapping=Fi,u.autoClear=!1;const f=new Cr({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),g=new zt(new io,f);let p=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(id),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):v===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const x=this._cubeSize;Ia(i,v*x,_>2?x:0,x,x),u.setRenderTarget(i),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bs||e.mapping===Vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new zt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ia(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,fc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=rd[(i-1)%rd.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new zt(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Er-1),p=r/g,m=isFinite(r)?1+Math.floor(u*p):Er;m>Er&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const _=[];let v=0;for(let A=0;A<Er;++A){const M=A/p,S=Math.exp(-M*M/2);_.push(S),A===0?v+=S:A<m&&(v+=2*S)}for(let A=0;A<_.length;A++)_[A]=_[A]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const b=this._sizeLods[i],y=3*b*(i>x-Ts?i-x+Ts:0),E=4*(this._cubeSize-b);Ia(t,y,E,3*b,2*b),l.setRenderTarget(t),l.render(d,fc)}}function cv(a){const e=[],t=[],n=[];let i=a;const r=a-Ts+1+nd.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>a-Ts?l=nd[s-a+Ts-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,p=3,m=2,_=1,v=new Float32Array(p*g*f),x=new Float32Array(m*g*f),b=new Float32Array(_*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,M=E>2?0:-1,S=[A,M,0,A+2/3,M,0,A+2/3,M+1,0,A,M,0,A+2/3,M+1,0,A,M+1,0];v.set(S,p*g*E),x.set(h,m*g*E);const D=[E,E,E,E,E,E];b.set(D,_*g*E)}const y=new si;y.setAttribute("position",new Gt(v,p)),y.setAttribute("uv",new Gt(x,m)),y.setAttribute("faceIndex",new Gt(b,_)),e.push(y),i>Ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function od(a,e,t){const n=new Xr(a,e,t);return n.texture.mapping=Ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function uv(a,e,t){const n=new Float32Array(Er),i=new N(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function ad(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function ld(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hv(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Hc||l===Wc,u=l===Bs||l===Vs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new sd(a)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new sd(a));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function dv(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fv(a,e,t,n){const i={},r=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete i[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const f=d.morphAttributes;for(const g in f){const p=f[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let p=0;if(f!==null){const v=f.array;p=f.version;for(let x=0,b=v.length;x<b;x+=3){const y=v[x+0],E=v[x+1],A=v[x+2];h.push(y,E,E,A,A,y)}}else{const v=g.array;p=g.version;for(let x=0,b=v.length/3-1;x<b;x+=3){const y=x+0,E=x+1,A=x+2;h.push(y,E,E,A,A,y)}}const m=new(Kf(h)?np:tp)(h,1);m.version=p;const _=r.get(d);_&&e.remove(_),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function pv(a,e,t,n){const i=n.isWebGL2;let r;function s(h){r=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,f){a.drawElements(r,f,o,h*l),t.update(f,r,1)}function d(h,f,g){if(g===0)return;let p,m;if(i)p=a,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,f,o,h*l,g),t.update(f,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=d}function mv(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function gv(a,e){return a[0]-e[0]}function _v(a,e){return Math.abs(e[1])-Math.abs(a[1])}function xv(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==m){let H=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",H)};var g=H;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let D=0;b===!0&&(D=1),y===!0&&(D=2),E===!0&&(D=3);let k=u.attributes.position.count*D,G=1;k>e.maxTextureSize&&(G=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const z=new Float32Array(k*G*4*m),R=new ep(z,k,G,m);R.type=Ji,R.needsUpdate=!0;const B=D*4;for(let Z=0;Z<m;Z++){const V=A[Z],Q=M[Z],L=S[Z],W=k*G*4*Z;for(let q=0;q<V.count;q++){const ne=q*B;b===!0&&(s.fromBufferAttribute(V,q),z[W+ne+0]=s.x,z[W+ne+1]=s.y,z[W+ne+2]=s.z,z[W+ne+3]=0),y===!0&&(s.fromBufferAttribute(Q,q),z[W+ne+4]=s.x,z[W+ne+5]=s.y,z[W+ne+6]=s.z,z[W+ne+7]=0),E===!0&&(s.fromBufferAttribute(L,q),z[W+ne+8]=s.x,z[W+ne+9]=s.y,z[W+ne+10]=s.z,z[W+ne+11]=L.itemSize===4?s.w:1)}}_={count:m,texture:R,size:new Ne(k,G)},r.set(u,_),u.addEventListener("dispose",H)}let v=0;for(let b=0;b<f.length;b++)v+=f[b];const x=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(a,"morphTargetBaseInfluence",x),h.getUniforms().setValue(a,"morphTargetInfluences",f),h.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const p=f===void 0?0:f.length;let m=n[u.id];if(m===void 0||m.length!==p){m=[];for(let y=0;y<p;y++)m[y]=[y,0];n[u.id]=m}for(let y=0;y<p;y++){const E=m[y];E[0]=y,E[1]=f[y]}m.sort(_v);for(let y=0;y<8;y++)y<p&&m[y][1]?(o[y][0]=m[y][0],o[y][1]=m[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(gv);const _=u.morphAttributes.position,v=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const E=o[y],A=E[0],M=E[1];A!==Number.MAX_SAFE_INTEGER&&M?(_&&u.getAttribute("morphTarget"+y)!==_[A]&&u.setAttribute("morphTarget"+y,_[A]),v&&u.getAttribute("morphNormal"+y)!==v[A]&&u.setAttribute("morphNormal"+y,v[A]),i[y]=M,x+=M):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),v&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const b=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(a,"morphTargetBaseInfluence",b),h.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function vv(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const op=new Yt,ap=new ep,lp=new s_,cp=new Du,cd=[],ud=[],hd=new Float32Array(16),dd=new Float32Array(9),fd=new Float32Array(4);function ro(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=cd[i];if(r===void 0&&(r=new Float32Array(i),cd[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Ot(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Nt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Rl(a,e){let t=ud[e];t===void 0&&(t=new Int32Array(e),ud[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function yv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function bv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;a.uniform2fv(this.addr,e),Nt(t,e)}}function Mv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;a.uniform3fv(this.addr,e),Nt(t,e)}}function wv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;a.uniform4fv(this.addr,e),Nt(t,e)}}function Sv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ot(t,n))return;fd.set(n),a.uniformMatrix2fv(this.addr,!1,fd),Nt(t,n)}}function Tv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ot(t,n))return;dd.set(n),a.uniformMatrix3fv(this.addr,!1,dd),Nt(t,n)}}function Ev(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ot(t,n))return;hd.set(n),a.uniformMatrix4fv(this.addr,!1,hd),Nt(t,n)}}function Av(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Cv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;a.uniform2iv(this.addr,e),Nt(t,e)}}function Lv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;a.uniform3iv(this.addr,e),Nt(t,e)}}function Pv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;a.uniform4iv(this.addr,e),Nt(t,e)}}function Dv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Rv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;a.uniform2uiv(this.addr,e),Nt(t,e)}}function Iv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;a.uniform3uiv(this.addr,e),Nt(t,e)}}function zv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;a.uniform4uiv(this.addr,e),Nt(t,e)}}function Ov(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||op,i)}function Nv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lp,i)}function Fv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||cp,i)}function kv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ap,i)}function Uv(a){switch(a){case 5126:return yv;case 35664:return bv;case 35665:return Mv;case 35666:return wv;case 35674:return Sv;case 35675:return Tv;case 35676:return Ev;case 5124:case 35670:return Av;case 35667:case 35671:return Cv;case 35668:case 35672:return Lv;case 35669:case 35673:return Pv;case 5125:return Dv;case 36294:return Rv;case 36295:return Iv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return kv}}function Bv(a,e){a.uniform1fv(this.addr,e)}function Vv(a,e){const t=ro(e,this.size,2);a.uniform2fv(this.addr,t)}function Gv(a,e){const t=ro(e,this.size,3);a.uniform3fv(this.addr,t)}function Hv(a,e){const t=ro(e,this.size,4);a.uniform4fv(this.addr,t)}function Wv(a,e){const t=ro(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function jv(a,e){const t=ro(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Xv(a,e){const t=ro(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function qv(a,e){a.uniform1iv(this.addr,e)}function Yv(a,e){a.uniform2iv(this.addr,e)}function $v(a,e){a.uniform3iv(this.addr,e)}function Kv(a,e){a.uniform4iv(this.addr,e)}function Zv(a,e){a.uniform1uiv(this.addr,e)}function Jv(a,e){a.uniform2uiv(this.addr,e)}function Qv(a,e){a.uniform3uiv(this.addr,e)}function ey(a,e){a.uniform4uiv(this.addr,e)}function ty(a,e,t){const n=this.cache,i=e.length,r=Rl(t,i);Ot(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||op,r[s])}function ny(a,e,t){const n=this.cache,i=e.length,r=Rl(t,i);Ot(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||lp,r[s])}function iy(a,e,t){const n=this.cache,i=e.length,r=Rl(t,i);Ot(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||cp,r[s])}function ry(a,e,t){const n=this.cache,i=e.length,r=Rl(t,i);Ot(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||ap,r[s])}function sy(a){switch(a){case 5126:return Bv;case 35664:return Vv;case 35665:return Gv;case 35666:return Hv;case 35674:return Wv;case 35675:return jv;case 35676:return Xv;case 5124:case 35670:return qv;case 35667:case 35671:return Yv;case 35668:case 35672:return $v;case 35669:case 35673:return Kv;case 5125:return Zv;case 36294:return Jv;case 36295:return Qv;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return ry}}class oy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Uv(t.type)}}class ay{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=sy(t.type)}}class ly{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const mc=/(\w+)(\])?(\[|\.)?/g;function pd(a,e){a.seq.push(e),a.map[e.id]=e}function cy(a,e,t){const n=a.name,i=n.length;for(mc.lastIndex=0;;){const r=mc.exec(n),s=mc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){pd(t,c===void 0?new oy(o,a,e):new ay(o,a,e));break}else{let d=t.map[o];d===void 0&&(d=new ly(o),pd(t,d)),t=d}}}class el{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);cy(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function md(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let uy=0;function hy(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function dy(a){switch(a){case jr:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function gd(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+hy(a.getShaderSource(e),s)}else return i}function fy(a,e){const t=dy(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function py(a,e){let t;switch(e){case vg:t="Linear";break;case yg:t="Reinhard";break;case bg:t="OptimizedCineon";break;case Hf:t="ACESFilmic";break;case Mg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function my(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Eo).join(`
`)}function gy(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _y(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function Eo(a){return a!==""}function _d(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(a){return a.replace(xy,vy)}function vy(a,e){const t=Xe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return $c(t)}const yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(a){return a.replace(yy,by)}function by(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yd(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function My(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===To&&(e="SHADOWMAP_TYPE_VSM"),e}function wy(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Bs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sy(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function Ty(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Gf:e="ENVMAP_BLENDING_MULTIPLY";break;case _g:e="ENVMAP_BLENDING_MIX";break;case xg:e="ENVMAP_BLENDING_ADD";break}return e}function Ey(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ay(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=My(t),c=wy(t),u=Sy(t),d=Ty(t),h=Ey(t),f=t.isWebGL2?"":my(t),g=gy(r),p=i.createProgram();let m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Eo).join(`
`),m.length>0&&(m+=`
`),_=[f,g].filter(Eo).join(`
`),_.length>0&&(_+=`
`)):(m=[yd(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),_=[f,yd(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Fi?py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.encodings_pars_fragment,fy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),s=$c(s),s=_d(s,t),s=xd(s,t),o=$c(o),o=_d(o,t),o=xd(o,t),s=vd(s),o=vd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=v+m+s,b=v+_+o,y=md(i,35633,x),E=md(i,35632,b);if(i.attachShader(p,y),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const S=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(y).trim(),k=i.getShaderInfoLog(E).trim();let G=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){G=!1;const R=gd(i,y,"vertex"),B=gd(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+S+`
`+R+`
`+B)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(D===""||k==="")&&(z=!1);z&&(this.diagnostics={runnable:G,programLog:S,vertexShader:{log:D,prefix:m},fragmentShader:{log:k,prefix:_}})}i.deleteShader(y),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new el(i,p)),A};let M;return this.getAttributes=function(){return M===void 0&&(M=_y(i,p)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=uy++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=E,this}let Cy=0;class Ly{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Py(e),t.set(e,n)),n}}class Py{constructor(e){this.id=Cy++,this.code=e,this.usedTimes=0}}function Dy(a,e,t,n,i,r,s){const o=new Pu,l=new Ly,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,S,D,k,G){const z=k.fog,R=G.geometry,B=M.isMeshStandardMaterial?k.environment:null,H=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),Z=H&&H.mapping===Ll?H.image.height:null,V=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,L=Q!==void 0?Q.length:0;let W=0;R.morphAttributes.position!==void 0&&(W=1),R.morphAttributes.normal!==void 0&&(W=2),R.morphAttributes.color!==void 0&&(W=3);let q,ne,te,oe;if(V){const ke=hi[V];q=ke.vertexShader,ne=ke.fragmentShader}else q=M.vertexShader,ne=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),oe=l.getFragmentShaderID(M);const j=a.getRenderTarget(),ze=M.alphaTest>0,pe=M.clearcoat>0,De=M.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:M.type,vertexShader:q,fragmentShader:ne,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:h,outputEncoding:j===null?a.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:jr,map:!!M.map,matcap:!!M.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:Z,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Gg,tangentSpaceNormalMap:M.normalMapType===Yf,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===rt,clearcoat:pe,clearcoatMap:pe&&!!M.clearcoatMap,clearcoatRoughnessMap:pe&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!M.clearcoatNormalMap,iridescence:De,iridescenceMap:De&&!!M.iridescenceMap,iridescenceThicknessMap:De&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Ps,alphaMap:!!M.alphaMap,alphaTest:ze,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!R.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!z,useFog:M.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:W,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:M.toneMapped?a.toneMapping:Fi,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Cl,flipSided:M.side===Wn,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(S,M),v(S,M),S.push(a.outputEncoding)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputEncoding),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.combine),M.push(S.vertexUvs),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.iridescence&&o.enable(18),S.iridescenceMap&&o.enable(19),S.iridescenceThicknessMap&&o.enable(20),S.displacementMap&&o.enable(21),S.specularMap&&o.enable(22),S.roughnessMap&&o.enable(23),S.metalnessMap&&o.enable(24),S.gradientMap&&o.enable(25),S.alphaMap&&o.enable(26),S.alphaTest&&o.enable(27),S.vertexColors&&o.enable(28),S.vertexAlphas&&o.enable(29),S.vertexUvs&&o.enable(30),S.vertexTangents&&o.enable(31),S.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.physicallyCorrectLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.specularIntensityMap&&o.enable(15),S.specularColorMap&&o.enable(16),S.transmission&&o.enable(17),S.transmissionMap&&o.enable(18),S.thicknessMap&&o.enable(19),S.sheen&&o.enable(20),S.sheenColorMap&&o.enable(21),S.sheenRoughnessMap&&o.enable(22),S.decodeVideoTexture&&o.enable(23),S.opaque&&o.enable(24),M.push(o.mask)}function x(M){const S=g[M.type];let D;if(S){const k=hi[S];D=__.clone(k.uniforms)}else D=M.uniforms;return D}function b(M,S){let D;for(let k=0,G=c.length;k<G;k++){const z=c[k];if(z.cacheKey===S){D=z,++D.usedTimes;break}}return D===void 0&&(D=new Ay(a,S,M,r),c.push(D)),D}function y(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:b,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:A}}function Ry(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function n(r,s,o){a.get(r)[s]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Iy(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function bd(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Md(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(d,h,f,g,p,m){let _=a[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:p,group:m},a[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=f,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=p,_.group=m),e++,_}function o(d,h,f,g,p,m){const _=s(d,h,f,g,p,m);f.transmission>0?n.push(_):f.transparent===!0?i.push(_):t.push(_)}function l(d,h,f,g,p,m){const _=s(d,h,f,g,p,m);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):t.unshift(_)}function c(d,h){t.length>1&&t.sort(d||Iy),n.length>1&&n.sort(h||bd),i.length>1&&i.sort(h||bd)}function u(){for(let d=e,h=a.length;d<h;d++){const f=a[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function zy(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new Md,a.set(n,[s])):i>=r.length?(s=new Md,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Oy(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Oe};break;case"SpotLight":t={position:new N,direction:new N,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new N,halfWidth:new N,halfHeight:new N};break}return a[e.id]=t,t}}}function Ny(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Fy=0;function ky(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Uy(a,e){const t=new Oy,n=Ny(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,s=new $e,o=new $e;function l(u,d){let h=0,f=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,m=0,_=0,v=0,x=0,b=0,y=0,E=0,A=0,M=0;u.sort(ky);const S=d!==!0?Math.PI:1;for(let k=0,G=u.length;k<G;k++){const z=u[k],R=z.color,B=z.intensity,H=z.distance,Z=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=R.r*B*S,f+=R.g*B*S,g+=R.b*B*S;else if(z.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(z.sh.coefficients[V],B);else if(z.isDirectionalLight){const V=t.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity*S),z.castShadow){const Q=z.shadow,L=n.get(z);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=z.shadow.matrix,b++}i.directional[p]=V,p++}else if(z.isSpotLight){const V=t.get(z);V.position.setFromMatrixPosition(z.matrixWorld),V.color.copy(R).multiplyScalar(B*S),V.distance=H,V.coneCos=Math.cos(z.angle),V.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),V.decay=z.decay,i.spot[_]=V;const Q=z.shadow;if(z.map&&(i.spotLightMap[A]=z.map,A++,Q.updateMatrices(z),z.castShadow&&M++),i.spotLightMatrix[_]=Q.matrix,z.castShadow){const L=n.get(z);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=Z,E++}_++}else if(z.isRectAreaLight){const V=t.get(z);V.color.copy(R).multiplyScalar(B),V.halfWidth.set(z.width*.5,0,0),V.halfHeight.set(0,z.height*.5,0),i.rectArea[v]=V,v++}else if(z.isPointLight){const V=t.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity*S),V.distance=z.distance,V.decay=z.decay,z.castShadow){const Q=z.shadow,L=n.get(z);L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=z.shadow.matrix,y++}i.point[m]=V,m++}else if(z.isHemisphereLight){const V=t.get(z);V.skyColor.copy(z.color).multiplyScalar(B*S),V.groundColor.copy(z.groundColor).multiplyScalar(B*S),i.hemi[x]=V,x++}}v>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==v||D.hemiLength!==x||D.numDirectionalShadows!==b||D.numPointShadows!==y||D.numSpotShadows!==E||D.numSpotMaps!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+A-M,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=M,D.directionalLength=p,D.pointLength=m,D.spotLength=_,D.rectAreaLength=v,D.hemiLength=x,D.numDirectionalShadows=b,D.numPointShadows=y,D.numSpotShadows=E,D.numSpotMaps=A,i.version=Fy++)}function c(u,d){let h=0,f=0,g=0,p=0,m=0;const _=d.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const b=u[v];if(b.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),h++}else if(b.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),o.identity(),s.copy(b.matrixWorld),s.premultiply(_),o.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),f++}else if(b.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function wd(a,e){const t=new Uy(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function By(a,e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new wd(a,e),t.set(r,[l])):s>=o.length?(l=new wd(a,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Vy extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gy extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jy(a,e,t){let n=new Dl;const i=new Ne,r=new Ne,s=new dt,o=new Vy({depthPacking:Vg}),l=new Gy,c={},u=t.maxTextureSize,d={0:Wn,1:cr,2:Cl},h=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Hy,fragmentShader:Wy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new si;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new zt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kf,this.render=function(b,y,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const A=a.getRenderTarget(),M=a.getActiveCubeFace(),S=a.getActiveMipmapLevel(),D=a.state;D.setBlending(sr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let k=0,G=b.length;k<G;k++){const z=b[k],R=z.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const B=R.getFrameExtents();if(i.multiply(B),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,R.mapSize.y=r.y)),R.map===null){const Z=this.type!==To?{minFilter:Vt,magFilter:Vt}:{};R.map=new Xr(i.x,i.y,Z),R.map.texture.name=z.name+".shadowMap",R.camera.updateProjectionMatrix()}a.setRenderTarget(R.map),a.clear();const H=R.getViewportCount();for(let Z=0;Z<H;Z++){const V=R.getViewport(Z);s.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),D.viewport(s),R.updateMatrices(z,Z),n=R.getFrustum(),x(y,E,R.camera,z,this.type)}R.isPointLightShadow!==!0&&this.type===To&&_(R,E),R.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(A,M,S)};function _(b,y){const E=e.update(p);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Xr(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,a.setRenderTarget(b.mapPass),a.clear(),a.renderBufferDirect(y,null,E,h,p,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,a.setRenderTarget(b.map),a.clear(),a.renderBufferDirect(y,null,E,f,p,null)}function v(b,y,E,A,M,S){let D=null;const k=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(k!==void 0)D=k;else if(D=E.isPointLight===!0?l:o,a.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const G=D.uuid,z=y.uuid;let R=c[G];R===void 0&&(R={},c[G]=R);let B=R[z];B===void 0&&(B=D.clone(),R[z]=B),D=B}return D.visible=y.visible,D.wireframe=y.wireframe,S===To?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:d[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaTest,D.map=y.map,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,E.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(E.matrixWorld),D.nearDistance=A,D.farDistance=M),D}function x(b,y,E,A,M){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===To)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const k=e.update(b),G=b.material;if(Array.isArray(G)){const z=k.groups;for(let R=0,B=z.length;R<B;R++){const H=z[R],Z=G[H.materialIndex];if(Z&&Z.visible){const V=v(b,Z,A,E.near,E.far,M);a.renderBufferDirect(E,null,k,V,b,H)}}}else if(G.visible){const z=v(b,G,A,E.near,E.far,M);a.renderBufferDirect(E,null,k,z,b,null)}}const D=b.children;for(let k=0,G=D.length;k<G;k++)x(D[k],y,E,A,M)}}function Xy(a,e,t){const n=t.isWebGL2;function i(){let I=!1;const $=new dt;let ie=null;const de=new dt(0,0,0,0);return{setMask:function(we){ie!==we&&!I&&(a.colorMask(we,we,we,we),ie=we)},setLocked:function(we){I=we},setClear:function(we,Ke,lt,bt,Ge){Ge===!0&&(we*=bt,Ke*=bt,lt*=bt),$.set(we,Ke,lt,bt),de.equals($)===!1&&(a.clearColor(we,Ke,lt,bt),de.copy($))},reset:function(){I=!1,ie=null,de.set(-1,0,0,0)}}}function r(){let I=!1,$=null,ie=null,de=null;return{setTest:function(we){we?ze(2929):pe(2929)},setMask:function(we){$!==we&&!I&&(a.depthMask(we),$=we)},setFunc:function(we){if(ie!==we){switch(we){case ug:a.depthFunc(512);break;case hg:a.depthFunc(519);break;case dg:a.depthFunc(513);break;case Gc:a.depthFunc(515);break;case fg:a.depthFunc(514);break;case pg:a.depthFunc(518);break;case mg:a.depthFunc(516);break;case gg:a.depthFunc(517);break;default:a.depthFunc(515)}ie=we}},setLocked:function(we){I=we},setClear:function(we){de!==we&&(a.clearDepth(we),de=we)},reset:function(){I=!1,$=null,ie=null,de=null}}}function s(){let I=!1,$=null,ie=null,de=null,we=null,Ke=null,lt=null,bt=null,Ge=null;return{setTest:function(ce){I||(ce?ze(2960):pe(2960))},setMask:function(ce){$!==ce&&!I&&(a.stencilMask(ce),$=ce)},setFunc:function(ce,se,Se){(ie!==ce||de!==se||we!==Se)&&(a.stencilFunc(ce,se,Se),ie=ce,de=se,we=Se)},setOp:function(ce,se,Se){(Ke!==ce||lt!==se||bt!==Se)&&(a.stencilOp(ce,se,Se),Ke=ce,lt=se,bt=Se)},setLocked:function(ce){I=ce},setClear:function(ce){Ge!==ce&&(a.clearStencil(ce),Ge=ce)},reset:function(){I=!1,$=null,ie=null,de=null,we=null,Ke=null,lt=null,bt=null,Ge=null}}}const o=new i,l=new r,c=new s,u=new WeakMap,d=new WeakMap;let h={},f={},g=new WeakMap,p=[],m=null,_=!1,v=null,x=null,b=null,y=null,E=null,A=null,M=null,S=!1,D=null,k=null,G=null,z=null,R=null;const B=a.getParameter(35661);let H=!1,Z=0;const V=a.getParameter(7938);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Z>=2);let Q=null,L={};const W=a.getParameter(3088),q=a.getParameter(2978),ne=new dt().fromArray(W),te=new dt().fromArray(q);function oe(I,$,ie){const de=new Uint8Array(4),we=a.createTexture();a.bindTexture(I,we),a.texParameteri(I,10241,9728),a.texParameteri(I,10240,9728);for(let Ke=0;Ke<ie;Ke++)a.texImage2D($+Ke,0,6408,1,1,0,6408,5121,de);return we}const j={};j[3553]=oe(3553,3553,1),j[34067]=oe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ze(2929),l.setFunc(Gc),Je(!1),X(mh),ze(2884),it(sr);function ze(I){h[I]!==!0&&(a.enable(I),h[I]=!0)}function pe(I){h[I]!==!1&&(a.disable(I),h[I]=!1)}function De(I,$){return f[I]!==$?(a.bindFramebuffer(I,$),f[I]=$,n&&(I===36009&&(f[36160]=$),I===36160&&(f[36009]=$)),!0):!1}function he(I,$){let ie=p,de=!1;if(I)if(ie=g.get($),ie===void 0&&(ie=[],g.set($,ie)),I.isWebGLMultipleRenderTargets){const we=I.texture;if(ie.length!==we.length||ie[0]!==36064){for(let Ke=0,lt=we.length;Ke<lt;Ke++)ie[Ke]=36064+Ke;ie.length=we.length,de=!0}}else ie[0]!==36064&&(ie[0]=36064,de=!0);else ie[0]!==1029&&(ie[0]=1029,de=!0);de&&(t.isWebGL2?a.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function ke(I){return m!==I?(a.useProgram(I),m=I,!0):!1}const me={[Ms]:32774,[Qm]:32778,[eg]:32779};if(n)me[xh]=32775,me[vh]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(me[xh]=I.MIN_EXT,me[vh]=I.MAX_EXT)}const ye={[tg]:0,[ng]:1,[ig]:768,[Bf]:770,[cg]:776,[ag]:774,[sg]:772,[rg]:769,[Vf]:771,[lg]:775,[og]:773};function it(I,$,ie,de,we,Ke,lt,bt){if(I===sr){_===!0&&(pe(3042),_=!1);return}if(_===!1&&(ze(3042),_=!0),I!==Jm){if(I!==v||bt!==S){if((x!==Ms||E!==Ms)&&(a.blendEquation(32774),x=Ms,E=Ms),bt)switch(I){case Ps:a.blendFuncSeparate(1,771,1,771);break;case Vc:a.blendFunc(1,1);break;case gh:a.blendFuncSeparate(0,769,0,1);break;case _h:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ps:a.blendFuncSeparate(770,771,1,771);break;case Vc:a.blendFunc(770,1);break;case gh:a.blendFuncSeparate(0,769,0,1);break;case _h:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,y=null,A=null,M=null,v=I,S=bt}return}we=we||$,Ke=Ke||ie,lt=lt||de,($!==x||we!==E)&&(a.blendEquationSeparate(me[$],me[we]),x=$,E=we),(ie!==b||de!==y||Ke!==A||lt!==M)&&(a.blendFuncSeparate(ye[ie],ye[de],ye[Ke],ye[lt]),b=ie,y=de,A=Ke,M=lt),v=I,S=!1}function ot(I,$){I.side===Cl?pe(2884):ze(2884);let ie=I.side===Wn;$&&(ie=!ie),Je(ie),I.blending===Ps&&I.transparent===!1?it(sr):it(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const de=I.stencilWrite;c.setTest(de),de&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ze(32926):pe(32926)}function Je(I){D!==I&&(I?a.frontFace(2304):a.frontFace(2305),D=I)}function X(I){I!==Km?(ze(2884),I!==k&&(I===mh?a.cullFace(1029):I===Zm?a.cullFace(1028):a.cullFace(1032))):pe(2884),k=I}function st(I){I!==G&&(H&&a.lineWidth(I),G=I)}function Re(I,$,ie){I?(ze(32823),(z!==$||R!==ie)&&(a.polygonOffset($,ie),z=$,R=ie)):pe(32823)}function St(I){I?ze(3089):pe(3089)}function gt(I){I===void 0&&(I=33984+B-1),Q!==I&&(a.activeTexture(I),Q=I)}function C(I,$,ie){ie===void 0&&(Q===null?ie=33984+B-1:ie=Q);let de=L[ie];de===void 0&&(de={type:void 0,texture:void 0},L[ie]=de),(de.type!==I||de.texture!==$)&&(Q!==ie&&(a.activeTexture(ie),Q=ie),a.bindTexture(I,$||j[I]),de.type=I,de.texture=$)}function w(){const I=L[Q];I!==void 0&&I.type!==void 0&&(a.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{a.compressedTexImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{a.compressedTexImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{a.texSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{a.texSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{a.texStorage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{a.texStorage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{a.texImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{a.texImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(I){ne.equals(I)===!1&&(a.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function ve(I){te.equals(I)===!1&&(a.viewport(I.x,I.y,I.z,I.w),te.copy(I))}function Be(I,$){let ie=d.get($);ie===void 0&&(ie=new WeakMap,d.set($,ie));let de=ie.get(I);de===void 0&&(de=a.getUniformBlockIndex($,I.name),ie.set(I,de))}function _e(I,$){const de=d.get($).get(I);u.get($)!==de&&(a.uniformBlockBinding($,de,I.__bindingPointIndex),u.set($,de))}function qe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},Q=null,L={},f={},g=new WeakMap,p=[],m=null,_=!1,v=null,x=null,b=null,y=null,E=null,A=null,M=null,S=!1,D=null,k=null,G=null,z=null,R=null,ne.set(0,0,a.canvas.width,a.canvas.height),te.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ze,disable:pe,bindFramebuffer:De,drawBuffers:he,useProgram:ke,setBlending:it,setMaterial:ot,setFlipSided:Je,setCullFace:X,setLineWidth:st,setPolygonOffset:Re,setScissorTest:St,activeTexture:gt,bindTexture:C,unbindTexture:w,compressedTexImage2D:J,compressedTexImage3D:re,texImage2D:ge,texImage3D:ue,updateUBOMapping:Be,uniformBlockBinding:_e,texStorage2D:F,texStorage3D:le,texSubImage2D:ee,texSubImage3D:ae,compressedTexSubImage2D:be,compressedTexSubImage3D:P,scissor:Me,viewport:ve,reset:qe}}function qy(a,e,t,n,i,r,s){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,w){return _?new OffscreenCanvas(C,w):ea("canvas")}function x(C,w,J,re){let ee=1;if((C.width>re||C.height>re)&&(ee=re/Math.max(C.width,C.height)),ee<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ae=w?ml:Math.floor,be=ae(ee*C.width),P=ae(ee*C.height);p===void 0&&(p=v(be,P));const F=J?v(be,P):p;return F.width=be,F.height=P,F.getContext("2d").drawImage(C,0,0,be,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+be+"x"+P+")."),F}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function b(C){return Yc(C.width)&&Yc(C.height)}function y(C){return o?!1:C.wrapS!==Un||C.wrapT!==Un||C.minFilter!==Vt&&C.minFilter!==mn}function E(C,w){return C.generateMipmaps&&w&&C.minFilter!==Vt&&C.minFilter!==mn}function A(C){a.generateMipmap(C)}function M(C,w,J,re,ee=!1){if(o===!1)return w;if(C!==null){if(a[C]!==void 0)return a[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=w;return w===6403&&(J===5126&&(ae=33326),J===5131&&(ae=33325),J===5121&&(ae=33321)),w===33319&&(J===5126&&(ae=33328),J===5131&&(ae=33327),J===5121&&(ae=33323)),w===6408&&(J===5126&&(ae=34836),J===5131&&(ae=34842),J===5121&&(ae=re===rt&&ee===!1?35907:32856),J===32819&&(ae=32854),J===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function S(C,w,J){return E(C,J)===!0||C.isFramebufferTexture&&C.minFilter!==Vt&&C.minFilter!==mn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function D(C){return C===Vt||C===jc||C===Ja?9728:9729}function k(C){const w=C.target;w.removeEventListener("dispose",k),z(w),w.isVideoTexture&&g.delete(w)}function G(C){const w=C.target;w.removeEventListener("dispose",G),B(w)}function z(C){const w=n.get(C);if(w.__webglInit===void 0)return;const J=C.source,re=m.get(J);if(re){const ee=re[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(C),Object.keys(re).length===0&&m.delete(J)}n.remove(C)}function R(C){const w=n.get(C);a.deleteTexture(w.__webglTexture);const J=C.source,re=m.get(J);delete re[w.__cacheKey],s.memory.textures--}function B(C){const w=C.texture,J=n.get(C),re=n.get(w);if(re.__webglTexture!==void 0&&(a.deleteTexture(re.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)a.deleteFramebuffer(J.__webglFramebuffer[ee]),J.__webglDepthbuffer&&a.deleteRenderbuffer(J.__webglDepthbuffer[ee]);else{if(a.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&a.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&a.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ee=0;ee<J.__webglColorRenderbuffer.length;ee++)J.__webglColorRenderbuffer[ee]&&a.deleteRenderbuffer(J.__webglColorRenderbuffer[ee]);J.__webglDepthRenderbuffer&&a.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,ae=w.length;ee<ae;ee++){const be=n.get(w[ee]);be.__webglTexture&&(a.deleteTexture(be.__webglTexture),s.memory.textures--),n.remove(w[ee])}n.remove(w),n.remove(C)}let H=0;function Z(){H=0}function V(){const C=H;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),H+=1,C}function Q(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function L(C,w){const J=n.get(C);if(C.isVideoTexture&&St(C),C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(J,C,w);return}}t.bindTexture(3553,J.__webglTexture,33984+w)}function W(C,w){const J=n.get(C);if(C.version>0&&J.__version!==C.version){pe(J,C,w);return}t.bindTexture(35866,J.__webglTexture,33984+w)}function q(C,w){const J=n.get(C);if(C.version>0&&J.__version!==C.version){pe(J,C,w);return}t.bindTexture(32879,J.__webglTexture,33984+w)}function ne(C,w){const J=n.get(C);if(C.version>0&&J.__version!==C.version){De(J,C,w);return}t.bindTexture(34067,J.__webglTexture,33984+w)}const te={[Gs]:10497,[Un]:33071,[pl]:33648},oe={[Vt]:9728,[jc]:9984,[Ja]:9986,[mn]:9729,[jf]:9985,[Hr]:9987};function j(C,w,J){if(J?(a.texParameteri(C,10242,te[w.wrapS]),a.texParameteri(C,10243,te[w.wrapT]),(C===32879||C===35866)&&a.texParameteri(C,32882,te[w.wrapR]),a.texParameteri(C,10240,oe[w.magFilter]),a.texParameteri(C,10241,oe[w.minFilter])):(a.texParameteri(C,10242,33071),a.texParameteri(C,10243,33071),(C===32879||C===35866)&&a.texParameteri(C,32882,33071),(w.wrapS!==Un||w.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(C,10240,D(w.magFilter)),a.texParameteri(C,10241,D(w.minFilter)),w.minFilter!==Vt&&w.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Vt||w.minFilter!==Ja&&w.minFilter!==Hr||w.type===Ji&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Ko&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function ze(C,w){let J=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",k));const re=w.source;let ee=m.get(re);ee===void 0&&(ee={},m.set(re,ee));const ae=Q(w);if(ae!==C.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,J=!0),ee[ae].usedTimes++;const be=ee[C.__cacheKey];be!==void 0&&(ee[C.__cacheKey].usedTimes--,be.usedTimes===0&&R(w)),C.__cacheKey=ae,C.__webglTexture=ee[ae].texture}return J}function pe(C,w,J){let re=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=35866),w.isData3DTexture&&(re=32879);const ee=ze(C,w),ae=w.source;t.bindTexture(re,C.__webglTexture,33984+J);const be=n.get(ae);if(ae.version!==be.__version||ee===!0){t.activeTexture(33984+J),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const P=y(w)&&b(w.image)===!1;let F=x(w.image,P,!1,u);F=gt(w,F);const le=b(F)||o,ge=r.convert(w.format,w.encoding);let ue=r.convert(w.type),Me=M(w.internalFormat,ge,ue,w.encoding,w.isVideoTexture);j(re,w,le);let ve;const Be=w.mipmaps,_e=o&&w.isVideoTexture!==!0,qe=be.__version===void 0||ee===!0,I=S(w,F,le);if(w.isDepthTexture)Me=6402,o?w.type===Ji?Me=36012:w.type===Ar?Me=33190:w.type===Ds?Me=35056:Me=33189:w.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ir&&Me===6402&&w.type!==Xf&&w.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ar,ue=r.convert(w.type)),w.format===Hs&&Me===6402&&(Me=34041,w.type!==Ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ds,ue=r.convert(w.type))),qe&&(_e?t.texStorage2D(3553,1,Me,F.width,F.height):t.texImage2D(3553,0,Me,F.width,F.height,0,ge,ue,null));else if(w.isDataTexture)if(Be.length>0&&le){_e&&qe&&t.texStorage2D(3553,I,Me,Be[0].width,Be[0].height);for(let $=0,ie=Be.length;$<ie;$++)ve=Be[$],_e?t.texSubImage2D(3553,$,0,0,ve.width,ve.height,ge,ue,ve.data):t.texImage2D(3553,$,Me,ve.width,ve.height,0,ge,ue,ve.data);w.generateMipmaps=!1}else _e?(qe&&t.texStorage2D(3553,I,Me,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,ge,ue,F.data)):t.texImage2D(3553,0,Me,F.width,F.height,0,ge,ue,F.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){_e&&qe&&t.texStorage3D(35866,I,Me,Be[0].width,Be[0].height,F.depth);for(let $=0,ie=Be.length;$<ie;$++)ve=Be[$],w.format!==Bn?ge!==null?_e?t.compressedTexSubImage3D(35866,$,0,0,0,ve.width,ve.height,F.depth,ge,ve.data,0,0):t.compressedTexImage3D(35866,$,Me,ve.width,ve.height,F.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage3D(35866,$,0,0,0,ve.width,ve.height,F.depth,ge,ue,ve.data):t.texImage3D(35866,$,Me,ve.width,ve.height,F.depth,0,ge,ue,ve.data)}else{_e&&qe&&t.texStorage2D(3553,I,Me,Be[0].width,Be[0].height);for(let $=0,ie=Be.length;$<ie;$++)ve=Be[$],w.format!==Bn?ge!==null?_e?t.compressedTexSubImage2D(3553,$,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(3553,$,Me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage2D(3553,$,0,0,ve.width,ve.height,ge,ue,ve.data):t.texImage2D(3553,$,Me,ve.width,ve.height,0,ge,ue,ve.data)}else if(w.isDataArrayTexture)_e?(qe&&t.texStorage3D(35866,I,Me,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,ge,ue,F.data)):t.texImage3D(35866,0,Me,F.width,F.height,F.depth,0,ge,ue,F.data);else if(w.isData3DTexture)_e?(qe&&t.texStorage3D(32879,I,Me,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,ge,ue,F.data)):t.texImage3D(32879,0,Me,F.width,F.height,F.depth,0,ge,ue,F.data);else if(w.isFramebufferTexture){if(qe)if(_e)t.texStorage2D(3553,I,Me,F.width,F.height);else{let $=F.width,ie=F.height;for(let de=0;de<I;de++)t.texImage2D(3553,de,Me,$,ie,0,ge,ue,null),$>>=1,ie>>=1}}else if(Be.length>0&&le){_e&&qe&&t.texStorage2D(3553,I,Me,Be[0].width,Be[0].height);for(let $=0,ie=Be.length;$<ie;$++)ve=Be[$],_e?t.texSubImage2D(3553,$,0,0,ge,ue,ve):t.texImage2D(3553,$,Me,ge,ue,ve);w.generateMipmaps=!1}else _e?(qe&&t.texStorage2D(3553,I,Me,F.width,F.height),t.texSubImage2D(3553,0,0,0,ge,ue,F)):t.texImage2D(3553,0,Me,ge,ue,F);E(w,le)&&A(re),be.__version=ae.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function De(C,w,J){if(w.image.length!==6)return;const re=ze(C,w),ee=w.source;t.bindTexture(34067,C.__webglTexture,33984+J);const ae=n.get(ee);if(ee.version!==ae.__version||re===!0){t.activeTexture(33984+J),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const be=w.isCompressedTexture||w.image[0].isCompressedTexture,P=w.image[0]&&w.image[0].isDataTexture,F=[];for(let $=0;$<6;$++)!be&&!P?F[$]=x(w.image[$],!1,!0,c):F[$]=P?w.image[$].image:w.image[$],F[$]=gt(w,F[$]);const le=F[0],ge=b(le)||o,ue=r.convert(w.format,w.encoding),Me=r.convert(w.type),ve=M(w.internalFormat,ue,Me,w.encoding),Be=o&&w.isVideoTexture!==!0,_e=ae.__version===void 0||re===!0;let qe=S(w,le,ge);j(34067,w,ge);let I;if(be){Be&&_e&&t.texStorage2D(34067,qe,ve,le.width,le.height);for(let $=0;$<6;$++){I=F[$].mipmaps;for(let ie=0;ie<I.length;ie++){const de=I[ie];w.format!==Bn?ue!==null?Be?t.compressedTexSubImage2D(34069+$,ie,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(34069+$,ie,ve,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(34069+$,ie,0,0,de.width,de.height,ue,Me,de.data):t.texImage2D(34069+$,ie,ve,de.width,de.height,0,ue,Me,de.data)}}}else{I=w.mipmaps,Be&&_e&&(I.length>0&&qe++,t.texStorage2D(34067,qe,ve,F[0].width,F[0].height));for(let $=0;$<6;$++)if(P){Be?t.texSubImage2D(34069+$,0,0,0,F[$].width,F[$].height,ue,Me,F[$].data):t.texImage2D(34069+$,0,ve,F[$].width,F[$].height,0,ue,Me,F[$].data);for(let ie=0;ie<I.length;ie++){const we=I[ie].image[$].image;Be?t.texSubImage2D(34069+$,ie+1,0,0,we.width,we.height,ue,Me,we.data):t.texImage2D(34069+$,ie+1,ve,we.width,we.height,0,ue,Me,we.data)}}else{Be?t.texSubImage2D(34069+$,0,0,0,ue,Me,F[$]):t.texImage2D(34069+$,0,ve,ue,Me,F[$]);for(let ie=0;ie<I.length;ie++){const de=I[ie];Be?t.texSubImage2D(34069+$,ie+1,0,0,ue,Me,de.image[$]):t.texImage2D(34069+$,ie+1,ve,ue,Me,de.image[$])}}}E(w,ge)&&A(34067),ae.__version=ee.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function he(C,w,J,re,ee){const ae=r.convert(J.format,J.encoding),be=r.convert(J.type),P=M(J.internalFormat,ae,be,J.encoding);n.get(w).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,P,w.width,w.height,w.depth,0,ae,be,null):t.texImage2D(ee,0,P,w.width,w.height,0,ae,be,null)),t.bindFramebuffer(36160,C),Re(w)?h.framebufferTexture2DMultisampleEXT(36160,re,ee,n.get(J).__webglTexture,0,st(w)):(ee===3553||ee>=34069&&ee<=34074)&&a.framebufferTexture2D(36160,re,ee,n.get(J).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(C,w,J){if(a.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let re=33189;if(J||Re(w)){const ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Ji?re=36012:ee.type===Ar&&(re=33190));const ae=st(w);Re(w)?h.renderbufferStorageMultisampleEXT(36161,ae,re,w.width,w.height):a.renderbufferStorageMultisample(36161,ae,re,w.width,w.height)}else a.renderbufferStorage(36161,re,w.width,w.height);a.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const re=st(w);J&&Re(w)===!1?a.renderbufferStorageMultisample(36161,re,35056,w.width,w.height):Re(w)?h.renderbufferStorageMultisampleEXT(36161,re,35056,w.width,w.height):a.renderbufferStorage(36161,34041,w.width,w.height),a.framebufferRenderbuffer(36160,33306,36161,C)}else{const re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0;ee<re.length;ee++){const ae=re[ee],be=r.convert(ae.format,ae.encoding),P=r.convert(ae.type),F=M(ae.internalFormat,be,P,ae.encoding),le=st(w);J&&Re(w)===!1?a.renderbufferStorageMultisample(36161,le,F,w.width,w.height):Re(w)?h.renderbufferStorageMultisampleEXT(36161,le,F,w.width,w.height):a.renderbufferStorage(36161,F,w.width,w.height)}}a.bindRenderbuffer(36161,null)}function me(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),L(w.depthTexture,0);const re=n.get(w.depthTexture).__webglTexture,ee=st(w);if(w.depthTexture.format===Ir)Re(w)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,ee):a.framebufferTexture2D(36160,36096,3553,re,0);else if(w.depthTexture.format===Hs)Re(w)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,ee):a.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function ye(C){const w=n.get(C),J=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");me(w.__webglFramebuffer,C)}else if(J){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(36160,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=a.createRenderbuffer(),ke(w.__webglDepthbuffer[re],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),ke(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function it(C,w,J){const re=n.get(C);w!==void 0&&he(re.__webglFramebuffer,C,C.texture,36064,3553),J!==void 0&&ye(C)}function ot(C){const w=C.texture,J=n.get(C),re=n.get(w);C.addEventListener("dispose",G),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=a.createTexture()),re.__version=w.version,s.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,ae=C.isWebGLMultipleRenderTargets===!0,be=b(C)||o;if(ee){J.__webglFramebuffer=[];for(let P=0;P<6;P++)J.__webglFramebuffer[P]=a.createFramebuffer()}else{if(J.__webglFramebuffer=a.createFramebuffer(),ae)if(i.drawBuffers){const P=C.texture;for(let F=0,le=P.length;F<le;F++){const ge=n.get(P[F]);ge.__webglTexture===void 0&&(ge.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Re(C)===!1){const P=ae?w:[w];J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer);for(let F=0;F<P.length;F++){const le=P[F];J.__webglColorRenderbuffer[F]=a.createRenderbuffer(),a.bindRenderbuffer(36161,J.__webglColorRenderbuffer[F]);const ge=r.convert(le.format,le.encoding),ue=r.convert(le.type),Me=M(le.internalFormat,ge,ue,le.encoding,C.isXRRenderTarget===!0),ve=st(C);a.renderbufferStorageMultisample(36161,ve,Me,C.width,C.height),a.framebufferRenderbuffer(36160,36064+F,36161,J.__webglColorRenderbuffer[F])}a.bindRenderbuffer(36161,null),C.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),ke(J.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,re.__webglTexture),j(34067,w,be);for(let P=0;P<6;P++)he(J.__webglFramebuffer[P],C,w,36064,34069+P);E(w,be)&&A(34067),t.unbindTexture()}else if(ae){const P=C.texture;for(let F=0,le=P.length;F<le;F++){const ge=P[F],ue=n.get(ge);t.bindTexture(3553,ue.__webglTexture),j(3553,ge,be),he(J.__webglFramebuffer,C,ge,36064+F,3553),E(ge,be)&&A(3553)}t.unbindTexture()}else{let P=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?P=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(P,re.__webglTexture),j(P,w,be),he(J.__webglFramebuffer,C,w,36064,P),E(w,be)&&A(P),t.unbindTexture()}C.depthBuffer&&ye(C)}function Je(C){const w=b(C)||o,J=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,ee=J.length;re<ee;re++){const ae=J[re];if(E(ae,w)){const be=C.isWebGLCubeRenderTarget?34067:3553,P=n.get(ae).__webglTexture;t.bindTexture(be,P),A(be),t.unbindTexture()}}}function X(C){if(o&&C.samples>0&&Re(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],J=C.width,re=C.height;let ee=16384;const ae=[],be=C.stencilBuffer?33306:36096,P=n.get(C),F=C.isWebGLMultipleRenderTargets===!0;if(F)for(let le=0;le<w.length;le++)t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,P.__webglFramebuffer),a.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer);for(let le=0;le<w.length;le++){ae.push(36064+le),C.depthBuffer&&ae.push(be);const ge=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(ge===!1&&(C.depthBuffer&&(ee|=256),C.stencilBuffer&&(ee|=1024)),F&&a.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[le]),ge===!0&&(a.invalidateFramebuffer(36008,[be]),a.invalidateFramebuffer(36009,[be])),F){const ue=n.get(w[le]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ue,0)}a.blitFramebuffer(0,0,J,re,0,0,J,re,ee,9728),f&&a.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let le=0;le<w.length;le++){t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+le,36161,P.__webglColorRenderbuffer[le]);const ge=n.get(w[le]).__webglTexture;t.bindFramebuffer(36160,P.__webglFramebuffer),a.framebufferTexture2D(36009,36064+le,3553,ge,0)}t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function st(C){return Math.min(d,C.samples)}function Re(C){const w=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function St(C){const w=s.render.frame;g.get(C)!==w&&(g.set(C,w),C.update())}function gt(C,w){const J=C.encoding,re=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===qc||J!==jr&&(J===rt?o===!1?e.has("EXT_sRGB")===!0&&re===Bn?(C.format=qc,C.minFilter=mn,C.generateMipmaps=!1):w=Jf.sRGBToLinear(w):(re!==Bn||ee!==Wr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",J)),w}this.allocateTextureUnit=V,this.resetTextureUnits=Z,this.setTexture2D=L,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=ne,this.rebindTextures=it,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Re}function Yy(a,e,t){const n=t.isWebGL2;function i(r,s=null){let o;if(r===Wr)return 5121;if(r===Eg)return 32819;if(r===Ag)return 32820;if(r===wg)return 5120;if(r===Sg)return 5122;if(r===Xf)return 5123;if(r===Tg)return 5124;if(r===Ar)return 5125;if(r===Ji)return 5126;if(r===Ko)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Cg)return 6406;if(r===Bn)return 6408;if(r===Pg)return 6409;if(r===Dg)return 6410;if(r===Ir)return 6402;if(r===Hs)return 34041;if(r===Lg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===qc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Rg)return 6403;if(r===Ig)return 36244;if(r===zg)return 33319;if(r===Og)return 33320;if(r===Ng)return 36249;if(r===Vl||r===Gl||r===Hl||r===Wl)if(s===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Vl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Vl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yh||r===bh||r===Mh||r===wh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===yh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Sh||r===Th)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Sh)return s===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Th)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Eh||r===Ah||r===Ch||r===Lh||r===Ph||r===Dh||r===Rh||r===Ih||r===zh||r===Oh||r===Nh||r===Fh||r===kh||r===Uh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Eh)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ah)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ch)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lh)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ph)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dh)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rh)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ih)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zh)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oh)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nh)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fh)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kh)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Uh)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Bh)return s===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ds?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class $y extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fi extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ky={type:"move"};class gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ky)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zy extends Yt{constructor(e,t,n,i,r,s,o,l,c,u){if(u=u!==void 0?u:Ir,u!==Ir&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ir&&(n=Ar),n===void 0&&u===Hs&&(n=Ds),super(null,i,r,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1}}class Jy extends Jr{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=null,c=null,u=null,d=null,h=null,f=null;const g=t.getContextAttributes();let p=null,m=null;const _=[],v=[],x=new Set,b=new Map,y=new cn;y.layers.enable(1),y.viewport=new dt;const E=new cn;E.layers.enable(2),E.viewport=new dt;const A=[y,E],M=new $y;M.layers.enable(1),M.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=_[W];return q===void 0&&(q=new gc,_[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=_[W];return q===void 0&&(q=new gc,_[W]=q),q.getGripSpace()},this.getHand=function(W){let q=_[W];return q===void 0&&(q=new gc,_[W]=q),q.getHandSpace()};function k(W){const q=v.indexOf(W.inputSource);if(q===-1)return;const ne=_[q];ne!==void 0&&ne.dispatchEvent({type:W.type,data:W.inputSource})}function G(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",z);for(let W=0;W<_.length;W++){const q=v[W];q!==null&&(v[W]=null,_[W].disconnect(q))}S=null,D=null,e.setRenderTarget(p),h=null,d=null,u=null,i=null,m=null,L.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",G),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:h}),m=new Xr(h.framebufferWidth,h.framebufferHeight,{format:Bn,type:Wr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let q=null,ne=null,te=null;g.depth&&(te=g.stencil?35056:33190,q=g.stencil?Hs:Ir,ne=g.stencil?Ds:Ar);const oe={colorFormat:32856,depthFormat:te,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(oe),i.updateRenderState({layers:[d]}),m=new Xr(d.textureWidth,d.textureHeight,{format:Bn,type:Wr,depthTexture:new Zy(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const j=e.properties.get(m);j.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await i.requestReferenceSpace(o),L.setContext(i),L.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(W){for(let q=0;q<W.removed.length;q++){const ne=W.removed[q],te=v.indexOf(ne);te>=0&&(v[te]=null,_[te].disconnect(ne))}for(let q=0;q<W.added.length;q++){const ne=W.added[q];let te=v.indexOf(ne);if(te===-1){for(let j=0;j<_.length;j++)if(j>=v.length){v.push(ne),te=j;break}else if(v[j]===null){v[j]=ne,te=j;break}if(te===-1)break}const oe=_[te];oe&&oe.connect(ne)}}const R=new N,B=new N;function H(W,q,ne){R.setFromMatrixPosition(q.matrixWorld),B.setFromMatrixPosition(ne.matrixWorld);const te=R.distanceTo(B),oe=q.projectionMatrix.elements,j=ne.projectionMatrix.elements,ze=oe[14]/(oe[10]-1),pe=oe[14]/(oe[10]+1),De=(oe[9]+1)/oe[5],he=(oe[9]-1)/oe[5],ke=(oe[8]-1)/oe[0],me=(j[8]+1)/j[0],ye=ze*ke,it=ze*me,ot=te/(-ke+me),Je=ot*-ke;q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Je),W.translateZ(ot),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const X=ze+ot,st=pe+ot,Re=ye-Je,St=it+(te-Je),gt=De*pe/st*X,C=he*pe/st*X;W.projectionMatrix.makePerspective(Re,St,gt,C,X,st)}function Z(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;M.near=E.near=y.near=W.near,M.far=E.far=y.far=W.far,(S!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,D=M.far);const q=W.parent,ne=M.cameras;Z(M,q);for(let oe=0;oe<ne.length;oe++)Z(ne[oe],q);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),W.matrix.copy(M.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale);const te=W.children;for(let oe=0,j=te.length;oe<j;oe++)te[oe].updateMatrixWorld(!0);ne.length===2?H(M,y,E):M.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(W){d!==null&&(d.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)},this.getPlanes=function(){return x};let V=null;function Q(W,q){if(c=q.getViewerPose(l||s),f=q,c!==null){const ne=c.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let te=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,te=!0);for(let oe=0;oe<ne.length;oe++){const j=ne[oe];let ze=null;if(h!==null)ze=h.getViewport(j);else{const De=u.getViewSubImage(d,j);ze=De.viewport,oe===0&&(e.setRenderTargetTextures(m,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(m))}let pe=A[oe];pe===void 0&&(pe=new cn,pe.layers.enable(oe),pe.viewport=new dt,A[oe]=pe),pe.matrix.fromArray(j.transform.matrix),pe.projectionMatrix.fromArray(j.projectionMatrix),pe.viewport.set(ze.x,ze.y,ze.width,ze.height),oe===0&&M.matrix.copy(pe.matrix),te===!0&&M.cameras.push(pe)}}for(let ne=0;ne<_.length;ne++){const te=v[ne],oe=_[ne];te!==null&&oe!==void 0&&oe.update(te,q,l||s)}if(V&&V(W,q),q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let ne=null;for(const te of x)q.detectedPlanes.has(te)||(ne===null&&(ne=[]),ne.push(te));if(ne!==null)for(const te of ne)x.delete(te),b.delete(te),n.dispatchEvent({type:"planeremoved",data:te});for(const te of q.detectedPlanes)if(!x.has(te))x.add(te),b.set(te,q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:te});else{const oe=b.get(te);te.lastChangedTime>oe&&(b.set(te,te.lastChangedTime),n.dispatchEvent({type:"planechanged",data:te}))}}f=null}const L=new sp;L.setAnimationLoop(Q),this.setAnimationLoop=function(W){V=W},this.dispose=function(){}}}function Qy(a,e){function t(p,m){m.color.getRGB(p.fogColor.value,ip(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,x)):m.isMeshMatcapMaterial?(i(p,m),f(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?o(p,m,_,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Wn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Wn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const b=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let v;m.map?v=m.map:m.specularMap?v=m.specularMap:m.displacementMap?v=m.displacementMap:m.normalMap?v=m.normalMap:m.bumpMap?v=m.bumpMap:m.roughnessMap?v=m.roughnessMap:m.metalnessMap?v=m.metalnessMap:m.alphaMap?v=m.alphaMap:m.emissiveMap?v=m.emissiveMap:m.clearcoatMap?v=m.clearcoatMap:m.clearcoatNormalMap?v=m.clearcoatNormalMap:m.clearcoatRoughnessMap?v=m.clearcoatRoughnessMap:m.iridescenceMap?v=m.iridescenceMap:m.iridescenceThicknessMap?v=m.iridescenceThicknessMap:m.specularIntensityMap?v=m.specularIntensityMap:m.specularColorMap?v=m.specularColorMap:m.transmissionMap?v=m.transmissionMap:m.thicknessMap?v=m.thicknessMap:m.sheenColorMap?v=m.sheenColorMap:m.sheenRoughnessMap&&(v=m.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,_,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Wn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function eb(a,e,t,n){let i={},r={},s=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(v,x){const b=x.program;n.uniformBlockBinding(v,b)}function c(v,x){let b=i[v.id];b===void 0&&(g(v),b=u(v),i[v.id]=b,v.addEventListener("dispose",m));const y=x.program;n.updateUBOMapping(v,y);const E=e.render.frame;r[v.id]!==E&&(h(v),r[v.id]=E)}function u(v){const x=d();v.__bindingPointIndex=x;const b=a.createBuffer(),y=v.__size,E=v.usage;return a.bindBuffer(35345,b),a.bufferData(35345,y,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,x,b),b}function d(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=i[v.id],b=v.uniforms,y=v.__cache;a.bindBuffer(35345,x);for(let E=0,A=b.length;E<A;E++){const M=b[E];if(f(M,E,y)===!0){const S=M.__offset,D=Array.isArray(M.value)?M.value:[M.value];let k=0;for(let G=0;G<D.length;G++){const z=D[G],R=p(z);typeof z=="number"?(M.__data[0]=z,a.bufferSubData(35345,S+k,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=z.elements[0],M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=z.elements[0],M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=z.elements[0]):(z.toArray(M.__data,k),k+=R.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,S,M.__data)}}a.bindBuffer(35345,null)}function f(v,x,b){const y=v.value;if(b[x]===void 0){if(typeof y=="number")b[x]=y;else{const E=Array.isArray(y)?y:[y],A=[];for(let M=0;M<E.length;M++)A.push(E[M].clone());b[x]=A}return!0}else if(typeof y=="number"){if(b[x]!==y)return b[x]=y,!0}else{const E=Array.isArray(b[x])?b[x]:[b[x]],A=Array.isArray(y)?y:[y];for(let M=0;M<E.length;M++){const S=E[M];if(S.equals(A[M])===!1)return S.copy(A[M]),!0}}return!1}function g(v){const x=v.uniforms;let b=0;const y=16;let E=0;for(let A=0,M=x.length;A<M;A++){const S=x[A],D={boundary:0,storage:0},k=Array.isArray(S.value)?S.value:[S.value];for(let G=0,z=k.length;G<z;G++){const R=k[G],B=p(R);D.boundary+=B.boundary,D.storage+=B.storage}if(S.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=b,A>0){E=b%y;const G=y-E;E!==0&&G-D.boundary<0&&(b+=y-E,S.__offset=b)}b+=D.storage}return E=b%y,E>0&&(b+=y-E),v.__size=b,v.__cache={},this}function p(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const b=s.indexOf(x.__bindingPointIndex);s.splice(b,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function _(){for(const v in i)a.deleteBuffer(i[v]);s=[],i={},r={}}return{bind:l,update:c,dispose:_}}function tb(){const a=ea("canvas");return a.style.display="block",a}function up(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:tb(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,s=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let d=null,h=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=jr,this.physicallyCorrectLights=!1,this.toneMapping=Fi,this.toneMappingExposure=1;const p=this;let m=!1,_=0,v=0,x=null,b=-1,y=null;const E=new dt,A=new dt;let M=null,S=e.width,D=e.height,k=1,G=null,z=null;const R=new dt(0,0,S,D),B=new dt(0,0,S,D);let H=!1;const Z=new Dl;let V=!1,Q=!1,L=null;const W=new $e,q=new Ne,ne=new N,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return x===null?k:1}let j=t;function ze(T,U){for(let K=0;K<T.length;K++){const O=T[K],Y=e.getContext(O,U);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cu}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Be,!1),j===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),j=ze(U,T),j===null)throw ze(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let pe,De,he,ke,me,ye,it,ot,Je,X,st,Re,St,gt,C,w,J,re,ee,ae,be,P,F,le;function ge(){pe=new dv(j),De=new ov(j,pe,a),pe.init(De),P=new Yy(j,pe,De),he=new Xy(j,pe,De),ke=new mv,me=new Ry,ye=new qy(j,pe,he,me,De,P,ke),it=new lv(p),ot=new hv(p),Je=new S_(j,De),F=new rv(j,pe,Je,De),X=new fv(j,Je,ke,F),st=new vv(j,X,Je,ke),ee=new xv(j,De,ye),w=new av(me),Re=new Dy(p,it,ot,pe,De,F,w),St=new Qy(p,me),gt=new zy,C=new By(pe,De),re=new iv(p,it,ot,he,st,u,s),J=new jy(p,st,De),le=new eb(j,ke,De,he),ae=new sv(j,pe,ke,De),be=new pv(j,pe,ke,De),ke.programs=Re.programs,p.capabilities=De,p.extensions=pe,p.properties=me,p.renderLists=gt,p.shadowMap=J,p.state=he,p.info=ke}ge();const ue=new Jy(p,j);this.xr=ue,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const T=pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(S,D,!1))},this.getSize=function(T){return T.set(S,D)},this.setSize=function(T,U,K){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=T,D=U,e.width=Math.floor(T*k),e.height=Math.floor(U*k),K!==!1&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(S*k,D*k).floor()},this.setDrawingBufferSize=function(T,U,K){S=T,D=U,k=K,e.width=Math.floor(T*K),e.height=Math.floor(U*K),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,U,K,O){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,U,K,O),he.viewport(E.copy(R).multiplyScalar(k).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,U,K,O){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,U,K,O),he.scissor(A.copy(B).multiplyScalar(k).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(T){he.setScissorTest(H=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(T=!0,U=!0,K=!0){let O=0;T&&(O|=16384),U&&(O|=256),K&&(O|=1024),j.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Be,!1),gt.dispose(),C.dispose(),me.dispose(),it.dispose(),ot.dispose(),st.dispose(),F.dispose(),le.dispose(),Re.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",de),ue.removeEventListener("sessionend",we),L&&(L.dispose(),L=null),Ke.stop()};function Me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const T=ke.autoReset,U=J.enabled,K=J.autoUpdate,O=J.needsUpdate,Y=J.type;ge(),ke.autoReset=T,J.enabled=U,J.autoUpdate=K,J.needsUpdate=O,J.type=Y}function Be(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _e(T){const U=T.target;U.removeEventListener("dispose",_e),qe(U)}function qe(T){I(T),me.remove(T)}function I(T){const U=me.get(T).programs;U!==void 0&&(U.forEach(function(K){Re.releaseProgram(K)}),T.isShaderMaterial&&Re.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,K,O,Y,Te){U===null&&(U=te);const xe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ee=Ue(T,U,K,O,Y);he.setMaterial(O,xe);let Ce=K.index,je=1;O.wireframe===!0&&(Ce=X.getWireframeAttribute(K),je=2);const He=K.drawRange,Pe=K.attributes.position;let Ve=He.start*je,_t=(He.start+He.count)*je;Te!==null&&(Ve=Math.max(Ve,Te.start*je),_t=Math.min(_t,(Te.start+Te.count)*je)),Ce!==null?(Ve=Math.max(Ve,0),_t=Math.min(_t,Ce.count)):Pe!=null&&(Ve=Math.max(Ve,0),_t=Math.min(_t,Pe.count));const yn=_t-Ve;if(yn<0||yn===1/0)return;F.setup(Y,O,Ee,K,Ce);let oi,ft=ae;if(Ce!==null&&(oi=Je.get(Ce),ft=be,ft.setIndex(oi)),Y.isMesh)O.wireframe===!0?(he.setLineWidth(O.wireframeLinewidth*oe()),ft.setMode(1)):ft.setMode(4);else if(Y.isLine){let Fe=O.linewidth;Fe===void 0&&(Fe=1),he.setLineWidth(Fe*oe()),Y.isLineSegments?ft.setMode(1):Y.isLineLoop?ft.setMode(2):ft.setMode(3)}else Y.isPoints?ft.setMode(0):Y.isSprite&&ft.setMode(4);if(Y.isInstancedMesh)ft.renderInstances(Ve,yn,Y.count);else if(K.isInstancedBufferGeometry){const Fe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Mi=Math.min(K.instanceCount,Fe);ft.renderInstances(Ve,yn,Mi)}else ft.render(Ve,yn)},this.compile=function(T,U){function K(O,Y,Te){O.transparent===!0&&O.side===ma?(O.side=Wn,O.needsUpdate=!0,Se(O,Y,Te),O.side=cr,O.needsUpdate=!0,Se(O,Y,Te),O.side=ma):Se(O,Y,Te)}h=C.get(T),h.init(),g.push(h),T.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights(p.physicallyCorrectLights),T.traverse(function(O){const Y=O.material;if(Y)if(Array.isArray(Y))for(let Te=0;Te<Y.length;Te++){const xe=Y[Te];K(xe,T,O)}else K(Y,T,O)}),g.pop(),h=null};let $=null;function ie(T){$&&$(T)}function de(){Ke.stop()}function we(){Ke.start()}const Ke=new sp;Ke.setAnimationLoop(ie),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(T){$=T,ue.setAnimationLoop(T),T===null?Ke.stop():Ke.start()},ue.addEventListener("sessionstart",de),ue.addEventListener("sessionend",we),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(U),U=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,U,x),h=C.get(T,g.length),h.init(),g.push(h),W.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(W),Q=this.localClippingEnabled,V=w.init(this.clippingPlanes,Q,U),d=gt.get(T,f.length),d.init(),f.push(d),lt(T,U,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(G,z),V===!0&&w.beginShadows();const K=h.state.shadowsArray;if(J.render(K,T,U),V===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(d,T),h.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const O=U.cameras;for(let Y=0,Te=O.length;Y<Te;Y++){const xe=O[Y];bt(d,T,xe,xe.viewport)}}else bt(d,T,U);x!==null&&(ye.updateMultisampleRenderTarget(x),ye.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(p,T,U),F.resetDefaultState(),b=-1,y=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function lt(T,U,K,O){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){O&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(W);const xe=st.update(T),Ee=T.material;Ee.visible&&d.push(T,xe,Ee,K,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==ke.render.frame&&(T.skeleton.update(),T.skeleton.frame=ke.render.frame),!T.frustumCulled||Z.intersectsObject(T))){O&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(W);const xe=st.update(T),Ee=T.material;if(Array.isArray(Ee)){const Ce=xe.groups;for(let je=0,He=Ce.length;je<He;je++){const Pe=Ce[je],Ve=Ee[Pe.materialIndex];Ve&&Ve.visible&&d.push(T,xe,Ve,K,ne.z,Pe)}}else Ee.visible&&d.push(T,xe,Ee,K,ne.z,null)}}const Te=T.children;for(let xe=0,Ee=Te.length;xe<Ee;xe++)lt(Te[xe],U,K,O)}function bt(T,U,K,O){const Y=T.opaque,Te=T.transmissive,xe=T.transparent;h.setupLightsView(K),Te.length>0&&Ge(Y,U,K),O&&he.viewport(E.copy(O)),Y.length>0&&ce(Y,U,K),Te.length>0&&ce(Te,U,K),xe.length>0&&ce(xe,U,K),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Ge(T,U,K){const O=De.isWebGL2;L===null&&(L=new Xr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?Ko:Wr,minFilter:Hr,samples:O&&r===!0?4:0})),p.getDrawingBufferSize(q),O?L.setSize(q.x,q.y):L.setSize(ml(q.x),ml(q.y));const Y=p.getRenderTarget();p.setRenderTarget(L),p.clear();const Te=p.toneMapping;p.toneMapping=Fi,ce(T,U,K),p.toneMapping=Te,ye.updateMultisampleRenderTarget(L),ye.updateRenderTargetMipmap(L),p.setRenderTarget(Y)}function ce(T,U,K){const O=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,Te=T.length;Y<Te;Y++){const xe=T[Y],Ee=xe.object,Ce=xe.geometry,je=O===null?xe.material:O,He=xe.group;Ee.layers.test(K.layers)&&se(Ee,U,K,Ce,je,He)}}function se(T,U,K,O,Y,Te){T.onBeforeRender(p,U,K,O,Y,Te),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(p,U,K,O,T,Te),Y.transparent===!0&&Y.side===ma?(Y.side=Wn,Y.needsUpdate=!0,p.renderBufferDirect(K,U,O,Y,T,Te),Y.side=cr,Y.needsUpdate=!0,p.renderBufferDirect(K,U,O,Y,T,Te),Y.side=ma):p.renderBufferDirect(K,U,O,Y,T,Te),T.onAfterRender(p,U,K,O,Y,Te)}function Se(T,U,K){U.isScene!==!0&&(U=te);const O=me.get(T),Y=h.state.lights,Te=h.state.shadowsArray,xe=Y.state.version,Ee=Re.getParameters(T,Y.state,Te,U,K),Ce=Re.getProgramCacheKey(Ee);let je=O.programs;O.environment=T.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(T.isMeshStandardMaterial?ot:it).get(T.envMap||O.environment),je===void 0&&(T.addEventListener("dispose",_e),je=new Map,O.programs=je);let He=je.get(Ce);if(He!==void 0){if(O.currentProgram===He&&O.lightsStateVersion===xe)return Ie(T,Ee),He}else Ee.uniforms=Re.getUniforms(T),T.onBuild(K,Ee,p),T.onBeforeCompile(Ee,p),He=Re.acquireProgram(Ee,Ce),je.set(Ce,He),O.uniforms=Ee.uniforms;const Pe=O.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=w.uniform),Ie(T,Ee),O.needsLights=We(T),O.lightsStateVersion=xe,O.needsLights&&(Pe.ambientLightColor.value=Y.state.ambient,Pe.lightProbe.value=Y.state.probe,Pe.directionalLights.value=Y.state.directional,Pe.directionalLightShadows.value=Y.state.directionalShadow,Pe.spotLights.value=Y.state.spot,Pe.spotLightShadows.value=Y.state.spotShadow,Pe.rectAreaLights.value=Y.state.rectArea,Pe.ltc_1.value=Y.state.rectAreaLTC1,Pe.ltc_2.value=Y.state.rectAreaLTC2,Pe.pointLights.value=Y.state.point,Pe.pointLightShadows.value=Y.state.pointShadow,Pe.hemisphereLights.value=Y.state.hemi,Pe.directionalShadowMap.value=Y.state.directionalShadowMap,Pe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Pe.spotShadowMap.value=Y.state.spotShadowMap,Pe.spotLightMatrix.value=Y.state.spotLightMatrix,Pe.spotLightMap.value=Y.state.spotLightMap,Pe.pointShadowMap.value=Y.state.pointShadowMap,Pe.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Ve=He.getUniforms(),_t=el.seqWithValue(Ve.seq,Pe);return O.currentProgram=He,O.uniformsList=_t,He}function Ie(T,U){const K=me.get(T);K.outputEncoding=U.outputEncoding,K.instancing=U.instancing,K.skinning=U.skinning,K.morphTargets=U.morphTargets,K.morphNormals=U.morphNormals,K.morphColors=U.morphColors,K.morphTargetsCount=U.morphTargetsCount,K.numClippingPlanes=U.numClippingPlanes,K.numIntersection=U.numClipIntersection,K.vertexAlphas=U.vertexAlphas,K.vertexTangents=U.vertexTangents,K.toneMapping=U.toneMapping}function Ue(T,U,K,O,Y){U.isScene!==!0&&(U=te),ye.resetTextureUnits();const Te=U.fog,xe=O.isMeshStandardMaterial?U.environment:null,Ee=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:jr,Ce=(O.isMeshStandardMaterial?ot:it).get(O.envMap||xe),je=O.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,He=!!O.normalMap&&!!K.attributes.tangent,Pe=!!K.morphAttributes.position,Ve=!!K.morphAttributes.normal,_t=!!K.morphAttributes.color,yn=O.toneMapped?p.toneMapping:Fi,oi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ft=oi!==void 0?oi.length:0,Fe=me.get(O),Mi=h.state.lights;if(V===!0&&(Q===!0||T!==y)){const bn=T===y&&O.id===b;w.setState(O,T,bn)}let Ft=!1;O.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Mi.state.version||Fe.outputEncoding!==Ee||Y.isInstancedMesh&&Fe.instancing===!1||!Y.isInstancedMesh&&Fe.instancing===!0||Y.isSkinnedMesh&&Fe.skinning===!1||!Y.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Ce||O.fog===!0&&Fe.fog!==Te||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==w.numPlanes||Fe.numIntersection!==w.numIntersection)||Fe.vertexAlphas!==je||Fe.vertexTangents!==He||Fe.morphTargets!==Pe||Fe.morphNormals!==Ve||Fe.morphColors!==_t||Fe.toneMapping!==yn||De.isWebGL2===!0&&Fe.morphTargetsCount!==ft)&&(Ft=!0):(Ft=!0,Fe.__version=O.version);let mr=Fe.currentProgram;Ft===!0&&(mr=Se(O,U,Y));let dh=!1,co=!1,kl=!1;const nn=mr.getUniforms(),gr=Fe.uniforms;if(he.useProgram(mr.program)&&(dh=!0,co=!0,kl=!0),O.id!==b&&(b=O.id,co=!0),dh||y!==T){if(nn.setValue(j,"projectionMatrix",T.projectionMatrix),De.logarithmicDepthBuffer&&nn.setValue(j,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),y!==T&&(y=T,co=!0,kl=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const bn=nn.map.cameraPosition;bn!==void 0&&bn.setValue(j,ne.setFromMatrixPosition(T.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&nn.setValue(j,"isOrthographic",T.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Y.isSkinnedMesh)&&nn.setValue(j,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){nn.setOptional(j,Y,"bindMatrix"),nn.setOptional(j,Y,"bindMatrixInverse");const bn=Y.skeleton;bn&&(De.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),nn.setValue(j,"boneTexture",bn.boneTexture,ye),nn.setValue(j,"boneTextureSize",bn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ul=K.morphAttributes;if((Ul.position!==void 0||Ul.normal!==void 0||Ul.color!==void 0&&De.isWebGL2===!0)&&ee.update(Y,K,O,mr),(co||Fe.receiveShadow!==Y.receiveShadow)&&(Fe.receiveShadow=Y.receiveShadow,nn.setValue(j,"receiveShadow",Y.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(gr.envMap.value=Ce,gr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),co&&(nn.setValue(j,"toneMappingExposure",p.toneMappingExposure),Fe.needsLights&&At(gr,kl),Te&&O.fog===!0&&St.refreshFogUniforms(gr,Te),St.refreshMaterialUniforms(gr,O,k,D,L),el.upload(j,Fe.uniformsList,gr,ye)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(el.upload(j,Fe.uniformsList,gr,ye),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&nn.setValue(j,"center",Y.center),nn.setValue(j,"modelViewMatrix",Y.modelViewMatrix),nn.setValue(j,"normalMatrix",Y.normalMatrix),nn.setValue(j,"modelMatrix",Y.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const bn=O.uniformsGroups;for(let Bl=0,qm=bn.length;Bl<qm;Bl++)if(De.isWebGL2){const fh=bn[Bl];le.update(fh,mr),le.bind(fh,mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mr}function At(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function We(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,U,K){me.get(T.texture).__webglTexture=U,me.get(T.depthTexture).__webglTexture=K;const O=me.get(T);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=K===void 0,O.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const K=me.get(T);K.__webglFramebuffer=U,K.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,K=0){x=T,_=U,v=K;let O=!0,Y=null,Te=!1,xe=!1;if(T){const Ce=me.get(T);Ce.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),O=!1):Ce.__webglFramebuffer===void 0?ye.setupRenderTarget(T):Ce.__hasExternalTextures&&ye.rebindTextures(T,me.get(T.texture).__webglTexture,me.get(T.depthTexture).__webglTexture);const je=T.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(xe=!0);const He=me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=He[U],Te=!0):De.isWebGL2&&T.samples>0&&ye.useMultisampledRTT(T)===!1?Y=me.get(T).__webglMultisampledFramebuffer:Y=He,E.copy(T.viewport),A.copy(T.scissor),M=T.scissorTest}else E.copy(R).multiplyScalar(k).floor(),A.copy(B).multiplyScalar(k).floor(),M=H;if(he.bindFramebuffer(36160,Y)&&De.drawBuffers&&O&&he.drawBuffers(T,Y),he.viewport(E),he.scissor(A),he.setScissorTest(M),Te){const Ce=me.get(T.texture);j.framebufferTexture2D(36160,36064,34069+U,Ce.__webglTexture,K)}else if(xe){const Ce=me.get(T.texture),je=U||0;j.framebufferTextureLayer(36160,36064,Ce.__webglTexture,K||0,je)}b=-1},this.readRenderTargetPixels=function(T,U,K,O,Y,Te,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){he.bindFramebuffer(36160,Ee);try{const Ce=T.texture,je=Ce.format,He=Ce.type;if(je!==Bn&&P.convert(je)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=He===Ko&&(pe.has("EXT_color_buffer_half_float")||De.isWebGL2&&pe.has("EXT_color_buffer_float"));if(He!==Wr&&P.convert(He)!==j.getParameter(35738)&&!(He===Ji&&(De.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-O&&K>=0&&K<=T.height-Y&&j.readPixels(U,K,O,Y,P.convert(je),P.convert(He),Te)}finally{const Ce=x!==null?me.get(x).__webglFramebuffer:null;he.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(T,U,K=0){const O=Math.pow(2,-K),Y=Math.floor(U.image.width*O),Te=Math.floor(U.image.height*O);ye.setTexture2D(U,0),j.copyTexSubImage2D(3553,K,0,0,T.x,T.y,Y,Te),he.unbindTexture()},this.copyTextureToTexture=function(T,U,K,O=0){const Y=U.image.width,Te=U.image.height,xe=P.convert(K.format),Ee=P.convert(K.type);ye.setTexture2D(K,0),j.pixelStorei(37440,K.flipY),j.pixelStorei(37441,K.premultiplyAlpha),j.pixelStorei(3317,K.unpackAlignment),U.isDataTexture?j.texSubImage2D(3553,O,T.x,T.y,Y,Te,xe,Ee,U.image.data):U.isCompressedTexture?j.compressedTexSubImage2D(3553,O,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,xe,U.mipmaps[0].data):j.texSubImage2D(3553,O,T.x,T.y,xe,Ee,U.image),O===0&&K.generateMipmaps&&j.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(T,U,K,O,Y=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=T.max.x-T.min.x+1,xe=T.max.y-T.min.y+1,Ee=T.max.z-T.min.z+1,Ce=P.convert(O.format),je=P.convert(O.type);let He;if(O.isData3DTexture)ye.setTexture3D(O,0),He=32879;else if(O.isDataArrayTexture)ye.setTexture2DArray(O,0),He=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,O.flipY),j.pixelStorei(37441,O.premultiplyAlpha),j.pixelStorei(3317,O.unpackAlignment);const Pe=j.getParameter(3314),Ve=j.getParameter(32878),_t=j.getParameter(3316),yn=j.getParameter(3315),oi=j.getParameter(32877),ft=K.isCompressedTexture?K.mipmaps[0]:K.image;j.pixelStorei(3314,ft.width),j.pixelStorei(32878,ft.height),j.pixelStorei(3316,T.min.x),j.pixelStorei(3315,T.min.y),j.pixelStorei(32877,T.min.z),K.isDataTexture||K.isData3DTexture?j.texSubImage3D(He,Y,U.x,U.y,U.z,Te,xe,Ee,Ce,je,ft.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(He,Y,U.x,U.y,U.z,Te,xe,Ee,Ce,ft.data)):j.texSubImage3D(He,Y,U.x,U.y,U.z,Te,xe,Ee,Ce,je,ft),j.pixelStorei(3314,Pe),j.pixelStorei(32878,Ve),j.pixelStorei(3316,_t),j.pixelStorei(3315,yn),j.pixelStorei(32877,oi),Y===0&&O.generateMipmaps&&j.generateMipmap(He),he.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ye.setTextureCube(T,0):T.isData3DTexture?ye.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ye.setTexture2DArray(T,0):ye.setTexture2D(T,0),he.unbindTexture()},this.resetState=function(){_=0,v=0,x=null,he.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class nb extends up{}nb.prototype.isWebGL1Renderer=!0;class zu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=n}clone(){return new zu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class ib extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class rb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new N;class Ou{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ou(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sd=new N,Td=new dt,Ed=new dt,sb=new N,Ad=new $e;class ob extends zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new $e,this.bindMatrixInverse=new $e}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Td.fromBufferAttribute(i.attributes.skinIndex,e),Ed.fromBufferAttribute(i.attributes.skinWeight,e),Sd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Ed.getComponent(r);if(s!==0){const o=Td.getComponent(r);Ad.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(sb.copy(Sd).applyMatrix4(Ad),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class hp extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ab extends Yt{constructor(e=null,t=1,n=1,i,r,s,o,l,c=Vt,u=Vt,d,h){super(null,s,o,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cd=new $e,lb=new $e;class Nu{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:lb;Cd.multiplyMatrices(o,t[r]),Cd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Nu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=$f(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ab(t,e,e,Bn,Ji);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new hp),this.bones.push(s),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ld extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pd=new $e,Dd=new $e,za=[],cb=new $e,xo=new zt;class ub extends zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ld(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,cb)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xo.geometry=this.geometry,xo.material=this.material,xo.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Pd),Dd.multiplyMatrices(n,Pd),xo.matrixWorld=Dd,xo.raycast(e,za);for(let s=0,o=za.length;s<o;s++){const l=za[s];l.instanceId=r,l.object=this,t.push(l)}za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ld(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class dp extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rd=new N,Id=new N,zd=new $e,_c=new Pl,Oa=new no;class Fu extends yt{constructor(e=new si,t=new dp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Rd.fromBufferAttribute(t,i-1),Id.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rd.distanceTo(Id);e.setAttribute("lineDistance",new ki(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;zd.copy(i).invert(),_c.copy(e.ray).applyMatrix4(zd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new N,u=new N,d=new N,h=new N,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,s.start),v=Math.min(g.count,s.start+s.count);for(let x=_,b=v-1;x<b;x+=f){const y=g.getX(x),E=g.getX(x+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,E),_c.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||t.push({distance:M,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,s.start),v=Math.min(m.count,s.start+s.count);for(let x=_,b=v-1;x<b;x+=f){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),_c.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Od=new N,Nd=new N;class hb extends Fu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Od.fromBufferAttribute(t,i),Nd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Od.distanceTo(Nd);e.setAttribute("lineDistance",new ki(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class db extends Fu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fp extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fd=new $e,Kc=new Pl,Na=new no,Fa=new N;class pp extends yt{constructor(e=new si,t=new fp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;Fd.copy(i).invert(),Kc.copy(e.ray).applyMatrix4(Fd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let g=h,p=f;g<p;g++){const m=c.getX(g);Fa.fromBufferAttribute(d,m),kd(Fa,m,l,i,e,t,this)}}else{const h=Math.max(0,s.start),f=Math.min(d.count,s.start+s.count);for(let g=h,p=f;g<p;g++)Fa.fromBufferAttribute(d,g),kd(Fa,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function kd(a,e,t,n,i,r,s){const o=Kc.distanceSqToPoint(a);if(o<t){const l=new N;Kc.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class da extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yf,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class es extends da{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ji(a,e,t){return mp(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function ka(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function mp(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function fb(a){function e(i,r){return a[i]-a[r]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ud(a,e,t){const n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[s++]=a[o+l]}return i}function gp(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)}class fa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pb extends fa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vh,endingEnd:Vh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Gh:r=e,o=2*t-n;break;case Hh:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gh:s=e,l=2*n-t;break;case Hh:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,_=-h*m+2*h*p-h*g,v=(1+h)*m+(-1.5-2*h)*p+(-.5+h)*g+1,x=(-1-f)*m+(1.5+f)*p+.5*g,b=f*m-f*p;for(let y=0;y!==o;++y)r[y]=_*s[u+y]+v*s[c+y]+x*s[l+y]+b*s[d+y];return r}}class mb extends fa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)r[h]=s[c+h]*d+s[l+h]*u;return r}}class gb extends fa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class bi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ka(t,this.TimeBufferType),this.values=ka(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ka(e.times,Array),values:ka(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zo:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case jl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zo;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return jl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=ji(n,r,s),this.values=ji(this.values,r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&mp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ji(this.times),t=ji(this.values),n=this.getValueSize(),i=this.getInterpolation()===jl,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const p=t[d+g];if(p!==t[h+g]||p!==t[f+g]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const d=o*n,h=s*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=ji(e,0,s),this.values=ji(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=ji(this.times,0),t=ji(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Ws;class so extends bi{}so.prototype.ValueTypeName="bool";so.prototype.ValueBufferType=Array;so.prototype.DefaultInterpolation=Zo;so.prototype.InterpolantFactoryMethodLinear=void 0;so.prototype.InterpolantFactoryMethodSmooth=void 0;class _p extends bi{}_p.prototype.ValueTypeName="color";class ta extends bi{}ta.prototype.ValueTypeName="number";class _b extends fa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)vi.slerpFlat(r,0,s,c-o,s,c,l);return r}}class qr extends bi{InterpolantFactoryMethodLinear(e){return new _b(this.times,this.values,this.getValueSize(),e)}}qr.prototype.ValueTypeName="quaternion";qr.prototype.DefaultInterpolation=Ws;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class oo extends bi{}oo.prototype.ValueTypeName="string";oo.prototype.ValueBufferType=Array;oo.prototype.DefaultInterpolation=Zo;oo.prototype.InterpolantFactoryMethodLinear=void 0;oo.prototype.InterpolantFactoryMethodSmooth=void 0;class na extends bi{}na.prototype.ValueTypeName="vector";class xb{constructor(e,t=-1,n,i=kg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ii(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(yb(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(bi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=fb(l);l=Ud(l,1,u),c=Ud(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new ta(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,g,p){if(f.length!==0){const m=[],_=[];gp(f,m,_,g),m.length!==0&&p.push(new d(h,m,_))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let p=0;p<h[g].morphTargets.length;p++)f[h[g].morphTargets[p]]=-1;for(const p in f){const m=[],_=[];for(let v=0;v!==h[g].morphTargets.length;++v){const x=h[g];m.push(x.time),_.push(x.morphTarget===p?1:0)}i.push(new ta(".morphTargetInfluence["+p+"]",m,_))}l=f.length*s}else{const f=".bones["+t[d].name+"]";n(na,f+".position",h,"pos",i),n(qr,f+".quaternion",h,"rot",i),n(na,f+".scale",h,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vb(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ta;case"vector":case"vector2":case"vector3":case"vector4":return na;case"color":return _p;case"quaternion":return qr;case"bool":case"boolean":return so;case"string":return oo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function yb(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vb(a.type);if(a.times===void 0){const t=[],n=[];gp(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Xs={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class xp{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const bb=new xp;class ao{constructor(e){this.manager=e!==void 0?e:bb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ci={};class Mb extends Error{constructor(e,t){super(e),this.response=t}}class vp extends ao{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Xs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:i});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ci[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=h?parseInt(h):0,g=f!==0;let p=0;const m=new ReadableStream({start(_){v();function v(){d.read().then(({done:x,value:b})=>{if(x)_.close();else{p+=b.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:f});for(let E=0,A=u.length;E<A;E++){const M=u[E];M.onProgress&&M.onProgress(y)}_.enqueue(b),v()}})}}});return new Response(m)}else throw new Mb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Xs.add(e,c);const u=Ci[e];delete Ci[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Ci[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ci[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class yp extends ao{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Xs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=ea("img");function l(){u(),Xs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class wb extends ao{constructor(e){super(e)}load(e,t,n,i){const r=new Du,s=new yp(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class bp extends ao{constructor(e){super(e)}load(e,t,n,i){const r=new Yt,s=new yp(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ku extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const xc=new $e,Bd=new N,Vd=new N;class Uu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dl,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bd),Vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vd),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sb extends Uu{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Qo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Tb extends ku{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DefaultUp),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new Sb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gd=new $e,vo=new N,vc=new N;class Eb extends Uu{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vo.setFromMatrixPosition(e.matrixWorld),n.position.copy(vo),vc.copy(n.position),vc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vc),n.updateMatrixWorld(),i.makeTranslation(-vo.x,-vo.y,-vo.z),Gd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd)}}class Zc extends ku{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Eb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ab extends Uu{constructor(){super(new Ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mp extends ku{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DefaultUp),this.updateMatrix(),this.target=new yt,this.shadow=new Ab}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Or{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Cb extends ao{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Xs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Xs.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const Bu="\\[\\]\\.:\\/",Lb=new RegExp("["+Bu+"]","g"),Vu="[^"+Bu+"]",Pb="[^"+Bu.replace("\\.","")+"]",Db=/((?:WC+[\/:])*)/.source.replace("WC",Vu),Rb=/(WCOD+)?/.source.replace("WCOD",Pb),Ib=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vu),zb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vu),Ob=new RegExp("^"+Db+Rb+Ib+zb+"$"),Nb=["material","materials","bones","map"];class Fb{constructor(e,t,n){const i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lb,"")}static parseTrackName(e){const t=Ob.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Nb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=Fb;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class kb{constructor(e,t,n=0,i=1/0){this.ray=new Pl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Pu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Jc(e,this,n,t),n.sort(Hd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Jc(e[i],this,n,t);return n.sort(Hd),n}}function Hd(a,e){return a.distance-e.distance}function Jc(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let r=0,s=i.length;r<s;r++)Jc(i[r],e,t,!0)}}class Wd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cu);var wp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jd={},Ub={get exports(){return jd},set exports(a){jd=a}};(function(a,e){(function(t,n){a.exports=n()})(wp,function(){var t=function(){function n(f){return s.appendChild(f.dom),f}function i(f){for(var g=0;g<s.children.length;g++)s.children[g].style.display=g===f?"block":"none";r=f}var r=0,s=document.createElement("div");s.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",s.addEventListener("click",function(f){f.preventDefault(),i(++r%s.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,u=n(new t.Panel("FPS","#0ff","#002")),d=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:s,addPanel:n,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(d.update(f-o,200),f>l+1e3&&(u.update(1e3*c/(f-l),100),l=f,c=0,h)){var g=performance.memory;h.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return f},update:function(){o=this.end()},domElement:s,setMode:i}};return t.Panel=function(n,i,r){var s=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,d=48*c,h=3*c,f=2*c,g=3*c,p=15*c,m=74*c,_=30*c,v=document.createElement("canvas");v.width=u,v.height=d,v.style.cssText="width:80px;height:48px";var x=v.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=r,x.fillRect(0,0,u,d),x.fillStyle=i,x.fillText(n,h,f),x.fillRect(g,p,m,_),x.fillStyle=r,x.globalAlpha=.9,x.fillRect(g,p,m,_),{dom:v,update:function(b,y){s=Math.min(s,b),o=Math.max(o,b),x.fillStyle=r,x.globalAlpha=1,x.fillRect(0,0,u,p),x.fillStyle=i,x.fillText(l(b)+" "+n+" ("+l(s)+"-"+l(o)+")",h,f),x.drawImage(v,g+c,p,m-c,_,g,p,m-c,_),x.fillRect(g+m-c,p,c,_),x.fillStyle=r,x.globalAlpha=.9,x.fillRect(g+m-c,p,c,l((1-b/y)*_))}}},t})})(Ub);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class gi{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),gi.nextNameID=gi.nextNameID||0,this.$name.id=`lil-gui-name-${++gi.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Bb extends gi{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Qc(a){let e,t;return(e=a.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Vb={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:Qc,toHexString:Qc},ia={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},Gb={isPrimitive:!1,match:Array.isArray,fromHexString(a,e,t=1){const n=ia.fromHexString(a);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([a,e,t],n=1){n=255/n;const i=a*n<<16^e*n<<8^t*n<<0;return ia.toHexString(i)}},Hb={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,e,t=1){const n=ia.fromHexString(a);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:a,g:e,b:t},n=1){n=255/n;const i=a*n<<16^e*n<<8^t*n<<0;return ia.toHexString(i)}},Wb=[Vb,ia,Gb,Hb];function jb(a){return Wb.find(e=>e.match(a))}class Xb extends gi{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=jb(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Qc(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class yc extends gi{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class qb extends gi{constructor(e,t,n,i,r,s){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const o=s!==void 0;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},t=_=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+_),this.$input.value=this.getValue())},n=_=>{_.code==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),t(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),t(this._step*this._arrowKeyMultiplier(_)*-1))},i=_=>{this._inputFocused&&(_.preventDefault(),t(this._step*this._normalizeMouseWheel(_)))};let r=!1,s,o,l,c,u;const d=5,h=_=>{s=_.clientX,o=l=_.clientY,r=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",g)},f=_=>{if(r){const v=_.clientX-s,x=_.clientY-o;Math.abs(x)>d?(_.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>d&&g()}if(!r){const v=_.clientY-l;u-=v*this._step*this._arrowKeyMultiplier(_),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}l=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",g)},p=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",h),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(_,v,x,b,y)=>(_-v)/(x-v)*(y-b)+b,t=_=>{const v=this.$slider.getBoundingClientRect();let x=e(_,v.left,v.right,this._min,this._max);this._snapClampSetValue(x)},n=_=>{this._setDraggingStyle(!0),t(_.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=_=>{t(_.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let s=!1,o,l;const c=_=>{_.preventDefault(),this._setDraggingStyle(!0),t(_.touches[0].clientX),s=!1},u=_=>{_.touches.length>1||(this._hasScrollBar?(o=_.touches[0].clientX,l=_.touches[0].clientY,s=!0):c(_),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",h))},d=_=>{if(s){const v=_.touches[0].clientX-o,x=_.touches[0].clientY-l;Math.abs(v)>Math.abs(x)?c(_):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h))}else _.preventDefault(),t(_.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h)},f=this._callOnFinishChange.bind(this),g=400;let p;const m=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const x=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Yb extends gi{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class $b extends gi{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Kb=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Zb(a){const e=document.createElement("style");e.innerHTML=a;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Xd=!1;class Gu{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",injectStyles:s=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),o&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Xd&&s&&(Zb(Kb),Xd=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,r){if(Object(n)===n)return new Yb(this,e,t,n);const s=e[t];switch(typeof s){case"number":return new qb(this,e,t,n,i,r);case"boolean":return new Bb(this,e,t);case"string":return new $b(this,e,t);case"function":return new yc(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,n=1){return new Xb(this,e,t,n)}addFolder(e){return new Gu({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof yc||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof yc)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class Jb{constructor(){this.active=window.location.hash==="#debug",this.active&&(this.ui=new Gu,this.ui.close())}}class Il{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(i=>{const r=this.resolveName(i);this.callbacks[r.namespace]instanceof Object||(this.callbacks[r.namespace]={}),this.callbacks[r.namespace][r.value]instanceof Array||(this.callbacks[r.namespace][r.value]=[]),this.callbacks[r.namespace][r.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(n=>{const i=this.resolveName(n);if(i.namespace!=="base"&&i.value==="")delete this.callbacks[i.namespace];else if(i.namespace==="base")for(const r in this.callbacks)this.callbacks[r]instanceof Object&&this.callbacks[r][i.value]instanceof Array&&(delete this.callbacks[r][i.value],Object.keys(this.callbacks[r]).length===0&&delete this.callbacks[r]);else this.callbacks[i.namespace]instanceof Object&&this.callbacks[i.namespace][i.value]instanceof Array&&(delete this.callbacks[i.namespace][i.value],Object.keys(this.callbacks[i.namespace]).length===0&&delete this.callbacks[i.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let n=null;const i=t instanceof Array?t:[];let r=this.resolveNames(e);if(r=this.resolveName(r[0]),r.namespace==="base")for(const s in this.callbacks)this.callbacks[s]instanceof Object&&this.callbacks[s][r.value]instanceof Array&&this.callbacks[s][r.value].forEach(function(o){o.apply(this,i)});else if(this.callbacks[r.namespace]instanceof Object){if(r.value==="")return console.warn("wrong name"),this;this.callbacks[r.namespace][r.value].forEach(function(s){s.apply(this,i)})}return n}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},n=e.split(".");return t.original=e,t.value=n[0],t.namespace="base",n.length>1&&n[1]!==""&&(t.namespace=n[1]),t}}class Qb extends Il{constructor(){super(),this.eventsResize=[],this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.setFormat(),this.initResizeEvent()}resizeWindowHandler(){this.setFormat(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.eventsResize.forEach(e=>{e()}),this.trigger("resize")}initResizeEvent(){window.removeEventListener("mousemove",this.resizeWindowHandler.bind(this)),window.addEventListener("mousemove",this.resizeWindowHandler.bind(this))}setFormat(){window.innerWidth<=1140&&window.innerWidth>580?this.format="tablet":window.innerWidth<580?this.format="mobile":this.format="desktop"}addNewEvent(e){}}class e1 extends Il{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}const qd={type:"change"},bc={type:"start"},Yd={type:"end"};class t1 extends Jr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",gt),this._domElementKeyEvents=P},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(qd),n.update(),r=i.NONE},this.update=function(){const P=new N,F=new vi().setFromUnitVectors(e.up,new N(0,1,0)),le=F.clone().invert(),ge=new N,ue=new vi,Me=2*Math.PI;return function(){const Be=n.object.position;P.copy(Be).sub(n.target),P.applyQuaternion(F),o.setFromVector3(P),n.autoRotate&&r===i.NONE&&S(A()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let _e=n.minAzimuthAngle,qe=n.maxAzimuthAngle;return isFinite(_e)&&isFinite(qe)&&(_e<-Math.PI?_e+=Me:_e>Math.PI&&(_e-=Me),qe<-Math.PI?qe+=Me:qe>Math.PI&&(qe-=Me),_e<=qe?o.theta=Math.max(_e,Math.min(qe,o.theta)):o.theta=o.theta>(_e+qe)/2?Math.max(_e,o.theta):Math.min(qe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(o),P.applyQuaternion(le),Be.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||ge.distanceToSquared(n.object.position)>s||8*(1-ue.dot(n.object.quaternion))>s?(n.dispatchEvent(qd),ge.copy(n.object.position),ue.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",J),n.domElement.removeEventListener("pointerdown",it),n.domElement.removeEventListener("pointercancel",X),n.domElement.removeEventListener("wheel",St),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",Je),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",gt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,o=new Wd,l=new Wd;let c=1;const u=new N;let d=!1;const h=new Ne,f=new Ne,g=new Ne,p=new Ne,m=new Ne,_=new Ne,v=new Ne,x=new Ne,b=new Ne,y=[],E={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function S(P){l.theta-=P}function D(P){l.phi-=P}const k=function(){const P=new N;return function(le,ge){P.setFromMatrixColumn(ge,0),P.multiplyScalar(-le),u.add(P)}}(),G=function(){const P=new N;return function(le,ge){n.screenSpacePanning===!0?P.setFromMatrixColumn(ge,1):(P.setFromMatrixColumn(ge,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(le),u.add(P)}}(),z=function(){const P=new N;return function(le,ge){const ue=n.domElement;if(n.object.isPerspectiveCamera){const Me=n.object.position;P.copy(Me).sub(n.target);let ve=P.length();ve*=Math.tan(n.object.fov/2*Math.PI/180),k(2*le*ve/ue.clientHeight,n.object.matrix),G(2*ge*ve/ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(le*(n.object.right-n.object.left)/n.object.zoom/ue.clientWidth,n.object.matrix),G(ge*(n.object.top-n.object.bottom)/n.object.zoom/ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(P){h.set(P.clientX,P.clientY)}function Z(P){v.set(P.clientX,P.clientY)}function V(P){p.set(P.clientX,P.clientY)}function Q(P){f.set(P.clientX,P.clientY),g.subVectors(f,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;S(2*Math.PI*g.x/F.clientHeight),D(2*Math.PI*g.y/F.clientHeight),h.copy(f),n.update()}function L(P){x.set(P.clientX,P.clientY),b.subVectors(x,v),b.y>0?R(M()):b.y<0&&B(M()),v.copy(x),n.update()}function W(P){m.set(P.clientX,P.clientY),_.subVectors(m,p).multiplyScalar(n.panSpeed),z(_.x,_.y),p.copy(m),n.update()}function q(P){P.deltaY<0?B(M()):P.deltaY>0&&R(M()),n.update()}function ne(P){let F=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),F=!0;break}F&&(P.preventDefault(),n.update())}function te(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);h.set(P,F)}}function oe(){if(y.length===1)p.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);p.set(P,F)}}function j(){const P=y[0].pageX-y[1].pageX,F=y[0].pageY-y[1].pageY,le=Math.sqrt(P*P+F*F);v.set(0,le)}function ze(){n.enableZoom&&j(),n.enablePan&&oe()}function pe(){n.enableZoom&&j(),n.enableRotate&&te()}function De(P){if(y.length==1)f.set(P.pageX,P.pageY);else{const le=be(P),ge=.5*(P.pageX+le.x),ue=.5*(P.pageY+le.y);f.set(ge,ue)}g.subVectors(f,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;S(2*Math.PI*g.x/F.clientHeight),D(2*Math.PI*g.y/F.clientHeight),h.copy(f)}function he(P){if(y.length===1)m.set(P.pageX,P.pageY);else{const F=be(P),le=.5*(P.pageX+F.x),ge=.5*(P.pageY+F.y);m.set(le,ge)}_.subVectors(m,p).multiplyScalar(n.panSpeed),z(_.x,_.y),p.copy(m)}function ke(P){const F=be(P),le=P.pageX-F.x,ge=P.pageY-F.y,ue=Math.sqrt(le*le+ge*ge);x.set(0,ue),b.set(0,Math.pow(x.y/v.y,n.zoomSpeed)),R(b.y),v.copy(x)}function me(P){n.enableZoom&&ke(P),n.enablePan&&he(P)}function ye(P){n.enableZoom&&ke(P),n.enableRotate&&De(P)}function it(P){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",ot),n.domElement.addEventListener("pointerup",Je)),re(P),P.pointerType==="touch"?C(P):st(P))}function ot(P){n.enabled!==!1&&(P.pointerType==="touch"?w(P):Re(P))}function Je(P){ee(P),y.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",Je)),n.dispatchEvent(Yd),r=i.NONE}function X(P){ee(P)}function st(P){let F;switch(P.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case is.DOLLY:if(n.enableZoom===!1)return;Z(P),r=i.DOLLY;break;case is.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;V(P),r=i.PAN}else{if(n.enableRotate===!1)return;H(P),r=i.ROTATE}break;case is.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;H(P),r=i.ROTATE}else{if(n.enablePan===!1)return;V(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(bc)}function Re(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(P);break;case i.DOLLY:if(n.enableZoom===!1)return;L(P);break;case i.PAN:if(n.enablePan===!1)return;W(P);break}}function St(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(bc),q(P),n.dispatchEvent(Yd))}function gt(P){n.enabled===!1||n.enablePan===!1||ne(P)}function C(P){switch(ae(P),y.length){case 1:switch(n.touches.ONE){case rs.ROTATE:if(n.enableRotate===!1)return;te(),r=i.TOUCH_ROTATE;break;case rs.PAN:if(n.enablePan===!1)return;oe(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case rs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ze(),r=i.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(bc)}function w(P){switch(ae(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;De(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;me(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(P),n.update();break;default:r=i.NONE}}function J(P){n.enabled!==!1&&P.preventDefault()}function re(P){y.push(P)}function ee(P){delete E[P.pointerId];for(let F=0;F<y.length;F++)if(y[F].pointerId==P.pointerId){y.splice(F,1);return}}function ae(P){let F=E[P.pointerId];F===void 0&&(F=new Ne,E[P.pointerId]=F),F.set(P.pageX,P.pageY)}function be(P){const F=P.pointerId===y[0].pointerId?y[1]:y[0];return E[F.pointerId]}n.domElement.addEventListener("contextmenu",J),n.domElement.addEventListener("pointerdown",it),n.domElement.addEventListener("pointercancel",X),n.domElement.addEventListener("wheel",St,{passive:!1}),this.update()}}class ts extends Il{constructor(){super(),this.experience=new lo,this.scene=this.experience.scene,this.resources=this.experience.resources,this.renderer=this.experience.renderer.instance,this.time=this.experience.time,this.world=this.experience.world,this.debug=this.experience.debug,this.camera=this.experience.camera.instance,this.mouse=this.experience.mouse,this.environment=this.world.environment,this.sizes=this.experience.sizes}}const Xo=class extends ts{constructor(){super();kt(this,"raycast");kt(this,"position");kt(this,"eventsMouse");kt(this,"intersection");kt(this,"objectsList");if(Xo.instance)return Xo.instance;this.position=new Ne,this.eventsMouse=[],this.intersection=null,this.objectsList=[],this.initRaycast(),this.initMouseEvent(),Xo.instance=this}initRaycast(){this.raycast=new kb}initMouseEvent(){window.removeEventListener("mousemove",this.mouseMoveHandler.bind(this)),window.addEventListener("mousemove",this.mouseMoveHandler.bind(this))}mouseMoveHandler(t){this.raycastEvent(t),this.eventsMouse.forEach(n=>{n(t)})}raycastEvent(t){this.position.x=t.clientX/window.innerWidth*2-1,this.position.y=-(t.clientY/window.innerHeight)*2+1,this.raycast&&(this.raycast.setFromCamera(this.position,this.camera),this.updateIntersections())}addNewEvent(t){this.eventsMouse.push(t),this.initMouseEvent()}addObjectsList(t){this.objectsList.push(t)}updateIntersections(){const t=this.raycast.intersectObjects(this.objectsList);t.length>0?this.intersection=t[0]:this.intersection=null}};let tl=Xo;kt(tl,"instance",null);class n1{constructor(){this.experience=new lo,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.debug=this.experience.debug,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("camera")),this.setInstance(),this.setControls()}setInstance(){this.instance=new cn(60,this.sizes.width/this.sizes.height,.1,100),this.instance.position.set(0,21.5,15),this.scene.add(this.instance),this.debug.active&&this.debugFolder.add(this.instance.position,"z").name("zCam").min(-100).max(100).step(.001)}setControls(){this.controls=new t1(this.instance,this.canvas),this.controls.enableRotate=!1,this.controls.enableZoom=!1,this.controls.target.y=20,this.debug.active&&this.debugFolder.add(this.controls.target,"z").name("zCam").min(-100).max(100).step(.001)}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}isObjectInView(e){const t=new Dl,n=new $e;return n.multiplyMatrices(this.instance.projectionMatrix,this.instance.matrixWorldInverse),t.setFromProjectionMatrix(n),t.intersectsObject(e)}update(){this.controls.update()}}class i1{constructor(){this.experience=new lo,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setInstance()}setInstance(){Kt.enabled=!0,this.instance=new up({canvas:this.canvas,antialias:!0,alpha:!0}),this.instance.physicallyCorrectLights=!0,this.instance.outputEncoding=rt,this.instance.toneMapping=Hf,this.instance.toneMappingExposure=1.75,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=Uf,this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio,2))}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio,2))}update(){this.instance.render(this.scene,this.camera.instance)}}class r1{constructor(){this.experience=new lo,this.scene=this.experience.scene,this.resources=this.experience.resources,this.debug=this.experience.debug,this.parameters={colorDir:"#80aed0",colorMain:"#8dbbd3",colorSecondary:"#569dd1"},this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("environment")),this.setSunLight(),this.setPointLight(),this.setEnvironmentMap()}setSunLight(){this.sunLight=new Mp("#80aed0",0),this.sunLight.castShadow=!0,this.sunLight.intensity=.5,this.sunLight.shadow.camera.far=15,this.sunLight.shadow.mapSize.set(1024,1024),this.sunLight.shadow.normalBias=.05,this.sunLight.position.set(-1,2,10.25),this.scene.add(this.sunLight),this.debug.active&&(this.debugFolder.add(this.sunLight,"intensity").name("sunLightIntensity").min(0).max(10).step(.001),this.debugFolder.add(this.sunLight.position,"x").name("sunLightX").min(-10).max(10).step(.001),this.debugFolder.add(this.sunLight.position,"y").name("sunLightY").min(-10).max(10).step(.001),this.debugFolder.add(this.sunLight.position,"z").name("sunLightZ").min(-10).max(10).step(.001),this.debugFolder.addColor(this.parameters,"colorDir").onChange(()=>{this.sunLight.color.set(this.parameters.colorDir)}))}setPointLight(){this.mainLight=new Zc("#37bdcc",30,50,2),this.mainLight.position.set(-7.5,20,-15.3),this.secondary=new Zc("#569dd1",150,50,2),this.secondary.position.set(17.5,20,5.3),this.debug.active&&(this.debugFolder.add(this.mainLight,"intensity").name("mainLightIntensity").min(0).max(500).step(.001),this.debugFolder.addColor(this.parameters,"colorMain").onChange(()=>{this.mainLight.color.set(this.parameters.colorMain)}),this.debugFolder.add(this.secondary,"intensity").name("secondaryLightIntensity").min(0).max(500).step(.001),this.debugFolder.addColor(this.parameters,"colorSecondary").onChange(()=>{this.secondary.color.set(this.parameters.colorSecondary)})),this.scene.add(this.mainLight),this.scene.add(this.secondary)}setEnvironmentMap(){this.environmentMap={},this.environmentMap.intensity=1.25,this.environmentMap.texture=this.resources.items.environmentMapTexture,this.environmentMap.texture.encoding=rt,this.scene.environment=this.environmentMap.texture,this.environmentMap.updateMaterials=()=>{this.scene.traverse(e=>{e instanceof zt&&e.material instanceof da&&(e.material.envMap=this.environmentMap.texture,e.material.envMapIntensity=this.environmentMap.intensity,e.material.needsUpdate=!0)})},this.environmentMap.updateMaterials(),this.debug.active&&this.debugFolder.add(this.environmentMap,"intensity").name("envMapIntensity").min(0).max(4).step(.001).onChange(this.environmentMap.updateMaterials)}}function Li(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Sp(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qs={duration:.5,overwrite:!1,delay:0},Hu,en,Lt,Vn=1e8,ht=1/Vn,eu=Math.PI*2,s1=eu/4,o1=0,Tp=Math.sqrt,a1=Math.cos,l1=Math.sin,Ht=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},Ui=function(e){return typeof e=="number"},Wu=function(e){return typeof e>"u"},yi=function(e){return typeof e=="object"},_n=function(e){return e!==!1},Ep=function(){return typeof window<"u"},Ua=function(e){return wt(e)||Ht(e)},Ap=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,tu=/(?:-?\.?\d|\.)+/gi,Cp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lp=/[+-]=-?[.\d]+/,Pp=/[^,'"\[\]\s]+/gi,c1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,On,nu,ju,Dn={},gl={},Dp,Rp=function(e){return(gl=Yr(e,Dn))&&Rn},Xu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},_l=function(e,t){return!t&&console.warn(e)},Ip=function(e,t){return e&&(Dn[e]=t)&&gl&&(gl[e]=t)||Dn},ra=function(){return 0},u1={suppressEvents:!0,isStart:!0,kill:!1},nl={suppressEvents:!0,kill:!1},h1={suppressEvents:!0},qu={},or=[],iu={},zp,En={},wc={},$d=30,il=[],Yu="",$u=function(e){var t=e[0],n,i;if(yi(t)||wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=il.length;i--&&!il[i].targetTest(t););n=il[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new nm(e[i],n)))||e.splice(i,1);return e},Nr=function(e){return e._gsap||$u(Gn(e))[0]._gsap},Op=function(e,t,n){return(n=e[t])&&wt(n)?e[t]():Wu(n)&&e.getAttribute&&e.getAttribute(t)||n},xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},Rs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},d1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},xl=function(){var e=or.length,t=or.slice(0),n,i;for(iu={},or.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Np=function(e,t,n,i){or.length&&!en&&xl(),e.render(t,n,i||en&&t<0&&(e._initted||e._startAt)),or.length&&!en&&xl()},Fp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Pp).length<2?t:Ht(e)?e.trim():e},kp=function(e){return e},qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},f1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Yr=function(e,t){for(var n in t)e[n]=t[n];return e},Kd=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=yi(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},vl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},zo=function(e){var t=e.parent||xt,n=e.keyframes?f1(tn(e.keyframes)):qn;if(_n(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},p1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Up=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},zl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Fr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},m1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ru=function(e,t,n,i){return e._startAt&&(en?e._startAt.revert(nl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},g1=function a(e){return!e||e._ts&&a(e.parent)},Zd=function(e){return e._repeat?Ys(e._tTime,e=e.duration()+e._rDelay)*e:0},Ys=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},yl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ol=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},Nl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ol(e),n._dirty||Fr(n,e)),e},Bp=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=yl(e.rawTime(),t),(!t._dur||pa(0,t.totalDuration(),n)-t._tTime>ht)&&t.render(n,!0)),Fr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ht}},di=function(e,t,n,i){return t.parent&&ur(t),t._start=Xt((Ui(n)?n:n||e!==xt?zn(e,n,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Up(e,t,"_first","_last",e._sort?"_start":0),su(t)||(e._recent=t),i||Bp(e,t),e._ts<0&&Nl(e,e._tTime),e},Vp=function(e,t){return(Dn.ScrollTrigger||Xu("scrollTrigger",t))&&Dn.ScrollTrigger.create(t,e)},Gp=function(e,t,n,i,r){if(Zu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!en&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&zp!==An.frame)return or.push(e),e._lazy=[r,i],1},_1=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},su=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},x1=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&_1(e)&&!(!e._initted&&su(e))||(e._ts<0||e._dp._ts<0)&&!su(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=pa(0,e._tDur,t),u=Ys(l,o),e._yoyo&&u&1&&(s=1-s),u!==Ys(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||en||i||e._zTime===ht||!t&&e._zTime){if(!e._initted&&Gp(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?ht:0),n||(n=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&ru(e,t,n,!0),e._onUpdate&&!n&&Hn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&ur(e,1),!n&&!en&&(Hn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},v1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},$s=function(e,t,n,i){var r=e._repeat,s=Xt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Xt(s*(r+1)+e._rDelay*r):s,o>0&&!i&&Nl(e,e._tTime=e._tDur*o),e.parent&&Ol(e),n||Fr(e.parent,e),e},Jd=function(e){return e instanceof gn?Fr(e):$s(e,e._dur)},y1={_start:0,endTime:ra,totalDuration:ra},zn=function a(e,t,n){var i=e.labels,r=e._recent||y1,s=e.duration()>=Vn?r.endTime(!1):e._dur,o,l,c;return Ht(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(tn(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},Oo=function(e,t,n){var i=Ui(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=_n(l.vars.inherit)&&l.parent;s.immediateRender=_n(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Rt(t[0],s,t[r+1])},pr=function(e,t){return e||e===0?t(e):t},pa=function(e,t,n){return n<e?e:n>t?t:n},Qt=function(e,t){return!Ht(e)||!(t=c1.exec(e))?"":t[1]},b1=function(e,t,n){return pr(n,function(i){return pa(e,t,i)})},ou=[].slice,Hp=function(e,t){return e&&yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yi(e[0]))&&!e.nodeType&&e!==On},M1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Ht(i)&&!t||Hp(i,1)?(r=n).push.apply(r,Gn(i)):n.push(i)})||n},Gn=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):Ht(e)&&!n&&(nu||!Ks())?ou.call((t||ju).querySelectorAll(e),0):tn(e)?M1(e,n):Hp(e)?ou.call(e,0):e?[e]:[]},au=function(e){return e=Gn(e)[0]||_l("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Gn(t,n.querySelectorAll?n:n===e?_l("Invalid scope")||ju.createElement("div"):e)}},Wp=function(e){return e.sort(function(){return .5-Math.random()})},jp=function(e){if(wt(e))return e;var t=yi(e)?e:{each:e},n=kr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return Ht(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,g){var p=(g||t).length,m=s[p],_,v,x,b,y,E,A,M,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Vn])[1],!S){for(A=-Vn;A<(A=g[S++].getBoundingClientRect().left)&&S<p;);S--}for(m=s[p]=[],_=l?Math.min(S,p)*u-.5:i%S,v=S===Vn?0:l?p*d/S-.5:i/S|0,A=0,M=Vn,E=0;E<p;E++)x=E%S-_,b=v-(E/S|0),m[E]=y=c?Math.abs(c==="y"?b:x):Tp(x*x+b*b),y>A&&(A=y),y<M&&(M=y);i==="random"&&Wp(m),m.max=A-M,m.min=M,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(S>p?p-1:c?c==="y"?p/S:S:Math.max(S,p/S))||0)*(i==="edges"?-1:1),m.b=p<0?r-p:r,m.u=Qt(t.amount||t.each)||0,n=n&&p<0?Qp(n):n}return p=(m[h]-m.min)/m.max||0,Xt(m.b+(n?n(p):p)*m.v)+m.u}},lu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ui(n)?0:Qt(n))}},Xp=function(e,t){var n=tn(e),i,r;return!n&&yi(e)&&(i=n=e.radius||Vn,e.values?(e=Gn(e.values),(r=!Ui(e[0]))&&(i*=i)):e=lu(e.increment)),pr(t,n?wt(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Vn,u=0,d=e.length,h,f;d--;)r?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:s,r||u===s||Ui(s)?u:u+Qt(s)}:lu(e))},qp=function(e,t,n,i){return pr(tn(e)?!t:n===!0?!!(n=0):!i,function(){return tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},w1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},S1=function(e,t){return function(n){return e(parseFloat(n))+(t||Qt(n))}},T1=function(e,t,n){return $p(e,t,0,1,n)},Yp=function(e,t,n){return pr(n,function(i){return e[~~t(i)]})},E1=function a(e,t,n){var i=t-e;return tn(e)?Yp(e,a(0,e.length),t):pr(n,function(r){return(i+(r-e)%i)%i+e})},A1=function a(e,t,n){var i=t-e,r=i*2;return tn(e)?Yp(e,a(0,e.length-1),t):pr(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},sa=function(e){for(var t=0,n="",i,r,s,o;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(o?Pp:tu),n+=e.substr(t,i-t)+qp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},$p=function(e,t,n,i,r){var s=t-e,o=i-n;return pr(r,function(l){return n+((l-e)/s*o||0)})},C1=function a(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var s=Ht(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(tn(e)&&!tn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(a(e[c-1],e[c]));d--,r=function(g){g*=d;var p=Math.min(h,~~g);return u[p](g-p)},n=t}else i||(e=Yr(tn(e)?[]:{},e));if(!u){for(l in t)Ku.call(o,e,l,"get",t[l]);r=function(g){return eh(g,o)||(s?e.p:e)}}}return pr(n,r)},Qd=function(e,t,n){var i=e.labels,r=Vn,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},Hn=function(e,t,n){var i=e.vars,r=i[t],s=Lt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&or.length&&xl(),o&&(Lt=o),u=l?r.apply(c,l):r.call(c),Lt=s,u},Ao=function(e){return ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!en),e.progress()<1&&Hn(e,"onInterrupt"),e},As,L1=function(e){e=!e.name&&e.default||e;var t=e.name,n=wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ra,render:eh,add:Ku,kill:j1,modifier:W1,rawVars:0},s={targetTest:0,get:0,getSetter:Qu,aliases:{},register:0};if(Ks(),e!==i){if(En[t])return;qn(i,qn(vl(e,r),s)),Yr(i.prototype,Yr(r,vl(e,s))),En[i.prop=t]=i,e.targetTest&&(il.push(i),qu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ip(t,i),e.register&&e.register(Rn,i,vn)},ct=255,Co={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},Sc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ct+.5|0},Kp=function(e,t,n){var i=e?Ui(e)?[e>>16,e>>8&ct,e&ct]:0:Co.black,r,s,o,l,c,u,d,h,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Co[e])i=Co[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ct,i&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(tu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=Sc(l+1/3,r,s),i[1]=Sc(l,r,s),i[2]=Sc(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(Cp),n&&i.length<4&&(i[3]=1),i}else i=e.match(tu)||Co.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/ct,s=i[1]/ct,o=i[2]/ct,d=Math.max(r,s,o),h=Math.min(r,s,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===r?(s-o)/f+(s<o?6:0):d===s?(o-r)/f+2:(r-s)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Zp=function(e){var t=[],n=[],i=-1;return e.split(ar).forEach(function(r){var s=r.match(Es)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},ef=function(e,t,n){var i="",r=(e+i).match(ar),s=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!r)return e;if(r=r.map(function(h){return(h=Kp(h,t,1))&&s+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Zp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ar,"1").split(Es),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(ar),d=c.length-1;o<d;o++)i+=c[o]+r[o];return i+c[d]},ar=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Co)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),P1=/hsl[a]?\(/,Jp=function(e){var t=e.join(" "),n;if(ar.lastIndex=0,ar.test(t))return n=P1.test(t),e[1]=ef(e[1],n),e[0]=ef(e[0],n,Zp(e[1])),!0},oa,An=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,s=r,o=[],l,c,u,d,h,f,g=function p(m){var _=a()-i,v=m===!0,x,b,y,E;if(_>e&&(n+=_-t),i+=_,y=i-n,x=y-s,(x>0||v)&&(E=++d.frame,h=y-d.time*1e3,d.time=y=y/1e3,s+=x+(x>=r?4:r-x),b=1),v||(l=c(p)),b)for(f=0;f<o.length;f++)o[f](y,h,E,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Dp&&(!nu&&Ep()&&(On=nu=window,ju=On.document||{},Dn.gsap=Rn,(On.gsapVersions||(On.gsapVersions=[])).push(Rn.version),Rp(gl||On.GreenSockGlobals||!On.gsap&&On||{}),u=On.requestAnimationFrame),l&&d.sleep(),c=u||function(m){return setTimeout(m,s-d.time*1e3+1|0)},oa=1,g(2))},sleep:function(){(u?On.cancelAnimationFrame:clearTimeout)(l),oa=0,c=ra},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),s=d.time*1e3+r},add:function(m,_,v){var x=_?function(b,y,E,A){m(b,y,E,A),d.remove(x)}:m;return d.remove(m),o[v?"unshift":"push"](x),Ks(),x},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&f>=_&&f--},_listeners:o},d}(),Ks=function(){return!oa&&An.wake()},et={},D1=/^[\d.\-M][\d.\-,\s]/,R1=/["']/g,I1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,o,l,c;r<s;r++)l=n[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(R1,"").trim():+c,i=l.substr(o+1).trim();return t},z1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},O1=function(e){var t=(e+"").split("("),n=et[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[I1(t[1])]:z1(e).split(",").map(Fp)):et._CE&&D1.test(e)?et._CE("",e):n},Qp=function(e){return function(t){return 1-e(1-t)}},em=function a(e,t){for(var n=e._first,i;n;)n instanceof gn?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},kr=function(e,t){return e&&(wt(e)?e:et[e]||O1(e))||t},ns=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return xn(e,function(o){et[o]=Dn[o]=r,et[s=o.toLowerCase()]=n;for(var l in r)et[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=et[o+"."+l]=r[l]}),r},tm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Tc=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/eu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*l1((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:tm(o);return r=eu/r,l.config=function(c,u){return a(e,c,u)},l},Ec=function a(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:tm(n);return i.config=function(r){return a(e,r)},i};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;ns(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});et.Linear.easeNone=et.none=et.Linear.easeIn;ns("Elastic",Tc("in"),Tc("out"),Tc());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};ns("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);ns("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});ns("Circ",function(a){return-(Tp(1-a*a)-1)});ns("Sine",function(a){return a===1?1:-a1(a*s1)+1});ns("Back",Ec("in"),Ec("out"),Ec());et.SteppedEase=et.steps=Dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-ht;return function(o){return((i*pa(0,s,o)|0)+r)*n}}};qs.ease=et["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Yu+=a+","+a+"Params,"});var nm=function(e,t){this.id=o1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Op,this.set=t?t.getSetter:Qu},Zs=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$s(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),oa||An.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$s(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ks(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Nl(this,n),!r._dp||r.parent||Bp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ht||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Np(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ys(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?yl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ht?0:this._rts,this.totalTime(pa(-this._delay,this._tDur,i),!0),Ol(this),m1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&di(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(_n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?yl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=h1);var i=en;return en=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),en=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Jd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Jd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(zn(this,n),_n(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,_n(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ht)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=wt(n)?n:kp,o=function(){var c=i.then;i.then=null,wt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ao(this)},a}();qn(Zs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var gn=function(a){Sp(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=_n(n.sortChildren),xt&&di(n.parent||xt,Li(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Vp(Li(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return Oo(0,arguments,this),this},t.from=function(i,r,s){return Oo(1,arguments,this),this},t.fromTo=function(i,r,s,o){return Oo(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,zo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Rt(i,r,zn(this,s),1),this},t.call=function(i,r,s){return di(this,Rt.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Rt(i,s,zn(this,l)),this},t.staggerFrom=function(i,r,s,o,l,c,u){return s.runBackwards=1,zo(s).immediateRender=_n(s.immediateRender),this.staggerTo(i,r,s,o,l,c,u)},t.staggerFromTo=function(i,r,s,o,l,c,u,d){return o.startAt=s,zo(o).immediateRender=_n(o.immediateRender),this.staggerTo(i,r,o,l,c,u,d)},t.render=function(i,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Xt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,g,p,m,_,v,x,b,y,E,A;if(this!==xt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,b=this._start,x=this._ts,_=!x,d&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(h=Xt(u%m),u===l?(p=this._repeat,h=c):(p=~~(u/m),p&&p===u/m&&(h=c,p--),h>c&&(h=c)),y=Ys(this._tTime,m),!o&&this._tTime&&y!==p&&(y=p),E&&p&1&&(h=c-h,A=1),p!==y&&!this._lock){var M=E&&y&1,S=M===(E&&p&1);if(p<y&&(M=!M),o=M?0:c,this._lock=1,this.render(o||(A?0:Xt(p*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Hn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=M?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;em(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=v1(this,Xt(o),Xt(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!r&&(Hn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,s);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,r,s),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=-ht);break}}f=g}else{f=this._last;for(var D=i<0?i:h;f;){if(g=f._prev,(f._act||D<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,s);if(f.render(f._ts>0?(D-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(D-f._start)*f._ts,r,s||en&&(f._initted||f._startAt)),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=D?-ht:ht);break}}f=g}}if(v&&!r&&(this.pause(),v.render(h>=o?0:-ht)._zTime=h>=o?1:-1,this._ts))return this._start=b,Ol(this),this.render(i,r,s);this._onUpdate&&!r&&Hn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ur(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(Hn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(Ui(r)||(r=zn(this,r,i)),!(i instanceof Zs)){if(tn(i))return i.forEach(function(o){return s.add(o,r)}),this;if(Ht(i))return this.addLabel(i,r);if(wt(i))i=Rt.delayedCall(0,i);else return this}return this!==i?di(this,i,r):this},t.getChildren=function(i,r,s,o){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-Vn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Rt?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return Ht(i)?this.removeLabel(i):wt(i)?this.killTweensOf(i):(zl(this,i),i===this._recent&&(this._recent=this._last),Fr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(An.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=zn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var o=Rt.delayedCall(0,r||ra,s);return o.data="isPause",this._hasPause=1,di(this,o,zn(this,i))},t.removePause=function(i){var r=this._first;for(i=zn(this,i);r;)r._start===i&&r.data==="isPause"&&ur(r),r=r._next},t.killTweensOf=function(i,r,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)Qi!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],o=Gn(i),l=this._first,c=Ui(r),u;l;)l instanceof Rt?d1(l._targets,o)&&(c?(!Qi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,o=zn(s,i),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=Rt.to(s,qn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||ht,onStart:function(){if(s.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==m&&$s(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,qn({startAt:{time:zn(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Qd(this,zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Qd(this,zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Fr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fr(this)},t.totalDuration=function(i){var r=0,s=this,o=s._last,l=Vn,c,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(d=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,di(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;$s(s,s===xt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(xt._ts&&(Np(xt,yl(i,xt)),zp=An.frame),An.frame>=$d){$d+=Pn.autoSleep||120;var r=xt._first;if((!r||!r._ts)&&Pn.autoSleep&&An._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||An.sleep()}}},e}(Zs);qn(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var N1=function(e,t,n,i,r,s,o){var l=new vn(this._pt,e,t,0,1,lm,null,r),c=0,u=0,d,h,f,g,p,m,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=sa(i)),s&&(v=[n,i],s(v,e,t),n=v[0],i=v[1]),h=n.match(Mc)||[];d=Mc.exec(i);)g=d[0],p=i.substring(c,d.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:m,c:g.charAt(1)==="="?Rs(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Mc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Lp.test(i)||_)&&(l.e=0),this._pt=l,l},Ku=function(e,t,n,i,r,s,o,l,c,u){wt(i)&&(i=i(r||0,e,s));var d=e[t],h=n!=="get"?n:wt(d)?c?e[t.indexOf("set")||!wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=wt(d)?c?V1:om:Ju,g;if(Ht(i)&&(~i.indexOf("random(")&&(i=sa(i)),i.charAt(1)==="="&&(g=Rs(h,i)+(Qt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||cu)return!isNaN(h*i)&&i!==""?(g=new vn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?H1:am,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&Xu(t,i),N1.call(this,e,t,h,i,f,l||Pn.stringFilter,c))},F1=function(e,t,n,i,r){if(wt(e)&&(e=No(e,r,t,n,i)),!yi(e)||e.style&&e.nodeType||tn(e)||Ap(e))return Ht(e)?No(e,r,t,n,i):e;var s={},o;for(o in e)s[o]=No(e[o],r,t,n,i);return s},im=function(e,t,n,i,r,s){var o,l,c,u;if(En[e]&&(o=new En[e]).init(r,o.rawVars?t[e]:F1(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new vn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==As))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Qi,cu,Zu=function a(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,d=i.callbackScope,h=i.runBackwards,f=i.yoyoEase,g=i.keyframes,p=i.autoRevert,m=e._dur,_=e._startAt,v=e._targets,x=e.parent,b=x&&x.data==="nested"?x.vars.targets:v,y=e._overwrite==="auto"&&!Hu,E=e.timeline,A,M,S,D,k,G,z,R,B,H,Z,V,Q;if(E&&(!g||!r)&&(r="none"),e._ease=kr(r,qs.ease),e._yEase=f?Qp(kr(f===!0?r:f,qs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(R=v[0]?Nr(v[0]).harness:0,V=R&&i[R.prop],A=vl(i,qu),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!p?_.render(-1,!0):_.revert(h&&m?nl:u1),_._lazy=0),s){if(ur(e._startAt=Rt.set(v,qn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&_n(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:d,stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(en||!o&&!p)&&e._startAt.revert(nl),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(o=!1),S=qn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&_n(l),immediateRender:o,stagger:0,parent:x},A),V&&(S[R.prop]=V),ur(e._startAt=Rt.set(v,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(en?e._startAt.revert(nl):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&_n(l)||l&&!m,M=0;M<v.length;M++){if(k=v[M],z=k._gsap||$u(v)[M]._gsap,e._ptLookup[M]=H={},iu[z.id]&&or.length&&xl(),Z=b===v?M:b.indexOf(k),R&&(B=new R).init(k,V||A,e,Z,b)!==!1&&(e._pt=D=new vn(e._pt,k,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(L){H[L]=D}),B.priority&&(G=1)),!R||V)for(S in A)En[S]&&(B=im(S,A,e,Z,k,b))?B.priority&&(G=1):H[S]=D=Ku.call(e,k,S,"get",A[S],Z,b,0,i.stringFilter);e._op&&e._op[M]&&e.kill(k,e._op[M]),y&&e._pt&&(Qi=e,xt.killTweensOf(k,H,e.globalTime(t)),Q=!e.parent,Qi=0),e._pt&&l&&(iu[z.id]=1)}G&&cm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,g&&t<=0&&E.render(Vn,!0,!0)},k1=function(e,t,n,i,r,s,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,d,h;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(c=d[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return cu=1,e.vars[t]="+=0",Zu(e,o),cu=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,u.e&&(u.e=Et(n)+Qt(u.e)),u.b&&(u.b=c.s+Qt(u.b))},U1=function(e,t){var n=e[0]?Nr(e[0]).harness:0,i=n&&n.aliases,r,s,o,l;if(!i)return t;r=Yr({},t);for(s in i)if(s in r)for(l=i[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},B1=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,o;if(tn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},No=function(e,t,n,i,r){return wt(e)?e.call(t,n,i,r):Ht(e)&&~e.indexOf("random(")?sa(e):e},rm=Yu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",sm={};xn(rm+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return sm[a]=1});var Rt=function(a){Sp(e,a);function e(n,i,r,s){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=a.call(this,s?i:zo(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,v=i.parent||xt,x=(tn(n)||Ap(n)?Ui(n[0]):"length"in i)?[n]:Gn(n),b,y,E,A,M,S,D,k;if(o._targets=x.length?$u(x):_l("GSAP target "+n+" not found. https://greensock.com",!Pn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||Ua(c)||Ua(u)){if(i=o.vars,b=o.timeline=new gn({data:"nested",defaults:p||{},targets:v&&v.data==="nested"?v.vars.targets:x}),b.kill(),b.parent=b._dp=Li(o),b._start=0,h||Ua(c)||Ua(u)){if(A=x.length,D=h&&jp(h),yi(h))for(M in h)~rm.indexOf(M)&&(k||(k={}),k[M]=h[M]);for(y=0;y<A;y++)E=vl(i,sm),E.stagger=0,_&&(E.yoyoEase=_),k&&Yr(E,k),S=x[y],E.duration=+No(c,Li(o),y,S,x),E.delay=(+No(u,Li(o),y,S,x)||0)-o._delay,!h&&A===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),b.to(S,E,D?D(y,S,x):0),b._ease=et.none;b.duration()?c=u=0:o.timeline=0}else if(g){zo(qn(b.vars.defaults,{ease:"none"})),b._ease=kr(g.ease||i.ease||"none");var G=0,z,R,B;if(tn(g))g.forEach(function(H){return b.to(x,H,">")}),b.duration();else{E={};for(M in g)M==="ease"||M==="easeEach"||B1(M,g[M],E,g.easeEach);for(M in E)for(z=E[M].sort(function(H,Z){return H.t-Z.t}),G=0,y=0;y<z.length;y++)R=z[y],B={ease:R.e,duration:(R.t-(y?z[y-1].t:0))/100*c},B[M]=R.v,b.to(x,B,G),G+=B.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return f===!0&&!Hu&&(Qi=Li(o),xt.killTweensOf(x),Qi=0),di(v,Li(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Xt(v._time)&&_n(d)&&g1(Li(o))&&v.data!=="nested")&&(o._tTime=-ht,o.render(Math.max(0,-u)||0)),m&&Vp(Li(o),m),o}var t=e.prototype;return t.render=function(i,r,s){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-ht&&!u?l:i<ht?0:i,h,f,g,p,m,_,v,x,b;if(!c)x1(this,i,r,s);else if(d!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=d,x=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,r,s);if(h=Xt(d%p),d===l?(g=this._repeat,h=c):(g=~~(d/p),g&&g===d/p&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(b=this._yEase,h=c-h),m=Ys(this._tTime,p),h===o&&!s&&this._initted)return this._tTime=d,this;g!==m&&(x&&this._yEase&&em(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=s=1,this.render(Xt(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(Gp(this,u?i:h,s,r,d))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(b||this._ease)(h/c),this._from&&(this.ratio=v=1-v),h&&!o&&!r&&(Hn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:!h&&_?-ht:x._dur*x._ease(h/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&ru(this,i,r,s),Hn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Hn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&ru(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ur(this,1),!r&&!(u&&!o)&&(d||o||_)&&(Hn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,o){oa||An.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Zu(this,l),c=this._ease(l/this._dur),k1(this,i,r,s,o,c,l)?this.resetTo(i,r,s,o):(Nl(this,0),this.parent||Up(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ao(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Qi&&Qi.vars.overwrite!==!0)._first||Ao(this),this.parent&&s!==this.timeline.totalDuration()&&$s(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?Gn(i):o,c=this._ptLookup,u=this._pt,d,h,f,g,p,m,_;if((!r||r==="all")&&p1(o,l))return r==="all"&&(this._pt=0),Ao(this);for(d=this._op=this._op||[],r!=="all"&&(Ht(r)&&(p={},xn(r,function(v){return p[v]=1}),r=p),r=U1(o,r)),_=o.length;_--;)if(~l.indexOf(o[_])){h=c[_],r==="all"?(d[_]=r,g=h,f={}):(f=d[_]=d[_]||{},g=r);for(p in g)m=h&&h[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&zl(this,m,"_pt"),delete h[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&u&&Ao(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Oo(1,arguments)},e.delayedCall=function(i,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,r,s){return Oo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return xt.killTweensOf(i,r,s)},e}(Zs);qn(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(a){Rt[a]=function(){var e=new gn,t=ou.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Ju=function(e,t,n){return e[t]=n},om=function(e,t,n){return e[t](n)},V1=function(e,t,n,i){return e[t](i.fp,n)},G1=function(e,t,n){return e.setAttribute(t,n)},Qu=function(e,t){return wt(e[t])?om:Wu(e[t])&&e.setAttribute?G1:Ju},am=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},H1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},lm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},eh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},W1=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},j1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?zl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},X1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},cm=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},vn=function(){function a(t,n,i,r,s,o,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=o||am,this.d=l||this,this.set=c||Ju,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=X1,this.m=n,this.mt=r,this.tween=i},a}();xn(Yu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return qu[a]=1});Dn.TweenMax=Dn.TweenLite=Rt;Dn.TimelineLite=Dn.TimelineMax=gn;xt=new gn({sortChildren:!1,defaults:qs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pn.stringFilter=Jp;var Js=[],rl={},q1=[],tf=0,Ac=function(e){return(rl[e]||q1).map(function(t){return t()})},uu=function(){var e=Date.now(),t=[];e-tf>2&&(Ac("matchMediaInit"),Js.forEach(function(n){var i=n.queries,r=n.conditions,s,o,l,c;for(o in i)s=On.matchMedia(i[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),Ac("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),tf=e,Ac("matchMedia"))},um=function(){function a(t,n){this.selector=n&&au(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){wt(n)&&(r=i,i=n,n=wt);var s=this,o=function(){var c=Lt,u=s.selector,d;return c&&c!==s&&c.data.push(s),r&&(s.selector=au(r)),Lt=s,d=i.apply(s,arguments),wt(d)&&s._r.push(d),Lt=c,s.selector=u,s.isReverted=!1,d};return s.last=o,n===wt?o(s):n?s[n]=o:o},e.ignore=function(n){var i=Lt;Lt=null,n(this),Lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof Rt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Zs)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=Js.indexOf(this);~o&&Js.splice(o,1)}},e.revert=function(n){this.kill(n||{})},a}(),Y1=function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(n,i,r){yi(n)||(n={matches:n});var s=new um(0,r||this.scope),o=s.conditions={},l,c,u;this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=On.matchMedia(n[c]),l&&(Js.indexOf(s)<0&&Js.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(uu):l.addEventListener("change",uu)));return u&&i(s),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),bl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return L1(i)})},timeline:function(e){return new gn(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ht(e)&&(e=Gn(e)[0]);var r=Nr(e||{}).get,s=n?kp:Fp;return n==="native"&&(n=""),e&&(t?s((En[t]&&En[t].get||r)(e,t,n,i)):function(o,l,c){return s((En[o]&&En[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Gn(e),e.length>1){var i=e.map(function(u){return Rn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}e=e[0]||{};var s=En[t],o=Nr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var d=new s;As._pt=0,d.init(e,n?u+n:u,As,0,[e]),d.render(1,d),As._pt&&eh(1,As)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Rn.to(e,Yr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=kr(e.ease,qs.ease)),Kd(qs,e||{})},config:function(e){return Kd(Pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!En[o]&&!Dn[o]&&_l(t+" effect requires "+o+" plugin.")}),wc[t]=function(o,l,c){return n(Gn(o),qn(l||{},r),c)},s&&(gn.prototype[t]=function(o,l,c){return this.add(wc[t](o,yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){et[e]=kr(t)},parseEase:function(e,t){return arguments.length?kr(e,t):et},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new gn(e),i,r;for(n.smoothChildTiming=_n(e.smoothChildTiming),xt.remove(n),n._dp=0,n._time=n._tTime=xt._time,i=xt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Rt&&i.vars.onComplete===i._targets[0]))&&di(n,i,i._start-i._delay),i=r;return di(xt,n,0),n},context:function(e,t){return e?new um(e,t):Lt},matchMedia:function(e){return new Y1(e)},matchMediaRefresh:function(){return Js.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||uu()},addEventListener:function(e,t){var n=rl[e]||(rl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=rl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:E1,wrapYoyo:A1,distribute:jp,random:qp,snap:Xp,normalize:T1,getUnit:Qt,clamp:b1,splitColor:Kp,toArray:Gn,selector:au,mapRange:$p,pipe:w1,unitize:S1,interpolate:C1,shuffle:Wp},install:Rp,effects:wc,ticker:An,updateRoot:gn.updateRoot,plugins:En,globalTimeline:xt,core:{PropTween:vn,globals:Ip,Tween:Rt,Timeline:gn,Animation:Zs,getCache:Nr,_removeLinkedListItem:zl,reverting:function(){return en},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return Hu=e}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return bl[a]=Rt[a]});An.add(gn.updateRoot);As=bl.to({},{duration:0});var $1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},K1=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=$1(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},Cc=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(o){var l,c;if(Ht(r)&&(l={},xn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}K1(o,r)}}}},Rn=bl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Cc("roundProps",lu),Cc("modifiers"),Cc("snap",Xp))||bl;Rt.version=gn.version=Rn.version="3.11.4";Dp=1;Ep()&&Ks();et.Power0;et.Power1;et.Power2;et.Power3;et.Power4;et.Linear;et.Quad;et.Cubic;et.Quart;et.Quint;et.Strong;et.Elastic;et.Back;et.SteppedEase;et.Bounce;et.Sine;et.Expo;var li=et.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nf,er,Is,th,Lr,rf,nh,Z1=function(){return typeof window<"u"},Bi={},Sr=180/Math.PI,zs=Math.PI/180,vs=Math.atan2,sf=1e8,ih=/([A-Z])/g,J1=/(left|right|width|margin|padding|x)/i,Q1=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},eM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},hm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},dm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},iM=function(e,t,n){return e.style[t]=n},rM=function(e,t,n){return e.style.setProperty(t,n)},sM=function(e,t,n){return e._gsap[t]=n},oM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},aM=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},lM=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},vt="transform",ri=vt+"Origin",cM=function(e,t){var n=this,i=this.target,r=i.style;if(e in Bi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=Pi(i,s)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Pi(i,e)),this.props.indexOf(vt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ri,t,"")),e=vt}(r||t)&&this.props.push(e,t,r[e])},fm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},uM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].replace(ih,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=nh(),r&&!r.isStart&&!n[vt]&&(fm(n),i.uncache=1)}},pm=function(e,t){var n={target:e,props:[],revert:uM,save:cM};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},mm,du=function(e,t){var n=er.createElementNS?er.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):er.createElement(e);return n.style?n:er.createElement(e)},_i=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ih,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Qs(t)||t,1)||""},of="O,Moz,ms,Ms,Webkit".split(","),Qs=function(e,t,n){var i=t||Lr,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(of[s]+e in r););return s<0?null:(s===3?"ms":s>=0?of[s]:"")+e},fu=function(){Z1()&&window.document&&(nf=window,er=nf.document,Is=er.documentElement,Lr=du("div")||{style:{}},du("div"),vt=Qs(vt),ri=vt+"Origin",Lr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mm=!!Qs("perspective"),nh=Rn.core.reverting,th=1)},Lc=function a(e){var t=du("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(Is.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Is.removeChild(t),this.style.cssText=r,s},af=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},gm=function(e){var t;try{t=e.getBBox()}catch{t=Lc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Lc||(t=Lc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+af(e,["x","cx","x1"])||0,y:+af(e,["y","cy","y1"])||0,width:0,height:0}:t},_m=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&gm(e))},aa=function(e,t){if(t){var n=e.style;t in Bi&&t!==ri&&(t=vt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(ih,"-$1").toLowerCase())):n.removeAttribute(t)}},tr=function(e,t,n,i,r,s){var o=new vn(e._pt,t,n,0,1,s?dm:hm);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},lf={deg:1,rad:1,turn:1},hM={grid:1,flex:1},hr=function a(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=Lr.style,l=J1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",g,p,m,_;return i===s||!r||lf[i]||lf[s]?r:(s!=="px"&&!h&&(r=a(e,t,n,"px")),_=e.getCTM&&_m(e),(f||s==="%")&&(Bi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],Et(f?r/g*d:r/100*g)):(o[l?"width":"height"]=d+(h?s:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===er||!p.appendChild)&&(p=er.body),m=p._gsap,m&&f&&m.width&&l&&m.time===An.time&&!m.uncache?Et(r/m.width*d):((f||s==="%")&&!hM[_i(p,"display")]&&(o.position=_i(e,"position")),p===e&&(o.position="static"),p.appendChild(Lr),g=Lr[u],p.removeChild(Lr),o.position="absolute",l&&f&&(m=Nr(p),m.time=An.time,m.width=p[u]),Et(h?g*r/d:g&&r?d/g*r:0))))},Pi=function(e,t,n,i){var r;return th||fu(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Bi[t]&&t!=="transform"?(r=ca(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:wl(_i(e,ri))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ml[t]&&Ml[t](e,t,n)||_i(e,t)||Op(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?hr(e,t,r,n)+n:r},dM=function(e,t,n,i){if(!n||n==="none"){var r=Qs(t,e,1),s=r&&_i(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=_i(e,"borderTopColor"))}var o=new vn(this._pt,e.style,t,0,1,lm),l=0,c=0,u,d,h,f,g,p,m,_,v,x,b,y;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=_i(e,t)||i,e.style[t]=n),u=[n,i],Jp(u),n=u[0],i=u[1],h=n.match(Es)||[],y=i.match(Es)||[],y.length){for(;d=Es.exec(i);)m=d[0],v=i.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(p=h[c++]||"")&&(f=parseFloat(p)||0,b=p.substr((f+"").length),m.charAt(1)==="="&&(m=Rs(f,m)+b),_=parseFloat(m),x=m.substr((_+"").length),l=Es.lastIndex-x.length,x||(x=x||Pn.units[t]||b,l===i.length&&(i+=x,o.e+=x)),b!==x&&(f=hr(e,t,p,x)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:_-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?dm:hm;return Lp.test(i)&&(o.e=0),this._pt=o,o},cf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=cf[n]||n,t[1]=cf[i]||i,t.join(" ")},pM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Bi[o]&&(l=1,o=o==="transformOrigin"?ri:vt),aa(n,o);l&&(aa(n,vt),s&&(s.svg&&n.removeAttribute("transform"),ca(n,1),s.uncache=1,fm(i)))}},Ml={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new vn(e._pt,t,n,0,0,pM);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},la=[1,0,0,1,0,0],xm={},vm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},uf=function(e){var t=_i(e,vt);return vm(t)?la:t.substr(7).match(Cp).map(Et)},rh=function(e,t){var n=e._gsap||Nr(e),i=e.style,r=uf(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?la:r):(r===la&&!e.offsetParent&&e!==Is&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Is.appendChild(e)),r=uf(e),l?i.display=l:aa(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):Is.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},pu=function(e,t,n,i,r,s){var o=e._gsap,l=r||rh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],g=l[1],p=l[2],m=l[3],_=l[4],v=l[5],x=t.split(" "),b=parseFloat(x[0])||0,y=parseFloat(x[1])||0,E,A,M,S;n?l!==la&&(A=f*m-g*p)&&(M=b*(m/A)+y*(-p/A)+(p*v-m*_)/A,S=b*(-g/A)+y*(f/A)-(f*v-g*_)/A,b=M,y=S):(E=gm(e),b=E.x+(~x[0].indexOf("%")?b/100*E.width:b),y=E.y+(~(x[1]||x[0]).indexOf("%")?y/100*E.height:y)),i||i!==!1&&o.smooth?(_=b-c,v=y-u,o.xOffset=d+(_*f+v*p)-_,o.yOffset=h+(_*g+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ri]="0px 0px",s&&(tr(s,o,"xOrigin",c,b),tr(s,o,"yOrigin",u,y),tr(s,o,"xOffset",d,o.xOffset),tr(s,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+y)},ca=function(e,t){var n=e._gsap||new nm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=_i(e,ri)||"0",u,d,h,f,g,p,m,_,v,x,b,y,E,A,M,S,D,k,G,z,R,B,H,Z,V,Q,L,W,q,ne,te,oe;return u=d=h=p=m=_=v=x=b=0,f=g=1,n.svg=!!(e.getCTM&&_m(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[vt]!=="none"?l[vt]:"")),i.scale=i.rotate=i.translate="none"),A=rh(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),pu(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,A)),y=n.xOrigin||0,E=n.yOrigin||0,A!==la&&(k=A[0],G=A[1],z=A[2],R=A[3],u=B=A[4],d=H=A[5],A.length===6?(f=Math.sqrt(k*k+G*G),g=Math.sqrt(R*R+z*z),p=k||G?vs(G,k)*Sr:0,v=z||R?vs(z,R)*Sr+p:0,v&&(g*=Math.abs(Math.cos(v*zs))),n.svg&&(u-=y-(y*k+E*z),d-=E-(y*G+E*R))):(oe=A[6],ne=A[7],L=A[8],W=A[9],q=A[10],te=A[11],u=A[12],d=A[13],h=A[14],M=vs(oe,q),m=M*Sr,M&&(S=Math.cos(-M),D=Math.sin(-M),Z=B*S+L*D,V=H*S+W*D,Q=oe*S+q*D,L=B*-D+L*S,W=H*-D+W*S,q=oe*-D+q*S,te=ne*-D+te*S,B=Z,H=V,oe=Q),M=vs(-z,q),_=M*Sr,M&&(S=Math.cos(-M),D=Math.sin(-M),Z=k*S-L*D,V=G*S-W*D,Q=z*S-q*D,te=R*D+te*S,k=Z,G=V,z=Q),M=vs(G,k),p=M*Sr,M&&(S=Math.cos(M),D=Math.sin(M),Z=k*S+G*D,V=B*S+H*D,G=G*S-k*D,H=H*S-B*D,k=Z,B=V),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,_=180-_),f=Et(Math.sqrt(k*k+G*G+z*z)),g=Et(Math.sqrt(H*H+oe*oe)),M=vs(B,H),v=Math.abs(M)>2e-4?M*Sr:0,b=te?1/(te<0?-te:te):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!vm(_i(e,vt)),Z&&e.setAttribute("transform",Z))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=h+s,n.scaleX=Et(f),n.scaleY=Et(g),n.rotation=Et(p)+o,n.rotationX=Et(m)+o,n.rotationY=Et(_)+o,n.skewX=v+o,n.skewY=x+o,n.transformPerspective=b+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ri]=wl(c)),n.xOffset=n.yOffset=0,n.force3D=Pn.force3D,n.renderTransform=n.svg?gM:mm?ym:mM,n.uncache=0,n},wl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pc=function(e,t,n){var i=Qt(t);return Et(parseFloat(t)+parseFloat(hr(e,"x",n+"px",i)))+i},mM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ym(e,t)},yr="0deg",yo="0px",br=") ",ym=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,_=n.force3D,v=n.target,x=n.zOrigin,b="",y=_==="auto"&&e&&e!==1||_===!0;if(x&&(d!==yr||u!==yr)){var E=parseFloat(u)*zs,A=Math.sin(E),M=Math.cos(E),S;E=parseFloat(d)*zs,S=Math.cos(E),s=Pc(v,s,A*S*-x),o=Pc(v,o,-Math.sin(E)*-x),l=Pc(v,l,M*S*-x+x)}m!==yo&&(b+="perspective("+m+br),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(y||s!==yo||o!==yo||l!==yo)&&(b+=l!==yo||y?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+br),c!==yr&&(b+="rotate("+c+br),u!==yr&&(b+="rotateY("+u+br),d!==yr&&(b+="rotateX("+d+br),(h!==yr||f!==yr)&&(b+="skew("+h+", "+f+br),(g!==1||p!==1)&&(b+="scale("+g+", "+p+br),v.style[vt]=b||"translate(0, 0)"},gM=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,_=n.yOffset,v=n.forceCSS,x=parseFloat(s),b=parseFloat(o),y,E,A,M,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=zs,c*=zs,y=Math.cos(l)*d,E=Math.sin(l)*d,A=Math.sin(l-c)*-h,M=Math.cos(l-c)*h,c&&(u*=zs,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,M*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),y*=S,E*=S)),y=Et(y),E=Et(E),A=Et(A),M=Et(M)):(y=d,M=h,E=A=0),(x&&!~(s+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(x=hr(f,"x",s,"px"),b=hr(f,"y",o,"px")),(g||p||m||_)&&(x=Et(x+g-(g*y+p*A)+m),b=Et(b+p-(g*E+p*M)+_)),(i||r)&&(S=f.getBBox(),x=Et(x+i/100*S.width),b=Et(b+r/100*S.height)),S="matrix("+y+","+E+","+A+","+M+","+x+","+b+")",f.setAttribute("transform",S),v&&(f.style[vt]=S)},_M=function(e,t,n,i,r){var s=360,o=Ht(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Sr:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=r.split("_")[1],d==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),d==="cw"&&c<0?c=(c+s*sf)%s-~~(c/s)*s:d==="ccw"&&c>0&&(c=(c-s*sf)%s-~~(c/s)*s)),e._pt=h=new vn(e._pt,t,n,i,c,eM),h.e=u,h.u="deg",e._props.push(n),h},hf=function(e,t){for(var n in t)e[n]=t[n];return e},xM=function(e,t,n){var i=hf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,d,h,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[vt]=t,o=ca(n,1),aa(n,vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[vt],s[vt]=t,o=ca(n,1),s[vt]=c);for(l in Bi)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(f=Qt(c),g=Qt(u),d=f!==g?hr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new vn(e._pt,o,l,d,h-d,hu),e._pt.u=g||0,e._props.push(l));hf(o,i)};xn("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?a+o:"border"+o+a});Ml[e>1?"border"+a:a]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=s.map(function(g){return Pi(o,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},s.forEach(function(g,p){return f[g]=h[p]=h[p]||h[(p-1)/2|0]}),o.init(l,f,d)}});var bm={name:"css",register:fu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,g,p,m,_,v,x,b,y,E,A,M;th||fu(),this.styles=this.styles||pm(e),M=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(En[p]&&im(p,t,n,i,e,r)))){if(f=typeof u,g=Ml[p],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=sa(u)),g)g(this,e,p,u,n)&&(A=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",ar.lastIndex=0,ar.test(c)||(m=Qt(c),_=Qt(u)),_?m!==_&&(c=hr(e,p,c,_)+_):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,p),s.push(p),M.push(p,0,o[p]);else if(f!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,r):l[p],Ht(c)&&~c.indexOf("random(")&&(c=sa(c)),Qt(c+"")||(c+=Pn.units[p]||Qt(Pi(e,p))||""),(c+"").charAt(1)==="="&&(c=Pi(e,p))):c=Pi(e,p),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),p in Oi&&(p==="autoAlpha"&&(h===1&&Pi(e,"visibility")==="hidden"&&d&&(h=0),M.push("visibility",0,o.visibility),tr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=Oi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),x=p in Bi,x){if(this.styles.save(p),b||(y=e._gsap,y.renderTransform&&!t.parseTransform||ca(e,t.parseTransform),E=t.smoothOrigin!==!1&&y.smooth,b=this._pt=new vn(this._pt,o,vt,0,1,y.renderTransform,y,0,-1),b.dep=1),p==="scale")this._pt=new vn(this._pt,y,"scaleY",y.scaleY,(v?Rs(y.scaleY,v+d):d)-y.scaleY||0,hu),this._pt.u=0,s.push("scaleY",p),p+="X";else if(p==="transformOrigin"){M.push(ri,0,o[ri]),u=fM(u),y.svg?pu(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==y.zOrigin&&tr(this,y,"zOrigin",y.zOrigin,_),tr(this,o,p,wl(c),wl(u)));continue}else if(p==="svgOrigin"){pu(e,u,1,E,0,this);continue}else if(p in xm){_M(this,y,p,h,v?Rs(h,v+u):u);continue}else if(p==="smoothOrigin"){tr(this,y,"smooth",y.smooth,u);continue}else if(p==="force3D"){y[p]=u;continue}else if(p==="transform"){xM(this,u,e);continue}}else p in o||(p=Qs(p)||p);if(x||(d||d===0)&&(h||h===0)&&!Q1.test(u)&&p in o)m=(c+"").substr((h+"").length),d||(d=0),_=Qt(u)||(p in Pn.units?Pn.units[p]:m),m!==_&&(h=hr(e,p,c,_)),this._pt=new vn(this._pt,x?y:o,p,h,(v?Rs(h,v+d):d)-h,!x&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?nM:hu),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=tM);else if(p in o)dM.call(this,e,p,c,v?v+u:u);else if(p in e)this.add(e,p,c||e[p],v?v+u:u,i,r);else if(p!=="parseTransform"){Xu(p,u);continue}x||(p in o?M.push(p,0,o[p]):M.push(p,1,c||e[p])),s.push(p)}}A&&cm(this)},render:function(e,t){if(t.tween._time||!nh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Pi,aliases:Oi,getSetter:function(e,t,n){var i=Oi[t];return i&&i.indexOf(",")<0&&(t=i),t in Bi&&t!==ri&&(e._gsap.x||Pi(e,"x"))?n&&rf===n?t==="scale"?oM:sM:(rf=n||{})&&(t==="scale"?aM:lM):e.style&&!Wu(e.style[t])?iM:~t.indexOf("-")?rM:Qu(e,t)},core:{_removeProperty:aa,_getMatrix:rh}};Rn.utils.checkPrefix=Qs;Rn.core.getStyleSaver=pm;(function(a,e,t,n){var i=xn(a+","+e+","+t,function(r){Bi[r]=1});xn(e,function(r){Pn.units[r]="deg",xm[r]=1}),Oi[i[13]]=a+","+e,xn(n,function(r){var s=r.split(":");Oi[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Pn.units[a]="px"});Rn.registerPlugin(bm);var Nn=Rn.registerPlugin(bm)||Rn;Nn.core.Tween;function df(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function vM(a,e,t){return e&&df(a.prototype,e),t&&df(a,t),a}/*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qt,mu,Cn,nr,ir,Os,Mm,Tr,Fo,wm,Ni,Jn,Sm,Tm=function(){return qt||typeof window<"u"&&(qt=window.gsap)&&qt.registerPlugin&&qt},Em=1,Cs=[],Ze=[],xi=[],ko=Date.now,gu=function(e,t){return t},yM=function(){var e=Fo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Ze),i.push.apply(i,xi),Ze=n,xi=i,gu=function(s,o){return t[s](o)}},lr=function(e,t){return~xi.indexOf(e)&&xi[xi.indexOf(e)+1][t]},Uo=function(e){return!!~wm.indexOf(e)},dn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ba="scrollLeft",Va="scrollTop",_u=function(){return Ni&&Ni.isPressed||Ze.cache++},Sl=function(e,t){var n=function i(r){if(r||r===0){Em&&(Cn.history.scrollRestoration="manual");var s=Ni&&Ni.isPressed;r=i.v=Math.round(r)||(Ni&&Ni.iOS?1:0),e(r),i.cacheID=Ze.cache,s&&gu("ss",r)}else(t||Ze.cache!==i.cacheID||gu("ref"))&&(i.cacheID=Ze.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},un={s:Ba,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Sl(function(a){return arguments.length?Cn.scrollTo(a,It.sc()):Cn.pageXOffset||nr[Ba]||ir[Ba]||Os[Ba]||0})},It={s:Va,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:un,sc:Sl(function(a){return arguments.length?Cn.scrollTo(un.sc(),a):Cn.pageYOffset||nr[Va]||ir[Va]||Os[Va]||0})},pn=function(e){return qt.utils.toArray(e)[0]||(typeof e=="string"&&qt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},dr=function(e,t){var n=t.s,i=t.sc;Uo(e)&&(e=nr.scrollingElement||ir);var r=Ze.indexOf(e),s=i===It.sc?1:2;!~r&&(r=Ze.push(e)-1),Ze[r+s]||e.addEventListener("scroll",_u);var o=Ze[r+s],l=o||(Ze[r+s]=Sl(lr(e,n),!0)||(Uo(e)?i:Sl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=qt.getProperty(e,"scrollBehavior")==="smooth"),l},xu=function(e,t,n){var i=e,r=e,s=ko(),o=s,l=t||50,c=Math.max(500,l*3),u=function(g,p){var m=ko();p||m-s>l?(r=i,i=g,o=s,s=m):n?i+=g:i=r+(g-r)/(m-o)*(s-o)},d=function(){r=i=n?0:i,o=s=0},h=function(g){var p=o,m=r,_=ko();return(g||g===0)&&g!==i&&u(g),s===o||_-o>c?0:(i+(n?m:-m))/((n?_:s)-p)*1e3};return{update:u,reset:d,getVelocity:h}},bo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ff=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Am=function(){Fo=qt.core.globals().ScrollTrigger,Fo&&Fo.core&&yM()},Cm=function(e){return qt=e||Tm(),qt&&typeof document<"u"&&document.body&&(Cn=window,nr=document,ir=nr.documentElement,Os=nr.body,wm=[Cn,nr,ir,Os],qt.utils.clamp,Sm=qt.core.context||function(){},Tr="onpointerenter"in Os?"pointer":"mouse",Mm=Pt.isTouch=Cn.matchMedia&&Cn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Cn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Jn=Pt.eventTypes=("ontouchstart"in ir?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ir?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Em=0},500),Am(),mu=1),mu};un.op=It;Ze.cache=0;var Pt=function(){function a(t){this.init(t)}var e=a.prototype;return e.init=function(n){mu||Cm(qt)||console.warn("Please gsap.registerPlugin(Observer)"),Fo||Am();var i=n.tolerance,r=n.dragMinimum,s=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,p=n.event,m=n.onDragStart,_=n.onDragEnd,v=n.onDrag,x=n.onPress,b=n.onRelease,y=n.onRight,E=n.onLeft,A=n.onUp,M=n.onDown,S=n.onChangeX,D=n.onChangeY,k=n.onChange,G=n.onToggleX,z=n.onToggleY,R=n.onHover,B=n.onHoverEnd,H=n.onMove,Z=n.ignoreCheck,V=n.isNormalizer,Q=n.onGestureStart,L=n.onGestureEnd,W=n.onWheel,q=n.onEnable,ne=n.onDisable,te=n.onClick,oe=n.scrollSpeed,j=n.capture,ze=n.allowClicks,pe=n.lockAxis,De=n.onLockAxis;this.target=o=pn(o)||ir,this.vars=n,f&&(f=qt.utils.toArray(f)),i=i||1e-9,r=r||0,g=g||1,oe=oe||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Cn.getComputedStyle(Os).lineHeight)||22);var he,ke,me,ye,it,ot,Je,X=this,st=0,Re=0,St=dr(o,un),gt=dr(o,It),C=St(),w=gt(),J=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Jn[0]==="pointerdown",re=Uo(o),ee=o.ownerDocument||nr,ae=[0,0,0],be=[0,0,0],P=0,F=function(){return P=ko()},le=function(ce,se){return(X.event=ce)&&f&&~f.indexOf(ce.target)||se&&J&&ce.pointerType!=="touch"||Z&&Z(ce,se)},ge=function(){X._vx.reset(),X._vy.reset(),ke.pause(),d&&d(X)},ue=function(){var ce=X.deltaX=ff(ae),se=X.deltaY=ff(be),Se=Math.abs(ce)>=i,Ie=Math.abs(se)>=i;k&&(Se||Ie)&&k(X,ce,se,ae,be),Se&&(y&&X.deltaX>0&&y(X),E&&X.deltaX<0&&E(X),S&&S(X),G&&X.deltaX<0!=st<0&&G(X),st=X.deltaX,ae[0]=ae[1]=ae[2]=0),Ie&&(M&&X.deltaY>0&&M(X),A&&X.deltaY<0&&A(X),D&&D(X),z&&X.deltaY<0!=Re<0&&z(X),Re=X.deltaY,be[0]=be[1]=be[2]=0),(ye||me)&&(H&&H(X),me&&(v(X),me=!1),ye=!1),ot&&!(ot=!1)&&De&&De(X),it&&(W(X),it=!1),he=0},Me=function(ce,se,Se){ae[Se]+=ce,be[Se]+=se,X._vx.update(ce),X._vy.update(se),c?he||(he=requestAnimationFrame(ue)):ue()},ve=function(ce,se){pe&&!Je&&(X.axis=Je=Math.abs(ce)>Math.abs(se)?"x":"y",ot=!0),Je!=="y"&&(ae[2]+=ce,X._vx.update(ce,!0)),Je!=="x"&&(be[2]+=se,X._vy.update(se,!0)),c?he||(he=requestAnimationFrame(ue)):ue()},Be=function(ce){if(!le(ce,1)){ce=bo(ce,u);var se=ce.clientX,Se=ce.clientY,Ie=se-X.x,Ue=Se-X.y,At=X.isDragging;X.x=se,X.y=Se,(At||Math.abs(X.startX-se)>=r||Math.abs(X.startY-Se)>=r)&&(v&&(me=!0),At||(X.isDragging=!0),ve(Ie,Ue),At||m&&m(X))}},_e=X.onPress=function(Ge){le(Ge,1)||(X.axis=Je=null,ke.pause(),X.isPressed=!0,Ge=bo(Ge),st=Re=0,X.startX=X.x=Ge.clientX,X.startY=X.y=Ge.clientY,X._vx.reset(),X._vy.reset(),dn(V?o:ee,Jn[1],Be,u,!0),X.deltaX=X.deltaY=0,x&&x(X))},qe=function(ce){if(!le(ce,1)){sn(V?o:ee,Jn[1],Be,!0);var se=!isNaN(X.y-X.startY),Se=X.isDragging&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),Ie=bo(ce);!Se&&se&&(X._vx.reset(),X._vy.reset(),u&&ze&&qt.delayedCall(.08,function(){if(ko()-P>300&&!ce.defaultPrevented){if(ce.target.click)ce.target.click();else if(ee.createEvent){var Ue=ee.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,Cn,1,Ie.screenX,Ie.screenY,Ie.clientX,Ie.clientY,!1,!1,!1,!1,0,null),ce.target.dispatchEvent(Ue)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,d&&!V&&ke.restart(!0),_&&Se&&_(X),b&&b(X,Se)}},I=function(ce){return ce.touches&&ce.touches.length>1&&(X.isGesturing=!0)&&Q(ce,X.isDragging)},$=function(){return(X.isGesturing=!1)||L(X)},ie=function(ce){if(!le(ce)){var se=St(),Se=gt();Me((se-C)*oe,(Se-w)*oe,1),C=se,w=Se,d&&ke.restart(!0)}},de=function(ce){if(!le(ce)){ce=bo(ce,u),W&&(it=!0);var se=(ce.deltaMode===1?l:ce.deltaMode===2?Cn.innerHeight:1)*g;Me(ce.deltaX*se,ce.deltaY*se,0),d&&!V&&ke.restart(!0)}},we=function(ce){if(!le(ce)){var se=ce.clientX,Se=ce.clientY,Ie=se-X.x,Ue=Se-X.y;X.x=se,X.y=Se,ye=!0,(Ie||Ue)&&ve(Ie,Ue)}},Ke=function(ce){X.event=ce,R(X)},lt=function(ce){X.event=ce,B(X)},bt=function(ce){return le(ce)||bo(ce,u)&&te(X)};ke=X._dc=qt.delayedCall(h||.25,ge).pause(),X.deltaX=X.deltaY=0,X._vx=xu(0,50,!0),X._vy=xu(0,50,!0),X.scrollX=St,X.scrollY=gt,X.isDragging=X.isGesturing=X.isPressed=!1,Sm(this),X.enable=function(Ge){return X.isEnabled||(dn(re?ee:o,"scroll",_u),s.indexOf("scroll")>=0&&dn(re?ee:o,"scroll",ie,u,j),s.indexOf("wheel")>=0&&dn(o,"wheel",de,u,j),(s.indexOf("touch")>=0&&Mm||s.indexOf("pointer")>=0)&&(dn(o,Jn[0],_e,u,j),dn(ee,Jn[2],qe),dn(ee,Jn[3],qe),ze&&dn(o,"click",F,!1,!0),te&&dn(o,"click",bt),Q&&dn(ee,"gesturestart",I),L&&dn(ee,"gestureend",$),R&&dn(o,Tr+"enter",Ke),B&&dn(o,Tr+"leave",lt),H&&dn(o,Tr+"move",we)),X.isEnabled=!0,Ge&&Ge.type&&_e(Ge),q&&q(X)),X},X.disable=function(){X.isEnabled&&(Cs.filter(function(Ge){return Ge!==X&&Uo(Ge.target)}).length||sn(re?ee:o,"scroll",_u),X.isPressed&&(X._vx.reset(),X._vy.reset(),sn(V?o:ee,Jn[1],Be,!0)),sn(re?ee:o,"scroll",ie,j),sn(o,"wheel",de,j),sn(o,Jn[0],_e,j),sn(ee,Jn[2],qe),sn(ee,Jn[3],qe),sn(o,"click",F,!0),sn(o,"click",bt),sn(ee,"gesturestart",I),sn(ee,"gestureend",$),sn(o,Tr+"enter",Ke),sn(o,Tr+"leave",lt),sn(o,Tr+"move",we),X.isEnabled=X.isPressed=X.isDragging=!1,ne&&ne(X))},X.kill=X.revert=function(){X.disable();var Ge=Cs.indexOf(X);Ge>=0&&Cs.splice(Ge,1),Ni===X&&(Ni=0)},Cs.push(X),V&&Uo(o)&&(Ni=X),X.enable(p)},vM(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();Pt.version="3.11.4";Pt.create=function(a){return new Pt(a)};Pt.register=Cm;Pt.getAll=function(){return Cs.slice()};Pt.getById=function(a){return Cs.filter(function(e){return e.vars.id===a})[0]};Tm()&&qt.registerPlugin(Pt);/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Le,ws,Qe,mt,ti,Mt,Lm,Tl,El,Ls,sl,Ga,Zt,Fl,vu,an,pf,mf,Ss,Pm,Dc,Dm,Sn,Rm,Im,zm,qi,yu,sh,Rc,Ha=1,ln=Date.now,Ic=ln(),jn=0,Wa=0,gf=function(){return Fl=1},_f=function(){return Fl=0},ui=function(e){return e},Lo=function(e){return Math.round(e*1e5)/1e5||0},Om=function(){return typeof window<"u"},Nm=function(){return Le||Om()&&(Le=window.gsap)&&Le.registerPlugin&&Le},$r=function(e){return!!~Lm.indexOf(e)},Fm=function(e){return lr(e,"getBoundingClientRect")||($r(e)?function(){return hl.width=Qe.innerWidth,hl.height=Qe.innerHeight,hl}:function(){return Ii(e)})},bM=function(e,t,n){var i=n.d,r=n.d2,s=n.a;return(s=lr(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(t?Qe["inner"+r]:e["client"+r])||0}},MM=function(e,t){return!t||~xi.indexOf(e)?Fm(e):function(){return hl}},rr=function(e,t){var n=t.s,i=t.d2,r=t.d,s=t.a;return(n="scroll"+i)&&(s=lr(e,n))?s()-Fm(e)()[r]:$r(e)?(ti[n]||Mt[n])-(Qe["inner"+i]||ti["client"+i]||Mt["client"+i]):e[n]-e["offset"+i]},ja=function(e,t){for(var n=0;n<Ss.length;n+=3)(!t||~t.indexOf(Ss[n+1]))&&e(Ss[n],Ss[n+1],Ss[n+2])},Qn=function(e){return typeof e=="string"},hn=function(e){return typeof e=="function"},Po=function(e){return typeof e=="number"},ol=function(e){return typeof e=="object"},Mo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},zc=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ys=Math.abs,km="left",Um="top",oh="right",ah="bottom",Ur="width",Br="height",Bo="Right",Vo="Left",Go="Top",Ho="Bottom",Tt="padding",kn="margin",eo="Width",lh="Height",Wt="px",ni=function(e){return Qe.getComputedStyle(e)},wM=function(e){var t=ni(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},xf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ii=function(e,t){var n=t&&ni(e)[vu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},bu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Bm=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},SM=function(e){return function(t){return Le.utils.snap(Bm(e),t)}},ch=function(e){var t=Le.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,s){s===void 0&&(s=.001);var o;if(!r)return t(i);if(r>0){for(i-=s,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=s;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,s){s===void 0&&(s=.001);var o=t(i);return!r||Math.abs(o-i)<s||o-i<0==r<0?o:t(r<0?i-e:i+e)}},TM=function(e){return function(t,n){return ch(Bm(e))(t,n.direction)}},Xa=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},jt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Bt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},qa=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},vf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ya={toggleActions:"play",anticipatePin:0},Al={top:0,left:0,center:.5,bottom:1,right:1},al=function(e,t){if(Qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Al?Al[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},$a=function(e,t,n,i,r,s,o,l){var c=r.startColor,u=r.endColor,d=r.fontSize,h=r.indent,f=r.fontWeight,g=mt.createElement("div"),p=$r(n)||lr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=p?Mt:n,v=e.indexOf("start")!==-1,x=v?c:u,b="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((m||l)&&p?"fixed;":"absolute;"),(m||l||!p)&&(b+=(i===It?oh:ah)+":"+(s+parseFloat(h))+"px;"),o&&(b+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],ll(g,0,i,v),g},ll=function(e,t,n,i){var r={display:"block"},s=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+s+eo]=1,r["border"+o+eo]=0,r[n.p]=t+"px",Le.set(e,r)},Ye=[],Mu={},ua,yf=function(){return ln()-jn>34&&(ua||(ua=requestAnimationFrame(fr)))},bs=function(){(!Sn||!Sn.isPressed||Sn.startX>Mt.clientWidth)&&(Ze.cache++,Sn?ua||(ua=requestAnimationFrame(fr)):fr(),jn||Zr("scrollStart"),jn=ln())},Oc=function(){zm=Qe.innerWidth,Im=Qe.innerHeight},Do=function(){Ze.cache++,!Zt&&!Dm&&!mt.fullscreenElement&&!mt.webkitFullscreenElement&&(!Rm||zm!==Qe.innerWidth||Math.abs(Qe.innerHeight-Im)>Qe.innerHeight*.25)&&Tl.restart(!0)},Kr={},EM=[],Vm=function a(){return Bt(tt,"scrollEnd",a)||Pr(!0)},Zr=function(e){return Kr[e]&&Kr[e].map(function(t){return t()})||EM},Tn=[],Gm=function(e){for(var t=0;t<Tn.length;t+=5)(!e||Tn[t+4]&&Tn[t+4].query===e)&&(Tn[t].style.cssText=Tn[t+1],Tn[t].getBBox&&Tn[t].setAttribute("transform",Tn[t+2]||""),Tn[t+3].uncache=1)},uh=function(e,t){var n;for(an=0;an<Ye.length;an++)n=Ye[an],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Gm(t),t||Zr("revert")},Hm=function(e,t){Ze.cache++,(t||!ei)&&Ze.forEach(function(n){return hn(n)&&n.cacheID++&&(n.rec=0)}),Qn(e)&&(Qe.history.scrollRestoration=sh=e)},ei,Vr=0,bf,AM=function(){if(bf!==Vr){var e=bf=Vr;requestAnimationFrame(function(){return e===Vr&&Pr(!0)})}},Pr=function(e,t){if(jn&&!e){jt(tt,"scrollEnd",Vm);return}ei=tt.isRefreshing=!0,Ze.forEach(function(i){return hn(i)&&i.cacheID++&&(i.rec=i())});var n=Zr("refreshInit");Pm&&tt.sort(),t||uh(),Ze.forEach(function(i){hn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ye.slice(0).forEach(function(i){return i.refresh()}),Ye.forEach(function(i,r){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.revert(!1,1)}}),Ye.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,rr(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Ze.forEach(function(i){hn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Hm(sh,1),Tl.pause(),Vr++,fr(2),Ye.forEach(function(i){return hn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),ei=tt.isRefreshing=!1,Zr("refresh")},Mf=0,cl=1,Wo,fr=function(e){if(!ei||e===2){tt.isUpdating=!0,Wo&&Wo.update(0);var t=Ye.length,n=ln(),i=n-Ic>=50,r=t&&Ye[0].scroll();if(cl=Mf>r?-1:1,Mf=r,i&&(jn&&!Fl&&n-jn>200&&(jn=0,Zr("scrollEnd")),sl=Ic,Ic=n),cl<0){for(an=t;an-- >0;)Ye[an]&&Ye[an].update(0,i);cl=1}else for(an=0;an<t;an++)Ye[an]&&Ye[an].update(0,i);tt.isUpdating=!1}ua=0},wu=[km,Um,ah,oh,kn+Ho,kn+Bo,kn+Go,kn+Vo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ul=wu.concat([Ur,Br,"boxSizing","max"+eo,"max"+lh,"position",kn,Tt,Tt+Go,Tt+Bo,Tt+Ho,Tt+Vo]),CM=function(e,t,n){Ns(n);var i=e._gsap;if(i.spacerIsNative)Ns(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Nc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=wu.length,s=t.style,o=e.style,l;r--;)l=wu[r],s[l]=n[l];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),o[ah]=o[oh]="auto",s.flexBasis=n.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Ur]=bu(e,un)+Wt,s[Br]=bu(e,It)+Wt,s[Tt]=o[kn]=o[Um]=o[km]="0",Ns(i),o[Ur]=o["max"+eo]=n[Ur],o[Br]=o["max"+lh]=n[Br],o[Tt]=n[Tt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},LM=/([A-Z])/g,Ns=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,s;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;i<n;i+=2)s=e[i+1],r=e[i],s?t[r]=s:t[r]&&t.removeProperty(r.replace(LM,"-$1").toLowerCase())}},Ka=function(e){for(var t=ul.length,n=e.style,i=[],r=0;r<t;r++)i.push(ul[r],n[ul[r]]);return i.t=e,i},PM=function(e,t,n){for(var i=[],r=e.length,s=n?8:0,o;s<r;s+=2)o=e[s],i.push(o,o in t?t[o]:e[s+1]);return i.t=e.t,i},hl={left:0,top:0},wf=function(e,t,n,i,r,s,o,l,c,u,d,h,f){hn(e)&&(e=e(l)),Qn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?al("0"+e.substr(3),n):0));var g=f?f.time():0,p,m,_;if(f&&f.seek(0),Po(e))o&&ll(o,n,i,!0);else{hn(t)&&(t=t(l));var v=(e||"0").split(" "),x,b,y,E;_=pn(t)||Mt,x=Ii(_)||{},(!x||!x.left&&!x.top)&&ni(_).display==="none"&&(E=_.style.display,_.style.display="block",x=Ii(_),E?_.style.display=E:_.style.removeProperty("display")),b=al(v[0],x[i.d]),y=al(v[1]||"0",n),e=x[i.p]-c[i.p]-u+b+r-y,o&&ll(o,y,i,n-y<20||o._isStart&&y>20),n-=n-y}if(s){var A=e+n,M=s._isStart;p="scroll"+i.d2,ll(s,A,i,M&&A>20||!M&&(d?Math.max(Mt[p],ti[p]):s.parentNode[p])<=A+1),d&&(c=Ii(o),d&&(s.style[i.op.p]=c[i.op.p]-i.op.m-s._offset+Wt))}return f&&_&&(p=Ii(_),f.seek(h),m=Ii(_),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*h),f&&f.seek(g),f?e:Math.round(e)},DM=/(webkit|moz|length|cssText|inset)/i,Sf=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,s,o;if(t===Mt){e._stOrig=r.cssText,o=ni(e);for(s in o)!+s&&!DM.test(s)&&o[s]&&typeof r[s]=="string"&&s!=="0"&&(r[s]=o[s]);r.top=n,r.left=i}else r.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},Tf=function(e,t){var n=dr(e,t),i="_scroll"+t.p2,r,s,o=function l(c,u,d,h,f){var g=l.tween,p=u.onComplete,m={};return d=d||n(),f=h&&f||0,h=h||c-d,g&&g.kill(),r=Math.round(d),u[i]=c,u.modifiers=m,m[i]=function(_){return _=Math.round(n()),_!==r&&_!==s&&Math.abs(_-r)>3&&Math.abs(_-s)>3?(g.kill(),l.tween=0):_=d+h*g.ratio+f*g.ratio*g.ratio,s=r,r=Math.round(_)},u.onUpdate=function(){Ze.cache++,fr()},u.onComplete=function(){l.tween=0,p&&p.call(g)},g=l.tween=Le.to(e,u),g};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},jt(e,"wheel",n.wheelHandler),o},tt=function(){function a(t,n){ws||a.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=a.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Wa){this.update=this.refresh=this.kill=ui;return}n=xf(Qn(n)||Po(n)||n.nodeType?{trigger:n}:n,Ya);var r=n,s=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,d=r.scrub,h=r.trigger,f=r.pin,g=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,v=r.onSnapComplete,x=r.once,b=r.snap,y=r.pinReparent,E=r.pinSpacer,A=r.containerAnimation,M=r.fastScrollEnd,S=r.preventOverlaps,D=n.horizontal||n.containerAnimation&&n.horizontal!==!1?un:It,k=!d&&d!==0,G=pn(n.scroller||Qe),z=Le.core.getCache(G),R=$r(G),B=("pinType"in n?n.pinType:lr(G,"pinType")||R&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Z=k&&n.toggleActions.split(" "),V="markers"in n?n.markers:Ya.markers,Q=R?0:parseFloat(ni(G)["border"+D.p2+eo])||0,L=this,W=n.onRefreshInit&&function(){return n.onRefreshInit(L)},q=bM(G,R,D),ne=MM(G,R),te=0,oe=0,j=dr(G,D),ze,pe,De,he,ke,me,ye,it,ot,Je,X,st,Re,St,gt,C,w,J,re,ee,ae,be,P,F,le,ge,ue,Me,ve,Be,_e,qe,I,$,ie,de,we,Ke,lt;if(yu(L),L._dir=D,m*=45,L.scroller=G,L.scroll=A?A.time.bind(A):j,he=j(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Pm=1,n.refreshPriority===-9999&&(Wo=L)),z.tweenScroll=z.tweenScroll||{top:Tf(G,It),left:Tf(G,un)},L.tweenTo=ze=z.tweenScroll[D.p],L.scrubDuration=function(se){qe=Po(se)&&se,qe?_e?_e.duration(se):_e=Le.to(i,{ease:"expo",totalProgress:"+=0.001",duration:qe,paused:!0,onComplete:function(){return _&&_(L)}}):(_e&&_e.progress(1).kill(),_e=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(d),ve=0,l||(l=i.vars.id)),Ye.push(L),b&&((!ol(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in Mt.style&&Le.set(R?[Mt,ti]:G,{scrollBehavior:"auto"}),Ze.forEach(function(se){return hn(se)&&se.target===(R?mt.scrollingElement||ti:G)&&(se.smooth=!1)}),De=hn(b.snapTo)?b.snapTo:b.snapTo==="labels"?SM(i):b.snapTo==="labelsDirectional"?TM(i):b.directional!==!1?function(se,Se){return ch(b.snapTo)(se,ln()-oe<500?0:Se.direction)}:Le.utils.snap(b.snapTo),I=b.duration||{min:.1,max:2},I=ol(I)?Ls(I.min,I.max):Ls(I,I),$=Le.delayedCall(b.delay||qe/2||.1,function(){var se=j(),Se=ln()-oe<500,Ie=ze.tween;if((Se||Math.abs(L.getVelocity())<10)&&!Ie&&!Fl&&te!==se){var Ue=(se-me)/Re,At=i&&!k?i.totalProgress():Ue,We=Se?0:(At-Be)/(ln()-sl)*1e3||0,T=Le.utils.clamp(-Ue,1-Ue,ys(We/2)*We/.185),U=Ue+(b.inertia===!1?0:T),K=Ls(0,1,De(U,L)),O=Math.round(me+K*Re),Y=b,Te=Y.onStart,xe=Y.onInterrupt,Ee=Y.onComplete;if(se<=ye&&se>=me&&O!==se){if(Ie&&!Ie._initted&&Ie.data<=ys(O-se))return;b.inertia===!1&&(T=K-Ue),ze(O,{duration:I(ys(Math.max(ys(U-At),ys(K-At))*.185/We/.05||0)),ease:b.ease||"power3",data:ys(O-se),onInterrupt:function(){return $.restart(!0)&&xe&&xe(L)},onComplete:function(){L.update(),te=j(),ve=Be=i&&!k?i.totalProgress():L.progress,v&&v(L),Ee&&Ee(L)}},se,T*Re,O-se-T*Re),Te&&Te(L,ze.tween)}}else L.isActive&&te!==se&&$.restart(!0)}).pause()),l&&(Mu[l]=L),h=L.trigger=pn(h||f),lt=h&&h._gsap&&h._gsap.stRevert,lt&&(lt=lt(L)),f=f===!0?h:pn(f),Qn(o)&&(o={targets:h,className:o}),f&&(g===!1||g===kn||(g=!g&&f.parentNode&&f.parentNode.style&&ni(f.parentNode).display==="flex"?!1:Tt),L.pin=f,pe=Le.core.getCache(f),pe.spacer?St=pe.pinState:(E&&(E=pn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),pe.spacerIsNative=!!E,E&&(pe.spacerState=Ka(E))),pe.spacer=w=E||mt.createElement("div"),w.classList.add("pin-spacer"),l&&w.classList.add("pin-spacer-"+l),pe.pinState=St=Ka(f)),n.force3D!==!1&&Le.set(f,{force3D:!0}),L.spacer=w=pe.spacer,Me=ni(f),P=Me[g+D.os2],re=Le.getProperty(f),ee=Le.quickSetter(f,D.a,Wt),Nc(f,w,Me),C=Ka(f)),V){st=ol(V)?xf(V,vf):vf,Je=$a("scroller-start",l,G,D,st,0),X=$a("scroller-end",l,G,D,st,0,Je),J=Je["offset"+D.op.d2];var bt=pn(lr(G,"content")||G);it=this.markerStart=$a("start",l,bt,D,st,J,0,A),ot=this.markerEnd=$a("end",l,bt,D,st,J,0,A),A&&(Ke=Le.quickSetter([it,ot],D.a,Wt)),!B&&!(xi.length&&lr(G,"fixedMarkers")===!0)&&(wM(R?Mt:G),Le.set([Je,X],{force3D:!0}),le=Le.quickSetter(Je,D.a,Wt),ue=Le.quickSetter(X,D.a,Wt))}if(A){var Ge=A.vars.onUpdate,ce=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){L.update(0,0,1),Ge&&Ge.apply(ce||[])})}L.previous=function(){return Ye[Ye.indexOf(L)-1]},L.next=function(){return Ye[Ye.indexOf(L)+1]},L.revert=function(se,Se){if(!Se)return L.kill(!0);var Ie=se!==!1||!L.enabled,Ue=Zt;Ie!==L.isReverted&&(Ie&&(de=Math.max(j(),L.scroll.rec||0),ie=L.progress,we=i&&i.progress()),it&&[it,ot,Je,X].forEach(function(At){return At.style.display=Ie?"none":"block"}),Ie&&(Zt=1,L.update(Ie)),f&&(!y||!L.isActive)&&(Ie?CM(f,w,St):Nc(f,w,ni(f),F)),Ie||L.update(Ie),Zt=Ue,L.isReverted=Ie)},L.refresh=function(se,Se){if(!((Zt||!L.enabled)&&!Se)){if(f&&se&&jn){jt(a,"scrollEnd",Vm);return}!ei&&W&&W(L),Zt=1,oe=ln(),ze.tween&&(ze.tween.kill(),ze.tween=0),_e&&_e.pause(),p&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;for(var Ie=q(),Ue=ne(),At=A?A.duration():rr(G,D),We=0,T=0,U=n.end,K=n.endTrigger||h,O=n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),Y=L.pinnedContainer=n.pinnedContainer&&pn(n.pinnedContainer),Te=h&&Math.max(0,Ye.indexOf(L))||0,xe=Te,Ee,Ce,je,He,Pe,Ve,_t,yn,oi,ft,Fe;xe--;)Ve=Ye[xe],Ve.end||Ve.refresh(0,1)||(Zt=1),_t=Ve.pin,_t&&(_t===h||_t===f)&&!Ve.isReverted&&(ft||(ft=[]),ft.unshift(Ve),Ve.revert(!0,!0)),Ve!==Ye[xe]&&(Te--,xe--);for(hn(O)&&(O=O(L)),me=wf(O,h,Ie,D,j(),it,Je,L,Ue,Q,B,At,A)||(f?-.001:0),hn(U)&&(U=U(L)),Qn(U)&&!U.indexOf("+=")&&(~U.indexOf(" ")?U=(Qn(O)?O.split(" ")[0]:"")+U:(We=al(U.substr(2),Ie),U=Qn(O)?O:me+We,K=h)),ye=Math.max(me,wf(U||(K?"100% 0":At),K,Ie,D,j()+We,ot,X,L,Ue,Q,B,At,A))||-.001,Re=ye-me||(me-=.01)&&.001,We=0,xe=Te;xe--;)Ve=Ye[xe],_t=Ve.pin,_t&&Ve.start-Ve._pinPush<=me&&!A&&Ve.end>0&&(Ee=Ve.end-Ve.start,(_t===h&&Ve.start-Ve._pinPush<me||_t===Y)&&!Po(O)&&(We+=Ee*(1-Ve.progress)),_t===f&&(T+=Ee));if(me+=We,ye+=We,L._pinPush=T,it&&We&&(Ee={},Ee[D.a]="+="+We,Y&&(Ee[D.p]="-="+j()),Le.set([it,ot],Ee)),f)Ee=ni(f),He=D===It,je=j(),ae=parseFloat(re(D.a))+T,!At&&ye>1&&(Fe=(R?mt.scrollingElement||ti:G).style,Fe={style:Fe,value:Fe["overflow"+D.a.toUpperCase()]},Fe["overflow"+D.a.toUpperCase()]="scroll"),Nc(f,w,Ee),C=Ka(f),Ce=Ii(f,!0),yn=B&&dr(G,He?un:It)(),g&&(F=[g+D.os2,Re+T+Wt],F.t=w,xe=g===Tt?bu(f,D)+Re+T:0,xe&&F.push(D.d,xe+Wt),Ns(F),Y&&Ye.forEach(function(Mi){Mi.pin===Y&&Mi.vars.pinSpacing!==!1&&(Mi._subPinOffset=!0)}),B&&j(de)),B&&(Pe={top:Ce.top+(He?je-me:yn)+Wt,left:Ce.left+(He?yn:je-me)+Wt,boxSizing:"border-box",position:"fixed"},Pe[Ur]=Pe["max"+eo]=Math.ceil(Ce.width)+Wt,Pe[Br]=Pe["max"+lh]=Math.ceil(Ce.height)+Wt,Pe[kn]=Pe[kn+Go]=Pe[kn+Bo]=Pe[kn+Ho]=Pe[kn+Vo]="0",Pe[Tt]=Ee[Tt],Pe[Tt+Go]=Ee[Tt+Go],Pe[Tt+Bo]=Ee[Tt+Bo],Pe[Tt+Ho]=Ee[Tt+Ho],Pe[Tt+Vo]=Ee[Tt+Vo],gt=PM(St,Pe,y),ei&&j(0)),i?(oi=i._initted,Dc(1),i.render(i.duration(),!0,!0),be=re(D.a)-ae+Re+T,ge=Math.abs(Re-be)>1,B&&ge&&gt.splice(gt.length-2,2),i.render(0,!0,!0),oi||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Dc(0)):be=Re,Fe&&(Fe.value?Fe.style["overflow"+D.a.toUpperCase()]=Fe.value:Fe.style.removeProperty("overflow-"+D.a));else if(h&&j()&&!A)for(Ce=h.parentNode;Ce&&Ce!==Mt;)Ce._pinOffset&&(me-=Ce._pinOffset,ye-=Ce._pinOffset),Ce=Ce.parentNode;ft&&ft.forEach(function(Mi){return Mi.revert(!1,!0)}),L.start=me,L.end=ye,he=ke=ei?de:j(),!A&&!ei&&(he<de&&j(de),L.scroll.rec=0),L.revert(!1,!0),$&&(te=-1,L.isActive&&j(me+Re*ie),$.restart(!0)),Zt=0,i&&k&&(i._initted||we)&&i.progress()!==we&&i.progress(we,!0).render(i.time(),!0,!0),(ie!==L.progress||A)&&(i&&!k&&i.totalProgress(ie,!0),L.progress=(he-me)/Re===ie?0:ie),f&&g&&(w._pinOffset=Math.round(L.progress*be)),u&&!ei&&u(L)}},L.getVelocity=function(){return(j()-ke)/(ln()-sl)*1e3||0},L.endAnimation=function(){Mo(L.callbackAnimation),i&&(_e?_e.progress(1):i.paused()?k||Mo(i,L.direction<0,1):Mo(i,i.reversed()))},L.labelToScroll=function(se){return i&&i.labels&&(me||L.refresh()||me)+i.labels[se]/i.duration()*Re||0},L.getTrailing=function(se){var Se=Ye.indexOf(L),Ie=L.direction>0?Ye.slice(0,Se).reverse():Ye.slice(Se+1);return(Qn(se)?Ie.filter(function(Ue){return Ue.vars.preventOverlaps===se}):Ie).filter(function(Ue){return L.direction>0?Ue.end<=me:Ue.start>=ye})},L.update=function(se,Se,Ie){if(!(A&&!Ie&&!se)){var Ue=ei?de:L.scroll(),At=se?0:(Ue-me)/Re,We=At<0?0:At>1?1:At||0,T=L.progress,U,K,O,Y,Te,xe,Ee,Ce;if(Se&&(ke=he,he=A?j():Ue,b&&(Be=ve,ve=i&&!k?i.totalProgress():We)),m&&!We&&f&&!Zt&&!Ha&&jn&&me<Ue+(Ue-ke)/(ln()-sl)*m&&(We=1e-4),We!==T&&L.enabled){if(U=L.isActive=!!We&&We<1,K=!!T&&T<1,xe=U!==K,Te=xe||!!We!=!!T,L.direction=We>T?1:-1,L.progress=We,Te&&!Zt&&(O=We&&!T?0:We===1?1:T===1?2:3,k&&(Y=!xe&&Z[O+1]!=="none"&&Z[O+1]||Z[O],Ce=i&&(Y==="complete"||Y==="reset"||Y in i))),S&&(xe||Ce)&&(Ce||d||!i)&&(hn(S)?S(L):L.getTrailing(S).forEach(function(Ve){return Ve.endAnimation()})),k||(_e&&!Zt&&!Ha?(_e._dp._time-_e._start!==_e._time&&_e.render(_e._dp._time-_e._start),_e.resetTo?_e.resetTo("totalProgress",We,i._tTime/i._tDur):(_e.vars.totalProgress=We,_e.invalidate().restart())):i&&i.totalProgress(We,!!Zt)),f){if(se&&g&&(w.style[g+D.os2]=P),!B)ee(Lo(ae+be*We));else if(Te){if(Ee=!se&&We>T&&ye+1>Ue&&Ue+1>=rr(G,D),y)if(!se&&(U||Ee)){var je=Ii(f,!0),He=Ue-me;Sf(f,Mt,je.top+(D===It?He:0)+Wt,je.left+(D===It?0:He)+Wt)}else Sf(f,w);Ns(U||Ee?gt:C),ge&&We<1&&U||ee(ae+(We===1&&!Ee?be:0))}}b&&!ze.tween&&!Zt&&!Ha&&$.restart(!0),o&&(xe||x&&We&&(We<1||!Rc))&&El(o.targets).forEach(function(Ve){return Ve.classList[U||x?"add":"remove"](o.className)}),s&&!k&&!se&&s(L),Te&&!Zt?(k&&(Ce&&(Y==="complete"?i.pause().totalProgress(1):Y==="reset"?i.restart(!0).pause():Y==="restart"?i.restart(!0):i[Y]()),s&&s(L)),(xe||!Rc)&&(c&&xe&&zc(L,c),H[O]&&zc(L,H[O]),x&&(We===1?L.kill(!1,1):H[O]=0),xe||(O=We===1?1:3,H[O]&&zc(L,H[O]))),M&&!U&&Math.abs(L.getVelocity())>(Po(M)?M:2500)&&(Mo(L.callbackAnimation),_e?_e.progress(1):Mo(i,Y==="reverse"?1:!We,1))):k&&s&&!Zt&&s(L)}if(ue){var Pe=A?Ue/A.duration()*(A._caScrollDist||0):Ue;le(Pe+(Je._isFlipped?1:0)),ue(Pe)}Ke&&Ke(-Ue/A.duration()*(A._caScrollDist||0))}},L.enable=function(se,Se){L.enabled||(L.enabled=!0,jt(G,"resize",Do),jt(R?mt:G,"scroll",bs),W&&jt(a,"refreshInit",W),se!==!1&&(L.progress=ie=0,he=ke=te=j()),Se!==!1&&L.refresh())},L.getTween=function(se){return se&&ze?ze.tween:_e},L.setPositions=function(se,Se){f&&(ae+=se-me,be+=Se-se-Re,g===Tt&&L.adjustPinSpacing(Se-se-Re)),L.start=me=se,L.end=ye=Se,Re=Se-se,L.update()},L.adjustPinSpacing=function(se){if(F){var Se=F.indexOf(D.d)+1;F[Se]=parseFloat(F[Se])+se+Wt,F[1]=parseFloat(F[1])+se+Wt,Ns(F)}},L.disable=function(se,Se){if(L.enabled&&(se!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Se||_e&&_e.pause(),de=0,pe&&(pe.uncache=1),W&&Bt(a,"refreshInit",W),$&&($.pause(),ze.tween&&ze.tween.kill()&&(ze.tween=0)),!R)){for(var Ie=Ye.length;Ie--;)if(Ye[Ie].scroller===G&&Ye[Ie]!==L)return;Bt(G,"resize",Do),Bt(G,"scroll",bs)}},L.kill=function(se,Se){L.disable(se,Se),_e&&!Se&&_e.kill(),l&&delete Mu[l];var Ie=Ye.indexOf(L);Ie>=0&&Ye.splice(Ie,1),Ie===an&&cl>0&&an--,Ie=0,Ye.forEach(function(Ue){return Ue.scroller===L.scroller&&(Ie=1)}),Ie||ei||(L.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),Se||i.kill()),it&&[it,ot,Je,X].forEach(function(Ue){return Ue.parentNode&&Ue.parentNode.removeChild(Ue)}),Wo===L&&(Wo=0),f&&(pe&&(pe.uncache=1),Ie=0,Ye.forEach(function(Ue){return Ue.pin===f&&Ie++}),Ie||(pe.spacer=0)),n.onKill&&n.onKill(L)},L.enable(!1,!1),lt&&lt(L),!i||!i.add||Re?L.refresh():Le.delayedCall(.01,function(){return me||ye||L.refresh()})&&(Re=.01)&&(me=ye=0),f&&AM()},a.register=function(n){return ws||(Le=n||Nm(),Om()&&window.document&&a.enable(),ws=Wa),ws},a.defaults=function(n){if(n)for(var i in n)Ya[i]=n[i];return Ya},a.disable=function(n,i){Wa=0,Ye.forEach(function(s){return s[i?"kill":"disable"](n)}),Bt(Qe,"wheel",bs),Bt(mt,"scroll",bs),clearInterval(Ga),Bt(mt,"touchcancel",ui),Bt(Mt,"touchstart",ui),Xa(Bt,mt,"pointerdown,touchstart,mousedown",gf),Xa(Bt,mt,"pointerup,touchend,mouseup",_f),Tl.kill(),ja(Bt);for(var r=0;r<Ze.length;r+=3)qa(Bt,Ze[r],Ze[r+1]),qa(Bt,Ze[r],Ze[r+2])},a.enable=function(){if(Qe=window,mt=document,ti=mt.documentElement,Mt=mt.body,Le&&(El=Le.utils.toArray,Ls=Le.utils.clamp,yu=Le.core.context||ui,Dc=Le.core.suppressOverwrites||ui,sh=Qe.history.scrollRestoration||"auto",Le.core.globals("ScrollTrigger",a),Mt)){Wa=1,Pt.register(Le),a.isTouch=Pt.isTouch,qi=Pt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),jt(Qe,"wheel",bs),Lm=[Qe,mt,ti,Mt],Le.matchMedia?(a.matchMedia=function(l){var c=Le.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Le.addEventListener("matchMediaInit",function(){return uh()}),Le.addEventListener("matchMediaRevert",function(){return Gm()}),Le.addEventListener("matchMedia",function(){Pr(0,1),Zr("matchMedia")}),Le.matchMedia("(orientation: portrait)",function(){return Oc(),Oc})):console.warn("Requires GSAP 3.11.0 or later"),Oc(),jt(mt,"scroll",bs);var n=Mt.style,i=n.borderTopStyle,r=Le.core.Animation.prototype,s,o;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",s=Ii(Mt),It.m=Math.round(s.top+It.sc())||0,un.m=Math.round(s.left+un.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ga=setInterval(yf,250),Le.delayedCall(.5,function(){return Ha=0}),jt(mt,"touchcancel",ui),jt(Mt,"touchstart",ui),Xa(jt,mt,"pointerdown,touchstart,mousedown",gf),Xa(jt,mt,"pointerup,touchend,mouseup",_f),vu=Le.utils.checkPrefix("transform"),ul.push(vu),ws=ln(),Tl=Le.delayedCall(.2,Pr).pause(),Ss=[mt,"visibilitychange",function(){var l=Qe.innerWidth,c=Qe.innerHeight;mt.hidden?(pf=l,mf=c):(pf!==l||mf!==c)&&Do()},mt,"DOMContentLoaded",Pr,Qe,"load",Pr,Qe,"resize",Do],ja(jt),Ye.forEach(function(l){return l.enable(0,1)}),o=0;o<Ze.length;o+=3)qa(Bt,Ze[o],Ze[o+1]),qa(Bt,Ze[o],Ze[o+2])}},a.config=function(n){"limitCallbacks"in n&&(Rc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ga)||(Ga=i)&&setInterval(yf,i),"ignoreMobileResize"in n&&(Rm=a.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ja(Bt)||ja(jt,n.autoRefreshEvents||"none"),Dm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(n,i){var r=pn(n),s=Ze.indexOf(r),o=$r(r);~s&&Ze.splice(s,o?6:2),i&&(o?xi.unshift(Qe,i,Mt,i,ti,i):xi.unshift(r,i))},a.clearMatchMedia=function(n){Ye.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},a.isInViewport=function(n,i,r){var s=(Qn(n)?pn(n):n).getBoundingClientRect(),o=s[r?Ur:Br]*i||0;return r?s.right-o>0&&s.left+o<Qe.innerWidth:s.bottom-o>0&&s.top+o<Qe.innerHeight},a.positionInViewport=function(n,i,r){Qn(n)&&(n=pn(n));var s=n.getBoundingClientRect(),o=s[r?Ur:Br],l=i==null?o/2:i in Al?Al[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(s.left+l)/Qe.innerWidth:(s.top+l)/Qe.innerHeight},a.killAll=function(n){if(Ye.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Kr.killAll||[];Kr={},i.forEach(function(r){return r()})}},a}();tt.version="3.11.4";tt.saveStyles=function(a){return a?El(a).forEach(function(e){if(e&&e.style){var t=Tn.indexOf(e);t>=0&&Tn.splice(t,5),Tn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),yu())}}):Tn};tt.revert=function(a,e){return uh(!a,e)};tt.create=function(a,e){return new tt(a,e)};tt.refresh=function(a){return a?Do():(ws||tt.register())&&Pr(!0)};tt.update=function(a){return++Ze.cache&&fr(a===!0?2:0)};tt.clearScrollMemory=Hm;tt.maxScroll=function(a,e){return rr(a,e?un:It)};tt.getScrollFunc=function(a,e){return dr(pn(a),e?un:It)};tt.getById=function(a){return Mu[a]};tt.getAll=function(){return Ye.filter(function(a){return a.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!jn};tt.snapDirectional=ch;tt.addEventListener=function(a,e){var t=Kr[a]||(Kr[a]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(a,e){var t=Kr[a],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(a,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,s=function(c,u){var d=[],h=[],f=Le.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),r<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&hn(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return hn(r)&&(r=r(),jt(tt,"refresh",function(){return r=e.batchMax()})),El(a).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(tt.create(c))}),t};var Ef=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Fc=function a(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Pt.isTouch?" pinch-zoom":""):"none",e===ti&&a(Mt,t)},Za={auto:1,scroll:1},RM=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,s=r._gsap||Le.core.getCache(r),o=ln(),l;if(!s._isScrollT||o-s._isScrollT>2e3){for(;r&&r!==Mt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Za[(l=ni(r)).overflowY]||Za[l.overflowX]));)r=r.parentNode;s._isScroll=r&&r!==n&&!$r(r)&&(Za[(l=ni(r)).overflowY]||Za[l.overflowX]),s._isScrollT=o}(s._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Wm=function(e,t,n,i){return Pt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&RM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&jt(mt,Pt.eventTypes[0],Cf,!1,!0)},onDisable:function(){return Bt(mt,Pt.eventTypes[0],Cf,!0)}})},IM=/(input|label|select|textarea)/i,Af,Cf=function(e){var t=IM.test(e.target.tagName);(t||Af)&&(e._gsapAllow=!0,Af=t)},zM=function(e){ol(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,s,o,l=pn(e.target)||ti,c=Le.core.globals().ScrollSmoother,u=c&&c.get(),d=qi&&(e.content&&pn(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),h=dr(l,It),f=dr(l,un),g=1,p=(Pt.isTouch&&Qe.visualViewport?Qe.visualViewport.scale*Qe.visualViewport.width:Qe.outerWidth)/Qe.innerWidth,m=0,_=hn(i)?function(){return i(s)}:function(){return i||2.8},v,x,b=Wm(l,e.type,!0,r),y=function(){return x=!1},E=ui,A=ui,M=function(){o=rr(l,It),A=Ls(qi?1:0,o),n&&(E=Ls(0,rr(l,un))),v=Vr},S=function(){d._gsap.y=Lo(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},D=function(){if(x){requestAnimationFrame(y);var Z=Lo(s.deltaY/2),V=A(h.v-Z);if(d&&V!==h.v+h.offset){h.offset=V-h.v;var Q=Lo((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+Q+", 0, 1)",d._gsap.y=Q+"px",h.cacheID=Ze.cache,fr()}return!0}h.offset&&S(),x=!0},k,G,z,R,B=function(){M(),k.isActive()&&k.vars.scrollY>o&&(h()>o?k.progress(1)&&h(o):k.resetTo("scrollY",o))};return d&&Le.set(d,{y:"+=0"}),e.ignoreCheck=function(H){return qi&&H.type==="touchmove"&&D()||g>1.05&&H.type!=="touchstart"||s.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){var H=g;g=Lo((Qe.visualViewport&&Qe.visualViewport.scale||1)/p),k.pause(),H!==g&&Fc(l,g>1.01?!0:n?!1:"x"),G=f(),z=h(),M(),v=Vr},e.onRelease=e.onGestureStart=function(H,Z){if(h.offset&&S(),!Z)R.restart(!0);else{Ze.cache++;var V=_(),Q,L;n&&(Q=f(),L=Q+V*.05*-H.velocityX/.227,V*=Ef(f,Q,L,rr(l,un)),k.vars.scrollX=E(L)),Q=h(),L=Q+V*.05*-H.velocityY/.227,V*=Ef(h,Q,L,rr(l,It)),k.vars.scrollY=A(L),k.invalidate().duration(V).play(.01),(qi&&k.vars.scrollY>=o||Q>=o-1)&&Le.to({},{onUpdate:B,duration:V})}},e.onWheel=function(){k._ts&&k.pause(),ln()-m>1e3&&(v=0,m=ln())},e.onChange=function(H,Z,V,Q,L){if(Vr!==v&&M(),Z&&n&&f(E(Q[2]===Z?G+(H.startX-H.x):f()+Z-Q[1])),V){h.offset&&S();var W=L[2]===V,q=W?z+H.startY-H.y:h()+V-L[1],ne=A(q);W&&q!==ne&&(z+=ne-q),h(ne)}(V||Z)&&fr()},e.onEnable=function(){Fc(l,n?!1:"x"),tt.addEventListener("refresh",B),jt(Qe,"resize",B),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=f.smooth=!1),b.enable()},e.onDisable=function(){Fc(l,!0),Bt(Qe,"resize",B),tt.removeEventListener("refresh",B),b.kill()},e.lockAxis=e.lockAxis!==!1,s=new Pt(e),s.iOS=qi,qi&&!h()&&h(1),qi&&Le.ticker.add(ui),R=s._dc,k=Le.to(s,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:R.vars.onComplete}),s};tt.sort=function(a){return Ye.sort(a||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};tt.observe=function(a){return new Pt(a)};tt.normalizeScroll=function(a){if(typeof a>"u")return Sn;if(a===!0&&Sn)return Sn.enable();if(a===!1)return Sn&&Sn.kill();var e=a instanceof Pt?a:zM(a);return Sn&&Sn.target===e.target&&Sn.kill(),$r(e.target)&&(Sn=e),e};tt.core={_getVelocityProp:xu,_inputObserver:Wm,_scrollers:Ze,_proxies:xi,bridge:{ss:function(){jn||Zr("scrollStart"),jn=ln()},ref:function(){return Zt}}};Nm()&&Le.registerPlugin(tt);const OM={heroBanner:[{name:"Desktop_1",format:{mobile:{position:[0,5.25,-16],rotation:0},tablet:{position:[-4.968,5.25,-8],rotation:.391},desktop:{position:[-9.167,5.25,-4],rotation:.128}},size:[16,9,4.5],source:"test"},{name:"Desktop_2",format:{mobile:{position:[4,-18.5,-8],rotation:5.963},tablet:{position:[7,14,0],rotation:5.668},desktop:{position:[7.628,12,-2],rotation:5.878}},size:[8,6,3.5],source:"test"},{name:"Desktop_3",format:{mobile:{position:[1,-8,-20],rotation:.303},tablet:{position:[-7.5,-13.366,-17.565],rotation:.303},desktop:{position:[-7.5,-14.366,-9.167],rotation:.303}},size:[16,9,4.5],source:"test"},{name:"Mobile_1",format:{mobile:{position:[-5,-30,-20],rotation:.25},tablet:{position:[13,-9.15,-22],rotation:5.756},desktop:{position:[12,-12.15,-17.55],rotation:5.98}},size:[9,16,9],source:"test"},{name:"Mobile_2",format:{mobile:{position:[8,-35.5,-26],rotation:5.963},tablet:{position:[12,-25,-26],rotation:6.107},desktop:{position:[28.6,-19.5,-26],rotation:5.492}},size:[3,6,3],source:"test"}],projects:[{name:"Sibo",format:{mobile:{position:[-12.773,20.5,-35],rotation:.7},tablet:{position:[-15.366,15.5,-30],rotation:.516},desktop:{position:[-20.773,15.5,-16],rotation:.516}},size:[13,18,13],source:"sibo_p1"},{name:"SiboBis",format:{mobile:{position:[5.85,12,-10.28],rotation:5.8},tablet:{position:[10,12,-12],rotation:5.474},desktop:{position:[17.85,12,-6.28],rotation:5.474}},size:[5,7.5,5],source:"sibo_p2"},{name:"Sibo_bg1",position:[22.7,25,-11],size:[2,5,2],rotation:2.542,source:"none"},{name:"Sibo_bg2",position:[15.5,32.25,-20],size:[3,5,3],rotation:.743,source:"none"},{name:"Sibo_bg3",position:[-6.8,-3.5,-25.5],size:[3,5,3],rotation:2.5,source:"none"},{name:"ADeuxMains",format:{mobile:{position:[11,-25,-35.5],rotation:5.874},tablet:{position:[17,-22,-30.5],rotation:5.474},desktop:{position:[17,-22,-12.5],rotation:5.474}},size:[12.5,20,12.5],source:"adm_p1"},{name:"ADeuxMains_bg1",size:[2,5,2],format:{mobile:{position:[5.543,-42,-25.5],rotation:3.754},tablet:{position:[13.043,-42,-25.5],rotation:3.754},desktop:{position:[13.043,-42,-25.5],rotation:3.754}},source:"none"},{name:"ADeuxMains_bg2",size:[2,3,2],format:{mobile:{position:[-5,-30,-13.25],rotation:5.373},tablet:{position:[-11,-22,-17.25],rotation:5.373},desktop:{position:[-11,-22,-6.25],rotation:5.373}},source:"none"},{name:"FireflyBender",format:{mobile:{position:[-13,-62,-35.5],rotation:.614},tablet:{position:[-12,-62,-27.5],rotation:.314},desktop:{position:[-11.11,-62,-15.95],rotation:.314}},size:[12.5,20,12.5],source:"adm_p1"},{name:"FireflyBender_bg1",size:[3,6,3],format:{mobile:{position:[9.212,-83.5,-35.25],rotation:4.766},tablet:{position:[9.212,-83.5,-35.25],rotation:4.766},desktop:{position:[9.212,-83.5,-35.25],rotation:4.766}},source:"none"},{name:"FireflyBender_bg2",size:[3,5,3],format:{mobile:{position:[13,-64.25,-15.25],rotation:5.373},tablet:{position:[13,-64.25,-15.25],rotation:5.373},desktop:{position:[13,-64.25,-6.25],rotation:5.373}},source:"none"},{name:"FireflyBender_bg3",size:[5,8,5],format:{mobile:{position:[37.2,-54.59,-30.45],rotation:3.45},tablet:{position:[37.2,-54.59,-30.45],rotation:3.45},desktop:{position:[37.2,-54.59,-30.45],rotation:3.45}},source:"none"},{name:"SerialKillers",format:{mobile:{position:[-13.5,-100,-35],rotation:.85},tablet:{position:[-15.95,-101,-25],rotation:.567},desktop:{position:[-15.95,-101,-11],rotation:.921}},size:[14,20,14],source:"sk_p1"},{name:"SerialKillersBis",position:[22,-66,-28],rotation:5.675,format:{mobile:{position:[10,-112,-25],rotation:5.675},tablet:{position:[18,-106,-28],rotation:5.675},desktop:{position:[22,-106,-28],rotation:5.675}},size:[7,10,7],source:"sk_p2"},{name:"SerialKillers_bg1",size:[5,7.5,5],format:{mobile:{position:[-10,-120,-45],rotation:3.955},tablet:{position:[51,-120,-45],rotation:3.955},desktop:{position:[51,-120,-45],rotation:3.955}},source:"none"},{name:"FalloutBNR",format:{mobile:{position:[11,-147.5,-35],rotation:5.575},tablet:{position:[13,-139.5,-25],rotation:5.575},desktop:{position:[13,-139.5,-12],rotation:5.575}},size:[10,15,10],source:"fallout_p1"},{name:"FalloutBNR_bg1",position:[-15,-145,-6.25],size:[2,4,2],rotation:2.944,source:"none"},{name:"FalloutBNR_bg2",position:[-16,-125.5,-25],size:[4,7.5,4],rotation:3.15,source:"none"}]},NM=[{width:3,height:15,x:20,y:27.5,z:-5},{width:1,height:15,x:20,y:27.5,z:-3.5},{width:1.5,height:20,x:23,y:27.5,z:-5.5},{width:5,height:25,x:18,y:27.5,z:-4},{width:7,height:25,x:15,y:27.5,z:-4.5}],FM=[{color:"",title:"Sibö",content:"In this video game, crafted in Unity as a final year project for BDDI at Gobelins School of the Image, embark on an epic and emotional journey through the eyes of twin brothers. Take the time to lose yourself in this beautiful cell-shaded world, entirely created by our team, and let your imagination take flight. Experience a unique journey through the dreamlike landscapes of Sibö.",job:"Developer <br/> Level Designer <br/> Game Designer",stack:"Unity<br/>ShaderGraph<br/>ProBuilder",status:"Work in progress",credits:"Lena ENG<br/>Ibrahima KABA<br/>Lina ABOUSSAIR<br/>Jessy RANGASAMY<br/>Kylian MENDY",photos:["sibo_d1","sibo_d2","sibo_d3","sibo_m1","none"],video:"none",website:"test",github:"test"},{title:"A Deux mains",content:`In this student project at Gobelins School, conceived in collaboration with the Musée de l'Orangerie in Paris, journey through the legendary streets of Montmartre to uncover the story behind "Les Arts à Paris" collection. It is through the letters of Guillaume Apollinaire that you will discover the poet's contribution to Paul Guillaume's art collection. Immerse yourself in the Paris of the 1920s through our immersive experience, rendered in a distinctive, sketch-like style.`,job:"Front-end Developer  <br/> Webgl Developer",stack:"Three.js <br> GSAP",status:"Done",credits:"Ibrahima KABA<br/>Lina ABOUSSAIR<br/>Jessy RANGASAMY",photos:["adm_d1","adm_d2","adm_d3","adm_m1","none"],video:"none",website:"https://a-deux-mains.vercel.app/",github:"none"},{title:"Firefly Bender",content:"Firefly Bender is an immersive installation inspired by Avatar The Last Airbender. Perform natural, choreographic movements to become one with the fireflies. Their movements are governed by a 3D Boids algorithm, realized through Three.js and motion capture via MediaPipe. This project is in its nascent stage, and I look forward to refining it for future release.",job:"Front-end Developer <br/> Webgl Developer <br/> Web Designer",stack:"Three.js <br> MediaPipe <br>GSAP",status:"Work in progress",credits:"",photos:["test","test","test","test","test"],video:`<iframe width="560" height="315" src="https://www.youtube.com/embed/5UI9Uy7xS5E?start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
`,website:"none",github:"none"},{title:"Serial Killers",content:"Serial Killers is a student project from Gobelins, themed around data visualization. Set off on the trail of a serial killer in an investigative game, harnessing acquired data to deduce the identity of the criminal. Explore the killer's apartment, rendered in a chilling and morbid atmosphere, crafted through Blender and Three.js. Dive into a gripping exploration of truth concealed within the mundane, and discover a sinister world beneath the veneer of the ordinary.",job:"Front-end Developer  <br/> Webgl Developer",stack:"Three.js <br> GSAP",status:"Done",credits:"Wendy PAULOS",photos:["sk_d1","sk_d2","sk_d3","sk_m1","none"],video:"none",website:"none",github:"none"},{title:"Fallout <span> Brand New Road</span>",content:"Fallout - Brand New Road is a personal project I undertook solo, while juggling my first year of DUT Computer Science. This fan website serves as a homage to Bethesda's famed Fallout franchise. I created this site with the aim of introducing newcomers to the iconic universe that comprises the Fallout series. Embark on this digital journey and explore the lore of these legendary games from a fresh perspective",job:"Front-end Developer<br> Web Designer <br> Graphist",stack:"Jquery <br> Fullpage.js",status:"Done",credits:"",photos:["fallout_d1","fallout_d2","fallout_d3","fallout_m1","test"],video:"none",website:"https://victor-sin.github.io/",github:"https://github.com/Victor-Sin/Victor-Sin.github.io"}],Gr={monoliths:OM,raylights:NM,projects:FM};var kM=`vec3 mod289(vec3 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 mod289(vec4 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 permute(vec4 x) {\r
    return mod289(((x*34.0)+10.0)*x);\r
}

vec4 taylorInvSqrt(vec4 r)\r
{\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}

float snoise(vec3 v)\r
{\r
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\r
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    
    vec3 i  = floor(v + dot(v, C.yyy) );\r
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    
    vec3 g = step(x0.yzx, x0.xyz);\r
    vec3 l = 1.0 - g;\r
    vec3 i1 = min( g.xyz, l.zxy );\r
    vec3 i2 = max( g.xyz, l.zxy );

    
    
    
    
    vec3 x1 = x0 - i1 + C.xxx;\r
    vec3 x2 = x0 - i2 + C.yyy; 
    vec3 x3 = x0 - D.yyy;      

    
    i = mod289(i);\r
    vec4 p = permute( permute( permute(\r
    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\r
    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\r
    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    
    
    float n_ = 0.142857142857; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

    vec4 x_ = floor(j * ns.z);\r
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;\r
    vec4 y = y_ *ns.x + ns.yyyy;\r
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );\r
    vec4 b1 = vec4( x.zw, y.zw );

    
    
    vec4 s0 = floor(b0)*2.0 + 1.0;\r
    vec4 s1 = floor(b1)*2.0 + 1.0;\r
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\r
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);\r
    vec3 p1 = vec3(a0.zw,h.y);\r
    vec3 p2 = vec3(a1.xy,h.z);\r
    vec3 p3 = vec3(a1.zw,h.w);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;

    
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\r
    m = m * m;\r
    return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\r
    dot(p2,x2), dot(p3,x3) ) );\r
}

varying float diff;\r
varying vec2 vUv;\r
uniform vec2 uCursor;\r
uniform sampler2D uTexture;\r
uniform float uTime;\r
uniform vec3 uLightColor;\r
uniform vec3 uMLightColor;\r
uniform vec3 uCubeColor;\r
uniform float uProgMouse;\r
uniform float uDepth;\r
uniform float uOpacity;

void main() {\r
    vec2 uv = vUv;\r
    float noise = snoise(vec3(uv.x, uv.y, uTime * 0.00025)) * .25;

    float disc = 1.0;\r
    float distortion = 0.000075 + diff * 0.05;

    if (uCursor.x != -1.0) {\r
        float dist = distance(vUv * uProgMouse, uCursor * uProgMouse);\r
        disc = smoothstep(0.05, 0.25, dist * dist * (noise + 2.0));\r
    }\r
    float progress = (20.- uProgMouse)/40.;

    distortion += noise + progress;\r
    vec2 distortionVec = vec2(distortion, 0.0);\r
    vec2 offset = vec2(\r
    texture(uTexture, uv + distortionVec).r - texture(uTexture, uv - distortionVec).r,\r
    texture(uTexture, uv + vec2(0.0, distortion)).r - texture(uTexture, uv - vec2(0.0, distortion)).r\r
    );\r
    uv += offset * mix(0.001, disc, 0.025);\r
    vec3 newColor = texture(uTexture, uv).rgb ;\r

    newColor = mix(uCubeColor * uMLightColor * .5, newColor, min(0.8, 1.0 - uDepth* 0.5 ) );\r
    newColor = mix(uLightColor *.5 * diff, newColor, 0.65);

    float strength = 1.0 - (max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)) - 0.1) * (noise * 1.5 + 2.5);

    gl_FragColor = vec4(newColor, strength * uOpacity);\r
}`,UM=`vec3 mod289(vec3 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 mod289(vec4 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 permute(vec4 x) {\r
    return mod289(((x*34.0)+10.0)*x);\r
}

vec4 taylorInvSqrt(vec4 r)\r
{\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}

float snoise(vec3 v)\r
{\r
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\r
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    
    vec3 i  = floor(v + dot(v, C.yyy) );\r
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    
    vec3 g = step(x0.yzx, x0.xyz);\r
    vec3 l = 1.0 - g;\r
    vec3 i1 = min( g.xyz, l.zxy );\r
    vec3 i2 = max( g.xyz, l.zxy );

    
    
    
    
    vec3 x1 = x0 - i1 + C.xxx;\r
    vec3 x2 = x0 - i2 + C.yyy; 
    vec3 x3 = x0 - D.yyy;      

    
    i = mod289(i);\r
    vec4 p = permute( permute( permute(\r
    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\r
    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\r
    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    
    
    float n_ = 0.142857142857; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

    vec4 x_ = floor(j * ns.z);\r
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;\r
    vec4 y = y_ *ns.x + ns.yyyy;\r
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );\r
    vec4 b1 = vec4( x.zw, y.zw );

    
    
    vec4 s0 = floor(b0)*2.0 + 1.0;\r
    vec4 s1 = floor(b1)*2.0 + 1.0;\r
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\r
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);\r
    vec3 p1 = vec3(a0.zw,h.y);\r
    vec3 p2 = vec3(a1.xy,h.z);\r
    vec3 p3 = vec3(a1.zw,h.w);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;

    
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\r
    m = m * m;\r
    return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\r
    dot(p2,x2), dot(p3,x3) ) );\r
}

varying vec2 vUv;\r
varying float diff;

uniform vec2 uCursor;\r
uniform sampler2D uTexture;\r
uniform float uTime;\r
uniform vec3 uLightPos;\r
uniform vec3 uLightColor;

void main() {\r

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    vec3 norm = normal;\r
    vec3 lightDir = normalize(uLightPos-modelPosition.xyz);

    diff = dot(norm, lightDir);\r
    

    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;\r
    gl_Position = projectedPosition;\r
    vUv = uv;\r
}`,fn,pt;const qo=class extends ts{constructor(t,n=0,i=null){super();kt(this,"monolith");Yn(this,fn,void 0);Yn(this,pt,void 0);kt(this,"name");this.nameFolder=t,t==="heroBanner"?(this.dataMonolith=Gr.monoliths[t][qo.INDEX],qo.INDEX++):this.dataMonolith=Gr.monoliths[t][n],this.debug.active&&(this.debugFolder=this.world.monolithsFolder.addFolder(this.dataMonolith.name),this.debugFolder.close()),this.name=this.dataMonolith.name,this.dataMonolith.format?this.dataMonolithInfos=this.dataMonolith.format[this.sizes.format]:this.dataMonolithInfos=this.dataMonolith,this.monolith=new fi,this.setModel(),this.dataMonolith.source!=="none"&&(this.setScreen(),qo.SCREEN_OBJ.push(this)),i?i.add(this.monolith):this.scene.add(this.monolith),this.sizes.addNewEvent(this.onResize.bind(this))}setModel(){const t=new io(1,1,1),n=new da({color:"#437a88",transparent:!0,alphaTest:.5});if(n.metalness=.45,n.roughness=.75,ai(this,fn,new zt(t,n)),this.nameFolder==="heroBanner"){Ae(this,fn).geometry.computeBoundingBox();const i=Ae(this,fn).geometry.boundingBox.max;Ae(this,fn).geometry.translate(0,i.y,0)}if(this.setParams(),this.debug.active){const i=this.debugFolder.addFolder("Position"),r=this.debugFolder.addFolder("Rotation"),s=this.debugFolder.addFolder("Size");i.add(this.monolith.position,"x").name("posX").min(-200).max(100).step(.001),i.add(this.monolith.position,"y").name("posY").min(-200).max(100).step(.001),i.add(this.monolith.position,"z").name("posZ").min(-200).max(100).step(.001),r.add(this.monolith.rotation,"y").name("rotation").min(0).max(Math.PI*2).step(.001),s.add(this.monolith.scale,"x").name("width").min(0).max(30).step(.001),s.add(this.monolith.scale,"y").name("height").min(0).max(30).step(.001),s.add(this.monolith.scale,"z").name("depth").min(0).max(30).step(.001)}this.monolith.add(Ae(this,fn))}setScreen(){const t=new Qr(1,1,16,16),n=new Xn({transparent:!0,alphaTest:.5,vertexShader:UM,fragmentShader:kM,uniforms:{uTexture:{value:this.resources.items[this.dataMonolith.source]},uCursor:{value:new Ne},uTime:{value:0},uMLightColor:{value:new Oe(this.environment.sunLight.color)},uLightColor:{value:new Oe(this.environment.secondary.color)},uLightPos:{value:this.environment.secondary.position},uCubeColor:{value:Ae(this,fn).material.color},uProgMouse:{value:this.nameFolder!=="heroBanner"?20:1},uDepth:{value:this.dataMonolithInfos.position[1]/-180},uOpacity:{value:1}}});if(ai(this,pt,new zt(t,n)),this.nameFolder==="heroBanner"){Ae(this,pt).geometry.computeBoundingBox();const i=Ae(this,pt).geometry.boundingBox.max;Ae(this,pt).geometry.translate(0,i.y,0)}Ae(this,pt).position.z=.5005,this.monolith.add(Ae(this,pt)),this.mouse.addObjectsList(Ae(this,pt)),this.mouse.addNewEvent(this.initMousePosition.bind(this))}modifyColor(){let t=new N;Ae(this,fn).getWorldPosition(t);const n=new Oe("#437a88").lerp(new Oe("#263450"),Math.max(0,t.y/-180));Ae(this,fn).material.color=n,Ae(this,pt)&&(Ae(this,pt).material.uniforms.uDepth.value=t.y/-180,Ae(this,pt).material.uniforms.uCubeColor.value=n)}initMousePosition(){this.mouse.intersection&&this.mouse.intersection.object===Ae(this,pt)?Ae(this,pt).material.uniforms.uCursor.value=new Ne(this.mouse.intersection.uv.x,this.mouse.intersection.uv.y):Ae(this,pt).material.uniforms.uCursor.value=new Ne(-1,-1)}setParams(){this.monolith.position.set(this.dataMonolithInfos.position[0],this.dataMonolithInfos.position[1],this.dataMonolithInfos.position[2]),Ae(this,fn).material.color=Ae(this,fn).material.color.lerp(new Oe("#0F1724"),Math.max(0,this.dataMonolithInfos.position[1]/-180)),this.monolith.scale.set(...this.dataMonolith.size),this.monolith.rotation.y=this.dataMonolithInfos.rotation}onResize(){this.dataMonolith.format?this.dataMonolithInfos=this.dataMonolith.format[this.sizes.format]:this.dataMonolithInfos=this.dataMonolith,this.monolith.rotation.y=this.dataMonolithInfos.rotation,this.monolith.position.set(this.dataMonolithInfos.position[0],this.dataMonolithInfos.position[1],this.dataMonolithInfos.position[2])}update(){if(this.experience.camera.isObjectInView(Ae(this,fn))&&Ae(this,pt)){if(Ae(this,pt).material.uniforms.uTime.value=this.time.elapsed,Ae(this,pt).material.uniforms.uLightPos.value=this.environment.secondary.position,this.mouse.intersection&&this.mouse.intersection.object==Ae(this,pt)){if(Ae(this,pt).material.uniforms.uProgMouse.value>1&&this.nameFolder!=="heroBanner"){let t=Ae(this,pt).material.uniforms.uProgMouse.value-.5;Ae(this,pt).material.uniforms.uProgMouse.value=Math.max(1,t)}}else if(Ae(this,pt).material.uniforms.uProgMouse.value<20&&this.nameFolder!=="heroBanner"){const t=Ae(this,pt).material.uniforms.uProgMouse.value+this.time.delta*2/60;Ae(this,pt).material.uniforms.uProgMouse.value=Math.min(20,t)}}}};let pi=qo;fn=new WeakMap,pt=new WeakMap,kt(pi,"SCREEN_OBJ",[]),kt(pi,"INDEX",0);var BM=`uniform float uSize;\r
uniform float uTime;\r
varying vec2 vUv;\r
attribute float aScale;

float random(float seed) {\r
    return fract(sin(seed) * 143758.5453123);\r
}

void main() {\r
    float randVal = random(aScale);\r
    float frequency = 2.0;\r
    float amplitude = randVal * 2.0;\r
    float offset = 0.1;\r
    float timeMultiplier = randVal * 0.001;\r
    float timeValue = uTime * timeMultiplier;\r
    float yPos = sin(timeValue * frequency) * amplitude + offset;\r
    float xPos = yPos * sin(timeValue * 0.001 + randVal * 10.0);

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\r
    modelPosition.xy += vec2(xPos, yPos);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;\r
    gl_Position = projectedPosition;

    float pointScale = uSize * aScale;\r
    pointScale *= 0.1 + (1.0 / -viewPosition.z);\r
    pointScale *= sin(randVal * 100.0 + uTime * 0.001);\r
    gl_PointSize = pointScale;

    vUv = uv;\r
}`,VM=`void main() {\r
    vec2 distCoord1 = vec2(gl_PointCoord.x, (gl_PointCoord.y - 0.5) * 5.0 + 0.5) - vec2(0.5);\r
    vec2 distCoord2 = vec2(gl_PointCoord.y, (gl_PointCoord.x - 0.5) * 5.0 + 0.5) - vec2(0.5);

    float strength1 = 0.15 / dot(distCoord1, distCoord1);\r
    float strength2 = 0.15 / dot(distCoord2, distCoord2);\r
    float strength = strength1 * strength2;

    float offset = 1.0 - step(0.015, strength);\r
    strength -= offset;

    vec3 finalColor = mix(vec3(0.0), vec3(1.0), strength);

    gl_FragColor = vec4(finalColor, clamp(strength,0.,1.) -0.5);\r
}`,Dr,$i,Ki,ks,Zi,Us;class Lf extends ts{constructor(){super();Yn(this,Dr,2500);Yn(this,$i,void 0);Yn(this,Ki,void 0);Yn(this,ks,void 0);Yn(this,Zi,void 0);Yn(this,Us,void 0);this.initGeometry(),this.initMaterial(),this.points=new pp(Ae(this,Zi),Ae(this,Us)),this.points.position.y=-240,this.scene.add(this.points)}initGeometry(){ai(this,$i,new Float32Array(Ae(this,Dr)*3)),ai(this,Ki,new Float32Array(Ae(this,Dr)*3)),ai(this,ks,new Float32Array(Ae(this,Dr)*1));for(let t=0;t<Ae(this,Dr);t++){const n=t*3;Ae(this,$i)[n+0]=Math.random()*200-100,Ae(this,$i)[n+1]=Math.pow(Math.random()*20,2),Ae(this,$i)[n+2]=-Math.pow(Math.random()*5,2),Ae(this,Ki)[n+0]=Math.random()*255,Ae(this,Ki)[n+1]=Math.random()*255,Ae(this,Ki)[n+2]=Math.random()*255,Ae(this,ks)[t]=Math.random()}ai(this,Zi,new si),Ae(this,Zi).setAttribute("position",new Gt(Ae(this,$i),3)),Ae(this,Zi).setAttribute("color",new Gt(Ae(this,Ki),3)),Ae(this,Zi).setAttribute("aScale",new Gt(Ae(this,ks),1))}initMaterial(){ai(this,Us,new Xn({depthWrite:!1,blending:Vc,vertexColors:!0,vertexShader:BM,fragmentShader:VM,uniforms:{uSize:{value:125},uTime:{value:this.time.elapsed}}}))}update(){Ae(this,Us).uniforms.uTime.value=this.time.elapsed}}Dr=new WeakMap,$i=new WeakMap,Ki=new WeakMap,ks=new WeakMap,Zi=new WeakMap,Us=new WeakMap;var GM=`vec3 mod289(vec3 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 mod289(vec4 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 permute(vec4 x) {\r
    return mod289(((x*34.0)+10.0)*x);\r
}

vec4 taylorInvSqrt(vec4 r)\r
{\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}

float snoise(vec3 v)\r
{\r
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\r
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    
    vec3 i  = floor(v + dot(v, C.yyy) );\r
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    
    vec3 g = step(x0.yzx, x0.xyz);\r
    vec3 l = 1.0 - g;\r
    vec3 i1 = min( g.xyz, l.zxy );\r
    vec3 i2 = max( g.xyz, l.zxy );

    
    
    
    
    vec3 x1 = x0 - i1 + C.xxx;\r
    vec3 x2 = x0 - i2 + C.yyy; 
    vec3 x3 = x0 - D.yyy;      

    
    i = mod289(i);\r
    vec4 p = permute( permute( permute(\r
    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\r
    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\r
    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    
    
    float n_ = 0.142857142857; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

    vec4 x_ = floor(j * ns.z);\r
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;\r
    vec4 y = y_ *ns.x + ns.yyyy;\r
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );\r
    vec4 b1 = vec4( x.zw, y.zw );

    
    
    vec4 s0 = floor(b0)*2.0 + 1.0;\r
    vec4 s1 = floor(b1)*2.0 + 1.0;\r
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\r
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);\r
    vec3 p1 = vec3(a0.zw,h.y);\r
    vec3 p2 = vec3(a1.xy,h.z);\r
    vec3 p3 = vec3(a1.zw,h.w);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;

    
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\r
    m = m * m;\r
    return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\r
    dot(p2,x2), dot(p3,x3) ) );\r
}\r
varying vec2 vUv;\r
uniform float uTime;\r
uniform int uIndex;\r

void main() {\r
    float PI =  3.1415926538;\r
    vec3 color = vec3(1.);\r
    float brightness = vUv.y;\r

    color.x *= 0.1 + (brightness * 0.37);\r
    color.y *= 0.3 + (brightness * 0.55);\r
    color.z *= 0.5 + (brightness * 0.65);

    float opacity = 0.5 - distance(vUv,vec2(0.5,vUv.y))   ;\r
    if(uIndex == 0){\r
        opacity *= 1.5;\r
    }\r
    else{\r
        opacity *= sin(uTime*0.001)+1.75;\r
    }\r
    opacity *= vUv.y;\r
    opacity *= 0.25;\r

    gl_FragColor = vec4(color,opacity);\r
}`,HM=`vec3 mod289(vec3 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 mod289(vec4 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 permute(vec4 x) {\r
    return mod289(((x*34.0)+10.0)*x);\r
}

vec4 taylorInvSqrt(vec4 r)\r
{\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}

float snoise(vec3 v)\r
{\r
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\r
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    
    vec3 i  = floor(v + dot(v, C.yyy) );\r
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    
    vec3 g = step(x0.yzx, x0.xyz);\r
    vec3 l = 1.0 - g;\r
    vec3 i1 = min( g.xyz, l.zxy );\r
    vec3 i2 = max( g.xyz, l.zxy );

    
    
    
    
    vec3 x1 = x0 - i1 + C.xxx;\r
    vec3 x2 = x0 - i2 + C.yyy; 
    vec3 x3 = x0 - D.yyy;      

    
    i = mod289(i);\r
    vec4 p = permute( permute( permute(\r
    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\r
    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\r
    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    
    
    float n_ = 0.142857142857; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

    vec4 x_ = floor(j * ns.z);\r
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;\r
    vec4 y = y_ *ns.x + ns.yyyy;\r
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );\r
    vec4 b1 = vec4( x.zw, y.zw );

    
    
    vec4 s0 = floor(b0)*2.0 + 1.0;\r
    vec4 s1 = floor(b1)*2.0 + 1.0;\r
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\r
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);\r
    vec3 p1 = vec3(a0.zw,h.y);\r
    vec3 p2 = vec3(a1.xy,h.z);\r
    vec3 p3 = vec3(a1.zw,h.w);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;

    
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\r
    m = m * m;\r
    return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\r
    dot(p2,x2), dot(p3,x3) ) );\r
}

varying vec2 vUv;

void main() {\r
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;\r
    gl_Position = projectedPosition;\r
    vUv = uv;\r
}`,Di;const Yo=class extends ts{constructor(t){super();kt(this,"index",0);Yn(this,Di,void 0);this.dataRaylight=Gr.raylights[Yo.INDEX],this.index=Yo.INDEX,this.debug.active,this.setMesh(),Yo.INDEX++,t.add(Ae(this,Di))}setMesh(){const t=new Qr(this.dataRaylight.width,this.dataRaylight.height),n=new Xn({transparent:!0,alphaTest:.5,vertexShader:HM,fragmentShader:GM,uniforms:{uTime:{value:0},uIndex:{value:this.index}}});ai(this,Di,new zt(t,n)),Ae(this,Di).position.set(this.dataRaylight.x,this.dataRaylight.y,this.dataRaylight.z),Ae(this,Di).rotation.z=-Math.PI/12}update(){this.experience.camera.isObjectInView(Ae(this,Di))&&(Ae(this,Di).material.uniforms.uTime.value=this.time.elapsed)}};let dl=Yo;Di=new WeakMap,kt(dl,"INDEX",0);var WM=`vec3 mod289(vec3 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 mod289(vec4 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 permute(vec4 x) {\r
    return mod289(((x*34.0)+10.0)*x);\r
}

vec4 taylorInvSqrt(vec4 r)\r
{\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}

float snoise(vec3 v)\r
{\r
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\r
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    
    vec3 i  = floor(v + dot(v, C.yyy) );\r
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    
    vec3 g = step(x0.yzx, x0.xyz);\r
    vec3 l = 1.0 - g;\r
    vec3 i1 = min( g.xyz, l.zxy );\r
    vec3 i2 = max( g.xyz, l.zxy );

    
    
    
    
    vec3 x1 = x0 - i1 + C.xxx;\r
    vec3 x2 = x0 - i2 + C.yyy; 
    vec3 x3 = x0 - D.yyy;      

    
    i = mod289(i);\r
    vec4 p = permute( permute( permute(\r
    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\r
    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\r
    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    
    
    float n_ = 0.142857142857; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

    vec4 x_ = floor(j * ns.z);\r
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;\r
    vec4 y = y_ *ns.x + ns.yyyy;\r
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );\r
    vec4 b1 = vec4( x.zw, y.zw );

    
    
    vec4 s0 = floor(b0)*2.0 + 1.0;\r
    vec4 s1 = floor(b1)*2.0 + 1.0;\r
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\r
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);\r
    vec3 p1 = vec3(a0.zw,h.y);\r
    vec3 p2 = vec3(a1.xy,h.z);\r
    vec3 p3 = vec3(a1.zw,h.w);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;

    
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\r
    m = m * m;\r
    return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\r
    dot(p2,x2), dot(p3,x3) ) );\r
}

varying vec2 vUv;\r
varying float vElevation;

uniform vec3 uTopColor;\r
uniform vec3 uBottomColor;\r
uniform float uDepthFactor;

void main() {\r
    
    vec3 baseColor = mix(uBottomColor, uTopColor, vElevation * 4.0);

    
    float depthY = vUv.y * uDepthFactor;\r
    float depth1 = smoothstep(0.0, 1.0, depthY * 1.5);\r
    float depth2 = smoothstep(0.0, 1.0, 1.0 - depthY);\r
    float depthX = vUv.x * 1.5;\r
    float depth = 1.0 - depth1 * depth2 * depthX;

    
    vec3 finalColor = mix(baseColor, uTopColor, depth);

    gl_FragColor = vec4(finalColor, 1.0 - depth);\r
}`,jM=`vec3 mod289(vec3 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 mod289(vec4 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 permute(vec4 x) {\r
    return mod289(((x*34.0)+10.0)*x);\r
}

vec4 taylorInvSqrt(vec4 r)\r
{\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}

float snoise(vec3 v)\r
{\r
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\r
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    
    vec3 i  = floor(v + dot(v, C.yyy) );\r
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    
    vec3 g = step(x0.yzx, x0.xyz);\r
    vec3 l = 1.0 - g;\r
    vec3 i1 = min( g.xyz, l.zxy );\r
    vec3 i2 = max( g.xyz, l.zxy );

    
    
    
    
    vec3 x1 = x0 - i1 + C.xxx;\r
    vec3 x2 = x0 - i2 + C.yyy; 
    vec3 x3 = x0 - D.yyy;      

    
    i = mod289(i);\r
    vec4 p = permute( permute( permute(\r
    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\r
    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\r
    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    
    
    float n_ = 0.142857142857; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

    vec4 x_ = floor(j * ns.z);\r
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;\r
    vec4 y = y_ *ns.x + ns.yyyy;\r
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );\r
    vec4 b1 = vec4( x.zw, y.zw );

    
    
    vec4 s0 = floor(b0)*2.0 + 1.0;\r
    vec4 s1 = floor(b1)*2.0 + 1.0;\r
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\r
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);\r
    vec3 p1 = vec3(a0.zw,h.y);\r
    vec3 p2 = vec3(a1.xy,h.z);\r
    vec3 p3 = vec3(a1.zw,h.w);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;

    
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\r
    m = m * m;\r
    return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\r
    dot(p2,x2), dot(p3,x3) ) );\r
}

uniform float uTime;\r
uniform float uAmplitude;\r
uniform float uFrequency;\r
uniform float uSpeed;\r

varying vec2 vUv;\r
varying float vElevation;

void main() {\r
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float noise = snoise(vec3(uFrequency * modelPosition.xz, uTime * uSpeed));\r
    
    float elevation = uAmplitude * noise;\r
    modelPosition.y += elevation;

    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;\r
    vUv = uv;\r
    vElevation = elevation;\r
}`;class XM extends ts{constructor(t){super();kt(this,"mesh");this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("watersurface"),this.debugFolder.close()),this.parameters={topColor:"#354f5d",bottomColor:"#5f8ca5"},this.setMesh(),t.add(this.mesh)}setMesh(){const t=new Qr(200,100,128,128),n=new Xn({transparent:!0,alphaTest:.5,vertexShader:jM,fragmentShader:WM,uniforms:{uTime:{value:0},uTopColor:{value:new Oe(this.parameters.topColor)},uBottomColor:{value:new Oe(this.parameters.bottomColor)},uAmplitude:{value:.25},uFrequency:{value:.075},uSpeed:{value:.4},uDepthFactor:{value:1.65}}});this.mesh=new zt(t,n),this.mesh.position.set(0,40,-10),this.mesh.rotation.x=Math.PI/2,this.debug.active&&(this.debugFolder.add(this.mesh.material.uniforms.uAmplitude,"value").name("uAmplitude").min(0).max(10).step(.001),this.debugFolder.add(this.mesh.material.uniforms.uFrequency,"value").name("uFrequency").min(0).max(10).step(.001),this.debugFolder.add(this.mesh.material.uniforms.uSpeed,"value").name("uSpeed").min(0).max(10).step(.001),this.debugFolder.add(this.mesh.material.uniforms.uDepthFactor,"value").name("uDepthFactor").min(0).max(10).step(.001),this.debugFolder.addColor(this.parameters,"topColor").onChange(()=>{this.mesh.material.uniforms.uTopColor.value.set(this.parameters.topColor)}),this.debugFolder.addColor(this.parameters,"bottomColor").onChange(()=>{this.mesh.material.uniforms.uBottomColor.value.set(this.parameters.bottomColor)}))}update(){this.experience.camera.isObjectInView(this.mesh)&&(this.mesh.material.uniforms.uTime.value=this.time.elapsed*.001)}}var qM=`vec3 mod289(vec3 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 mod289(vec4 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 permute(vec4 x) {\r
    return mod289(((x*34.0)+10.0)*x);\r
}

vec4 taylorInvSqrt(vec4 r)\r
{\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}

float snoise(vec3 v)\r
{\r
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\r
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    
    vec3 i  = floor(v + dot(v, C.yyy) );\r
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    
    vec3 g = step(x0.yzx, x0.xyz);\r
    vec3 l = 1.0 - g;\r
    vec3 i1 = min( g.xyz, l.zxy );\r
    vec3 i2 = max( g.xyz, l.zxy );

    
    
    
    
    vec3 x1 = x0 - i1 + C.xxx;\r
    vec3 x2 = x0 - i2 + C.yyy; 
    vec3 x3 = x0 - D.yyy;      

    
    i = mod289(i);\r
    vec4 p = permute( permute( permute(\r
    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\r
    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\r
    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    
    
    float n_ = 0.142857142857; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

    vec4 x_ = floor(j * ns.z);\r
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;\r
    vec4 y = y_ *ns.x + ns.yyyy;\r
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );\r
    vec4 b1 = vec4( x.zw, y.zw );

    
    
    vec4 s0 = floor(b0)*2.0 + 1.0;\r
    vec4 s1 = floor(b1)*2.0 + 1.0;\r
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\r
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);\r
    vec3 p1 = vec3(a0.zw,h.y);\r
    vec3 p2 = vec3(a1.xy,h.z);\r
    vec3 p3 = vec3(a1.zw,h.w);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;

    
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\r
    m = m * m;\r
    return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\r
    dot(p2,x2), dot(p3,x3) ) );\r
}\r
varying vec2 vUv;\r
uniform float uTime;\r

void main() {\r
    float PI =  3.1415926538;\r
    vec3 color = vec3(1.);\r
    float brightness = vUv.y;\r

    color.x *= 0.1 + (brightness * 0.37);\r
    color.y *= 0.3 + (brightness * 0.55);\r
    color.z *= 0.5 + (brightness * 0.65);\r

    float opacity = 0.5 - distance(vUv,vec2(0.5,vUv.y))   ;\r
    opacity *= 0.5;\r
    opacity *= vUv.y;\r

    gl_FragColor = vec4(color,opacity);\r
}`,YM=`vec3 mod289(vec3 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 mod289(vec4 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 permute(vec4 x) {\r
    return mod289(((x*34.0)+10.0)*x);\r
}

vec4 taylorInvSqrt(vec4 r)\r
{\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}

float snoise(vec3 v)\r
{\r
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\r
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    
    vec3 i  = floor(v + dot(v, C.yyy) );\r
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    
    vec3 g = step(x0.yzx, x0.xyz);\r
    vec3 l = 1.0 - g;\r
    vec3 i1 = min( g.xyz, l.zxy );\r
    vec3 i2 = max( g.xyz, l.zxy );

    
    
    
    
    vec3 x1 = x0 - i1 + C.xxx;\r
    vec3 x2 = x0 - i2 + C.yyy; 
    vec3 x3 = x0 - D.yyy;      

    
    i = mod289(i);\r
    vec4 p = permute( permute( permute(\r
    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\r
    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\r
    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    
    
    float n_ = 0.142857142857; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

    vec4 x_ = floor(j * ns.z);\r
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;\r
    vec4 y = y_ *ns.x + ns.yyyy;\r
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );\r
    vec4 b1 = vec4( x.zw, y.zw );

    
    
    vec4 s0 = floor(b0)*2.0 + 1.0;\r
    vec4 s1 = floor(b1)*2.0 + 1.0;\r
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\r
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);\r
    vec3 p1 = vec3(a0.zw,h.y);\r
    vec3 p2 = vec3(a1.xy,h.z);\r
    vec3 p3 = vec3(a1.zw,h.w);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;

    
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\r
    m = m * m;\r
    return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\r
    dot(p2,x2), dot(p3,x3) ) );\r
}

varying vec2 vUv;

void main() {\r
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;\r
    gl_Position = projectedPosition;\r
    vUv = uv;\r
}`,Rr;class $M extends ts{constructor(t){super();Yn(this,Rr,void 0);this.setMesh(),t.add(Ae(this,Rr))}setMesh(){const t=new Qr(30,10,16,16),n=new Xn({transparent:!0,alphaTest:.5,vertexShader:YM,fragmentShader:qM,uniforms:{uTime:{value:0}}});ai(this,Rr,new zt(t,n)),Ae(this,Rr).position.set(20,27.5,-8)}update(){Ae(this,Rr).material.uniforms.uTime.value=this.time.elapsed}}Rr=new WeakMap;var Su={},KM={get exports(){return Su},set exports(a){Su=a}};function hh(){}hh.prototype={on:function(a,e,t){var n=this.e||(this.e={});return(n[a]||(n[a]=[])).push({fn:e,ctx:t}),this},once:function(a,e,t){var n=this;function i(){n.off(a,i),e.apply(t,arguments)}return i._=e,this.on(a,i,t)},emit:function(a){var e=[].slice.call(arguments,1),t=((this.e||(this.e={}))[a]||[]).slice(),n=0,i=t.length;for(n;n<i;n++)t[n].fn.apply(t[n].ctx,e);return this},off:function(a,e){var t=this.e||(this.e={}),n=t[a],i=[];if(n&&e)for(var r=0,s=n.length;r<s;r++)n[r].fn!==e&&n[r].fn._!==e&&i.push(n[r]);return i.length?t[a]=i:delete t[a],this}};KM.exports=hh;var ZM=Su.TinyEmitter=hh,Tu={},JM={get exports(){return Tu},set exports(a){Tu=a}};(function(a,e){(function(t,n){a.exports=n()})(wp,function(){var t=0;function n(p){return"__private_"+t+++"_"+p}function i(p,m){if(!Object.prototype.hasOwnProperty.call(p,m))throw new TypeError("attempted to use private field on non-instance");return p}function r(){}r.prototype={on:function(p,m,_){var v=this.e||(this.e={});return(v[p]||(v[p]=[])).push({fn:m,ctx:_}),this},once:function(p,m,_){var v=this;function x(){v.off(p,x),m.apply(_,arguments)}return x._=m,this.on(p,x,_)},emit:function(p){for(var m=[].slice.call(arguments,1),_=((this.e||(this.e={}))[p]||[]).slice(),v=0,x=_.length;v<x;v++)_[v].fn.apply(_[v].ctx,m);return this},off:function(p,m){var _=this.e||(this.e={}),v=_[p],x=[];if(v&&m)for(var b=0,y=v.length;b<y;b++)v[b].fn!==m&&v[b].fn._!==m&&x.push(v[b]);return x.length?_[p]=x:delete _[p],this}};var s=r;s.TinyEmitter=r;var o,l="virtualscroll",c=n("options"),u=n("el"),d=n("emitter"),h=n("event"),f=n("touchStart"),g=n("bodyTouchAction");return function(){function p(_){var v=this;Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,f,{writable:!0,value:void 0}),Object.defineProperty(this,g,{writable:!0,value:void 0}),this._onWheel=function(x){var b=i(v,c)[c],y=i(v,h)[h];y.deltaX=x.wheelDeltaX||-1*x.deltaX,y.deltaY=x.wheelDeltaY||-1*x.deltaY,o.isFirefox&&x.deltaMode===1&&(y.deltaX*=b.firefoxMultiplier,y.deltaY*=b.firefoxMultiplier),y.deltaX*=b.mouseMultiplier,y.deltaY*=b.mouseMultiplier,v._notify(x)},this._onMouseWheel=function(x){var b=i(v,h)[h];b.deltaX=x.wheelDeltaX?x.wheelDeltaX:0,b.deltaY=x.wheelDeltaY?x.wheelDeltaY:x.wheelDelta,v._notify(x)},this._onTouchStart=function(x){var b=x.targetTouches?x.targetTouches[0]:x;i(v,f)[f].x=b.pageX,i(v,f)[f].y=b.pageY},this._onTouchMove=function(x){var b=i(v,c)[c];b.preventTouch&&!x.target.classList.contains(b.unpreventTouchClass)&&x.preventDefault();var y=i(v,h)[h],E=x.targetTouches?x.targetTouches[0]:x;y.deltaX=(E.pageX-i(v,f)[f].x)*b.touchMultiplier,y.deltaY=(E.pageY-i(v,f)[f].y)*b.touchMultiplier,i(v,f)[f].x=E.pageX,i(v,f)[f].y=E.pageY,v._notify(x)},this._onKeyDown=function(x){var b=i(v,h)[h];b.deltaX=b.deltaY=0;var y=window.innerHeight-40;switch(x.keyCode){case 37:case 38:b.deltaY=i(v,c)[c].keyStep;break;case 39:case 40:b.deltaY=-i(v,c)[c].keyStep;break;case 32:b.deltaY=y*(x.shiftKey?1:-1);break;default:return}v._notify(x)},i(this,u)[u]=window,_&&_.el&&(i(this,u)[u]=_.el,delete _.el),o||(o={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),i(this,c)[c]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},_),i(this,d)[d]=new s,i(this,h)[h]={y:0,x:0,deltaX:0,deltaY:0},i(this,f)[f]={x:null,y:null},i(this,g)[g]=null,i(this,c)[c].passive!==void 0&&(this.listenerOptions={passive:i(this,c)[c].passive})}var m=p.prototype;return m._notify=function(_){var v=i(this,h)[h];v.x+=v.deltaX,v.y+=v.deltaY,i(this,d)[d].emit(l,{x:v.x,y:v.y,deltaX:v.deltaX,deltaY:v.deltaY,originalEvent:_})},m._bind=function(){o.hasWheelEvent&&i(this,u)[u].addEventListener("wheel",this._onWheel,this.listenerOptions),o.hasMouseWheelEvent&&i(this,u)[u].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),o.hasTouch&&i(this,c)[c].useTouch&&(i(this,u)[u].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),i(this,u)[u].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),o.hasPointer&&o.hasTouchWin&&(i(this,g)[g]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",i(this,u)[u].addEventListener("MSPointerDown",this._onTouchStart,!0),i(this,u)[u].addEventListener("MSPointerMove",this._onTouchMove,!0)),o.hasKeyDown&&i(this,c)[c].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},m._unbind=function(){o.hasWheelEvent&&i(this,u)[u].removeEventListener("wheel",this._onWheel),o.hasMouseWheelEvent&&i(this,u)[u].removeEventListener("mousewheel",this._onMouseWheel),o.hasTouch&&(i(this,u)[u].removeEventListener("touchstart",this._onTouchStart),i(this,u)[u].removeEventListener("touchmove",this._onTouchMove)),o.hasPointer&&o.hasTouchWin&&(document.body.style.msTouchAction=i(this,g)[g],i(this,u)[u].removeEventListener("MSPointerDown",this._onTouchStart,!0),i(this,u)[u].removeEventListener("MSPointerMove",this._onTouchMove,!0)),o.hasKeyDown&&i(this,c)[c].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},m.on=function(_,v){i(this,d)[d].on(l,_,v);var x=i(this,d)[d].e;x&&x[l]&&x[l].length===1&&this._bind()},m.off=function(_,v){i(this,d)[d].off(l,_,v);var x=i(this,d)[d].e;(!x[l]||x[l].length<=0)&&this._unbind()},m.destroy=function(){i(this,d)[d].off(),this._unbind()},p}()})})(JM);function jo(){return jo=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},jo.apply(this,arguments)}function Pf(a,e){let t=a%e;return(e>0&&t<0||e<0&&t>0)&&(t+=e),t}const QM=["duration","easing"];class ew{to(e,t={}){let{duration:n=1,easing:i=s=>s}=t,r=function(s,o){if(s==null)return{};var l,c,u={},d=Object.keys(s);for(c=0;c<d.length;c++)o.indexOf(l=d[c])>=0||(u[l]=s[l]);return u}(t,QM);this.target=e,this.fromKeys=jo({},r),this.toKeys=jo({},r),this.keys=Object.keys(jo({},r)),this.keys.forEach(s=>{this.fromKeys[s]=e[s]}),this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0}stop(){this.isRunning=!1}raf(e){if(!this.isRunning)return;this.currentTime=Math.min(this.currentTime+e,this.duration);const t=this.progress>=1?1:this.easing(this.progress);this.keys.forEach(n=>{const i=this.fromKeys[n];this.target[n]=i+(this.toKeys[n]-i)*t}),t===1&&this.stop()}get progress(){return this.currentTime/this.duration}}class Df extends ZM{constructor({duration:e=1.2,easing:t=h=>Math.min(1,1.001-Math.pow(2,-10*h)),smooth:n=!0,mouseMultiplier:i=1,smoothTouch:r=!1,touchMultiplier:s=2,direction:o="vertical",gestureDirection:l="vertical",infinite:c=!1,wrapper:u=window,content:d=document.body}={}){var h,f,g;super(),this.onWindowResize=()=>{this.wrapperWidth=window.innerWidth,this.wrapperHeight=window.innerHeight},this.onWrapperResize=([m])=>{if(m){const _=m.contentRect;this.wrapperWidth=_.width,this.wrapperHeight=_.height}},this.onContentResize=([m])=>{if(m){const _=m.contentRect;this.contentWidth=_.width,this.contentHeight=_.height}},this.onVirtualScroll=({deltaY:m,deltaX:_,originalEvent:v})=>{if(this.gestureDirection==="vertical"&&m===0||this.gestureDirection==="horizontal"&&_===0)return;const x=!!v.composedPath().find(y=>y.hasAttribute&&y.hasAttribute("data-lenis-prevent"));if(v.ctrlKey||x)return;if(this.smooth=v.changedTouches?this.smoothTouch:this.options.smooth,this.stopped)return void v.preventDefault();if(!this.smooth||v.buttons===4)return;this.smooth&&v.preventDefault();let b=0;b=this.gestureDirection==="both"?_+m:this.gestureDirection==="horizontal"?_:m,this.targetScroll-=b,this.scrollTo(this.targetScroll)},this.onScroll=m=>{this.isScrolling&&this.smooth||(this.targetScroll=this.scroll=this.lastScroll=this.wrapperNode[this.scrollProperty],this.notify())},window.lenisVersion="0.2.28",this.options={duration:e,easing:t,smooth:n,mouseMultiplier:i,smoothTouch:r,touchMultiplier:s,direction:o,gestureDirection:l,infinite:c,wrapper:u,content:d},this.duration=e,this.easing=t,this.smooth=n,this.mouseMultiplier=i,this.smoothTouch=r,this.touchMultiplier=s,this.direction=o,this.gestureDirection=l,this.infinite=c,this.wrapperNode=u,this.contentNode=d,this.wrapperNode.addEventListener("scroll",this.onScroll),this.wrapperNode===window?(this.wrapperNode.addEventListener("resize",this.onWindowResize),this.onWindowResize()):(this.wrapperHeight=this.wrapperNode.offsetHeight,this.wrapperWidth=this.wrapperNode.offsetWidth,this.wrapperObserver=new ResizeObserver(this.onWrapperResize),this.wrapperObserver.observe(this.wrapperNode)),this.contentHeight=this.contentNode.offsetHeight,this.contentWidth=this.contentNode.offsetWidth,this.contentObserver=new ResizeObserver(this.onContentResize),this.contentObserver.observe(this.contentNode),this.targetScroll=this.scroll=this.lastScroll=this.wrapperNode[this.scrollProperty],this.animate=new ew;const p=((h=navigator)==null||(f=h.userAgentData)==null?void 0:f.platform)||((g=navigator)==null?void 0:g.platform)||"unknown";this.virtualScroll=new Tu({el:this.wrapperNode,firefoxMultiplier:50,mouseMultiplier:this.mouseMultiplier*(p.includes("Win")||p.includes("Linux")?.84:.4),touchMultiplier:this.touchMultiplier,passive:!1,useKeyboard:!1,useTouch:!0}),this.virtualScroll.on(this.onVirtualScroll)}get scrollProperty(){let e;return e=this.wrapperNode===window?this.direction==="horizontal"?"scrollX":"scrollY":this.direction==="horizontal"?"scrollLeft":"scrollTop",e}start(){let e=this.wrapperNode;this.wrapperNode===window&&(e=document.documentElement),e.classList.remove("lenis-stopped"),this.stopped=!1}stop(){let e=this.wrapperNode;this.wrapperNode===window&&(e=document.documentElement),e.classList.add("lenis-stopped"),this.stopped=!0,this.animate.stop()}destroy(){var e;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),(e=this.wrapperObserver)==null||e.disconnect(),this.contentObserver.disconnect()}get limit(){return this.direction==="horizontal"?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}raf(e){const t=e-(this.now||0);this.now=e,!this.stopped&&this.smooth&&(this.lastScroll=this.scroll,this.animate.raf(.001*t),this.scroll===this.targetScroll&&(this.lastScroll=this.scroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll)}get velocity(){return this.scroll-this.lastScroll}setScroll(e){let t=this.infinite?Pf(e,this.limit):e;this.direction==="horizontal"?this.wrapperNode.scrollTo(t,0):this.wrapperNode.scrollTo(0,t)}notify(){let e=this.infinite?Pf(this.scroll,this.limit):this.scroll;this.emit("scroll",{scroll:e,limit:this.limit,velocity:this.velocity,direction:this.velocity===0?0:this.velocity>0?1:-1,progress:e/this.limit})}scrollTo(e,{offset:t=0,immediate:n=!1,duration:i=this.duration,easing:r=this.easing}={}){if(e==null||this.stopped)return;let s;if(typeof e=="number")s=e;else if(e==="top"||e==="#top")s=0;else if(e==="bottom")s=this.limit;else{let o;if(typeof e=="string")o=document.querySelector(e);else{if(e==null||!e.nodeType)return;o=e}if(!o)return;let l=0;if(this.wrapperNode!==window){const u=this.wrapperNode.getBoundingClientRect();l=this.direction==="horizontal"?u.left:u.top}const c=o.getBoundingClientRect();s=(this.direction==="horizontal"?c.left:c.top)+this.scroll-l}s+=t,this.targetScroll=this.infinite?s:Math.max(0,Math.min(s,this.limit)),!this.smooth||n?(this.animate.stop(),this.scroll=this.lastScroll=this.targetScroll,this.setScroll(this.targetScroll)):this.animate.to(this,{duration:i,easing:r,scroll:this.targetScroll})}}const $o=class extends ts{constructor(){super();kt(this,"onProject",!1);kt(this,"scrollY",0);kt(this,"currentProject",-1);if(this.camera=this.experience.camera.instance,this.cameraControls=this.experience.camera.controls,this.data=Gr.projects,$o.instance)return $o.instance;$o.instance=this,this.initScroll(),this.initScrollProject(),this.initProjectHandler(),this.initEvents()}initScroll(){this.scene.fog.color=this.world.fogColor.lerpColors(this.world.fogColor,this.world.finalFogColor,this.scrollY/this.experience.sizes.height*40/-180),this.positionScrollGlobal=0,pi.SCREEN_OBJ&&pi.SCREEN_OBJ.forEach(i=>{i.initMousePosition()}),this.mainLenis=new Df({duration:1.2,easing:i=>1-Math.pow(1-i,3),infinite:!1}),this.mainLenis.on("scroll",({scroll:i})=>{this.scrollY=-i,this.positionScrollGlobal=this.scrollY/this.experience.sizes.height*40,this.camera.position.y=21.5+this.positionScrollGlobal,this.cameraControls.target.y=20+this.positionScrollGlobal,this.environment.mainLight.position.y=20+this.positionScrollGlobal,this.environment.secondary.position.y=20+this.positionScrollGlobal,this.environment.mainLight.intensity=Math.max(20-this.environment.mainLight.position.y/-180*40,1),this.scene.fog.color=this.world.fogColor.lerpColors(this.world.fogColor,this.world.finalFogColor,this.scrollY/this.experience.sizes.height*40/-180)});const t=Nn.utils.toArray(".project"),n=Nn.utils.toArray(".sectionTitle");t.forEach(i=>{const r=Nn.timeline(),s=i.querySelector(".projectTitle"),o=i.querySelectorAll(".partTitle"),l=i.querySelector(".typeProject"),c=i.querySelectorAll(".date"),u=i.querySelector(".sub .partTitle"),d=i.querySelector(".more");function h(g){g.set(o,{yPercent:120}).set(l,{yPercent:120}).set(c,{yPercent:120}).to(o[0],{yPercent:-120,duration:.5}).to(l,{yPercent:-115,duration:.5},"<").to(u||o[1],{yPercent:-120,duration:.5,delay:.1},"<").to(c,{yPercent:-115,duration:.5},"<").to(d,{opacity:1,duration:.25},"<")}function f(g){g.to(o[0],{yPercent:-240,duration:.25}).to(l,{yPercent:-240,duration:.25},"<").to(u||o[1],{yPercent:-240,duration:.25},"<0.125").to(c,{yPercent:-240,duration:.25},"<").to(d,{opacity:0,duration:.1},"<")}Nn.to(i,{scrollTrigger:{trigger:s,start:"120% 90%",end:"15% 30%",onEnter:()=>{h(r)},onLeave:()=>{f(r)},onEnterBack:()=>{h(r)},onLeaveBack:()=>{f(r)}}})}),n.forEach(i=>{Nn.to(i,{scrollTrigger:{trigger:i,start:"bottom 90%",end:"top 30%",onEnter:()=>{i.classList.add("active")}}})})}initScrollProject(){this.world.projectImages.position.y=this.scrollY/this.experience.sizes.height*40+scroll/this.experience.sizes.height*17.5*(this.sizes.format==="mobile"?2:1),this.world.projectImages.position.y+=this.sizes.format==="mobile"?-5:-2.5,this.projectLenis=new Df({duration:1.2,easing:t=>1-Math.pow(1-t,3),wrapper:document.querySelector(".projectWrapper"),content:document.querySelector(".projectPage")}),this.projectLenis.on("scroll",({scroll:t})=>{this.world.projectImages.position.y=this.scrollY/this.experience.sizes.height*40+t/this.experience.sizes.height*17.5*(this.sizes.format==="mobile"?2:1),this.world.projectImages.position.y+=this.sizes.format==="mobile"?-5:-2.5}),this.projectLenis.scrollTo(0,{immediate:!0}),Nn.timeline({scrollTrigger:{scroller:".projectWrapper",endTrigger:".projectWrapper",end:"bottom center",scrub:!0}}).set(".informations",{maskImage:"linear-gradient(to bottom,transparent 0%, black 25%)",scrub:!0}).to(".informations",{maskImage:"linear-gradient(to bottom,transparent 75%, black 100%)",scrub:!0})}initProjectHandler(){this.tlProj=Nn.timeline({paused:!0}),this.tlProj.to(".homepage",{opacity:0}).to(this.environment.mainLight.position,{z:-15.3-130,duration:1,ease:li.easeInOut},"-.25").to(this.environment.secondary.position,{z:5.3-140,duration:1,ease:li.easeInOut},"<").to(this.camera.position,{z:-120,duration:2,ease:li.easeInOut},"-.15").to(this.cameraControls.target,{z:-135,duration:2,ease:li.easeInOut},"<").to(this.world.surfaceElts.position,{z:-135,duration:2,ease:li.easeInOut},"<").to(".close",{opacity:1,pointerEvents:"auto",duration:2,ease:li.easeInOut},"<").to(".projectPage",{opacity:1,duration:this.tlProj.reversed()?.5:1.5},this.tlProj.reversed()?"<":"<1.25")}backToSection(t){this.mainLenis.scrollTo(t,{duration:2,easing:n=>1-Math.pow(1-n,3)})}initEvents(){document.querySelector("p.nav-title").addEventListener("click",()=>{this.onProject?(this.toggleProjectAnimation(),setTimeout(()=>{this.backToSection(0)},500)):this.backToSection(0)}),document.querySelector(".about").addEventListener("click",()=>{this.onProject?(this.toggleProjectAnimation(),setTimeout(()=>{this.backToSection(document.getElementById("about"))},500)):this.backToSection(document.getElementById("about"))}),document.querySelectorAll(".more").forEach((t,n)=>{t.addEventListener("click",()=>{this.currentProject=n,this.toggleProjectAnimation(n),this.setInfos(this.currentProject)})}),document.querySelector(".close").addEventListener("click",()=>{this.toggleProjectAnimation()})}toggleProjectAnimation(t=-1){this.onProject?(this.tlProj.reverse(),this.mainLenis.start(),this.projectLenis.stop(),document.querySelector(".projectWrapper").style.pointerEvents="none",this.changeGroupOpacity(this.world.projectImages,0,2)):(this.tlProj.play(),this.mainLenis.stop(),this.projectLenis.start(),this.projectLenis.scrollTo(10,{immediate:!0}),document.querySelector(".projectWrapper").style.pointerEvents="auto",this.changeGroupOpacity(this.world.projectImages,1,2),this.world.projectImages.position.y=this.positionScrollGlobal,this.world.projectImages.position.y+=this.sizes.format==="mobile"?-5:-2.5,setTimeout(()=>{this.world.monoliths.forEach(n=>{n.modifyColor()})},500)),this.onProject=!this.onProject}setInfos(t){t>=0&&(document.querySelector(".informations h1").innerHTML=this.data[t].title,document.querySelector(".infos").innerHTML=this.data[t].content,document.querySelector(".job p").innerHTML=this.data[t].job,document.querySelector(".stack p").innerHTML=this.data[t].stack,document.querySelector(".status p").innerHTML=this.data[t].status,document.querySelector(".credits p").innerHTML=this.data[t].credits,document.querySelector(".website").style.display=this.data[t].website=="none"?"none":"inline-block",document.querySelector(".website").href=this.data[t].website,document.querySelector(".github").style.display=this.data[t].github=="none"?"none":"inline-block",document.querySelector(".github").href=this.data[t].github,this.data[t].video!="none"?(document.querySelector(".video").innerHTML=this.data[t].video,document.querySelector(".projectPage").classList.add("videoPage"),this.world.projectImages.visible=!1):(document.querySelector(".video").innerHTML="",document.querySelector(".projectPage").classList.remove("videoPage"),this.world.projectImages.visible=!0),this.changeGroupImages(this.world.projectImages))}changeGroupOpacity(t,n,i){let r=0;t.traverse(s=>{if(s.material&&s.material.transparent)if(s.material.uniforms&&s.material.uniforms.uOpacity){const o=this.resources.items[this.data[this.currentProject].photos[r]];Nn.to(s.material.uniforms.uOpacity,{value:o!=null?n:0,duration:i,ease:li.easeInOut}),r++}else Nn.to(s.material,{opacity:n,duration:i+(1-n),ease:li.easeInOut})})}changeGroupImages(t){let n=0;t.traverse(i=>{if(i.material&&i.material.uniforms&&i.material.uniforms.uTexture){const r=this.resources.items[this.data[this.currentProject].photos[n]];i.material.uniforms.uOpacity&&r==null&&(i.material.uniforms.uOpacity.value=0),i.material.uniforms.uTexture.value=r,n++}})}update(){!this.onProject&&this.mainLenis&&this.mainLenis.raf(this.experience.time.current),this.onProject&&this.projectLenis&&this.projectLenis.raf(this.experience.time.current)}};let fl=$o;kt(fl,"instance",null);class tw{constructor(){this.experience=new lo,this.scene=this.experience.scene,this.resources=this.experience.resources,this.camera=this.experience.camera.instance,this.experience.debug.active&&(this.monolithsFolder=this.experience.debug.ui.addFolder("monoliths"),this.monolithsFolder.close(),this.raylightsFolder=this.experience.debug.ui.addFolder("raylights"),this.raylightsFolder.close()),this.monoliths=[],this.raylights=[],this.projects=[],this.projectImages=new fi,this.fogColor=new Oe("#42566c"),this.finalFogColor=new Oe("#1c2633");const e=new zu(this.fogColor,0,100);this.scene.fog=e,this.surfaceElts=new fi,Nn.registerPlugin(tt),this.resources.on("ready",()=>{this.environment=new r1,this.fogLight=new $M(this.surfaceElts),this.water=new XM(this.surfaceElts),Gr.raylights.forEach(()=>{this.raylights.push(new dl(this.surfaceElts))}),Gr.monoliths.heroBanner.forEach(()=>{this.monoliths.push(new pi("heroBanner",0,this.projectImages))}),Gr.monoliths.projects.forEach((t,n)=>{this.projects.push(new pi("projects",n))}),this.particules=new Lf,this.particulesBack=new Lf,this.particulesBack.points.position.z=-130,this.pageHandler=new fl,this.scene.add(this.surfaceElts),this.scene.add(this.projectImages),this.projectImages.position.z=-135,this.projectImages.position.y=this.experience.sizes.format==="mobile"?-5:-2.5})}update(){this.pageHandler&&this.pageHandler.update(),this.particules&&this.particules.update(),this.particulesBack&&this.particulesBack.update(),pi.SCREEN_OBJ.length>0&&pi.SCREEN_OBJ.forEach(e=>{e.update()}),this.raylights.length>0&&this.raylights.forEach(e=>{e.update()}),this.water&&this.water.update()}}class nw extends ao{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new aw(t)}),this.register(function(t){return new pw(t)}),this.register(function(t){return new mw(t)}),this.register(function(t){return new cw(t)}),this.register(function(t){return new uw(t)}),this.register(function(t){return new hw(t)}),this.register(function(t){return new dw(t)}),this.register(function(t){return new ow(t)}),this.register(function(t){return new fw(t)}),this.register(function(t){return new lw(t)}),this.register(function(t){return new rw(t)}),this.register(function(t){return new gw(t)}),this.register(function(t){return new _w(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=Or.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new vp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},o={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Or.decodeText(new Uint8Array(e,0,4))===jm){try{s[nt.KHR_BINARY_GLTF]=new xw(e)}catch(u){i&&i(u);return}r=JSON.parse(s[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(Or.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Dw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);o[u.name]=u,s[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const u=r.extensionsUsed[c],d=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:s[u]=new sw;break;case nt.KHR_DRACO_MESH_COMPRESSION:s[u]=new vw(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:s[u]=new yw;break;case nt.KHR_MESH_QUANTIZATION:s[u]=new bw;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function iw(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class rw{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Oe(16777215);l.color!==void 0&&u.fromArray(l.color);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Mp(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zc(u),c.distance=d;break;case"spot":c=new Tb(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class sw{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Cr}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,rt))}return Promise.all(i)}}class ow{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class aw{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(o,o)}return Promise.all(r)}}class lw{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class cw{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,rt)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class uw{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class hw{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Oe(o[0],o[1],o[2]),Promise.all(r)}}class dw{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class fw{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Oe(o[0],o[1],o[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,rt)),Promise.all(r)}}class pw{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class mw{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gw{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(f){return f.buffer}):s.ready.then(function(){const f=new ArrayBuffer(u*d);return s.decodeGltfBuffer(new Uint8Array(f),u,d,h,i.mode,i.filter),f})})}else return null}}class _w{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Fn.TRIANGLES&&c.mode!==Fn.TRIANGLE_STRIP&&c.mode!==Fn.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],l={};for(const c in s)o.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const g of d){const p=new $e,m=new N,_=new vi,v=new N(1,1,1),x=new ub(g.geometry,g.material,h);for(let b=0;b<h;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,b),l.SCALE&&v.fromBufferAttribute(l.SCALE,b),x.setMatrixAt(b,p.compose(m,_,v));for(const b in l)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);yt.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const jm="glTF",wo=12,Rf={JSON:1313821514,BIN:5130562};class xw{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,wo);if(this.header={magic:Or.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-wo,i=new DataView(e,wo);let r=0;for(;r<n;){const s=i.getUint32(r,!0);r+=4;const o=i.getUint32(r,!0);if(r+=4,o===Rf.JSON){const l=new Uint8Array(e,wo+r,s);this.content=Or.decodeText(l)}else if(o===Rf.BIN){const l=wo+r;this.body=e.slice(l,l+s)}r+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const u in s){const d=Eu[u]||u.toLowerCase();o[d]=s[u]}for(const u in e.attributes){const d=Eu[u]||u.toLowerCase();if(s[u]!==void 0){const h=n.accessors[e.attributes[u]],f=Fs[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d){i.decodeDracoFile(u,function(h){for(const f in h.attributes){const g=h.attributes[f],p=l[f];p!==void 0&&(g.normalized=p)}d(h)},o,c)})})}}class yw{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class bw{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}}class Xm extends fa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,d=(n-t)/u,h=d*d,f=h*d,g=e*c,p=g-c,m=-2*f+3*h,_=f-h,v=1-m,x=_-h+d;for(let b=0;b!==o;b++){const y=s[p+b+o],E=s[p+b+l]*u,A=s[g+b+o],M=s[g+b]*u;r[b]=v*y+x*E+m*A+_*M}return r}}const Mw=new vi;class ww extends Xm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Mw.fromArray(r).normalize().toArray(r),r}}const Fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},If={9728:Vt,9729:mn,9984:jc,9985:jf,9986:Ja,9987:Hr},zf={33071:Un,33648:pl,10497:Gs},kc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Eu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Sw={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Zo},Uc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tw(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new da({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:cr})),a.DefaultMaterial}function So(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yi(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ew(a,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):a.attributes.position;s.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):a.attributes.normal;o.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):a.attributes.color;l.push(h)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=d),r&&(a.morphAttributes.color=h),a.morphTargetsRelative=!0,a})}function Aw(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Cw(a){const e=a.extensions&&a.extensions[nt.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Of(e.attributes):t=a.indices+":"+Of(a.attributes)+":"+a.mode,t}function Of(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Au(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Lw(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Pw=new $e;class Dw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iw,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new bp(this.options.manager):this.textureLoader=new Cb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};So(r,o,i),Yi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,u]of s.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(Or.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=kc[i.type],o=Fs[i.componentType],l=i.normalized===!0,c=new o(i.count*s);return Promise.resolve(new Gt(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=kc[i.type],c=Fs[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,m;if(f&&f!==d){const _=Math.floor(h/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let x=t.cache.get(v);x||(p=new c(o,_*f,i.count*f/u),x=new rb(p,f/u),t.cache.add(v,x)),m=new Ou(x,l,h%f/u,g)}else o===null?p=new c(i.count*l):p=new c(o,h,i.count*l),m=new Gt(p,l,g);if(i.sparse!==void 0){const _=kc.SCALAR,v=Fs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,y=new v(s[1],x,i.sparse.count*_),E=new c(s[2],b,i.sparse.count*l);o!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,M=y.length;A<M;A++){const S=y[A];if(m.setX(S,E[A*l]),l>=2&&m.setY(S,E[A*l+1]),l>=3&&m.setZ(S,E[A*l+2]),l>=4&&m.setW(S,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||o.name||"";const h=(r.samplers||{})[s.sampler]||{};return u.magFilter=If[h.magFilter]||mn,u.minFilter=If[h.minFilter]||Hr,u.wrapS=zf[h.wrapS]||Gs,u.wrapT=zf[h.wrapT]||Gs,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const s=i.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:s.mimeType});return l=o.createObjectURL(h),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(p){const m=new Yt(p);m.needsUpdate=!0,h(m)}),t.load(Or.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),d.userData.mimeType=s.mimeType||Lw(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new fp,mi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new dp,mi.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return da}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){const d=i[nt.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;o.color.fromArray(h),o.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,rt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Cl);const u=r.alphaMode||Uc.OPAQUE;if(u===Uc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Uc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==Cr&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}return r.occlusionTexture!==void 0&&s!==Cr&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==Cr&&(o.emissive=new Oe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==Cr&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,rt)),Promise.all(c).then(function(){const d=new s(o);return r.name&&(d.name=r.name),Yi(d,r),t.associations.set(d,{materials:e}),r.extensions&&So(i,d,r),d})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Nf(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Cw(c),d=i[u];if(d)s.push(d.promise);else{let h;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Nf(new si,c,t),i[u]={primitive:c,promise:h},s.push(h)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?Tw(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const p=u[f],m=s[f];let _;const v=c[f];if(m.mode===Fn.TRIANGLES||m.mode===Fn.TRIANGLE_STRIP||m.mode===Fn.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new ob(p,v):new zt(p,v),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),m.mode===Fn.TRIANGLE_STRIP?_.geometry=Ff(_.geometry,Ug):m.mode===Fn.TRIANGLE_FAN&&(_.geometry=Ff(_.geometry,qf));else if(m.mode===Fn.LINES)_=new hb(p,v);else if(m.mode===Fn.LINE_STRIP)_=new Fu(p,v);else if(m.mode===Fn.LINE_LOOP)_=new db(p,v);else if(m.mode===Fn.POINTS)_=new pp(p,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&Aw(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),Yi(_,r),m.extensions&&So(i,_,m),t.assignFinalMaterial(_),d.push(_)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return d[0];const h=new fi;t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new cn(i_.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ru(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,o=[],l=[];for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d){o.push(d);const h=new $e;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Nu(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],s=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const d=n.channels[c],h=n.samplers[d.sampler],f=d.target,g=f.node,p=n.parameters!==void 0?n.parameters[h.input]:h.input,m=n.parameters!==void 0?n.parameters[h.output]:h.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",p)),s.push(this.getDependency("accessor",m)),o.push(h),l.push(f)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2],f=c[3],g=c[4],p=[];for(let _=0,v=u.length;_<v;_++){const x=u[_],b=d[_],y=h[_],E=f[_],A=g[_];if(x===void 0)continue;x.updateMatrix();let M;switch(Xi[A.path]){case Xi.weights:M=ta;break;case Xi.rotation:M=qr;break;case Xi.position:case Xi.scale:default:M=na;break}const S=x.name?x.name:x.uuid,D=E.interpolation!==void 0?Sw[E.interpolation]:Ws,k=[];Xi[A.path]===Xi.weights?x.traverse(function(z){z.morphTargetInfluences&&k.push(z.name?z.name:z.uuid)}):k.push(S);let G=y.array;if(y.normalized){const z=Au(G.constructor),R=new Float32Array(G.length);for(let B=0,H=G.length;B<H;B++)R[B]=G[B]*z;G=R}for(let z=0,R=k.length;z<R;z++){const B=new M(k[z]+"."+Xi[A.path],b.array,G,D);E.interpolation==="CUBICSPLINE"&&(B.createInterpolant=function(Z){const V=this instanceof qr?ww:Xm;return new V(this.times,this.values,this.getValueSize()/3,Z)},B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(B)}}const m=n.name?n.name:"animation_"+e;return new xb(m,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"";return function(){const o=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)});const c=[],u=r.children||[];for(let h=0,f=u.length;h<f;h++)c.push(i.getDependency("node",u[h]));const d=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([Promise.all(o),Promise.all(c),d])}().then(function(o){const l=o[0],c=o[1],u=o[2];let d;if(r.isBone===!0?d=new hp:l.length>1?d=new fi:l.length===1?d=l[0]:d=new yt,d!==l[0])for(let h=0,f=l.length;h<f;h++)d.add(l[h]);if(r.name&&(d.userData.name=r.name,d.name=s),Yi(d,r),r.extensions&&So(n,d,r),r.matrix!==void 0){const h=new $e;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,u!==null&&d.traverse(function(h){h.isSkinnedMesh&&h.bind(u,Pw)});for(let h=0,f=c.length;h<f;h++)d.add(c[h]);return d})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new fi;n.name&&(r.name=i.createUniqueName(n.name)),Yi(r,n),n.extensions&&So(t,r,n);const s=n.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(i.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const c=u=>{const d=new Map;for(const[h,f]of i.associations)(h instanceof mi||h instanceof Yt)&&d.set(h,f);return u.traverse(h=>{const f=i.associations.get(h);f!=null&&d.set(h,f)}),d};return i.associations=c(r),r})}}function Rw(a,e,t){const n=e.attributes,i=new to;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){const u=Au(Fs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new N,l=new N;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const p=Au(Fs[h.componentType]);l.multiplyScalar(p)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const s=new no;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=s}function Nf(a,e,t){const n=e.attributes,i=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=Eu[s]||s.toLowerCase();o in a.attributes||i.push(r(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(s)}return Yi(a,e),Rw(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ew(a,e.targets,t):a})}function Ff(a,e){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===qf)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(i),r}class Iw extends Il{constructor(e){super(),this.sources=e,this.loadingManager=new xp(()=>{Nn.timeline().to(".progress",{opacity:0,duration:1,ease:li.easeOut}).to(".loader",{opacity:0,duration:1.2,ease:li.easeOut},"<.5").to(".loader",{display:"none"},"<.5")},(t,n,i)=>{const r=Math.round(n/i*100)+"%";document.querySelector(".progress").innerHTML=r}),this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new nw(this.loadingManager),this.loaders.textureLoader=new bp(this.loadingManager),this.loaders.cubeTextureLoader=new wb(this.loadingManager)}startLoading(){for(const e of this.sources)e.type==="gltfModel"?this.loaders.gltfLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="texture"?this.loaders.textureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="cubeTexture"&&this.loaders.cubeTextureLoader.load(e.path,t=>{this.sourceLoaded(e,t)})}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}}const zw=[{name:"environmentMapTexture",type:"cubeTexture",path:["textures/environmentMap/px.jpg","textures/environmentMap/nx.jpg","textures/environmentMap/py.jpg","textures/environmentMap/ny.jpg","textures/environmentMap/pz.jpg","textures/environmentMap/nz.jpg"]},{name:"grassColorTexture",type:"texture",path:"textures/dirt/color.jpg"},{name:"sibo_p1",type:"texture",path:"textures/sibo/p1.jpg"},{name:"sibo_p2",type:"texture",path:"textures/sibo/p2.jpg"},{name:"sibo_d3",type:"texture",path:"textures/sibo/Desktop_1.jpg"},{name:"sibo_d2",type:"texture",path:"textures/sibo/Desktop_2.jpg"},{name:"sibo_d1",type:"texture",path:"textures/sibo/Desktop_3.jpg"},{name:"sibo_m1",type:"texture",path:"textures/sibo/Mobile_1.jpg"},{name:"adm_p1",type:"texture",path:"textures/adm/p1.jpg"},{name:"adm_d1",type:"texture",path:"textures/adm/Desktop_1.jpg"},{name:"adm_d2",type:"texture",path:"textures/adm/Desktop_2.jpg"},{name:"adm_d3",type:"texture",path:"textures/adm/Desktop_3.jpg"},{name:"adm_m1",type:"texture",path:"textures/adm/Mobile_1.jpg"},{name:"sk_p1",type:"texture",path:"textures/sk/p1.jpg"},{name:"sk_p2",type:"texture",path:"textures/sk/p2.jpg"},{name:"sk_d1",type:"texture",path:"textures/sk/Desktop_1.jpg"},{name:"sk_d2",type:"texture",path:"textures/sk/Desktop_2.jpg"},{name:"sk_d3",type:"texture",path:"textures/sk/Desktop_3.jpg"},{name:"sk_m1",type:"texture",path:"textures/sk/Mobile_1.jpg"},{name:"fallout_p1",type:"texture",path:"textures/fallout/p1.jpg"},{name:"fallout_d1",type:"texture",path:"textures/fallout/Desktop_1.jpg"},{name:"fallout_d2",type:"texture",path:"textures/fallout/Desktop_2.jpg"},{name:"fallout_d3",type:"texture",path:"textures/fallout/Desktop_3.jpg"},{name:"fallout_m1",type:"texture",path:"textures/fallout/Mobile_1.jpg"}];let Bc=null;class lo{constructor(e){if(Bc)return Bc;Bc=this,window.experience=this,this.canvas=e,this.debug=new Jb,this.sizes=new Qb,this.time=new e1,this.scene=new ib,this.resources=new Iw(zw),this.camera=new n1,this.renderer=new i1,this.world=new tw,this.mouse=new tl,this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()})}resize(){this.camera.resize(),this.renderer.resize()}update(){this.camera.update(),this.world.update(),this.renderer.update()}destroy(){this.sizes.off("resize"),this.time.off("tick"),this.scene.traverse(e=>{if(e instanceof zt){e.geometry.dispose();for(const t in e.material){const n=e.material[t];n&&typeof n.dispose=="function"&&n.dispose()}}}),this.camera.controls.dispose(),this.renderer.instance.dispose(),this.debug.active&&this.debug.ui.destroy()}}new lo(document.querySelector("canvas.webgl"));
//# sourceMappingURL=index-22448a00.js.map
