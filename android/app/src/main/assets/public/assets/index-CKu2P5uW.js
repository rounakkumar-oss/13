(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,j=1033,M=33776,N=33777,P=33778,F=33779,I=35840,L=35841,R=35842,ee=35843,te=36196,z=37492,ne=37496,re=37488,B=37489,V=37490,ie=37491,ae=37808,oe=37809,se=37810,ce=37811,le=37812,ue=37813,de=37814,fe=37815,pe=37816,me=37817,he=37818,ge=37819,_e=37820,ve=37821,ye=36492,be=36494,xe=36495,Se=36283,Ce=36284,we=36285,Te=36286,H=2300,U=2301,Ee=2302,De=2303,Oe=2400,W=2401,ke=2402,G=3200,Ae=`srgb`,je=`srgb-linear`,Me=`linear`,Ne=`srgb`,Pe=7680,Fe=35044,Ie=2e3;function Le(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Re(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ze(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Be(){let e=ze(`canvas`);return e.style.display=`block`,e}var Ve={};function He(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ue(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function We(...e){e=Ue(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ge(...e){e=Ue(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ke(...e){let t=e.join(` `);t in Ve||(Ve[t]=!0,We(...e))}function qe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Je={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Ye=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Xe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ze=1234567,Qe=Math.PI/180,$e=180/Math.PI;function et(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xe[e&255]+Xe[e>>8&255]+Xe[e>>16&255]+Xe[e>>24&255]+`-`+Xe[t&255]+Xe[t>>8&255]+`-`+Xe[t>>16&15|64]+Xe[t>>24&255]+`-`+Xe[n&63|128]+Xe[n>>8&255]+`-`+Xe[n>>16&255]+Xe[n>>24&255]+Xe[r&255]+Xe[r>>8&255]+Xe[r>>16&255]+Xe[r>>24&255]).toLowerCase()}function tt(e,t,n){return Math.max(t,Math.min(n,e))}function K(e,t){return(e%t+t)%t}function q(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function nt(e,t,n){return e===t?0:(n-e)/(t-e)}function rt(e,t,n){return(1-n)*e+n*t}function it(e,t,n,r){return rt(e,t,1-Math.exp(-n*r))}function at(e,t=1){return t-Math.abs(K(e,t*2)-t)}function ot(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function st(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ct(e,t){return e+Math.floor(Math.random()*(t-e+1))}function lt(e,t){return e+Math.random()*(t-e)}function ut(e){return e*(.5-Math.random())}function dt(e){e!==void 0&&(Ze=e);let t=Ze+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ft(e){return e*Qe}function pt(e){return e*$e}function mt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function ht(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function gt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function _t(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:We(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function vt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function yt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var bt={DEG2RAD:Qe,RAD2DEG:$e,generateUUID:et,clamp:tt,euclideanModulo:K,mapLinear:q,inverseLerp:nt,lerp:rt,damp:it,pingpong:at,smoothstep:ot,smootherstep:st,randInt:ct,randFloat:lt,randFloatSpread:ut,seededRandom:dt,degToRad:ft,radToDeg:pt,isPowerOfTwo:mt,ceilPowerOfTwo:ht,floorPowerOfTwo:gt,setQuaternionFromProperEuler:_t,normalize:yt,denormalize:vt},xt=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},St=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:We(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ct.copy(this).projectOnVector(e),this.sub(Ct)}reflect(e){return this.sub(Ct.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ct=new J,wt=new St,Tt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ke(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Et.makeScale(e,t)),this}rotate(e){return Ke(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Et.makeRotation(-e)),this}translate(e,t){return Ke(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Et.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Et=new Tt,Dt=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ot=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kt(){let e={enabled:!0,workingColorSpace:je,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=jt(e.r),e.g=jt(e.g),e.b=jt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Y(e.r),e.g=Y(e.g),e.b=Y(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Me:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ke(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ke(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[je]:{primaries:t,whitePoint:r,transfer:Me,toXYZ:Dt,fromXYZ:Ot,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:r,transfer:Ne,toXYZ:Dt,fromXYZ:Ot,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),e}var At=kt();function jt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Y(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Mt,Nt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mt===void 0&&(Mt=ze(`canvas`)),Mt.width=e.width,Mt.height=e.height;let t=Mt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Mt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ze(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=jt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(jt(t[e]/255)*255):t[e]=jt(t[e]);return{data:t,width:e.width,height:e.height}}return We(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Pt=0,Ft=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pt++}),this.uuid=et(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(It(r[t].image)):e.push(It(r[t]))}else e=It(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function It(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Nt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(We(`Texture: Unable to serialize Texture.`),{})}var Lt=0,Rt=new J,zt=class r extends Ye{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lt++}),this.uuid=et(),this.name=``,this.source=new Ft(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rt).x}get height(){return this.source.getSize(Rt).y}get depth(){return this.source.getSize(Rt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?We(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null,zt.DEFAULT_MAPPING=300,zt.DEFAULT_ANISOTROPY=1;var Bt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vt=class extends Ye{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let r=new zt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ft(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ht=class extends Vt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ut=class extends zt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Wt=class extends zt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Gt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Kt.setFromMatrixColumn(e,0).length(),i=1/Kt.setFromMatrixColumn(e,1).length(),a=1/Kt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jt,e,Yt)}lookAt(e,t,n){let r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Xt.crossVectors(n,Qt),Xt.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Xt.crossVectors(n,Qt)),Xt.normalize(),Zt.crossVectors(Qt,Xt),r[0]=Xt.x,r[4]=Zt.x,r[8]=Qt.x,r[1]=Xt.y,r[5]=Zt.y,r[9]=Qt.y,r[2]=Xt.z,r[6]=Zt.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Kt.set(r[0],r[1],r[2]).length(),o=Kt.set(r[4],r[5],r[6]).length(),s=Kt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),qt.copy(this);let c=1/a,l=1/o,u=1/s;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=l,qt.elements[5]*=l,qt.elements[6]*=l,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,t.setFromRotationMatrix(qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ie,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ie,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Kt=new J,qt=new Gt,Jt=new J(0,0,0),Yt=new J(1,1,1),Xt=new J,Zt=new J,Qt=new J,$t=new Gt,en=new St,tn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-tt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:We(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $t.makeRotationFromQuaternion(e),this.setFromRotationMatrix($t,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return en.setFromEuler(this),this.setFromQuaternion(en,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER=`XYZ`;var nn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},rn=0,an=new J,on=new St,sn=new Gt,cn=new J,ln=new J,un=new J,dn=new St,fn=new J(1,0,0),pn=new J(0,1,0),mn=new J(0,0,1),hn={type:`added`},gn={type:`removed`},_n={type:`childadded`,child:null},vn={type:`childremoved`,child:null},yn=class e extends Ye{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rn++}),this.uuid=et(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new tn,r=new St,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Tt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return on.setFromAxisAngle(e,t),this.quaternion.multiply(on),this}rotateOnWorldAxis(e,t){return on.setFromAxisAngle(e,t),this.quaternion.premultiply(on),this}rotateX(e){return this.rotateOnAxis(fn,e)}rotateY(e){return this.rotateOnAxis(pn,e)}rotateZ(e){return this.rotateOnAxis(mn,e)}translateOnAxis(e,t){return an.copy(e).applyQuaternion(this.quaternion),this.position.add(an.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fn,e)}translateY(e){return this.translateOnAxis(pn,e)}translateZ(e){return this.translateOnAxis(mn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cn.copy(e):cn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ln.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(ln,cn,this.up):sn.lookAt(cn,ln,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),on.setFromRotationMatrix(sn),this.quaternion.premultiply(on.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Ge(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hn),_n.child=e,this.dispatchEvent(_n),_n.child=null):Ge(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gn),vn.child=e,this.dispatchEvent(vn),vn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hn),_n.child=e,this.dispatchEvent(_n),_n.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ln,e,un),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ln,dn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};yn.DEFAULT_UP=new J(0,1,0),yn.DEFAULT_MATRIX_AUTO_UPDATE=!0,yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=class extends yn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},xn={type:`move`},Sn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Tn={h:0,s:0,l:0};function En(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Dn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ae){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=At.workingColorSpace){if(e=K(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=En(i,r,e+1/3),this.g=En(i,r,e),this.b=En(i,r,e-1/3)}return At.colorSpaceToWorking(this,r),this}setStyle(e,t=Ae){function n(t){t!==void 0&&parseFloat(t)<1&&We(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:We(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);We(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ae){let n=Cn[e.toLowerCase()];return n===void 0?We(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jt(e.r),this.g=jt(e.g),this.b=jt(e.b),this}copyLinearToSRGB(e){return this.r=Y(e.r),this.g=Y(e.g),this.b=Y(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ae){return At.workingToColorSpace(On.copy(this),e),Math.round(tt(On.r*255,0,255))*65536+Math.round(tt(On.g*255,0,255))*256+Math.round(tt(On.b*255,0,255))}getHexString(e=Ae){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(On.copy(this),t);let n=On.r,r=On.g,i=On.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Ae){At.workingToColorSpace(On.copy(this),e);let t=On.r,n=On.g,r=On.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Tn);let n=rt(wn.h,Tn.h,t),r=rt(wn.s,Tn.s,t),i=rt(wn.l,Tn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new Dn;Dn.NAMES=Cn;var kn=class extends yn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},An=new J,jn=new J,Mn=new J,Nn=new J,Pn=new J,Fn=new J,In=new J,Ln=new J,Rn=new J,zn=new J,Bn=new Bt,Vn=new Bt,Hn=new Bt,Un=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),An.subVectors(e,t),r.cross(An);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){An.subVectors(r,t),jn.subVectors(n,t),Mn.subVectors(e,t);let a=An.dot(An),o=An.dot(jn),s=An.dot(Mn),c=jn.dot(jn),l=jn.dot(Mn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Nn)!==null&&Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Nn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Nn.x),s.addScaledVector(a,Nn.y),s.addScaledVector(o,Nn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Bn.setScalar(0),Vn.setScalar(0),Hn.setScalar(0),Bn.fromBufferAttribute(e,t),Vn.fromBufferAttribute(e,n),Hn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Bn,i.x),a.addScaledVector(Vn,i.y),a.addScaledVector(Hn,i.z),a}static isFrontFacing(e,t,n,r){return An.subVectors(n,t),jn.subVectors(e,t),An.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),An.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Pn.subVectors(r,n),Fn.subVectors(i,n),Ln.subVectors(e,n);let s=Pn.dot(Ln),c=Fn.dot(Ln);if(s<=0&&c<=0)return t.copy(n);Rn.subVectors(e,r);let l=Pn.dot(Rn),u=Fn.dot(Rn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Pn,a);zn.subVectors(e,i);let f=Pn.dot(zn),p=Fn.dot(zn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Fn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return In.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(In,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Pn,a).addScaledVector(Fn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wn=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Kn):Kn.fromBufferAttribute(r,t),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),qn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),qn.copy(e.boundingBox)),qn.applyMatrix4(e.matrixWorld),this.union(qn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),tr.subVectors(this.max,er),Jn.subVectors(e.a,er),Yn.subVectors(e.b,er),Xn.subVectors(e.c,er),Zn.subVectors(Yn,Jn),Qn.subVectors(Xn,Yn),$n.subVectors(Jn,Xn);let t=[0,-Zn.z,Zn.y,0,-Qn.z,Qn.y,0,-$n.z,$n.y,Zn.z,0,-Zn.x,Qn.z,0,-Qn.x,$n.z,0,-$n.x,-Zn.y,Zn.x,0,-Qn.y,Qn.x,0,-$n.y,$n.x,0];return!ir(t,Jn,Yn,Xn,tr)||(t=[1,0,0,0,1,0,0,0,1],!ir(t,Jn,Yn,Xn,tr))?!1:(nr.crossVectors(Zn,Qn),t=[nr.x,nr.y,nr.z],ir(t,Jn,Yn,Xn,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gn=[new J,new J,new J,new J,new J,new J,new J,new J],Kn=new J,qn=new Wn,Jn=new J,Yn=new J,Xn=new J,Zn=new J,Qn=new J,$n=new J,er=new J,tr=new J,nr=new J,rr=new J;function ir(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){rr.fromArray(e,a);let o=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),s=t.dot(rr),c=n.dot(rr),l=r.dot(rr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ar=new J,or=new xt,sr=0,cr=class extends Ye{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Fe,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix4(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyNormalMatrix(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.transformDirection(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vt(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vt(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vt(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},lr=class extends cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ur=class extends cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},dr=class extends cr{constructor(e,t,n){super(new Float32Array(e),t,n)}},fr=new Wn,pr=new J,mr=new J,hr=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?fr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(pr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(mr)),this.expandByPoint(pr.copy(e.center).sub(mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gr=0,_r=new Gt,vr=new yn,yr=new J,br=new Wn,xr=new Wn,Sr=new J,Cr=class e extends Ye{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gr++}),this.uuid=et(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Le(e)?ur:lr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Tt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _r.makeRotationFromQuaternion(e),this.applyMatrix4(_r),this}rotateX(e){return _r.makeRotationX(e),this.applyMatrix4(_r),this}rotateY(e){return _r.makeRotationY(e),this.applyMatrix4(_r),this}rotateZ(e){return _r.makeRotationZ(e),this.applyMatrix4(_r),this}translate(e,t,n){return _r.makeTranslation(e,t,n),this.applyMatrix4(_r),this}scale(e,t,n){return _r.makeScale(e,t,n),this.applyMatrix4(_r),this}lookAt(e){return vr.lookAt(e),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new dr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&We(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Ge(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];br.setFromBufferAttribute(n),this.morphTargetsRelative?(Sr.addVectors(this.boundingBox.min,br.min),this.boundingBox.expandByPoint(Sr),Sr.addVectors(this.boundingBox.max,br.max),this.boundingBox.expandByPoint(Sr)):(this.boundingBox.expandByPoint(br.min),this.boundingBox.expandByPoint(br.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Ge(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new J,1/0);else if(e){let n=this.boundingSphere.center;if(br.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];xr.setFromBufferAttribute(n),this.morphTargetsRelative?(Sr.addVectors(br.min,xr.min),br.expandByPoint(Sr),Sr.addVectors(br.max,xr.max),br.expandByPoint(Sr)):(br.expandByPoint(xr.min),br.expandByPoint(xr.max))}br.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Sr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Sr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Sr.fromBufferAttribute(a,t),o&&(yr.fromBufferAttribute(e,t),Sr.add(yr)),r=Math.max(r,n.distanceToSquared(Sr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ge(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new cr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new J,s[e]=new J;let c=new J,l=new J,u=new J,d=new xt,f=new xt,p=new xt,m=new J,h=new J;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new J,y=new J,b=new J,x=new J;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new cr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sr.fromBufferAttribute(e,t),Sr.normalize(),e.setXYZ(t,Sr.x,Sr.y,Sr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new cr(a,r,i)}if(this.index===null)return We(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},wr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Fe,this.updateRanges=[],this.version=0,this.uuid=et()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=et()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=et()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Tr=new J,Er=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix4(e),this.setXYZ(t,Tr.x,Tr.y,Tr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyNormalMatrix(e),this.setXYZ(t,Tr.x,Tr.y,Tr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.transformDirection(e),this.setXYZ(t,Tr.x,Tr.y,Tr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){He(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new cr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){He(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dr=new J,Or=new J,kr=new Tt,Ar=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Dr.subVectors(n,t).cross(Or.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Dr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kr.getNormalMatrix(e),r=this.coplanarPoint(Dr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},jr=0,Mr=class extends Ye{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=et(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pe,this.stencilZFail=Pe,this.stencilZPass=Pe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?We(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Dn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ar().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new xt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Nr=class extends Mr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new Dn(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pr,Fr=new J,Ir=new J,Lr=new J,Rr=new xt,zr=new xt,Br=new Gt,Vr=new J,Hr=new J,Ur=new J,Wr=new xt,Gr=new xt,Kr=new xt,qr=class extends yn{constructor(e=new Nr){if(super(),this.isSprite=!0,this.type=`Sprite`,Pr===void 0){Pr=new Cr;let e=new wr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Pr.setIndex([0,1,2,0,2,3]),Pr.setAttribute(`position`,new Er(e,3,0,!1)),Pr.setAttribute(`uv`,new Er(e,2,3,!1))}this.geometry=Pr,this.material=e,this.center=new xt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ge(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Ir.setFromMatrixScale(this.matrixWorld),Br.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ir.multiplyScalar(-Lr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Jr(Vr.set(-.5,-.5,0),Lr,a,Ir,r,i),Jr(Hr.set(.5,-.5,0),Lr,a,Ir,r,i),Jr(Ur.set(.5,.5,0),Lr,a,Ir,r,i),Wr.set(0,0),Gr.set(1,0),Kr.set(1,1);let o=e.ray.intersectTriangle(Vr,Hr,Ur,!1,Fr);if(o===null&&(Jr(Hr.set(-.5,.5,0),Lr,a,Ir,r,i),Gr.set(0,1),o=e.ray.intersectTriangle(Vr,Ur,Hr,!1,Fr),o===null))return;let s=e.ray.origin.distanceTo(Fr);s<e.near||s>e.far||t.push({distance:s,point:Fr.clone(),uv:Un.getInterpolation(Fr,Vr,Hr,Ur,Wr,Gr,Kr,new xt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jr(e,t,n,r,i,a){Rr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?zr.copy(Rr):(zr.x=a*Rr.x-i*Rr.y,zr.y=i*Rr.x+a*Rr.y),e.copy(t),e.x+=zr.x,e.y+=zr.y,e.applyMatrix4(Br)}var Yr=new J,Xr=new J,Zr=new J,Qr=new J,$r=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yr.copy(this.origin).addScaledVector(this.direction,t),Yr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xr.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Xr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=Qr.dot(this.direction),s=-Qr.dot(Zr),c=Qr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Xr).addScaledVector(Zr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Yr.subVectors(e.center,this.origin);let n=Yr.dot(this.direction),r=Yr.dot(Yr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,R=E-F*D,ee=O-P*A,te=k-F*A,z=j-P*N,ne=M-F*N,re=z*te-ne*ee,B=L*ne-R*z,V=ee*R-te*L;if(r){if(re<0||B<0||V<0)return null}else if((re<0||B<0||V<0)&&(re>0||B>0||V>0))return null;let ie=re+B+V;if(ie===0)return null;let ae=I*(re*D+B*A+V*N);return(ie>0?ae<0:ae>0)?null:this.at(ae/ie,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ei=class extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Dn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ti=new Gt,ni=new $r,ri=new hr,ii=new J,ai=new J,oi=new J,si=new J,ci=new J,li=new J,ui=new J,di=new J,fi=class extends yn{constructor(e=new Cr,t=new ei){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){li.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ci.fromBufferAttribute(s,e),a?li.addScaledVector(ci,r):li.addScaledVector(ci.sub(t),r))}t.add(li)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ri.copy(n.boundingSphere),ri.applyMatrix4(i),ni.copy(e.ray).recast(e.near),ri.containsPoint(ni.origin)===!1&&(ni.intersectSphere(ri,ii)===null||ni.origin.distanceToSquared(ii)>(e.far-e.near)**2)||(ti.copy(i).invert(),ni.copy(e.ray).applyMatrix4(ti),(n.boundingBox===null||ni.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=mi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=mi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=mi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=mi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function pi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;di.copy(s),di.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(di);return l<n.near||l>n.far?null:{distance:l,point:di.clone(),object:e}}function mi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ai),e.getVertexPosition(c,oi),e.getVertexPosition(l,si);let u=pi(e,t,n,r,ai,oi,si,ui);if(u){let e=new J;Un.getBarycoord(ui,ai,oi,si,e),i&&(u.uv=Un.getInterpolatedAttribute(i,s,c,l,e,new xt)),a&&(u.uv1=Un.getInterpolatedAttribute(a,s,c,l,e,new xt)),o&&(u.normal=Un.getInterpolatedAttribute(o,s,c,l,e,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new J,materialIndex:0};Un.getNormal(ai,oi,si,t.normal),u.face=t,u.barycoord=e}return u}var hi=class extends zt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gi=class extends cr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_i=new Gt,vi=new Gt,yi=[],bi=new Wn,xi=new Gt,Si=new fi,Ci=new hr,wi=class extends fi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,xi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),bi.copy(e.boundingBox).applyMatrix4(_i),this.boundingBox.union(bi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),Ci.copy(e.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Ci)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Si.geometry=this.geometry,Si.material=this.material,Si.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ci.copy(this.boundingSphere),Ci.applyMatrix4(n),e.ray.intersectsSphere(Ci)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,_i),vi.multiplyMatrices(n,_i),Si.matrixWorld=vi,Si.raycast(e,yi);for(let e=0,n=yi.length;e<n;e++){let n=yi[e];n.instanceId=i,n.object=this,t.push(n)}yi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new hi(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ti=new hr,Ei=new xt(.5,.5),Di=new J,Oi=class{constructor(e=new Ar,t=new Ar,n=new Ar,r=new Ar,i=new Ar,a=new Ar){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ie,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476+Ei.distanceTo(e.center),Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Di.x=r.normal.x>0?e.max.x:e.min.x,Di.y=r.normal.y>0?e.max.y:e.min.y,Di.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Di)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ki=class extends zt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ai=class extends zt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ji=class extends zt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ft(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Mi=class extends ji{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ni=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pi=class e extends Cr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new dr(c,3)),this.setAttribute(`normal`,new dr(l,3)),this.setAttribute(`uv`,new dr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new J;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Fi=class e extends Cr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new dr(u,3)),this.setAttribute(`normal`,new dr(d,3)),this.setAttribute(`uv`,new dr(f,2));function _(){let a=new J,_=new J,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new xt,m=new J,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ii=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new xt:new J);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new J,r=[],i=[],a=[],o=new J,s=new Gt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new J)}i[0]=new J,a[0]=new J;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(tt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(tt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Li(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ri=new J,zi=new J,Bi=new Li,Vi=new Li,Hi=new Li,Ui=class extends Ii{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new J){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(zi.subVectors(r[0],r[1]).add(r[0]),c=zi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ri.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ri),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Bi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Vi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Hi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Bi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Vi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Hi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Bi.calc(s),Vi.calc(s),Hi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new J().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},Wi=class e extends Cr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new dr(p,3)),this.setAttribute(`normal`,new dr(m,3)),this.setAttribute(`uv`,new dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Gi=class e extends Cr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new J,p=new xt;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new dr(s,3)),this.setAttribute(`normal`,new dr(c,3)),this.setAttribute(`uv`,new dr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ki=class e extends Cr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new J,d=new J,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new dr(p,3)),this.setAttribute(`normal`,new dr(m,3)),this.setAttribute(`uv`,new dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function qi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Yi(i))i.isRenderTargetTexture?(We(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Yi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ji(e){let t={};for(let n=0;n<e.length;n++){let r=qi(e[n]);for(let e in r)t[e]=r[e]}return t}function Yi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Xi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Zi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:At.workingColorSpace}var Qi={clone:qi,merge:Ji},$i=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ea=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ta=class extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$i,this.fragmentShader=ea,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=Xi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Dn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new xt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Bt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Tt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Gt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},na=class extends ta{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ra=class extends Mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Dn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ia=class extends Mr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},aa=class extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=G,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oa=class extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ca(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var la=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ua=class extends la{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oe,endingEnd:Oe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case W:i=e,o=2*t-n;break;case ke:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case W:a=e,s=2*n-t;break;case ke:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},da=class extends la{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},fa=class extends la{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},pa=class extends la{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ga(n,t,g,y,r);i[p]=ma(x,o,_,b,m)}return i}};function ma(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ha(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ga(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ma(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ha(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var _a=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ca(e.settings)&&(n.settings={inTangents:sa(e.settings.inTangents,Array),outTangents:sa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new pa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case H:t=this.InterpolantFactoryMethodDiscrete;break;case U:t=this.InterpolantFactoryMethodLinear;break;case Ee:t=this.InterpolantFactoryMethodSmooth;break;case De:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return We(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return H;case this.InterpolantFactoryMethodLinear:return U;case this.InterpolantFactoryMethodSmooth:return Ee;case this.InterpolantFactoryMethodBezier:return De}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ca(this.settings)&&(va(this.settings.inTangents,e),va(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Ge(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Ge(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Ge(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Re(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Ge(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ee,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ca(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function va(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}_a.prototype.ValueTypeName=``,_a.prototype.TimeBufferType=Float32Array,_a.prototype.ValueBufferType=Float32Array,_a.prototype.DefaultInterpolation=U;var ya=class extends _a{constructor(e,t,n){super(e,t,n)}};ya.prototype.ValueTypeName=`bool`,ya.prototype.ValueBufferType=Array,ya.prototype.DefaultInterpolation=H,ya.prototype.InterpolantFactoryMethodLinear=void 0,ya.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}};ba.prototype.ValueTypeName=`color`;var xa=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}};xa.prototype.ValueTypeName=`number`;var Sa=class extends la{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)St.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ca=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}};Ca.prototype.ValueTypeName=`quaternion`,Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends _a{constructor(e,t,n){super(e,t,n)}};wa.prototype.ValueTypeName=`string`,wa.prototype.ValueBufferType=Array,wa.prototype.DefaultInterpolation=H,wa.prototype.InterpolantFactoryMethodLinear=void 0,wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}};Ta.prototype.ValueTypeName=`vector`;var Ea=class extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Dn(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Da=class extends Ea{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dn(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Oa=new Gt,ka=new J,Aa=new J,ja=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(ka),Aa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Aa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Oa,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ma=new J,Na=new St,Pa=new J,Fa=class extends yn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Ie,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ma,Na,Pa),Pa.x===1&&Pa.y===1&&Pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Na,Pa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ma,Na,Pa),Pa.x===1&&Pa.y===1&&Pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Na,Pa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ia=new J,La=new xt,Ra=new xt,za=class extends Fa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$e*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qe*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $e*2*Math.atan(Math.tan(Qe*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z)}getViewSize(e,t){return this.getViewBounds(e,La,Ra),t.subVectors(Ra,La)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qe*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ba=class extends ja{constructor(){super(new za(90,1,.5,500)),this.isPointLightShadow=!0}},Va=class extends Ea{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Ba}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ha=class extends Fa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ua=class extends ja{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wa=class extends Ea{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Ua}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ga=-90,Ka=1,qa=class extends yn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new za(Ga,Ka,e,t);r.layers=this.layers,this.add(r);let i=new za(Ga,Ka,e,t);i.layers=this.layers,this.add(i);let a=new za(Ga,Ka,e,t);a.layers=this.layers,this.add(a);let o=new za(Ga,Ka,e,t);o.layers=this.layers,this.add(o);let s=new za(Ga,Ka,e,t);s.layers=this.layers,this.add(s);let c=new za(Ga,Ka,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ja=class extends za{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ya=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Xa.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Xa(){this._document.hidden===!1&&this.reset()}var Za=`\\[\\]\\.:\\/`,Qa=RegExp(`[\\[\\]\\.:\\/]`,`g`),$a=`[^\\[\\]\\.:\\/]`,eo=`[^`+Za.replace(`\\.`,``)+`]`,to=`((?:WC+[\\/:])*)`.replace(`WC`,$a),no=`(WCOD+)?`.replace(`WCOD`,eo),ro=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,$a),io=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,$a),ao=RegExp(`^`+to+no+ro+io+`$`),oo=[`material`,`materials`,`bones`,`map`],so=class{constructor(e,t,n){let r=n||co.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},co=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Qa,``)}static parseTrackName(e){let t=ao.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);oo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){We(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Ge(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Ge(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Ge(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Ge(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Ge(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Ge(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Ge(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Ge(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Ge(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Ge(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};co.Composite=so,co.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},co.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},co.prototype.GetterByBindingType=[co.prototype._getValue_direct,co.prototype._getValue_array,co.prototype._getValue_arrayElement,co.prototype._getValue_toArray],co.prototype.SetterByBindingTypeAndVersioning=[[co.prototype._setValue_direct,co.prototype._setValue_direct_setNeedsUpdate,co.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[co.prototype._setValue_array,co.prototype._setValue_array_setNeedsUpdate,co.prototype._setValue_array_setMatrixWorldNeedsUpdate],[co.prototype._setValue_arrayElement,co.prototype._setValue_arrayElement_setNeedsUpdate,co.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[co.prototype._setValue_fromArray,co.prototype._setValue_fromArray_setNeedsUpdate,co.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lo=new Gt,uo=class{constructor(e,t,n=0,r=1/0){this.ray=new $r(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new nn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return lo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lo),this}intersectObject(e,t=!0,n=[]){return po(e,this,n,t),n.sort(fo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)po(e[r],this,n,t);return n.sort(fo),n}};function fo(e,t){return e.distance-t.distance}function po(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)po(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function mo(e,t,n,r){let i=ho(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case L:case ee:return Math.max(e,16)*Math.max(t,8)/4;case I:case R:return Math.max(e,8)*Math.max(t,8)/2;case te:case z:case re:case B:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ne:case V:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case se:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ce:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case le:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ue:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case de:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case fe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case pe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ge:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case _e:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ve:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ye:case be:case xe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Se:case Ce:return Math.ceil(e/4)*Math.ceil(t/4)*8;case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ho(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?We(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function go(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function _o(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var vo={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new Dn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Dn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Dn(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},yo={basic:{uniforms:Ji([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:vo.meshbasic_vert,fragmentShader:vo.meshbasic_frag},lambert:{uniforms:Ji([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new Dn(0)},envMapIntensity:{value:1}}]),vertexShader:vo.meshlambert_vert,fragmentShader:vo.meshlambert_frag},phong:{uniforms:Ji([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new Dn(0)},specular:{value:new Dn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vo.meshphong_vert,fragmentShader:vo.meshphong_frag},standard:{uniforms:Ji([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new Dn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vo.meshphysical_vert,fragmentShader:vo.meshphysical_frag},toon:{uniforms:Ji([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new Dn(0)}}]),vertexShader:vo.meshtoon_vert,fragmentShader:vo.meshtoon_frag},matcap:{uniforms:Ji([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:vo.meshmatcap_vert,fragmentShader:vo.meshmatcap_frag},points:{uniforms:Ji([X.points,X.fog]),vertexShader:vo.points_vert,fragmentShader:vo.points_frag},dashed:{uniforms:Ji([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vo.linedashed_vert,fragmentShader:vo.linedashed_frag},depth:{uniforms:Ji([X.common,X.displacementmap]),vertexShader:vo.depth_vert,fragmentShader:vo.depth_frag},normal:{uniforms:Ji([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:vo.meshnormal_vert,fragmentShader:vo.meshnormal_frag},sprite:{uniforms:Ji([X.sprite,X.fog]),vertexShader:vo.sprite_vert,fragmentShader:vo.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vo.background_vert,fragmentShader:vo.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:vo.backgroundCube_vert,fragmentShader:vo.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vo.cube_vert,fragmentShader:vo.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vo.equirect_vert,fragmentShader:vo.equirect_frag},distance:{uniforms:Ji([X.common,X.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vo.distance_vert,fragmentShader:vo.distance_frag},shadow:{uniforms:Ji([X.lights,X.fog,{color:{value:new Dn(0)},opacity:{value:1}}]),vertexShader:vo.shadow_vert,fragmentShader:vo.shadow_frag}};yo.physical={uniforms:Ji([yo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Dn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Dn(0)},specularColor:{value:new Dn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:vo.meshphysical_vert,fragmentShader:vo.meshphysical_frag};var bo={r:0,b:0,g:0},xo=new Gt,So=new Tt;So.set(-1,0,0,0,1,0,0,0,1);function Co(e,t,n,r,i,a){let o=new Dn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new fi(new Pi(1,1,1),new ta({name:`BackgroundCubeMaterial`,uniforms:qi(yo.backgroundCube.uniforms),vertexShader:yo.backgroundCube.vertexShader,fragmentShader:yo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(xo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(So),l.material.toneMapped=At.getTransfer(i.colorSpace)!==Ne,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new fi(new Wi(2,2),new ta({name:`BackgroundMaterial`,uniforms:qi(yo.background.uniforms),vertexShader:yo.background.vertexShader,fragmentShader:yo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=At.getTransfer(i.colorSpace)!==Ne,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(bo,Zi(e)),n.buffers.color.setClear(bo.r,bo.g,bo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function wo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function To(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Eo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(We(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&We(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Do(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ar,s=new Tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Oo=4,ko=6,Ao=20,jo=256,Mo=new Ha,No=new Dn,Po=null,Fo=0,Io=0,Lo=!1,Ro=new J,zo=new J,Bo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ro}=i;Po=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Po,Fo,Io),this._renderer.xr.enabled=Lo,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Po=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:je,depthBuffer:!1},r=Ho(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ho(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vo(r)),this._blurMaterial=Go(r,e,t),this._ggxMaterial=Wo(r,e,t)}return r}_compileMaterial(e){let t=new fi(new Cr,e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,n,r,i){let a=new za(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(No),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fi(new Pi,new ei({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(No),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Uo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ko());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Uo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Mo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Oo?n-d+Oo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Uo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Mo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Uo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Mo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Uo(t,3*l*(r>this._lodMax-Oo?r-this._lodMax+Oo:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Mo)}};function Vo(e){let t=[],n=[],r=e,i=e-Oo+1+ko;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?zo.set(1,r,n):e===1?zo.set(-n,1,-r):e===2?zo.set(-n,r,1):e===3?zo.set(-1,r,-n):e===4?zo.set(-n,-1,r):zo.set(n,r,-1),zo.toArray(l,(e*6+t)*3)}}let u=new Cr;u.setAttribute(`position`,new cr(c,3)),u.setAttribute(`outputDirection`,new cr(l,3)),n.push(new fi(u,null)),r>Oo&&r--}return{lodMeshes:n,sizeLods:t}}function Ho(e,t,n){let r=new Ht(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Uo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Wo(e,t,n){return new ta({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:jo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Go(e,t,n){return new ta({name:`SphericalGaussianBlur`,defines:{SAMPLES:Ao,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ko(){return new ta({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function qo(){return new ta({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Yo=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ki(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pi(5,5,5),i=new ta({name:`CubemapFromEquirect`,uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new fi(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new qa(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Xo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Yo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Bo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Bo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Zo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ke(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Qo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?ur:lr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function $o(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function es(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Ge(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ts(e,t,n){let r=new WeakMap,i=new Bt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Ut(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new xt(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ns(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var rs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function is(e,t,n,r,i,a){let o=new Ht(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Cr;l.setAttribute(`position`,new dr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new dr([0,2,0,0,2,0],2));let u=new na({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new fi(l,u),f=new Ha(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Ht(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Ht(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},At.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=rs[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var as=new zt,os=new ji(1,1),ss=new Ut,cs=new Wt,ls=new ki,us=[],ds=[],fs=new Float32Array(16),ps=new Float32Array(9),ms=new Float32Array(4);function hs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=us[i];if(a===void 0&&(a=new Float32Array(i),us[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function gs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function _s(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function vs(e,t){let n=ds[t];n===void 0&&(n=new Int32Array(t),ds[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ys(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gs(n,t))return;e.uniform2fv(this.addr,t),_s(n,t)}}function xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(gs(n,t))return;e.uniform3fv(this.addr,t),_s(n,t)}}function Ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gs(n,t))return;e.uniform4fv(this.addr,t),_s(n,t)}}function Cs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(gs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),_s(n,t)}else{if(gs(n,r))return;ms.set(r),e.uniformMatrix2fv(this.addr,!1,ms),_s(n,r)}}function ws(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(gs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),_s(n,t)}else{if(gs(n,r))return;ps.set(r),e.uniformMatrix3fv(this.addr,!1,ps),_s(n,r)}}function Ts(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(gs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),_s(n,t)}else{if(gs(n,r))return;fs.set(r),e.uniformMatrix4fv(this.addr,!1,fs),_s(n,r)}}function Es(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gs(n,t))return;e.uniform2iv(this.addr,t),_s(n,t)}}function Os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gs(n,t))return;e.uniform3iv(this.addr,t),_s(n,t)}}function ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gs(n,t))return;e.uniform4iv(this.addr,t),_s(n,t)}}function As(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gs(n,t))return;e.uniform2uiv(this.addr,t),_s(n,t)}}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gs(n,t))return;e.uniform3uiv(this.addr,t),_s(n,t)}}function Ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gs(n,t))return;e.uniform4uiv(this.addr,t),_s(n,t)}}function Ps(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(os.compareFunction=n.isReversedDepthBuffer()?518:515,a=os):a=as,n.setTexture2D(t||a,i)}function Fs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||cs,i)}function Is(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ls,i)}function Ls(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ss,i)}function Rs(e){switch(e){case 5126:return ys;case 35664:return bs;case 35665:return xs;case 35666:return Ss;case 35674:return Cs;case 35675:return ws;case 35676:return Ts;case 5124:case 35670:return Es;case 35667:case 35671:return Ds;case 35668:case 35672:return Os;case 35669:case 35673:return ks;case 5125:return As;case 36294:return js;case 36295:return Ms;case 36296:return Ns;case 35678:case 36198:case 36298:case 36306:case 35682:return Ps;case 35679:case 36299:case 36307:return Fs;case 35680:case 36300:case 36308:case 36293:return Is;case 36289:case 36303:case 36311:case 36292:return Ls}}function zs(e,t){e.uniform1fv(this.addr,t)}function Bs(e,t){let n=hs(t,this.size,2);e.uniform2fv(this.addr,n)}function Vs(e,t){let n=hs(t,this.size,3);e.uniform3fv(this.addr,n)}function Hs(e,t){let n=hs(t,this.size,4);e.uniform4fv(this.addr,n)}function Us(e,t){let n=hs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ws(e,t){let n=hs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Gs(e,t){let n=hs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ks(e,t){e.uniform1iv(this.addr,t)}function qs(e,t){e.uniform2iv(this.addr,t)}function Js(e,t){e.uniform3iv(this.addr,t)}function Ys(e,t){e.uniform4iv(this.addr,t)}function Xs(e,t){e.uniform1uiv(this.addr,t)}function Zs(e,t){e.uniform2uiv(this.addr,t)}function Qs(e,t){e.uniform3uiv(this.addr,t)}function $s(e,t){e.uniform4uiv(this.addr,t)}function ec(e,t,n){let r=this.cache,i=t.length,a=vs(n,i);gs(r,a)||(e.uniform1iv(this.addr,a),_s(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?os:as;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function tc(e,t,n){let r=this.cache,i=t.length,a=vs(n,i);gs(r,a)||(e.uniform1iv(this.addr,a),_s(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||cs,a[e])}function nc(e,t,n){let r=this.cache,i=t.length,a=vs(n,i);gs(r,a)||(e.uniform1iv(this.addr,a),_s(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ls,a[e])}function rc(e,t,n){let r=this.cache,i=t.length,a=vs(n,i);gs(r,a)||(e.uniform1iv(this.addr,a),_s(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ss,a[e])}function ic(e){switch(e){case 5126:return zs;case 35664:return Bs;case 35665:return Vs;case 35666:return Hs;case 35674:return Us;case 35675:return Ws;case 35676:return Gs;case 5124:case 35670:return Ks;case 35667:case 35671:return qs;case 35668:case 35672:return Js;case 35669:case 35673:return Ys;case 5125:return Xs;case 36294:return Zs;case 36295:return Qs;case 36296:return $s;case 35678:case 36198:case 36298:case 36306:case 35682:return ec;case 35679:case 36299:case 36307:return tc;case 35680:case 36300:case 36308:case 36293:return nc;case 36289:case 36303:case 36311:case 36292:return rc}}var ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rs(t.type)}},oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ic(t.type)}},sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},cc=/(\w+)(\])?(\[|\.)?/g;function lc(e,t){e.seq.push(t),e.map[t.id]=t}function uc(e,t,n){let r=e.name,i=r.length;for(cc.lastIndex=0;;){let a=cc.exec(r),o=cc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){lc(n,l===void 0?new ac(s,e,t):new oc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new sc(s),lc(n,e)),n=e}}}var dc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);uc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function fc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var pc=37297,mc=0;function hc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var gc=new Tt;function _c(e){At._getMatrix(gc,At.workingColorSpace,e);let t=`mat3( ${gc.elements.map(e=>e.toFixed(4))} )`;switch(At.getTransfer(e)){case Me:return[t,`LinearTransferOETF`];case Ne:return[t,`sRGBTransferOETF`];default:return We(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function vc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+hc(e.getShaderSource(t),r)}return i}function yc(e,t){let n=_c(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var bc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function xc(e,t){let n=bc[t];return n===void 0?(We(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Sc=new J;function Cc(){return At.getLuminanceCoefficients(Sc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Sc.x.toFixed(4)}, ${Sc.y.toFixed(4)}, ${Sc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function wc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Dc).join(`
`)}function Tc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ec(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Dc(e){return e!==``}function Oc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ac=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(e){return e.replace(Ac,Nc)}var Mc=new Map;function Nc(e,t){let n=vo[t];if(n===void 0){let e=Mc.get(t);if(e!==void 0)n=vo[e],We(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return jc(n)}var Pc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(e){return e.replace(Pc,Ic)}function Ic(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Lc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Rc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function zc(e){return Rc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Bc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Vc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Bc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Hc={302:`ENVMAP_MODE_REFRACTION`};function Uc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Hc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Wc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Gc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Wc[e.combine]||`ENVMAP_BLENDING_NONE`}function Kc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function qc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=zc(n),l=Vc(n),u=Uc(n),d=Gc(n),f=Kc(n),p=wc(n),m=Tc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Dc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Dc).join(`
`),_.length>0&&(_+=`
`)):(g=[Lc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Dc).join(`
`),_=[Lc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:vo.tonemapping_pars_fragment,n.toneMapping===0?``:xc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,vo.colorspace_pars_fragment,yc(`linearToOutputTexel`,n.outputColorSpace),Cc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Dc).join(`
`)),o=jc(o),o=Oc(o,n),o=kc(o,n),s=jc(s),s=Oc(s,n),s=kc(s,n),o=Fc(o),s=Fc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=fc(i,i.VERTEX_SHADER,y),S=fc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=vc(i,x,`vertex`),n=vc(i,S,`fragment`);Ge(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):We(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new dc(i,h),T=Ec(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,pc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Jc=0,Yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xc(e),t.set(e,n)),n}},Xc=class{constructor(e){this.id=Jc++,this.code=e,this.usedTimes=0}};function Zc(e){return e===1030||e===37490||e===36285}function Qc(e,t,n,r,i,a){let o=new nn,s=new Yc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&We(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=yo[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,L=!!x,R=!!i.aoMap,ee=!!i.lightMap,te=!!i.bumpMap&&i.wireframe===!1,z=!!i.normalMap,ne=!!i.displacementMap,re=!!i.emissiveMap,B=!!i.metalnessMap,V=!!i.roughnessMap,ie=i.anisotropy>0,ae=i.clearcoat>0,oe=i.dispersion>0,se=i.retroreflectivity>0,ce=i.iridescence>0,le=i.sheen>0,ue=i.transmission>0,de=ie&&!!i.anisotropyMap,fe=ae&&!!i.clearcoatMap,pe=ae&&!!i.clearcoatNormalMap,me=ae&&!!i.clearcoatRoughnessMap,he=ce&&!!i.iridescenceMap,ge=ce&&!!i.iridescenceThicknessMap,_e=le&&!!i.sheenColorMap,ve=le&&!!i.sheenRoughnessMap,ye=!!i.specularMap,be=!!i.specularColorMap,xe=!!i.specularIntensityMap,Se=ue&&!!i.transmissionMap,Ce=ue&&!!i.thicknessMap,we=!!i.gradientMap,Te=!!i.alphaMap,H=i.alphaTest>0,U=!!i.alphaHash,Ee=!!i.extensions,De=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(De=e.toneMapping);let Oe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:R,lightMap:ee,bumpMap:te,normalMap:z,displacementMap:ne,emissiveMap:re,normalMapObjectSpace:z&&i.normalMapType===1,normalMapTangentSpace:z&&i.normalMapType===0,packedNormalMap:z&&i.normalMapType===0&&Zc(i.normalMap.format),metalnessMap:B,roughnessMap:V,anisotropy:ie,anisotropyMap:de,clearcoat:ae,clearcoatMap:fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:me,dispersion:oe,retroreflection:se,iridescence:ce,iridescenceMap:he,iridescenceThicknessMap:ge,sheen:le,sheenColorMap:_e,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:be,specularIntensityMap:xe,transmission:ue,transmissionMap:Se,thicknessMap:Ce,gradientMap:we,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Te,alphaTest:H,alphaHash:U,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:R&&m(i.aoMap.channel),lightMapUv:ee&&m(i.lightMap.channel),bumpMapUv:te&&m(i.bumpMap.channel),normalMapUv:z&&m(i.normalMap.channel),displacementMapUv:ne&&m(i.displacementMap.channel),emissiveMapUv:re&&m(i.emissiveMap.channel),metalnessMapUv:B&&m(i.metalnessMap.channel),roughnessMapUv:V&&m(i.roughnessMap.channel),anisotropyMapUv:de&&m(i.anisotropyMap.channel),clearcoatMapUv:fe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(i.sheenRoughnessMap.channel),specularMapUv:ye&&m(i.specularMap.channel),specularColorMapUv:be&&m(i.specularColorMap.channel),specularIntensityMapUv:xe&&m(i.specularIntensityMap.channel),transmissionMapUv:Se&&m(i.transmissionMap.channel),thicknessMapUv:Ce&&m(i.thicknessMap.channel),alphaMapUv:Te&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(z||ie),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||Te),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&z===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:De,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&At.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:re&&i.emissiveMap.isVideoTexture===!0&&At.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ee&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ee&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=yo[t];n=Qi.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new qc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function $c(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function el(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function tl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function nl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||el),r.length>1&&r.sort(t||tl),i.length>1&&i.sort(t||tl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function rl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new nl,e.set(t,[i])):n>=r.length?(i=new nl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function il(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new J,color:new Dn};break;case`SpotLight`:n={position:new J,direction:new J,color:new Dn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new Dn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new Dn,groundColor:new Dn};break;case`RectAreaLight`:n={color:new Dn,position:new J,halfWidth:new J,halfHeight:new J}}return e[t.id]=n,n}}}function al(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ol=0;function sl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function cl(e){let t=new il,n=al(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new J);let i=new J,a=new Gt,o=new Gt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(sl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=ol++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ll(e){let t=new cl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ul(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ll(e),t.set(n,[a])):r>=i.length?(a=new ll(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var dl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pl=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],ml=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],hl=new Gt,gl=new J,_l=new J;function vl(e,t,n){let i=new Oi,a=new xt,s=new xt,c=new Bt,l=new aa,u=new oa,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:dl,fragmentShader:fl}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Cr;y.setAttribute(`position`,new cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new fi(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(We(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){We(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){We(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Ht(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ji(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Yo(a.x),p.map.depthTexture=new Mi(a.x,m)):(p.map=new Ht(a.x,a.y),p.map.depthTexture=new ji(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),gl.setFromMatrixPosition(d.matrixWorld),e.position.copy(gl),_l.copy(e.position),_l.add(pl[t]),e.up.copy(ml[t]),e.lookAt(_l),e.updateMatrixWorld(),n.makeTranslation(-gl.x,-gl.y,-gl.z),hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(hl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ht(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function yl(e,t){function n(){let t=!1,n=new Bt,r=null,i=new Bt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?B(e.DEPTH_TEST):V(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Je[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?B(e.STENCIL_TEST):V(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Dn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},R=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),te=new Bt().fromArray(R),z=new Bt().fromArray(ee);function ne(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let re={};re[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),re[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),re[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),B(e.DEPTH_TEST),o.setFunc(3),de(!1),fe(1),B(e.CULL_FACE),le(0);function B(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function V(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ie(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ae(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function oe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let se={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};se[103]=e.MIN,se[104]=e.MAX;let ce={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function le(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(V(e.BLEND),g=!1);else if(g===!1&&(B(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ge(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Ge(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Ge(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Ge(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(se[n],se[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ce[r],ce[i],ce[o],ce[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ue(t,n){t.side===2?V(e.CULL_FACE):B(e.CULL_FACE);let r=t.side===1;n&&(r=!r),de(r),t.blending===1&&t.transparent===!1?le(0):le(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),me(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?B(e.SAMPLE_ALPHA_TO_COVERAGE):V(e.SAMPLE_ALPHA_TO_COVERAGE)}function de(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function fe(t){t===0?V(e.CULL_FACE):(B(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function pe(t){t!==k&&(N&&e.lineWidth(t),k=t)}function me(t,n,r){t?(B(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):V(e.POLYGON_OFFSET_FILL)}function he(t){t?B(e.SCISSOR_TEST):V(e.SCISSOR_TEST)}function ge(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function _e(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||re[t]),i.type=t,i.texture=n)}function ve(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ye(){try{e.compressedTexImage2D(...arguments)}catch(e){Ge(`WebGLState:`,e)}}function be(){try{e.compressedTexImage3D(...arguments)}catch(e){Ge(`WebGLState:`,e)}}function xe(){try{e.texSubImage2D(...arguments)}catch(e){Ge(`WebGLState:`,e)}}function Se(){try{e.texSubImage3D(...arguments)}catch(e){Ge(`WebGLState:`,e)}}function Ce(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Ge(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Ge(`WebGLState:`,e)}}function Te(){try{e.texStorage2D(...arguments)}catch(e){Ge(`WebGLState:`,e)}}function H(){try{e.texStorage3D(...arguments)}catch(e){Ge(`WebGLState:`,e)}}function U(){try{e.texImage2D(...arguments)}catch(e){Ge(`WebGLState:`,e)}}function Ee(){try{e.texImage3D(...arguments)}catch(e){Ge(`WebGLState:`,e)}}function De(t){return d[t]===void 0?e.getParameter(t):d[t]}function Oe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function W(t){te.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),te.copy(t))}function ke(t){z.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),z.copy(t))}function G(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ae(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Dn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,te.set(0,0,e.canvas.width,e.canvas.height),z.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:B,disable:V,bindFramebuffer:ie,drawBuffers:ae,useProgram:oe,setBlending:le,setMaterial:ue,setFlipSided:de,setCullFace:fe,setLineWidth:pe,setPolygonOffset:me,setScissorTest:he,activeTexture:ge,bindTexture:_e,unbindTexture:ve,compressedTexImage2D:ye,compressedTexImage3D:be,texImage2D:U,texImage3D:Ee,pixelStorei:Oe,getParameter:De,updateUBOMapping:G,uniformBlockBinding:Ae,texStorage2D:Te,texStorage3D:H,texSubImage2D:xe,texSubImage3D:Se,compressedTexSubImage2D:Ce,compressedTexSubImage3D:we,scissor:W,viewport:ke,reset:je}}function bl(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new xt,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):ze(`canvas`)}function T(e,t,n){let r=1,i=De(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),We(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&We(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];We(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||We(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Me:At.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function j(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,We(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function M(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),F(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function P(e){let t=e.target;t.removeEventListener(`dispose`,P),L(t)}function F(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&I(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function I(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function L(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let R=0;function ee(){R=0}function te(){return R}function z(e){R=e}function ne(){let e=R;return e>=p.maxTextures&&We(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),R+=1,e}function re(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function B(e,t){let n=f.get(e);if(e.isVideoTexture&&U(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)We(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)We(`WebGLRenderer: Texture marked for update but image is incomplete`);else{pe(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function V(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?pe(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function ie(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?pe(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ae(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?me(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let oe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},se={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ce={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function le(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&We(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,oe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,oe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,oe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,se[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,se[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ce[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ue(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,N));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=re(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&I(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function de(e,t,n){return Math.floor(Math.floor(e/n)/t)}function fe(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=de(r.start,t.width,4),c=de(n.start,t.width,4);r.start<=o+1&&s===c&&de(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function pe(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ue(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=At.getPrimaries(At.workingColorSpace),n=t.colorSpace===``?null:At.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Ee(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);le(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=M(t,e);if(t.isDepthTexture)u=j(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&fe(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=mo(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else We(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?We(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=mo(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=De(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=De(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function me(e,t,n){if(t.image.length!==6)return;let r=ue(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=At.getPrimaries(At.workingColorSpace),o=t.colorSpace===``?null:At.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ee(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=M(t,h);le(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?We(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=De(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function he(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),H(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Te(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function ge(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=j(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;H(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Te(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Te(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);H(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Te(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Te(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function _e(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,i.__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,N)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),le(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else B(t.depthTexture,0);let a=i.__webglTexture,o=Te(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)H(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)H(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ve(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)_e(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?_e(t.__webglFramebuffer[0],e,0):_e(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),ge(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),ge(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function ye(e,t,n){let r=f.get(e);t!==void 0&&he(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&ve(e)}function be(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,P);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&H(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Te(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),ge(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),le(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)he(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else he(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),le(o,r),he(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),le(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)he(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else he(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&ve(e)}function xe(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let Se=[],Ce=[];function we(e){if(e.samples>0){if(H(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Se.length=0,Ce.length=0,Se.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(Se.push(a),Ce.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Ce)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Se))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Te(e){return Math.min(p.maxSamples,e.samples)}function H(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function U(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ee(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(At.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&We(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Ge(`WebGLTextures: Unsupported texture color space:`,n)),t}function De(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ne,this.resetTextureUnits=ee,this.getTextureUnits=te,this.setTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=ye,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=H,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function xl(e,t){function n(n,r=``){let i,a=At.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Sl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ni(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ta({vertexShader:Sl,fragmentShader:Cl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fi(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tl=class extends Ye{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new wl,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new xt,k=null,A=null,j=new za;j.viewport=new Bt;let M=new za;M.viewport=new Bt;let N=[j,M],P=new Ja,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Sn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Sn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Sn,C[e]=t),t.getHandSpace()};function L(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function R(){r.removeEventListener(`select`,L),r.removeEventListener(`selectstart`,L),r.removeEventListener(`selectend`,L),r.removeEventListener(`squeeze`,L),r.removeEventListener(`squeezestart`,L),r.removeEventListener(`squeezeend`,L),r.removeEventListener(`end`,R),r.removeEventListener(`inputsourceschange`,ee);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}F=null,I=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&We(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&We(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,L),r.addEventListener(`selectstart`,L),r.addEventListener(`selectend`,L),r.addEventListener(`squeeze`,L),r.addEventListener(`squeezestart`,L),r.addEventListener(`squeezeend`,L),r.addEventListener(`end`,R),r.addEventListener(`inputsourceschange`,ee),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ht(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new ji(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ht(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let te=new J,z=new J;function ne(e,t,n){te.setFromMatrixPosition(t.matrixWorld),z.setFromMatrixPosition(n.matrixWorld);let r=te.distanceTo(z),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(F!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;re(P,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?ne(P,j,M):P.projectionMatrix.copy(j.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),B(e,P,i)};function B(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=$e*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let V=null;function ie(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new za,o.layers.enable(n),o.viewport=new Bt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ni,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}V&&V(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let ae=new go;ae.setAnimationLoop(ie),this.setAnimationLoop=function(e){V=e},this.dispose=function(){}}},El=new Gt,Dl=new Tt;Dl.set(-1,0,0,0,1,0,0,0,1);function Ol(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Zi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(El.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Dl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function kl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Ge(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?We(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):We(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Al=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),jl=null;function Ml(){return jl===null&&(jl=new hi(Al,16,16,k,g),jl.name=`DFG_LUT`,jl.minFilter=o,jl.magFilter=o,jl.wrapS=t,jl.wrapT=t,jl.generateMipmaps=!1,jl.needsUpdate=!0),jl}var Nl=class{constructor(e={}){let{canvas:t=Be(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([j,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new J,k=null,M=null,N=[],P=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,R=null,ee=null,te=null,z=null;this._outputColorSpace=Ae;let ne=0,re=0,B=null,V=-1,ie=null,ae=new Bt,oe=new Bt,se=null,ce=new Dn(0),le=0,ue=t.width,de=t.height,fe=1,pe=null,me=null,he=new Bt(0,0,ue,de),ge=new Bt(0,0,ue,de),_e=!1,ve=new Oi,ye=!1,be=!1,xe=new Gt,Se=new J,Ce=new Bt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function H(){return B===null?fe:1}let U=n;function Ee(e,n){return t.getContext(e,n)}let De,Oe,W,ke,G,je,Me,Ne,Pe,Fe,Le,Re,ze,Ve,Ue,Ke,Je,Ye,Xe,Ze,Qe,$e,et;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,q,!1),t.addEventListener(`webglcontextrestored`,nt,!1),t.addEventListener(`webglcontextcreationerror`,rt,!1),U===null){let t=`webgl2`;if(U=Ee(t,e),U===null)throw Ee(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}tt()}catch(e){throw t.removeEventListener(`webglcontextlost`,q,!1),t.removeEventListener(`webglcontextrestored`,nt,!1),t.removeEventListener(`webglcontextcreationerror`,rt,!1),Ge(`WebGLRenderer: `+e.message),e}function tt(){De=new Zo(U),De.init(),Qe=new xl(U,De),Oe=new Eo(U,De,e,Qe),W=new yl(U,De),Oe.reversedDepthBuffer&&h&&W.buffers.depth.setReversed(!0),ee=U.createFramebuffer(),te=U.createFramebuffer(),z=U.createFramebuffer(),ke=new es(U),G=new $c,je=new bl(U,De,W,G,Oe,Qe,ke),Me=new Xo(I),Ne=new _o(U),$e=new wo(U,Ne),Pe=new Qo(U,Ne,ke,$e),Fe=new ns(U,Pe,Ne,$e,ke),Ye=new ts(U,Oe,je),Ue=new Do(G),Le=new Qc(I,Me,De,Oe,$e,Ue),Re=new Ol(I,G),ze=new rl,Ve=new ul(De),Je=new Co(I,Me,W,Fe,x,s),Ke=new vl(I,Fe,Oe),et=new kl(U,ke,Oe,W),Xe=new To(U,De,ke),Ze=new $o(U,De,ke),ke.programs=Le.programs,I.capabilities=Oe,I.extensions=De,I.properties=G,I.renderLists=ze,I.shadowMap=Ke,I.state=W,I.info=ke}S!==1009&&(F=new is(S,t.width,t.height,o,r,i));let K=new Tl(I,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let e=De.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=De.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(e){e!==void 0&&(fe=e,this.setSize(ue,de,!1))},this.getSize=function(e){return e.set(ue,de)},this.setSize=function(e,n,r=!0){K.isPresenting?We(`WebGLRenderer: Can't change size while VR device is presenting.`):(ue=e,de=n,t.width=Math.floor(e*fe),t.height=Math.floor(n*fe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ue*fe,de*fe).floor()},this.setDrawingBufferSize=function(e,n,r){ue=e,de=n,fe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)Ge(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){We(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ae)},this.getViewport=function(e){return e.copy(he)},this.setViewport=function(e,t,n,r){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,r),W.viewport(ae.copy(he).multiplyScalar(fe).round())},this.getScissor=function(e){return e.copy(ge)},this.setScissor=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),W.scissor(oe.copy(ge).multiplyScalar(fe).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(e){W.setScissorTest(_e=e)},this.setOpaqueSort=function(e){pe=e},this.setTransparentSort=function(e){me=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(B!==null){let t=B.texture.format;e=C.has(t)}if(e){let e=B.texture.type,t=w.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,U.clearBufferuiv(U.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,U.clearBufferiv(U.COLOR,0,E))}else r|=U.COLOR_BUFFER_BIT}t&&(r|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&U.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),R=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,q,!1),t.removeEventListener(`webglcontextrestored`,nt,!1),t.removeEventListener(`webglcontextcreationerror`,rt,!1),Je.dispose(),ze.dispose(),Ve.dispose(),G.dispose(),Me.dispose(),Fe.dispose(),$e.dispose(),et.dispose(),Le.dispose(),K.dispose(),K.removeEventListener(`sessionstart`,ut),K.removeEventListener(`sessionend`,dt),ft.stop()};function q(e){e.preventDefault(),He(`WebGLRenderer: Context Lost.`),L=!0}function nt(){He(`WebGLRenderer: Context Restored.`),L=!1;let e=ke.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,i=Ke.type;tt(),ke.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=i}function rt(e){Ge(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function it(e){let t=e.target;t.removeEventListener(`dispose`,it),at(t)}function at(e){ot(e),G.remove(e)}function ot(e){let t=G.get(e).programs;t!==void 0&&(t.forEach(function(e){Le.releaseProgram(e)}),e.isShaderMaterial&&Le.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=we);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=St(e,t,n,r,i);W.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Pe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;$e.setup(i,r,s,n,c);let h,g=Xe;if(c!==null&&(h=Ne.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(W.setLineWidth(r.wireframeLinewidth*H()),g.setMode(U.LINES)):g.setMode(U.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),W.setLineWidth(e*H()),i.isLineSegments?g.setMode(U.LINES):i.isLineLoop?g.setMode(U.LINE_LOOP):g.setMode(U.LINE_STRIP)}else i.isPoints?g.setMode(U.POINTS):i.isSprite&&g.setMode(U.TRIANGLES);if(i.isBatchedMesh){if(De.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ne.get(c).bytesPerElement:1,o=G.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(U,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function st(e,t,n,r){R!==null&&e.isNodeMaterial&&R.setObject(r,e),ye===!0&&Ue.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,vt(e,t,r),e.side=0,e.needsUpdate=!0,vt(e,t,r),e.side=2):vt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),R!==null&&R.renderStart(e,t,n),M=Ve.get(n),M.init(t),P.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights(),R!==null&&R.updateLights(M.state.lightsArray),be=this.localClippingEnabled,ye=Ue.init(this.clippingPlanes,be),ye===!0&&Ue.setGlobalState(this.clippingPlanes,t),R!==null&&Ke.render(M.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];st(o,n,t,e),r.add(o)}else st(i,n,t,e),r.add(i)}}),M=P.pop(),R!==null&&R.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=G.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}De.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ct=null;function lt(e){ct&&ct(e)}function ut(){ft.stop()}function dt(){ft.start()}let ft=new go;ft.setAnimationLoop(lt),typeof self<`u`&&ft.setContext(self),this.setAnimationLoop=function(e){ct=e,K.setAnimationLoop(e),e===null?ft.stop():ft.start()},K.addEventListener(`sessionstart`,ut),K.addEventListener(`sessionend`,dt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Ge(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(L===!0)return;R!==null&&R.renderStart(e,t);let n=K.enabled===!0&&K.isPresenting===!0,r=F!==null&&(B===null||n)&&F.begin(I,B);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(t),t=K.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,B),M=Ve.get(e,P.length),M.init(t),M.state.textureUnits=je.getTextureUnits(),P.push(M),xe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ve.setFromProjectionMatrix(xe,Ie,t.reversedDepth),be=this.localClippingEnabled,ye=Ue.init(this.clippingPlanes,be),k=ze.get(e,N.length),k.init(),N.push(k),K.enabled===!0&&K.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&pt(e,t,-1/0,I.sortObjects)}pt(e,t,0,I.sortObjects),k.finish(),R!==null&&R.updateLights(M.state.lightsArray),I.sortObjects===!0&&k.sort(pe,me),Te=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Te&&Je.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&Ue.beginShadows();let i=M.state.shadowsArray;if(Ke.render(i,e,t),ye===!0&&Ue.endShadows(),(r&&F.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ht(n,r,e,a)}Te&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];mt(k,e,n,n.viewport)}}else r.length>0&&ht(n,r,e,t),Te&&Je.render(e),mt(k,e,t)}B!==null&&re===0&&(je.updateMultisampleRenderTarget(B),je.updateRenderTargetMipmap(B)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),$e.resetDefaultState(),V=-1,ie=null,P.pop(),P.length>0?(M=P[P.length-1],je.setTextureUnits(M.state.textureUnits),ye===!0&&Ue.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,N.pop(),k=N.length>0?N[N.length-1]:null,R!==null&&R.renderEnd()};function pt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)M.pushLightProbeGrid(e);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ve)){r&&Ce.setFromMatrixPosition(e.matrixWorld).applyMatrix4(xe);let i=Fe.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Ce.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ve))){let i=Fe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ce.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ce.copy(e.boundingSphere.center)),Ce.applyMatrix4(e.matrixWorld).applyMatrix4(xe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Ce.z,s,t)}}else a.visible&&k.push(e,i,a,n,Ce.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)pt(i[e],t,n,r)}function mt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),ye===!0&&Ue.setGlobalState(I.clippingPlanes,n),r&&W.viewport(ae.copy(r)),i.length>0&&gt(i,t,n),a.length>0&&gt(a,t,n),o.length>0&&gt(o,t,n),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function ht(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=De.has(`EXT_color_buffer_half_float`)||De.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new Ht(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Oe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:At.workingColorSpace})}let a=M.state.transmissionRenderTarget[r.id],o=r.viewport||ae;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),u=I.getActiveCubeFace(),d=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(ce),le=I.getClearAlpha(),le<1&&I.setClearColor(16777215,.5),I.clear(),Te&&Je.render(n);let f=I.toneMapping;I.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),ye===!0&&Ue.setGlobalState(I.clippingPlanes,r),gt(e,n,r),je.updateMultisampleRenderTarget(a),je.updateRenderTargetMipmap(a),De.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,_t(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(je.updateMultisampleRenderTarget(a),je.updateRenderTargetMipmap(a))}I.setRenderTarget(s,u,d),I.setClearColor(ce,le),p!==void 0&&(r.viewport=p),I.toneMapping=f}function gt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&_t(o,t,n,s,l,c)}}function _t(e,t,n,r,i,a){R!==null&&i.isNodeMaterial&&R.setObject(e,i),e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function vt(e,t,n){t.isScene!==!0&&(t=we);let r=G.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=Le.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=Le.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Me.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,it),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return bt(e,s),d}else s.uniforms=Le.getUniforms(e),R!==null&&e.isNodeMaterial&&R.build(e,n,s),e.onBeforeCompile(s,I),d=Le.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ue.uniform),bt(e,s),r.needsLights=wt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=M.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function yt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=dc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function bt(e,t){let n=G.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function xt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function St(e,t,n,r,i){t.isScene!==!0&&(t=we),je.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=B===null?I.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:At.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Me.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=G.get(r),y=M.state.lights;if(ye===!0&&(be===!0||e!==ie)){let t=e===ie&&r.id===V;Ue.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ue.numPlanes||v.numIntersection!==Ue.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=M.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=vt(r,t,i),R&&r.isNodeMaterial&&R.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(W.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==V&&(V=r.id,C=!0),v.needsLights){let e=xt(M.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ie!==e){W.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(U,`projectionMatrix`,e.projectionMatrix),T.setValue(U,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(U,Se.setFromMatrixPosition(e.matrixWorld)),Oe.logarithmicDepthBuffer&&T.setValue(U,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(U,`isOrthographic`,e.isOrthographicCamera===!0),ie!==e&&(ie=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(U,`sunShadowMap`,y.state.sunShadowMap,je),y.state.directionalShadowMap.length>0&&T.setValue(U,`directionalShadowMap`,y.state.directionalShadowMap,je),y.state.spotShadowMap.length>0&&T.setValue(U,`spotShadowMap`,y.state.spotShadowMap,je),y.state.pointShadowMap.length>0&&T.setValue(U,`pointShadowMap`,y.state.pointShadowMap,je)),i.isSkinnedMesh){T.setOptional(U,i,`bindMatrix`),T.setOptional(U,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(U,`boneTexture`,e.boneTexture,je))}i.isBatchedMesh&&(T.setOptional(U,i,`batchingTexture`),T.setValue(U,`batchingTexture`,i._matricesTexture,je),T.setOptional(U,i,`batchingIdTexture`),T.setValue(U,`batchingIdTexture`,i._indirectTexture,je),T.setOptional(U,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(U,`batchingColorTexture`,i._colorsTexture,je));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ye.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(U,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Ml()),C){if(T.setValue(U,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&Ct(E,w),a&&r.fog===!0&&Re.refreshFogUniforms(E,a),Re.refreshMaterialUniforms(E,r,fe,de,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}dc.upload(U,yt(v),E,je)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(dc.upload(U,yt(v),E,je),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(U,`center`,i.center),T.setValue(U,`modelViewMatrix`,i.modelViewMatrix),T.setValue(U,`normalMatrix`,i.normalMatrix),T.setValue(U,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];et.update(n,x),et.bind(n,x)}}return x}function Ct(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function wt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(e,t,n){let r=G.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),G.get(e.texture).__webglTexture=t,G.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=G.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){B=e,ne=t,re=n;let r=null,i=!1,a=!1;if(e){let o=G.get(e);if(o.__useDefaultFramebuffer!==void 0){W.bindFramebuffer(U.FRAMEBUFFER,o.__webglFramebuffer),ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest,W.viewport(ae),W.scissor(oe),W.setScissorTest(se),V=-1;return}if(o.__webglFramebuffer===void 0)je.setupRenderTarget(e);else if(o.__hasExternalTextures)je.rebindTextures(e,G.get(e.texture).__webglTexture,G.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&G.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);je.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=G.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&je.useMultisampledRTT(e)===!1?G.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest}else ae.copy(he).multiplyScalar(fe).floor(),oe.copy(ge).multiplyScalar(fe).floor(),se=_e;if(n!==0&&(r=ee),W.bindFramebuffer(U.FRAMEBUFFER,r)&&W.drawBuffers(e,r),W.viewport(ae),W.scissor(oe),W.setScissorTest(se),i){let r=G.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=G.get(e.textures[t]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=G.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,t.__webglTexture,n)}V=-1};function Tt(e){let t=G.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Oe.textureFormatReadable(e.format),t.__typeReadable=Oe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Ge(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){W.bindFramebuffer(U.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let u=Tt(o);if(u.__formatReadable===!1){Ge(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Ge(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&U.readPixels(t,n,r,i,Qe.convert(c),Qe.convert(l),a)}finally{let e=B===null?null:G.get(B).__webglFramebuffer;W.bindFramebuffer(U.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){W.bindFramebuffer(U.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let d=Tt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,f),U.bufferData(U.PIXEL_PACK_BUFFER,a.byteLength,U.STREAM_READ),U.readPixels(t,n,r,i,Qe.convert(l),Qe.convert(u),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let p=B===null?null:G.get(B).__webglFramebuffer;W.bindFramebuffer(U.FRAMEBUFFER,p);let m=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await qe(U,m,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,f),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,a),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(f),U.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;je.setTexture2D(e,0),U.copyTexSubImage2D(U.TEXTURE_2D,n,0,0,o,s,i,a),W.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Qe.convert(t.format),_=Qe.convert(t.type),v;t.isData3DTexture?(je.setTexture3D(t,0),v=U.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(je.setTexture2DArray(t,0),v=U.TEXTURE_2D_ARRAY):(je.setTexture2D(t,0),v=U.TEXTURE_2D),W.activeTexture(U.TEXTURE0),W.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,t.flipY),W.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),W.pixelStorei(U.UNPACK_ALIGNMENT,t.unpackAlignment);let y=W.getParameter(U.UNPACK_ROW_LENGTH),b=W.getParameter(U.UNPACK_IMAGE_HEIGHT),x=W.getParameter(U.UNPACK_SKIP_PIXELS),S=W.getParameter(U.UNPACK_SKIP_ROWS),C=W.getParameter(U.UNPACK_SKIP_IMAGES);W.pixelStorei(U.UNPACK_ROW_LENGTH,h.width),W.pixelStorei(U.UNPACK_IMAGE_HEIGHT,h.height),W.pixelStorei(U.UNPACK_SKIP_PIXELS,l),W.pixelStorei(U.UNPACK_SKIP_ROWS,u),W.pixelStorei(U.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=G.get(e),r=G.get(t),h=G.get(n.__renderTarget),g=G.get(r.__renderTarget);W.bindFramebuffer(U.READ_FRAMEBUFFER,h.__webglFramebuffer),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(e).__webglTexture,i,d+n),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(t).__webglTexture,a,m+n)),U.blitFramebuffer(l,u,o,s,f,p,o,s,U.DEPTH_BUFFER_BIT,U.NEAREST);W.bindFramebuffer(U.READ_FRAMEBUFFER,null),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||G.has(e)){let n=G.get(e),r=G.get(t);W.bindFramebuffer(U.READ_FRAMEBUFFER,te),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let e=0;e<c;e++)w?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,n.__webglTexture,i),T?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,r.__webglTexture,a),i===0?T?U.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):U.copyTexSubImage2D(v,a,f,p,l,u,o,s):U.blitFramebuffer(l,u,o,s,f,p,o,s,U.COLOR_BUFFER_BIT,U.NEAREST);W.bindFramebuffer(U.READ_FRAMEBUFFER,null),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?U.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h);W.pixelStorei(U.UNPACK_ROW_LENGTH,y),W.pixelStorei(U.UNPACK_IMAGE_HEIGHT,b),W.pixelStorei(U.UNPACK_SKIP_PIXELS,x),W.pixelStorei(U.UNPACK_SKIP_ROWS,S),W.pixelStorei(U.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&U.generateMipmap(v),W.unbindTexture()},this.initRenderTarget=function(e){G.get(e).__webglFramebuffer===void 0&&je.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?je.setTextureCube(e,0):e.isData3DTexture?je.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?je.setTexture2DArray(e,0):je.setTexture2D(e,0),W.unbindTexture()},this.resetState=function(){ne=0,re=0,B=null,W.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ie}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}},Pl={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Fl=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Il=new Ha(-1,1,1,-1,0,1),Ll=new class extends Cr{constructor(){super(),this.setAttribute(`position`,new dr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new dr([0,2,0,0,2,0],2))}},Rl=class{constructor(e){this._mesh=new fi(Ll,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Il)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},zl=class extends Fl{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ta?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qi.clone(e.uniforms),this.material=new ta({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Rl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Bl=class extends Fl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Vl=class extends Fl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Hl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new xt);this._width=n.width,this._height=n.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zl(Pl),this.copyPass.material.blending=0,this.timer=new Ya}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Bl!==void 0&&(r instanceof Bl?n=!0:r instanceof Vl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ul={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new xt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Gt},cameraProjectionMatrixInverse:{value:new Gt},cameraWorldMatrix:{value:new Gt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new J(-1,-1,-1)},sceneBoxMax:{value:new J(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Wl={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Gl={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Kl(t=5){let n=Math.floor(t)%2==0?Math.floor(t)+1:Math.floor(t),r=ql(n),i=r.length,a=new Uint8Array(i*4);for(let e=0;e<i;++e){let t=r[e],n=2*Math.PI*t/i,o=new J(Math.cos(n),Math.sin(n),0).normalize();a[e*4]=(o.x*.5+.5)*255,a[e*4+1]=(o.y*.5+.5)*255,a[e*4+2]=127,a[e*4+3]=255}let o=new hi(a,n,n);return o.wrapS=e,o.wrapT=e,o.needsUpdate=!0,o}function ql(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var Jl={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Yl(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new xt},cameraProjectionMatrixInverse:{value:new Gt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Yl(e,t,n){let r=Xl(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Xl(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new J(Math.cos(a),Math.sin(a),o))}return r}var Zl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,j=g-1+3*d,M=_-1+3*d,N=v-1+3*d,P=c&255,F=l&255,I=u&255,L=this.perm[P+this.perm[F+this.perm[I]]]%12,R=this.perm[P+y+this.perm[F+b+this.perm[I+x]]]%12,ee=this.perm[P+S+this.perm[F+C+this.perm[I+w]]]%12,te=this.perm[P+1+this.perm[F+1+this.perm[I+1]]]%12,z=.6-g*g-_*_-v*v;z<0?r=0:(z*=z,r=z*z*this._dot3(this.grad3[L],g,_,v));let ne=.6-T*T-E*E-D*D;ne<0?i=0:(ne*=ne,i=ne*ne*this._dot3(this.grad3[R],T,E,D));let re=.6-O*O-k*k-A*A;re<0?a=0:(re*=re,a=re*re*this._dot3(this.grad3[ee],O,k,A));let B=.6-j*j-M*M-N*N;return B<0?o=0:(B*=B,o=B*B*this._dot3(this.grad3[te],j,M,N)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,j=w>D?4:0,M=T>D?2:0,N=+(E>D),P=O+k+A+j+M+N,F=+(a[P][0]>=3),I=+(a[P][1]>=3),L=+(a[P][2]>=3),R=+(a[P][3]>=3),ee=+(a[P][0]>=2),te=+(a[P][1]>=2),z=+(a[P][2]>=2),ne=+(a[P][3]>=2),re=+(a[P][0]>=1),B=+(a[P][1]>=1),V=+(a[P][2]>=1),ie=+(a[P][3]>=1),ae=w-F+c,oe=T-I+c,se=E-L+c,ce=D-R+c,le=w-ee+2*c,ue=T-te+2*c,de=E-z+2*c,fe=D-ne+2*c,pe=w-re+3*c,me=T-B+3*c,he=E-V+3*c,ge=D-ie+3*c,_e=w-1+4*c,ve=T-1+4*c,ye=E-1+4*c,be=D-1+4*c,xe=h&255,Se=g&255,Ce=_&255,we=v&255,Te=o[xe+o[Se+o[Ce+o[we]]]]%32,H=o[xe+F+o[Se+I+o[Ce+L+o[we+R]]]]%32,U=o[xe+ee+o[Se+te+o[Ce+z+o[we+ne]]]]%32,Ee=o[xe+re+o[Se+B+o[Ce+V+o[we+ie]]]]%32,De=o[xe+1+o[Se+1+o[Ce+1+o[we+1]]]]%32,Oe=.6-w*w-T*T-E*E-D*D;Oe<0?l=0:(Oe*=Oe,l=Oe*Oe*this._dot4(i[Te],w,T,E,D));let W=.6-ae*ae-oe*oe-se*se-ce*ce;W<0?u=0:(W*=W,u=W*W*this._dot4(i[H],ae,oe,se,ce));let ke=.6-le*le-ue*ue-de*de-fe*fe;ke<0?d=0:(ke*=ke,d=ke*ke*this._dot4(i[U],le,ue,de,fe));let G=.6-pe*pe-me*me-he*he-ge*ge;G<0?f=0:(G*=G,f=G*G*this._dot4(i[Ee],pe,me,he,ge));let Ae=.6-_e*_e-ve*ve-ye*ye-be*be;return Ae<0?p=0:(Ae*=Ae,p=Ae*Ae*this._dot4(i[De],_e,ve,ye,be)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Ql=class t extends Fl{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Kl(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ht(this.width,this.height,{type:g,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ta({defines:Object.assign({},Ul.defines),uniforms:Qi.clone(Ul.uniforms),vertexShader:Ul.vertexShader,fragmentShader:Ul.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ia,this.normalMaterial.blending=0,this.pdMaterial=new ta({defines:Object.assign({},Jl.defines),uniforms:Qi.clone(Jl.uniforms),vertexShader:Jl.vertexShader,fragmentShader:Jl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ta({defines:Object.assign({},Wl.defines),uniforms:Qi.clone(Wl.uniforms),vertexShader:Wl.vertexShader,fragmentShader:Wl.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ta({uniforms:Qi.clone(Pl.uniforms),vertexShader:Pl.vertexShader,fragmentShader:Pl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new ta({uniforms:Qi.clone(Gl.uniforms),vertexShader:Gl.vertexShader,fragmentShader:Gl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new Rl(null),this._originalClearColor=new Dn,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new ji,this.depthTexture.format=E,this.depthTexture.type=y,this.normalRenderTarget=new Ht(this.width,this.height,{minFilter:r,magFilter:r,type:g,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,i=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Yl(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case t.OUTPUT.Off:break;case t.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(t=64){let n=new Zl,r=t*t*4,i=new Uint8Array(r);for(let e=0;e<t;e++)for(let r=0;r<t;r++){let a=e,o=r;i[(e*t+r)*4]=(n.noise(a,o)*.5+.5)*255,i[(e*t+r)*4+1]=(n.noise(a+t,o)*.5+.5)*255,i[(e*t+r)*4+2]=(n.noise(a,o+t)*.5+.5)*255,i[(e*t+r)*4+3]=(n.noise(a+t,o+t)*.5+.5)*255}let a=new hi(i,t,t,w,l);return a.wrapS=e,a.wrapT=e,a.needsUpdate=!0,a}};Ql.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var $l={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},eu=class extends Fl{constructor(){super(),this.isOutputPass=!0,this.uniforms=Qi.clone($l.uniforms),this.material=new na({name:$l.name,uniforms:this.uniforms,vertexShader:$l.vertexShader,fragmentShader:$l.fragmentShader}),this._fsQuad=new Rl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},At.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},tu=class extends Fl{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Dn}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},nu={name:`SMAAEdgesShader`,defines:{SMAA_THRESHOLD:`0.1`},uniforms:{tDiffuse:{value:null},resolution:{value:new xt(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ru={name:`SMAAWeightsShader`,defines:{SMAA_MAX_SEARCH_STEPS:`8`,SMAA_AREATEX_MAX_DISTANCE:`16`,SMAA_AREATEX_PIXEL_SIZE:`( 1.0 / vec2( 160.0, 560.0 ) )`,SMAA_AREATEX_SUBTEX_SIZE:`( 1.0 / 7.0 )`},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new xt(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},iu={name:`SMAABlendShader`,uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new xt(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`},au=class extends Fl{constructor(){super(),this._edgesRT=new Ht(1,1,{depthBuffer:!1,type:g}),this._edgesRT.texture.name=`SMAAPass.edges`,this._weightsRT=new Ht(1,1,{depthBuffer:!1,type:g}),this._weightsRT.texture.name=`SMAAPass.weights`;let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new zt,this._areaTexture.name=`SMAAPass.area`,this._areaTexture.image=t,this._areaTexture.minFilter=o,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new zt,this._searchTexture.name=`SMAAPass.search`,this._searchTexture.image=n,this._searchTexture.magFilter=r,this._searchTexture.minFilter=r,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Qi.clone(nu.uniforms),this._materialEdges=new ta({defines:Object.assign({},nu.defines),uniforms:this._uniformsEdges,vertexShader:nu.vertexShader,fragmentShader:nu.fragmentShader}),this._uniformsWeights=Qi.clone(ru.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new ta({defines:Object.assign({},ru.defines),uniforms:this._uniformsWeights,vertexShader:ru.vertexShader,fragmentShader:ru.fragmentShader}),this._uniformsBlend=Qi.clone(iu.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new ta({uniforms:this._uniformsBlend,vertexShader:iu.vertexShader,fragmentShader:iu.fragmentShader}),this._fsQuad=new Rl(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return`data:image/png;base64,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`}_getSearchTexture(){return`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII=`}},ou={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Dn(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},su=class e extends Fl{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new xt(256,256):new xt(e.x,e.y),this.clearColor=new Dn(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(i,a,{type:g,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Ht(i,a,{type:g,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Ht(i,a,{type:g,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=ou;this.highPassUniforms=Qi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ta({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new xt(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qi.clone(Pl.uniforms),this.blendMaterial=new ta({uniforms:this.copyUniforms,vertexShader:Pl.vertexShader,fragmentShader:Pl.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Dn,this._oldClearAlpha=1,this._basic=new ei,this._fsQuad=new Rl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new xt(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new ta({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new xt(.5,.5)},direction:{value:new xt(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ta({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};su.BlurDirectionX=new xt(1,0),su.BlurDirectionY=new xt(0,1);var cu=.25,lu={tiny:.4,small:.56,medium:.92,large:1.14,colossal:1.72};function uu(e){return cu*(lu[e]||lu.medium)}function du(e,t=14,n=14){let r=uu(e),i=Math.max(4,t||14,n||14),a=Math.max(4,Math.min(t||14,n||14)),o=(i*.72+a*.28)*.5*r;return Number(Math.max(e===`colossal`?7.2:e===`large`?3.8:e===`medium`?2.6:e===`small`?1.7:1.05,Math.min(14.5,o+.35)).toFixed(2))}var fu={grass:`#86c864`,grass2:`#78ba57`,grass3:`#97d675`,soil:`#8b5e3c`,soilDark:`#70492c`,path:`#e6d6b5`,path2:`#d8c6a1`,concrete:`#dcd6cb`,stone:`#8e948c`,concrete2:`#cfcac0`,concreteDark:`#b4afa5`,asphalt:`#585b63`,slate:`#434854`,slateLight:`#656d7d`,brick:`#cc7a57`,brick2:`#b96947`,brickDark:`#945036`,mortar:`#e5cbb0`,plaster:`#f2eadb`,cream:`#faf3e3`,limestone:`#e8dfc8`,marble:`#f5f2ec`,marbleShade:`#e1ddd4`,granite:`#7a7e85`,wood:`#c9935b`,woodLight:`#deb07c`,woodDark:`#8f5e36`,oak:`#a87444`,crate:`#d4a366`,leather:`#6e4328`,terracotta:`#c86d49`,steel:`#8c99a6`,steelLight:`#b4c0cc`,steelDark:`#59636e`,iron:`#3b4048`,chrome:`#d8e2eb`,brass:`#d9a74a`,gold:`#f4c44e`,goldDark:`#c79428`,copper:`#c8754b`,hazard:`#f2be38`,red:`#df5246`,redDark:`#a8342b`,crimson:`#be3438`,orange:`#ec8438`,amber:`#ffb642`,yellow:`#f6d55c`,busYellow:`#f5b82e`,lime:`#96d65f`,leaf:`#58ad52`,leafDark:`#3e853b`,leafLight:`#78c86c`,teal:`#47b0a3`,tealDark:`#2d7d74`,cyan:`#5ce6db`,sky:`#6fb7f0`,water:`#4fa8de`,blue:`#4c82d4`,blueDark:`#2f5696`,indigo:`#5b63b8`,purple:`#9370cf`,purpleDark:`#65469c`,pink:`#ec8db0`,magenta:`#d95ca3`,white:`#fcfaf5`,silver:`#c5ccd4`,charcoal:`#262930`,rubber:`#23252b`,black:`#181a20`,glass:`#b8e4f2`,warmGlow:`#ffe29a`,screenCyan:`#64f5df`,screenGreen:`#5ef28c`,fire:`#ff7426`,lava:`#ff5a1f`,basalt:`#363840`,ash:`#6c6e75`,sand:`#ead39c`,moss:`#4b9645`,snow:`#f3f7fc`},pu=[.22,.48,.76,1],mu=[{n:[1,0,0],corners:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],aoDirs:[[[1,-1,0],[1,0,1],[1,-1,1]],[[1,-1,0],[1,0,-1],[1,-1,-1]],[[1,1,0],[1,0,-1],[1,1,-1]],[[1,1,0],[1,0,1],[1,1,1]]]},{n:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],aoDirs:[[[-1,-1,0],[-1,0,-1],[-1,-1,-1]],[[-1,-1,0],[-1,0,1],[-1,-1,1]],[[-1,1,0],[-1,0,1],[-1,1,1]],[[-1,1,0],[-1,0,-1],[-1,1,-1]]]},{n:[0,1,0],corners:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],aoDirs:[[[-1,1,0],[0,1,1],[-1,1,1]],[[1,1,0],[0,1,1],[1,1,1]],[[1,1,0],[0,1,-1],[1,1,-1]],[[-1,1,0],[0,1,-1],[-1,1,-1]]]},{n:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],aoDirs:[[[-1,-1,0],[0,-1,-1],[-1,-1,-1]],[[1,-1,0],[0,-1,-1],[1,-1,-1]],[[1,-1,0],[0,-1,1],[1,-1,1]],[[-1,-1,0],[0,-1,1],[-1,-1,1]]]},{n:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],aoDirs:[[[-1,0,1],[0,-1,1],[-1,-1,1]],[[1,0,1],[0,-1,1],[1,-1,1]],[[1,0,1],[0,1,1],[1,1,1]],[[-1,0,1],[0,1,1],[-1,1,1]]]},{n:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],aoDirs:[[[1,0,-1],[0,-1,-1],[1,-1,-1]],[[-1,0,-1],[0,-1,-1],[-1,-1,-1]],[[-1,0,-1],[0,1,-1],[-1,1,-1]],[[1,0,-1],[0,1,-1],[1,1,-1]]]}];for(let e of mu){let t=e.corners[0],n=e.corners[1],r=e.corners[3];e.stepU=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],e.stepV=[r[0]-t[0],r[1]-t[1],r[2]-t[2]]}var hu=new Map;function gu(e){let t=typeof e==`string`?e:``,n=(Object.hasOwn(fu,t)?fu[t]:t)||`#eae4d7`,r=hu.get(n);if(!r){let e=new Dn;try{e.set(n)}catch{e.set(`#eae4d7`)}let t=e.r*.2126+e.g*.7152+e.b*.0722,i=1.14;r=[Math.max(0,Math.min(1,t+(e.r-t)*i)),Math.max(0,Math.min(1,t+(e.g-t)*i)),Math.max(0,Math.min(1,t+(e.b-t)*i))],hu.set(n,r)}return r}var _u=512,vu=1023;function yu(e,t,n){return(e+_u&vu)<<20|(t+_u&vu)<<10|n+_u&vu}var bu=new Map,xu=[null],Su=[0];function Cu(e,t){let n=Number(t)||0,r=n===0?e:`${e}|${n}`,i=bu.get(r);return i||(i=xu.length,bu.set(r,i),xu.push(gu(e)),Su.push(n)),i}var Z=class{constructor(e=1){this.v=new Map,this.seed=e}get size(){return this.v.size}hasCell(e,t,n){return this.v.has(yu(e|0,t|0,n|0))}resolveColor(e,t,n,r){let i=typeof e==`function`?e(t,n,r):e;return i?fu[i]||i:null}put(e,t,n,r,i=0){let a=Math.round(e)|0,o=Math.round(t)|0,s=Math.round(n)|0,c=this.resolveColor(r,a,o,s),l=yu(a,o,s);return c?this.v.set(l,Cu(c,i)):this.v.delete(l),this}box(e,t,n,r,i,a,o,s=0){let c=Math.round(Math.min(e,r))|0,l=Math.round(Math.max(e,r))|0,u=Math.round(Math.min(t,i))|0,d=Math.round(Math.max(t,i))|0,f=Math.round(Math.min(n,a))|0,p=Math.round(Math.max(n,a))|0;if(typeof o!=`function`){let e=o?fu[o]||o:null;if(e){let t=Cu(e,s);for(let e=c;e<l;e++){let n=(e+_u&vu)<<20;for(let e=u;e<d;e++){let r=n|(e+_u&vu)<<10;for(let e=f;e<p;e++)this.v.set(r|e+_u&vu,t)}}}else{if(this.v.size===0)return this;for(let e=c;e<l;e++){let t=(e+_u&vu)<<20;for(let e=u;e<d;e++){let n=t|(e+_u&vu)<<10;for(let e=f;e<p;e++)this.v.delete(n|e+_u&vu)}}}return this}for(let e=c;e<l;e++)for(let t=u;t<d;t++)for(let n=f;n<p;n++)this.put(e,t,n,o,s);return this}roundedBox(e,t,n,r,i,a,o,s,c=0){let l=Math.round(Math.min(e,r)),u=Math.round(Math.max(e,r)),d=Math.round(Math.min(t,i)),f=Math.round(Math.max(t,i)),p=Math.round(Math.min(n,a)),m=Math.round(Math.max(n,a)),h=Math.max(.5,Math.min(o,(u-l)/2,(f-d)/2,(m-p)/2)),g=l+h,_=u-h,v=d+h,y=f-h,b=p+h,x=m-h,S=(h+.15)*(h+.15);for(let e=l;e<u;e++){let t=e+.5,n=t<g?g-t:t>_?t-_:0;for(let t=d;t<f;t++){let r=t+.5,i=r<v?v-r:r>y?r-y:0;for(let r=p;r<m;r++){let a=r+.5,o=a<b?b-a:a>x?a-x:0;n*n+i*i+o*o<=S&&this.put(e,t,r,s,c)}}}return this}clear(e,t,n,r,i,a){return this.box(e,t,n,r,i,a,null)}pillars(e,t,n,r,i,a,o){let s=Math.round(Math.min(e,r)),c=Math.round(Math.max(e,r)),l=Math.round(Math.min(n,a)),u=Math.round(Math.max(n,a));for(let e of[s,c-1])for(let n of[l,u-1])this.box(e,t,n,e+1,i,n+1,o);return this}hollowBox(e,t,n,r,i,a,o=1,s=`plaster`,c=null){let l=Math.round(Math.min(e,r)),u=Math.round(Math.max(e,r)),d=Math.round(Math.min(t,i)),f=Math.round(Math.max(t,i)),p=Math.round(Math.min(n,a)),m=Math.round(Math.max(n,a));return this.box(l,d,p,u,f,m,s),u-l>o*2&&m-p>o*2&&f-d>o&&this.clear(l+o,d+o,p+o,u-o,f,m-o),c&&(this.pillars(l,d,p,u,f,m,c),this.box(l,f-1,p,u,f,p+1,c),this.box(l,f-1,m-1,u,f,m,c),this.box(l,f-1,p,l+1,f,m,c),this.box(u-1,f-1,p,u,f,m,c)),this}plinth(e=16,t=2,n=16,r=`concrete2`,i=`limestone`,a=`brass`){let o=Math.floor(e/2),s=Math.floor(n/2);if(this.box(-o-1,0,-s-1,o+1,1,s+1,r),t>=2){this.box(-o,1,-s,o,t,s,i);for(let[e,n]of[[-o,-s],[o-1,-s],[-o,s-1],[o-1,s-1]])this.put(e,t-1,n,a)}return this}cylinderAxis(e,t,n,r,i,a,o,s=0){let c=Math.ceil(Math.max(.5,a))+1,l=Math.round(Math.min(r,i)),u=Math.max(l+1,Math.round(Math.max(r,i))),d=a*a+.18;for(let r=Math.floor(t-c);r<=Math.ceil(t+c);r++)for(let i=Math.floor(n-c);i<=Math.ceil(n+c);i++)if((r+.5-t)**2+(i+.5-n)**2<=d)for(let t=l;t<u;t++)e===`y`?this.put(r,t,i,o,s):e===`x`?this.put(t,r,i,o,s):this.put(r,i,t,o,s);return this}ringAxis(e,t,n,r,i,a,o,s,c=0){let l=Math.ceil(Math.max(.5,a))+1,u=Math.round(Math.min(r,i)),d=Math.max(u+1,Math.round(Math.max(r,i))),f=a*a+.18,p=o*o;for(let r=Math.floor(t-l);r<=Math.ceil(t+l);r++)for(let i=Math.floor(n-l);i<=Math.ceil(n+l);i++){let a=(r+.5-t)**2+(i+.5-n)**2;if(a<=f&&a>=p)for(let t=u;t<d;t++)e===`y`?this.put(r,t,i,s,c):e===`x`?this.put(t,r,i,s,c):this.put(r,i,t,s,c)}return this}cone(e,t,n,r,i,a,o,s=0){let c=Math.round(Math.min(t,n)),l=Math.max(c+1,Math.round(Math.max(t,n))),u=Math.max(1,l-c);for(let t=c;t<l;t++){let n=(t-c)/u,l=i+(a-i)*n;this.cylinderAxis(`y`,e,r,t,t+1,Math.max(.45,l),o,s)}return this}sphere(e,t,n,r,i=r,a=r,o=`leaf`,s=0){let c=Math.max(.5,r),l=Math.max(.5,i),u=Math.max(.5,a);for(let r=Math.floor(e-c)-1;r<=Math.ceil(e+c)+1;r++)for(let i=Math.floor(t-l)-1;i<=Math.ceil(t+l)+1;i++)for(let a=Math.floor(n-u)-1;a<=Math.ceil(n+u)+1;a++)((r+.5-e)/c)**2+((i+.5-t)/l)**2+((a+.5-n)/u)**2<=1&&this.put(r,i,a,o,s);return this}dome(e,t,n,r,i,a=0){let o=Math.max(.5,r),s=Math.round(t);for(let t=Math.floor(e-o)-1;t<=Math.ceil(e+o)+1;t++)for(let r=s;r<=Math.ceil(s+o)+1;r++)for(let c=Math.floor(n-o)-1;c<=Math.ceil(n+o)+1;c++)((t+.5-e)/o)**2+((r+.5-s)/o)**2+((c+.5-n)/o)**2<=1&&this.put(t,r,c,i,a);return this}roofGable(e,t,n,r,i,a=4,o=`x`,s=`terracotta`,c=`cream`){let l=Math.round(Math.min(e,r)),u=Math.round(Math.max(e,r)),d=Math.round(Math.min(n,i)),f=Math.round(Math.max(n,i));for(let e=0;e<a;e++)if(o===`x`){if(d+e>=f-e)break;this.box(l,t+e,d+e,u,t+e+1,f-e,s),c&&(this.box(l,t+e,d+e,l+1,t+e+1,f-e,c),this.box(u-1,t+e,d+e,u,t+e+1,f-e,c))}else{if(l+e>=u-e)break;this.box(l+e,t+e,d,u-e,t+e+1,f,s),c&&(this.box(l+e,t+e,d,u-e,t+e+1,d+1,c),this.box(l+e,t+e,f-1,u-e,t+e+1,f,c))}return this}roofPyramid(e,t,n,r,i,a=`slate`,o=`gold`){let s=Math.round(Math.min(e,r)),c=Math.round(Math.max(e,r)),l=Math.round(Math.min(n,i)),u=Math.round(Math.max(n,i));for(let e=0;s+e<c-e&&l+e<u-e;e++)this.box(s+e,t+e,l+e,c-e,t+e+1,u-e,e===0&&o?o:a);return this}stairs(e,t,n,r,i,a=`+z`,o=`limestone`){for(let s=0;s<r;s++)a===`+z`?this.box(e,t,n+s,e+i,t+r-s,n+s+1,o):a===`-z`?this.box(e,t,n-s,e+i,t+r-s,n-s+1,o):a===`+x`?this.box(e+s,t,n,e+s+1,t+r-s,n+i,o):this.box(e-s,t,n,e-s+1,t+r-s,n+i,o);return this}arch(e,t,n,r=3,i=6,a=2,o=`z`,s=`brick`){for(let c=-r;c<=r;c++){let l=t+i-Math.round((c/Math.max(1,r))**2*2);for(let i=t;i<=l;i++){let t=Math.abs(c)>=r-1,u=i>=l-1;(t||u)&&(o===`z`?this.box(e+c,i,n,e+c+1,i+1,n+a,s):this.box(e,i,n+c,e+a,i+1,n+c+1,s))}}return this}line(e,t,n,r,i,a,o=0,s=`steel`,c=0){let l=r-e,u=i-t,d=a-n,f=Math.max(1,Math.ceil(Math.max(Math.abs(l),Math.abs(u),Math.abs(d))*1.6));for(let r=0;r<=f;r++){let i=r/f,a=e+l*i,p=t+u*i,m=n+d*i;o<=.5?this.put(Math.floor(a),Math.floor(p),Math.floor(m),s,c):this.sphere(a,p,m,o,o,o,s,c)}return this}bounds(){if(!this.v.size)return{minX:0,maxX:0,minY:0,maxY:0,minZ:0,maxZ:0,count:0};let e=1/0,t=-1/0,n=1/0,r=-1/0,i=1/0,a=-1/0;for(let o of this.v.keys()){let s=(o>>20&vu)-_u,c=(o>>10&vu)-_u,l=(o&vu)-_u;s<e&&(e=s),s+1>t&&(t=s+1),c<n&&(n=c),c+1>r&&(r=c+1),l<i&&(i=l),l+1>a&&(a=l+1)}return{minX:e,maxX:t,minY:n,maxY:r,minZ:i,maxZ:a,count:this.v.size}}};function wu(e){switch(e.op){case`box`:case`roundedBox`:case`clear`:return{...e,x0:-e.x1,x1:-e.x0,mirrorX:!1};case`cylinder`:case`ring`:if((e.axis??`y`)===`x`){let t=e.x0??-2,n=e.x1??2;return{...e,x0:-n,x1:-t,mirrorX:!1}}return{...e,cx:-(e.cx??0),mirrorX:!1};case`cone`:case`sphere`:case`dome`:return{...e,cx:-e.cx,mirrorX:!1};case`line`:return{...e,x0:-e.x0,x1:-e.x1,mirrorX:!1};case`voxels`:return{...e,list:(e.list||[]).map(([e,t,n,r,i])=>[-(e+1),t,n,r,i]),mirrorX:!1};default:return null}}function Tu(e,t=[],n={}){let r=e=>(typeof e==`string`&&n&&Object.hasOwn(n,e)?n[e]:void 0)||(typeof e==`string`&&Object.hasOwn(fu,e)?fu[e]:void 0)||e,i=t=>{if(!t||typeof t!=`object`)return;let n=Number(t.emit)||0;switch(t.op){case`plinth`:e.plinth(t.sizeX??16,t.heightY??2,t.sizeZ??16,r(t.base??`concrete2`),r(t.top??`limestone`),r(t.corner??`brass`));break;case`box`:e.box(t.x0,t.y0,t.z0,t.x1,t.y1,t.z1,r(t.color),n);break;case`roundedBox`:e.roundedBox(t.x0,t.y0,t.z0,t.x1,t.y1,t.z1,t.radius??1.5,r(t.color),n);break;case`clear`:e.clear(t.x0,t.y0,t.z0,t.x1,t.y1,t.z1);break;case`hollowBox`:e.hollowBox(t.x0,t.y0,t.z0,t.x1,t.y1,t.z1,t.wall??1,r(t.color),t.trim?r(t.trim):null);break;case`pillars`:e.pillars(t.x0,t.y0,t.z0,t.x1,t.y1,t.z1,r(t.color));break;case`cylinder`:{let i=t.axis??`y`,a=t.carve?null:r(t.color??`steel`);i===`x`?e.cylinderAxis(`x`,t.cy??0,t.cz??0,t.x0??-2,t.x1??2,t.radius??2.5,a,n):i===`z`?e.cylinderAxis(`z`,t.cx??0,t.cy??2,t.z0??-2,t.z1??2,t.radius??2.5,a,n):e.cylinderAxis(`y`,t.cx??0,t.cz??0,t.y0??0,t.y1??6,t.radius??2.5,a,n);break}case`ring`:{let i=t.axis??`y`;i===`x`?e.ringAxis(`x`,t.cy??0,t.cz??0,t.x0??-2,t.x1??2,t.outerR??3,t.innerR??1.6,r(t.color),n):i===`z`?e.ringAxis(`z`,t.cx??0,t.cy??2,t.z0??-2,t.z1??2,t.outerR??3,t.innerR??1.6,r(t.color),n):e.ringAxis(`y`,t.cx??0,t.cz??0,t.y0??0,t.y1??2,t.outerR??3,t.innerR??1.6,r(t.color),n);break}case`cone`:e.cone(t.cx,t.y0,t.y1,t.cz,t.rBottom,t.rTop??.5,r(t.color),n);break;case`sphere`:e.sphere(t.cx,t.cy,t.cz,t.rx,t.ry??t.rx,t.rz??t.rx,t.carve?null:r(t.color??`leaf`),n);break;case`dome`:e.dome(t.cx,t.yBase,t.cz,t.radius,r(t.color),n);break;case`roofGable`:e.roofGable(t.x0,t.yBase,t.z0,t.x1,t.z1,t.rise??4,t.axis??`x`,r(t.color??`terracotta`),t.trim?r(t.trim):null);break;case`roofPyramid`:e.roofPyramid(t.x0,t.yBase,t.z0,t.x1,t.z1,r(t.color??`slate`),t.trim?r(t.trim):null);break;case`stairs`:e.stairs(t.x0,t.y0,t.z0,t.steps??2,t.width??4,t.dir??`+z`,r(t.color??`limestone`));break;case`arch`:e.arch(t.cx,t.y0,t.cz,t.halfSpan??3,t.height??6,t.depth??2,t.axis??`z`,r(t.color??`brick`));break;case`line`:e.line(t.x0,t.y0,t.z0,t.x1,t.y1,t.z1,t.radius??0,r(t.color??`steel`),n);break;case`voxels`:for(let n of t.list||[])e.put(n[0],n[1],n[2],r(n[3]),n[4]||0)}};for(let e of t)if(i(e),e?.mirrorX){let t=wu(e);t&&i(t)}return e}var Eu=new Map;function Du(e=0){let t=Math.max(0,Math.min(7,e|0)),n=new ra({vertexColors:!0,roughness:.72,metalness:.06,dithering:!0,...t>0?{polygonOffset:!0,polygonOffsetFactor:-t,polygonOffsetUnits:-t*1.5}:{}});return n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
        attribute float aEmit;
        attribute float aJitterSeed;
        varying float vEmit;
        varying float vJitterSeed;
        varying vec2 vVoxUv;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        vEmit = aEmit;
        vJitterSeed = aJitterSeed;
        vVoxUv = uv;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        varying float vEmit;
        varying float vJitterSeed;
        varying vec2 vVoxUv;`).replace(`#include <color_fragment>`,`#include <color_fragment>
        float voxPx = max(fwidth(vVoxUv.x), fwidth(vVoxUv.y));
        float voxDetail = 1.0 - smoothstep(0.04, 0.14, voxPx);
        vec2 cellUv = fract(vVoxUv);
        if (vJitterSeed >= 0.0 && voxDetail > 0.005) {
          vec2 cellId = floor(vVoxUv);
          vec2 jq = fract(cellId * vec2(123.34, 456.21) + vJitterSeed);
          jq += dot(jq, jq + 45.32);
          float cellJ = fract(jq.x * jq.y) - 0.5;
          diffuseColor.rgb *= 1.0 + cellJ * 0.072 * voxDetail;
        }
        float edgeDist = min(min(cellUv.x, 1.0 - cellUv.x), min(cellUv.y, 1.0 - cellUv.y));
        float seam = smoothstep(0.0, max(0.085, voxPx * 1.45), edgeDist);
        float hi = smoothstep(0.14, 0.02, edgeDist) * (cellUv.y * 0.6 + 0.4);
        diffuseColor.rgb *= mix(1.0 - 0.22 * voxDetail, 1.0, seam);
        diffuseColor.rgb += hi * 0.05 * voxDetail;
        if (vEmit > 0.05) {
          diffuseColor.rgb *= 0.48;
        }`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        vec3 dPosX = dFdx(vViewPosition);
        vec3 dPosY = dFdy(vViewPosition);
        vec2 dUvX = dFdx(vVoxUv);
        vec2 dUvY = dFdy(vVoxUv);
        vec2 bevUv = fract(vVoxUv);
        float bevW = 0.115;
        float bx = smoothstep(bevW, 0.0, bevUv.x) - smoothstep(1.0 - bevW, 1.0, bevUv.x);
        float by = smoothstep(bevW, 0.0, bevUv.y) - smoothstep(1.0 - bevW, 1.0, bevUv.y);
        vec3 surfT = normalize(dPosX * dUvY.y - dPosY * dUvX.y + 1e-6);
        vec3 surfB = normalize(-dPosX * dUvY.x + dPosY * dUvX.x + 1e-6);
        normal = normalize(normal - (surfT * bx + surfB * by) * 0.26 * (1.0 - smoothstep(0.04, 0.14, max(fwidth(vVoxUv.x), fwidth(vVoxUv.y)))));`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        totalEmissiveRadiance += diffuseColor.rgb * min(vEmit * 0.9, 1.35);`)},n.customProgramCacheKey=()=>`meadow-voxel-bevel-ao-v2`,n}function Ou(e=0){let t=Math.max(0,Math.min(7,e|0));return Eu.has(t)||Eu.set(t,Du(t)),Eu.get(t)}var ku=null;function Au(){return ku||=new ra({vertexColors:!0,roughness:.55,metalness:.05,transparent:!0,opacity:.78,emissive:new Dn(`#429867`),emissiveIntensity:.18}),ku}var ju=new Int32Array(4096);function Q(e,t={}){let{jitter:n=.036,ao:r=!0,scale:i=1,castShadow:a=!0,receiveShadow:o=!0,ghost:s=!1,depthLayer:c=0}=t,l=[],u=[],d=[],f=[],p=[],m=[],h=[],g=e.v,_=(e.seed&1023)*.73,v=0,y=(e,t,r,a,o,c,g,y,b,x,S,C,w,T,E,D,O,k,A)=>{let[j,M,N]=c.n,P=c.corners[0],F=c.stepU,I=c.stepV,L=e+P[0],R=t+P[1],ee=r+P[2],te=a*F[0],z=a*F[1],ne=a*F[2],re=o*I[0],B=o*I[1],V=o*I[2];l.push(L*i,R*i,ee*i,(L+te)*i,(R+z)*i,(ee+ne)*i,(L+te+re)*i,(R+z+B)*i,(ee+ne+V)*i,(L+re)*i,(R+B)*i,(ee+V)*i),u.push(j,M,N,j,M,N,j,M,N,j,M,N);let ie=T*A,ae=E*A,oe=D*A,se=O*A;d.push(Math.min(1,S*ie),Math.min(1,C*ie),Math.min(1,w*ie),Math.min(1,S*ae),Math.min(1,C*ae),Math.min(1,w*ae),Math.min(1,S*oe),Math.min(1,C*oe),Math.min(1,w*oe),Math.min(1,S*se),Math.min(1,C*se),Math.min(1,w*se));let ce=b+512,le=x+512;f.push(ce,le,ce+a,le,ce+a,le+o,ce,le+o),p.push(k,k,k,k);let ue=n>0&&!s?_+g*13.1+(y+512)*2.3:-1;m.push(ue,ue,ue,ue),T+D<E+O?h.push(v+1,v+2,v+3,v+1,v+3,v+0):h.push(v+0,v+1,v+2,v+0,v+2,v+3),v+=4},b=[new Map,new Map,new Map,new Map,new Map,new Map];for(let[e,t]of g.entries()){let n=(e>>20&vu)-_u,i=(e>>10&vu)-_u,a=(e&vu)-_u,o=Su[t],s=xu[t];for(let e=0;e<6;e++){let c=mu[e],[l,u,d]=c.n;if(g.has(yu(n+l,i+u,a+d)))continue;let f=3,p=3,m=3,h=3;if(r&&o<.5){let e=c.aoDirs;{let[t,r,o]=e[0],s=g.has(yu(n+t[0],i+t[1],a+t[2])),c=g.has(yu(n+r[0],i+r[1],a+r[2])),l=g.has(yu(n+o[0],i+o[1],a+o[2]));f=s&&c?0:3-(+!!s+ +!!c+ +!!l)}{let[t,r,o]=e[1],s=g.has(yu(n+t[0],i+t[1],a+t[2])),c=g.has(yu(n+r[0],i+r[1],a+r[2])),l=g.has(yu(n+o[0],i+o[1],a+o[2]));p=s&&c?0:3-(+!!s+ +!!c+ +!!l)}{let[t,r,o]=e[2],s=g.has(yu(n+t[0],i+t[1],a+t[2])),c=g.has(yu(n+r[0],i+r[1],a+r[2])),l=g.has(yu(n+o[0],i+o[1],a+o[2]));m=s&&c?0:3-(+!!s+ +!!c+ +!!l)}{let[t,r,o]=e[3],s=g.has(yu(n+t[0],i+t[1],a+t[2])),c=g.has(yu(n+r[0],i+r[1],a+r[2])),l=g.has(yu(n+o[0],i+o[1],a+o[2]));h=s&&c?0:3-(+!!s+ +!!c+ +!!l)}}let _=c.stepU,v=c.stepV,x=n*l+i*u+a*d,S=n*_[0]+i*_[1]+a*_[2],C=n*v[0]+i*v[1]+a*v[2];if(f===p&&m===h||f===h&&p===m){let n=b[e].get(x);n?(S<n.minU&&(n.minU=S),S>n.maxU&&(n.maxU=S),C<n.minV&&(n.minV=C),C>n.maxV&&(n.maxV=C)):(n={minU:S,maxU:S,minV:C,maxV:C,items:[]},b[e].set(x,n));let r=t<<8|f<<6|p<<4|m<<2|h;n.items.push(S,C,r)}else{let t=u>0?1.04:u<0?.64:d>0?.96:l>0?.89:l<0?.83:.79;y(n,i,a,1,1,c,e,x,S,C,s[0],s[1],s[2],pu[f],pu[p],pu[m],pu[h],o,t)}}}for(let e=0;e<6;e++){let t=mu[e],[n,r,i]=t.n,a=t.stepU,o=t.stepV,s=r>0?1.04:r<0?.64:i>0?.96:n>0?.89:n<0?.83:.79;for(let[c,l]of b[e].entries()){let u=l.items;if(u.length===3){let l=u[0],d=u[1],f=u[2],p=f>>>8,m=xu[p];y(c*n+l*a[0]+d*o[0],c*r+l*a[1]+d*o[1],c*i+l*a[2]+d*o[2],1,1,t,e,c,l,d,m[0],m[1],m[2],pu[f>>>6&3],pu[f>>>4&3],pu[f>>>2&3],pu[f&3],Su[p],s);continue}let{minU:d,minV:f}=l,p=l.maxU-d+1,m=l.maxV-f+1,h=p*m;h>ju.length&&(ju=new Int32Array(Math.max(h,ju.length*2)));let g=ju;g.fill(0,0,h);for(let e=0;e<u.length;e+=3)g[(u[e+1]-f)*p+(u[e]-d)]=u[e+2];for(let l=0;l<m;l++){let u=l*p;for(let h=0;h<p;h++){let _=g[u+h];if(_===0)continue;let v=_>>>6&3,b=_>>>4&3,x=_>>>2&3,S=_&3,C=v===b&&x===S,w=v===S&&b===x,T=1;if(C)for(;h+T<p&&g[u+h+T]===_;)T++;let E=1;if(w)outerH:for(;l+E<m;){let e=(l+E)*p+h;for(let t=0;t<T;t++)if(g[e+t]!==_)break outerH;E++}for(let e=0;e<E;e++){let t=(l+e)*p+h;for(let e=0;e<T;e++)g[t+e]=0}let D=d+h,O=f+l,k=c*n+D*a[0]+O*o[0],A=c*r+D*a[1]+O*o[1],j=c*i+D*a[2]+O*o[2],M=_>>>8,N=xu[M];y(k,A,j,T,E,t,e,c,D,O,N[0],N[1],N[2],pu[v],pu[b],pu[x],pu[S],Su[M],s)}}}}let x=new Cr;x.setAttribute(`position`,new dr(l,3)),x.setAttribute(`normal`,new dr(u,3)),x.setAttribute(`color`,new dr(d,3)),x.setAttribute(`uv`,new dr(f,2)),x.setAttribute(`aEmit`,new dr(p,1)),x.setAttribute(`aJitterSeed`,new dr(m,1)),x.setIndex(v<=65535?new lr(h,1):new ur(h,1)),x.computeBoundingSphere();let S=new fi(x,s?Au():Ou(c));return S.castShadow=a&&!s,S.receiveShadow=o&&!s,S}function Mu(e,t={}){let{depthLayer:n=0,castShadow:r=!0,receiveShadow:i=!0}=t;if(!e||e.length===0)return null;let a=0,o=0;for(let t=0;t<e.length;t++){let n=e[t].mesh?.geometry;if(!n)continue;let r=n.attributes.position,i=n.index;r&&i&&(a+=r.count,o+=i.count)}if(a===0||o===0)return null;let s=new Float32Array(a*3),c=new Float32Array(a*3),l=new Float32Array(a*3),u=new Float32Array(a*2),d=new Float32Array(a),f=new Float32Array(a),p=a<=65535?new Uint16Array(o):new Uint32Array(o),m=0,h=0;for(let t=0;t<e.length;t++){let n=e[t],r=n.mesh?.geometry;if(!r)continue;let i=r.attributes.position.array,a=r.attributes.normal.array,o=r.attributes.color.array,g=r.attributes.uv.array,_=r.attributes.aEmit?.array,v=r.attributes.aJitterSeed?.array,y=r.index.array,b=r.attributes.position.count,x=n.x||0,S=n.y||0,C=n.z||0,w=n.rotY||0,T=Math.cos(w),E=Math.sin(w),D=n.scaleX??n.scale??1,O=n.scaleY??n.scale??1,k=n.scaleZ??n.scale??1;for(let e=0;e<b;e++){let t=e*3,n=(m+e)*3,r=i[t]*D,p=i[t+1]*O,h=i[t+2]*k;s[n]=r*T+h*E+x,s[n+1]=p+S,s[n+2]=-r*E+h*T+C;let y=a[t],b=a[t+1],w=a[t+2];c[n]=y*T+w*E,c[n+1]=b,c[n+2]=-y*E+w*T,l[n]=o[t],l[n+1]=o[t+1],l[n+2]=o[t+2];let A=e*2,j=(m+e)*2;u[j]=g[A],u[j+1]=g[A+1],d[m+e]=_?_[e]:0,f[m+e]=v?v[e]:-1}for(let e=0;e<y.length;e++)p[h+e]=y[e]+m;m+=b,h+=y.length}let g=new Cr;g.setAttribute(`position`,new cr(s,3)),g.setAttribute(`normal`,new cr(c,3)),g.setAttribute(`color`,new cr(l,3)),g.setAttribute(`uv`,new cr(u,2)),g.setAttribute(`aEmit`,new cr(d,1)),g.setAttribute(`aJitterSeed`,new cr(f,1)),g.setIndex(new cr(p,1)),g.computeBoundingSphere();let _=new fi(g,Ou(n));return _.castShadow=r,_.receiveShadow=i,_.matrixAutoUpdate=!1,_.updateMatrix(),_}function Nu(e,t={}){let{seed:n=11,ghost:r=!1,useWorldScale:i=!0}=t,a=new bn,o=[],s={},c=e?.palette||{},l=cu*(i?lu[e?.scaleClass]||lu.medium:1),u=new Z(n);Tu(u,e?.ops||[],c);let d=u.bounds();if(u.size>0){let e=Q(u,{scale:l,ghost:r});a.add(e)}let f=new Set;if(u.size>0){let e=Math.min(64,d.maxY+1);for(let t=-3;t<=3;t++)for(let n=-3;n<=3;n++)for(let r=0;r<=e;r++){let e=yu(t,r,n);u.v.has(e)&&f.add(e)}}let p=d.maxY*l;for(let t=0;t<(e?.parts||[]).length;t++){let i=e.parts[t],u=new Z(n+17+t*7);if(Tu(u,i.ops||[],c),!u.size)continue;let d=new bn,f=i.name||`part-${t}`;d.name=f;let[m,h,g]=i.pivot||[0,0,0];d.position.set(m*l,h*l,g*l);let _=Q(u,{scale:l,ghost:r,castShadow:u.size>14,depthLayer:t%6+1});_.scale.setScalar(.9985),d.add(_),a.add(d),s[f]={pivot:d,px:m,py:h,pz:g,baseX:m*l,baseY:h*l,baseZ:g*l,voxScale:l,part:i},p=Math.max(p,(h+u.bounds().maxY)*l);let v=Number(i.speed)||1.2,y=Number(i.amp)||.38,b=Number(i.phase)||0,x=i.kind||`bob`;o.push((e,t=null)=>{let n=t?.moveFactor??1;if(x===`wheel`){let n=t&&typeof t.wheelAngle==`number`?t.wheelAngle*v:e*2.4*v;d.rotation.x=n}else if(x===`spinY`)d.rotation.y=e*v+b;else if(x===`spinZ`)d.rotation.z=e*v+b;else if(x===`spinX`)d.rotation.x=e*v+b;else if(x===`bob`)d.position.y=h*l+Math.sin(e*v*2.2+b)*y*l*2.5;else if(x===`swingX`){let t=y*(.18+.82*n);d.rotation.x=Math.sin(e*v*2.6+b)*t}else x===`swingY`?d.rotation.y=Math.sin(e*v*2.4+b)*y:x===`swingZ`&&(d.rotation.z=Math.sin(e*v*2.2+b)*y)})}return a.userData.topY=Math.max(1,p),a.userData.voxScale=l,a.userData.hasCenterVox=f.size>0?(e,t,n)=>f.has(yu(e|0,t|0,n|0)):null,a.userData.baseBounds=d,a.userData.partPivots=s,a.userData.animatorCount=o.length,a.userData.animate=o.length>0?(e,t=null)=>{for(let n of o)n(e,t)}:null,a.userData.dispose=()=>{a.traverse(e=>{e.isMesh&&e.geometry&&e.geometry.dispose()})},a}function Pu(e,t={}){let{seed:n=11,ghost:r=!1,useWorldScale:i=!0,splitX:a=.5}=t,o=e?.palette||{},s=cu*(i?lu[e?.scaleClass]||lu.medium:1),c=new Z(n);Tu(c,e?.ops||[],o);let l=(t,i)=>{let l=new Z(n+i),u=1/0,d=-1/0;for(let[e,n]of c.v.entries()){let r=(e>>20&vu)-_u;(t?r>=a:r<a)&&(l.v.set(e,n),r<u&&(u=r),r+1>d&&(d=r+1))}if(!l.size)return null;let f=(e?.parts||[]).filter(e=>{let n=e.pivot?.[0]??0;return t?n>=a:n<a}),p=f.length?f.reduce((e,t)=>e+(t.pivot?.[0]??0),0)/f.length:(u+d)*.5,m=new bn,h=new bn;h.position.x=-p*s,m.add(h);let g=[],_=Q(l,{scale:s,ghost:r});h.add(_);let v=l.bounds().maxY*s;for(let e=0;e<f.length;e++){let t=f[e],a=new Z(n+i+19+e*7);if(Tu(a,t.ops||[],o),!a.size)continue;let c=new bn,[l,u,d]=t.pivot||[0,0,0];c.position.set(l*s,u*s,d*s);let p=Q(a,{scale:s,ghost:r,castShadow:a.size>14,depthLayer:e%6+1});p.scale.setScalar(.9985),c.add(p),h.add(c),v=Math.max(v,(u+a.bounds().maxY)*s);let m=Number(t.speed)||1.2,_=t.kind||`wheel`;g.push((e,t=null)=>{if(_===`wheel`){let n=t&&typeof t.wheelAngle==`number`?t.wheelAngle*m:e*2.4*m;c.rotation.x=n}})}return m.userData.topY=Math.max(1,v),m.userData.voxScale=s,m.userData.animatorCount=g.length,m.userData.animate=g.length>0?(e,t=null)=>{for(let n of g)n(e,t)}:null,m.userData.dispose=()=>{m.traverse(e=>{e.isMesh&&e.geometry&&e.geometry.dispose()})},m},u=l(!1,0),d=l(!0,101);return!u||!d?null:{leftGroup:u,rightGroup:d}}var Fu=[`#f5cfa8`,`#e6b48a`,`#c98e63`,`#8d5838`,`#f7dcc0`],Iu=[`#394a6d`,`#4b4f59`,`#6b4f3a`,`#3d6b5e`,`#54476e`],Lu=163.5,Ru=3.1;function zu(e,t){let n=Math.abs(e)/Lu,r=Math.abs(t)/Lu,i=(n**+Ru+r**+Ru)**(1/Ru)*Lu,a=Math.atan2(t,e);return Lu+(9.2*Math.cos(2*a+1.55)+7.8*Math.sin(3*a+.75)+5.6*Math.cos(4*a+3.08)+4.1*Math.sin(5*a-.85)+2.6*Math.cos(7*a+.4))-i}function Bu(e,t,n=2){if(zu(e,t)>=n)return[e,t];if(Math.hypot(e,t)<.001)return[0,0];let r=0,i=1;for(let a=0;a<10;a++){let a=(r+i)*.5;zu(e*a,t*a)>=n?r=a:i=a}return[e*r,t*r]}function Vu(e,t=0){let n=new bn,r=.135,i=Fu[t%Fu.length],a=Iu[t%Iu.length],o=e.shirtColor||`#4c82d4`,s=e.hatColor||`#f5b82e`,c=new Z(101+t);c.box(-2,0,-1,2,5,2,o),(e.role===`student`||e.role===`explorer`)&&c.box(-1.5,1,-2,1.5,4,-1,s);let l=Q(c,{scale:r});l.position.y=4*r,n.add(l);let u=new bn;u.position.set(0,9.06*r,0);let d=new Z(201+t);d.box(-2,0,-2,2,4,2,i),d.put(-1,1.5,2,`#181a20`),d.put(1,1.5,2,`#181a20`),d.box(-2,3.5,-2,2,5,2,s),d.box(-2,3.5,2,2,4.2,3,s),u.add(Q(d,{scale:r,depthLayer:1})),n.add(u);let f=e=>{let n=new bn,i=new Z(301+t+e);return i.box(-1,-4,-1,1,0,1,a),i.box(-1,-4,0,1,-3,2,`#24272e`),n.add(Q(i,{scale:r,depthLayer:2,castShadow:!1})),n},p=f(1);p.position.set(1.08*r,3.94*r,0);let m=f(2);m.position.set(-1.08*r,3.94*r,0),n.add(p,m);let h=(e,n,a)=>{let s=new bn,c=new Z(401+t+e);return c.box(n,-3,-1,a,0,1,o),c.box(n,-4,-1,a,-3,1,i),s.add(Q(c,{scale:r,depthLayer:3,castShadow:!1})),s},g=h(1,0,1);g.position.set(2.08*r,8.6*r,0);let _=h(2,-1,0);return _.position.set(-2.08*r,8.6*r,0),n.add(g,_),n.userData.dispose=()=>{n.traverse(e=>{e.isMesh&&e.geometry&&e.geometry.dispose()})},{root:n,headPivot:u,leftLeg:p,rightLeg:m,leftArm:g,rightArm:_}}var Hu=class{constructor(e,t){this.id=e.id,this.data=e,this.index=t,this.rig=Vu(e,t),this.group=this.rig.root;let n=t*2.399963%(Math.PI*2),r=1.55+t%5*.65;this.queueOffsetX=Math.cos(n)*r,this.queueOffsetZ=Math.sin(n)*r,this.x=(e.homeX??0)+this.queueOffsetX,this.z=(e.homeZ??0)+this.queueOffsetZ,this.yaw=n,this.scale=1,this.stopIndex=t%Math.max(1,(e.stops||[]).length),this.state=e.usesTransit?`WALK_TO_STOP`:`STROLL`,this.timer=t*1.9%4.5,this.ridingVehicleId=null,this.boardedStopId=null,this.phase=t*1.37,this.avoidSide=t%2==0?1:-1,this.smoothDirX=Math.sin(this.yaw),this.smoothDirZ=Math.cos(this.yaw),this.stuckSec=0,this.initialSanitized=!1,this.group.position.set(this.x,0,this.z)}sanitizeTarget(e,t){let[n,r]=Bu(e,t,2.2);for(let e=0;e<2;e++){for(let e of this.ponds||[]){let t=(e.radius||6.4)+1.15,i=n-e.x,a=r-e.z,o=Math.hypot(i,a);if(o<t){let s=o>.01?Math.atan2(a,i):this.index*2.399%(Math.PI*2);n=e.x+Math.cos(s)*t,r=e.z+Math.sin(s)*t}}for(let e of this.obstacles||[]){let t=e.r+.95,i=n-e.x,a=r-e.z,o=Math.hypot(i,a);if(o<t){let s=o>.01?Math.atan2(a,i):this.index*2.399%(Math.PI*2);n=e.x+Math.cos(s)*t,r=e.z+Math.sin(s)*t}}[n,r]=Bu(n,r,2.2)}return[n,r]}updateFromServer(e){this.data=e}step(e,t,n,r=[],i=[],a=[]){if(this.ponds=r,this.allVillagers=i,this.obstacles=a,!this.initialSanitized&&a.length>1){let[e,t]=this.sanitizeTarget(this.x,this.z);this.x=e,this.z=t,this.initialSanitized=!0}let o=this.data.stops&&this.data.stops.length>=2?this.data.stops:[[this.x,this.z],[0,-16]],s=0;if(this.state===`RIDING`){let e=n.find(e=>e.id===this.ridingVehicleId);if(!e)this.state=`STROLL`,this.group.visible=!0,this.scale=1;else if(this.x=e.doorX,this.z=e.doorZ,e.dwellingStop&&e.dwellingStop.id!==this.boardedStopId){this.ridingVehicleId=null,this.group.visible=!0,this.scale=.25;let[t,n]=this.sanitizeTarget(e.doorX+this.queueOffsetX*.35,e.doorZ+this.queueOffsetZ*.35);this.x=t,this.z=n,this.yaw=e.yaw+Math.PI/2,this.smoothDirX=Math.sin(this.yaw),this.smoothDirZ=Math.cos(this.yaw),this.stopIndex=(this.stopIndex+1)%o.length,this.state=`ALIGHT_VISIT`,this.timer=6.5+this.index%4}else{this.group.visible=!1;return}}if(this.scale<1&&this.state!==`BOARDING`&&(this.scale=Math.min(1,this.scale+e*3.8)),this.state===`WALK_TO_STOP`){let t=o[this.stopIndex%o.length],n=t[0]+this.queueOffsetX,r=t[1]+this.queueOffsetZ,i=this.walkToward(n,r,2.25,e,!1);s=i.arrived?0:i.moveRatio,i.arrived&&(this.state=`WAIT_FOR_BUS`,this.timer=0)}else if(this.state===`WAIT_FOR_BUS`){this.timer+=e,this.rig.headPivot.rotation.y=Math.sin(t*1.6+this.phase)*.35;let r=n.find(e=>e.dwellingStop&&Math.hypot(e.x-this.x,e.z-this.z)<8.8);r?(this.ridingVehicleId=r.id,this.boardedStopId=r.dwellingStop.id,this.state=`BOARDING`):this.timer>20&&(this.stopIndex=(this.stopIndex+1)%o.length,this.state=`STROLL`,this.timer=4+this.index%3)}else if(this.state===`BOARDING`){let t=n.find(e=>e.id===this.ridingVehicleId);if(!t||!t.dwellingStop)this.state=`WAIT_FOR_BUS`,this.scale=1;else{let n=this.walkToward(t.doorX,t.doorZ,3.35,e,!0);if(s=1.2*Math.max(.35,n.moveRatio),n.arrived&&(this.scale=Math.max(.15,this.scale-e*4.5),this.scale<=.2)){this.state=`RIDING`,this.group.visible=!1;return}}}else if(this.state===`ALIGHT_VISIT`){let n=o[this.stopIndex%o.length],r=n[0]+this.queueOffsetX*1.15,i=n[1]+this.queueOffsetZ*1.15,a=this.walkToward(r,i,2.15,e,!1);s=a.arrived?0:a.moveRatio,a.arrived&&(this.timer-=e,this.rig.headPivot.rotation.y=Math.sin(t*1.8+this.phase)*.3,this.timer<=0&&(this.stopIndex=(this.stopIndex+1)%o.length,this.state=this.data.usesTransit?`WALK_TO_STOP`:`STROLL`))}else{let t=o[this.stopIndex%o.length],n=t[0]+this.queueOffsetX,r=t[1]+this.queueOffsetZ,i=this.walkToward(n,r,1.9,e,!1);s=i.arrived?0:.85*i.moveRatio,i.arrived&&(this.timer-=e,this.timer<=0&&(this.stopIndex=(this.stopIndex+1)%o.length,this.timer=3.8+this.index%3,this.data.usesTransit&&this.stopIndex===0&&(this.state=`WALK_TO_STOP`)))}this.state!==`BOARDING`&&this.resolveCollisions(e);let c=s>.08?Math.sin(t*8.5+this.phase)*.62*s:0,l=s>.08?Math.abs(Math.sin(t*8.5+this.phase))*.09*s:0;this.rig.leftLeg.rotation.x=c,this.rig.rightLeg.rotation.x=-c,this.rig.leftArm.rotation.x=-c*.8,this.rig.rightArm.rotation.x=c*.8,s>.08&&(this.rig.headPivot.rotation.y*=.85),this.group.position.set(this.x,l,this.z),this.group.rotation.y=this.yaw,this.group.scale.setScalar(this.scale)}walkToward(e,t,n,r,i=!1){let[a,o]=i?[e,t]:this.sanitizeTarget(e,t),s=a-this.x,c=o-this.z,l=Math.hypot(s,c),u=i?.45:.65;if(l<u)return this.stuckSec=0,{arrived:!0,moveRatio:0};let d=s/l,f=c/l,p=d,m=f;if(!i&&this.allVillagers)for(let e of this.allVillagers){if(e===this||!e.group.visible||e.state===`RIDING`)continue;let t=this.x-e.x,n=this.z-e.z,r=Math.hypot(t,n);if(r<3.2&&r>1e-4){let e=t/r,i=n/r,a=(3.2-r)/3.2,o=a*a*1.45,s=a*.85;p+=e*o-i*s,m+=i*o+e*s}}if(!i&&this.obstacles)for(let e of this.obstacles){let t=this.x-e.x,n=this.z-e.z,r=Math.hypot(t,n),i=e.r+1.55;if(r<i&&r>.001){let a=t/r,o=n/r,s=(i-r)/i,c=-o,l=a,u=c*d+l*f;Math.abs(u)>.38&&r>e.r+.35&&(this.avoidSide=u>=0?1:-1);let h=Math.abs(u)>.55?u>=0?1:-1:this.avoidSide;p+=a*s*1.25+c*h*s*1.65,m+=o*s*1.25+l*h*s*1.65}}let h=Math.hypot(p,m)||1;p/=h,m/=h;let g=this.x,_=this.z,v=Math.min(l,n*r);this.x+=p*v,this.z+=m*v,this.resolveCollisions(r,i);let y=this.x-g,b=this.z-_,x=Math.hypot(y,b),S=y*p+b*m,C=v>1e-4?Math.max(0,Math.min(1,Math.max(0,S>-.002?x:0)/v)):0,w=Math.min(1,r*7.5);this.smoothDirX+=(p-this.smoothDirX)*w,this.smoothDirZ+=(m-this.smoothDirZ)*w;let T=Math.hypot(this.smoothDirX,this.smoothDirZ)||1;if(this.smoothDirX/=T,this.smoothDirZ/=T,C>.12){let e=Math.atan2(this.smoothDirX,this.smoothDirZ)-this.yaw;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;let t=r*5.2;this.yaw+=Math.max(-t,Math.min(t,e*Math.min(1,r*6.5)))}if(!i){if(C<.28){if(this.stuckSec+=r,this.stuckSec>=.65)return this.stuckSec=0,this.avoidSide*=-1,{arrived:!0,moveRatio:0}}else this.stuckSec=Math.max(0,this.stuckSec-r*1.5)}let E=Math.hypot(a-this.x,o-this.z)<=u;return E&&(this.stuckSec=0),{arrived:E,moveRatio:C}}resolveCollisions(e,t=!1){let[n,r]=Bu(this.x,this.z,1.8);this.x=n,this.z=r;for(let e of this.ponds||[]){let t=(e.radius||6.4)+.9,n=this.x-e.x,r=this.z-e.z,i=Math.hypot(n,r);i<t&&i>.001&&(this.x=e.x+n/i*t,this.z=e.z+r/i*t)}if(!t&&this.obstacles)for(let e of this.obstacles){let t=this.x-e.x,n=this.z-e.z,r=Math.hypot(t,n);r<e.r&&r>.001&&(this.x=e.x+t/r*e.r,this.z=e.z+n/r*e.r)}if(!t&&this.allVillagers){let t=1.5;for(let n of this.allVillagers){if(n===this||!n.group.visible||n.state===`RIDING`)continue;let r=this.x-n.x,i=this.z-n.z,a=Math.hypot(r,i);if(a<t){if(a<.001){let e=this.index*2.399%(Math.PI*2);r=Math.cos(e),i=Math.sin(e),a=1}let n=Math.min((t-a)*.55,e*4.5+.08);this.x+=r/a*n,this.z+=i/a*n}}}}dispose(){this.rig.root.userData.dispose?.()}},Uu=new Map,Wu=null;function Gu(){return Wu||=new ra({color:`#4daee0`,roughness:.18,metalness:.08,emissive:new Dn(`#1a5b7d`),emissiveIntensity:.16,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),Wu}function Ku(e){let t=e||6.4,n=.32,r=.2,i=Math.round(t/n),a=`pond:${i}`,o=Uu.get(a);if(!o){let e=new Z(77),s=[`limestone`,`concrete`,`concrete2`,`grass2`];for(let t=-i-3;t<=i+3;t++)for(let n=-i-3;n<=i+3;n++){let r=Math.hypot(t,n);if(r>=i-.8&&r<=i+2.4){let a=Math.abs((t*13+n*29)%7),o=r>i+1.3&&a<3?`grass2`:s[a%3];e.put(t,0,n,o),r>=i-.2&&r<=i+1.1&&a%3!=0&&e.put(t,1,n,o)}}let c=Q(e,{scale:n}),l=new Z(79),u=[[-t*.38,-t*.24,!0],[t*.34,t*.28,!1],[-t*.14,t*.44,!0],[t*.4,-t*.18,!1]];for(let[e,t,n]of u){let i=Math.round(e/r),a=Math.round(t/r);l.cylinderAxis(`y`,i,a,1,2,2.4,`leaf`),n&&(l.box(i-1,2,a,i+1,3,a+1,`#f598b6`),l.put(i,3,a,`yellow`))}o={rimMesh:c,padMesh:Q(l,{scale:r,castShadow:!1}),waterR:Math.max(1.2,(i-.85)*n)},Uu.set(a,o)}return o}function qu(e){let t=.2;if(e.kind===`bus_stop`){let e=Uu.get(`bus_stop`);if(!e){let n=new Z(51);n.box(-5,0,-3,5,1,3,`concrete`),n.box(-4,1,-2,-3,10,-1,`woodDark`),n.box(3,1,-2,4,10,-1,`woodDark`),n.box(-3,2,-2,3,9,-1,`glass`),n.box(-5,10,-3,5,11,2,`terracotta`),n.box(-3,2,-1,3,3,1,`wood`),n.box(5,0,1,6,11,2,`steelDark`),n.box(4,10,1,7,13,2,`busYellow`,.55),n.put(5,11,2,`charcoal`),e=Q(n,{scale:t}),Uu.set(`bus_stop`,e)}return e}if(e.kind===`lamp_post`){let e=Uu.get(`lamp_post`);if(!e){let n=new Z(61);n.box(-1,0,-1,2,2,2,`iron`),n.box(0,2,0,1,13,1,`iron`),n.box(0,12,0,3,13,1,`iron`),n.box(2,10,-.5,4,12,1.5,`warmGlow`,1.5),e=Q(n,{scale:t}),Uu.set(`lamp_post`,e)}return e}if(e.kind===`bench`){let e=Uu.get(`bench`);if(!e){let n=new Z(71);n.box(-4,0,-1,-3,3,2,`iron`),n.box(3,0,-1,4,3,2,`iron`),n.box(-4,2,-1,4,3,2,`wood`),n.box(-4,3,-1,4,5,0,`woodLight`),e=Q(n,{scale:t}),Uu.set(`bench`,e)}return e}if(e.kind===`signpost`){let e=Uu.get(`signpost`);if(!e){let n=new Z(81);n.box(0,0,0,1,10,1,`woodDark`),n.box(-3,7,0,4,9,1,`cream`),n.box(-1,5,0,5,6,1,`wood`),e=Q(n,{scale:t}),Uu.set(`signpost`,e)}return e}let n=(Math.abs(Math.round((e.x||1)*13+(e.z||1)*29))+91)%8,r=`flower:${n}`,i=Uu.get(r);if(!i){let e=new Z(91+n*17),t=[`#f6d55c`,`#ec8db0`,`#fcfaf5`,`#ffb642`],a=t[n%t.length],o=t[(n+1)%t.length];e.sphere(0,1.1,0,2.6,1.4,2.3,`leaf`),e.sphere(2.1,.9,1.1,1.9,1.2,1.8,`leafLight`),e.sphere(-1.8,.8,.9,1.6,1.1,1.6,`leafDark`),e.clear(-6,-4,-6,6,0,6),e.put(-1,2,0,a),e.put(0,2,1,a),e.put(2,2,1,o),e.put(-2,1,1,o),i=Q(e,{scale:.22}),Uu.set(r,i)}return i}function Ju(e,t){let n=[],r=[];for(let i of e||[]){let e=i.x||0,a=i.z||0,o=i.yaw||0;if(i.kind===`pond`){let{rimMesh:s,padMesh:c,waterR:l}=Ku(i.radius);n.push({mesh:s,x:e,y:0,z:a,rotY:o}),r.push({mesh:c,x:e,y:.05,z:a,rotY:o});let u=new fi(new Fi(l,l,.2,32),Gu());u.position.set(e,.11,a),u.rotation.y=o,u.receiveShadow=!0,u.matrixAutoUpdate=!1,u.updateMatrix(),u.userData.sharedMaterial=!0,t.add(u)}else{let t=qu(i);i.kind===`bus_stop`||i.kind===`lamp_post`||i.kind===`bench`||i.kind===`signpost`?n.push({mesh:t,x:e,y:0,z:a,rotY:o}):r.push({mesh:t,x:e,y:0,z:a,rotY:o})}}let i=Mu(n,{depthLayer:0,castShadow:!0,receiveShadow:!0});i&&t.add(i);let a=Mu(r,{depthLayer:0,castShadow:!1,receiveShadow:!0});a&&t.add(a)}var Yu=`geminisland_avatar_v1`,Xu=Object.freeze({skinColors:Object.freeze([`#fae0cb`,`#f4cba6`,`#eab586`,`#d99866`,`#c27d4c`,`#9e5e36`,`#764226`,`#522c1a`,`#c5d3de`,`#8fe0be`]),hairStyles:Object.freeze([`short`,`spiky`,`parted`,`long`,`ponytail`,`buns`,`curly`,`mohawk`,`bob`,`none`]),hairColors:Object.freeze([`#242024`,`#4a3121`,`#7a4b2a`,`#c9823b`,`#e8c468`,`#b8432e`,`#d8dce3`,`#4c82d4`,`#d95ca3`,`#47b0a3`]),hatStyles:Object.freeze([`none`,`cap`,`beanie`,`sunhat`,`wizard`,`crown`,`cowboy`,`headphones`,`hard_hat`,`sprout`,`party`,`beret`]),hatColors:Object.freeze([`#df5246`,`#f5b82e`,`#4c82d4`,`#47b0a3`,`#58ad52`,`#7a56b8`,`#2d323b`,`#f2eadb`,`#d9773b`,`#ec8db0`]),eyeStyles:Object.freeze([`classic`,`happy`,`wink`,`shades`,`glasses`,`visor`,`starry`]),accessories:Object.freeze([`none`,`backpack`,`cape`,`wings`,`scarf`,`bowtie`,`guitar`,`jetpack`]),accessoryColors:Object.freeze([`#d9773b`,`#df5246`,`#4c82d4`,`#f4c44e`,`#58ad52`,`#7a56b8`,`#2d323b`,`#fcfaf5`,`#47b0a3`,`#c86d49`]),topStyles:Object.freeze([`tee`,`hoodie`,`jacket`,`overalls`,`striped`,`suit`,`tunic`]),topColors:Object.freeze([`#4c82d4`,`#df5246`,`#58ad52`,`#f5b82e`,`#47b0a3`,`#7a56b8`,`#ec8438`,`#ec8db0`,`#2d323b`,`#fcfaf5`,`#2f5696`,`#be3438`]),bottomStyles:Object.freeze([`jeans`,`shorts`,`cuffed`,`skirt`,`cargo`]),bottomColors:Object.freeze([`#364d73`,`#2b303a`,`#6e553e`,`#cbb894`,`#3d6b5e`,`#5b527a`,`#8a94a0`,`#a8443a`]),shoeColors:Object.freeze([`#262930`,`#fcfaf5`,`#8f5e36`,`#df5246`,`#4c82d4`,`#f5b82e`,`#47b0a3`,`#65469c`])}),Zu=Object.freeze({none:`None`,short:`Short`,spiky:`Spiky`,parted:`Parted`,long:`Long`,ponytail:`Ponytail`,buns:`Buns`,curly:`Curly`,mohawk:`Mohawk`,bob:`Bob`,cap:`Cap`,beanie:`Beanie`,sunhat:`Sunhat`,wizard:`Wizard`,crown:`Crown`,cowboy:`Cowboy`,headphones:`Headphones`,hard_hat:`Hard Hat`,sprout:`Sprout`,party:`Party`,beret:`Beret`,classic:`Classic`,happy:`Happy`,wink:`Wink`,shades:`Shades`,glasses:`Glasses`,visor:`Visor`,starry:`Starry`,backpack:`Backpack`,cape:`Cape`,wings:`Wings`,scarf:`Scarf`,bowtie:`Bowtie`,guitar:`Guitar`,jetpack:`Jetpack`,tee:`Tee`,hoodie:`Hoodie`,jacket:`Jacket`,overalls:`Overalls`,striped:`Striped`,suit:`Suit`,tunic:`Tunic`,jeans:`Jeans`,shorts:`Shorts`,cuffed:`Cuffed`,skirt:`Skirt`,cargo:`Cargo`});function Qu(e){return typeof e==`string`?e.replace(/[\u0000-\u001f\u007f]/g,``).trim().slice(0,16):``}function $u(e,t,n=0){if(typeof e==`string`){let t=e.replace(/[\u0000-\u001f\u007f]/g,``).trim().toLowerCase();if(/^#[0-9a-f]{6}$/.test(t))return t;if(/^#[0-9a-f]{3}$/.test(t))return`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}return t[n%t.length]}function ed(e,t,n=0){return typeof e==`string`&&t.includes(e)?e:t[n%t.length]}function td(e){let t=e&&typeof e==`object`?e:{};return{name:Qu(t.name),skin:$u(t.skin,Xu.skinColors,2),hairStyle:ed(t.hairStyle,Xu.hairStyles,0),hairColor:$u(t.hairColor,Xu.hairColors,1),hatStyle:ed(t.hatStyle,Xu.hatStyles,0),hatColor:$u(t.hatColor,Xu.hatColors,0),eyeStyle:ed(t.eyeStyle,Xu.eyeStyles,0),accessory:ed(t.accessory,Xu.accessories,0),accessoryColor:$u(t.accessoryColor,Xu.accessoryColors,0),topStyle:ed(t.topStyle,Xu.topStyles,1),topColor:$u(t.topColor,Xu.topColors,0),bottomStyle:ed(t.bottomStyle,Xu.bottomStyles,0),bottomColor:$u(t.bottomColor,Xu.bottomColors,0),shoeColor:$u(t.shoeColor,Xu.shoeColors,0)}}function nd(e){return e[Math.floor(Math.random()*e.length)]}function rd(e=!0,t=``){let n=Xu.skinColors.slice(0,8),r=Xu.skinColors.slice(8),i=nd(Math.random()<.88?n:r),a=Xu.hairStyles.filter(e=>e!==`none`),o=Math.random()<.93?nd(a):`none`,s=nd(Xu.hairColors),c=Xu.hatStyles.filter(e=>e!==`none`),l=Math.random()<.34?`none`:nd(c),u=nd(Xu.hatColors),d=nd(Math.random()<.38?[`classic`,`happy`]:Xu.eyeStyles),f=Xu.accessories.filter(e=>e!==`none`),p=Math.random()<.3?`none`:nd(f),m=nd(Xu.accessoryColors),h=nd(Xu.topStyles),g=nd(Xu.topColors),_=nd(Xu.bottomStyles),v=nd(Xu.bottomColors);v===g&&h!==`suit`&&(v=Xu.bottomColors[0]===g?Xu.bottomColors[1]:Xu.bottomColors[0]);let y=nd(Xu.shoeColors);return td({name:e?Qu(t):``,skin:i,hairStyle:o,hairColor:s,hatStyle:l,hatColor:u,eyeStyle:d,accessory:p,accessoryColor:m,topStyle:h,topColor:g,bottomStyle:_,bottomColor:v,shoeColor:y})}function id(e){let t=td(e);return[t.skin,t.hairStyle,t.hairColor,t.hatStyle,t.hatColor,t.eyeStyle,t.accessory,t.accessoryColor,t.topStyle,t.topColor,t.bottomStyle,t.bottomColor,t.shoeColor].join(`|`)}function ad(e){let t=td(e);try{typeof localStorage<`u`&&localStorage.setItem(Yu,JSON.stringify(t))}catch{}return t}function od(){try{if(typeof localStorage<`u`){let e=localStorage.getItem(Yu);if(e)return td(JSON.parse(e))}}catch{}let e=rd(!1,``);return ad(e),e}function sd(e){let t=e.startsWith(`#`)?e.slice(1):e,n=parseInt(t,16);return Number.isNaN(n)?[220,210,200]:[n>>16&255,n>>8&255,n&255]}function cd(e,t,n){let r=e=>Math.max(0,Math.min(255,Math.round(e)));return`#`+(1<<24|r(e)<<16|r(t)<<8|r(n)).toString(16).slice(1)}function ld(e,t){let[n,r,i]=sd(e);return cd(n*t,r*t,i*t)}function ud(e,t,n){let[r,i,a]=sd(e),[o,s,c]=sd(t);return cd(r+(o-r)*n,i+(s-i)*n,a+(c-a)*n)}var dd=new Set([`cap`,`beanie`,`sunhat`,`wizard`,`cowboy`,`hard_hat`,`beret`]),fd=new Set([`crown`,`party`]);function pd(e){let t=new Z(311),n=e.topColor,r=ld(n,.82),i=ld(n,1.14),a=e.accessoryColor,o=ld(a,.8),s=ld(a,1.16),c=ld(e.skin,.92),l=e.bottomColor;if(t.box(-4,0,-2,4,10,3,n),t.box(-4,0,-2,4,1,3,r),e.topStyle===`tee`)t.box(-2,9,1,2,10,3,ld(n,.88)),t.box(-1,9,2,1,10,3,c);else if(e.topStyle===`hoodie`)t.box(-3,1,2,3,4,3,r),t.put(-3,3,2,n),t.put(2,3,2,n),t.box(-2,6,2,-1,9,3,`#fcfaf5`),t.box(1,6,2,2,9,3,`#fcfaf5`),t.box(-3,8,-4,3,10,-1,r),t.box(-2,9,-3,2,10,-1,i);else if(e.topStyle===`jacket`)t.box(-2,1,2,2,10,3,`#f7f3e8`),t.box(-4,0,2,-1,10,3,n),t.box(1,0,2,4,10,3,n),t.box(-2,6,2,-1,10,3,r),t.box(1,6,2,2,10,3,r),t.box(0,1,2,1,9,3,`#b4c0cc`);else if(e.topStyle===`overalls`){let e=n.toLowerCase()===l.toLowerCase()?`#fcfaf5`:n,r=ld(l,.82);t.box(-4,4,-2,4,10,3,e),t.box(-4,0,-2,4,4,3,l),t.box(-3,4,2,3,8,3,l),t.box(-2,4,2,2,6,3,r),t.box(-3,7,-2,-2,10,3,l),t.box(2,7,-2,3,10,3,l),t.box(-3,4,-3,-2,10,-2,l),t.box(2,4,-3,3,10,-2,l),t.put(-3,7,2,`#f4c44e`),t.put(2,7,2,`#f4c44e`)}else if(e.topStyle===`striped`){let e=n===`#fcfaf5`?`#2f5696`:`#fcfaf5`;for(let n=1;n<9;n+=2)t.box(-4,n,-2,4,n+1,3,e);t.box(-2,9,1,2,10,3,r)}else if(e.topStyle===`suit`){t.box(-2,3,2,2,10,3,`#fcfaf5`);let i=e.accessory===`bowtie`?a:`#be3438`;t.box(-1,3,2,1,9,3,i),t.box(-4,0,2,-2,10,3,n),t.box(2,0,2,4,10,3,n),t.box(-2,0,2,2,3,3,n),t.box(-3,5,2,-2,10,3,r),t.box(2,5,2,3,10,3,r),t.put(2,7,2,`#fcfaf5`)}else e.topStyle===`tunic`&&(t.box(-2,8,2,2,10,3,i),t.box(-1,7,2,1,10,3,c),t.box(-4,2,-3,4,4,3,`#5c3b22`),t.box(-1,2,2,1,4,3,`#f4c44e`));if(e.bottomStyle===`skirt`&&t.box(-4,-1,-2,4,1,3,l),e.accessory===`backpack`)t.box(-3,2,-6,3,9,-2,a),t.box(-3,6,-6,3,9,-2,s),t.box(-2,2,-7,2,5,-6,o),t.put(0,6,-6,`#f4c44e`),t.box(-4,4,2,-3,10,3,o),t.box(3,4,2,4,10,3,o),t.box(-4,9,-3,-3,10,3,o),t.box(3,9,-3,4,10,3,o);else if(e.accessory===`cape`)t.box(-4,9,-3,4,10,3,o),t.box(-4,3,-4,4,9,-2,a),t.box(-5,-4,-4,5,3,-2,a),t.box(-5,-4,-4,5,-3,-2,s);else if(e.accessory===`wings`){let e=`#fcfaf5`;for(let n of[-1,1]){let r=(e,t)=>n===1?[e,t]:[-t,-e];{let[n,i]=r(2,5);t.box(n,4,-4,i,9,-2,e)}{let[i,o]=r(5,8);t.box(i,5,-4,o,10,-3,a),t.box(i,3,-4,o-n,5,-3,e)}{let[e,n]=r(8,10);t.box(e,6,-4,n,11,-3,s)}}}else if(e.accessory===`scarf`)t.box(-4,8,-3,4,10,3,a),t.box(-4,9,-3,4,10,3,s),t.box(1,3,2,3,9,3,a),t.box(1,3,2,3,4,3,s);else if(e.accessory===`bowtie`)t.box(-3,8,2,-1,10,3,a),t.box(1,8,2,3,10,3,a),t.box(-1,8,2,1,9,3,o);else if(e.accessory===`guitar`){for(let e=0;e<7;e++)t.box(-3+e,3+e,2,-2+e,4+e,3,`#4a3121`);t.roundedBox(-4,1,-5,2,7,-2,1.2,a),t.box(-2,3,-5,0,5,-4,`#1e2026`),t.box(-1,6,-4,1,9,-3,`#c9935b`),t.box(0,8,-4,3,11,-3,`#8f5e36`),t.box(1,10,-4,3,12,-3,o)}else e.accessory===`jetpack`&&(t.box(-4,3,-6,-1,9,-2,a),t.box(1,3,-6,4,9,-2,a),t.box(-1,4,-5,1,8,-2,`#b4c0cc`),t.box(-4,7,-6,-1,8,-2,`#d8e2eb`),t.box(1,7,-6,4,8,-2,`#d8e2eb`),t.box(-3,2,-5,-2,3,-3,`#3b4048`),t.box(2,2,-5,3,3,-3,`#3b4048`),t.box(-3,1,-5,-2,2,-3,`#ff7426`,1.25),t.box(2,1,-5,3,2,-3,`#ff7426`,1.25),t.box(-4,4,2,-3,10,3,`#3b4048`),t.box(3,4,2,4,10,3,`#3b4048`));return t}function md(e){let t=new Z(419),n=e.skin,[r,i,a]=sd(n),o=(.2126*r+.7152*i+.0722*a)/255,s=ud(n,`#e86e62`,o<.36?.28:.22),c=e.hairColor,l=ld(c,1.14),u=ld(c,.82),d=e.hatColor,f=ld(d,.8),p=ld(d,1.16);t.box(-2,-1,-2,2,0,1,ld(n,.92)),t.box(-4,0,-4,4,8,4,n),t.box(-5,2,-1,-4,5,1,s),t.box(4,2,-1,5,5,1,s);let m=dd.has(e.hatStyle),h=fd.has(e.hatStyle),g=e.hatStyle===`headphones`;if(e.hairStyle!==`none`){let n=m?7:9;e.hairStyle===`mohawk`?(t.box(-1,3,-5,1,8,-4,c),t.box(-1,7,-4,1,n,4,c),m||t.box(-1,7,3,1,9,5,l),m||h||g||(t.box(-1,8,-4,1,12,4,c),t.box(-1,11,-3,1,13,3,l))):(t.box(-4,6,-5,4,n,2,c),t.box(-4,7,2,4,n,4,c),t.box(-5,4,-4,-4,n-1,2,c),t.box(4,4,-4,5,n-1,2,c),t.box(-4,2,-5,4,6,-4,u),e.hairStyle===`short`?m||(t.box(-4,8,-4,4,9,4,l),t.box(-3,7,3,3,8,5,c)):e.hairStyle===`spiky`?(m||(t.box(-4,7,3,4,8,5,c),t.put(-3,7,5,l),t.put(1,7,5,l)),!m&&!h&&(t.box(-3,8,-3,3,10,3,c),t.box(-3,10,1,-1,11,3,l),t.box(1,10,-1,3,11,2,l),t.box(-1,10,-3,1,11,-1,l))):e.hairStyle===`parted`?m||(t.box(-4,7,3,1,9,5,l),t.box(2,7,3,4,8,5,c),t.box(-4,8,-4,2,10,4,l),t.box(2,8,-4,4,9,4,c)):e.hairStyle===`long`?(t.box(-4,-3,-5,4,6,-4,c),t.box(-5,-2,-4,-4,6,3,c),t.box(4,-2,-4,5,6,3,c),t.box(-5,-1,1,-4,6,3,l),t.box(4,-1,1,5,6,3,l),m||(t.box(-4,7,3,4,8,5,c),t.box(-4,8,-4,4,10,4,l))):e.hairStyle===`ponytail`?m?(t.box(-1,3,-6,1,5,-4,d),t.box(-2,-1,-7,2,4,-5,c),t.box(-1,-2,-7,1,0,-5,l)):(t.box(-3,7,3,3,8,5,c),t.box(-4,8,-4,4,9,4,l),t.box(-1,6,-6,1,8,-4,d),t.box(-2,1,-7,2,8,-5,c),t.box(-1,0,-7,1,2,-5,l)):e.hairStyle===`buns`?m||g?(t.box(-6,1,-4,-4,4,-1,l),t.box(4,1,-4,6,4,-1,l)):(t.box(-3,7,3,3,8,5,c),t.box(-4,8,-4,4,9,4,c),t.box(-6,7,-2,-3,11,1,l),t.box(3,7,-2,6,11,1,l)):e.hairStyle===`curly`?(t.box(-5,3,-5,5,7,-3,c),t.box(-5,4,-3,-4,7,3,l),t.box(4,4,-3,5,7,3,l),m||(t.box(-4,7,3,4,8,5,c),t.box(-5,7,-5,5,10,4,c),t.box(-4,10,-4,4,11,3,l))):e.hairStyle===`bob`&&(t.box(-5,1,-4,-4,7,3,c),t.box(4,1,-4,5,7,3,c),t.box(-4,1,-5,4,7,-4,u),m||(t.box(-4,7,3,4,8,5,l),t.box(-4,8,-4,4,10,4,l))))}if(e.hatStyle===`cap`)t.box(-4,7,-4,4,10,4,d),t.box(-3,10,-3,3,11,3,p),t.box(-4,7,4,4,8,7,f),t.box(-1,8,4,1,9,5,`#fcfaf5`);else if(e.hatStyle===`beanie`)t.box(-5,7,-5,5,9,5,f),t.box(-4,9,-4,4,11,4,d),t.box(-1,11,-1,1,13,1,`#fcfaf5`);else if(e.hatStyle===`sunhat`)t.cylinderAxis(`y`,0,0,7,8,7.2,`#ead39c`),t.cylinderAxis(`y`,0,0,8,10,4.4,`#deb07c`),t.cylinderAxis(`y`,0,0,8,9,4.6,d),t.cylinderAxis(`y`,0,0,10,11,3.8,`#ead39c`);else if(e.hatStyle===`wizard`)t.cylinderAxis(`y`,0,0,7,8,6.8,f),t.cylinderAxis(`y`,0,0,8,9,4.5,`#f4c44e`),t.cone(0,9,16,0,4.2,.7,d),t.box(-1,15,-2,1,17,0,p);else if(e.hatStyle===`crown`){let e=`#f4c44e`,n=`#c79428`;t.box(-4,8,-4,4,10,4,e),t.clear(-3,9,-3,3,12,3);for(let n of[-4,-1,3])t.put(n,10,3,e),t.put(n,10,-4,e);for(let n of[-2,1])t.put(-4,10,n,e),t.put(3,10,n,e);t.box(-1,8,4,1,10,5,d),t.put(-3,9,4,n),t.put(2,9,4,n)}else if(e.hatStyle===`cowboy`)t.box(-7,7,-6,7,8,6,d),t.box(-7,8,-5,-6,9,5,p),t.box(6,8,-5,7,9,5,p),t.box(-4,8,-4,4,9,4,`#4a3121`),t.box(-4,9,-4,4,11,4,d),t.box(-4,11,-3,-1,12,3,p),t.box(1,11,-3,4,12,3,p);else if(e.hatStyle===`headphones`)t.box(-5,8,-1,5,10,1,`#2d323b`),t.box(-6,4,-1,-5,9,1,`#2d323b`),t.box(5,4,-1,6,9,1,`#2d323b`),t.box(-7,1,-2,-5,6,2,d),t.box(5,1,-2,7,6,2,d),t.box(-7,2,-1,-6,5,1,p),t.box(6,2,-1,7,5,1,p);else if(e.hatStyle===`hard_hat`)t.box(-5,7,-5,5,9,5,d),t.box(-4,9,-4,4,11,4,p),t.box(-1,9,-4,1,12,5,d),t.box(-4,7,5,4,8,6,f),t.box(-1,8,4,1,10,6,`#ffe29a`,.9);else if(e.hatStyle===`sprout`){let n=e.hairStyle===`none`?8:9;t.box(0,n,0,1,n+4,1,`#3e853b`),t.box(1,n+3,0,4,n+5,1,`#78c86c`),t.box(-3,n+2,0,0,n+4,1,`#58ad52`)}else e.hatStyle===`party`?(t.cone(0,8,15,0,3.2,.6,d),t.put(1,10,2,`#fcfaf5`),t.put(-2,11,1,`#f6d55c`),t.put(0,12,-2,`#fcfaf5`),t.box(-1,15,-1,1,17,1,`#f6d55c`)):e.hatStyle===`beret`&&(t.box(-4,7,-4,4,8,4,f),t.box(-5,8,-4,4,10,4,d),t.box(-4,10,-3,2,11,3,p),t.put(-1,11,0,f));let _=`#12141c`,v=`#ffffff`,y=o<.34?`#100a0e`:`#26141a`,b=`#e25d5d`,x=e.hairStyle===`none`?ld(n,.52):ld(c,.76),[S,C,w]=sd(x),T=(.2126*S+.7152*C+.0722*w)/255,E=Math.abs(T-o)<.14?o<.35?`#14161e`:ld(x,.62):x;if(t.put(-4,3,3,s),t.put(3,3,3,s),e.eyeStyle===`classic`){t.box(-3,6,3,-1,7,4,E),t.box(1,6,3,3,7,4,E),t.box(-3,4,3,-2,6,4,v),t.box(-2,4,3,-1,6,4,_),t.box(1,4,3,2,6,4,_),t.box(2,4,3,3,6,4,v);let e=o<.34?`#181015`:ud(n,y,.72);t.box(-2,1,3,2,2,4,y),t.put(-3,2,3,e),t.put(2,2,3,e),o<.34&&t.box(-1,1,3,1,2,4,b)}else if(e.eyeStyle===`happy`){let e=o<.34?`#0b0d13`:_;if(o<.36){let e=ld(n,1.36);t.box(-3,6,3,-1,7,4,e),t.box(1,6,3,3,7,4,e)}t.box(-3,5,3,-1,6,4,e),t.put(-4,4,3,e),t.put(-1,4,3,ud(n,e,.55)),t.box(1,5,3,3,6,4,e),t.put(0,4,3,ud(n,e,.55)),t.put(3,4,3,e),t.box(-2,2,3,2,3,4,v),t.box(-2,1,3,2,2,4,y),t.box(-1,1,3,1,2,4,b)}else if(e.eyeStyle===`wink`)t.box(-3,6,3,-1,7,4,E),t.box(-3,4,3,-1,5,4,_),t.put(-3,5,3,_),t.box(1,6,3,3,7,4,E),t.box(1,4,3,2,6,4,_),t.box(2,4,3,3,6,4,v),t.box(-2,1,3,2,2,4,y),t.put(1,2,3,v),t.put(2,2,3,y);else if(e.eyeStyle===`shades`)t.box(-4,5,4,4,6,5,`#15171d`),t.box(-4,4,4,-1,6,5,`#232730`),t.box(1,4,4,4,6,5,`#232730`),t.put(-3,5,4,`#6fb7f0`),t.put(2,5,4,`#6fb7f0`),t.box(-5,5,0,-4,6,5,`#15171d`),t.box(4,5,0,5,6,5,`#15171d`),t.box(-2,1,3,2,2,4,y),t.put(1,2,3,v),t.put(2,2,3,y);else if(e.eyeStyle===`glasses`){t.box(-3,4,3,-2,6,4,v),t.box(-2,4,3,-1,6,4,_),t.box(1,4,3,2,6,4,_),t.box(2,4,3,3,6,4,v);let e=`#2c313b`;t.box(-4,6,4,-1,7,5,e),t.box(1,6,4,4,7,5,e),t.box(-1,5,4,1,6,5,e),t.box(-4,4,4,-3,6,5,e),t.box(3,4,4,4,6,5,e),t.box(-5,5,0,-4,6,5,e),t.box(4,5,0,5,6,5,e);let r=o<.34?`#181015`:ud(n,y,.72);t.box(-2,1,3,2,2,4,y),t.put(-3,2,3,r),t.put(2,2,3,r),o<.34&&t.box(-1,1,3,1,2,4,b)}else e.eyeStyle===`visor`?(t.box(-5,4,2,5,6,5,`#232730`),t.box(-4,4,4,4,6,5,`#5ce6db`,1.15),t.box(-3,5,4,2,6,5,`#ffffff`,1.25),t.box(-2,1,3,2,2,4,y),t.box(-1,2,3,1,3,4,v),t.put(-2,2,3,y),t.put(1,2,3,y)):e.eyeStyle===`starry`&&(t.box(-3,6,3,-1,7,4,E),t.box(1,6,3,3,7,4,E),t.box(-3,4,3,-1,6,4,`#1b1f33`),t.box(1,4,3,3,6,4,`#1b1f33`),t.put(-2,5,3,`#f6d55c`,.9),t.put(-3,4,3,v,.85),t.put(1,5,3,`#f6d55c`,.9),t.put(2,4,3,v,.85),t.box(-2,2,3,2,3,4,v),t.box(-2,1,3,2,2,4,y),t.box(-1,1,3,1,2,4,b));return t}function hd(e,t){let n=new Z(t?503:509),r=e.topColor,i=ld(r,.84),a=e.skin,o=t?-1:-2,s=t?2:1;if(e.topStyle===`tee`||e.topStyle===`overalls`){let t=e.topStyle===`overalls`&&r.toLowerCase()===e.bottomColor.toLowerCase()?`#fcfaf5`:r;n.box(o,-4,-1,s,1,2,t),n.box(o,-8,-1,s,-4,2,a)}else if(e.topStyle===`striped`){let e=r===`#fcfaf5`?`#2f5696`:`#fcfaf5`;n.box(o,-5,-1,s,1,2,r),n.box(o,-4,-1,s,-3,2,e),n.box(o,-2,-1,s,-1,2,e),n.box(o,-8,-1,s,-5,2,a)}else e.topStyle===`suit`?(n.box(o,-5,-1,s,1,2,r),n.box(o,-6,-1,s,-5,2,`#fcfaf5`),n.box(o,-8,-1,s,-6,2,a)):(e.topStyle,n.box(o,-5,-1,s,1,2,r),n.box(o,-6,-1,s,-5,2,i),n.box(o,-8,-1,s,-6,2,a));return n}function gd(e,t){let n=new Z(t?607:613),r=e.bottomColor,i=ld(r,.84),a=ld(r,1.18),o=e.shoeColor,s=o===`#fcfaf5`?`#2d323b`:`#f2eadb`;return e.bottomStyle===`shorts`?(n.box(-1,-3,-2,2,0,2,r),n.box(-1,-5,-1,2,-3,2,e.skin),n.box(-1,-6,-1,2,-5,2,`#fcfaf5`)):e.bottomStyle===`skirt`?(n.box(-2,-3,-2,3,0,3,r),n.box(-1,-6,-1,2,-3,2,e.skin)):e.bottomStyle===`cuffed`?(n.box(-1,-4,-2,2,0,2,r),n.box(-1,-6,-2,2,-4,2,a)):e.bottomStyle===`cargo`?(n.box(-1,-6,-2,2,0,2,r),t?n.box(2,-4,-1,3,-1,1,i):n.box(-2,-4,-1,-1,-1,1,i)):(n.box(-1,-6,-2,2,0,2,r),n.box(-1,-1,-2,2,0,2,i)),n.box(-1,-7,-2,2,-5,3,o),n.put(0,-6,2,`#fcfaf5`),n.box(-1,-8,-2,2,-7,4,s),n}function _d(e){for(e.traverse(e=>{e.isMesh&&e.geometry&&e.geometry.dispose()});e.children.length>0;)e.remove(e.children[0])}function vd(e,t={}){let{isLocalPlayer:n=!1,scale:r=.145,castShadow:i=!0}=t,a=r,o=a*.5,s=new bn;s.name=n?`local-avatar-rig`:`remote-avatar-rig`;let c=new bn;c.name=`bodyPivot`,s.add(c);let l=new bn;l.name=`torsoPivot`,l.position.set(0,4*a,0),c.add(l);let u=new bn;u.name=`headPivot`,u.position.set(0,9.2*a,0),c.add(u);let d=new bn;d.name=`leftArm`,d.position.set(2.35*a,8.7*a,0),c.add(d);let f=new bn;f.name=`rightArm`,f.position.set(-2.35*a,8.7*a,0),c.add(f);let p=new bn;p.name=`leftLeg`,p.position.set(1.12*a,4.1*a,0),c.add(p);let m=new bn;m.name=`rightLeg`,m.position.set(-1.12*a,4.1*a,0),c.add(m);let h=td(e),g=``,_=!1,v=0,y=0,b=0,x=0,S=0,C=0,w=0,T=0,E=0,D=0;function O(e){_d(l),_d(u),_d(d),_d(f),_d(p),_d(m);let t=!!(i&&n),r=Q(pd(e),{scale:o,depthLayer:0,castShadow:!!i});r.position.set(0,0,-.25*a),l.add(r);let s=Q(md(e),{scale:o,depthLayer:1,castShadow:!!i});u.add(s);let c=Q(hd(e,!0),{scale:o,depthLayer:3,castShadow:t});c.position.set(.18*a,0,-.25*a),d.add(c);let h=Q(hd(e,!1),{scale:o,depthLayer:3,castShadow:t});h.position.set(-.18*a,0,-.25*a),f.add(h);let g=Q(gd(e,!0),{scale:o,depthLayer:2,castShadow:t});g.position.set(-.25*a,-.1*a,0),p.add(g);let _=Q(gd(e,!1),{scale:o,depthLayer:2,castShadow:t});_.position.set(-.25*a,-.1*a,0),m.add(_)}function k(e){let t=td(e);h=t;let n=id(t);return n!==g&&(g=n,O(t)),t}function A(e){_=!!e,u.visible=!_;let t=_?a/.145*.05:0;p.position.z=t,m.position.z=t,_?c.position.set(0,-.05+y,-.22):c.position.set(0,y,0)}function j({dt:e=.016,t=0,yaw:n=0,pitch:r=0,speed:i=0,anim:o=`idle`,jumpY:h=0,waveTimer:g=0,isFirstPerson:O}={}){let k=Math.max(5e-4,Math.min(.1,Number(e)||.016));typeof O==`boolean`&&O!==_&&A(O),s.rotation.y=(Number(n)||0)+Math.PI,_?u.rotation.x=0:u.rotation.x=Math.max(-.55,Math.min(.55,-(Number(r)||0)*.65));let j=o===`sit`||o===`ride`,M=!j&&(o===`jump`||h>.03),N=g>0||o===`wave`,P=j?0:Math.max(0,Number(i)||(o===`run`?8.2:o===`walk`?4.6:0)),F=Math.min(1.35,P/5.4),I=!j&&(o===`run`||P>6.4);F>.04&&!M&&(v+=k*(6.8+P*.85));let L=0,R=0,ee=0,te=0,z=0,ne=.04,re=0,B=0,V=-.04;if(j)L=-1.15*a,ee=-1.35,te=-1.35,z=-.42,re=-.42,ne=.06,V=-.06;else if(M)L=.02,R=.06,ee=-.58,te=.34,_?(z=-1.08,re=-1.08,ne=.14,V=-.14):(z=-.95,re=-.95,ne=.22,V=-.22);else if(F>.04){let e=(I?.86:.64)*Math.min(1.15,F),t=Math.sin(v);ee=t*e,te=-t*e;let n=-t*e*(I?.96:.82),r=_&&I?-.44:_?-.14:0;z=n+r,re=-n+r,ne=.06,V=-.06,R=I?.09:.03*F,L=_?0:Math.abs(Math.cos(v))*.055*Math.min(1,F)}else{let e=Math.sin(t*2.1);L=_?0:e*.008,ne=.05+e*.02,V=-.05-e*.02,z=Math.sin(t*1.4)*.025,re=-Math.sin(t*1.4)*.025}if(N){let e=Math.sin(t*11.5);_?(re=-1.92-Math.max(-.45,Math.min(.45,Number(r)||0))*.65+Math.cos(t*11.5)*.06,B=.28+e*.22,V=-.08+e*.22):(re=-2.55,V=-.3+e*.32)}let ie=1-Math.exp(-k*17);y+=(L-y)*ie,b+=(R-b)*ie,x+=(ee-x)*ie,S+=(te-S)*ie,C+=(z-C)*ie,w+=(ne-w)*ie,T+=(re-T)*ie,E+=(B-E)*ie,D+=(V-D)*ie,l.rotation.x=b,p.rotation.x=x,m.rotation.x=S,d.rotation.set(C,0,w),f.rotation.set(T,E,D);let ae=_?a/.145*.05:0;p.position.z=ae,m.position.z=ae,_?c.position.set(0,-.05+y,-.22):c.position.set(0,y,0)}function M(){_d(l),_d(u),_d(d),_d(f),_d(p),_d(m)}return k(h),s.userData.dispose=M,{root:s,bodyPivot:c,torsoPivot:l,headPivot:u,leftArm:d,rightArm:f,leftLeg:p,rightLeg:m,getAppearance:()=>({...h}),setAppearance:k,setFirstPersonMode:A,applyPose:j,dispose:M}}function yd(e){let t=e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function bd(e,t,n){return e+yd(t-e)*n}function xd(e,t,n,r,i,a){let o=Math.min(a,r*.5,i*.5);e.beginPath(),e.moveTo(t+o,n),e.arcTo(t+r,n,t+r,n+i,o),e.arcTo(t+r,n+i,t,n+i,o),e.arcTo(t,n+i,t,n,o),e.arcTo(t,n,t+r,n,o),e.closePath()}function Sd(e){if(typeof document>`u`)return null;let t=document.createElement(`canvas`);t.width=160,t.height=56;let n=t.getContext(`2d`),r=`600 28px -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif`,i=null,a=new Nr({transparent:!0,depthTest:!0,depthWrite:!1}),s=new qr(a);s.center.set(.5,0),s.raycast=()=>{};function c(e){let c=Qu(e),l=c||`Explorer`,u=!!c;n.font=r;let d=Math.ceil(n.measureText(l).width),f=Math.min(340,Math.max(92,d+22+44)),p=Math.ceil(f+6),m=t.width!==p||t.height!==56||!i;t.width!==p&&(t.width=p),t.height!==56&&(t.height=56),n.clearRect(0,0,t.width,t.height),xd(n,3,3,f,50,25),n.fillStyle=u?`rgba(18, 24, 20, 0.82)`:`rgba(18, 24, 20, 0.68)`,n.fill(),n.lineWidth=2,n.strokeStyle=`rgba(255, 255, 255, 0.24)`,n.stroke(),n.beginPath(),n.arc(30,28,5.5,0,Math.PI*2),n.fillStyle=`#3fb963`,n.fill(),n.font=r,n.fillStyle=u?`#ffffff`:`rgba(255, 255, 255, 0.88)`,n.textBaseline=`middle`,n.textAlign=`left`,n.fillText(l,44,29),m?(i&&i.dispose(),i=new Ai(t),i.colorSpace=Ae,i.minFilter=o,i.magFilter=o,a.map=i,a.needsUpdate=!0):i.needsUpdate=!0;let h=.22,g=h*(t.width/t.height);s.scale.set(g,h,1)}let l=null;return s.userData.setLabel=e=>{let t=Qu(e);t!==l&&(l=t,c(t))},s.userData.dispose=()=>{i&&=(i.dispose(),null),a.dispose()},s.userData.setLabel(e),s}function Cd(e,t=.145){let n=t/.145,r=e?.hatStyle||`none`,i=e?.hairStyle||`short`;return r===`wizard`||r===`party`?2.76*n:r===`sprout`||r===`crown`||r===`cowboy`||r===`sunhat`||r===`hard_hat`||r===`beanie`||r===`beret`||r===`none`&&(i===`mohawk`||i===`buns`||i===`spiky`||i===`curly`)?2.58*n:2.44*n}var wd=class{constructor(e={}){this.options=e,this.group=new bn,this.group.name=`remote-player-group`,this.peers=new Map}upsertPeer(e){if(!e||!e.id)return null;let t=String(e.id),n=this.peers.get(t),r=Qu(e.name??e.appearance?.name??``),i=td({...e.appearance||{},name:r}),a=Number.isFinite(e.x)?Number(e.x):0,o=Number.isFinite(e.y)?Number(e.y):0,s=Number.isFinite(e.z)?Number(e.z):0,c=Number.isFinite(e.yaw)?Number(e.yaw):0,l=Number.isFinite(e.pitch)?Number(e.pitch):0,u=Number.isFinite(e.vx)?Number(e.vx):0,d=Number.isFinite(e.vz)?Number(e.vz):0;if(!n){let f=this.options.scale??.145,p=vd(i,{isLocalPlayer:!1,scale:f,castShadow:!0}),m=Sd(r);return m&&(m.position.set(0,Cd(i,f),0),p.root.add(m)),n={id:t,scale:f,name:r,appearance:i,rig:p,nameplate:m,mode:e.mode===`aerial`?`aerial`:`walk`,tx:a,ty:o,tz:s,tyaw:c,tpitch:l,vx:u,vz:d,anim:typeof e.anim==`string`?e.anim:`idle`,ride:e.ride||null,seat:Number.isInteger(e.seat)?e.seat:0,room:e.room||null,curX:a,curY:o,curZ:s,curYaw:c,curPitch:l,packetAge:0,waveTimer:0,emoteJumpY:0,emoteJumpVy:0,needsSnap:!0,phaseOffset:this.peers.size*1.618%(Math.PI*2)},p.root.position.set(a,o,s),this.group.add(p.root),this.peers.set(t,n),n}return(e.appearance||typeof e.name==`string`)&&this.updatePeerProfile(t,r,i),this.updatePeerPose(e),n}updatePeerPose(e){if(!e||!e.id)return;let t=String(e.id),n=this.peers.get(t);if(!n){this.upsertPeer(e);return}let r=e.room||null,i=e.ride||null,a=e.mode===`aerial`?`aerial`:`walk`,o=Number.isFinite(e.x)?Number(e.x):n.tx,s=Number.isFinite(e.y)?Number(e.y):n.ty,c=Number.isFinite(e.z)?Number(e.z):n.tz,l=Math.hypot(o-n.tx,c-n.tz)>18;(r!==n.room||i!==n.ride||a!==n.mode||l)&&(n.needsSnap=!0),n.mode=a,n.tx=o,n.ty=s,n.tz=c,Number.isFinite(e.yaw)&&(n.tyaw=Number(e.yaw)),Number.isFinite(e.pitch)&&(n.tpitch=Number(e.pitch)),n.vx=Number.isFinite(e.vx)?Number(e.vx):0,n.vz=Number.isFinite(e.vz)?Number(e.vz):0,typeof e.anim==`string`&&(n.anim=e.anim),n.ride=i,n.seat=Number.isInteger(e.seat)?e.seat:0,n.room=r,n.packetAge=0,n.anim===`wave`&&n.waveTimer<=.1&&(n.waveTimer=.35)}updatePeerProfile(e,t,n){let r=e&&typeof e==`object`,i=String(r?e.id:e||``);if(!i)return;let a=r?e.name:t,o=r?e.appearance:n,s=this.peers.get(i);s?(typeof a==`string`&&(s.name=Qu(a),s.nameplate?.userData?.setLabel?.(s.name)),o&&typeof o==`object`&&(s.appearance=s.rig.setAppearance({...s.appearance,...o,name:s.name}),s.nameplate&&(s.nameplate.position.y=Cd(s.appearance,s.scale??this.options.scale??.145)))):this.upsertPeer({id:i,name:a,appearance:o})}triggerPeerEmote(e,t){let n=e&&typeof e==`object`,r=String(n?e.id:e||``),i=n?e.kind:t,a=this.peers.get(r);a&&(i===`wave`?a.waveTimer=2.2:i===`jump`?(a.emoteJumpVy=5.4,a.emoteJumpY=Math.max(a.emoteJumpY,.02)):i===`cheer`&&(a.waveTimer=2.4,a.emoteJumpVy=5,a.emoteJumpY=Math.max(a.emoteJumpY,.02)))}removePeer(e){let t=String(e&&typeof e==`object`?e.id:e||``),n=this.peers.get(t);n&&(n.nameplate&&(n.rig.root.remove(n.nameplate),n.nameplate.userData?.dispose?.()),this.group.remove(n.rig.root),n.rig.dispose(),this.peers.delete(t))}clear(){for(let e of Array.from(this.peers.keys()))this.removePeer(e)}getPeerCount(){return this.peers.size}step(e=.016,t=0,n={}){let r=Math.max(5e-4,Math.min(.1,Number(e)||.016)),i=n.localRoomId||null,a=n.interiorOrigin||{x:0,y:520,z:0},o=n.resolveRidePose||null,s=n.getGroundHeight||null;for(let e of this.peers.values()){if(e.packetAge=Math.min(2,e.packetAge+r),e.waveTimer=Math.max(0,e.waveTimer-r),(e.emoteJumpY>0||e.emoteJumpVy>0)&&(e.emoteJumpY+=e.emoteJumpVy*r,e.emoteJumpVy-=15.5*r,e.emoteJumpY<=0&&(e.emoteJumpY=0,e.emoteJumpVy=0)),e.room){let t=i===e.room;if(e.rig.root.visible=t,!t)continue}else{let t=i===null;if(e.rig.root.visible=t,!t)continue}if(!e.room&&e.ride&&typeof o==`function`){let n=o(e.ride,e.seat||0);if(n&&Number.isFinite(n.x)&&Number.isFinite(n.z)){let i=Number.isFinite(n.y)?n.y:.45,a=e.needsSnap?1:1-Math.exp(-r*28);e.curX+=(n.x-e.curX)*a,e.curY+=(i-e.curY)*a,e.curZ+=(n.z-e.curZ)*a;let o=Number.isFinite(e.tyaw)?e.tyaw:n.yaw||0;e.curYaw=e.needsSnap?o:bd(e.curYaw,o,1-Math.exp(-r*18)),e.curPitch+=(e.tpitch-e.curPitch)*(1-Math.exp(-r*16)),e.needsSnap=!1,e.rig.root.position.set(e.curX,e.curY,e.curZ),e.rig.applyPose({dt:r,t:t+e.phaseOffset,yaw:e.curYaw,pitch:e.curPitch,speed:0,anim:`ride`,jumpY:0,waveTimer:e.waveTimer,isFirstPerson:!1});continue}}let n=Math.min(.14,e.packetAge)*Math.exp(-e.packetAge*2.4),c=e.tx+e.vx*n,l=e.ty,u=e.tz+e.vz*n;if(e.room)Math.abs(l-a.y)>40&&(c+=a.x,l+=a.y,u+=a.z);else if(typeof s==`function`){let t=s(c,u);e.mode===`aerial`?l=t:e.anim!==`sit`&&e.anim!==`ride`&&(l=Math.max(t,l))}let d=e.curX,f=e.curZ;if(e.needsSnap)e.curX=c,e.curY=l,e.curZ=u,e.curYaw=e.tyaw,e.curPitch=e.tpitch,e.needsSnap=!1;else{let t=1-Math.exp(-r*15),n=1-Math.exp(-r*16);e.curX+=(c-e.curX)*t,e.curY+=(l-e.curY)*t,e.curZ+=(u-e.curZ)*t,e.curYaw=bd(e.curYaw,e.tyaw,n),e.curPitch+=(e.tpitch-e.curPitch)*n}let p=Math.hypot(e.curX-d,e.curZ-f)/r,m=Math.hypot(e.vx,e.vz),h=e.mode===`aerial`?0:Math.max(p*.7+m*.3,0),g=e.mode===`aerial`?`idle`:e.anim;e.emoteJumpY>.03&&g!==`sit`&&g!==`ride`?g=`jump`:g!==`sit`&&g!==`ride`&&g!==`jump`&&(h>6.5?g=`run`:h>.35?g=`walk`:(g===`walk`||g===`run`)&&(g=`idle`)),e.rig.root.position.set(e.curX,e.curY+e.emoteJumpY,e.curZ),e.rig.applyPose({dt:r,t:t+e.phaseOffset,yaw:e.curYaw,pitch:e.curPitch,speed:h,anim:g,jumpY:Math.max(0,e.emoteJumpY),waveTimer:e.waveTimer,isFirstPerson:!1})}}dispose(){this.clear()}},Td=null;function Ed(){if(typeof window>`u`)return null;let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;if(!Td)try{Td=new e}catch{return null}return Td.state===`suspended`&&Td.resume().catch(()=>{}),Td}function Dd(e=440,t=.14,n=`triangle`,r=.075,i=0){if(Td&&Td.state===`running`)try{let a=Td.currentTime+i,o=Td.createOscillator(),s=Td.createGain();o.type=n,o.frequency.setValueAtTime(Math.max(40,e),a),s.gain.setValueAtTime(1e-4,a),s.gain.exponentialRampToValueAtTime(r,a+.012),s.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(s),s.connect(Td.destination),o.start(a),o.stop(a+t+.02)}catch{}}function Od(e,t=.075,n=.18,r=`triangle`,i=.07){e.forEach((e,a)=>Dd(e,n,r,i,a*t))}function kd(e=.16,t=.055,n=0){if(Td&&Td.state===`running`)try{let r=Td.sampleRate,i=Math.max(256,Math.floor(r*e)),a=Td.createBuffer(1,i,r),o=a.getChannelData(0);for(let e=0;e<i;e++)o[e]=(Math.random()*2-1)*Math.exp(-e/i*3.2);let s=Td.createBufferSource();s.buffer=a;let c=Td.createGain(),l=Td.currentTime+n;c.gain.setValueAtTime(t,l),c.gain.exponentialRampToValueAtTime(1e-4,l+e),s.connect(c),c.connect(Td.destination),s.start(l)}catch{}}var Ad=new ei({color:16777215,transparent:!0,opacity:0,depthWrite:!1});function jd(e,t,n,r,i){let a=new fi(new Pi(e,t,n),Ad);return a.layers.set(2),a.userData={creationId:r,interactiveAction:i},a}function Md(e=.54,t=`#ffe57f`){let n=.065,r=Math.max(2,Math.round(e*.5/n)),i=new Z(901);for(let e of[-1,1])for(let n of[-1,1]){let a=e>0?r-1:-r,o=n>0?r-1:-r;i.put(a,0,o,t,1.5),i.put(a-e,0,o,t,1.3),i.put(a,0,o-n,t,1.3)}return Q(i,{scale:n,castShadow:!1,depthLayer:5})}function Nd(e,t=6){let n=e.userData?.hasCenterVox,r=e.userData?.voxScale||.23,i=e.userData?.baseBounds||{minX:-6,maxX:6,minY:0,maxY:8,minZ:-6,maxZ:6};if(typeof n!=`function`)return{onCenterTop:!1,yMeters:.01,frontZMeters:1.8,maxYMeters:2,voxScale:r,bounds:i};let a=0,o=0,s=1/0,c=!1;for(let e=-3;e<=3;e++)for(let r=-3;r<=3;r++){let l=-1;for(let i=0;i<=t;i++)n(e,i,r)&&(l=i+1);for(let a=t+1;a<=Math.min(64,i.maxY+1);a++)if(n(e,a,r)){c=!0;break}l>0&&(a++,l>o&&(o=l),l<s&&(s=l))}let l=!c&&a>=28&&o>=1&&o<=t&&o-s<=2;return{onCenterTop:l,yMeters:l?o*r+.006:.008,frontZMeters:Math.max(.9,i.maxZ*r),maxYMeters:Math.max(1.2,i.maxY*r),voxScale:r,bounds:i}}function Pd(e,t,n=3,r=`limestone`,i=`woodDark`){let a=.11,o=Math.max(4,Math.round(e/a)),s=Math.max(4,Math.round(t/a)),c=new Z(913);return c.box(-o,0,-s,o,Math.max(1,n-1),s,i),c.box(-o-1,Math.max(1,n-1),-s-1,o+1,n,s+1,r),{mesh:Q(c,{scale:a,depthLayer:2}),topY:n*a+.005}}function Fd(e,t=1.2){let n=new Z(919);return n.box(-1,0,-1,1,2,1,e,t),Q(n,{scale:.055,depthLayer:4})}async function Id(e,t){let n=new Promise(e=>setTimeout(e,260));if(typeof fetch!=`function`||typeof window>`u`)return await n,{move:t[Math.floor(t.length/2)]??t[0]??-1,quip:``,modelUsed:`offline`};try{let[r]=await Promise.all([fetch(`/api/minigame-move`,{method:`POST`,headers:{"content-type":`application/json`,"x-meadow-client":`1`,...typeof window.__geminIslandVisitorHeaders==`function`?window.__geminIslandVisitorHeaders():{}},body:JSON.stringify(e)}),n]);if(r.ok){let e=await r.json();if(e?.ok&&t.includes(e.move))return{move:e.move,quip:typeof e.quip==`string`?e.quip.trim():``,modelUsed:e.modelUsed||`gemini-flash-lite`}}}catch{}return{move:t[Math.floor(t.length/2)]??t[0]??-1,quip:``,modelUsed:`fallback`}}var Ld=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function Rd(e){for(let t of Ld){let[n,r,i]=t;if(e[n]!==0&&e[n]===e[r]&&e[n]===e[i])return{winner:e[n],line:t}}return e.every(e=>e!==0)?{winner:3,line:null}:null}function zd(e,t,n){let r=new bn;t.add(r);let i=Nd(t,6),a=.56,o=i.yMeters,s=0;if(!i.onCenterTop){let e=Pd(1.08,1.08,3,`limestone`,`woodDark`);r.position.set(0,0,i.frontZMeters+1.28),r.add(e.mesh),o=e.topY,s=i.frontZMeters+2.4}let c=.056,l=new Z(931);l.box(-16,0,-16,16,1,16,`#2f3440`);for(let e of[-5,5])l.box(e-1,1,-15,e+1,2,15,`brass`,.15),l.box(-15,1,e-1,15,2,e+1,`brass`,.15);let u=Q(l,{scale:c,depthLayer:3});u.position.y=o,r.add(u);let d=o+2*c+.004,f=(e,t)=>{let n=new Z(937);for(let r=-3;r<=3;r++)n.box(r,0,r,r+1,2,r+1,e,t),n.box(r,0,-r,r+1,2,-r+1,e,t),Math.abs(r)<3&&(n.put(r+1,0,r,e,t),n.put(r+1,0,-r,e,t));return Q(n,{scale:.054,depthLayer:4})},p=(e,t)=>{let n=new Z(941);return n.ringAxis(`y`,0,0,0,2,3.4,1.9,e,t),Q(n,{scale:.054,depthLayer:4})},m=f(`#ff5a4f`,.65),h=p(`#4ce8e0`,.65),g=f(`#ffe055`,1.75),_=p(`#ffe055`,1.75),v=Md(a*.84,`#ffe57f`);v.visible=!1,r.add(v);let y=new Z(947);y.box(-1,0,-1,1,2,1,`#4ce8e0`,1.6);let b=Q(y,{scale:.05,depthLayer:5});b.visible=!1,r.add(b);let x=[],S=[];for(let t=0;t<3;t++)for(let n=0;n<3;n++){let i=t*3+n,o=(n-1)*a,s=(t-1)*a;S.push([o,s]);let c=jd(a*.94,.36,a*.94,e.id,{cell:i});c.position.set(o,d+.12,s),r.add(c),x.push(c)}let C=Array(9).fill(0),w=S.map(([e,t])=>{let n=new bn;return n.position.set(e,d,t),r.add(n),{group:n,pop:1,isWin:!1}}),T=new bn;r.add(T);let E=0,D=0,O=!1,k=0,A=!1,j=null;function M(){for(;T.children.length;)T.remove(T.children[0]);for(let e=0;e<Math.min(6,E);e++){let t=Fd(`#ff5a4f`,1.15);t.position.set(-.56*1.75,d+e*.12,-.56+e*.22),T.add(t)}for(let e=0;e<Math.min(6,D);e++){let t=Fd(`#4ce8e0`,1.15);t.position.set(a*1.75,d+e*.12,-.56+e*.22),T.add(t)}}function N(){let e=new Set(j?.line||[]);for(let t=0;t<9;t++){let n=w[t];for(;n.group.children.length;)n.group.remove(n.group.children[0]);let r=C[t];if(r===0)continue;let i=e.has(t);n.isWin=i;let a=r===1?i?g:m:i?_:h,o=new fi(a.geometry,a.material);o.castShadow=!0,n.group.add(o)}}function P(){k++,C.fill(0),j=null,O=!1,b.visible=!1,N()}function F(e,t,n=``){C[e]=t,w[e].pop=.05;let r=Rd(C);if(r){j={...r,age:0},N();let e=n?` · "${n}"`:``;return r.winner===1?(E++,M(),Od([523.25,659.25,783.99,1046.5],.075,.22,`triangle`,.085),`Naughts & Crosses — You beat Gemini Flash-Lite! (${E}–${D})`):r.winner===2?(D++,M(),Od([440,392,329.63],.09,.22,`sawtooth`,.055),`Naughts & Crosses — Gemini Flash-Lite wins! (${E}–${D})${e}`):(Od([440,523.25,440],.08,.18,`triangle`,.065),`Naughts & Crosses — Draw vs Gemini Flash-Lite!${e}`)}return N(),Dd(t===1?587.33:440,.11,`triangle`,.075),n?`Gemini Flash-Lite — "${n}"`:null}function I(){let t=[];for(let e=0;e<9;e++)C[e]===0&&t.push(e);if(!t.length)return;let r=++k;O=!0,b.visible=!0,Id({game:`tic_tac_toe`,board:[...C],creationName:e.name},t).then(e=>{if(!(A||r!==k||j)&&(O=!1,b.visible=!1,e.move>=0&&C[e.move]===0)){let t=F(e.move,2,e.quip);t&&n?.(t)}})}return{kind:`tic_tac_toe`,hitMeshes:x,extraRadius:s,setHovered(e){let t=e?.cell;if(!O&&typeof t==`number`&&t>=0&&t<9&&(C[t]===0||j)){let[e,n]=S[t];v.position.set(e,d+.02,n),v.visible=!0}else v.visible=!1},trigger(e){Ed();let t=typeof e?.cell==`number`?e.cell:-1;if(j){if(j.age<.45)return null;if(P(),t>=0&&t<9){let e=F(t,1);return j||I(),e}return null}if(O||t<0||t>=9||C[t]!==0)return null;let n=F(t,1);return j||I(),n},step(e,t){v.visible&&(v.position.y=d+.025+Math.sin(t*6)*.015),O&&(b.position.set(0,d+.36+Math.sin(t*10)*.05,-.56*1.55),b.rotation.y=t*4.5),j&&(j.age+=e);for(let n=0;n<9;n++){let r=w[n];if(r.pop<1){r.pop=Math.min(1,r.pop+e*6.5);let t=r.pop<.7?r.pop/.7*1.18:1.18-(r.pop-.7)/.3*.18;r.group.scale.setScalar(t)}else r.group.scale.setScalar(1);r.isWin&&j?r.group.position.y=d+Math.abs(Math.sin(t*5.2+n*.7))*.09:r.group.position.y=d}},dispose(){A=!0,k++,m.geometry.dispose(),h.geometry.dispose(),g.geometry.dispose(),_.geometry.dispose(),u.geometry.dispose(),v.geometry.dispose(),b.geometry.dispose(),x.forEach(e=>e.geometry.dispose())}}}function Bd(e){let t=[[1,0],[0,1],[1,1],[1,-1]];for(let n=0;n<7;n++)for(let r=0;r<6;r++){let i=e[n][r];if(i)for(let[a,o]of t){let t=[[n,r]];for(let s=1;s<4;s++){let c=n+a*s,l=r+o*s;if(c<0||c>=7||l<0||l>=6||e[c][l]!==i)break;t.push([c,l])}if(t.length===4)return{winner:i,cells:t}}}return e.every(e=>e[5]!==0)?{winner:3,cells:[]}:null}function Vd(e,t,n){let r=new bn;t.add(r);let i=Nd(t,4),a=.068,o=i.onCenterTop?i.yMeters:.01,s=0;i.onCenterTop||(r.position.set(0,0,i.frontZMeters+.85),s=i.frontZMeters+1.5);let c=new Z(953);c.box(-16,0,-3,-13,2,3,`brass`),c.box(13,0,-3,16,2,3,`brass`),c.box(-15,1,-1,15,27,1,`#2f5696`);for(let e=0;e<7;e++){let t=-14+e*4+1;for(let e=0;e<6;e++){let n=2+e*4+1;c.clear(t,n,-2,t+2,n+2,2)}}c.box(-16,1,-2,-14,28,2,`brass`),c.box(14,1,-2,16,28,2,`brass`);let l=Q(c,{scale:a,depthLayer:3});l.position.y=o,r.add(l);let u=(e,t)=>{let n=new Z(967);return n.box(-1,-1,-1,2,2,1,e,t),Q(n,{scale:a*.92,depthLayer:4})},d=u(`#ff5247`,.65),f=u(`#ffd24c`,.65),p=u(`#5ef28c`,1.75),m=u(`#ff5247`,1.25);m.visible=!1,r.add(m);let h=u(`#ffd24c`,1.5);h.visible=!1,r.add(h);let g=e=>(-14+e*4+1.5)*a,_=e=>o+(2+e*4+1.5)*a,v=o+30*a,y=[];for(let t=0;t<7;t++){let n=jd(4*a*.96,28*a,.45,e.id,{col:t});n.position.set(g(t),o+14*a,0),r.add(n),y.push(n)}let b=Array.from({length:7},()=>[,,,,,,].fill(0)),x=[],S=new bn;r.add(S);let C=!1,w=0,T=!1,E=null;function D(){w++;for(let e=0;e<7;e++)b[e].fill(0);for(x.length=0;S.children.length;)S.remove(S.children[0]);E=null,C=!1,h.visible=!1}function O(e,t,n=``){let r=b[e].indexOf(0);if(r===-1)return null;b[e][r]=t;let i=t===1?d:f,a=new fi(i.geometry,i.material);a.position.set(g(e),v,0),S.add(a),x.push({col:e,row:r,who:t,mesh:a,y:v,vy:0,targetY:_(r),settled:!1,isWin:!1}),Dd(t===1?523.25:392,.09,`triangle`,.065);let o=Bd(b);if(o){E={...o,age:0};let e=new Set(o.cells.map(([e,t])=>`${e},${t}`));for(let t of x)e.has(`${t.col},${t.row}`)&&(t.isWin=!0,t.mesh.geometry=p.geometry);let t=n?` · "${n}"`:``;return o.winner===1?(Od([523.25,659.25,783.99,1046.5],.08,.24,`triangle`,.085),`Connect Four — Four in a row! You beat Gemini Flash-Lite!`):o.winner===2?(Od([440,349.23,293.66],.09,.24,`sawtooth`,.055),`Connect Four — Gemini Flash-Lite connected four!${t}`):`Connect Four — Full frame draw vs Gemini Flash-Lite!${t}`}return n?`Gemini Flash-Lite — "${n}"`:null}function k(){let t=[0,1,2,3,4,5,6].filter(e=>b[e].indexOf(0)!==-1);if(!t.length)return;let r=++w;C=!0,h.visible=!0,Id({game:`connect_four`,grid:b.map(e=>[...e]),creationName:e.name},t).then(e=>{if(!(T||r!==w||E)&&(C=!1,h.visible=!1,e.move>=0&&e.move<7&&b[e.move].indexOf(0)!==-1)){let t=O(e.move,2,e.quip);t&&n?.(t)}})}return{kind:`connect_four`,hitMeshes:y,extraRadius:s,setHovered(e){let t=e?.col;!C&&typeof t==`number`&&t>=0&&t<7&&(b[t].indexOf(0)!==-1||E)?(m.position.set(g(t),v,0),m.visible=!0):m.visible=!1},trigger(e){Ed();let t=typeof e?.col==`number`?e.col:-1;if(E){if(E.age<.5)return null;if(D(),t>=0&&t<7){let e=O(t,1);return E||k(),e}return null}if(C||t<0||t>=7||b[t].indexOf(0)===-1)return null;let n=O(t,1);return E||k(),n},step(e,t){m.visible&&(m.position.y=v+Math.sin(t*6.5)*.035),C&&(h.position.set(Math.sin(t*3.8)*3*a,v+.06,0),h.rotation.y=t*4.2),E&&(E.age+=e);for(let n of x)n.settled?n.isWin&&n.mesh.scale.setScalar(1+Math.sin(t*8+n.col)*.12):(n.vy-=13.5*e,n.y+=n.vy*e,n.y<=n.targetY&&(n.y=n.targetY,Math.abs(n.vy)>1.2?(n.vy=-n.vy*.28,Dd(220+n.row*35,.05,`sine`,.045)):(n.vy=0,n.settled=!0)),n.mesh.position.y=n.y)},dispose(){T=!0,w++,l.geometry.dispose(),d.geometry.dispose(),f.geometry.dispose(),p.geometry.dispose(),m.geometry.dispose(),h.geometry.dispose(),y.forEach(e=>e.geometry.dispose())}}}function Hd(e,t){let n=new bn;t.add(n);let r=Nd(t,6),i=.54,a=r.yMeters,o=0;if(!r.onCenterTop){let e=Pd(1.05,1.05,4,`grass2`,`woodDark`);n.position.set(0,0,r.frontZMeters+1.24),n.add(e.mesh),a=e.topY,o=r.frontZMeters+2.35}let s=new Z(971),c=.06;for(let e=0;e<3;e++)for(let t=0;t<3;t++){let n=Math.round((t-1)*i/c),r=Math.round((e-1)*i/c);s.ringAxis(`y`,n,r,0,1,3.2,1.8,`soilDark`),s.cylinderAxis(`y`,n,r,0,1,1.8,`black`)}let l=Q(s,{scale:c,depthLayer:3});l.position.y=a,n.add(l);let u=(e=!1)=>{let t=new Z(e?977:983),n=e?`#ffd24c`:`#8f5e36`,r=e?.9:0;return t.box(-2,0,-2,2,4,2,n,r),t.box(-1,4,-1,1,5,1,n,r),t.put(-1,3,2,`black`),t.put(1,3,2,`black`),t.box(-1,2,2,1,3,3,`#ec8db0`,.3),t.put(0,1,2,`white`),Q(t,{scale:.056,depthLayer:4})},d=u(!1),f=u(!0),p=new Z(991);p.put(0,0,0,`#ffe57f`,1.8);let m=Q(p,{scale:.055,castShadow:!1,depthLayer:5}),h=[],g=[];for(let t=0;t<3;t++)for(let r=0;r<3;r++){let o=t*3+r,s=(r-1)*i,c=(t-1)*i,l=new bn;l.position.set(s,a,c);let u=new fi(d.geometry,d.material);u.visible=!1,l.add(u),n.add(l);let f=jd(i*.92,.44,i*.92,e.id,{hole:o});f.position.set(s,a+.18,c),n.add(f),g.push(f),h.push({idx:o,hx:s,hz:c,holder:l,mesh:u,up:0,goalUp:0,stayTimer:0,golden:!1,bonked:!1})}let _=new Z(997);_.box(-12,0,-1,12,2,1,`#5ef28c`,1.35);let v=Q(_,{scale:.05,depthLayer:4});v.position.set(0,a+.08,-.54*1.55),v.visible=!1,n.add(v);let y=new bn;n.add(y);let b=[],x=0,S=1.2,C=0;function w(){for(;y.children.length;)y.remove(y.children[0]);let e=Math.min(18,C);for(let t=0;t<e;t++){let e=Fd(t>=10?`#ffe055`:`#ff7426`,1.3);e.position.set(i*1.65,a+t%9*.11,-.3+Math.floor(t/9)*.18),y.add(e)}}function T(e){let t=h.filter(e=>e.goalUp===0&&e.up<.05);if(!t.length)return;let n=t[Math.floor(Math.random()*t.length)];n.golden=e&&Math.random()<.22,n.mesh.geometry=n.golden?f.geometry:d.geometry,n.mesh.visible=!0,n.bonked=!1,n.goalUp=1,n.stayTimer=e?Math.max(.58,1.25-C*.03):1.7}function E(e,t){for(let r=0;r<6;r++){let i=r/6*Math.PI*2,o=new fi(m.geometry,m.material);o.position.set(e,a+.24,t),n.add(o),b.push({mesh:o,vx:Math.cos(i)*1.25,vy:1.9+Math.random()*.7,vz:Math.sin(i)*1.25,life:.42})}}return{kind:`whack_a_mole`,hitMeshes:g,extraRadius:o,setHovered(){},trigger(e){Ed();let t=typeof e?.hole==`number`?e.hole:-1,n=x<=0;if(n&&(x=22,C=0,w(),v.visible=!0,S=.12,Od([392,523.25,659.25],.06,.14,`square`,.055)),t>=0&&t<9){let e=h[t];if(e.up>.25&&!e.bonked)return e.bonked=!0,e.goalUp=0,e.stayTimer=0,C+=e.golden?3:1,w(),E(e.hx,e.hz),Od(e.golden?[659.25,880,1174.66]:[587.33,880],.045,.12,`triangle`,.08),null;n||Dd(190,.07,`sine`,.045)}return n?`Whack-a-Mole — 22s round started! Bonk the critters!`:null},step(e){x>0?(x-=e,v.scale.x=Math.max(.02,x/22),S-=e,S<=0&&(T(!0),x<12&&Math.random()<.42&&T(!0),S=Math.max(.32,.68-C*.015)),x<=0&&(v.visible=!1,Od([523.25,659.25,783.99,1046.5],.08,.2,`triangle`,.07))):(S-=e,S<=0&&(T(!1),S=3.4));for(let t of h){t.goalUp>0&&(t.stayTimer-=e,t.stayTimer<=0&&(t.goalUp=0));let n=t.bonked?15:9.5;if(t.up+=(t.goalUp-t.up)*Math.min(1,e*n),t.up<.02&&t.goalUp===0)t.up=0,t.mesh.visible=!1;else{t.mesh.position.y=(t.up-1)*.24;let e=t.bonked?.55:1;t.mesh.scale.set(t.bonked?1.25:1,e,t.bonked?1.25:1)}}for(let t=b.length-1;t>=0;t--){let r=b[t];r.life-=e,r.life<=0?(n.remove(r.mesh),b.splice(t,1)):(r.vy-=9.5*e,r.mesh.position.x+=r.vx*e,r.mesh.position.y+=r.vy*e,r.mesh.position.z+=r.vz*e)}},dispose(){l.geometry.dispose(),d.geometry.dispose(),f.geometry.dispose(),m.geometry.dispose(),v.geometry.dispose(),g.forEach(e=>e.geometry.dispose())}}}var Ud=[261.63,293.66,329.63,349.23,392,440,493.88,523.25],Wd=[`#ff5a4f`,`#ff9d3b`,`#ffe055`,`#5ef28c`,`#4ce8e0`,`#5d9be3`,`#9b7bd4`,`#ec8db0`],Gd=[0,2,4,7,4,2,0,4,5,4,2,0];function Kd(e,t){let n=new bn;t.add(n);let r=Nd(t,3),i=.38,a=1.38,o=r.onCenterTop?r.yMeters:.015;r.onCenterTop||n.position.set(0,0,r.frontZMeters+1.05);let s=new Z(1009),c=.08;s.box(-20,0,-10,20,1,10,`#1f2229`);for(let e of[.5,1.5,3.5,4.5,5.5]){let t=Math.round((e-3.5)*i/c);s.box(t-1,1,-9,t+1,3,0,`#181a20`)}let l=Q(s,{scale:c,depthLayer:2});l.position.y=o,n.add(l);let u=new Z(1013);u.box(-1,0,0,1,2,1,`#ffe57f`,1.7),u.box(0,2,0,1,5,1,`#ffe57f`,1.7),u.put(1,4,0,`#ffe57f`,1.7);let d=Q(u,{scale:.055,castShadow:!1,depthLayer:5}),f=[],p=[],m=.068;for(let t=0;t<8;t++){let r=(t-3.5)*i,s=new Z(1021+t);s.box(-2,0,-9,2,2,9,`white`),s.box(-2,2,7,2,3,9,Wd[t],.35);let c=new Z(1031+t);c.box(-2,0,-9,2,2,9,Wd[t],1.45);let l=Q(s,{scale:m,depthLayer:3}),u=Q(c,{scale:m,depthLayer:3}),d=new bn;d.position.set(r,o+.06,0);let h=new fi(l.geometry,l.material);d.add(h),n.add(d);let g=jd(i*.95,.3,a,e.id,{key:t});g.position.set(r,o+.14,0),n.add(g),p.push(g),f.push({i:t,kx:r,holder:d,mesh:h,idleGeo:l.geometry,litGeo:u.geometry,press:0,glowSec:0})}let h=new Z(1049);h.box(-2,0,-2,2,3,2,`#ff5247`,1.2);let g=Q(h,{scale:.06,depthLayer:4});g.position.set(4.35*i,o+.06,-.4416),n.add(g);let _=jd(.34,.34,.34,e.id,{riff:!0});_.position.copy(g.position),n.add(_),p.push(_);let v=[],y=-1,b=-1,x=0;function S(e,t=!0){if(e<0||e>=8)return;let r=f[e];r.press=1,r.glowSec=.32,r.mesh.geometry=r.litGeo,t&&(Dd(Ud[e],.36,`triangle`,.085),Dd(Ud[e]*2,.22,`sine`,.03));let i=new fi(d.geometry,d.material);i.position.set(r.kx,o+.28,0),n.add(i),v.push({mesh:i,life:.85,phase:e})}return{kind:`floor_piano`,hitMeshes:p,allowWalkOver:!0,extraRadius:0,setHovered(e){g.scale.setScalar(e?.riff?1.18:1)},trigger(e){return Ed(),e?.riff?(b=0,x=.01,`Floor Piano — Playing voxel melody!`):(typeof e?.key==`number`&&S(e.key,!0),null)},step(e,t,r){if(b>=0&&(x-=e,x<=0&&(S(Gd[b],!0),b++,b>=Gd.length?b=-1:x=.19)),r?.viewerPos){let e=r.viewerPos.x-r.entX,t=r.viewerPos.z-r.entZ,o=Math.cos(-(r.entYaw||0)),s=Math.sin(-(r.entYaw||0)),c=e*o+t*s-n.position.x,l=-e*s+t*o-n.position.z;if(Math.abs(l)<=a*.58&&Math.abs(c)<=i*4.1){let e=Math.max(0,Math.min(7,Math.floor(c/i+4)));e!==y&&(y=e,Ed(),S(e,!0))}else y=-1}for(let t of f)t.glowSec>0&&(t.glowSec-=e,t.glowSec<=0&&(t.mesh.geometry=t.idleGeo)),t.press=Math.max(0,t.press-e*5.2),t.holder.position.y=o+.06-t.press*.055;for(let r=v.length-1;r>=0;r--){let i=v[r];i.life-=e,i.life<=0?(n.remove(i.mesh),v.splice(r,1)):(i.mesh.position.y+=e*1.15,i.mesh.position.x+=Math.sin(t*6+i.phase)*e*.22,i.mesh.scale.setScalar(Math.min(1,i.life*1.6)))}},dispose(){l.geometry.dispose(),d.geometry.dispose(),g.geometry.dispose(),f.forEach(e=>{e.idleGeo.dispose(),e.litGeo.dispose()}),p.forEach(e=>e.geometry.dispose())}}}var qd=[{pos:[-.42,-.42],idle:`#2e6e41`,lit:`#5ef28c`,freq:329.63},{pos:[.42,-.42],idle:`#8a2d2b`,lit:`#ff5a4f`,freq:440},{pos:[-.42,.42],idle:`#99741f`,lit:`#ffe055`,freq:554.37},{pos:[.42,.42],idle:`#23687a`,lit:`#4ce8e0`,freq:659.25}];function Jd(e,t){let n=new bn;t.add(n);let r=Nd(t,5),i=r.yMeters,a=0;if(!r.onCenterTop){let e=Pd(.95,.95,3,`basalt`,`charcoal`);n.position.set(0,0,r.frontZMeters+1.15),n.add(e.mesh),i=e.topY,a=r.frontZMeters+2.15}let o=[],s=[];qd.forEach((t,r)=>{let a=new Z(1061+r);a.box(-4,0,-4,4,2,4,t.idle,.25);let c=new Z(1069+r);c.box(-4,0,-4,4,3,4,t.lit,1.85);let l=Q(a,{scale:.08,depthLayer:3}),u=Q(c,{scale:.08,depthLayer:3}),d=new fi(l.geometry,l.material);d.position.set(t.pos[0],i,t.pos[1]),n.add(d);let f=jd(.7,.34,.7,e.id,{pad:r});f.position.set(t.pos[0],i+.15,t.pos[1]),n.add(f),s.push(f),o.push({idx:r,cfg:t,mesh:d,idleGeo:l.geometry,litGeo:u.geometry,litTimer:0})});let c=new bn;n.add(c);let l=[],u=0,d=-1,f=0;function p(e){for(;c.children.length;)c.remove(c.children[0]);for(let t=0;t<Math.min(12,e);t++){let e=Fd(`#ffe57f`,1.5);e.position.set(0,i+.06+t*.12,0),c.add(e)}}function m(e,t=.32){let n=o[e];n.litTimer=t,n.mesh.geometry=n.litGeo,Dd(n.cfg.freq,t,`triangle`,.085)}function h(){l.push(Math.floor(Math.random()*4)),u=0,d=0,f=.45,p(l.length)}return{kind:`simon_synth`,hitMeshes:s,extraRadius:a,setHovered(){},trigger(e){Ed();let t=typeof e?.pad==`number`?e.pad:-1;if(l.length===0)return h(),`Simon Memory — Watch the glowing pads & repeat!`;if(d>=0||t<0||t>=4)return null;if(m(t,.25),t===l[u]){if(u++,u>=l.length){let e=l.length;return h(),e>=3?`Simon Memory — Level ${e} cleared!`:null}return null}{let e=Math.max(0,l.length-1);return l=[],p(0),Od([220,164.81],.12,.26,`sawtooth`,.065),`Simon Memory — Missed! Reached level ${e}. Click to play again`}},step(e){d>=0&&(f-=e,f<=0&&(m(l[d],.34),d++,d>=l.length?d=-1:f=.48));for(let t of o)t.litTimer>0&&(t.litTimer-=e,t.litTimer<=0&&(t.mesh.geometry=t.idleGeo))},dispose(){o.forEach(e=>{e.idleGeo.dispose(),e.litGeo.dispose()}),s.forEach(e=>e.geometry.dispose())}}}function Yd(e,t){let n=new bn;t.add(n);let r=Nd(t,5),i=.5,a=r.yMeters,o=0;if(!r.onCenterTop){let e=Pd(.95,.95,3,`basalt`,`charcoal`);n.position.set(0,0,r.frontZMeters+1.15),n.add(e.mesh),a=e.topY,o=r.frontZMeters+2.15}let s=new Z(1087);s.box(-3,0,-3,3,2,3,`basalt`),s.box(-1,2,-1,1,3,1,`#2d7d74`,.35);let c=new Z(1091);c.box(-3,0,-3,3,3,3,`#4ce8e0`,1.7),c.box(-1,3,-1,1,4,1,`#ffe57f`,1.9);let l=Q(s,{scale:.065,depthLayer:3}).geometry,u=Q(c,{scale:.065,depthLayer:3}).geometry,d=Q(s,{scale:.065,depthLayer:3}).material,f=new Z(1093);f.box(-2,-2,-2,2,2,2,`#ffe055`,1.9);let p=Q(f,{scale:.065,depthLayer:5});p.position.set(0,a+.95,0),p.visible=!1,n.add(p);let m=Array(9).fill(!0),h=[],g=[];for(let t=0;t<3;t++)for(let r=0;r<3;r++){let o=t*3+r,s=(r-1)*i,c=(t-1)*i,u=new fi(l,d);u.position.set(s,a,c),n.add(u),h.push(u);let f=jd(i*.92,.35,i*.92,e.id,{rune:o});f.position.set(s,a+.16,c),n.add(f),g.push(f)}let _=!1;function v(e){let t=Math.floor(e/3),n=e%3;for(let[e,r]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]]){let i=t+e,a=n+r;if(i>=0&&i<3&&a>=0&&a<3){let e=i*3+a;m[e]=!m[e]}}}function y(){for(let e=0;e<9;e++)h[e].geometry=m[e]?u:l,h[e].position.y=a+(m[e]?.05:0)}function b(){m.fill(!0),_=!1,p.visible=!1,[0,1,2,3,4,5,6,7,8].sort(()=>Math.random()-.5).slice(0,4).forEach(e=>v(e)),m.every(Boolean)&&v(4),y()}return b(),{kind:`lights_out`,hitMeshes:g,extraRadius:o,setHovered(){},trigger(e){if(Ed(),_)return b(),Dd(440,.12,`triangle`,.07),null;let t=typeof e?.rune==`number`?e.rune:-1;if(t<0||t>=9)return null;v(t),y();let n=m.filter(Boolean).length;return Dd(330+n*55,.14,`sine`,.075),n===9?(_=!0,p.visible=!0,Od([523.25,659.25,783.99,1046.5,1318.5],.075,.28,`triangle`,.085),`Rune Shrine — All 9 bioluminescent runes ignited!`):null},step(e,t){p.visible&&(p.rotation.y=t*2.8,p.rotation.x=Math.sin(t*2.1)*.4,p.position.y=a+.88+Math.sin(t*3.5)*.1)},dispose(){l.dispose(),u.dispose(),p.geometry.dispose(),g.forEach(e=>e.geometry.dispose())}}}var Xd=[196,293.66,392,587.33],Zd=[`#ff5a4f`,`#ffb642`,`#5ef28c`,`#4ce8e0`];function Qd(e,t){let n=new bn;t.add(n);let r=Nd(t,4),i=r.onCenterTop?r.yMeters:.02,a=0;r.onCenterTop||(n.position.set(0,0,r.frontZMeters+.9),a=r.frontZMeters+1.5);let o=new bn;o.position.y=i+.45,o.rotation.x=-.45,n.add(o);let s=new Z(1103);s.box(-18,-10,-2,18,10,0,`#23252b`);let c=Q(s,{scale:.06,depthLayer:2});o.add(c);let l=new Z(1109);l.box(-1,-1,0,2,2,1,`#3b4048`);let u=Q(l,{scale:.058,depthLayer:3}).geometry,d=Q(l,{scale:.058,depthLayer:3}).material,f=Zd.map((e,t)=>{let n=new Z(1117+t);return n.box(-1,-1,0,2,2,2,e,1.65),Q(n,{scale:.058,depthLayer:4}).geometry}),p=[[!0,!1,!1,!0,!1,!1,!0,!1],[!1,!1,!0,!1,!1,!0,!1,!1],[!0,!1,!0,!1,!1,!1,!0,!0],[!1,!0,!1,!1,!0,!1,!1,!0]],m=[],h=[],g=.24;for(let t=0;t<4;t++){m[t]=[];for(let n=0;n<8;n++){let r=(n-3.5)*g,i=(t-1.5)*.24,a=new fi(p[t][n]?f[t]:u,d);a.position.set(r,i,.02),o.add(a),m[t][n]=a;let s=jd(.22,.22,.18,e.id,{row:t,step:n});s.position.set(r,i,.05),o.add(s),h.push(s)}}let _=new Z(1129);_.box(0,-9,0,1,9,1,`#ffe57f`,1.8);let v=Q(_,{scale:.055,castShadow:!1,depthLayer:5});v.position.z=.09,o.add(v);let y=!1,b=0,x=0;return{kind:`step_sequencer`,hitMeshes:h,extraRadius:a,setHovered(){},trigger(e){Ed();let t=!y;if(y=!0,typeof e?.row==`number`&&typeof e?.step==`number`){let{row:n,step:r}=e;return p[n][r]=!p[n][r],m[n][r].geometry=p[n][r]?f[n]:u,p[n][r]&&Dd(Xd[n],.14,`triangle`,.075),t?`Step Sequencer — Live synth loop unmuted!`:null}return y=!t,y?`Step Sequencer — Playing 8-step voxel groove!`:`Step Sequencer — Muted`},step(e){if(b+=e,b>=.22){b-=.22,x=(x+1)%8,v.position.x=(x-3.5)*g;for(let e=0;e<4;e++){for(let t=0;t<8;t++)m[e][t].position.z=t===x&&p[e][t]?.075:.02;y&&p[e][x]&&Dd(Xd[e],.16,e===0?`triangle`:`sine`,.055)}}},dispose(){c.geometry.dispose(),u.dispose(),f.forEach(e=>e.dispose()),v.geometry.dispose(),h.forEach(e=>e.geometry.dispose())}}}function $d(e,t){let n=new bn;t.add(n);let r=Nd(t,3),i=r.voxScale,a=r.bounds,o=new J(0,Math.max(2.35,a.maxY*i*.78),Math.min(-1.2,a.minZ*i+.55)),s=new Z(1151);s.ringAxis(`y`,0,0,0,1,3.2,2.2,`#ff7426`,.9),s.ringAxis(`y`,0,0,-3,0,2.5,1.8,`white`,.25);let c=Q(s,{scale:.075,depthLayer:4});c.position.copy(o),n.add(c);let l=new Z(1153);l.sphere(0,0,0,2.4,2.4,2.4,`#ec8438`,.45),l.box(-3,0,0,3,1,1,`#23252b`);let u=Q(l,{scale:.068,depthLayer:5}),d=[{label:`Free Throw`,x:0,z:Math.max(1.5,a.maxZ*i+.35),pts:2},{label:`Left Wing 3-Pointer`,x:-1.35,z:Math.max(1.9,a.maxZ*i+.75),pts:3},{label:`Right Wing 3-Pointer`,x:1.35,z:Math.max(1.9,a.maxZ*i+.75),pts:3}],f=[],p=[];d.forEach((t,r)=>{let i=new Z(1163+r);i.ringAxis(`y`,0,0,0,1,3,2,`#ffe055`,1.1);let a=Q(i,{scale:.07,castShadow:!1,depthLayer:2});a.position.set(t.x,.02,t.z),n.add(a);let o=new fi(u.geometry,u.material);o.position.set(t.x,.22,t.z),n.add(o),f.push(o);let s=jd(.68,.65,.68,e.id,{spot:r});s.position.set(t.x,.32,t.z),n.add(s),p.push(s)});let m=[],h=new bn;n.add(h);let g=0;function _(e){let t=d[e]||d[0],r=new J(t.x,.35,t.z),i=Math.random()<(t.pts===2?.82:.72),a=o.clone().add(new J(i?0:Math.random()>.5?.22:-.22,.06,0)),s=t.pts===3?1.02:.86,c=11.8,l=(a.x-r.x)/s,f=(a.z-r.z)/s,p=(a.y-r.y+.5*c*s*s)/s,h=new fi(u.geometry,u.material);h.position.copy(r),n.add(h),Dd(310,.09,`triangle`,.07),m.push({mesh:h,vx:l,vy:p,vz:f,g:c,age:0,flightT:s,swish:i,pts:t.pts,resolved:!1})}return{kind:`basketball_hoop`,hitMeshes:p,extraRadius:Math.max(0,a.maxZ*i+1.4),setHovered(e){f.forEach((t,n)=>t.scale.setScalar(e?.spot===n?1.24:1))},onInspectFocus(){Ed(),_(0)},trigger(e){return Ed(),_(typeof e?.spot==`number`?e.spot:Math.floor(Math.random()*3)),null},step(e,t){f.forEach((e,n)=>{e.position.y=.22+Math.abs(Math.sin(t*3.4+n))*.14,e.rotation.x=t*2});for(let t=m.length-1;t>=0;t--){let r=m[t];if(r.age+=e,r.vy-=r.g*e,r.mesh.position.x+=r.vx*e,r.mesh.position.y+=r.vy*e,r.mesh.position.z+=r.vz*e,r.mesh.rotation.x-=e*11,!r.resolved&&r.age>=r.flightT){if(r.resolved=!0,r.swish){for(g+=r.pts,r.vx*=.15,r.vz*=.15,c.scale.set(1.06,.86,1.06),kd(.14,.05),Od(r.pts===3?[523.25,659.25,783.99,1046.5]:[523.25,783.99],.06,.18,`triangle`,.075);h.children.length;)h.remove(h.children[0]);for(let e=0;e<Math.min(18,g);e++){let t=Fd(`#ff7426`,1.4);t.position.set(-.9+e%6*.11,o.y+.52+Math.floor(e/6)*.12,o.z),h.add(t)}}else r.vy=2.8,r.vx=(Math.random()-.5)*2.6,r.vz=2.2,Dd(185,.11,`square`,.05)}r.mesh.position.y<=.18&&r.vy<0&&(r.mesh.position.y=.18,r.vy=-r.vy*.45),r.age>2.2&&(n.remove(r.mesh),m.splice(t,1))}c.scale.lerp(new J(1,1,1),Math.min(1,e*10))},dispose(){c.geometry.dispose(),u.geometry.dispose(),p.forEach(e=>e.geometry.dispose())}}}function ef(e,t){let n=new bn;t.add(n);let r=Nd(t,3),i=r.voxScale,a=r.bounds,o=Math.max(.55,a.maxZ*i+.14),s=Math.max(.85,Math.min(2.2,a.maxY*i*.56)),c=(()=>{let e=new Z(1171);return e.cylinderAxis(`x`,0,0,-2,2,3.2,`white`),e.box(-1,-1,3,1,1,4,`#df5246`,1.1),e.box(-1,3,-1,1,4,1,`#ffe055`,1.5),e.box(-1,-1,-4,1,1,-3,`#4ce8e0`,1.4),e.box(-1,-4,-1,1,-3,1,`#5ef28c`,1.4),Q(e,{scale:.055,depthLayer:4})})(),l=[-.34,0,.34].map(e=>{let t=new fi(c.geometry,c.material);return t.position.set(e,s,o),n.add(t),{mesh:t,angle:0,targetAngle:0,spinningSec:0}}),u=new Z(1181);u.box(0,0,-1,1,7,1,`chrome`),u.sphere(.5,7.5,0,1.8,1.8,1.8,`#ff5247`,1.1);let d=new bn;d.position.set(Math.max(.62,a.maxX*i+.08),s-.12,o*.5);let f=Q(u,{scale:.06,depthLayer:4});d.add(f),n.add(d);let p=new Z(1187);p.box(-1,0,-1,1,1,1,`#ffe055`,1.7);let m=Q(p,{scale:.065,depthLayer:5}),h=[],g=jd(1.55,1.55,.9,e.id,{spin:!0});g.position.set(.1,s,o),n.add(g);let _=0,v=null;function y(){if(l.some(e=>e.spinningSec>.1))return null;_=1;let e=Math.floor(Math.random()*4),t=Math.random(),n=t<.32?[e,e,e]:t<.72?[e,e,(e+1+Math.floor(Math.random()*3))%4]:[e,(e+1)%4,(e+2)%4];return l.forEach((e,t)=>{let r=4+t*2;e.targetAngle=Math.ceil(e.angle/(Math.PI*2))*Math.PI*2+r*Math.PI*2+n[t]*(Math.PI*.5),e.spinningSec=.72+t*.42}),v=n,Od([330,440,554.37],.045,.1,`square`,.055),null}return{kind:`slot_machine`,hitMeshes:[g],extraRadius:0,setHovered(e){f.scale.setScalar(e?.spin?1.12:1)},onInspectFocus(){Ed(),y()},trigger(){return Ed(),y()},step(e){_=Math.max(0,_-e*2.8),d.rotation.x=Math.sin(_*Math.PI)*1.15;let t=!1;for(let n of l)n.spinningSec>0&&(t=!0,n.spinningSec-=e,n.spinningSec<=0?(n.angle=n.targetAngle,Dd(587.33,.08,`triangle`,.07)):n.angle+=(n.targetAngle-n.angle)*Math.min(1,e*6.5),n.mesh.rotation.x=n.angle);if(!t&&v){let[e,t,r]=v;v=null;let i=e===t&&t===r?18:e===t||t===r||e===r?7:0;if(i>0){Od(i>=18?[523.25,659.25,783.99,1046.5,1318.5]:[523.25,659.25,783.99],.07,.22,`triangle`,.085);for(let e=0;e<i;e++){let e=new fi(m.geometry,m.material);e.position.set((Math.random()-.5)*.4,Math.max(.25,s-.45),o+.08),n.add(e),h.push({mesh:e,vx:(Math.random()-.5)*1.8,vy:2.2+Math.random()*1.6,vz:.9+Math.random()*1.4,life:1.4})}}}for(let t=h.length-1;t>=0;t--){let r=h[t];r.life-=e,r.life<=0?(n.remove(r.mesh),h.splice(t,1)):(r.vy-=9.8*e,r.mesh.position.x+=r.vx*e,r.mesh.position.y+=r.vy*e,r.mesh.position.z+=r.vz*e,r.mesh.rotation.y+=e*9,r.mesh.position.y<.06&&(r.mesh.position.y=.06,r.vy=Math.abs(r.vy)*.45))}},dispose(){c.geometry.dispose(),f.geometry.dispose(),m.geometry.dispose(),g.geometry.dispose()}}}var tf=[[`#ffe055`,`#ff7426`],[`#4ce8e0`,`#ec8db0`],[`#5ef28c`,`#9b7bd4`]];function nf(e,t){let n=new bn;t.add(n);let r=Nd(t,4),i=Math.max(.75,r.maxYMeters*.85),a=tf.flat().map((e,t)=>{let n=new Z(1201+t);return n.box(-1,-1,-1,1,1,1,e,2),Q(n,{scale:.085,castShadow:!1,depthLayer:5}).geometry}),o=Q(new Z(1213).put(0,0,0,`#ffe055`,2),{scale:.085,castShadow:!1,depthLayer:5}).material,s=jd(1.8,Math.max(1.4,i+.5),1.8,e.id,{launch:!0});s.position.set(0,i*.5,0),n.add(s);let c=[],l=[],u=9+e.id.charCodeAt(3)%7;function d(e=3,t=!0){for(let r=0;r<e;r++){let s=new fi(a[r*2%a.length],o);s.position.set((r-(e-1)*.5)*.35,i,0),s.visible=!1,n.add(s),c.push({mesh:s,delay:r*.28,vx:(Math.random()-.5)*1.6,vy:15.5+Math.random()*3.8,vz:(Math.random()-.5)*1.6,fuse:.92+Math.random()*.18,palIdx:r%tf.length,withAudio:t})}t&&Dd(380,.25,`sine`,.05)}return{kind:`fireworks_mortar`,hitMeshes:[s],extraRadius:0,setHovered(){},onInspectFocus(){Ed(),d(3,!0)},trigger(){return Ed(),d(3,!0),`Fireworks Mortar — Salvo launched!`},step(e){u-=e,u<=0&&(d(1,!1),u=16);for(let t=c.length-1;t>=0;t--){let r=c[t];if(r.delay>0)r.delay-=e;else if(r.mesh.visible=!0,r.fuse-=e,r.vy-=4.2*e,r.mesh.position.x+=r.vx*e,r.mesh.position.y+=r.vy*e,r.mesh.position.z+=r.vz*e,r.fuse<=0){let e=r.mesh.position.clone();n.remove(r.mesh),c.splice(t,1),r.withAudio&&(kd(.22,.065),Od([783.99,1046.5],.06,.2,`triangle`,.045));for(let t=0;t<28;t++){let i=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1),c=4.2+Math.random()*3.4,u=r.palIdx*2+t%2,d=new fi(a[u],o);d.position.copy(e),n.add(d),l.push({mesh:d,vx:Math.sin(s)*Math.cos(i)*c,vy:Math.cos(s)*c,vz:Math.sin(s)*Math.sin(i)*c,life:1.15+Math.random()*.35})}}}for(let t=l.length-1;t>=0;t--){let r=l[t];r.life-=e,r.life<=0?(n.remove(r.mesh),l.splice(t,1)):(r.vx*=1-e*1.4,r.vz*=1-e*1.4,r.vy=r.vy*(1-e*1.1)-3.8*e,r.mesh.position.x+=r.vx*e,r.mesh.position.y+=r.vy*e,r.mesh.position.z+=r.vz*e,r.mesh.scale.setScalar(Math.max(.15,Math.min(1,r.life))))}},dispose(){a.forEach(e=>e.dispose()),s.geometry.dispose()}}}function rf(e,t){let n=new bn;t.add(n);let r=Nd(t,4),i=Math.max(1.6,r.maxYMeters*.92),a=Math.max(1.2,(r.bounds.maxX-r.bounds.minX)*.5*r.voxScale+.35),o=(e,t)=>{let n=new Z(1230+e),r=.085,o=Math.cos(t)*a,s=Math.sin(t)*a,c=i/r,l=0,u=c,d=0;for(let i=1;i<=6;i++){let a=i/6,f=i<6?((e*17+i*31)%7-3)*1.4:0,p=o/r*a+Math.sin(t)*f,m=c*(1-a)+2,h=s/r*a-Math.cos(t)*f;n.line(l,u,d,p,m,h,.4,i%2==0?`#64f5df`:`#b58cff`,2.1),l=p,u=m,d=h}return Q(n,{scale:r,castShadow:!1,depthLayer:5})},s=[];for(let e=0;e<6;e++){let t=o(e,e/6*Math.PI*2);t.visible=!1,n.add(t),s.push(t)}let c=jd(a*1.8,i+.5,a*1.8,e.id,{zap:!0});c.position.set(0,i*.5,0),n.add(c);let l=1.5,u=0;return{kind:`tesla_coil`,hitMeshes:[c],extraRadius:0,setHovered(){},onInspectFocus(){Ed(),l=5.5,kd(.18,.05),Od([110,220,440],.04,.25,`sawtooth`,.045)},trigger(){return Ed(),l=5.5,kd(.2,.055),Od([146.83,293.66,587.33],.04,.26,`sawtooth`,.05),`Tesla Coil — 500,000V voxel arc discharge!`},step(e,t){if(l>0){if(l-=e,u+=e,u>=.065){u=0;let e=Math.floor(Math.random()*s.length),n=(e+2+Math.floor(Math.random()*3))%s.length;s.forEach((r,i)=>{r.visible=i===e||i===n,r.rotation.y=Math.sin(t*9+i)*.25})}l<=0&&s.forEach(e=>{e.visible=!1})}else Math.sin(t*1.7)>.985&&(l=.24)},dispose(){s.forEach(e=>e.geometry.dispose()),c.geometry.dispose()}}}function af(e,t){let n=new bn;t.add(n);let r=Nd(t,4),i=Math.max(1.2,r.maxYMeters),a=Math.max(1.2,(r.bounds.maxX-r.bounds.minX)*.45*r.voxScale),o=new Z(1259);o.ringAxis(`y`,0,0,0,1,Math.round(a/.1),Math.max(2,Math.round(a/.1)-1),`#9b7bd4`,1.8);let s=Q(o,{scale:.1,castShadow:!1,depthLayer:5});s.visible=!1,n.add(s);let c=jd(a*2.1,i+.8,a*2.1,e.id,{flip:!0});c.position.set(0,i*.5,0),n.add(c);let l=!1,u=0;return{kind:`gravity_inverter`,hitMeshes:[c],extraRadius:0,setHovered(){},onInspectFocus(){Ed(),l=!l,Od(l?[261.63,392,523.25,783.99]:[783.99,523.25,392,261.63],.06,.2,`sine`,.065)},trigger(){return Ed(),l=!l,Od(l?[261.63,392,523.25,783.99]:[783.99,523.25,392,261.63],.06,.2,`sine`,.065),l?`Gravity Inverter — Flipped upside-down!`:`Gravity Inverter — Gravity restored!`},getPoseOffset(e){if(u<=.002)return null;let t=u*u*(3-2*u);return{liftY:t*(i+1.15)+Math.sin(e*2.4)*.16*t,rollZ:t*Math.PI}},step(e,t){u+=(+!!l-u)*Math.min(1,e*3.4),s.visible=u>.04,s.visible&&(s.rotation.y=t*2.8,s.position.y=.25+Math.sin(t*4)*.12)},dispose(){s.geometry.dispose(),c.geometry.dispose()}}}function of(e,t){let n=new bn;t.add(n);let r=Nd(t,4),i=Math.max(1.8,r.maxYMeters*.95),a=Math.max(.85,(r.bounds.maxX-r.bounds.minX)*.48*r.voxScale+.18),o=[`#ff5a4f`,`#ffe055`,`#5ef28c`,`#4ce8e0`,`#ec8db0`].map((e,t)=>{let n=new Z(1277+t);return n.sphere(0,0,0,1.8,1.8,1.8,e,1.45),Q(n,{scale:.065,depthLayer:5})}),s=jd(a*2.2,i+.4,a*2.2,e.id,{drop:!0});s.position.set(0,i*.5,0),n.add(s);let c=[],l=[523.25,587.33,659.25,783.99,880,1046.5],u=6;function d(e=5,t=!0){for(let r=0;r<e;r++){let e=o[r%o.length],i=new fi(e.geometry,e.material);i.visible=!1,n.add(i),c.push({mesh:i,delay:r*.24,u:0,lastTier:0,withAudio:t})}}return{kind:`marble_run`,hitMeshes:[s],extraRadius:0,setHovered(){},onInspectFocus(){Ed(),d(5,!0)},trigger(){return Ed(),d(6,!0),`Marble Run — Cascading glowing voxel marbles!`},step(e){u-=e,u<=0&&c.length===0&&(d(2,!1),u=11);for(let t=c.length-1;t>=0;t--){let r=c[t];if(r.delay>0){r.delay-=e;continue}if(r.mesh.visible=!0,r.u+=e*.36,r.u>=1){n.remove(r.mesh),c.splice(t,1);continue}let o=r.u*Math.PI*2*3.5,s=a*(.45+.55*r.u),u=Math.abs(Math.sin(r.u*Math.PI*6))*.08;r.mesh.position.set(Math.cos(o)*s,i*(1-r.u)+.14+u,Math.sin(o)*s);let d=Math.floor(r.u*6);d>r.lastTier&&(r.lastTier=d,r.withAudio&&Dd(l[d%l.length],.12,`sine`,.055))}},dispose(){o.forEach(e=>e.geometry.dispose()),s.geometry.dispose()}}}function sf(e,t,n=null){let r=e?.blueprint?.interaction?.kind;if(!r)return null;switch(r){case`tic_tac_toe`:return zd(e,t,n);case`connect_four`:return Vd(e,t,n);case`whack_a_mole`:return Hd(e,t);case`floor_piano`:return Kd(e,t);case`simon_synth`:return Jd(e,t);case`lights_out`:return Yd(e,t);case`step_sequencer`:return Qd(e,t);case`basketball_hoop`:return $d(e,t);case`slot_machine`:return ef(e,t);case`fireworks_mortar`:return nf(e,t);case`tesla_coil`:return rf(e,t);case`gravity_inverter`:return af(e,t);case`marble_run`:return of(e,t);default:return null}}var cf=Object.freeze({x:0,y:520,z:0}),lf=.16,uf=.08,df=4.75,ff=.42,pf=1.65,mf=1.24,hf=6,gf=/\b(bakery|patisserie|cafe|coffee|tea\s*room|pub|tavern|inn|cantina|saloon|bar|brewery|restaurant|diner|bistro|burger|pizzeria|gelateria|shop|bookshop|bookstore|store|market|emporium|boutique|florist|pharmacy|apothecary|cottage|house|home|cabin|chalet|bungalow|manor|mansion|villa|resort|hotel|motel|station|terminal|depot|parliament|city\s*hall|town\s*hall|hall|courthouse|bank|post\s*office|firehouse|fire\s*station|police|hospital|clinic|school|academy|tower|clocktower|lighthouse|castle|palace|citadel|fortress|temple|shrine|church|cathedral|chapel|pagoda|library|museum|gallery|conservatory|greenhouse|aquarium|planetarium|observatory|datacentre|datacenter|server|lab|laboratory|factory|foundry|mill|power\s*plant|reactor|sphere|pc|computer|cinema|theatre|theater|arena|stadium|pavilion|arcade|casino|barn|farmhouse|windmill|hangar|warehouse|workshop|studio)\b/i,_f=/\b(waterfall|cataract|cascade|volcano|stratovolcano|caldera|mountain|glacier|canyon|mesa|pond|lake|lagoon|ocean|river|stream|fountain|statue|monument|memorial|obelisk|totem|sign|signboard|billboard|bench|chair|table|lamp|streetlight|lantern|postbox|mailbox|hydrant|trash|bin|fence|wall|hedge|gate|bridge|overpass|viaduct|pier|dock|jetty|fog\s*cloud|rain\s*cloud|rainbow|balloon|tree|oak|pine|cherry\s*blossom|grove|forest|bush|shrub|flower|garden|bonsai|mushroom|rock|boulder|cliff|archway|halfpipe|skate|skatepark|quarry|open-pit|amphitheat\w*|launchpad|turbine|drilling\s*rig|surfboard|gazebo|half-court|streetball|basketball|tennis|pickleball|padel|rink|court|pitch|field|pool|aqueduct|ski\s*hill|ski\s*slope|parachute|drop\s*tower|eiffel\s*tower|coaster|ferris|carousel|alpr|camera|reef|drum\s*circle|campfire|bonfire|well|cart|barrow|stall|yatai|apiary|beehive|virtual\s*island|sky-shrine\s*island)\b/i,vf=/\b(open-pit|amphitheat\w*|skateboard\s+halfpipe|outdoor\s+tasting\s+pavilion|outdoor\s+festival\s+arena|street-corner\s+ramen\s+stall|floating\s+sanctuary)\b/i,yf=new Set([`tic_tac_toe`,`connect_four`,`whack_a_mole`,`floor_piano`,`simon_synth`,`lights_out`,`step_sequencer`,`basketball_hoop`,`slot_machine`,`fireworks_mortar`,`tesla_coil`,`gravity_inverter`,`marble_run`]),bf=/^(?:the|a|an|sunnyvale|hearthstone|borealis|emerald|geminisland|meadow|clover|sunny|downtown|village|neighborhood|old|grand|royal|golden|little|cozy|misty)\s+/i,xf=new Set([`tic_tac_toe`,`connect_four`,`whack_a_mole`,`floor_piano`,`simon_synth`,`lights_out`,`step_sequencer`,`basketball_hoop`,`slot_machine`]),Sf=null;function Cf(){if(typeof window>`u`)return null;let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;if(!Sf)try{Sf=new e}catch{return null}return Sf.state===`suspended`&&Sf.resume().catch(()=>{}),Sf}function wf(e,t=.065,n=.16,r=`triangle`,i=.055){let a=Cf();if(a&&a.state===`running`)try{e.forEach((e,o)=>{let s=a.currentTime+o*t,c=a.createOscillator(),l=a.createGain();c.type=r,c.frequency.setValueAtTime(Math.max(50,e),s),l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(i,s+.01),l.gain.exponentialRampToValueAtTime(1e-4,s+n),c.connect(l),l.connect(a.destination),c.start(s),c.stop(s+n+.02)})}catch{}}function Tf(e=.18,t=.035){let n=Cf();if(n&&n.state===`running`)try{let r=n.sampleRate,i=Math.max(256,Math.floor(r*e)),a=n.createBuffer(1,i,r),o=a.getChannelData(0);for(let e=0;e<i;e++)o[e]=(Math.random()*2-1)*Math.exp(-e/i*3.4);let s=n.createBufferSource();s.buffer=a;let c=n.createGain(),l=n.currentTime;c.gain.setValueAtTime(t,l),c.gain.exponentialRampToValueAtTime(1e-4,l+e),s.connect(c),c.connect(n.destination),s.start(l)}catch{}}function Ef(e){let t=Number(e)||0;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function Df(e){let t=String(e||``),n=2166136261;for(let e=0;e<t.length;e++)n^=t.charCodeAt(e),n=Math.imul(n,16777619);return n>>>0||1}function Of(e,t=`Structure`,n=2){let r=String(e||``).replace(/\([^)]*\)/g,` `).replace(/[^\w\s'-]/g,` `).replace(/\s+/g,` `).trim();if(!r)return t;let i=r.split(` `);for(;i.length>n&&bf.test(i.join(` `));)i.shift();if(i.length>3){let e=i.filter((e,t)=>t===0||t===i.length-1||!/^(?:village|corner|central|heavy|haul|sweet|swirl)$/i.test(e));e.length>=2&&(i=e)}return i.length>n&&(i=i.slice(i.length-n)),i.join(` `).trim()||t}function kf(e,t=!1){let n=e?.data||{},r=String(n.name||n.blueprint?.name||``).trim();if(e?.isDualTransit||e?.secondaryVehicle||n.id===`c-mvpvsf0l-5d0a39`){let e=r.split(/\s*(?:&|\+|\band\b|\/|,)\s*/i).map(e=>e.trim()).filter(Boolean);if(t){let t=e.find(e=>/tram|trolley|streetcar/i.test(e))||e[1];return t?Of(t,`Melbourne Tram`,2):`Melbourne Tram`}let n=e.find(e=>/waratah|train|express|rail/i.test(e))||e[0];return n?Of(n,`Waratah Train`,2):`Waratah Train`}return Of(r,`Shuttle`,2)}function Af(e){if(!e||typeof e!=`object`||e.id===`__city_sign__`)return!1;let t=e.behavior?.type||``;if(t===`vehicle_route`||t===`wander`||t===`fly_circle`||t===`water_float`)return!1;let n=String(e.category||e.blueprint?.category||``).toLowerCase();if(n===`prop`||n===`vehicle`||n===`creature`||n===`aircraft`||n===`watercraft`||n===`flora`)return!1;let r=String(e.scaleClass||e.blueprint?.scaleClass||`medium`);if(r===`tiny`)return!1;let i=e.blueprint?.stats||{},a=Number(i.footprintX??14),o=Number(i.footprintZ??14),s=Number(i.heightVoxels??i.maxY??14),c=String(e.name||e.blueprint?.name||``),l=String(e.description||e.blueprint?.description||``),u=`${c} ${l} ${String(e.behavior?.activity||``)} ${n}`;if(!/\bbakery\b/i.test(c)&&(_f.test(c)||vf.test(l)))return!1;let d=e.blueprint?.interaction?.kind||``;if(d&&yf.has(d))return!1;let f=gf.test(c)||gf.test(u);return n===`building`?r===`small`&&(a<9||o<9||s<9)?!1:a>=8&&o>=8&&s>=8:t===`landmark`?a<10||o<10||s<10?!1:f:!1}function jf(e){if(!e)return null;let t=e.data||e,n=Number(e.x??t?.x??0),r=Number(e.z??t?.z??0),i=typeof e.yaw==`number`?e.yaw:typeof t?.behavior?.facingYaw==`number`?t.behavior.facingYaw:Number(t?.yaw||0),a=Number(e.footprintRadius)||du(t?.scaleClass||t?.blueprint?.scaleClass||`medium`,t?.blueprint?.stats?.footprintX??14,t?.blueprint?.stats?.footprintZ??14)||3.4,o=Math.sin(i),s=Math.cos(i),c=a+.62,l=a+1.18,u=n+o*c,d=r+s*c,f=n+o*l,p=r+s*l,m=Math.atan2(-(f-n),-(p-r));return{creationId:e.id||t?.id||``,name:t?.name||t?.blueprint?.name||`Building`,doorX:u,doorZ:d,exitX:f,exitZ:p,exitYaw:m,buildingYaw:i,footprintRadius:a,triggerRadius:3.6}}function Mf(e){let t=String(e?.name||e?.blueprint?.name||``),n=String(e?.description||e?.blueprint?.description||``),r=`${t} ${String(e?.behavior?.activity||``)} ${n}`;return/\b(bookshop|bookstore|library|boutique|florist|apothecary|pharmacy|emporium|post\s*office|market|general\s*store|shop|store)\b/i.test(t)?`shop_book`:/\b(bakery|patisserie|windmill|cafe|coffee|espresso|diner|bistro|burger|pizzeria|gelateria|restaurant|tea\s*house)\b/i.test(t)?`cafe_bakery`:/\b(pub|tavern|inn|cantina|saloon|bar|brewery|lounge|club|jukebox|casino|arcade)\b/i.test(t)?`pub_cantina`:/\b(datacentre|datacenter|server|pc|computer|cyber|lab|laboratory|observatory|factory|foundry|power\s*plant|reactor|quantum|tech|robotics|hangar)\b/i.test(t)?`tech_lab`:/\b(station|clocktower|terminal|depot|parliament|hall|courthouse|bank|firehouse|fire\s*station|police|hospital|clinic|school|academy|temple|church|cathedral|chapel|shrine)\b/i.test(t)?`civic_station`:/\b(sphere|dome|museum|gallery|cinema|theatre|theater|planetarium|aquarium|conservatory|greenhouse|pavilion|stadium|arena)\b/i.test(t)?`gallery_dome`:/\b(cottage|house|home|cabin|chalet|bungalow|manor|mansion|villa|resort|hotel|castle|palace|fortress|lighthouse|tower|barn|farmhouse)\b/i.test(t)?`cottage_manor`:/\b(bakery|pastry|bread|espresso|cafe|restaurant|burger|gelato)\b/i.test(r)?`cafe_bakery`:/\b(pub|tavern|cantina|bar|brew|jukebox)\b/i.test(r)?`pub_cantina`:/\b(datacentre|datacenter|server|lab|reactor|computer|cyber|observatory|factory)\b/i.test(r)?`tech_lab`:/\b(book|shop|store|market|library)\b/i.test(r)?`shop_book`:/\b(station|transit|parliament|civic|hall|clocktower|firehouse|temple|church)\b/i.test(r)?`civic_station`:/\b(museum|gallery|exhibit|sculpture|sphere|cinema|theatre)\b/i.test(r)?`gallery_dome`:`cottage_manor`}var Nf={cafe_bakery:{wall:`#f8efe0`,wainscot:`#8b5a36`,floorA:`#e6d7be`,floorB:`#cc7a57`,accent:`#df5246`,accent2:`#f0c24c`,rafter:`#754a2b`,lightHex:16766358},pub_cantina:{wall:`#e8dcc8`,wainscot:`#5e3920`,floorA:`#7d5130`,floorB:`#694225`,accent:`#be3438`,accent2:`#ffb642`,rafter:`#4f301a`,lightHex:16762490},tech_lab:{wall:`#dfe5ec`,wainscot:`#38404d`,floorA:`#464d59`,floorB:`#383e49`,accent:`#4ce8e0`,accent2:`#5ef28c`,rafter:`#2b303a`,lightHex:14218495},shop_book:{wall:`#f7f0e0`,wainscot:`#8c5f37`,floorA:`#c7925b`,floorB:`#b37f4a`,accent:`#6e9e6d`,accent2:`#d9a74a`,rafter:`#6e4727`,lightHex:16767390},cottage_manor:{wall:`#f5ecdc`,wainscot:`#825534`,floorA:`#c28c55`,floorB:`#ad7944`,accent:`#b85548`,accent2:`#6da862`,rafter:`#694226`,lightHex:16764812},civic_station:{wall:`#f2ece0`,wainscot:`#8d6340`,floorA:`#eae2d0`,floorB:`#d4cab6`,accent:`#479c8b`,accent2:`#e8b948`,rafter:`#62432b`,lightHex:16770229},gallery_dome:{wall:`#f8f6f0`,wainscot:`#d8d2c5`,floorA:`#d8b080`,floorB:`#caa070`,accent:`#5b63b8`,accent2:`#f2be38`,rafter:`#c8c2b6`,lightHex:16773334}};function Pf(e,t){let n={...Nf[t]||Nf.cottage_manor},r=e?.blueprint?.palette;if(!r||typeof r!=`object`)return n;let i={h:0,s:0,l:0},a=new Dn,o=null,s=.22,c=null,l=0,u=null,d=0;for(let[e,t]of Object.entries(r)){if(typeof t!=`string`)continue;let r=fu[t]||t;try{a.set(r)}catch{continue}a.getHSL(i);let f=e.toLowerCase();/glass|glow|fire|lava|eye|tire|black|rubber/.test(f)||(i.s>s&&i.l>.24&&i.l<.76&&(s=i.s,o=`#${a.getHexString()}`),(/plaster|cream|wall|lime|marble|stone|sage/.test(f)||i.l>.68&&i.s<.36)&&i.l>l&&(l=i.l,a.lerp(new Dn(n.wall),.45),c=`#${a.getHexString()}`),(/timber|wood|oak|brick|copper|slate|trim/.test(f)||i.l>=.16&&i.l<=.45&&i.s<.55)&&i.l>d&&(d=i.l,u=`#${a.getHexString()}`))}return o&&(n.accent=o),c&&t!==`tech_lab`&&(n.wall=c),u&&t!==`gallery_dome`&&(n.wainscot=u),n}function Ff(){let e=new Z(1409);e.box(-6,0,-3,6,1,3,`woodDark`),e.box(-5,0,-2,5,1,2,`#c89b62`);for(let[t,n]of[[-6,-3],[5,-3],[-6,2],[5,2]])e.put(t,0,n,`warmGlow`,.95);return Q(e,{scale:.105,castShadow:!1,receiveShadow:!0,depthLayer:3}).geometry}function If(e,t,n,r,i,a,o){let s=n-1,c=n+2,l=r-1,u=r+2;for(let t of[s,c-1])for(let n of[l,u-1])e.box(t,0,n,t+1,3,n+1,a);e.box(s,2,l,c,3,u,o||a),i===`-z`?e.box(s,3,u-1,c,7,u,a):i===`+z`?e.box(s,3,l,c,7,l+1,a):i===`+x`?e.box(s,3,l,s+1,7,u,a):i===`-x`&&e.box(c-1,3,l,c,7,u,a)}function Lf(e,t,n,r,i){e.box(t,0,n,t+1,3,n+1,r),e.box(t-1,3,n-1,t+2,4,n+2,i)}function Rf(e,t,n,r=`terracotta`){e.box(t-2,0,n-2,t+2,3,n+2,r),e.box(t-1,3,n-1,t+1,4,n+1,`soilDark`),e.box(t,4,n,t+1,7,n+1,`woodDark`),e.sphere(t+.5,8.2,n+.5,2.8,2.4,2.8,`leaf`),e.sphere(t+1.6,7.4,n+1.2,1.8,1.6,1.8,`leafLight`)}function zf(e){let t=Df(e?.id||e?.name||`room`),n=Mf(e),r=Pf(e,n),i=lf,a=uf,o=new bn;o.name=`interior-room-${e?.id||`default`}`;let s=new Z(t&1023),c=new Z(t+37&1023),l=[],u=[],d=[],f=[],p=[],m=[],h=(e,t=!1)=>(e?.geometry&&p.push(e.geometry),t&&e?.material&&m.push(e.material),e);s.box(-35,-2,-35,35,-1,35,`charcoal`),s.box(-35,-1,-35,35,0,35,(e,t,i)=>{if(n===`cafe_bakery`)return(e>>2)+(i>>2)&1?r.floorA:r.floorB;if(n===`tech_lab`)return!(e&7)||!(i&7)?`#2d333d`:(e>>3)+(i>>3)&1?r.floorA:r.floorB;if(n===`civic_station`)return Math.abs(e)>=28||Math.abs(i)>=28?`#c7bba2`:Math.abs(e)===27||Math.abs(i)===27?r.accent2:(e>>2)+(i>>2)&1?r.floorA:r.floorB;if(n===`gallery_dome`){let t=Math.hypot(e+.5,i+6.5);return t<9.5?t>8.2?r.accent2:`#f2eee4`:(e>>1)+(i>>3&1)&1?r.floorA:r.floorB}return n===`shop_book`&&e>=-14&&e<6&&i>=-2&&i<14?e===-14||e===5||i===-2||i===13?r.accent2:r.accent:n===`cottage_manor`&&e>=-12&&e<12&&i>=-18&&i<-2?e===-12||e===11||i===-18||i===-3?`#ead7b0`:r.accent:e+(i>>2&1)&1?r.floorB:r.floorA}),s.box(-7,-1,26,7,0,33,`#6e4628`),s.box(-6,-1,27,6,0,32,`#c89658`),(()=>{for(let[e,t,i,a]of[[-35,-35,35,-33],[-35,33,35,35],[-35,-33,-33,33],[33,-33,35,33]])s.box(e,0,t,i,8,a,r.wainscot),s.box(e,8,t,i,9,a,n===`tech_lab`?`steel`:`woodDark`),s.box(e,9,t,i,26,a,r.wall),s.box(e,26,t,i,28,a,r.rafter);for(let e of[-1,1])for(let t of[-1,1]){let n=e<0?-33:31,i=t<0?-33:31;s.box(n,0,i,n+2,27,i+2,r.rafter)}let e=n===`gallery_dome`||n===`tech_lab`?[[-18,-6]]:[[-21,-9],[5,17]];for(let[t,i]of e){let e=Math.floor((t+i)*.5);n===`shop_book`&&t<0||(s.clear(-35,9,t,-32,21,i),s.box(-35,9,t,-34,21,i,`#bce6fa`,1.15),s.box(-35,9,t,-34,12,i,`#fff1c4`,.95),s.box(-34,8,t-1,-32,9,i+1,r.rafter),s.box(-34,21,t-1,-32,22,i+1,r.rafter),s.box(-34,9,e,-33,21,e+1,r.rafter),s.box(-34,15,t,-33,16,i,r.rafter)),n===`cottage_manor`&&t<0||(s.clear(32,9,t,35,21,i),s.box(34,9,t,35,21,i,`#bce6fa`,1.15),s.box(34,9,t,35,12,i,`#fff1c4`,.95),s.box(32,8,t-1,34,9,i+1,r.rafter),s.box(32,21,t-1,34,22,i+1,r.rafter),s.box(33,9,e,34,21,e+1,r.rafter),s.box(33,15,t,34,16,i,r.rafter))}s.box(-35,28,-35,35,30,35,n===`gallery_dome`?`#f0ece2`:r.wall);for(let e=-24;e<=24;e+=12)s.box(-33,26,e-1,33,28,e+1,r.rafter);(n===`gallery_dome`||n===`civic_station`)&&(s.box(-11,27,-11,11,29,11,r.rafter),s.box(-9,28,-9,9,30,9,`#d8f2ff`,1.1)),s.box(-7,0,32,7,19,35,r.rafter),s.box(-5,0,33,5,15,35,n===`tech_lab`?`steelDark`:`oak`),s.box(-1,0,32,1,15,34,`woodDark`),s.put(-2,7,32,`brass`,.6),s.put(1,7,32,`brass`,.6),s.box(-5,16,33,5,18,35,`warmGlow`,1.2),s.box(-2,19,31,2,21,33,`#5ef28c`,1.1)})();let g=[[-12,-8],[12,8]],_=[];for(let[e,t]of g){s.box(e,23,t,e+1,28,t+1,`iron`),s.cone(e+.5,21,23,t+.5,3.2,1,n===`tech_lab`?`steel`:`brass`);let r=new Z(1511);r.box(-1,0,-1,2,2,2,n===`tech_lab`?`#b8f5ff`:`warmGlow`,1.55);let c=h(Q(r,{scale:a,castShadow:!1,depthLayer:3}));c.position.set((e+.5)*i,20.6*i,(t+.5)*i),o.add(c),_.push(c)}let v=new Va(r.lightHex,2.35,14.5,1.5);v.position.set(0,3.25,-.4),v.castShadow=!1,o.add(v);let y=new Va(16758892,1.55,9.5,1.6);y.position.set(0,1.6,-3.2),y.castShadow=!1,o.add(y);let b=!0,x=3.6,S=2.7,C=(t,n,r,i,a,o)=>{d.push({id:t,kind:`sit`,label:`Sit`,x:n,y:.65,z:r,seatTarget:{id:`${e.id}:${t}`,x:n,y:.06,z:r,eyeY:1.3,yaw:i,isInterior:!0,standX:a,standZ:o}})};if(n===`cafe_bakery`){s.box(-27,0,-32,-13,6,-18,`stone`),s.roundedBox(-27,6,-32,-13,15,-19,2.5,`brick`),s.box(-23,15,-31,-17,28,-25,`brickDark`),s.clear(-23,7,-23,-17,12,-18),s.box(-23,6,-24,-17,7,-18,`charcoal`),l.push({minX:-4.4,maxX:-2,minZ:-5.1,maxZ:-2.8});let e=new Z(1601);e.box(-4,0,-3,4,3,3,`fire`,1.5),e.box(-2,2,-2,2,5,2,`amber`,1.65);let t=h(Q(e,{scale:a,castShadow:!1,depthLayer:3}));t.position.set(-20*i,7*i,-21*i),o.add(t),y.color.setHex(16748092),y.position.set(-3.1,1.35,-2.9);let n=0;d.push({id:`stoke_oven`,kind:`interior_prop`,label:`Stoke Oven`,x:-3.2,y:1.25,z:-2.75,onTrigger:()=>{n=1,Tf(.22,.045),wf([330,440,554.37],.06,.16,`triangle`,.05)}}),f.push((e,r)=>{n=Math.max(0,n-e*.45);let i=1+Math.sin(r*11.5)*.14+n*.48;t.scale.set(1+n*.15,i,1),y.intensity=(b?1.5:1.9)+Math.sin(r*9.3)*.22+n*1.4}),s.box(-3,0,-22,24,6,-14,r.wainscot),s.box(-4,6,-23,25,7,-13,`marble`),s.box(-2,7,-21,12,11,-15,`glass`,.35),c.box(-2,15,-38,4,17,-34,`gold`),c.box(6,15,-38,12,17,-34,`#e89249`),c.box(14,15,-38,20,17,-34,`pink`),c.box(32,14,-40,44,22,-32,`chrome`),c.box(33,18,-32,43,21,-30,`copper`),c.box(35,14,-31,37,16,-29,`charcoal`),c.box(39,14,-31,41,16,-29,`cream`),l.push({minX:-.68,maxX:4.05,minZ:-3.72,maxZ:-2.05});let p=new Z(1607);p.sphere(0,0,0,1.6,2,1.6,`white`,.95);let m=h(Q(p,{scale:a,castShadow:!1,depthLayer:4}));m.visible=!1,o.add(m);let g=0;d.push({id:`brew_coffee`,kind:`interior_prop`,label:`Brew Coffee`,x:3,y:1.25,z:-2.2,onTrigger:()=>{g=2.8,Tf(.28,.04),wf([523.25,659.25,783.99],.07,.18,`sine`,.055)}}),f.push((e,t)=>{if(g>0){g=Math.max(0,g-e),m.visible=!0;let n=1-g%.9/.9;m.position.set(3.04+Math.sin(t*8)*.04,1.38+n*.55,-2.42),m.scale.setScalar(.55+n*.75)}else m.visible=!1});for(let[e,t]of[[-14,5],[14,6]])s.box(e,0,t,e+1,5,t+1,`iron`),s.cylinderAxis(`y`,e+.5,t+.5,5,6,3.6,`marble`),u.push({x:(e+.5)*i,z:(t+.5)*i,r:.6});Lf(s,-14,11,`woodDark`,r.accent),Lf(s,-8,5,`woodDark`,r.accent),Lf(s,14,12,`woodDark`,r.accent),u.push({x:-13.5*i,z:11.5*i,r:.28}),u.push({x:-7.5*i,z:5.5*i,r:.28}),u.push({x:14.5*i,z:12.5*i,r:.28}),C(`stool_l1`,-13.5*i,11.5*i,0,-13.5*i,15.8*i),C(`stool_l2`,-7.5*i,5.5*i,Math.PI/2,-3.2*i,5.5*i),C(`stool_r1`,14.5*i,12.5*i,0,14.5*i,16.8*i),Rf(s,-28,24)}else if(n===`pub_cantina`){s.box(-26,0,-32,8,18,-30,`woodDark`);for(let e=-24;e<=5;e+=3){let t=e%2==0?`#4ce8e0`:e%3==0?`#ffb642`:`#5ef28c`;c.box(e*2,18,-60,e*2+2,23,-58,t,.95),c.box(e*2+1,26,-60,e*2+3,31,-58,`#ec8db0`,.85)}s.box(-25,0,-21,9,6,-15,r.wainscot),s.box(-26,6,-22,10,7,-14,`oak`),s.box(-25,1,-14,9,2,-13,`brass`),c.box(-16,14,-34,-10,19,-32,`brass`),l.push({minX:-4.2,maxX:1.65,minZ:-3.6,maxZ:-2.05}),l.push({minX:-4.2,maxX:1.4,minZ:-5.2,maxZ:-4.7});for(let[e,t]of[[-18,-8,2]].flat().map((e,t)=>[t,e]))Lf(s,t,-9,`iron`,r.accent),u.push({x:(t+.5)*i,z:-8.5*i,r:.28}),C(`barstool_${e}`,(t+.5)*i,-8.5*i,0,(t+.5)*i,-3.5*i);s.roundedBox(16,0,-29,26,15,-21,2.2,`woodDark`),s.box(17,2,-21,25,9,-20,`charcoal`);let e=new Z(1613);e.box(-8,0,0,8,2,2,`#ff5ca8`,1.6),e.box(-8,12,0,8,14,2,`#4ce8e0`,1.6),e.box(-8,2,0,-6,12,2,`#ffb642`,1.5),e.box(6,2,0,8,12,2,`#ffb642`,1.5);let t=h(Q(e,{scale:a,castShadow:!1,depthLayer:3}));t.position.set(21*i,6*i,-20.5*i),o.add(t),l.push({minX:2.5,maxX:4.2,minZ:-4.7,maxZ:-3.25}),y.color.setHex(16744136),y.position.set(3.35,1.5,-2.9);let n=0;d.push({id:`play_jukebox`,kind:`interior_prop`,label:`Play Jukebox`,x:3.35,y:1.2,z:-3.15,onTrigger:()=>{n=5.5,wf([392,493.88,587.33,783.99,659.25],.085,.2,`square`,.045)}}),f.push((e,r)=>{n>0?(n=Math.max(0,n-e),t.scale.setScalar(1+Math.sin(r*14)*.06),y.intensity=2.4+Math.sin(r*12)*.65,y.color.setHSL(r*.35%1,.82,.62)):(t.scale.setScalar(1),y.intensity=b?1.35:1.75,y.color.setHex(16751964))}),s.box(18,0,4,31,5,9,`oak`),s.box(17,0,12,31,3,16,r.accent),s.box(17,3,15,31,8,17,r.accent),l.push({minX:2.75,maxX:5,minZ:.55,maxZ:1.55}),l.push({minX:2.75,maxX:5,minZ:1.9,maxZ:2.75}),C(`booth_seat`,23*i,13.5*i,0,13.5*i,11*i),x=-3.6,S=2.6}else if(n===`tech_lab`){for(let e of[-24,15]){s.box(e,0,-31,e+9,22,-22,`charcoal`),s.box(e+1,1,-22,e+8,21,-21,`slate`);for(let t=3;t<=19;t+=3)c.box((e+2)*2,t*2,-42,(e+5)*2,t*2+1,-41,`screenCyan`,1.45),c.box((e+6)*2,t*2,-42,(e+7)*2,t*2+1,-41,`screenGreen`,1.45);l.push({minX:e*i-.08,maxX:(e+9)*i+.08,minZ:-5,maxZ:-3.3})}s.cylinderAxis(`y`,0,-22,0,4,4.5,`steelDark`),s.ringAxis(`y`,0,-22,16,18,4.5,2.8,`steel`),u.push({x:0,z:-22*i,r:.8});let e=new Z(1621);e.sphere(0,0,0,2.8,3.8,2.8,`#4ce8e0`,1.65),e.ringAxis(`y`,0,0,-1,1,4.4,3.3,`#5ef28c`,1.4);let t=h(Q(e,{scale:a,castShadow:!1,depthLayer:3}));t.position.set(0,10.5*i,-22*i),o.add(t),y.color.setHex(5040352),y.position.set(0,1.75,-3.4),s.box(-12,0,-6,-10,5,-1,`steelDark`),s.box(10,0,-6,12,5,-1,`steelDark`),s.box(-13,5,-7,13,6,1,`slateLight`),c.box(-18,13,-11,-7,20,-9,`charcoal`),c.box(-17,14,-9,-8,19,-8,`screenCyan`,1.3),c.box(-6,13,-12,6,21,-10,`charcoal`),c.box(-5,14,-10,5,20,-9,`screenGreen`,1.35),c.box(7,13,-11,18,20,-9,`charcoal`),c.box(8,14,-9,17,19,-8,`screenCyan`,1.3),c.box(-5,12,-4,5,13,-1,`charcoal`),l.push({minX:-2.12,maxX:2.12,minZ:-1.16,maxZ:.2});let n=0;d.push({id:`pulse_console`,kind:`interior_prop`,label:`Pulse Console`,x:0,y:1.15,z:-.35,onTrigger:()=>{n=1,wf([523.25,783.99,1046.5,1318.5],.055,.16,`sine`,.055)}}),f.push((e,r)=>{n=Math.max(0,n-e*.42),t.rotation.y+=e*(1.5+n*7.5),t.position.y=10.5*i+Math.sin(r*3.2)*.08,t.scale.setScalar(1+n*.22),y.intensity=1.65+Math.sin(r*4.5)*.25+n*1.65}),If(s,c,0,6,`-z`,`steelDark`,r.accent),u.push({x:.5*i,z:6.5*i,r:.36}),C(`console_chair`,.5*i,6.5*i,0,0,12.5*i),If(s,c,-16,6,`+x`,`steelDark`,`#5b63b8`),u.push({x:-15.5*i,z:6.5*i,r:.36}),C(`side_chair`,-15.5*i,6.5*i,-Math.PI/2,-11*i,6.5*i)}else if(n===`shop_book`){let e=(e,t,n,r,a)=>{s.box(e,0,t,n,19,r,`woodDark`);let o=[`crimson`,`gold`,`teal`,`cream`,`indigo`,`terracotta`,`leaf`];for(let i=2;i<=15;i+=4)a?s.box(e+1,i,t+1,n-1,i+3,r,(e,t,n)=>o[Math.abs(e+i)%o.length]):s.box(e+1,i,t+1,n,i+3,r-1,(e,t,n)=>o[Math.abs(n+i)%o.length]);l.push({minX:e*i-.06,maxX:n*i+.06,minZ:t*i-.06,maxZ:r*i+.06})};e(-27,-33,4,-27,!0),e(-33,-25,-27,4,!1),s.box(10,0,-20,26,6,-13,r.wainscot),s.box(9,6,-21,27,7,-12,`oak`),c.box(38,14,-36,46,19,-30,`brass`),c.box(22,14,-34,28,17,-28,`teal`),l.push({minX:1.44,maxX:4.35,minZ:-3.4,maxZ:-1.9});let t=new Z(1627);t.box(-2,0,-2,2,1,2,`woodDark`),t.cone(0,1,3,0,1.8,.6,`gold`,.55);let n=h(Q(t,{scale:a,castShadow:!1,depthLayer:3}));n.position.set(16*i,7*i,-15*i),o.add(n);let p=0;d.push({id:`ring_bell`,kind:`interior_prop`,label:`Ring Bell`,x:16*i,y:1.2,z:-15*i,onTrigger:()=>{p=1,wf([1046.5,1318.5],.07,.28,`sine`,.065)}}),f.push((e,t)=>{p>0?(p=Math.max(0,p-e*2.6),n.position.y=7*i+Math.abs(Math.sin(t*24))*.09*p,n.rotation.z=Math.sin(t*32)*.22*p):(n.position.y=7*i,n.rotation.z=0)}),s.box(-6,0,4,-2,3,8,`oak`),c.box(-10,6,10,-6,8,14,`cream`),u.push({x:-4*i,z:6*i,r:.48}),s.roundedBox(-14,0,3,-9,4,9,1,r.accent),s.box(-14,4,3,-12,8,9,r.accent),u.push({x:-11.5*i,z:6*i,r:.48}),C(`armchair_l`,-11*i,6*i,-Math.PI/2,-11*i,13*i),s.roundedBox(1,0,3,6,4,9,1,`#cc7a57`),s.box(4,4,3,6,8,9,`#cc7a57`),u.push({x:3.5*i,z:6*i,r:.48}),C(`armchair_r`,3*i,6*i,Math.PI/2,3*i,13*i),Rf(s,27,23)}else if(n===`civic_station`){for(let[e,t]of[[-20,-16],[20,-16],[-20,10],[20,10]])s.box(e-2,0,t-2,e+3,2,t+3,`stone`),s.cylinderAxis(`y`,e+.5,t+.5,2,26,2.1,`marble`),s.box(e-2,25,t-2,e+3,27,t+3,`limestone`),u.push({x:(e+.5)*i,z:(t+.5)*i,r:.48});s.box(-15,11,-33,15,22,-31,`charcoal`);for(let e=13;e<=19;e+=2)c.box(-24,e*2,-62,-6,e*2+1,-61,`amber`,1.25),c.box(2,e*2,-62,18,e*2+1,-61,`screenGreen`,1.25);s.box(-14,0,-26,14,6,-20,r.wainscot),s.box(-15,6,-27,15,7,-19,`marble`),l.push({minX:-2.45,maxX:2.45,minZ:-4.4,maxZ:-3});let e=new Z(1633);e.cone(0,0,3,0,2,.6,`gold`,.65);let t=h(Q(e,{scale:a,castShadow:!1,depthLayer:3}));t.position.set(8*i,7*i,-21*i),o.add(t);let n=0;d.push({id:`station_bell`,kind:`interior_prop`,label:`Ring Bell`,x:8*i,y:1.2,z:-20*i,onTrigger:()=>{n=1,wf([783.99,987.77,1174.66],.08,.25,`triangle`,.06)}}),f.push((e,r)=>{n>0?(n=Math.max(0,n-e*2.5),t.rotation.z=Math.sin(r*28)*.28*n):t.rotation.z=0}),s.cylinderAxis(`y`,0,-4,0,5,3.2,`limestone`),s.sphere(0,7,-4,1.8,1.8,1.8,`gold`,.6),u.push({x:0,z:-4*i,r:.6}),s.box(-16,0,-6,-12,3,4,`oak`),s.box(-16,3,-6,-15,7,4,`woodDark`),l.push({minX:-2.62,maxX:-1.88,minZ:-1,maxZ:.68}),C(`bench_west`,-13.5*i,-1*i,-Math.PI/2,-8.5*i,-1*i),s.box(12,0,-6,16,3,4,`oak`),s.box(15,3,-6,16,7,4,`woodDark`),l.push({minX:1.88,maxX:2.62,minZ:-1,maxZ:.68}),C(`bench_east`,13.5*i,-1*i,Math.PI/2,8.5*i,-1*i)}else if(n===`gallery_dome`){s.box(-12,10,-33,12,22,-32,`woodDark`),s.box(-11,11,-32,11,21,-31,(e,t)=>t<14?`teal`:Math.hypot(e-4,t-18)<2.6?`gold`:t<17?`sky`:`indigo`);for(let[e,t,n]of[[-18,-12,`#df5246`],[18,-12,`#5ef28c`]])s.box(e-3,0,t-3,e+3,6,t+3,`marble`),s.ringAxis(`z`,e,9,t-1,t+1,2.8,1.3,n,.55),u.push({x:e*i,z:t*i,r:.65});s.cylinderAxis(`y`,0,-10,0,6,4.2,`marble`),u.push({x:0,z:-10*i,r:.78});let e=new Z(1641);e.ringAxis(`x`,0,0,-2,2,4.2,2.6,`gold`,.95),e.ringAxis(`z`,0,0,-2,2,3,1.6,`#4ce8e0`,1.25);let t=h(Q(e,{scale:a,castShadow:!1,depthLayer:3}));t.position.set(0,9.8*i,-10*i),o.add(t);let n=0;d.push({id:`spin_sculpture`,kind:`interior_prop`,label:`Spin Sculpture`,x:0,y:1.35,z:-10*i,onTrigger:()=>{n=1,wf([587.33,880,1174.66],.065,.22,`sine`,.055)}}),f.push((e,r)=>{n=Math.max(0,n-e*.4),t.rotation.y+=e*(.9+n*5.8),t.rotation.x=Math.sin(r*1.4)*.25,t.position.y=9.8*i+Math.sin(r*2.4)*.06}),s.box(-9,0,7,9,3,11,`oak`),l.push({minX:-1.48,maxX:1.48,minZ:1.08,maxZ:1.8}),C(`gallery_bench`,0,8.8*i,0,0,15.5*i)}else{s.box(-10,0,-33,10,12,-22,`stone`),s.box(-11,12,-33,11,13,-21,`oak`),s.box(-7,13,-33,7,28,-25,`stone`),s.clear(-6,1,-28,6,9,-21),s.box(-5,1,-27,5,2,-23,`woodDark`),l.push({minX:-1.72,maxX:1.72,minZ:-5.2,maxZ:-3.42});let e=new Z(1651);e.box(-5,0,-3,5,3,3,`fire`,1.55),e.box(-3,2,-2,3,6,2,`amber`,1.7);let t=h(Q(e,{scale:a,castShadow:!1,depthLayer:3}));t.position.set(0,2.1*i,-24.5*i),o.add(t),y.color.setHex(16747579),y.position.set(0,1.15,-3.5);let n=0;d.push({id:`stoke_hearth`,kind:`interior_prop`,label:`Stoke Hearth`,x:0,y:.95,z:-3.5,onTrigger:()=>{n=1,Tf(.24,.045),wf([329.63,440,523.25],.07,.18,`triangle`,.05)}}),f.push((e,r)=>{n=Math.max(0,n-e*.42);let i=1+Math.sin(r*10.5)*.15+Math.cos(r*16.3)*.08+n*.45;t.scale.set(1+n*.14,i,1),y.intensity=(b?1.55:2.05)+Math.sin(r*9.8)*.25+n*1.4}),s.box(-6,0,-14,6,3,-10,`oak`),c.box(-4,6,-25,0,8,-21,`cream`),c.box(3,6,-25,6,9,-22,`terracotta`),l.push({minX:-1,maxX:1,minZ:-2.28,maxZ:-1.56}),s.roundedBox(-10,0,-5,10,4,1,1,r.accent),s.box(-10,4,-1,10,8,1,r.accent),s.box(-10,3,-5,-8,6,1,r.accent),s.box(8,3,-5,10,6,1,r.accent),l.push({minX:-1.64,maxX:1.64,minZ:-.82,maxZ:.2}),C(`cottage_sofa`,0,-2.5*i,0,0,6.5*i),s.roundedBox(-18,0,-14,-13,4,-8,1,`#d9a74a`),s.box(-18,4,-14,-16,8,-8,`#d9a74a`),u.push({x:-15.5*i,z:-11*i,r:.48}),C(`cottage_chair`,-15*i,-11*i,-1.05,-14*i,-4*i),s.box(27,0,-20,33,18,-4,`woodDark`);for(let e=2;e<=14;e+=4)s.box(27,e,-19,32,e+3,-5,(e,t,n)=>n%2==0?`teal`:`gold`);l.push({minX:4.25,maxX:5.2,minZ:-3.25,maxZ:-.6}),Rf(s,-27,23)}let w=Math.round(x/i),T=Math.round(S/i);s.box(w-1,0,T-1,w+2,1,T+2,`brass`),s.box(w,1,T,w+1,10,T+1,`iron`),u.push({x:(w+.5)*i,z:(T+.5)*i,r:.3});let E=new Z(1663);E.cone(0,0,4,0,2.8,1.4,`warmGlow`,1.55);let D=h(Q(E,{scale:a,castShadow:!1,depthLayer:3}));if(D.position.set((w+.5)*i,9.8*i,(T+.5)*i),o.add(D),d.push({id:`toggle_lamp`,kind:`interior_prop`,label:`Toggle Lamp`,x:(w+.5)*i,y:1.25,z:(T+.5)*i,onTrigger:()=>{b=!b,v.intensity=b?2.35:.42,D.scale.setScalar(b?1:.86);for(let e of _)e.visible=b;wf(b?[523.25,659.25]:[659.25,440],.055,.12,`triangle`,.05)}}),s.size>0){let e=h(Q(s,{scale:i,castShadow:!1,receiveShadow:!1,depthLayer:0}));e.matrixAutoUpdate=!1,e.updateMatrix(),o.add(e)}if(c.size>0){let e=h(Q(c,{scale:a,castShadow:!1,receiveShadow:!1,depthLayer:2}));e.matrixAutoUpdate=!1,e.updateMatrix(),o.add(e)}return{roomId:e.id,theme:n,sig:`${e.id}:${e.name||``}:${Object.values(e.blueprint?.palette||{}).join(`,`)}`,group:o,boxObstacles:l,circleObstacles:u,hotspots:d,step(e,t){for(let n=0;n<f.length;n++)f[n](e,t)},dispose(){for(let e of p)e.dispose();for(let e of m)e.dispose()}}}function Bf({scene:e,getCreationEntities:t,getWorld:n,resolveExteriorWalkPosition:r}={}){let i=typeof r==`function`?r:(e,t)=>[e,t],a=new bn;a.name=`pocket-interior-sanctuary`,a.position.set(cf.x,cf.y,cf.z),a.visible=!1,e?.add?.(a);let o=new bn;o.name=`building-doorway-mats`,e?.add?.(o);let s=Ff(),c=``,l=0,u=new Map,d=null,f=null,p=null,m=null,h=null,g=0,_=new uo;_.layers.set(2);let v=new J,y=new J;function b(){let e=t?.();return e?e instanceof Map?e.values():Array.isArray(e)||typeof e[Symbol.iterator]==`function`?e:Object.values(e):[]}function x(e){if(!e)return null;let n=t?.();return n?n instanceof Map?n.get(e)||null:Array.isArray(n)?n.find(t=>t?.id===e)||null:n[e]||null:null}function S(e){let t=String(e||``).trim();if(!t)return null;let n=t.endsWith(`#sec`)||t.endsWith(`#tram`),r=n?t.replace(/#(?:sec|tram)$/,``):t,i=n?`${r}#sec`:r,a=x(r);return!a||a.data?.behavior?.type!==`vehicle_route`||n&&!a.secondaryVehicle?null:{canonicalRideId:i,baseId:r,isSecondary:n,ent:a,veh:n?a.secondaryVehicle:a}}function C(){if(d){o.visible=!1;return}o.visible=!0;let e=[],t=``;for(let n of b())n?.data&&Af(n.data)&&(e.push(n),t+=`${n.id}:${Math.round((n.x||0)*10)}:${Math.round((n.z||0)*10)}:${Math.round((n.yaw||0)*20)}|`);if(t===c)return;for(c=t;o.children.length;)o.remove(o.children[0]);let n=Ou(3);for(let t of e){let e=jf(t);if(!e)continue;let r=new fi(s,n);r.castShadow=!1,r.receiveShadow=!0;let i=Math.sin(e.buildingYaw),a=Math.cos(e.buildingYaw),c=e.footprintRadius+.42;r.position.set(t.x+i*c,.014,t.z+a*c),r.rotation.y=e.buildingYaw,r.matrixAutoUpdate=!1,r.updateMatrix(),o.add(r)}}function w(e){let t=e.id,n=`${t}:${e.name||``}:${Object.values(e.blueprint?.palette||{}).join(`,`)}`,r=u.get(t);if(r&&r.sig===n)return u.delete(t),u.set(t,r),r;r&&(a.remove(r.group),r.dispose(),u.delete(t));let i=zf(e);for(i.group.visible=!1,a.add(i.group),u.set(t,i);u.size>hf;){let e=null;for(let t of u.keys())if(t!==d?.roomId){e=t;break}if(!e)break;let t=u.get(e);u.delete(e),t&&(a.remove(t.group),t.dispose())}return i}function T(e,t=null){let r=x(e),s=r?.data||(n?.()?.creations||[]).find(t=>t.id===e)||null;if(!s||!Af(s))return{ok:!1,roomId:null,spawnLocal:null,creation:null};m=null,h=null;let c=jf(r||s);if(c){let[e,t]=i(c.exitX,c.exitZ);p={x:e,z:t,yaw:c.exitYaw,pitch:-.02}}else t&&Number.isFinite(t.x)&&(p={x:t.x,z:t.z,yaw:t.yaw||0,pitch:-.02});d&&(d.group.visible=!1);let l=w(s);return d=l,f=s,l.group.visible=!0,a.visible=!0,o.visible=!1,wf([440,554.37,659.25],.055,.14,`triangle`,.05),{ok:!0,roomId:s.id,spawnLocal:{x:0,y:0,z:3.85,yaw:0,pitch:-.03},creation:s}}function E(){if(!d)return{ok:!1,exteriorPose:null};let e=d.roomId;d.group.visible=!1,d=null,f=null,a.visible=!1,o.visible=!0,h?.isInterior&&(h=null);let t=p||{x:0,z:8,yaw:0,pitch:-.02},n=x(e);if(n){let e=jf(n);if(e){let[n,r]=i(e.exitX,e.exitZ);t={x:n,z:r,yaw:e.exitYaw,pitch:-.02}}}return wf([659.25,523.25],.055,.14,`triangle`,.05),{ok:!0,exteriorPose:t}}function D(){return!!d}function O(){return d?d.roomId:null}function k(){return f||null}function A(e=0,t=0){return 0}function j(e,t){let n=Math.max(-4.75,Math.min(df,Number(e)||0)),r=Math.max(-4.75,Math.min(df,Number(t)||0));if(!d)return[n,r];let i=ff;for(let e=0;e<2;e++){for(let e of d.circleObstacles){let t=e.r+i,a=n-e.x,o=r-e.z,s=Math.hypot(a,o);s<t&&(s>1e-4?(n=e.x+a/s*t,r=e.z+o/s*t):r=e.z+t)}for(let e of d.boxObstacles){let t=Math.max(e.minX,Math.min(e.maxX,n)),a=Math.max(e.minZ,Math.min(e.maxZ,r)),o=n-t,s=r-a,c=Math.hypot(o,s);if(c<i){if(c>1e-4)n=t+o/c*i,r=a+s/c*i;else{let t=n-(e.minX-i),a=e.maxX+i-n,o=r-(e.minZ-i),s=e.maxZ+i-r,c=Math.min(t,a,o,s);c===s?r=e.maxZ+i:c===o?r=e.minZ-i:n=c===t?e.minX-i:e.maxX+i}}}n=Math.max(-4.75,Math.min(df,n)),r=Math.max(-4.75,Math.min(df,r))}return[n,r]}let M=new WeakMap,N=new Wn,P=new Wn,F=new Gt;function I(e,t){let n=e?.group||null;if(n?.isObject3D){let e=M.get(n);e===void 0&&(N.makeEmpty(),n.traverse(e=>{if(!e.isMesh||e===t?.feedMesh||!e.geometry?.attributes?.position||(e.geometry.boundingBox||e.geometry.computeBoundingBox(),!e.geometry.boundingBox||e.geometry.boundingBox.isEmpty()))return;F.identity();let r=e;for(;r&&r!==n;)r.updateMatrix(),F.premultiply(r.matrix),r=r.parent;P.copy(e.geometry.boundingBox).applyMatrix4(F),N.union(P)}),e=N.isEmpty()?Math.max(.8,Number(n.userData?.topY||t?.topY||2.8)):Math.max(.8,N.max.y),M.set(n,e));let r=Number(n.scale?.y)>.01?Number(n.scale.y):1;return e*r}return Math.max(.8,Number(n?.userData?.topY||t?.topY||2.8))}function L(e){return Ef((Number(e)||0)+Math.PI)}function R(e,t=0){let n=S(e);if(!n)return null;let{canonicalRideId:r,isSecondary:i,ent:a,veh:o}=n,s=Number(o.x)||0,c=Number(o.y??.092),l=Number(o.z)||0,u=Number(o.yaw)||0,d=Number(o.moveFactor??0),f=I(o,a),p=Math.sin(u),h=Math.cos(u),_=-Math.cos(u),v=Math.sin(u),y=Math.max(0,Math.min(3,t|0)),b=.32-y%2*.72,x=y===0?0:y===1?-.26:y===2?.28:.26,C=s+p*b+_*x,w=l+h*b+v*x,T=d>.02?Math.sin(g*13+y*.9)*.008*d:0,E=c+f+.02+T,D=E+1.12,O=L(u),k=kf(a,i);return{x:C,y:E,z:w,eyeX:C,eyeY:D,eyeZ:w,yaw:O,deltaYaw:m&&m.rideId===r?m.deltaYaw:0,vehicleName:k}}function ee(e,t=0){let n=S(e);if(!n)return{ok:!1,rideId:null,seat:0,vehicleName:null,pose:null};d&&E(),h=null;let r=Math.max(0,Math.min(3,t|0)),i=kf(n.ent,n.isSecondary),a=L(n.veh.yaw||0);m={rideId:n.canonicalRideId,seat:r,vehicleName:i,prevHeadingYaw:a,deltaYaw:0};let o=R(n.canonicalRideId,r);return wf([392,523.25,659.25],.055,.14,`triangle`,.05),{ok:!0,rideId:n.canonicalRideId,seat:r,vehicleName:i,pose:o}}function te(){if(!m)return{ok:!1,exteriorPose:null};let e=m;m=null,h=null;let t=S(e.rideId);if(!t){let[e,t]=i(0,8);return{ok:!0,exteriorPose:{x:e,y:0,z:t,yaw:0,pitch:-.02}}}let{veh:n}=t,r=Number(n.x)||0,a=Number(n.z)||0,o=Number(n.yaw)||0,s=-Math.cos(o),c=Math.sin(o),l=Math.sin(o),u=Math.cos(o),d=null,f=1/0;for(let e of[1,-1])for(let t of[2.85,3.45,4.1]){let n=r+s*e*t+l*.35,o=a+c*e*t+u*.35,[p,m]=i(n,o),h=Math.hypot(p-n,m-o),g=Math.hypot(p-r,m-a),_=h*3+(g<2.4?(2.4-g)*8:0)+(e<0?.35:0);_<f&&(f=_,d=[p,m])}let[p,g]=d||i(r+s*3,a+c*3),_=L(o);return wf([587.33,440],.055,.13,`triangle`,.045),{ok:!0,exteriorPose:{x:p,y:0,z:g,yaw:_,pitch:-.02}}}function z(){return m&&!S(m.rideId)?(m=null,!1):!!m}function ne(){return z()?{rideId:m.rideId,seat:m.seat,vehicleName:m.vehicleName}:null}function re(e){if(!e||!Number.isFinite(e.x)||!Number.isFinite(e.z))return{ok:!1,pose:null};m=null;let t=!!e.isInterior,n=Number(e.x),r=Number(e.y)||0,i=Number(e.z),a=Number.isFinite(e.eyeY)?Number(e.eyeY):r+mf,o=Number(e.yaw)||0;return h={id:e.id||`seat`,x:n,y:r,z:i,eyeY:a,yaw:o,isInterior:t,standX:Number.isFinite(e.standX)?e.standX:n-Math.sin(o)*.85,standZ:Number.isFinite(e.standZ)?e.standZ:i-Math.cos(o)*.85},wf([440,523.25],.05,.11,`sine`,.04),{ok:!0,pose:ie()}}function B(){if(!h)return{ok:!1,pose:null};let e=h;h=null;let t=e.standX,n=e.standZ;return e.isInterior?[t,n]=j(t,n):[t,n]=i(t,n),{ok:!0,pose:{x:t,y:0,z:n,eyeY:pf,yaw:e.yaw,isInterior:e.isInterior}}}function V(){return!!h}function ie(){if(!h)return null;let{x:e,y:t,z:n,eyeY:r,yaw:i,isInterior:a}=h;return{x:e,y:t,z:n,eyeY:r,yaw:i,isInterior:a,worldX:a?cf.x+e:e,worldY:a?cf.y+t:t,worldZ:a?cf.z+n:n,worldEyeY:a?cf.y+r:r}}function ae(e=0,t=!1){return h&&(Math.abs(e)>.08||t)?B():null}function oe(e){let t=Number(e.x)||0,n=Number(e.z)||0,r=Number(e.yaw)||0,a=Math.sin(r),o=Math.cos(r),s=e.kind===`bus_stop`?.06:.1,c=t+a*s,l=n+o*s,u=Ef(r+Math.PI),[d,f]=i(t+a*1.05,n+o*1.05);return{id:e.id||`prop-${e.kind}`,x:c,y:.16,z:l,eyeY:1.4,yaw:u,isInterior:!1,standX:d,standZ:f}}function se(e,t,n,r,i,a){if(!e?.interactive?.trigger)return null;if(e.interactive.hitMeshes?.length){let o=Math.cos(a);v.set(t,n,r),y.set(-Math.sin(i)*o,Math.sin(a),-Math.cos(i)*o).normalize(),_.set(v,y),_.far=9;let s=_.intersectObjects(e.interactive.hitMeshes,!1);if(s.length>0&&s[0].object?.userData?.interactiveAction){let t=e.interactive.trigger(s[0].object.userData.interactiveAction);if(t!==void 0)return t}}let o=e.interactive.kind;if(o===`tic_tac_toe`){for(let t of[4,0,2,6,8,1,3,5,7]){let n=e.interactive.trigger({cell:t});if(n!==null)return n}return null}if(o===`connect_four`){for(let t of[3,2,4,1,5,0,6]){let n=e.interactive.trigger({col:t});if(n!==null)return n}return null}return o===`whack_a_mole`?e.interactive.trigger({hole:Math.floor(Math.random()*9)}):o===`floor_piano`?e.interactive.trigger({riff:!0}):o===`simon_synth`?e.interactive.trigger({pad:0}):o===`lights_out`?e.interactive.trigger({rune:4}):o===`basketball_hoop`?e.interactive.trigger({spot:1}):e.interactive.trigger({})}function ce({fpActive:e=!1,localX:t,localY:r,localZ:i,worldX:a=0,worldY:o=pf,worldZ:s=0,yaw:c=0,pitch:l=0}={}){if(z())return{kind:`hop_off`,id:m.rideId,label:`Hop off`,keyHint:`E`,execute:()=>te()};if(V())return{kind:`stand_up`,id:h.id||`seat`,label:`Stand up`,keyHint:`E`,execute:()=>B()};let u=-Math.sin(c),f=-Math.cos(c),p=Math.cos(l),g=u*p,_=Math.sin(l),v=f*p;if(d){let e=Number.isFinite(t)?t:a-cf.x,n=Number.isFinite(r)?r:o-cf.y,c=Number.isFinite(i)?i:s-cf.z,l=n>.4?n:pf,p=null,m=1/0;{let t=0-e,n=5.05-c,r=Math.hypot(t,n),i=r>1e-4?(t*u+n*f)/r:1;(r<1.55&&i>-.25||r<3&&i>.45||r<.95)&&(m=r*(1.25-.5*Math.max(0,i)),p={kind:`exit_building`,id:d.roomId,label:`Exit`,keyHint:`E`,execute:()=>E()})}for(let t of d.hotspots){let n=t.x-e,r=(t.y??1)-l,i=t.z-c,a=Math.hypot(n,i);if(a>2.75)continue;let o=a>1e-4?(n*u+i*f)/a:1,s=Math.hypot(n,r,i)||1,h=(n*g+r*_+i*v)/s;if(o<.28&&!(a<1.15&&o>-.1))continue;let y=a*(1.35-.58*Math.max(0,h));y<m&&(m=y,p={kind:t.kind,id:`${d.roomId}:${t.id}`,label:t.label,keyHint:`E`,execute:()=>t.kind===`sit`&&t.seatTarget?re(t.seatTarget):(t.onTrigger?.(),{ok:!0,id:t.id,label:t.label})})}return p}if(!e)return null;let y=Number(a)||0,x=Number(o)||pf,S=Number(s)||0,C=null,w=1/0;for(let e of b()){if(e?.data?.behavior?.type!==`vehicle_route`)continue;let t=[{rideId:e.id,veh:e,isSec:!1}];e.secondaryVehicle&&t.push({rideId:`${e.id}#sec`,veh:e.secondaryVehicle,isSec:!0});for(let n of t){let t=n.veh.x-y,r=n.veh.z-S,i=Math.hypot(t,r);if(i>=7.2)continue;let a=i>1e-4?(t*u+r*f)/i:1;if(a<.12&&i>3.7)continue;let o=n.veh.dwellingStop||(n.veh.moveFactor??1)<.25?.72:1,s=1.25-.52*Math.max(0,a),c=i*o*s;if(c<w){w=c;let t=kf(e,n.isSec);C={kind:`board_vehicle`,id:n.rideId,label:`Board ${t}`,keyHint:`E`,execute:()=>ee(n.rideId,0)}}}}if(C)return C;let D=null,O=1/0;for(let e of b()){if(!e?.data||!Af(e.data))continue;let t=jf(e);if(!t)continue;let n=t.doorX-y,r=t.doorZ-S,i=Math.hypot(n,r),a=e.x-y,o=e.z-S,s=Math.hypot(a,o),d=(t.footprintRadius||3.4)+3.4;if(i>=t.triggerRadius&&s>=d)continue;let p=i>1e-4?(n*u+r*f)/i:1,m=s>1e-4?(a*u+o*f)/s:1,h=i<t.triggerRadius&&(p>-.15||m>.05||i<2.15);if(!h&&!(s<d&&m>.36))continue;let g=h?i*.85:s-t.footprintRadius*.65,_=Math.max(.2,g)*(1.28-.45*Math.max(p,m,0));if(_<O){O=_;let t=Of(e.data.name,`Building`,2);D={kind:`enter_building`,id:e.id,label:`Enter ${t}`,keyHint:`E`,execute:()=>T(e.id,{x:y,z:S,yaw:c,pitch:l})}}}if(D)return D;let k=null,A=1/0;for(let e of b()){if(!e?.interactive)continue;let t=e.x-y,n=e.z-S,r=Math.hypot(t,n),i=Math.max(0,Math.min(2.2,(e.footprintRadius||1.8)-1.5)),a=Math.max(0,r-i);if(a>=5)continue;let o=r>1e-4?(t*u+n*f)/r:1;if(o<.28&&r>2.2)continue;let s=a*(1.3-.5*Math.max(0,o));if(s<A){A=s;let t=xf.has(e.interactive.kind)?`Play`:`Trigger`,n=Of(e.data?.name,`Contraption`,2);k={kind:`interactive_creation`,id:e.id,label:`${t} ${n}`,keyHint:`E`,execute:()=>({ok:!0,creation:e.data,message:se(e,y,x,S,c,l)})}}}if(k)return k;let j=n?.()?.props||[],M=null,N=1/0;for(let e of j){if(e.kind!==`bench`&&e.kind!==`bus_stop`)continue;let t=e.x-y,n=e.z-S,r=Math.hypot(t,n);if(r>=2.6)continue;let i=r>1e-4?(t*u+n*f)/r:1;if(i<.22&&!(r<1.35&&i>-.15))continue;let a=r*(1.3-.45*Math.max(0,i));a<N&&(N=a,M={kind:`sit`,id:e.id||`prop-${e.kind}`,label:`Sit`,keyHint:`E`,execute:()=>re(oe(e))})}return M}function le(e,t,n=null){if(g=Number(t)||0,h&&n&&(Math.hypot(n.inFwd||0,n.inRight||0)>.08||n.jumping)&&B(),m){let e=S(m.rideId);if(!e)m=null;else{let t=L(e.veh.yaw||0);m.deltaYaw=Ef(t-m.prevHeadingYaw),m.prevHeadingYaw=t}}d?d.step(e,g):(l-=e,l<=0&&(l=.5,C()))}function ue(){m=null,h=null,d=null,f=null;for(let e of u.values())a.remove(e.group),e.dispose();u.clear(),e?.remove?.(a),e?.remove?.(o),s.dispose()}return{enterBuilding:T,exitBuilding:E,isInside:D,getCurrentRoomId:O,getCurrentCreation:k,resolveInteriorWalkPosition:j,getInteriorFloorHeight:A,boardVehicle:ee,hopOffVehicle:te,isRiding:z,getRidingState:ne,computePassengerPose:R,sitAt:re,standUp:B,isSitting:V,getSeatPose:ie,handleMovementWake:ae,findBestInteractionTarget:ce,step:le,dispose:ue}}function Vf(e){let t=Number(e)||0;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function Hf(e,t,n){return e<t?t:e>n?n:e}function Uf(e){let t=Hf(e,0,1);return t*t*(3-2*t)}var Wf={tiny:.12,small:.17,medium:.23,large:.31,landmark:.37,colossal:.44,hero:.23};function Gf(e,t=.78){let n=Wf[e?.data?.scaleClass||e?.data?.blueprint?.scaleClass||`medium`]||.23,r=e?.data?.blueprint?.stats;if(r&&Number(r.footprintX)>0&&Number(r.footprintZ)>0)return{halfX:Math.max(.7,Number(r.footprintX)*n*.5*t),halfZ:Math.max(.7,Number(r.footprintZ)*n*.5*t)};let i=Math.max(.85,(e?.footprintRadius||3.2)*.65*t);return{halfX:i,halfZ:i}}function Kf(e,t=.23,n=!1,r=!1){if(r)return n?{hw:.84,hl:2.32,mass:1.45}:{hw:.92,hl:2.68,mass:1.75};let i=e?.blueprint?.stats||{},a=(Number(i.footprintX)||10)*t*.5,o=(Number(i.footprintZ)||15)*t*.5,s=Math.min(a,o),c=Math.max(a,o),l=Hf(s*.76,.66,1.22),u=Hf(c*.82,1.15,2.95),d=e?.scaleClass||e?.blueprint?.scaleClass||`medium`;return{hw:l,hl:u,mass:d===`colossal`||d===`large`?1.65:d===`small`||d===`tiny`?.85:1.15}}function qf(e=0){return{hw:.92,hl:2.1,mass:1.15,currentSpeed:0,vx:0,vz:0,frameStartX:NaN,frameStartZ:NaN,passOffset:0,passHoldTimer:0,wedgeBiasOffset:0,wedgeBiasTimer:0,politeWait:!1,seedBiasSign:e%2==0?-1:1,clashPitch:0,clashPitchVel:0,clashRoll:0,clashRollVel:0,turnBankRoll:0,clashCooldown:0,turnState:null,pendingTurnAtEnd:null,anchorX:NaN,anchorZ:NaN,stuckSec:0,recentClashCount:0,recentClashWindowTimer:0,lastIncidentReportAt:-120,lastClashPeerId:null}}var Jf={hit:!1,nx:0,nz:1,depth:0,contactX:0,contactZ:0};function Yf(e,t,n,r,i,a,o,s,c,l,u=.02){let d=e-a,f=t-o,p=r+i+c+l+u;if(Math.abs(d)>p||Math.abs(f)>p)return Jf.hit=!1,Jf;let m=Math.sin(n),h=Math.cos(n),g=-h,_=m,v=Math.sin(s),y=Math.cos(s),b=-y,x=v,S=r+u*.5,C=i+u*.5,w=c+u*.5,T=l+u*.5,E=1/0,D=0,O=1;for(let e=0;e<4;e++){let t,n;e===0?(t=g,n=_):e===1?(t=m,n=h):e===2?(t=b,n=x):(t=v,n=y);let r=d*t+f*n,i=Math.abs(r),a=S*Math.abs(t*g+n*_)+C*Math.abs(t*m+n*h)+(w*Math.abs(t*b+n*x)+T*Math.abs(t*v+n*y))-i;if(a<=0)return Jf.hit=!1,Jf;if(a<E){E=a;let e=r>=0?1:-1;D=t*e,O=n*e}}return Jf.hit=!0,Jf.nx=D,Jf.nz=O,Jf.depth=E,Jf.contactX=(e+a)*.5,Jf.contactZ=(t+o)*.5,Jf}var Xf={hit:!1,nx:0,nz:1,depth:0};function Zf(e,t,n,r,i,a,o,s){let c=a-e,l=o-t,u=r+i+s;if(Math.abs(c)>u||Math.abs(l)>u)return Xf.hit=!1,Xf;let d=Math.sin(n),f=Math.cos(n),p=-f,m=d,h=c*p+l*m,g=c*d+l*f,_=Hf(h,-r,r),v=Hf(g,-i,i),y=h-_,b=g-v,x=y*y+b*b;if(x>=s*s)return Xf.hit=!1,Xf;if(x>1e-6){let e=Math.sqrt(x),t=y*p+b*d,n=y*m+b*f;return Xf.hit=!0,Xf.nx=-t/e,Xf.nz=-n/e,Xf.depth=s-e,Xf}let S=r-Math.abs(h),C=i-Math.abs(g);if(Xf.hit=!0,S<=C){let e=h>=0?-1:1;Xf.nx=p*e,Xf.nz=m*e,Xf.depth=S+s}else{let e=g>=0?-1:1;Xf.nx=d*e,Xf.nz=f*e,Xf.depth=C+s}return Xf}function Qf(e,t,n,r,i,a,o,s){let c=Zf(r,i,a,o,s,e,t,n);return c.hit?[e-c.nx*c.depth,t-c.nz*c.depth]:null}function $f(e,t,n,r,i,a,o,s){let c=99;if(s){let[r,i]=s(e,t,n+1.1),a=Math.hypot(r-e,i-t);a>.05&&(c=Math.min(c,-a))}if(o){let r=Math.hypot(e-o[0],t-o[1])-(1.85+n);c=Math.min(c,r)}if(i)for(let r=0;r<i.length;r++){let a=i[r],o=Math.hypot(e-a.x,t-a.z)-(Math.max(1.5,(a.radius||6.4)-.35)+n);c=Math.min(c,o)}if(r)for(let i=0;i<r.length;i++){let o=r[i];if(!o||o===a||o.interactive?.allowWalkOver||o.data?.category!==`building`&&o.data?.behavior?.type!==`landmark`)continue;let s=Gf(o,.78),l=o.yaw||0,u=Math.sin(l),d=Math.cos(l),f=-d,p=u,m=e-o.x,h=t-o.z,g=Math.abs(m*f+h*p)-s.halfX,_=Math.abs(m*u+h*d)-s.halfZ;c=Math.min(c,(g>0&&_>0?Math.hypot(g,_):Math.max(g,_))-n)}return c}function ep({routeCurve:e,routeLength:t,whichEnd:n,curX:r,curZ:i,curYaw:a,curLaneOffset:o,targetReturnLane:s,hw:c,hl:l,speed:u,buildingPeers:d,ponds:f,selfEnt:p,citySignPos:m,clampPointToIslandFn:h}){let g=n===`end`?-1:1,_=Math.max(.82,c*.9),v=[.95,2.6,4.8,7.2],y=null,b=-1/0,x=Math.sin(a),S=Math.cos(a),C=-S,w=x;for(let a=0;a<v.length;a++){let o=v[a];if(o>t*.36)continue;let c=n===`end`?Math.max(.25,t-o):Math.min(t-.25,o),l=Hf(c/t,.002,.998),u=e.getPointAt(l),T=e.getTangentAt(l),E=Math.atan2(T.x*g,T.z*g),D=-Math.cos(E),O=Math.sin(E),k=u.x+D*s,A=u.z+O*s,j=k-r,M=A-i,N=j*x+M*S,P=j*C+M*w;for(let e of[-1,1]){let t=2.55,n=r+x*(Math.max(0,N*.5)+t)+C*(P*.5+e*.85),o=i+S*(Math.max(0,N*.5)+t)+w*(P*.5+e*.85),s=r+t*.55*x+e*1.45*C,l=i+t*.55*S+e*1.45*w,u=$f(n,o,_,d,f,p,m,h),g=$f(s,l,_,d,f,p,m,h),v=$f(k,A,_*.85,d,f,p,m,h),T=Math.min(u,g,v),D=T*3-a*.45+(e===-1?.35:0);D>b&&(b=D,y={minClear:T,candDist:c,endYaw:E,fEnd:N,rDelta:P,side:e,bulbFwd:Hf(2.35+Math.min(1.1,Math.max(0,T)*.3),2.1,3.4)})}}let T=y||{minClear:-1,candDist:n===`end`?Math.max(.25,t-.95):Math.min(t-.25,.95),endYaw:Vf(a+Math.PI),fEnd:0,rDelta:-2*o,side:-1,bulbFwd:2.35},E=T.minClear>=-.05?`uturn`:`three_point`,D=Hf(u||5.2,3.2,7.5),O=Hf(T.fEnd,-6,4.2),k=Math.hypot(O,T.rDelta)+Math.PI*Math.max(1.6,Math.abs(T.rDelta)*.65)+2.8,A=Math.max(1.85,D*.5);return{mode:E,elapsed:0,duration:E===`uturn`?Hf(k*1.35/A,3.2,5.4):Hf(k*1.45/A+l*.15,3.8,5.8),anchorX:r,anchorZ:i,startYaw:a,endYaw:T.endYaw,fEnd:O,rDelta:T.rDelta,bulbFwd:T.bulbFwd,side:T.side,nextDir:g,nextRouteDist:T.candDist,nextLaneOffset:s}}var tp={x:0,z:0,yaw:0,gear:1,speedFactor:.45,steerRoll:0,done:!1};function np(e,t){e.elapsed+=t;let n=Hf(e.elapsed/Math.max(1,e.duration),0,1),r=Math.sin(e.startYaw),i=Math.cos(e.startYaw),a=-i,o=r,s=Vf(e.endYaw-e.startYaw);e.side<0&&s>2.55?s-=Math.PI*2:e.side>0&&s<-2.55&&(s+=Math.PI*2);let c=0,l=0,u=e.startYaw,d=1,f=.45,p=0;if(e.mode===`uturn`){let t=.35*n+.65*Uf(n),r=t*Math.PI,i=Math.sin(r),a=Math.cos(r),o=Math.abs(e.rDelta)>=.4?e.rDelta*.5:e.side*1.15,d=o>=0?1:-1,m=d*Math.max(1.45,Math.abs(o)),h=Math.max(1.75,-e.fEnd/Math.PI+1.1),g=Math.max(h,Math.min(e.bulbFwd+.8,Math.abs(m)*1.08)),_=(m-o)*i*i;c=e.fEnd*t+g*i,l=o*(1-a)+_,u=Vf(e.startYaw+s*t),f=.28+.38*Math.sin(n*Math.PI),p=Hf(d*.032*Math.sin(n*Math.PI),-.045,.045)}else{let t=1.55,r=e.side*1.12,i=Hf(e.fEnd*.65-.8,-2.2,.75),a=e.rDelta*.72-e.side*.45,o=e.startYaw+s*.38,m=e.startYaw+s*.78,h=e.startYaw+s;if(n<.36){let i=Uf(n/.36);c=t*Math.sin(i*Math.PI*.5),l=r*(1-Math.cos(i*Math.PI*.5)),u=Vf(e.startYaw+(o-e.startYaw)*i),d=1,f=.38*Math.sin(n/.36*Math.PI),p=-Math.sign(s)*.025*Math.sin(n/.36*Math.PI)}else if(n<.72){let e=Uf((n-.36)/.36);c=t+(i-t)*e,l=r+(a-r)*e,u=Vf(o+(m-o)*e),d=-1,f=.34*Math.sin((n-.36)/.36*Math.PI),p=Math.sign(s)*.022*Math.sin((n-.36)/.36*Math.PI)}else{let t=Uf((n-.72)/.28);c=i+(e.fEnd-i)*t,l=a+(e.rDelta-a)*t,u=Vf(m+(h-m)*t),d=1,f=.22+.42*t,p=-Math.sign(s)*.024*Math.sin(t*Math.PI)}}return tp.x=e.anchorX+r*c+a*l,tp.z=e.anchorZ+i*c+o*l,tp.yaw=u,tp.gear=d,tp.speedFactor=f,tp.steerRoll=p,tp.done=n>=1,tp}var rp={speedScale:1,extraLaneOffset:0,yielding:!1},ip=[];function ap(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n];if(!r||r.data?.behavior?.type!==`vehicle_route`||!r.routeCurve)continue;r.phys||=qf(r.index||n);let i=ip[t];if(i||=ip[t]={},i.unitId=r.id,i.creationId=r.id,i.isSecondary=!1,i.isSeed=!!r.data?.isSeed,i.ent=r,i.veh=r,i.phys=r.phys,t++,r.secondaryVehicle){let e=r.secondaryVehicle;e.phys||=qf((r.index||n)+31);let i=ip[t];i||=ip[t]={},i.unitId=`${r.id}#sec`,i.creationId=r.id,i.isSecondary=!0,i.isSeed=!!r.data?.isSeed,i.ent=r,i.veh=e,i.phys=e.phys,t++}}return ip.length=t,ip}function op({selfUnitId:e,x:t,z:n,yaw:r,cruiseLane:i=1.12,hw:a,hl:o,speed:s,pullingOver:c,isSeed:l,phys:u,vehicleEntities:d,buildingPeers:f,ponds:p,selfEnt:m,citySignPos:h,clampPointToIslandFn:g,dt:_=.016}){rp.speedScale=1,rp.extraLaneOffset=0,rp.yielding=!1,u&&(u.politeWait=!1,u.passHoldTimer>0&&(u.passHoldTimer=Math.max(0,u.passHoldTimer-_)),u.wedgeBiasTimer>0&&(u.wedgeBiasTimer=Math.max(0,u.wedgeBiasTimer-_)));let v=Math.sin(r),y=Math.cos(r),b=-y,x=v,S=!1;for(let r=0;r<d.length;r++){let i=d[r];if(i&&i.data?.behavior?.type===`vehicle_route`&&i.routeCurve){for(let r=0;r<2;r++){let s=r===0?i:i.secondaryVehicle;if(!s||(r===0?i.id:`${i.id}#sec`)===e)continue;let c=s.x-t,l=s.z-n;if(Math.abs(c)>21||Math.abs(l)>21)continue;let u=c*v+l*y;if(u<-3.8||u>19.5)continue;let d=c*b+l*x,f=s.yaw||0,p=v*Math.sin(f)+y*Math.cos(f);if(p<-.25&&d<a+(s.phys?.hw||.92)+.95||p>=-.25&&d<-.45&&Math.abs(u)<o+(s.phys?.hl||2.1)+1.8){S=!0;break}}if(S)break}}let C=!0;if(f||p||h||g){let e=-2.25,r=$f(t+b*e,n+x*e,a*.85,f,p,m,h,g),i=$f(t+v*4.2+b*e,n+y*4.2+x*e,a*.85,f,p,m,h,g);(r<-.05||i<-.05)&&(C=!1)}let w=!c&&!S&&C;u&&u.passHoldTimer>0&&(S?u.passHoldTimer=0:rp.extraLaneOffset=Math.min(rp.extraLaneOffset,u.passOffset));for(let r=0;r<d.length;r++){let c=d[r];if(c&&c.data?.behavior?.type===`vehicle_route`&&c.routeCurve)for(let r=0;r<2;r++){let d=r===0?c:c.secondaryVehicle;if(!d)continue;let _=r===0?c.id:`${c.id}#sec`;if(_===e)continue;let S=d.x,C=d.z,T=S-t,E=C-n,D=Math.hypot(T,E);if(D>18||D<.001)continue;let O=d.phys,k=O?.hw||.92,A=O?.hl||2.1,j=d.yaw||0,M=Math.sin(j),N=Math.cos(j),P=v*M+y*N,F=T*v+E*y,I=T*b+E*x,L=Math.abs(I),R=o+A+1.45,ee=a+k+.48,te=!!O?.turnState,z=!!d.dwellingStop&&!te,ne=r===1?d.speed||4.35:c.effectiveSpeed||c.data?.behavior?.speed||5.5,re=O&&Number.isFinite(O.currentSpeed)?O.currentSpeed:(d.moveFactor??0)*ne;if(te&&F>-1.2&&F<R+5.5&&D<11){let e=Hf((D-(o+A+1.9))/5.2,0,1);rp.speedScale=Math.min(rp.speedScale,e),rp.yielding=!0,u&&e<.35&&(u.politeWait=!0)}else if(P>.38){if(F>-(o+A+.9)&&F<R+8.5){if(w&&(z||re<(s||5.4)-.32||u&&u.passHoldTimer>0)){let e=Hf((d.currentLaneOffset??i)-(a+k+.68),-2.15,-1.05)-i;if(rp.extraLaneOffset=Math.min(rp.extraLaneOffset,e),u&&(u.passOffset=e,u.passHoldTimer=1.15),F>.2&&L<ee){let e=Hf((F-(o+A+.55))/4.2,.2,.88);rp.speedScale=Math.min(rp.speedScale,e)}else rp.speedScale=Math.min(rp.speedScale,.94)}else if(F>.15&&L<ee+.45){let e=F-R,t=e<=0?0:Hf(e/5.4,0,1);rp.speedScale=Math.min(rp.speedScale,t),t<.35&&(rp.yielding=!0,u&&(u.politeWait=!0))}}}else if(P<-.35){if(F>-(o+A+.8)&&F<R+9){if(L<ee+.85){let e=!0;if((f||p||h||g)&&(e=$f(t+b*.75,n+x*.75,a*.82,f,p,m,h,g)>=-.05),e){let e=Hf((ee+.65-L)*.65,.22,.78);rp.extraLaneOffset=Math.max(rp.extraLaneOffset,e)}rp.speedScale=Math.min(rp.speedScale,.88)}if(L<ee-.05&&F>0&&F<R+2.8){let t=!!c.data?.isSeed;if(!l&&t||l===t&&e>_){let e=Hf((F-(o+A+1.2))/3.2,0,.35);rp.speedScale=Math.min(rp.speedScale,e),rp.yielding=!0,u&&(u.politeWait=!0)}}}}else if(F>-.6&&D<11){let r=s||5.4,i=!1;for(let e=1;e<=3;e++){let a=e*.5,s=t+v*r*a,c=n+y*r*a,l=S+M*re*a,u=C+N*re*a;if(Math.hypot(l-s,u-c)<o+A+.95){i=!0;break}}if(i){let t=-T*M+-E*N<F-.9&&re>.35,n=!!c.data?.isSeed;if(t||!z&&(!l&&n||l===n&&e>_)){let e=D-(o+A+1.35),t=e<=0?0:Hf(e/4.4,0,.55);rp.speedScale=Math.min(rp.speedScale,t),rp.yielding=!0,u&&t<.35&&(u.politeWait=!0)}}}}}return u&&u.wedgeBiasTimer>0&&rp.extraLaneOffset===0&&(rp.extraLaneOffset=u.wedgeBiasOffset),rp.speedScale=Hf(rp.speedScale,0,1),rp}function sp({dt:e,t,vehicleEntities:n,buildingEntities:r,pondProps:i,allEntities:a,citySignPos:o,clampPointToIslandFn:s}){let c=ap(n);if(c.length===0)return;let l=Math.max(.001,Math.min(.05,e||.016)),u=Math.max(.015,1.9*l);for(let e=0;e<c.length;e++){let t=c[e].phys;t.clashCooldown>0&&(t.clashCooldown=Math.max(0,t.clashCooldown-l)),t.recentClashWindowTimer>0&&(t.recentClashWindowTimer=Math.max(0,t.recentClashWindowTimer-l),t.recentClashWindowTimer<=0&&(t.recentClashCount=0))}for(let e=0;e<2;e++){for(let t=0;t<c.length;t++){let n=c[t];for(let r=t+1;r<c.length;r++){let t=c[r],i=Yf(n.veh.x,n.veh.z,n.veh.yaw,n.phys.hw,n.phys.hl,t.veh.x,t.veh.z,t.veh.yaw,t.phys.hw,t.phys.hl,0);if(!i.hit)continue;let a=i.nx,o=i.nz,s=i.depth,l=n.phys.mass*(n.veh.dwellingStop&&!n.phys.turnState?2.5:1),d=t.phys.mass*(t.veh.dwellingStop&&!t.phys.turnState?2.5:1),f=1/l,p=1/d,m=f+p,h=f/m,g=p/m,_=Math.min(u,s*h),v=Math.min(u,s*g);if(n.veh.x+=a*_,n.veh.z+=o*_,t.veh.x-=a*v,t.veh.z-=o*v,e===0){let e=Math.sin(n.veh.yaw),r=Math.cos(n.veh.yaw),i=Math.sin(t.veh.yaw),s=Math.cos(t.veh.yaw);a*e+o*r<-.35&&(n.phys.currentSpeed*=.65),-a*i-o*s<-.35&&(t.phys.currentSpeed*=.65);let c=n.phys.vx-t.phys.vx,l=n.phys.vz-t.phys.vz,u=-(c*a+l*o);if(u>.45&&n.phys.clashCooldown<=0){let t=Hf(u*.012,.008,.032),i=-r,s=e;n.phys.clashPitchVel+=(a*e+o*r)*t*6*h*2,n.phys.clashRollVel+=-(a*i+o*s)*t*7*h*2,n.phys.clashCooldown=.45}if(u>.45&&t.phys.clashCooldown<=0){let e=Hf(u*.012,.008,.032),n=-s,r=i;t.phys.clashPitchVel+=(-a*i-o*s)*e*6*g*2,t.phys.clashRollVel+=-(-a*n-o*r)*e*7*g*2,t.phys.clashCooldown=.45}}}}for(let t=0;t<c.length;t++){let n=c[t],l=n.veh,d=n.phys;if(o){let e=Zf(l.x,l.z,l.yaw,d.hw,d.hl,o[0],o[1],1.8);if(e.hit){let t=Math.min(u*1.25,e.depth);l.x+=e.nx*t,l.z+=e.nz*t}}if(i)for(let e=0;e<i.length;e++){let t=i[e],n=Zf(l.x,l.z,l.yaw,d.hw,d.hl,t.x,t.z,Math.max(1.5,(t.radius||6.4)-.35));if(n.hit){let e=Math.min(u*1.25,n.depth);l.x+=n.nx*e,l.z+=n.nz*e}}if(r)for(let e=0;e<r.length;e++){let t=r[e];if(!t||t===n.ent||t.interactive?.allowWalkOver||t.data?.category!==`building`&&t.data?.behavior?.type!==`landmark`)continue;let i=Gf(t,.78),a=Yf(l.x,l.z,l.yaw,d.hw,d.hl,t.x,t.z,t.yaw||0,i.halfX,i.halfZ,0);if(a.hit){let e=Math.min(u*1.25,a.depth);l.x+=a.nx*e,l.z+=a.nz*e}}if(e===0&&a)for(let e=0;e<a.length;e++){let t=a[e];if(!t||t===n.ent||t.data?.behavior?.type!==`wander`||t.data.behavior.style===`glide`)continue;let r=Hf((t.footprintRadius||1.5)*.4,.55,1.8),i=Zf(l.x,l.z,l.yaw,d.hw,d.hl,t.x,t.z,r);if(i.hit){let e=Math.min(u,i.depth);l.x+=i.nx*e*.25,l.z+=i.nz*e*.25,t.x-=i.nx*i.depth*.75,t.z-=i.nz*i.depth*.75,t.group?.position?.set(t.x,t.group.position.y,t.z)}}if(s){let[e,t]=s(l.x,l.z,d.hw+.9);l.x=e,l.z=t}}}for(let e=0;e<c.length;e++){let n=c[e],a=n.ent,u=n.veh,d=n.phys;u.y=.092;let f=n.isSecondary?u.speed||4.35:a.effectiveSpeed||a.data?.behavior?.speed||5.6;if(Number.isFinite(d.frameStartX)&&Number.isFinite(d.frameStartZ)){let e=u.x-d.frameStartX,t=u.z-d.frameStartZ,n=Math.hypot(e,t),r=f*l;if(n>r&&n>1e-6){let i=r/n;u.x=d.frameStartX+e*i,u.z=d.frameStartZ+t*i}d.vx=(u.x-d.frameStartX)/l,d.vz=(u.z-d.frameStartZ)/l}if(d.clashPitchVel+=(-72*d.clashPitch-14*d.clashPitchVel)*l,d.clashPitch=Hf(d.clashPitch+d.clashPitchVel*l,-.04,.04),d.clashRollVel+=(-72*d.clashRoll-14*d.clashRollVel)*l,d.clashRoll=Hf(d.clashRoll+d.clashRollVel*l,-.045,.045),u.dwellingStop||d.turnState||d.politeWait)d.anchorX=u.x,d.anchorZ=u.z,d.stuckSec=Math.max(0,d.stuckSec-l*2);else if(Number.isFinite(d.anchorX)&&Number.isFinite(d.anchorZ)||(d.anchorX=u.x,d.anchorZ=u.z),Math.hypot(u.x-d.anchorX,u.z-d.anchorZ)>=.9?(d.anchorX=u.x,d.anchorZ=u.z,d.stuckSec=Math.max(0,d.stuckSec-l*2.5)):d.stuckSec+=l,d.stuckSec>=2&&d.wedgeBiasTimer<=0){let e=-Math.cos(u.yaw),t=Math.sin(u.yaw),n=$f(u.x-e*1.9,u.z-t*1.9,d.hw*.8,r,i,a,o,s),c=$f(u.x+e*1.9,u.z+t*1.9,d.hw*.8,r,i,a,o,s);d.wedgeBiasOffset=n>c+.15?-1.65:c>n+.15?1.35:d.seedBiasSign<0?-1.55:1.25,d.wedgeBiasTimer=2.6,d.stuckSec=.4}let p=-Math.cos(u.yaw),m=Math.sin(u.yaw);if(n.isSecondary){let e=(u.dwellingStop&&!d.turnState?0:Math.sin(t*13+1.4)*.005*Math.abs(u.moveFactor||0))+d.clashPitch,n=(d.turnBankRoll||0)+d.clashRoll;u.group.position.set(u.x,u.y??.092,u.z),u.group.rotation.set(e,u.yaw,n)}else{a.doorX=u.x+p*1.9+Math.sin(u.yaw)*.9,a.doorZ=u.z+m*1.9+Math.cos(u.yaw)*.9;let e=a.interactive?.getPoseOffset?.(t)||null,n=u.dwellingStop&&!d.turnState?0:Math.sin(t*14)*.006*Math.abs(u.moveFactor||0),r=(u.y??.092)+(e?.liftY||0),i=n+d.clashPitch,o=(d.turnBankRoll||0)+d.clashRoll+(e?.rollZ||0);a.group.position.set(u.x,r,u.z),a.group.rotation.set(i,u.yaw,o)}}}var cp=[3.8,-10.8],lp=.62,up=28,dp=163.5,fp=3.1;function pp(e){return 9.2*Math.cos(2*e+1.55)+7.8*Math.sin(3*e+.75)+5.6*Math.cos(4*e+3.08)+4.1*Math.sin(5*e-.85)+2.6*Math.cos(7*e+.4)}function mp(e){return Math.max(0,Math.min(1,.48+.58*Math.sin(3*e-.4)+.34*Math.cos(5*e+1.1)))}function hp(e,t){let n=Math.abs(e)/dp,r=Math.abs(t)/dp,i=(n**+fp+r**+fp)**(1/fp)*dp;return dp+pp(Math.atan2(t,e))-i}function gp(e,t,n=3){if(hp(e,t)>=n)return[e,t];if(Math.hypot(e,t)<.001)return[0,0];let r=0,i=1;for(let a=0;a<12;a++){let a=(r+i)*.5;hp(e*a,t*a)>=n?r=a:i=a}return[e*r,t*r]}function _p(e,t){let n=hp(e,t);if(n>=0)return 0;let r=mp(Math.atan2(t,e)),i=-n,a=-2.95*Math.min(1,i/22)**1.12,o=-3.2*Math.min(1,i/13.5)**.82,s=Math.round(o/.42)*.42;return a*(1-r*.72)+r*.72*s}var vp={meadow_clover:1,sandy_shore:2,misty_moss:3,volcanic_basalt:4,snow_frost:5,stone_plaza:6,autumn_grove:7,desert_mesa:8};function yp(e,t,n,r,i,a){let o=i-n,s=a-r,c=e-n,l=t-r,u=o*o+s*s;if(u<.001)return Math.hypot(e-n,t-r);let d=Math.max(0,Math.min(1,(c*o+l*s)/u));return Math.hypot(e-(n+d*o),t-(r+d*s))}function bp(e=``){let t=String(e||``).trim();return t?/\b(volcano|stratovolcano|caldera|mountain|mt\.|everest|fuji|matterhorn|glacier|canyon|mesa|waterfall|cascade|cataract|niagara|castle|citadel|fortress|palace|cathedral|stadium|arena|colosseum|amphitheater|amphitheatre|pyramid|ziggurat|launch\s*pad|spaceport|world\s*tree|yggdrasil|colossus|kaiju|godzilla|skyscraper|megastructure)\b/i.test(t)?9.8:/\b(cliff|clocktower|tower|windmill|lighthouse|datacentre|datacenter|factory|quarry|mine|firehouse|station|barn|bridge|temple|pagoda|museum|library|hotel|ship|galleon|roller\s*coaster)\b/i.test(t)?5.4:/\b(tiny|miniature|micro|mailbox|letterbox|postbox|hydrant|mushroom|toadstool|flower\s*pot|bonsai|campfire|bonfire|lantern|birdhouse|gnome|acorn|pebble|teacup|hedgehog|hamster|kitten|bunny|frog)\b/i.test(t)&&!/\b(giant|huge|massive|colossal|large|house|castle|tower)\b/i.test(t)?1.45:/\b(small|little|cart|bike|bicycle|scooter|skateboard|dog|puppy|cat|fox|duck|swan|boat|canoe|statue|fountain|bench|shrine|kiosk|stall|well)\b/i.test(t)?2.25:3.3:3.3}function xp(){let e=document.createElement(`canvas`);e.width=4,e.height=256;let t=e.getContext(`2d`),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,`#88bef0`),n.addColorStop(.52,`#bfe1f7`),n.addColorStop(.84,`#d8eefb`),n.addColorStop(1,`#bce0f5`),t.fillStyle=n,t.fillRect(0,0,4,256);let r=new Ai(e);return r.colorSpace=Ae,r}function Sp(e){let t=new fi(new Ki(460,32,20),new ta({uniforms:{uTime:e,uSunDir:{value:new J(64,118,76).normalize()}},side:1,depthWrite:!1,depthTest:!1,toneMapped:!0,vertexShader:`
      varying vec3 vLocalDir;
      void main() {
        vLocalDir = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uSunDir;
      varying vec3 vLocalDir;

      vec3 srgb2lin(float r, float g, float b) {
        return pow(vec3(r, g, b) / 255.0, vec3(2.2));
      }
      float sHash(vec2 p) {
        vec2 q = fract(p * vec2(127.1, 311.7));
        q += dot(q, q + 34.23);
        return fract(q.x * q.y);
      }
      float sNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(sHash(i), sHash(i + vec2(1.0, 0.0)), u.x),
          mix(sHash(i + vec2(0.0, 1.0)), sHash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      void main() {
        vec3 dir = normalize(vLocalDir);
        float h = clamp(dir.y, 0.0, 1.0);

        vec3 cHorizonMist = srgb2lin(188.0, 224.0, 245.0);
        vec3 cLowHaze     = srgb2lin(216.0, 238.0, 251.0);
        vec3 cPaleSky     = srgb2lin(192.0, 225.0, 246.0);
        vec3 cMidSky      = srgb2lin(134.0, 192.0, 240.0);
        vec3 cZenith      = srgb2lin(96.0, 162.0, 228.0);

        vec3 col = mix(cHorizonMist, cLowHaze, smoothstep(0.002, 0.065, h));
        col = mix(col, cPaleSky, smoothstep(0.055, 0.21, h));
        col = mix(col, cMidSky, smoothstep(0.19, 0.54, h));
        col = mix(col, cZenith, smoothstep(0.50, 0.96, h));

        float sunAmt = max(0.0, dot(dir, uSunDir));
        col += srgb2lin(255.0, 242.0, 206.0) * (pow(sunAmt, 12.0) * 0.18 + pow(sunAmt, 220.0) * 0.72) * smoothstep(0.0, 0.08, h);

        if (h > 0.055) {
          vec2 cuv = dir.xz / (h + 0.22) * 1.45 + vec2(uTime * 0.0055, uTime * 0.0028);
          float c1 = sNoise(cuv);
          float c2 = sNoise(cuv * 2.15 + vec2(7.3, -4.1));
          float cloud = smoothstep(0.54, 0.82, c1 * 0.68 + c2 * 0.32);
          float cloudFade = smoothstep(0.06, 0.24, h) * (1.0 - smoothstep(0.75, 0.99, h) * 0.35);
          col = mix(col, srgb2lin(250.0, 252.0, 252.0), cloud * cloudFade * 0.46);
        }

        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}));return t.renderOrder=-100,t.frustumCulled=!1,t.castShadow=!1,t.receiveShadow=!1,t.raycast=()=>{},t.visible=!1,t}function Cp(e,t,n,r,i,a){let o=Math.min(a,r/2,i/2);e.beginPath(),e.moveTo(t+o,n),e.arcTo(t+r,n,t+r,n+i,o),e.arcTo(t+r,n+i,t,n+i,o),e.arcTo(t,n+i,t,n,o),e.arcTo(t,n,t+r,n,o),e.closePath()}function wp(e=4){let t=new bn,n=.21,r=new Z(905);r.box(-14,0,-4,14,1,4,`concrete2`),r.box(-13,1,-3,13,2,3,`limestone`);for(let[e,t]of[[-13,-3],[12,-3],[-13,2],[12,2]])r.put(e,2,t,`brass`);r.box(-12,2,-1,-10,20,1,`woodDark`),r.box(10,2,-1,12,20,1,`woodDark`),r.box(-12,20,-1,-10,21,1,`brass`),r.box(10,20,-1,12,21,1,`brass`),r.box(-10,5,-1,10,18,1,`oak`),r.box(-11,4,-1,11,5,1,`woodDark`),r.box(-11,18,-1,11,19,1,`woodDark`),r.box(-14,19,-3,14,20,3,`terracotta`),r.box(-13,20,-2,13,21,2,`brickDark`),r.box(-1,21,-1,1,23,1,`iron`),r.box(-1,22,1,1,24,3,`warmGlow`,1.45),r.sphere(-14,1.5,2,1.8,1.2,1.6,`leaf`),r.sphere(14,1.5,2,1.8,1.2,1.6,`leafLight`),r.clear(-18,-3,-8,18,0,8),r.put(-14,2,2,`#f6d55c`),r.put(14,2,2,`#ec8db0`),t.add(Q(r,{scale:n}));let i=document.createElement(`canvas`);i.width=512,i.height=280;let a=i.getContext(`2d`),o=new Ai(i);o.colorSpace=Ae,o.anisotropy=Math.min(8,e);let s=new Wi(4.15,2.52),c=new ra({map:o,roughness:.56,metalness:.04,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),l=new fi(s,c);l.position.set(0,11.5*n,1.08*n),t.add(l);let u=new fi(s,c);u.position.set(0,11.5*n,-1.08*n),u.rotation.y=Math.PI,t.add(u);let d=-1;function f(e){let t=Math.max(0,Number(e)||0);if(t!==d){d=t,a.clearRect(0,0,512,280),Cp(a,4,4,504,272,22),a.fillStyle=`#5c3b20`,a.fill(),Cp(a,18,18,476,244,14),a.fillStyle=`#fcf7ea`,a.fill(),Cp(a,28,28,456,224,10),a.strokeStyle=`#d3a14a`,a.lineWidth=3.5,a.stroke(),a.fillStyle=`#c9953c`;for(let[e,t]of[[42,42],[470,42],[42,238],[470,238]])a.beginPath(),a.arc(e,t,6,0,Math.PI*2),a.fill();a.fillStyle=`#6b4f35`,a.font=`800 30px -apple-system, BlinkMacSystemFont, 'Inter', sans-serif`,a.textAlign=`center`,a.textBaseline=`middle`,a.fillText(`GEMINISLAND`,256,66),a.fillStyle=`#18211b`,a.font=`800 104px -apple-system, BlinkMacSystemFont, 'Inter', sans-serif`,a.fillText(String(t),256,148),a.fillStyle=`#267043`,a.font=`800 29px -apple-system, BlinkMacSystemFont, 'Inter', sans-serif`,a.fillText(t===1?`CONTRIBUTION`:`CONTRIBUTIONS`,256,220),o.needsUpdate=!0}}let p=0,m=0,h=0,g=.88,_=!1;function v(e,t=!1){let n=Math.max(0,Math.round(Number(e)||0));p=n,t||d<0||Math.abs(n-d)<=1?(_=!1,f(n)):(m=d,h=0,g=d===0?.92:.48,_=!0)}function y(e,t=!0){if(!_||!t)return;h+=e;let n=Math.min(1,h/Math.max(.1,g)),r=1-(1-n)**2.5;f(n>=1?p:Math.round(m+(p-m)*r)),n>=1&&(_=!1)}return f(0),t.position.set(cp[0],0,cp[1]),t.position.y=0,t.rotation.y=lp,t.userData.creationId=`__city_sign__`,{group:t,updateCount:f,setTargetCount:v,stepCount:y}}var Tp={G:[`.#####.`,`#######`,`##...##`,`##.....`,`##.....`,`##..###`,`##..###`,`##...##`,`##...##`,`#######`,`.#####.`],E:[`#######`,`#######`,`##.....`,`##.....`,`######.`,`######.`,`##.....`,`##.....`,`##.....`,`#######`,`#######`],M:[`##.....##`,`###...###`,`####.####`,`#########`,`##.###.##`,`##..#..##`,`##.....##`,`##.....##`,`##.....##`,`##.....##`,`##.....##`],I:[`######`,`######`,`..##..`,`..##..`,`..##..`,`..##..`,`..##..`,`..##..`,`..##..`,`######`,`######`],N:[`##....##`,`###...##`,`####..##`,`####..##`,`##.##.##`,`##.##.##`,`##.##.##`,`##..####`,`##..####`,`##...###`,`##....##`],S:[`.#####.`,`#######`,`##...##`,`###....`,`.####..`,`.#####.`,`..####.`,`....###`,`##...##`,`#######`,`.#####.`],L:[`##.....`,`##.....`,`##.....`,`##.....`,`##.....`,`##.....`,`##.....`,`##.....`,`##.....`,`#######`,`#######`],A:[`..####..`,`.######.`,`##....##`,`##....##`,`##....##`,`########`,`########`,`##....##`,`##....##`,`##....##`,`##....##`],D:[`#####..`,`######.`,`##...##`,`##...##`,`##...##`,`##...##`,`##...##`,`##...##`,`##...##`,`######.`,`#####..`]};function Ep(){let e=new bn,t=.56,n=2.1,r=[.72,-.82,1.08,-.56,.88,-.94,.66,-.78,1.12,-.58,.82],i=[.35,-.42,.48,-.28,.38,-.46,.32,-.38,.44,-.32,.36],a=[-.038,.032,-.026,.041,-.03,.036,-.034,.028,-.036,.031,-.028],o=[.04,-.025,.03,-.032,.024,-.028,.032,-.024,.028,-.03,.036],s=`GEMINISLAND`.split(``),c=0;for(let e=0;e<s.length;e++){let t=Tp[s[e]];c+=t[0].length+(e<s.length-1?n:0)}let l=[],u=-c*.5;for(let c=0;c<s.length;c++){let d=Tp[s[c]],f=d.length,p=d[0].length,m=new Z(1700+c*37),h=-p*.5,g=-f*.5;for(let e=0;e<f;e++){let t=d[e],n=Math.round(g+(f-1-e)),r=e===0||e>0&&d[e-1]!==void 0;for(let i=0;i<p;i++){if(t[i]!==`#`)continue;let a=Math.round(h+i),o=e===0||d[e-1][i]!==`#`,s=o?`snow`:e>=f-2?`cream`:`white`;m.put(a,n,1,s,o?.08:.03),m.put(a,n,0,`gold`,o&&r?.14:.04),m.put(a,n,-1,`marble`,.02)}}let _=Q(m,{scale:t,jitter:.024,castShadow:!1,receiveShadow:!1});_.raycast=()=>{};let v=new bn;v.add(_);let y=u+p*.5;u+=p+n;let b=s.length>1?c/(s.length-1)*2-1:0,x=(1-b*b)*1.15,S=-b*b*1.35,C=y*t,w=x+r[c%r.length],T=S+i[c%i.length],E=a[c%a.length],D=o[c%o.length]-b*.055;v.position.set(C,w,T),v.rotation.set(0,D,E),e.add(v),l.push({holder:v,baseX:C,baseY:w,baseZ:T,baseRoll:E,baseYaw:D,phase:c*.78+c%3*.42})}let d=[{x:-27.5,y:-3.7,z:1.6,scale:.46,phase:.4},{x:-13.2,y:-4.2,z:-1.8,scale:.4,phase:2.1},{x:1.4,y:-3.9,z:1.7,scale:.48,phase:3.7},{x:15.8,y:-4.1,z:-1.5,scale:.42,phase:5},{x:28,y:-3.6,z:1.4,scale:.45,phase:1.3}],f=[];d.forEach((t,n)=>{let r=new Z(1920+n*29);r.sphere(0,0,0,4.2,2,2.4,`white`,.04),r.sphere(-2.6,-.3,.3,2.8,1.5,1.9,`snow`,.04),r.sphere(2.7,-.2,-.2,3,1.6,2,`cream`,.03),r.clear(-9,-5,-6,9,-1,6);let i=Q(r,{scale:t.scale,jitter:.04,castShadow:!1,receiveShadow:!1});i.raycast=()=>{},i.position.set(t.x,t.y,t.z),e.add(i),f.push({mesh:i,...t})});let p=31.5;e.position.set(-48,p,-95),e.rotation.y=.55;function m(t){e.position.x=-48+Math.sin(t*.13)*.95,e.position.y=p+Math.cos(t*.17)*.42,e.position.z=-95+Math.sin(t*.11+1.2)*.65;for(let e=0;e<l.length;e++){let n=l[e],r=n.phase,i=Math.sin(t*.58+r)*.48+Math.sin(t*.29+r*1.6)*.22,a=Math.cos(t*.36+r*.9)*.14,o=Math.sin(t*.33+r*1.15)*.2;n.holder.position.set(n.baseX+a,n.baseY+i,n.baseZ+o),n.holder.rotation.set(Math.cos(t*.41+r)*.026,n.baseYaw+Math.sin(t*.31+r*.8)*.032,n.baseRoll+Math.sin(t*.46+r*1.1)*.03)}for(let e=0;e<f.length;e++){let n=f[e];n.mesh.position.set(n.x+Math.sin(t*.24+n.phase)*.75,n.y+Math.cos(t*.42+n.phase)*.34,n.z+Math.sin(t*.28+n.phase*1.3)*.3)}}return{group:e,step:m}}function Dp(){let e=new bn,t=new Gi(.9,1.04,64);t.rotateX(-Math.PI/2);let n=new ei({color:16777215,transparent:!0,opacity:.92,side:2,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),r=new fi(t,n);r.position.y=.122,e.add(r);let i=new Z(931);i.box(-1,0,-1,1,5,1,`woodDark`),i.box(-1,5,-1,1,6,1,`gold`,.45);let a=Q(i,{scale:.24}),o=[];for(let t=0;t<4;t++){let t=a.clone();e.add(t),o.push(t)}let s=new bn,c=new Z(947);for(let[e,t]of[[-9,-9],[8,-9],[-9,8],[8,8]])c.box(e,0,t,e+2,16,t+2,`wood`);c.box(-9,8,-9,10,9,-8,`hazard`),c.box(-9,8,9,10,9,10,`hazard`),c.box(-9,8,-9,-8,9,10,`hazard`),c.box(9,8,-9,10,9,10,`hazard`),c.box(-9,15,-9,10,16,-8,`woodLight`),c.box(-9,15,9,10,16,10,`woodLight`);let l=Q(c,{scale:.22});s.add(l);let u=[],d=[`busYellow`,`teal`,`terracotta`];for(let e=0;e<3;e++){let t=new Z(960+e);t.box(-2,-2,-2,2,2,2,d[e],.35);let n=Q(t,{scale:.2});s.add(n),u.push(n)}s.visible=!1,e.add(s),e.visible=!1;let f=3.3;function p(e){f=Math.max(1.3,Math.min(12.5,Number(e)||3.3));let t=f*.7,n=[[-1,-1],[1,-1],[-1,1],[1,1]];for(let e=0;e<4;e++){o[e].position.set(n[e][0]*t,0,n[e][1]*t);let r=Math.max(.82,Math.min(1.55,.78+f*.08));o[e].scale.setScalar(r)}let r=Math.max(.55,Math.min(2.85,f/2.75)),i=Math.max(.68,Math.min(2.1,.7+f*.14));l.scale.set(r,i,r)}return p(3.3),{group:e,ring:r,ringMat:n,scaffoldGroup:s,floatingCubes:u,setPlotRadius:p,getPlotRadius:()=>f}}var Op={weather:`#f5b82e`,surf:`#3ca7de`,wind:`#4eb86e`,time:`#d99b38`,moon:`#9370cf`,iss:`#3ec9bd`};function kp(e,t){let n=e.getContext(`2d`),r=e.width,i=e.height;n.clearRect(0,0,r,i),Cp(n,6,6,r-12,i-12,54),n.fillStyle=`rgba(22, 28, 24, 0.88)`,n.fill(),n.lineWidth=3.5,n.strokeStyle=`rgba(255, 255, 255, 0.72)`,n.stroke(),n.fillStyle=Op[t.kind]||`#3fb963`,n.beginPath(),n.arc(46,i/2,12,0,Math.PI*2),n.fill(),n.fillStyle=`#ffffff`,n.font=`700 40px -apple-system, BlinkMacSystemFont, 'Inter', sans-serif`,n.textAlign=`left`,n.textBaseline=`middle`,n.fillText(String(t.badge||``).slice(0,20),74,i/2+2)}var Ap=`
  float islandCoastWarp(float theta) {
    return 9.2 * cos(2.0 * theta + 1.55)
         + 7.8 * sin(3.0 * theta + 0.75)
         + 5.6 * cos(4.0 * theta + 3.08)
         + 4.1 * sin(5.0 * theta - 0.85)
         + 2.6 * cos(7.0 * theta + 0.4);
  }
  float islandCliffFactor(float theta) {
    return clamp(0.48 + 0.58 * sin(3.0 * theta - 0.4) + 0.34 * cos(5.0 * theta + 1.1), 0.0, 1.0);
  }
  float islandInlandMargin(vec2 wp) {
    const float H = 163.5;
    const float P = 3.1;
    float ax = max(1e-5, abs(wp.x) / H);
    float az = max(1e-5, abs(wp.y) / H);
    float superDist = pow(pow(ax, P) + pow(az, P), 1.0 / P) * H;
    float theta = length(wp) > 1e-4 ? atan(wp.y, wp.x) : 0.0;
    return H + islandCoastWarp(theta) - superDist;
  }
`;function jp(e){let t=new ra({color:`#ffffff`,roughness:.88,metalness:0,dithering:!0,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2});return t.onBeforeCompile=t=>{t.uniforms.uTime=e.uTime,t.uniforms.uFocusXZ=e.uFocusXZ,t.uniforms.uHorizonRange=e.uHorizonRange,t.uniforms.uZones=e.uZones,t.uniforms.uZoneCount=e.uZoneCount,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
        varying vec3 vWorldPos;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
        vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uTime;
        uniform vec2 uFocusXZ;
        uniform vec2 uHorizonRange;
        uniform vec4 uZones[${up}];
        uniform int uZoneCount;
        varying vec3 vWorldPos;

        vec3 srgb2lin(float r, float g, float b) {
          return pow(vec3(r, g, b) / 255.0, vec3(2.2));
        }
        float mHash(vec2 p) {
          vec2 q = fract(p * vec2(123.34, 456.21));
          q += dot(q, q + 45.32);
          return fract(q.x * q.y);
        }
        float mNoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(mHash(i + vec2(0.0, 0.0)), mHash(i + vec2(1.0, 0.0)), u.x),
            mix(mHash(i + vec2(0.0, 1.0)), mHash(i + vec2(1.0, 1.0)), u.x),
            u.y
          );
        }
        ${Ap}`).replace(`#include <color_fragment>`,`#include <color_fragment>
        vec2 wp = vWorldPos.xz;
        const float TILE = 0.85;
        vec2 tileCoord = wp / TILE;
        vec2 cell = floor(tileCoord);
        vec2 cellUv = fract(tileCoord);
        vec2 cellCenter = (cell + 0.5) * TILE;

        float tilePx = max(fwidth(tileCoord.x), fwidth(tileCoord.y));
        float tileDetail = 1.0 - smoothstep(0.06, 0.20, tilePx);

        vec3 turfDeep = srgb2lin(103.0, 174.0, 74.0);
        vec3 turfBase = srgb2lin(116.0, 187.0, 84.0);
        vec3 turfMid  = srgb2lin(128.0, 198.0, 94.0);
        vec3 turfSun  = srgb2lin(142.0, 209.0, 105.0);

        float meadowZone = mNoise(wp * 0.028);
        float subZone = mNoise(wp * 0.085 + vec2(19.4, -11.2));
        float cellH = mHash(cell);
        float cellH2 = mHash(cell + vec2(37.2, -91.7));
        vec2 terraceBlock = floor(cell * 0.25);
        float lawnCheck = mod(terraceBlock.x + terraceBlock.y, 2.0);

        vec3 grassCol = mix(turfDeep, turfBase, smoothstep(0.20, 0.68, meadowZone));
        grassCol = mix(grassCol, turfMid, smoothstep(0.42, 0.85, subZone) * 0.72);
        grassCol = mix(grassCol, turfSun, smoothstep(0.68, 0.96, meadowZone * 0.6 + subZone * 0.4) * 0.45);

        // Organic voxel-stepped ground biome zones
        float borderWarp = (mNoise(cellCenter * 0.15) - 0.5) * 4.2 + (mNoise(cellCenter * 0.37 + 11.3) - 0.5) * 1.8;
        float volcanicGlowMask = 0.0;

        for (int i = 0; i < ${up}; i++) {
          if (i >= uZoneCount) break;
          vec4 zn = uZones[i];
          float d = length(cellCenter - zn.xy) + borderWarp;
          float w = 1.0 - smoothstep(zn.z * 0.62, zn.z * 1.06, d);
          if (w > 0.01) {
            int bId = int(zn.w + 0.5);
            vec3 bCol = grassCol;
            if (bId == 1) {
              bCol = mix(srgb2lin(86.0, 168.0, 68.0), srgb2lin(118.0, 196.0, 82.0), subZone);
              if (cellH2 > 0.91) {
                bCol = cellH > 0.5 ? srgb2lin(249.0, 214.0, 92.0) : srgb2lin(242.0, 148.0, 184.0);
              }
            } else if (bId == 2) {
              bCol = mix(srgb2lin(224.0, 194.0, 134.0), srgb2lin(242.0, 221.0, 168.0), subZone);
              if (cellH2 > 0.93) bCol = srgb2lin(250.0, 243.0, 224.0);
            } else if (bId == 3) {
              bCol = mix(srgb2lin(68.0, 126.0, 69.0), srgb2lin(92.0, 152.0, 82.0), subZone);
              if (cellH2 > 0.86) bCol = srgb2lin(116.0, 125.0, 122.0);
            } else if (bId == 4) {
              bCol = mix(srgb2lin(42.0, 44.0, 52.0), srgb2lin(66.0, 64.0, 72.0), subZone);
              float crackField = abs(mNoise(cellCenter * 0.28 + vec2(4.2, -8.1)) - 0.5);
              if (crackField < 0.055 && d < zn.z * 0.85) {
                float pulse = 0.72 + 0.28 * sin(uTime * 2.6 + cellH * 6.28);
                bCol = mix(srgb2lin(235.0, 78.0, 28.0), srgb2lin(255.0, 174.0, 48.0), pulse);
                volcanicGlowMask = max(volcanicGlowMask, w * pulse);
              }
            } else if (bId == 5) {
              bCol = mix(srgb2lin(222.0, 236.0, 248.0), srgb2lin(247.0, 251.0, 255.0), subZone);
            } else if (bId == 6) {
              float checker = mod(cell.x + cell.y, 2.0);
              bCol = mix(srgb2lin(202.0, 190.0, 168.0), srgb2lin(224.0, 214.0, 194.0), checker * 0.65 + subZone * 0.35);
            } else if (bId == 7) {
              bCol = mix(srgb2lin(182.0, 124.0, 56.0), srgb2lin(218.0, 158.0, 68.0), subZone);
              if (cellH2 > 0.82) bCol = srgb2lin(174.0, 78.0, 52.0);
              else if (cellH2 < 0.22) bCol = srgb2lin(116.0, 162.0, 72.0);
            } else if (bId == 8) {
              bCol = mix(srgb2lin(198.0, 114.0, 68.0), srgb2lin(224.0, 152.0, 96.0), subZone);
            }
            grassCol = mix(grassCol, bCol, w);
          }
        }

        // Island Coastline Rim: voxel-stepped transition from meadow turf -> dune grass -> golden beach sand & rocky limestone bluffs
        float coastTheta = length(cellCenter) > 1e-4 ? atan(cellCenter.y, cellCenter.x) : 0.0;
        float cliffAmt = islandCliffFactor(coastTheta);
        float coastM = islandInlandMargin(cellCenter) + borderWarp * 0.38;

        // Warm coastal dune grass right at the buildable island edge (margin 1.2m..5.6m)
        float duneBlend = 1.0 - smoothstep(1.2, 5.6, coastM);
        vec3 duneGrass = mix(srgb2lin(154.0, 196.0, 92.0), srgb2lin(192.0, 206.0, 116.0), subZone);
        grassCol = mix(grassCol, duneGrass, duneBlend * 0.72);

        // Beyond the buildable crest (margin <= 1.8m): golden sandy beaches & layered coastal limestone cliffs
        float shoreBlend = 1.0 - smoothstep(-1.2, 1.8, coastM);
        if (shoreBlend > 0.005) {
          vec3 drySand = mix(srgb2lin(234.0, 206.0, 146.0), srgb2lin(249.0, 232.0, 184.0), subZone);
          if (cellH2 > 0.92) drySand = srgb2lin(253.0, 247.0, 230.0);
          float wetBand = smoothstep(-0.26, -0.68, vWorldPos.y);
          vec3 wetSand = mix(srgb2lin(182.0, 150.0, 98.0), srgb2lin(146.0, 122.0, 82.0), cellH * 0.5);
          vec3 beachCol = mix(drySand, wetSand, wetBand);

          float strata = fract(vWorldPos.y * -1.8 + cellH * 0.25);
          vec3 cliffRock = mix(srgb2lin(168.0, 160.0, 144.0), srgb2lin(132.0, 126.0, 116.0), smoothstep(0.25, 0.85, strata));
          cliffRock = mix(cliffRock, srgb2lin(112.0, 108.0, 102.0), wetBand * 0.55);

          float rockMask = smoothstep(0.46, 0.78, cliffAmt + (subZone - 0.5) * 0.22);
          vec3 coastCol = mix(beachCol, cliffRock, rockMask);
          grassCol = mix(grassCol, coastCol, shoreBlend);
        }

        float blockTone = (floor(cellH * 4.0) / 3.0 - 0.5) * 0.075 + (lawnCheck - 0.5) * 0.028;
        grassCol *= 1.0 + blockTone * tileDetail;

        vec2 edgeDist = min(cellUv, 1.0 - cellUv);
        float minEdge = min(edgeDist.x, edgeDist.y);
        float seamW = max(0.042, tilePx * 1.35);
        float seam = smoothstep(0.0, seamW, minEdge);
        grassCol *= mix(1.0 - 0.085 * tileDetail, 1.0, seam);

        float topLip = (1.0 - smoothstep(0.0, 0.14, cellUv.y)) * seam;
        grassCol += grassCol * topLip * 0.045 * tileDetail;

        vec2 cloudUv = wp * 0.011 + vec2(uTime * 0.008, uTime * 0.0045);
        float cloud = mNoise(cloudUv) * 0.65 + mNoise(cloudUv * 2.0 + 3.7) * 0.35;
        grassCol *= mix(0.92, 1.05, smoothstep(0.32, 0.70, cloud));

        diffuseColor.rgb = grassCol;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        if (volcanicGlowMask > 0.01) {
          totalEmissiveRadiance += srgb2lin(255.0, 102.0, 28.0) * (volcanicGlowMask * 0.85);
        }`)},t.customProgramCacheKey=()=>`geminisland-island-biomes-v9`,t}function Mp(){let e=408/256,t=new Uint8Array(1024);for(let n=0;n<32;n++)for(let r=0;r<32;r++){let i=0;for(let t=0;t<=2&&!i;t++){let a=-204+(n*8+t*4)*e;for(let t=0;t<=2;t++){let n=hp(-204+(r*8+t*4)*e,a);if(n<5.5&&n>-25.5){i=1;break}}}t[n*32+r]=i}let n=new Int32Array(66049);n.fill(-1);let r=[],i=[],a=[],o=[],s=(t,o)=>{let s=o*257+t,c=n[s];if(c!==-1)return c;c=r.length/3,n[s]=c;let l=-204+t*e,u=-204+o*e,d=hp(l,u),f=d>=0?0:_p(l,u);if(r.push(l,f,u),a.push(t/256,1-o/256),d>=1.8)i.push(0,1,0);else{let t=_p(l-e,u),n=_p(l+e,u),r=_p(l,u-e),a=_p(l,u+e),o=t-n,s=2*e,c=r-a,d=Math.hypot(o,s,c)||1;i.push(o/d,s/d,c/d)}return c};for(let e=0;e<32;e++){let n=e*8;for(let r=0;r<32;r++){let i=r*8;if(t[e*32+r])for(let e=0;e<8;e++){let t=n+e,r=t+1;for(let e=0;e<8;e++){let n=i+e,a=n+1,c=s(n,t),l=s(a,t),u=s(n,r),d=s(a,r);o.push(c,u,l,u,d,l)}}else{let a=e>0&&t[(e-1)*32+r]===1,c=e+1<32&&t[(e+1)*32+r]===1,l=r>0&&t[e*32+(r-1)]===1,u=r+1<32&&t[e*32+(r+1)]===1;if(!a&&!c&&!l&&!u){let e=s(i,n),t=s(i+8,n),r=s(i,n+8),a=s(i+8,n+8);o.push(e,r,t,r,a,t)}else{let e=s(i+4,n+4);if(a)for(let t=0;t<8;t++)o.push(e,s(i+t+1,n),s(i+t,n));else o.push(e,s(i+8,n),s(i,n));if(l)for(let t=0;t<8;t++)o.push(e,s(i,n+t),s(i,n+t+1));else o.push(e,s(i,n),s(i,n+8));if(c)for(let t=0;t<8;t++)o.push(e,s(i+t,n+8),s(i+t+1,n+8));else o.push(e,s(i,n+8),s(i+8,n+8));if(u)for(let t=0;t<8;t++)o.push(e,s(i+8,n+t+1),s(i+8,n+t));else o.push(e,s(i+8,n+8),s(i+8,n))}}}}let c=new Cr;return c.setAttribute(`position`,new dr(r,3)),c.setAttribute(`normal`,new dr(i,3)),c.setAttribute(`uv`,new dr(a,2)),c.setIndex(r.length/3<=65535?new lr(o,1):new ur(o,1)),c.computeBoundingSphere(),c}function Np(e){return new ta({uniforms:{uTime:e.uTime,uFocusXZ:e.uFocusXZ,uSunDir:{value:new J(64,118,76).normalize()}},toneMapped:!0,vertexShader:`
      varying vec3 vWorldPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec2 uFocusXZ;
      uniform vec3 uSunDir;
      varying vec3 vWorldPos;

      vec3 srgb2lin(float r, float g, float b) {
        return pow(vec3(r, g, b) / 255.0, vec3(2.2));
      }
      float oHash(vec2 p) {
        vec2 q = fract(p * vec2(127.1, 311.7));
        q += dot(q, q + 34.23);
        return fract(q.x * q.y);
      }
      float oNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(oHash(i), oHash(i + vec2(1.0, 0.0)), u.x),
          mix(oHash(i + vec2(0.0, 1.0)), oHash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }
      ${Ap}

      void main() {
        vec2 wp = vWorldPos.xz;
        float rawMargin = islandInlandMargin(wp);
        // Cull ocean strictly under the dry interior plateau to save GPU fillrate
        if (rawMargin > 4.0) discard;

        // Voxel-quantized ocean cell for charming blocky surf & caustic shimmer
        const float WTILE = 0.95;
        vec2 wCell = floor(wp / WTILE);
        vec2 wCenter = (wCell + 0.5) * WTILE;
        float cellRand = oHash(wCell);

        float coastM = islandInlandMargin(wCenter) + (oNoise(wCenter * 0.14) - 0.5) * 1.4;
        // Waterline occurs around coastM = -5.6m (where terrain reaches y = -0.56)
        float offshore = max(0.0, -coastM - 5.2);

        // Shallow turquoise lagoon -> sunlit aquamarine shelf -> deep cobalt sea
        vec3 cShallow = srgb2lin(66.0, 208.0, 212.0);
        vec3 cLagoon  = srgb2lin(38.0, 166.0, 204.0);
        vec3 cShelf   = srgb2lin(26.0, 122.0, 184.0);
        vec3 cDeep    = srgb2lin(19.0, 86.0, 152.0);

        vec3 waterCol = mix(cShallow, cLagoon, smoothstep(0.0, 9.5, offshore));
        waterCol = mix(waterCol, cShelf, smoothstep(8.0, 28.0, offshore));
        waterCol = mix(waterCol, cDeep, smoothstep(26.0, 82.0, offshore));

        // Blocky voxel water swell & shallow reef caustics
        float swell1 = oNoise(wCenter * 0.075 + vec2(uTime * 0.22, -uTime * 0.16));
        float swell2 = oNoise(wCenter * 0.16 + vec2(-uTime * 0.18, uTime * 0.24));
        float caustic = smoothstep(0.56, 0.84, swell1 * 0.55 + swell2 * 0.45);
        float shallowMask = 1.0 - smoothstep(2.0, 22.0, offshore);
        waterCol += srgb2lin(125.0, 240.0, 245.0) * (caustic * shallowMask * 0.18);
        waterCol *= 0.94 + 0.12 * smoothstep(0.25, 0.78, swell1);

        // Animated lapping shoreline surf & voxel seafoam bands
        float wavePhase1 = offshore * 0.72 - uTime * 2.15 + swell1 * 2.2;
        float waveBand1 = smoothstep(0.72, 0.96, sin(wavePhase1)) * (1.0 - smoothstep(1.5, 13.5, offshore));
        float shoreLip = 1.0 - smoothstep(0.0, 1.85, offshore);
        float foam = clamp(max(shoreLip * (0.78 + 0.22 * sin(uTime * 2.8 + cellRand * 6.2)), waveBand1 * 0.88), 0.0, 1.0);
        waterCol = mix(waterCol, srgb2lin(246.0, 252.0, 255.0), foam);

        // Sunlit golden-hour ocean sparkles
        float glintNoise = oNoise(wp * 0.42 + vec2(uTime * 0.65, -uTime * 0.48));
        float glint = smoothstep(0.86, 0.97, glintNoise * 0.7 + cellRand * 0.3) * (1.0 - shoreLip * 0.7);
        waterCol += srgb2lin(255.0, 246.0, 214.0) * (glint * 0.34);

        // Seamless atmospheric blend into coastal horizon sky mist
        float distFocus = length(wp - uFocusXZ);
        float horizonMix = smoothstep(240.0, 680.0, distFocus);
        vec3 seaHorizon = srgb2lin(188.0, 224.0, 245.0);
        waterCol = mix(waterCol, seaHorizon, horizonMix);

        gl_FragColor = vec4(waterCol, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}function Pp(e=0){let t=new Z(940+e*29),n=e%2==0?`stone`:`limestone`;return t.sphere(0,1.4,0,3.4,2.2,2.9,n),t.sphere(2.4,.9,1.3,2.3,1.6,2.1,`concrete2`),e%3==0&&t.sphere(-2.1,1,-1.1,2,1.5,1.9,`moss`),t.clear(-7,-4,-7,7,-1,7),Q(t,{scale:.32})}var Fp=new Map;function Ip(e){let t=Fp.get(e);return t||(t=new ra({vertexColors:!0,roughness:.88,metalness:.02,polygonOffset:!0,polygonOffsetFactor:e,polygonOffsetUnits:e*1.5}),Fp.set(e,t)),t}function Lp(e,t,n,r,i,a=!0){let o=e.getSpacedPoints(t),s=!!e.closed,c=s?o.length-1:o.length,l=[],u=[],d=[],f=[];for(let e=0;e<o.length;e++){let t=s&&e===o.length-1?o[0]:o[e],i=s?o[(e-1+c)%c]:o[Math.max(0,e-1)],a=s?o[(e+1)%c]:o[Math.min(o.length-1,e+1)],p=a.x-i.x,m=a.z-i.z,h=Math.hypot(p,m)||1;p/=h,m/=h;let g=-m*n,_=p*n;l.push(t.x-g,r,t.z-_),l.push(t.x+g,r,t.z+_),u.push(0,1,0,0,1,0);let v=e/Math.max(1,o.length-1);if(d.push(0,v,1,v),e<o.length-1){let t=e*2;f.push(t,t+1,t+3,t,t+3,t+2)}}for(let e of[-1,1]){let t=l.length/3;for(let i=0;i<o.length;i++){let a=s&&i===o.length-1?o[0]:o[i],p=s?o[(i-1+c)%c]:o[Math.max(0,i-1)],m=s?o[(i+1)%c]:o[Math.min(o.length-1,i+1)],h=m.x-p.x,g=m.z-p.z,_=Math.hypot(h,g)||1;h/=_,g/=_;let v=-g*e,y=h*e,b=a.x+v*n,x=a.z+y*n;l.push(b,r,x),l.push(b,0,x),u.push(v,.25,y,v,.25,y);let S=i/Math.max(1,o.length-1);if(d.push(S,1,S,0),i<o.length-1){let n=t+i*2;e===1?f.push(n,n+1,n+3,n,n+3,n+2):f.push(n,n+3,n+1,n,n+2,n+3)}}}if(!s&&a&&o.length>=2){let e=(e,t,i)=>{let a=-i,o=t,s=l.length/3;l.push(e.x,r,e.z),u.push(0,1,0),d.push(.5,.5);let c=l.length/3;for(let s=0;s<=8;s++){let c=s/8*Math.PI,f=-a*Math.cos(c)+t*Math.sin(c),p=-o*Math.cos(c)+i*Math.sin(c);l.push(e.x+f*n,r,e.z+p*n),u.push(0,1,0),d.push(.5+f*.5,.5+p*.5)}for(let e=0;e<8;e++)f.push(s,c+e+1,c+e);let p=l.length/3;for(let s=0;s<=8;s++){let c=s/8*Math.PI,f=-a*Math.cos(c)+t*Math.sin(c),p=-o*Math.cos(c)+i*Math.sin(c),m=e.x+f*n,h=e.z+p*n;l.push(m,r,h),l.push(m,0,h),u.push(f,.25,p,f,.25,p),d.push(s/8,1,s/8,0)}for(let e=0;e<8;e++){let t=p+e*2;f.push(t,t+2,t+3,t,t+3,t+1)}},t=o[0].x-o[1].x,i=o[0].z-o[1].z,a=Math.hypot(t,i)||1;e(o[0],t/a,i/a);let s=o.length-1,c=o[s].x-o[s-1].x,p=o[s].z-o[s-1].z,m=Math.hypot(c,p)||1;e(o[s],c/m,p/m)}let p=new Dn(i);return{positions:l,normals:u,uvs:d,indices:f,r:p.r,g:p.g,b:p.b}}function Rp(e,t=-1,n=!0){if(!e||e.length===0)return null;let r=0,i=0;for(let t of e)r+=t.positions.length/3,i+=t.indices.length;if(r===0||i===0)return null;let a=new Float32Array(r*3),o=new Float32Array(r*3),s=new Float32Array(r*3),c=new Float32Array(r*2),l=r<=65535?new Uint16Array(i):new Uint32Array(i),u=0,d=0;for(let t of e){let e=t.positions.length/3;a.set(t.positions,u*3),o.set(t.normals,u*3),c.set(t.uvs,u*2);for(let n=0;n<e;n++){let e=(u+n)*3;s[e]=t.r,s[e+1]=t.g,s[e+2]=t.b}for(let e=0;e<t.indices.length;e++)l[d+e]=t.indices[e]+u;u+=e,d+=t.indices.length}let f=new Cr;f.setAttribute(`position`,new cr(a,3)),f.setAttribute(`normal`,new cr(o,3)),f.setAttribute(`color`,new cr(s,3)),f.setAttribute(`uv`,new cr(c,2)),f.setIndex(new cr(l,1)),f.computeBoundingSphere();let p=new fi(f,Ip(t));return p.receiveShadow=n,p.matrixAutoUpdate=!1,p.updateMatrix(),p.userData.sharedMaterial=!0,p}function zp(e=0){let t=new Z(700+e*19);return t.box(-1,0,-1,2,1,2,`woodDark`),t.box(0,0,0,1,8,1,e%3==1?`cream`:`woodDark`),e%3==0?(t.sphere(.5,11,.5,4.8,4.2,4.8,`leaf`),t.sphere(2.2,10,1.5,3,2.8,3,`leafLight`),t.sphere(-1.8,9.5,-1.2,3.2,2.6,3.2,`leafDark`)):e%3==1?(t.sphere(.5,11.5,.5,4.2,4.6,4.2,`#f29cb8`),t.sphere(1.8,10.2,1.4,2.8,2.6,2.8,`#fbd0df`)):(t.cone(.5,5,14,.5,4.2,.9,`leafDark`),t.cone(.5,9,17,.5,3.1,.6,`leaf`)),Q(t,{scale:.28})}function Bp(e=0){let t=new Z(820+e*23);t.sphere(0,1.6,0,3.2,2.1,2.9,e%2==0?`leaf`:`leafDark`),t.sphere(2.2,1.3,1.2,2.3,1.7,2.1,`leafLight`),t.clear(-6,-4,-6,6,0,6);let n=e%3==0?`#f6d55c`:e%3==1?`#ec8db0`:`#faf3e3`;return t.put(-1,3,1,n),t.put(2,2,2,n),t.put(0,3,-1,n),Q(t,{scale:.24})}function Vp(e){if(!e)return``;let t=(e.ops||[]).map(e=>e.op).join(`,`),n=(e.parts||[]).map(e=>`${e.name}:${e.kind}:${e.phase||0}:${(e.pivot||[]).join(`,`)}:${(e.ops||[]).length}`).join(`|`);return`${e.category||``}:${e.scaleClass||``}:${e.interaction?.kind||``}:${e.stats?.voxels||0}:${t}#${n}`}function Hp(e){if(!e||e.behavior?.type!==`vehicle_route`)return!1;if(e.id===`c-mvpvsf0l-5d0a39`)return!0;let t=e.blueprint?.parts||[];return t.some(e=>/^waratah/i.test(e.name))&&t.some(e=>/^tram/i.test(e.name))}function Up(e,t,n,r,i,a,o){let s=0;for(let c=0;c<a.length;c++){let l=a[c];if(l===o||l.data.category!==`building`&&l.data.behavior?.type!==`landmark`)continue;let u=Gf(l,.78),d=Math.max(u.halfX,u.halfZ),f=.88,p=l.x-e,m=l.z-t;if(Math.abs(p)>d+4.2||Math.abs(m)>d+4.2)continue;let h=e+n*(i+s),g=t+r*(i+s),_=l.yaw||0,v=Math.sin(_),y=Math.cos(_),b=-y,x=v,S=h-l.x,C=g-l.z,w=Math.abs(S*b+C*x)-u.halfX,T=Math.abs(S*v+C*y)-u.halfZ,E=w>0&&T>0?Math.hypot(w,T):Math.max(w,T);if(E>=f)continue;let D=p*n+m*r,O=f-E,k=D-i<=0,A=Math.max(-1.65,Math.min(1.65,s+(k?O:-O)));Math.abs(A)>Math.abs(s)&&(s=A)}return s}var Wp=class{constructor(e,t=0,n=null,r=null){this.id=e.id,this.index=t,this.data=e,this.onInteractiveEvent=n,this.blueprintSig=Vp(e.blueprint),this.isDualTransit=Hp(e),this.isVegasSphere=e.id===`c-mvoo26uh-4e0810`||/vegas.*sphere|emoji.*sphere/i.test(e.name||``),this.secondaryVehicle=null;let i=this.isDualTransit?Pu(e.blueprint,{seed:17+t*13,useWorldScale:!0}):null;i?(this.group=i.leftGroup,this.secondaryVehicle=this.createSecondaryVehicleState(i.rightGroup),r&&r.add(this.secondaryVehicle.group)):this.group=Nu(e.blueprint,{seed:17+t*13,useWorldScale:!0}),this.group.rotation.order=`YXZ`,this.group.userData.creationId=this.id,this.x=e.x,this.y=.004,this.z=e.z,this.yaw=e.yaw||0,this.wheelAngle=0,this.moveFactor=0,this.spawnScale=e.isSeed?1:.05;let a=uu(e.scaleClass);this.footprintRadius=i?3.1:du(e.scaleClass,e.blueprint?.stats?.footprintX??14,e.blueprint?.stats?.footprintZ??14),this.topY=Math.max(1.8,(e.blueprint?.stats?.maxY||14)*a),this.feedReading=null,this.feedBadgeText=``,this.feedCanvas=null,this.feedTex=null,this.feedMesh=null,this.routeCurve=null,this.routeSignature=``,this.routeClosed=!0,this.routeDir=1,this.routeLength=1,this.routeDist=t*37.3%120,this.effectiveSpeed=i?5.45:null,this.deBunchedOnce=!1,this.hasSteppedOnce=!1,this.stopArcPositions=[],this.dwellingStop=null,this.dwellTimer=0,this.lastStoppedId=null,this.currentLaneOffset=i?.68:1.12,this.buildingDetourOffset=0,this.smoothVelX=Math.sin(this.yaw),this.smoothVelZ=Math.cos(this.yaw),this.yieldTimer=0,this.doorX=this.x,this.doorZ=this.z,this.phys=qf(t);let o=Kf(e,a,!1,this.isDualTransit);this.phys.hw=o.hw,this.phys.hl=o.hl,this.phys.mass=o.mass,this.flightCurve=null,this.flightLength=1,this.flightDist=t*19.3%60,this.bankRoll=0,this.wanderIdx=0,this.wanderPause=t*1.3%2.5,this.wanderStuckSec=0,this.wanderCheckX=this.x,this.wanderCheckZ=this.z,this.wanderAvoidSide=t%2==0?1:-1,this.wanderDirX=Math.sin(this.yaw),this.wanderDirZ=Math.cos(this.yaw),this.hopPhase=0,this.orbitAngle=t*1.9%(Math.PI*2),this.interactive=null,this.staticRootFrozen=!1,this.eyeGazeX=0,this.eyeGazeY=0,this.eyeSpinFlourishTimer=1.35,this.lastTrackedCarId=null,this.nextAutoSpinAt=8.5+t%4,this.rebuildBehavior(e,r),this.group.position.set(this.x,this.y,this.z),this.group.rotation.y=this.yaw,this.group.scale.setScalar(this.spawnScale)}unfreezeStaticRoot(){if(this.staticRootFrozen&&(this.staticRootFrozen=!1,this.group)){this.group.matrixAutoUpdate=!0;for(let e of this.group.children)e.isMesh&&(e.matrixAutoUpdate=!0)}}createSecondaryVehicleState(e){e.rotation.order=`YXZ`,e.userData.creationId=this.id;let t=qf(this.index+31),n=Kf(this.data,uu(this.data?.scaleClass),!0,!0);return t.hw=n.hw,t.hl=n.hl,t.mass=n.mass,{group:e,x:this.data?.x||0,y:.092,z:this.data?.z||0,yaw:this.data?.yaw||0,speed:4.35,routeDist:0,routeDir:-1,initializedDist:!1,currentLaneOffset:1.24,buildingDetourOffset:0,wheelAngle:0,moveFactor:1,dwellingStop:null,dwellTimer:0,lastStoppedId:null,phys:t}}triggerEyeSpinFlourish(){this.isVegasSphere&&(this.eyeSpinFlourishTimer=1.65)}setLiveFeedReading(e,t=4){if(this.feedReading=e||null,!e||!e.badge){this.feedMesh&&(this.feedMesh.visible=!1);return}if(!this.feedMesh){this.unfreezeStaticRoot(),this.feedCanvas=document.createElement(`canvas`),this.feedCanvas.width=512,this.feedCanvas.height=116,this.feedTex=new Ai(this.feedCanvas),this.feedTex.colorSpace=Ae,this.feedTex.anisotropy=Math.min(8,t);let e=new Wi(4.2,.95),n=new ei({map:this.feedTex,transparent:!0,depthWrite:!1,side:2});this.feedMesh=new fi(e,n),this.feedMesh.position.set(0,this.topY+1.15,0),this.group.add(this.feedMesh)}this.feedMesh.visible=!0;let n=`${e.kind}:${e.badge}`;n!==this.feedBadgeText&&(this.feedBadgeText=n,kp(this.feedCanvas,e),this.feedTex.needsUpdate=!0)}rebuildBehavior(e,t=null){this.unfreezeStaticRoot();let n=this.data?.behavior?.type===`landmark`;this.data=e,this.isDualTransit=Hp(e),this.isVegasSphere=e.id===`c-mvoo26uh-4e0810`||/vegas.*sphere|emoji.*sphere/i.test(e.name||``),this.footprintRadius=this.isDualTransit?3.1:du(e.scaleClass,e.blueprint?.stats?.footprintX??14,e.blueprint?.stats?.footprintZ??14),n&&e.behavior?.type===`landmark`&&(this.x=e.x,this.z=e.z,this.yaw=typeof e.behavior.facingYaw==`number`?e.behavior.facingYaw:e.yaw||0);let r=Vp(e.blueprint),i=!1;if(t&&r&&r!==this.blueprintSig){i=!0,this.blueprintSig=r,this.interactive?.dispose?.(),this.interactive=null,this.feedMesh&&this.group.remove(this.feedMesh),t.remove(this.group),this.group.userData.dispose?.(),this.secondaryVehicle&&=(t.remove(this.secondaryVehicle.group),this.secondaryVehicle.group.userData.dispose?.(),null);let n=this.isDualTransit?Pu(e.blueprint,{seed:17+this.index*13,useWorldScale:!0}):null;n?(this.group=n.leftGroup,this.effectiveSpeed=5.45,this.secondaryVehicle=this.createSecondaryVehicleState(n.rightGroup),t.add(this.secondaryVehicle.group)):this.group=Nu(e.blueprint,{seed:17+this.index*13,useWorldScale:!0}),this.group.rotation.order=`YXZ`,this.group.userData.creationId=this.id;let a=uu(e.scaleClass);this.topY=Math.max(1.8,(e.blueprint?.stats?.maxY||14)*a),this.feedMesh&&(this.feedMesh.position.set(0,this.topY+1.15,0),this.group.add(this.feedMesh)),this.group.position.set(this.x,this.y,this.z),this.group.rotation.y=this.yaw,t.add(this.group)}else t&&this.secondaryVehicle&&!this.secondaryVehicle.group.parent&&t.add(this.secondaryVehicle.group);let a=e.blueprint?.interaction?.kind||null;(!this.interactive||i||this.interactive.kind!==a)&&(this.interactive?.dispose?.(),this.interactive=sf(e,this.group,e=>{this.onInteractiveEvent?.(this.data,e)})),this.interactive?.extraRadius>0&&(this.footprintRadius=Math.max(this.footprintRadius,this.interactive.extraRadius));let o=e.behavior,s=uu(e.scaleClass),c=Kf(e,s,!1,this.isDualTransit);if(this.phys.hw=c.hw,this.phys.hl=c.hl,this.phys.mass=c.mass,this.secondaryVehicle?.phys){let t=Kf(e,s,!0,!0);this.secondaryVehicle.phys.hw=t.hw,this.secondaryVehicle.phys.hl=t.hl,this.secondaryVehicle.phys.mass=t.mass}let l=!!this.routeCurve,u=o?.loopMode===`pingpong`,d=u?2:3;if(o?.type===`vehicle_route`&&Array.isArray(o.waypoints)&&o.waypoints.length>=d){let e=JSON.stringify({loopMode:o.loopMode||`loop`,waypoints:o.waypoints,stops:o.stops||[]});if(!l||e!==this.routeSignature){this.routeSignature=e;let t=o.waypoints.map(([e,t])=>new J(e,0,t));if(this.routeClosed=!u,this.routeCurve=new Ui(t,this.routeClosed,`centripetal`,.5),this.routeLength=Math.max(4,this.routeCurve.getLength()),this.stopArcPositions=(o.stops||[]).map(e=>{let t=0,n=1/0;for(let r=0;r<=160;r++){let i=r/160,a=this.routeCurve.getPointAt(i),o=Math.hypot(a.x-e.x,a.z-e.z);o<n&&(n=o,t=i)}return{stop:e,distOnCurve:t*this.routeLength}}),l){let e=0,t=1/0;for(let n=0;n<=160;n++){let r=n/160,i=this.routeCurve.getPointAt(r),a=Math.hypot(i.x-this.x,i.z-this.z);a<t&&(t=a,e=r)}let n=this.routeClosed?e*this.routeLength:Math.max(.8,Math.min(this.routeLength-.8,e*this.routeLength));if(this.routeDist=n,!this.routeClosed){let t=this.routeCurve.getTangentAt(e),n=Math.sin(this.yaw),r=Math.cos(this.yaw);this.routeDir=n*t.x+r*t.z>=0?1:-1}this.y=.092}else this.routeDist=this.routeClosed?this.routeDist%this.routeLength:Math.max(.8,Math.min(this.routeLength-.8,this.routeDist%this.routeLength)),this.secondaryVehicle&&!this.secondaryVehicle.initializedDist&&(this.secondaryVehicle.routeDist=this.routeClosed?(this.routeDist+this.routeLength*.5)%this.routeLength:Math.max(.8,this.routeLength*.82),this.secondaryVehicle.routeDir=-1,this.secondaryVehicle.initializedDist=!0),this.syncVehiclePoseToRoute()}}else this.routeCurve=null,this.routeSignature=``,this.dwellingStop=null,this.phys.turnState=null,this.phys.pendingTurnAtEnd=null;if(o?.type===`fly_circle`&&Array.isArray(o.waypoints)&&o.waypoints.length>=3){let e=o.altitude||14,t=o.waypoints.map(t=>t.length>=3?new J(t[0],t[1],t[2]):new J(t[0],e,t[1]));this.flightCurve=new Ui(t,!0,`centripetal`,.5),this.flightLength=Math.max(12,this.flightCurve.getLength()),this.flightDist%=this.flightLength}else this.flightCurve=null}sanitizeWanderTarget(e,t,n,r,i,a){let[o,s]=gp(e,t,n+2.4);for(let e=0;e<2;e++){{let e=2.95+n,t=o-cp[0],r=s-cp[1],i=Math.hypot(t,r);if(i<e){let n=i>.01?Math.atan2(r,t):this.index*2.399%(Math.PI*2);o=cp[0]+Math.cos(n)*e,s=cp[1]+Math.sin(n)*e}}if(!r)for(let e of i){let t=(e.radius||6.4)+n*.6+1.05,r=o-e.x,i=s-e.z,a=Math.hypot(r,i);if(a<t){let n=a>.01?Math.atan2(i,r):this.index*2.399%(Math.PI*2);o=e.x+Math.cos(n)*t,s=e.z+Math.sin(n)*t}}for(let e of a){if(e===this||e.data.category!==`building`&&e.data.behavior?.type!==`landmark`)continue;let t=(e.footprintRadius||3.4)*.76+n+.65,r=o-e.x,i=s-e.z,a=Math.hypot(r,i);if(a<t){let n=a>.01?Math.atan2(i,r):this.index*2.399%(Math.PI*2);o=e.x+Math.cos(n)*t,s=e.z+Math.sin(n)*t}}[o,s]=gp(o,s,n+2)}return[o,s]}syncVehiclePoseToRoute(){if(!this.routeCurve)return;let e=(e,t)=>{let n=this.routeClosed?(e.routeDist%this.routeLength+this.routeLength)%this.routeLength/this.routeLength:Math.max(.004,Math.min(.996,e.routeDist/this.routeLength)),r=this.routeCurve.getPointAt(n),i=this.routeCurve.getTangentAt(n),a=this.routeClosed?1:e.routeDir||1,o=Math.atan2(i.x*a,i.z*a),s=-Math.cos(o),c=Math.sin(o);e.currentLaneOffset=t,e.x=r.x+s*t,e.z=r.z+c*t,e.y=.092,e.yaw=o,e===this&&(this.smoothVelX=Math.sin(o),this.smoothVelZ=Math.cos(o)),e.phys&&(e.phys.turnState=null,e.phys.pendingTurnAtEnd=null,e.phys.currentSpeed=0,e.phys.frameStartX=e.x,e.phys.frameStartZ=e.z,e.phys.anchorX=e.x,e.phys.anchorZ=e.z)};e(this,this.isDualTransit?.68:1.12),this.secondaryVehicle&&e(this.secondaryVehicle,1.24)}stepVehicleUnitKinematics(e,t,n,r,i,a,o){if(!this.routeCurve)return;this.hasSteppedOnce=!0;let s=Math.max(.001,Math.min(.05,n||.016)),c=e.phys,l=e.x,u=e.z;c.frameStartX=l,c.frameStartZ=u;let d=t?`${this.id}#sec`:this.id,f=t?1.24:this.isDualTransit?.68:1.12,p=t?e.speed||4.35:this.effectiveSpeed||this.data?.behavior?.speed||5.5;if(c.turnState){let t=op({selfUnitId:d,x:e.x,z:e.z,yaw:e.yaw,cruiseLane:f,hw:c.hw,hl:c.hl,speed:p*.5,pullingOver:!1,isSeed:!!this.data?.isSeed,phys:c,vehicleEntities:i,buildingPeers:a,ponds:o,selfEnt:this,citySignPos:cp,clampPointToIslandFn:gp,dt:s}),n=s*Math.max(.15,Math.min(1,t.speedScale)),r=np(c.turnState,n),m=r.x,h=r.z,g=p*.68*s,_=Math.hypot(m-l,h-u);if(_>g&&_>1e-6){let e=g/_;m=l+(m-l)*e,h=u+(h-u)*e}e.x=m,e.z=h,e.y=.092;let v=r.yaw-e.yaw;for(;v>Math.PI;)v-=Math.PI*2;for(;v<-Math.PI;)v+=Math.PI*2;let y=s*2.45;e.yaw+=Math.max(-y,Math.min(y,v));let b=Math.hypot(e.x-l,e.z-u);c.currentSpeed=b/s,e.wheelAngle+=r.gear*b/.62,e.moveFactor=r.speedFactor,c.turnBankRoll=r.steerRoll,e===this&&(this.smoothVelX=Math.sin(e.yaw),this.smoothVelZ=Math.cos(e.yaw)),r.done&&Math.abs(v)<=.18&&(e.routeDir=c.turnState.nextDir,e.routeDist=c.turnState.nextRouteDist,e.currentLaneOffset=c.turnState.nextLaneOffset,e.buildingDetourOffset=0,c.currentSpeed=Math.min(p*.35,c.currentSpeed),c.turnBankRoll=0,c.turnState=null);return}if(c.turnBankRoll*=Math.exp(-s*8),e.dwellingStop){if(e.dwellTimer-=s,e.moveFactor=0,c.currentSpeed=0,c.vx=0,c.vz=0,e===this&&(this.yieldTimer=0),e.dwellTimer<=0){if(e.lastStoppedId=e.dwellingStop.id,e.dwellingStop=null,c.pendingTurnAtEnd&&!this.routeClosed){let t=c.pendingTurnAtEnd;c.pendingTurnAtEnd=null,c.turnState=ep({routeCurve:this.routeCurve,routeLength:this.routeLength,whichEnd:t,curX:e.x,curZ:e.z,curYaw:e.yaw,curLaneOffset:e.currentLaneOffset,targetReturnLane:f,hw:c.hw,hl:c.hl,speed:p,buildingPeers:a,ponds:o,selfEnt:this,citySignPos:cp,clampPointToIslandFn:gp});return}}else{e.y=.092;return}}let m=f,h=1,g=!1;for(let t=0;t<this.stopArcPositions.length;t++){let n=this.stopArcPositions[t],r=this.routeClosed?n.distOnCurve-e.routeDist:(n.distOnCurve-e.routeDist)*e.routeDir;this.routeClosed&&(r<-this.routeLength*.5&&(r+=this.routeLength),r>this.routeLength*.5&&(r-=this.routeLength)),Math.abs(r)>5&&e.lastStoppedId===n.stop.id&&(e.lastStoppedId=null);let i=Math.hypot(n.stop.x-e.x,n.stop.z-e.z);if(n.stop.id!==e.lastStoppedId&&r>=-.6&&r<5.2&&i<7.5&&(g=!0,h=Math.min(h,Math.max(.22,r/5.2)),r<=.55||i<=1.65)){e.routeDist=n.distOnCurve,e.dwellingStop=n.stop,e.dwellTimer=Math.min(2.2,n.stop.dwellSec||1.7),this.routeClosed||(e.routeDir>0&&n.distOnCurve>=this.routeLength-2.8?c.pendingTurnAtEnd=`end`:e.routeDir<0&&n.distOnCurve<=2.8&&(c.pendingTurnAtEnd=`start`)),e.moveFactor=0,c.currentSpeed=0,c.vx=0,c.vz=0;return}}if(g)m=1.62;else if(this.secondaryVehicle){let e=this.secondaryVehicle;(this.routeClosed||e.routeDir===this.routeDir)&&Math.hypot(e.x-this.x,e.z-this.z)<13.5&&(m=t?1.6:.16)}let _=op({selfUnitId:d,x:e.x,z:e.z,yaw:e.yaw,cruiseLane:f,hw:c.hw,hl:c.hl,speed:p,pullingOver:g,isSeed:!!this.data?.isSeed,phys:c,vehicleEntities:i,buildingPeers:a,ponds:o,selfEnt:this,citySignPos:cp,clampPointToIslandFn:gp,dt:s});h=Math.max(0,Math.min(1,Math.min(h,_.speedScale))),m=Math.max(-2.25,Math.min(2.65,m+_.extraLaneOffset)),e===this&&(this.yieldTimer=_.yielding?this.yieldTimer+s:Math.max(0,this.yieldTimer-s*2));let v=p*h,y=Number.isFinite(c.currentSpeed)?c.currentSpeed:0;c.currentSpeed=v>=y?Math.min(p,Math.min(v,y+4.2*s)):Math.max(0,Math.max(v,y-9.2*s));let b=m-e.currentLaneOffset,x=1.65*s;e.currentLaneOffset+=Math.max(-x,Math.min(x,b*Math.min(1,s*4.2)));let S=.75,C=this.routeClosed?1:e.routeDir||1,w=e.routeDist+C*2.85,T=!1;this.routeClosed?w=(w%this.routeLength+this.routeLength)%this.routeLength:C>0&&w>=this.routeLength-S?(w=this.routeLength-S,T=!0):C<0&&w<=S?(w=S,T=!0):w=Math.max(S,Math.min(this.routeLength-S,w));let E=this.routeClosed?w/this.routeLength:Math.max(.002,Math.min(.998,w/this.routeLength)),D=this.routeCurve.getPointAt(E),O=this.routeCurve.getTangentAt(E),k=Math.atan2(O.x*C,O.z*C),A=-Math.cos(k),j=Math.sin(k),M=Up(D.x,D.z,A,j,e.currentLaneOffset,a,this)-e.buildingDetourOffset;e.buildingDetourOffset+=Math.max(-x,Math.min(x,M*Math.min(1,s*4.2)));let N=Math.max(-3,Math.min(3,e.currentLaneOffset+e.buildingDetourOffset)),P=D.x+A*N,F=D.z+j*N,I=P-e.x,L=F-e.z,R=Math.hypot(I,L),ee=(R>.22?Math.atan2(I,L):k)-e.yaw;for(;ee>Math.PI;)ee-=Math.PI*2;for(;ee<-Math.PI;)ee+=Math.PI*2;let te=p>.1?c.currentSpeed/p:0,z=s*2.35*(.18+.82*te);e.yaw+=Math.max(-z,Math.min(z,ee*Math.min(1,s*6.5)));let ne=R>1e-4?Math.min(R,c.currentSpeed*s):0;if(ne>1e-6&&R>1e-4){let t=Math.sin(e.yaw),n=Math.cos(e.yaw),r=I/R,i=L/R,a=t*.65+r*.35,o=n*.65+i*.35,s=Math.hypot(a,o)||1;a/=s,o/=s,e.x+=a*ne,e.z+=o*ne}e.y=.092,e===this&&(this.smoothVelX=Math.sin(e.yaw),this.smoothVelZ=Math.cos(e.yaw)),e.wheelAngle+=ne/.62,e.moveFactor=te;let re=this.routeClosed?(e.routeDist%this.routeLength+this.routeLength)%this.routeLength/this.routeLength:Math.max(.002,Math.min(.998,e.routeDist/this.routeLength)),B=this.routeCurve.getPointAt(re),V=this.routeCurve.getTangentAt(re),ie=V.x*C,ae=V.z*C,oe=(e.x-B.x)*ie+(e.z-B.z)*ae;if(oe>0){let t=Math.min(oe,p*s*1.32);e.routeDist=this.routeClosed?((e.routeDist+t)%this.routeLength+this.routeLength)%this.routeLength:Math.max(S,Math.min(this.routeLength-S,e.routeDist+C*t))}let se=null;if(!this.routeClosed&&T&&R<=.6&&(C>0?(e.routeDist=this.routeLength-S,se=`end`):(e.routeDist=S,se=`start`)),se){let t=se===`end`?this.stopArcPositions.find(e=>e.distOnCurve>=this.routeLength-3):this.stopArcPositions.find(e=>e.distOnCurve<=3);t&&t.stop.id!==e.lastStoppedId?(e.dwellingStop={...t.stop,dwellSec:Math.min(2,t.stop.dwellSec||1.5)},e.dwellTimer=e.dwellingStop.dwellSec||1.5,e.moveFactor=0,c.currentSpeed=0,c.pendingTurnAtEnd=se):c.turnState=ep({routeCurve:this.routeCurve,routeLength:this.routeLength,whichEnd:se,curX:e.x,curZ:e.z,curYaw:e.yaw,curLaneOffset:N,targetReturnLane:f,hw:c.hw,hl:c.hl,speed:p,buildingPeers:a,ponds:o,selfEnt:this,citySignPos:cp,clampPointToIslandFn:gp})}}stepSecondaryVehicle(e,t,n,r,i,a){let o=this.secondaryVehicle;if(!o||!this.routeCurve)return;this.stepVehicleUnitKinematics(o,!0,e,t,r,n,i);let s=(o.dwellingStop&&!o.phys?.turnState?0:Math.sin(t*13+1.4)*.007*Math.abs(o.moveFactor||0))+(o.phys?.clashPitch||0),c=(o.phys?.turnBankRoll||0)+(o.phys?.clashRoll||0);o.group.position.set(o.x,o.y,o.z),o.group.rotation.set(s,o.yaw,c),o.group.scale.setScalar(a),o.group.userData.animate?.(t,{wheelAngle:o.wheelAngle,moveFactor:o.moveFactor})}updateVegasSphereEyes(e,t,n){let r=this.group.userData?.partPivots,i=r?.[`pupil-left`],a=r?.[`pupil-right`];if(!i||!a)return;let o=i.voxScale||.43,s=Math.cos(this.yaw),c=Math.sin(this.yaw),l=this.y+21.8*o,u=null,d=1/0;for(let e of n){if(e===this||e.data.behavior?.type!==`vehicle_route`)continue;let t=[{id:e.id,x:e.x,y:e.y||.5,z:e.z,move:e.moveFactor??1}];e.secondaryVehicle&&t.push({id:`${e.id}#tram`,x:e.secondaryVehicle.x,y:e.secondaryVehicle.y||.5,z:e.secondaryVehicle.z,move:e.secondaryVehicle.moveFactor??1});for(let e of t){let t=e.x-this.x,n=e.z-this.z,r=Math.hypot(t,n);if(r>102||r<1)continue;let i=t*s-n*c,a=t*c+n*s;if(a<-8)continue;let o=e.move>.08?.68:1.18,l=a>8?.85:1.15,f=r*o*l;f<d&&(d=f,u={...e,dist:r,lx:i,lz:a})}}u&&u.id!==this.lastTrackedCarId&&(this.lastTrackedCarId!==null&&this.eyeSpinFlourishTimer<=0&&(this.eyeSpinFlourishTimer=.95),this.lastTrackedCarId=u.id),t>=this.nextAutoSpinAt&&(this.eyeSpinFlourishTimer=Math.max(this.eyeSpinFlourishTimer,1.15),this.nextAutoSpinAt=t+9.5+Math.sin(t*.7)*2),this.eyeSpinFlourishTimer>0&&(this.eyeSpinFlourishTimer=Math.max(0,this.eyeSpinFlourishTimer-e));let f=t*3.85,p=Math.cos(t*1.45)*.72+Math.sin(t*3.1)*.28,m=Math.sin(t*1.85)*.62+Math.cos(t*2.7)*.25,h=Math.cos(f)*.95,g=Math.sin(f)*.92,_=p,v=m,y=Math.sin(t*2.4)*.28;if(u&&u.dist<88){let e=Math.max(11,Math.abs(u.lz)*.68+4),t=Math.max(-1,Math.min(1,u.lx/e*1.22)),n=(u.y+1.2-l)/Math.max(14,u.dist*.48),r=Math.max(-.92,Math.min(.82,n*1.35+.08)),i=u.move>.05?Math.max(.25,Math.min(1,1-Math.max(0,u.dist-58)/30)):.55;_=p*(1-i)+t*i,v=m*(1-i)+r*i,y=t*-.22}if(this.eyeSpinFlourishTimer>0){let e=Math.min(1,this.eyeSpinFlourishTimer/.35);_=_*(1-e)+h*e,v=v*(1-e)+g*e,y=f}let b=Math.min(1,e*(this.eyeSpinFlourishTimer>0?14:8.2));this.eyeGazeX+=(_-this.eyeGazeX)*b,this.eyeGazeY+=(v-this.eyeGazeY)*b;let x=(e,t,n,r,i,a)=>{let s=Math.max(-1.02,Math.min(1.02,this.eyeGazeX+a*.06)),c=Math.max(-1,Math.min(1,this.eyeGazeY)),l=Math.min(1.35,s*s+c*c),u=t+s*r,d=n+c*i,f=19.48-.82*l;e.pivot.position.set(u*o,d*o,f*o),e.pivot.rotation.set(-c*.38,s*.44,y)};x(i,-5.5,21.85,2.32,2.72,1),x(a,4.5,21.85,2.48,2.85,-1)}step(e,t,n=[],r=[],i=.62,a=null,o=null){let s=this.data.behavior,c=s?.type,l=c!==`vehicle_route`&&c!==`wander`&&c!==`water_float`&&c!==`fly_circle`;if(l&&this.staticRootFrozen){let r=this.group.userData?.animate,s=!!(this.feedMesh&&this.feedMesh.visible);if(!this.interactive&&!this.isVegasSphere&&!s&&!r)return;if(this.moveFactor=this.feedReading?.kind===`wind`&&typeof this.feedReading.value==`number`?Math.max(.45,Math.min(2.1,this.feedReading.value/15)):1,this.interactive?.step?.(e,t,{viewerPos:a,entX:this.x,entZ:this.z,entYaw:this.yaw}),s){this.feedMesh.position.y=this.topY+1.15+Math.sin(t*2.1)*.05;let e=a?Math.atan2(a.x-this.x,a.z-this.z):i;this.feedMesh.rotation.y=e-this.yaw}if(r){let e=o?this.x-o.focusX:0,n=o?this.z-o.focusZ:0;o&&e*e+n*n>9025&&o.frameTick+this.index&1||r(t,{wheelAngle:0,moveFactor:this.moveFactor})}this.isVegasSphere&&this.updateVegasSphereEyes(e,t,o?.vehicles||n);return}this.spawnScale<1&&(this.spawnScale=Math.min(1,this.spawnScale+e*3.2));let u=o?.vehicles||n,d=o?.buildings||n;this.moveFactor=0;let f=0,p=0;if(c===`vehicle_route`&&this.routeCurve){this.stepVehicleUnitKinematics(this,!1,e,t,u,d,r);let n=-Math.cos(this.yaw),i=Math.sin(this.yaw);this.doorX=this.x+n*1.9+Math.sin(this.yaw)*.9,this.doorZ=this.z+i*1.9+Math.cos(this.yaw)*.9,f=(this.dwellingStop&&!this.phys?.turnState?0:Math.sin(t*14)*.008*Math.abs(this.moveFactor||0))+(this.phys?.clashPitch||0),p=(this.phys?.turnBankRoll||0)+(this.phys?.clashRoll||0)}else if(s?.type===`wander`){let n=s.style===`glide`,i=s.hoverHeight||1.9,a=Math.min(3.8,Math.max(.85,(this.footprintRadius||1.5)*.48)),o=s.targets&&s.targets.length?s.targets:[[s.homeX+12,s.homeZ+8],[s.homeX-11,s.homeZ+9],[s.homeX+4,s.homeZ-14]];if(this.wanderPause>0)this.wanderPause-=e,this.y=n?i+Math.sin(t*2.2+this.index)*.22:0,this.moveFactor=n?.5:0,this.wanderStuckSec=0,this.wanderCheckX=this.x,this.wanderCheckZ=this.z;else{let c=o[this.wanderIdx%o.length],[l,u]=this.sanitizeWanderTarget(c[0],c[1],a,n,r,d),m=l-this.x,h=u-this.z,g=Math.hypot(m,h);if(g<Math.max(.8,a*.42))this.wanderIdx=(this.wanderIdx+1)%o.length,this.wanderPause=n?.6:1.5+this.wanderIdx%2*.8,this.wanderStuckSec=0,this.wanderCheckX=this.x,this.wanderCheckZ=this.z,this.y=n?i+Math.sin(t*2.2+this.index)*.22:0;else{let c=this.x,l=this.z,u=m/g,_=h/g,v=u,y=_,b=Math.min(g,Math.max(6.5,a*2.4+4.8)),x=(e,t,n)=>{let r=e-this.x,i=t-this.z,a=Math.hypot(r,i);if(a<.01||a>b+n)return;let o=r*u+i*_,s=r*-_+i*u,c=n+1.65;if(o>-n*.35&&Math.abs(s)<c){Math.abs(s)>.85&&a>n+.5&&(this.wanderAvoidSide=s>0?-1:1);let e=Math.abs(s)>1.15?s>0?-1:1:this.wanderAvoidSide,t=Math.max(0,Math.min(1.75,(c-Math.abs(s))/c*(1.3-Math.max(0,a-n)/b))),o=-r/a,l=-i/a;v+=-_*e*t*1.6+o*t*.65,y+=u*e*t*1.6+l*t*.65}};if(x(cp[0],cp[1],2.95+a),!n)for(let e of r)x(e.x,e.z,(e.radius||6.4)+a*.6+.85);for(let e of d)e!==this&&(e.data.category===`building`||e.data.behavior?.type===`landmark`)&&x(e.x,e.z,(e.footprintRadius||4)+a+.95);let S=Math.hypot(v,y)||1;v/=S,y/=S;let C=s.speed||2.8,w=Math.min(g,C*e);this.x+=v*w,this.z+=y*w;for(let e=0;e<2;e++){{let e=2.95+a,t=this.x-cp[0],n=this.z-cp[1],r=Math.hypot(t,n);r<e&&r>.01&&(this.x=cp[0]+t/r*e,this.z=cp[1]+n/r*e)}if(!n)for(let e of r){let t=(e.radius||6.4)+a*.6+.85,n=this.x-e.x,r=this.z-e.z,i=Math.hypot(n,r);i<t&&i>.01&&(this.x=e.x+n/i*t,this.z=e.z+r/i*t)}for(let e of d){if(e===this||e.data.category!==`building`&&e.data.behavior?.type!==`landmark`)continue;let t=(e.footprintRadius||4)+a+.95,n=this.x-e.x,r=this.z-e.z,i=Math.hypot(n,r);i<t&&i>.01&&(this.x=e.x+n/i*t,this.z=e.z+r/i*t)}let[e,t]=gp(this.x,this.z,a+2);this.x=e,this.z=t}let T=this.x-c,E=this.z-l,D=Math.hypot(T,E),O=T*v+E*y,k=w>1e-4?Math.max(0,Math.min(1,(O>-.002?D:0)/w)):0;k<.32?(this.wanderStuckSec+=e,this.wanderStuckSec>=.55&&(this.wanderStuckSec=0,this.wanderAvoidSide*=-1,this.wanderIdx=(this.wanderIdx+1)%o.length,this.wanderPause=.35)):this.wanderStuckSec=Math.max(0,this.wanderStuckSec-e*1.5),this.wheelAngle+=D/.45,this.moveFactor=n?.85:Math.max(.05,k);let A=Math.min(1,e*6.5);this.wanderDirX+=(v-this.wanderDirX)*A,this.wanderDirZ+=(y-this.wanderDirZ)*A;let j=Math.hypot(this.wanderDirX,this.wanderDirZ)||1;this.wanderDirX/=j,this.wanderDirZ/=j;let M=0;if(k>.14||n){for(M=Math.atan2(this.wanderDirX,this.wanderDirZ)-this.yaw;M>Math.PI;)M-=Math.PI*2;for(;M<-Math.PI;)M+=Math.PI*2;let t=e*4.8;this.yaw+=Math.max(-t,Math.min(t,M*Math.min(1,e*6.2)))}if(n)this.y=i+Math.sin(t*2.5+this.index)*.26,f=.06,p=Math.max(-.22,Math.min(.22,-M*.35));else if(s.style===`hop`){this.hopPhase=(this.hopPhase+e*3.4*Math.max(.15,k))%1;let t=this.hopPhase;this.y=2.32*t*(1-t)*k,f=(.5-t)*.22*k}else s.style===`trot`?(this.y=Math.abs(Math.sin(t*9))*.12*k,p=Math.sin(t*9)*.04*k):this.y=Math.abs(Math.sin(t*6.5))*.06*k}}}else if(s?.type===`water_float`){this.orbitAngle+=(s.speed||1.4)/Math.max(2.2,s.radius||4)*e;let n=s.radius||4,r=s.pondX+Math.cos(this.orbitAngle)*n,i=s.pondZ+Math.sin(this.orbitAngle)*n*.82,a=r-this.x,o=i-this.z;this.x=r,this.z=i,this.y=.14+Math.sin(t*2.4+this.orbitAngle)*.045,Math.hypot(a,o)>5e-4&&(this.yaw=Math.atan2(a,o));let c=this.feedReading?.kind===`surf`&&typeof this.feedReading.value==`number`?Math.max(.7,Math.min(2.2,this.feedReading.value)):1;p=Math.sin(t*2.1)*.05*c,f=Math.cos(t*1.8)*.035*c,this.moveFactor=.7}else if(s?.type===`fly_circle`){if(this.flightCurve){this.flightDist=(this.flightDist+(s.speed||6.4)*e)%this.flightLength;let n=(this.flightDist%this.flightLength+this.flightLength)%this.flightLength/this.flightLength,r=this.flightCurve.getPointAt(n),i=this.flightCurve.getTangentAt(n),a=this.flightCurve.getTangentAt((n+.022)%1);this.x=r.x,this.z=r.z,this.y=r.y+Math.sin(t*2.6+this.index)*.36,this.yaw=Math.atan2(i.x,i.z);let o=Math.atan2(a.x,a.z)-this.yaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;let c=Math.max(-.46,Math.min(.46,-o*1.55));this.bankRoll+=(c-this.bankRoll)*Math.min(1,e*5.2),p=this.bankRoll,f=Math.max(-.36,Math.min(.36,-i.y*.78)),this.moveFactor=1}else{this.orbitAngle+=(s.speed||5.6)/Math.max(10,s.radius||24)*e;let n=s.radius||24,r=s.centerX+Math.cos(this.orbitAngle)*n,i=s.centerZ+Math.sin(this.orbitAngle)*n*.86,a=(s.altitude||14)+Math.sin(this.orbitAngle*2+t*.6)*2.1,o=r-this.x,c=a-this.y,l=i-this.z,u=Math.hypot(o,l);this.x=r,this.z=i,this.y=a,u>.001&&(this.yaw=Math.atan2(o,l),f=Math.max(-.32,Math.min(.32,-Math.atan2(c,u)*.75))),p=-.24,this.moveFactor=1}}else this.y=.004,typeof s?.facingYaw==`number`?this.yaw=s.facingYaw:typeof this.data?.yaw==`number`&&(this.yaw=this.data.yaw),this.moveFactor=this.feedReading?.kind===`wind`&&typeof this.feedReading.value==`number`?Math.max(.45,Math.min(2.1,this.feedReading.value/15)):1;this.interactive?.step?.(e,t,{viewerPos:a,entX:this.x,entZ:this.z,entYaw:this.yaw});let m=this.interactive?.getPoseOffset?.(t)||null,h=this.y+(m?.liftY||0),g=p+(m?.rollZ||0);this.group.position.set(this.x,h,this.z),this.group.rotation.set(f,this.yaw,g);let _=this.spawnScale<1?1-(1-this.spawnScale)**3:1;if(this.group.scale.setScalar(_),l&&this.spawnScale>=1&&!this.interactive?.getPoseOffset&&!this.staticRootFrozen){this.group.updateMatrixWorld(!0),this.group.matrixAutoUpdate=!1;for(let e of this.group.children)e.isMesh&&e!==this.feedMesh&&(e.matrixAutoUpdate=!1);this.staticRootFrozen=!0}if(this.secondaryVehicle&&this.stepSecondaryVehicle(e,t,d,u,r,_),this.feedMesh&&this.feedMesh.visible){this.feedMesh.position.y=this.topY+1.15+Math.sin(t*2.1)*.05;let e=a?Math.atan2(a.x-this.x,a.z-this.z):i;this.feedMesh.rotation.y=e-this.yaw}this.group.userData.animate?.(t,{wheelAngle:this.wheelAngle,moveFactor:this.moveFactor}),this.isVegasSphere&&this.updateVegasSphereEyes(e,t,u)}dispose(e=null){this.interactive?.dispose?.(),this.interactive=null,this.feedMesh&&(this.feedMesh.geometry.dispose(),this.feedMesh.material.dispose(),this.feedTex?.dispose()),this.secondaryVehicle&&=(e?e.remove(this.secondaryVehicle.group):this.secondaryVehicle.group.parent?.remove(this.secondaryVehicle.group),this.secondaryVehicle.group.userData.dispose?.(),null),this.group.userData.dispose?.()}};function Gp(e){let t=[];for(let n of e.values())if(n.data?.behavior?.type===`vehicle_route`&&n.routeCurve){let e=[];for(let t=0;t<32;t++)e.push(n.routeCurve.getPointAt(t/32));t.push({ent:n,samples:e})}if(t.length<2)return;let n=new Set,r=[1,.86,.93];for(let e=0;e<t.length;e++){if(n.has(e))continue;let i=[t[e]];n.add(e);for(let r=e+1;r<t.length;r++){if(n.has(r))continue;let a=0;for(let n of t[e].samples)for(let e of t[r].samples)if(Math.hypot(n.x-e.x,n.z-e.z)<4.8){a++;break}a>=8&&(i.push(t[r]),n.add(r))}if(i.length<2)continue;i.sort((e,t)=>!!e.ent.data.isSeed==!!t.ent.data.isSeed?e.ent.id.localeCompare(t.ent.id):e.ent.data.isSeed?-1:1);let a=i[0].ent,o=a.routeClosed?(a.routeDist%a.routeLength+a.routeLength)%a.routeLength/a.routeLength:.16;a.deBunchedOnce||a.hasSteppedOnce||a.routeClosed||(a.routeDist=a.routeLength*.16,a.routeDir=1);let s=a.routeCurve.getPointAt(o),c=a.routeCurve.getTangentAt(o);for(let e=0;e<i.length;e++){let t=i[e].ent;if(!t.isDualTransit){let n=t.data?.behavior?.speed||5.4,i=r[e%r.length];t.effectiveSpeed=Math.max(3.6,Math.min(n,n*i))}let n=!t.deBunchedOnce&&!t.hasSteppedOnce;if(e>0&&n){if(t.routeClosed){let n=0,r=1/0;for(let e=0;e<64;e++){let i=e/64,a=t.routeCurve.getPointAt(i),o=Math.hypot(a.x-s.x,a.z-s.z);o<r&&(r=o,n=i)}let a=t.routeCurve.getTangentAt(n),o=c.x*a.x+c.z*a.z>=0?1:-1;t.routeDist=((n+o*(e/i.length))%1+1)%1*t.routeLength}else{let n=e%2==1?.84:.48;t.routeDist=t.routeLength*n,t.routeDir=e%2==1?-1:1}}t.deBunchedOnce=!0,n&&t.syncVehiclePoseToRoute?.()}}}function Kp(e,t={},n={}){let r=!!n.ogMode,i=new kn;i.background=xp();let a=Math.max(320,window.innerWidth),o=Math.max(240,window.innerHeight),s=document.createElement(`canvas`),c=s.getContext(`webgl2`,{powerPreference:`high-performance`})||s.getContext(`webgl`,{powerPreference:`high-performance`}),l=c?.getExtension?.(`WEBGL_debug_renderer_info`)||null,u=c&&l?String(c.getParameter(l.UNMASKED_RENDERER_WEBGL)||``):``,d=/swiftshader|llvmpipe|software|basic render/i.test(u),f=new Nl({canvas:e,antialias:!d,powerPreference:`high-performance`,preserveDrawingBuffer:r}),p=f.getContext(),m=p.getExtension(`WEBGL_debug_renderer_info`),h=m?String(p.getParameter(m.UNMASKED_RENDERER_WEBGL)||``):u,g=d||/swiftshader|llvmpipe|software|basic render/i.test(h),_=!r&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||``)||!!(window.matchMedia?.(`(pointer: coarse)`)?.matches&&Math.min(a,o)<1024)),v=!r&&(g||_||/Mali-G[357]|Adreno \(TM\) [2-6]|PowerVR|Intel\(R\) (HD|UHD) Graphics [456]/i.test(h)),y=f.capabilities.getMaxAnisotropy?.()||4,b=g||_?1:v?1.25:a>2560&&!r?1.65:2,x=g?`low`:_||v?`medium`:`high`,S=1,C=!1,w=60;f.outputColorSpace=Ae,f.setPixelRatio(Math.min(window.devicePixelRatio||1,b)*S),f.setSize(a,o,!1),f.shadowMap.enabled=x!==`low`&&!g,f.shadowMap.type=1,f.toneMapping=4,f.toneMappingExposure=1.08;let T=a/o,E=new Ha(-34*T,34*T,34,-34,12,980),D=new za(T<.8?72:62,T,.14,820);D.rotation.order=`YXZ`;let O=null,k=!1,A=null,j=null,M=null,N=null;function P(){if(O||g)return;let e=Math.max(320,window.innerWidth),t=Math.max(240,window.innerHeight);O=new Hl(f),A=new tu(i,Y.active||K.usingFpCam?D:E),O.addPass(A),j=new Ql(i,Y.active||K.usingFpCam?D:E,e,t),j.output=Ql.OUTPUT.Default,j.blendIntensity=.44,j.updateGtaoMaterial({radius:.22,distanceExponent:1.4,thickness:.65,scale:1,samples:9,distanceFallOff:1,screenSpaceRadius:!0}),O.addPass(j),M=new su(new xt(e,t),.12,.25,1.15),O.addPass(M),O.addPass(new eu),N=new au(e,t),O.addPass(N)}g||v||_||(P(),k=!!O,k&&(x=`ultra`));function F(e){if(k&&(A&&(A.camera=e),j)){j.camera=e;let t=+!!e.isPerspectiveCamera;j.gtaoMaterial.defines.PERSPECTIVE_CAMERA!==t&&(j.gtaoMaterial.defines.PERSPECTIVE_CAMERA=t,j.gtaoMaterial.needsUpdate=!0),j.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(e.projectionMatrix),j.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(e.projectionMatrixInverse),j.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(e.projectionMatrixInverse)}}let I=new J(64,118,76),L=g||v?1024:2048,R=new Wa(16774107,2.25);R.position.copy(I),R.castShadow=f.shadowMap.enabled,R.shadow.mapSize.set(L,L),R.shadow.camera.left=-86,R.shadow.camera.right=86,R.shadow.camera.top=86,R.shadow.camera.bottom=-86,R.shadow.camera.near=10,R.shadow.camera.far=360,R.shadow.bias=-35e-5,R.shadow.normalBias=.028,R.shadow.radius=2,i.add(R),i.add(R.target);let ee=new Da(15661055,7251020,1.12);i.add(ee);let te=new Wa(16771010,.35);te.position.set(-85,70,-90),i.add(te);let z={uTime:{value:0},uFocusXZ:{value:new xt(0,0)},uHorizonRange:{value:new xt(145,295)},uZones:{value:Array.from({length:up},()=>new Bt(0,0,0,0))},uZoneCount:{value:0}},ne=new fi(Mp(),jp(z));ne.receiveShadow=!0,ne.matrixAutoUpdate=!1,ne.updateMatrix(),i.add(ne);let re=new Wi(4600,4600,1,1);re.rotateX(-Math.PI/2);let B=new fi(re,Np(z));B.position.set(0,-.56,0),B.raycast=()=>{},i.add(B);let V=Sp(z.uTime);i.add(V);let ie=wp(y);ie.group.updateMatrixWorld(!0),ie.group.matrixAutoUpdate=!1,i.add(ie.group);let ae=Ep();i.add(ae.group);let oe=new bn;i.add(oe);let se=[zp(0),zp(1),zp(2)],ce=[Bp(0),Bp(1),Bp(2)],le=[Pp(0),Pp(1),Pp(2)],ue=[];for(let e=0;e<46;e++){let t=44+e*19%92,n=e*2.399963+.4,r=Math.cos(n)*t,i=Math.sin(n)*t;if(hp(r,i)>=6.5&&ue.push({mesh:se[e%3],x:r,y:0,z:i,rotY:e*1.7%(Math.PI*2),scale:.85+e%4*.14,isTree:!0,isCoastalRock:!1,blocked:!1}),e%2==0){let t=n+.05,a=r+Math.cos(t*7)*2.4,o=i+Math.sin(t*5)*2.4;hp(a,o)>=6&&ue.push({mesh:ce[e%3],x:a,y:0,z:o,rotY:e*2.3%(Math.PI*2),scale:1,isTree:!1,isCoastalRock:!1,blocked:!1})}}for(let e=0;e<28;e++){let t=e/28*Math.PI*2+(e%3-1)*.042,n=-3.3+e%4*.85,[r,i]=gp(Math.cos(t)*260,Math.sin(t)*260,n),a=_p(r,i)-.12;ue.push({mesh:le[e%3],x:r,y:a,z:i,rotY:e*2.17%(Math.PI*2),scale:.88+e%4*.18,isTree:!1,isCoastalRock:!0,blocked:!1})}let de=Mu(ue,{depthLayer:0,castShadow:!0,receiveShadow:!0});de&&oe.add(de);let fe=[0,1,2].map(e=>{let t=new Z(410+e*17),n=e===0?`limestone`:e===1?`path`:`cream`,r=e===1?`path2`:`concrete`;return t.box(-2,0,-2,2,1,2,n),t.put(-2,0,-2,r),t.put(1,0,1,r),Q(t,{scale:.21,castShadow:!1,depthLayer:1})}),pe=[0,1,2].map(e=>{let t=new Z(450+e*13);return t.box(-1,0,-1,1,1,1,e===0?`stone`:e===1?`path2`:`moss`),e===0&&t.put(1,0,0,`concrete2`),Q(t,{scale:.16,castShadow:!1,depthLayer:1})}),me=[0,1,2].map(e=>{let t=new Z(490+e*19),n=e===0?`limestone`:e===1?`path`:`cream`,r=e===0?`concrete`:e===1?`path2`:`stone`;return t.box(-2,0,-2,0,1,0,n),t.box(1,0,-1,3,1,1,r),t.box(-1,0,1,1,1,2,r),Q(t,{scale:.17,castShadow:!1,depthLayer:2})}),he=[0,1].map(e=>{let t=new Z(530+e*11),n=e===0?`oak`:`woodLight`;return t.box(-4,1,-1,4,2,2,n),t.box(-4,0,-1,-3,1,2,`woodDark`),t.box(3,0,-1,4,1,2,`woodDark`),Q(t,{scale:.19,castShadow:!0,depthLayer:2})}),ge=[0,1].map(e=>{let t=new Z(570+e*17);return t.box(-2,0,-2,2,1,2,`basalt`),t.put(e===0?-2:1,0,0,`ash`),t.put(0,0,e===0?1:-1,`lava`,1.15),Q(t,{scale:.2,castShadow:!1,depthLayer:2})}),_e=[0,1,2].map(e=>{let t=new Z(610+e*15),n=e===0?`limestone`:e===1?`path`:`stone`;return t.box(-2,0,-1,1,1,1,n),t.put(1,0,0,e===1?`cream`:`concrete`),e===2&&(t.put(-1,1,0,`leaf`),t.put(0,1,0,`#f6d55c`)),Q(t,{scale:.16,castShadow:!1,depthLayer:1})}),ve=new bn,ye=new bn,be=new bn,xe=new bn;i.add(ve,ye,be,xe);let Se=od(),Ce=vd(Se,{isLocalPlayer:!0,castShadow:!0});Ce.root.visible=!r,i.add(Ce.root);let we=0,Te=new wd;Te.group.visible=!r,i.add(Te.group);let H=null,U=null,Ee=``,De=!1,Oe=null,W=new Gi(.92,1.06,64);W.rotateX(-Math.PI/2);let ke=new fi(W,new ei({color:16775106,transparent:!0,opacity:.72,side:2,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));ke.position.y=.122,ke.visible=!1,i.add(ke);let G=Dp();i.add(G.group);let je={mode:`hidden`,x:16,z:10},Me=3.3,Ne={},Pe=new Map,Fe=new Map,Ie=null,Le=null,Re=0,ze=.62,Be=.66,Ve=.135,He=1.24;function Ue(){return(e.clientWidth||window.innerWidth||1280)/Math.max(1,e.clientHeight||window.innerHeight||800)<.78?.82:1.02}function We(){return(e.clientWidth||window.innerWidth||1280)/Math.max(1,e.clientHeight||window.innerHeight||800)<.8?72:62}function Ge(e){let t=Math.max(0,Math.min(1,e));return t*t*t*(t*(t*6-15)+10)}function Ke(e){let t=e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function qe(e){return e<.32?(.32-e)*14:0}let Je=!!window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches,Ye=!r&&!Je,Xe=Ue(),Ze=Math.random()*Math.PI*2,Qe=1.4+Math.random()*2.4,[$e,et]=gp(10.6+Math.cos(Ze)*Qe,-.6+Math.sin(Ze)*Qe,4),tt=Math.atan2(-(2.4-$e),-(-18.5-et)),K={active:Ye,elapsed:0,holdSec:.55,panDurSec:1.9,orbitDurSec:3.7,walkDurSec:2.05,fromTx:cp[0],fromTy:2.38,fromTz:cp[1],fromZoom:2.95,fromAz:.5,fromEl:.155,firedPan:!1,firedOrbit:!1,firedWalk:!1,usingFpCam:!1,walkX:$e,walkZ:et,walkYaw:tt,walkPitch:.045},q={tx:Ye?K.fromTx:0,ty:Ye?K.fromTy:0,tz:Ye?K.fromTz:-2,goalTx:0,goalTy:0,goalTz:-2,zoom:Ye?K.fromZoom:Xe,goalZoom:Xe,az:Ye?K.fromAz:ze,goalAz:ze,el:Ye?K.fromEl:Be,goalEl:Be};function nt(n=null){if(!K.active)return;let r=K.usingFpCam;if(K.active=!1,K.usingFpCam=!1,D.fov=We(),D.near=.14,D.far=820,D.updateProjectionMatrix(),r){if(n===`pan`||n===`orbit`)V.visible=!1,F(E),q.az=q.goalAz=ze,q.el=q.goalEl=Be,q.tx=q.goalTx=0,q.ty=q.goalTy=0,q.tz=q.goalTz=-2,q.zoom=q.goalZoom=Ue();else{let[n,r]=Tn(K.walkX,K.walkZ);Y.x=n,Y.z=r;let i=_p(n,r);Y.feetY=i,Y.y=i+Ot,Y.yaw=Y.goalYaw=K.walkYaw,Y.pitch=Y.goalPitch=K.walkPitch,Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.settleT=1,Y.active=!0,De=!0,ln=`walk`,Ce.setFirstPersonMode(!0),V.visible=!0,V.position.set(Y.x,0,Y.z),D.position.set(Y.x,Y.y,Y.z),D.rotation.set(Y.pitch,Y.yaw,0),D.updateMatrixWorld(),F(D),e.style.cursor=vn(),t.onDragModeChange?.(`walk`)}}else q.az=ze+Ke(q.az-ze),q.goalTx=q.tx,q.goalTy=qe(q.el),q.goalTz=q.tz,q.goalZoom=q.zoom,q.goalAz=q.az,q.goalEl=q.el}function rt(){q.goalTx=Math.max(-185,Math.min(185,q.goalTx)),q.goalTz=Math.max(-185,Math.min(185,q.goalTz))}function it(e,t,n=Me){let r=Math.max(1.3,Number(n)||3.3);if(hp(e,t)<r+2.2||Math.hypot(e-cp[0],t-cp[1])<r+2.2)return!1;if(!Ie)return!0;for(let n of Ie.creations||[]){if(n.category===`aircraft`||n.behavior?.type===`fly_circle`||n.category===`watercraft`||n.behavior?.type===`water_float`)continue;let i=du(n.scaleClass,n.blueprint?.stats?.footprintX??14,n.blueprint?.stats?.footprintZ??14);if(Math.hypot(e-n.x,t-n.z)<r+i+.85)return!1}for(let n of Ie.props||[])if(n.kind===`pond`&&Math.hypot(e-n.x,t-n.z)<(n.radius||6.5)+r+.9)return!1;for(let n of Ie.paths||[])if(n.kind===`road`&&n.points)for(let i=0;i<n.points.length;i++){let a=n.points[i],o=n.points[(i+1)%n.points.length];if(!n.closed&&i===n.points.length-1)break;if(yp(e,t,a[0],a[1],o[0],o[1])<r+2.15)return!1}return!0}function at(e,t,n=Me){let[r,i]=gp(e,t,Math.max(1.3,Number(n)||3.3)+2.6);if(it(r,i,n))return[Number(r.toFixed(1)),Number(i.toFixed(1))];let a=Math.atan2(i,r);for(let e=2.5;e<=78;e+=2.6)for(let t=0;t<20;t++){let o=a+t/20*Math.PI*2,s=r+Math.cos(o)*e,c=i+Math.sin(o)*e;if(it(s,c,n))return[Number(s.toFixed(1)),Number(c.toFixed(1))]}return[Number(r.toFixed(1)),Number(i.toFixed(1))]}function ot(e){let n=bp(e);if(Me=n,G.setPlotRadius(n),(je.mode===`staked`||je.mode===`picking`)&&!it(je.x,je.z,n)){let[e,r]=at(je.x,je.z,n);je.x=e,je.z=r,G.group.position.set(e,0,r),t.onAutoNudgeSpot?.(e,r)}}let st=!0,ct=[],lt=[],ut=[],dt=[],ft=[],pt=[],mt=[{ent:null,x:cp[0],z:cp[1],r:2.9}];function ht(){st=!0}function gt(){if(st){st=!1,ct=Array.from(Pe.values()),lt=[],ut=[],dt=[],mt=[{ent:null,x:cp[0],z:cp[1],r:2.9}];for(let e of ct)e.interactive?.hitMeshes?.length&&dt.push(e),e.data.behavior?.type===`vehicle_route`?lt.push(e):(e.data.category===`building`||e.data.behavior?.type===`landmark`)&&(ut.push(e),mt.push({ent:e,x:e.x,z:e.z,r:(e.footprintRadius||3.8)+.8}));ft=(Ie?.props||[]).filter(e=>e.kind===`pond`),pt=Array.from(Fe.values())}}let _t=new uo,vt=new uo;vt.layers.set(2);let yt=null,Ct=null,wt=new Ar(new J(0,1,0),0),Tt=new J;function Et(){Ct=null,yt&&=(yt.interactive?.setHovered?.(null),null)}function Dt(t,n){if(Y.active&&H?.isInside?.()||(gt(),dt.length===0))return null;let r=[];for(let e of dt){if(Y.active){let t=44+(e.footprintRadius||4),n=e.x-Y.x,r=e.z-Y.z;if(n*n+r*r>t*t)continue}for(let t of e.interactive.hitMeshes)r.push(t)}if(r.length===0)return null;let i=e.getBoundingClientRect(),a=Y.active&&document.pointerLockElement===e,o=a?0:(t-i.left)/Math.max(1,i.width)*2-1,s=a?0:-((n-i.top)/Math.max(1,i.height))*2+1;vt.setFromCamera({x:o,y:s},Y.active?D:E),vt.far=Y.active?42:620;let c=vt.intersectObjects(r,!1);if(!c.length)return null;let l=c[0].object,u=l.userData?.creationId,d=u?Pe.get(u):null;return!d||!d.interactive?null:{ent:d,action:l.userData?.interactiveAction||null,point:c[0].point}}let Ot=1.65,kt=-1.32,At=1.18,jt=_p($e,et),Y={active:!1,x:$e,y:jt+Ot,z:et,localX:0,localY:0,localZ:3.85,feetY:jt,horizSpeed:0,sprinting:!1,yaw:tt,goalYaw:tt,pitch:-.02,goalPitch:-.02,vx:0,vz:0,jumpY:0,jumpVy:0,bobPhase:0,settleT:1};function Mt(t,n){if(Y.active&&H?.isInside?.())return null;let r=e.getBoundingClientRect(),i=(t-r.left)/Math.max(1,r.width)*2-1,a=-((n-r.top)/Math.max(1,r.height))*2+1;return _t.setFromCamera({x:i,y:a},Y.active?D:E),Y.active&&_t.ray.direction.y>=-.015?null:_t.ray.intersectPlane(wt,Tt)?[Tt.x,Tt.z]:null}function Nt(){let e=typeof Ie?.contributionCount==`number`?Ie.contributionCount:(Ie?.creations||[]).filter(e=>!e.isSeed&&!e.isCompanion).length,t=Ie?.creations?.length??0;return{id:`__city_sign__`,x:cp[0],z:cp[1],data:{id:`__city_sign__`,name:`GeminIsland Sign`,description:`Timber town signboard displaying ${e} ${e===1?`contribution`:`contributions`} (${t} total builds on the island).`,behavior:{statusLine:`${e} ${e===1?`contribution`:`contributions`} · ${t} creations`}}}}function Pt(t,n){if(Y.active&&H?.isInside?.())return null;if(gt(),Y.active){let r=e.getBoundingClientRect(),i=document.pointerLockElement===e,a=i?0:(t-r.left)/Math.max(1,r.width)*2-1,o=i?0:-((n-r.top)/Math.max(1,r.height))*2+1;_t.setFromCamera({x:a,y:o},D);let s=[],c=cp[0]-Y.x,l=cp[1]-Y.z;c*c+l*l<=6084&&s.push(ie.group);let u=-Math.sin(Y.yaw),d=-Math.cos(Y.yaw);for(let e of ct){let t=(e.footprintRadius||3.8)+3.5,n=75+t,r=e.x-Y.x,i=e.z-Y.z,a=r*r+i*i;if(a<=n*n&&(a<=t*t||r*u+i*d>-t)&&s.push(e.group),e.secondaryVehicle){let t=e.secondaryVehicle,n=t.x-Y.x,r=t.z-Y.z,i=n*n+r*r;i<=6400&&(i<=25||n*u+r*d>-5)&&s.push(t.group)}}if(s.length===0)return null;let f=_t.far;_t.far=75;let p=_t.intersectObjects(s,!0);_t.far=f;for(let e of p){let t=e.object;for(;t;){let e=t.userData?.creationId;if(e===`__city_sign__`)return Nt();if(e&&Pe.has(e))return Pe.get(e);t=t.parent}}return null}let r=Mt(t,n);if(!r)return null;if(Math.hypot(r[0]-cp[0],r[1]-cp[1])<3.4)return Nt();let i=null,a=1/0;for(let e of ct){let t=Math.max(4.4,(e.footprintRadius||3.5)+1.2),n=Math.hypot(e.x-r[0],e.z-r[1]);n<t&&n<a&&(a=n,i=e)}return i}function Ft(e){let t=Array.isArray(e)?e.slice(0,up):[],n=0;for(let e=0;e<up;e++){let r=z.uZones.value[e],i=t[e];i&&vp[i.biome]?(r.set(Number(i.x)||0,Number(i.z)||0,Math.max(4,Number(i.radius)||9),vp[i.biome]),n++):r.set(0,0,0,0)}z.uZoneCount.value=n}function It(e){for(;e.children.length;)e.children.pop().traverse(e=>{e.userData?.sharedProto||(e.isInstancedMesh&&e.dispose(),e.geometry&&!e.userData?.sharedGeo&&e.geometry.dispose())})}let Lt=``,Rt=`1`.repeat(ue.length);function zt(e){let t=e?.creations||[],n=e?.paths||[],r=`${t.length}:${n.length}`;for(let e=0;e<t.length;e++){let n=t[e];r+=`|${n.id}:${Math.round((n.x||0)*10)}:${Math.round((n.z||0)*10)}:${n.scaleClass||``}`}for(let e=0;e<n.length;e++){let t=n[e],i=t.points||[],a=i[0],o=i[i.length-1];r+=`;${t.id}:${t.kind}:${i.length}:${a?`${a[0]},${a[1]}`:``}:${o?`${o[0]},${o[1]}`:``}`}if(r===Lt)return;Lt=r;let i=n.filter(e=>Array.isArray(e.points)&&e.points.length>=2).map(e=>{let t=new Ui(e.points.map(([e,t])=>new J(e,0,t)),!!e.closed,`centripetal`,.5),n=Math.max(3,t.getLength());return{clearance:e.kind===`road`?3.8:e.kind===`cottage_road`?2.75:2.35,pts:t.getSpacedPoints(Math.min(120,Math.max(12,Math.round(n*.6))))}}),a=``,o=[];for(let e of ue){let n=!1;for(let r of t){if(r.category===`aircraft`||r.behavior?.type===`fly_circle`)continue;let t=du(r.scaleClass,r.blueprint?.stats?.footprintX??14,r.blueprint?.stats?.footprintZ??14);if(Math.hypot(e.x-r.x,e.z-r.z)<t+3){n=!0;break}}if(!n)for(let t of i){for(let r=0;r+1<t.pts.length;r++){let i=t.pts[r],a=t.pts[r+1];if(yp(e.x,e.z,i.x,i.z,a.x,a.z)<t.clearance){n=!0;break}}if(n)break}e.blocked=n,a+=n?`0`:`1`,n||o.push(e)}if(a!==Rt){Rt=a,It(oe);let e=Mu(o,{depthLayer:0,castShadow:!0,receiveShadow:!0});e&&oe.add(e)}}let Vt=new Pi(.2,.026,1.3),Ht=new ei({color:`#f6eed8`,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-4}),Ut=new Gt,Wt=new J,Kt=new St,qt=new J(1,1,1),Jt=new J(0,1,0),Yt=``;function Xt(e){let t=e.paths||[],n=e.props||[],r=`${t.length}:${n.length}`;for(let e=0;e<t.length;e++){let n=t[e];r+=`|${n.id}:${n.kind}:${+!!n.closed}:`;let i=n.points||[];for(let e=0;e<i.length;e++)r+=`${i[e][0]},${i[e][1]};`}for(let e=0;e<n.length;e++){let t=n[e];r+=`|${t.id||t.kind}:${t.x}:${t.z}:${t.yaw||0}:${t.radius||0}:${t.variant||0}`}if(r===Yt)return;Yt=r,It(ve),It(ye);let i=new Map,a=(e,t)=>{let n=i.get(e);n||(n=[],i.set(e,n)),n.push(t)},o=[],s=[],c=[],l=[],u=t.filter(e=>e.kind===`road`&&e.points&&e.points.length>=2).map((e,t)=>{let n=new Ui(e.points.map(([e,t])=>new J(e,0,t)),!!e.closed,`centripetal`,.5),r=Math.max(4,n.getLength());return{id:e.id,rank:e.id===`path-main-loop`?0:e.closed?1:2+t,pts:n.getSpacedPoints(Math.min(180,Math.max(28,Math.round(r*1.5))))}}),d=(e,t)=>{let n=null,r=1/0;for(let i of u)if(i.id!==t)for(let t=0;t<i.pts.length-1;t++){let a=i.pts[t],o=i.pts[t+1],s=o.x-a.x,c=o.z-a.z,l=s*s+c*c,u=l>1e-6?Math.max(0,Math.min(1,((e.x-a.x)*s+(e.z-a.z)*c)/l)):0,d=a.x+s*u,f=a.z+c*u,p=Math.hypot(e.x-d,e.z-f);p<r&&(r=p,n={x:d,z:f})}return!n||r>3.35?null:new J(n.x,0,n.z)},f=(e,t,n)=>{for(let r of u)if(r.id!==n){for(let n=0;n<r.pts.length;n++)if(Math.hypot(e-r.pts[n].x,t-r.pts[n].z)<2.85)return!0}return!1};for(let e=0;e<t.length;e++){let n=t[e];if(!n.points||n.points.length<2)continue;let r=n.points.map(([e,t])=>new J(e,0,t)),i=!1,u=!1;if(n.kind===`road`&&!n.closed){let e=d(r[0],n.id);e&&(r[0]=e,i=!0);let t=d(r[r.length-1],n.id);t&&(r[r.length-1]=t,u=!0)}let p=new Ui(r,!!n.closed,`centripetal`,.5),m=Math.max(2.5,p.getLength()),h=Math.min(200,Math.max(28,Math.round(m*1.45)));if(n.kind===`road`){let t=n.id===`path-main-loop`||!!n.closed,r=t?.091:Math.max(.084,.089-Math.min(5,e)*.001),s=t?-2.3:-2;a(-1,Lp(p,h,2.52,.052,`#dfd7c5`,!0)),a(s,Lp(p,h,2.1,r,`#4b505c`,!0));let c=Math.floor(m/3.4);for(let e=0;e<c;e++){let r=(e+.5)/c,a=r*m,s=(1-r)*m;if(i&&a<2.8||u&&s<2.8)continue;let l=p.getPointAt(r);if(!t&&f(l.x,l.z,n.id))continue;let d=p.getTangentAt(r);o.push(l.x,.106,l.z,Math.atan2(d.x,d.z))}}else if(n.kind===`cottage_road`){let t=Math.min(28,e)*22e-5;a(-1,Lp(p,h,1.24,.032-t,`#c5b089`,!0)),a(-2,Lp(p,h,.9,.048-t,`#e6d8b9`,!0)),a(-2.5,Lp(p,h,.24,.056-t,`#bda67b`,!0));let n=Math.max(2,Math.floor(m/2.2));for(let e=1;e<n;e++){let t=e/n,r=p.getPointAt(t),i=p.getTangentAt(t),a=e%2==0?1:-1,o=-i.z*a,c=i.x*a;s.push({mesh:_e[e%_e.length],x:r.x+o*1.14,y:-.11,z:r.z+c*1.14,rotY:Math.atan2(i.x,i.z)+(e*3%5-2)*.12})}}else if(n.kind===`dirt_trail`){let t=Math.min(28,e)*22e-5;a(-1,Lp(p,h,.98,.03-t,`#bfa074`,!0)),a(-2,Lp(p,h,.68,.045-t,`#9b7248`,!0));let n=Math.max(2,Math.floor(m/2.8));for(let e=1;e<n;e++){let t=e/n,r=p.getPointAt(t),i=p.getTangentAt(t),a=e%2==0?1:-1,o=-i.z*a,c=i.x*a;s.push({mesh:pe[e%pe.length],x:r.x+o*.88,y:-.115,z:r.z+c*.88,rotY:e*1.9%(Math.PI*2)})}}else if(n.kind===`cobblestone`){a(-1,Lp(p,h,.88,.036-Math.min(28,e)*22e-5,`#c4baa6`,!0));let t=Math.max(3,Math.floor(m/.95));for(let e=0;e<=t;e++){let n=e/t,r=p.getPointAt(n),i=p.getTangentAt(n),a=(e%3-1)*.16,o=-i.z*a,s=i.x*a;c.push({mesh:me[e%me.length],x:r.x+o,y:-.115,z:r.z+s,rotY:Math.atan2(i.x,i.z)+(e*5%7-3)*.14})}}else if(n.kind===`boardwalk`){a(-1,Lp(p,h,.62,.032-Math.min(28,e)*22e-5,`#6b4b30`,!0));let t=Math.max(4,Math.floor(m/.78));for(let e=0;e<=t;e++){let n=e/t,r=p.getPointAt(n),i=p.getTangentAt(n);l.push({mesh:he[e%he.length],x:r.x,y:-.145,z:r.z,rotY:Math.atan2(i.x,i.z)})}}else if(n.kind===`volcanic_trail`){a(-1,Lp(p,h,.92,.038-Math.min(28,e)*22e-5,`#2b2d36`,!0));let t=Math.max(3,Math.floor(m/1.35));for(let e=0;e<=t;e++){let n=e/t,r=p.getPointAt(n),i=p.getTangentAt(n);c.push({mesh:ge[e%ge.length],x:r.x,y:-.135,z:r.z,rotY:Math.atan2(i.x,i.z)+(e%3-1)*.15})}}else{let e=Math.max(2,Math.floor(m/1.22));for(let t=0;t<=e;t++){let n=e===0?.5:t/e,r=p.getPointAt(n),i=p.getTangentAt(n),a=(t%2==0?1:-1)*.1,o=-i.z*a,c=i.x*a;s.push({mesh:fe[t%fe.length],x:r.x+o,y:-.155,z:r.z+c,rotY:Math.atan2(i.x,i.z)+(t%3-1)*.08,scaleX:1+t%2*.1,scaleY:1,scaleZ:.92+(t+1)%2*.1})}}}for(let[e,t]of i.entries()){let n=Rp(t,e,!0);n&&ve.add(n)}let p=o.length>>2;if(p>0){let e=new wi(Vt,Ht,p);for(let t=0;t<p;t++){let n=t*4;Wt.set(o[n],o[n+1],o[n+2]),Kt.setFromAxisAngle(Jt,o[n+3]),Ut.compose(Wt,Kt,qt),e.setMatrixAt(t,Ut)}e.instanceMatrix.needsUpdate=!0,e.frustumCulled=!1,e.matrixAutoUpdate=!1,e.updateMatrix(),e.userData.sharedGeo=!0,e.userData.sharedMaterial=!0,ve.add(e)}let m=Mu(s,{depthLayer:1,castShadow:!1,receiveShadow:!0});m&&ve.add(m);let h=Mu(c,{depthLayer:2,castShadow:!1,receiveShadow:!0});h&&ve.add(h);let g=Mu(l,{depthLayer:2,castShadow:!0,receiveShadow:!0});g&&ve.add(g),Ju(n,ye)}function Zt(){if(!Ie)return;let e=(Ie.creations||[]).filter(e=>!e.isSeed&&e.behavior?.type===`landmark`),t=Math.max(.5,window.innerWidth/Math.max(1,window.innerHeight)),n=t<.75?.16:t<1.15?.26:.38,r=0,i=-3;if(e.length>0){let t=e[e.length-1];r=Math.max(-18,Math.min(18,t.x*n)),i=Math.max(-18,Math.min(18,t.z*n-2))}let a=t<.75?.64:t<1.15?.82:.94;K.active=!1,q.tx=q.goalTx=r,q.ty=q.goalTy=0,q.tz=q.goalTz=i,q.zoom=q.goalZoom=a,q.az=q.goalAz=.64,q.el=q.goalEl=.64,Le=null;for(let e of Pe.values())e.spawnScale=1}function Qt(e){Ne=e||{};for(let[e,t]of Pe.entries())t.setLiveFeedReading(Ne[e]||null,y)}let $t=0,en=!1,tn=new Map;function nn(e){let{c:n,idx:i}=e;if(Pe.has(n.id))return Pe.get(n.id);let a=new Wp(n,i,t.onInteractiveEvent||null,be);return r&&(a.spawnScale=1),a.setLiveFeedReading(Ne[n.id]||null,y),Pe.set(n.id,a),be.add(a.group),ht(),a}function rn(e){if(!e||Pe.has(e))return Pe.get(e)||null;let t=tn.get(e);if(!t)return null;tn.delete(e);let n=nn(t);return n.data.behavior?.type===`vehicle_route`&&Gp(Pe),n}let an=()=>typeof requestAnimationFrame==`function`&&typeof document<`u`&&document.visibilityState===`visible`?new Promise(e=>requestAnimationFrame(()=>e())):new Promise(e=>setTimeout(e,0));async function on(e){for(en=!0;e===$t&&tn.size>0&&(await an(),e===$t&&tn.size!==0);){let e=performance.now(),t=!1;for(let[n,r]of tn)if(tn.delete(n),nn(r).data.behavior?.type===`vehicle_route`&&(t=!0),performance.now()-e>=6.5)break;t&&Gp(Pe)}if(e===$t&&(en=!1,Gp(Pe),ht(),!r&&!De&&!Y.active&&!K.firedWalk)){let[e,t]=Tn(Y.x,Y.z);Y.x=e,Y.z=t,Y.feetY=_p(e,t),Y.y=Y.feetY+Ot,K.walkX=e,K.walkZ=t;let n=Math.atan2(-(2.4-e),-(-18.5-t));K.walkYaw=n,Y.yaw=Y.goalYaw=n}}function sn(e){let n=++$t;tn.clear(),en=!1,Ie=e;let i=typeof e.contributionCount==`number`?e.contributionCount:(e.creations||[]).filter(e=>!e.isSeed&&!e.isCompanion).length;ie.setTargetCount(i,r||Je),Ft(e.terrainZones||[]),zt(e),Xt(e);let a=new Set,o=[];e.creations.forEach((e,n)=>{a.add(e.id);let r=Pe.get(e.id);r?(r.onInteractiveEvent=t.onInteractiveEvent||null,r.rebuildBehavior(e,be),r.setLiveFeedReading(Ne[e.id]||null,y)):o.push({c:e,idx:n})});for(let[e,t]of Pe.entries())a.has(e)||(be.remove(t.group),t.dispose(be),Pe.delete(e));if(r||o.length<=8)for(let e of o)nn(e);else{let t=Y.active?Y.x:q.tx,r=Y.active?Y.z:q.tz;o.sort((n,i)=>{let a=n.c.id===e.myCreationId||n.c.id===Le?0:1,o=i.c.id===e.myCreationId||i.c.id===Le?0:1;if(a!==o)return a-o;let s=n.c.behavior?.type===`vehicle_route`?0:1,c=i.c.behavior?.type===`vehicle_route`?0:1;return s===c?(n.c.x-t)**2+(n.c.z-r)**2-((i.c.x-t)**2+(i.c.z-r)**2):s-c});let i=performance.now(),a=0;for(;a<o.length;){let t=o[a];if(!(a<4||t.c.id===e.myCreationId||t.c.id===Le||t.c.behavior?.type===`vehicle_route`)&&performance.now()-i>=6.5)break;nn(t),a++}if(a<o.length){for(let e=a;e<o.length;e++)tn.set(o[e].c.id,o[e]);on(n)}}Gp(Pe);let s=new Set;e.villagers.forEach((e,t)=>{s.add(e.id);let n=Fe.get(e.id);if(n)n.updateFromServer(e);else{let n=new Hu(e,t);Fe.set(e.id,n),xe.add(n.group)}});for(let[e,t]of Fe.entries())s.has(e)||(xe.remove(t.group),t.dispose(),Fe.delete(e));if(ht(),H?.isInside?.()){let e=H.getCurrentRoomId();e&&!a.has(e)&&Vn()}if(H?.isRiding?.()){let e=H.getRidingState(),t=e?.rideId?String(e.rideId).replace(/#(?:sec|tram)$/,``):``;t&&!a.has(t)&&Un()}if(!r&&!De&&!Y.active){let[e,t]=Tn(Y.x,Y.z);Y.x=e,Y.z=t,Y.feetY=_p(e,t),Y.y=Y.feetY+Ot,K.walkX=e,K.walkZ=t;let n=Math.atan2(-(2.4-e),-(-18.5-t));K.walkYaw=n,Y.yaw=Y.goalYaw=n}r?(Zt(),Re=0):e.myCreationId&&!Le&&(Le=e.myCreationId)}function cn(t){let n=t?.mode||`hidden`;n!==`hidden`&&nt(`pan`);let r=typeof t?.x==`number`?t.x:je.x,i=typeof t?.z==`number`?t.z:je.z;if(n===`picking`&&typeof t?.x!=`number`){let e=at(q.goalTx+14,q.goalTz+8,Me);r=e[0],i=e[1]}je={mode:n,x:r,z:i},n===`hidden`?(G.group.visible=!1,G.scaffoldGroup.visible=!1,e.style.cursor=`grab`):n===`picking`?(G.group.visible=!0,G.scaffoldGroup.visible=!1,G.ringMat.color.setHex(16777215),G.group.position.set(r,0,i),e.style.cursor=`crosshair`):n===`staked`?(G.group.visible=!0,G.scaffoldGroup.visible=!1,G.ringMat.color.setHex(16770431),G.group.position.set(r,0,i),e.style.cursor=`grab`):n===`building`&&(G.group.visible=!0,G.scaffoldGroup.visible=!0,G.ringMat.color.setHex(16770431),G.group.position.set(r,0,i),e.style.cursor=`grab`)}let ln=`pan`,un=new Set,dn={right:0,fwd:0},fn=null,pn=!1,mn=null;function hn(){if(Y.active&&!r&&!(typeof document<`u`&&document.querySelector(`dialog[open]`))&&!(typeof window<`u`&&window.matchMedia?.(`(pointer: coarse)`)?.matches)&&document.pointerLockElement!==e)try{let t=e.requestPointerLock?.({unadjustedMovement:!0});t&&typeof t.catch==`function`&&t.catch(()=>{try{let t=e.requestPointerLock?.();t&&typeof t.catch==`function`&&t.catch(()=>{})}catch{}})}catch{try{let t=e.requestPointerLock?.();t&&typeof t.catch==`function`&&t.catch(()=>{})}catch{}}}function gn(){if(document.pointerLockElement===e){pn=!0;try{document.exitPointerLock()}catch{pn=!1}setTimeout(()=>{pn=!1},120)}}function _n(e,t){let n=Number.isFinite(e)?e:0,r=Number.isFinite(t)?t:0,i=Math.hypot(n,r);i>1?(dn.right=n/i,dn.fwd=r/i):(dn.right=n,dn.fwd=r)}function vn(){return Y.active||je.mode===`picking`||je.mode===`staked`?`crosshair`:`grab`}function yn(e){if(!e?.data)return!1;if(e.id===`c-mvne3zub-216636`)return!0;let t=e.data.name||``;return/\b(half\s*pipe|half-pipe|skate\s*ramp|skatepark\s*halfpipe)\b/i.test(t)}function xn(e){if(e._halfpipeSpec)return e._halfpipeSpec;let t=uu(e.data?.scaleClass||e.data?.blueprint?.scaleClass||`medium`),n=e.data?.blueprint?.stats||{},r=Math.max(6,(Number(n.footprintX)||28)*.5),i=Math.max(6,(Number(n.footprintZ)||20)*.5),a=(e.data?.blueprint?.ops||[]).find(e=>e.op===`cylinder`&&e.carve),o=a?.axis===`x`?`x`:`z`,s=o===`z`?i:r,c=o===`z`?r:i,l={voxSize:t,troughAxis:o,halfAlongVox:s,halfAcrossVox:c,deckVoxY:Number(a?.cy)>2?Number(a.cy):9,pipeRadiusVox:Number(a?.radius)>2?Number(a.radius):Math.max(4.5,c-5),floorVoxY:1};return e._halfpipeSpec=l,l}function Sn(e,t,n,r){let i=xn(e),a=e.yaw||0,o=Math.cos(a),s=Math.sin(a),c=t-e.x,l=n-e.z,u=c*o-l*s,d=c*s+l*o,f=u/i.voxSize,p=d/i.voxSize,m=i.troughAxis===`z`?p:f,h=i.troughAxis===`z`?f:p,g=.28/i.voxSize,_=i.halfAlongVox+g,v=i.halfAcrossVox+g;if(Math.abs(m)>=_||Math.abs(h)>=v)return[t,n];let y=Math.max(2.5,i.pipeRadiusVox-.65);if(Math.abs(h)<=y||Math.abs(m)<=i.halfAlongVox-.55&&Math.abs(h)<=i.pipeRadiusVox+.15)return[t,n];let b=(e.y||0)+i.deckVoxY*i.voxSize;if((r??0)>=b-.65){if((r??0)<b+.55){let e=Math.max(i.pipeRadiusVox,i.halfAcrossVox-1.35),t=Math.max(1,i.halfAlongVox-1.25);h=Math.max(-e,Math.min(e,h)),Math.abs(h)>y&&(m=Math.max(-t,Math.min(t,m)))}}else{let e=v-Math.abs(h),t=_-Math.abs(m),n=Math.abs(h)-y;n<=e&&n<=t?h=(h>=0?1:-1)*y:e<=t?h=(h>=0?1:-1)*v:m=(m>=0?1:-1)*_}let x=i.troughAxis===`z`?h:m,S=i.troughAxis===`z`?m:h,C=x*i.voxSize,w=S*i.voxSize;return[e.x+C*o+w*s,e.z-C*s+w*o]}function Cn(e,t,n){let r=_p(e,t);for(let i of Pe.values()){if(!yn(i))continue;let a=xn(i),o=i.yaw||0,s=Math.cos(o),c=Math.sin(o),l=e-i.x,u=t-i.z,d=l*s-u*c,f=l*c+u*s,p=d/a.voxSize,m=f/a.voxSize,h=a.troughAxis===`z`?m:p,g=a.troughAxis===`z`?p:m;if(Math.abs(h)>a.halfAlongVox+.4||Math.abs(g)>a.halfAcrossVox+.2)continue;let _=Math.max(0,Math.min(1,(a.halfAlongVox+.4-Math.abs(h))/.8)),v=_*_*(3-2*_);if(Math.abs(g)<=a.pipeRadiusVox+.15){let e=a.pipeRadiusVox,t=Math.min(e,Math.abs(g)),n=Math.max(a.floorVoxY,a.deckVoxY-Math.sqrt(Math.max(0,e*e-t*t))),o=Math.max(r,(i.y||0)+n*a.voxSize),s=r+(o-r)*v;s>r&&(r=s)}else{let e=(i.y||0)+a.deckVoxY*a.voxSize;(n??r)>=e-.75&&e>r&&(r=e)}}return r}function wn(e,t,n=0){if(hp(e,t)<-5+n||Math.hypot(e-cp[0],t-cp[1])<1.85+n)return!1;for(let r of Ie?.props||[])if(r.kind===`pond`){if(Math.hypot(e-r.x,t-r.z)<(r.radius||6.6)+.25+n)return!1}else if((r.kind===`bus_stop`||r.kind===`bench`||r.kind===`lamp_post`)&&Math.hypot(e-r.x,t-r.z)<.48+n)return!1;let r=_p(e,t);for(let i of Pe.values())if(!i.interactive?.allowWalkOver){if(yn(i)){let[n,a]=Sn(i,e,t,r);if(Math.hypot(n-e,a-t)>.02)return!1}else if(i.data.category===`building`||i.data.behavior?.type===`landmark`){let r=Gf(i,.8);if(Qf(e,t,.34+n,i.x,i.z,i.yaw||0,r.halfX,r.halfZ))return!1}}return!0}function Tn(e,t,n=Y.feetY){let r=e,i=t,a=(e,t,n)=>{let a=r-e,o=i-t,s=Math.hypot(a,o);s<n&&(s>1e-4?(r=e+a/s*n,i=t+o/s*n):r=e+n)};for(let e=0;e<2;e++){a(cp[0],cp[1],1.85);for(let e of Ie?.props||[])e.kind===`pond`?a(e.x,e.z,(e.radius||6.6)+.25):(e.kind===`bus_stop`||e.kind===`bench`||e.kind===`lamp_post`)&&a(e.x,e.z,.48);for(let e of Pe.values())if(!e.interactive?.allowWalkOver){if(yn(e))[r,i]=Sn(e,r,i,n);else if(e.data.category===`building`||e.data.behavior?.type===`landmark`){let t=Gf(e,.8),n=Qf(r,i,.34,e.x,e.z,e.yaw||0,t.halfX,t.halfZ);n&&(r=n[0],i=n[1])}else if(e.data.behavior?.type===`vehicle_route`){let t=Qf(r,i,.38,e.x,e.z,e.yaw||0,e.phys?.hw||.92,e.phys?.hl||2.1);if(t&&(r=t[0],i=t[1]),e.secondaryVehicle){let t=e.secondaryVehicle,n=Qf(r,i,.38,t.x,t.z,t.yaw||0,t.phys?.hw||.84,t.phys?.hl||2.32);n&&(r=n[0],i=n[1])}}}for(let e of ue)(e.isTree||e.isCoastalRock)&&!e.blocked&&a(e.x,e.z,e.isCoastalRock?.85:.52);[r,i]=gp(r,i,-5)}return[r,i]}{let[e,t]=Tn(Y.x,Y.z,0);Y.x=e,Y.z=t,Y.walkSurfaceY=Cn(e,t,0),Y.feetY=Y.walkSurfaceY,Y.y=Y.feetY+Ot,K.walkX=e,K.walkZ=t;let n=Math.atan2(-(2.4-e),-(-18.5-t));K.walkYaw=n,Y.yaw=Y.goalYaw=n}H=Bf({scene:i,getCreationEntities:()=>Pe,getWorld:()=>Ie,resolveExteriorWalkPosition:Tn});function En(e){return Se=td(e),Ce.setAppearance(Se),{...Se}}function Dn(){return{...Se}}function On(){return we=1.85,t.onLocalEmote?.(`wave`),!0}function An(){let e=H.getCurrentRoomId(),t=H.getRidingState(),n=H.isSitting()?H.getSeatPose():null,r=Y.active?`walk`:`aerial`;if(e){let t=n?n.x:Y.localX,r=n?n.y:Y.localY,i=n?n.z:Y.localZ,a=n?`sit`:Y.jumpY>.03?`jump`:Y.horizSpeed>5.8?`run`:Y.horizSpeed>.35?`walk`:we>0?`wave`:`idle`;return{mode:`walk`,x:t,y:r,z:i,yaw:Y.yaw,pitch:Y.pitch,vx:n?0:Y.vx,vz:n?0:Y.vz,anim:a,ride:null,seat:0,room:e}}if(Y.active&&t)return{mode:`walk`,x:Y.x,y:Y.feetY,z:Y.z,yaw:Y.yaw,pitch:Y.pitch,vx:0,vz:0,anim:`ride`,ride:t.rideId,seat:t.seat,room:null};if(Y.active&&n){let e=_p(n.x,n.z);return{mode:`walk`,x:n.x,y:e+n.y,z:n.z,yaw:Y.yaw,pitch:Y.pitch,vx:0,vz:0,anim:`sit`,ride:null,seat:0,room:null}}if(Y.active){let e=Y.jumpY>.03?`jump`:Y.horizSpeed>6.4?`run`:Y.horizSpeed>.35?`walk`:we>0?`wave`:`idle`;return{mode:`walk`,x:Y.x,y:Y.feetY,z:Y.z,yaw:Y.yaw,pitch:Y.pitch,vx:Y.vx,vz:Y.vz,anim:e,ride:null,seat:0,room:null}}return{mode:r,x:Y.x,y:Cn(Y.x,Y.z,Y.feetY),z:Y.z,yaw:Y.yaw,pitch:0,vx:0,vz:0,anim:we>0?`wave`:`idle`,ride:null,seat:0,room:null}}function jn(e){let t=Array.isArray(e)?e:Array.isArray(e?.players)?e.players:[];Te.clear();for(let e of t)Te.upsertPeer(e)}function Mn(e){return Te.upsertPeer(e)}function Nn(e){Te.updatePeerPose(e)}function Pn(e,t,n){Te.updatePeerProfile(e,t,n)}function Fn(e,t){Te.triggerPeerEmote(e,t)}function In(e){Te.removePeer(e)}function Ln(){return Te.getPeerCount()}function Rn(){if(r)return U=null,Ee!==``&&(Ee=``,t.onInteractionPromptChange?.(null)),null;let e=H.isInside(),n=H.findBestInteractionTarget({fpActive:Y.active,localX:Y.localX,localY:Y.active&&e?Y.y-cf.y:Ot,localZ:Y.localZ,worldX:Y.x,worldY:Y.y,worldZ:Y.z,yaw:Y.yaw,pitch:Y.pitch});U=n||null;let i=n?{kind:n.kind,id:n.id,label:n.label,keyHint:n.keyHint||`E`}:null,a=i?`${i.kind}|${i.id}|${i.label}|${i.keyHint}`:``;return a!==Ee&&(Ee=a,t.onInteractionPromptChange?.(i)),i}function zn(){return U?{kind:U.kind,id:U.id,label:U.label,keyHint:U.keyHint||`E`}:null}function Bn(n){if(!n)return!1;let r=rn(n);if(r?.data&&!Af(r.data))return!1;if(nt(`walk`),H.isRiding())Un();else if(H.isSitting()&&!H.isInside()){let e=H.standUp();e?.ok&&e.pose&&!e.pose.isInterior&&(Y.x=e.pose.x,Y.z=e.pose.z)}let i=H.enterBuilding(n,{x:Y.x,z:Y.z,yaw:Y.yaw,pitch:Y.pitch});return!i?.ok||!i.spawnLocal?!1:(Et(),t.onHoverCreation?.(null,0,0,null),tr=null,nr.clear(),fn=null,Y.active=!0,De=!0,ln=`walk`,Y.settleT=1,Y.localX=i.spawnLocal.x,Y.localY=i.spawnLocal.y||0,Y.localZ=i.spawnLocal.z,Y.yaw=Y.goalYaw=i.spawnLocal.yaw,Y.pitch=Y.goalPitch=i.spawnLocal.pitch,Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.horizSpeed=0,Y.sprinting=!1,Y.y=cf.y+Y.localY+Ot,Ce.setFirstPersonMode(!0),V.visible=!0,V.position.set(cf.x,cf.y-12,cf.z),R.intensity=.28,ee.intensity=.68,D.position.set(cf.x+Y.localX,Y.y,cf.z+Y.localZ),D.rotation.set(Y.pitch,Y.yaw,0),D.updateMatrixWorld(),F(D),e.style.cursor=vn(),mn=null,t.onDragModeChange?.(`walk`),t.onInteriorChange?.({roomId:i.roomId,name:i.creation?.name||``}),Rn(),hn(),!0)}function Vn(){if(!H.isInside())return!1;let e=H.exitBuilding();if(!e?.ok||!e.exteriorPose)return!1;Et(),Y.x=e.exteriorPose.x,Y.z=e.exteriorPose.z,Y.yaw=Y.goalYaw=e.exteriorPose.yaw,Y.pitch=Y.goalPitch=e.exteriorPose.pitch,Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.horizSpeed=0,Y.sprinting=!1,Y.settleT=1;let n=_p(Y.x,Y.z);return Y.feetY=n,Y.y=n+Ot,R.intensity=2.25,ee.intensity=1.12,Y.active&&(V.visible=!0,V.position.set(Y.x,0,Y.z),D.position.set(Y.x,Y.y,Y.z),D.rotation.set(Y.pitch,Y.yaw,0),D.updateMatrixWorld()),t.onInteriorChange?.(null),Rn(),!0}function Hn(n,r=0){if(!n)return!1;rn(String(n).replace(/#(?:sec|tram)$/,``)),nt(`walk`);let i=H.isInside(),a=H.boardVehicle(n,r);return!a?.ok||!a.pose?!1:(i&&t.onInteriorChange?.(null),Et(),t.onHoverCreation?.(null,0,0,null),tr=null,nr.clear(),fn=null,Y.active=!0,De=!0,ln=`walk`,Y.settleT=1,Y.x=a.pose.x,Y.z=a.pose.z,Y.feetY=a.pose.y,Y.y=a.pose.eyeY,Y.yaw=Y.goalYaw=a.pose.yaw,Y.pitch=Y.goalPitch=-.03,Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.horizSpeed=0,Y.sprinting=!1,Ce.setFirstPersonMode(!0),R.intensity=2.25,ee.intensity=1.12,V.visible=!0,V.position.set(Y.x,0,Y.z),D.position.set(a.pose.eyeX,a.pose.eyeY,a.pose.eyeZ),D.rotation.set(Y.pitch,Y.yaw,0),D.updateMatrixWorld(),F(D),e.style.cursor=vn(),mn=null,t.onDragModeChange?.(`walk`),Rn(),hn(),!0)}function Un(){if(!H.isRiding())return!1;let e=H.hopOffVehicle();if(!e?.ok||!e.exteriorPose)return!1;Y.x=e.exteriorPose.x,Y.z=e.exteriorPose.z,Y.yaw=Y.goalYaw=e.exteriorPose.yaw,Y.pitch=Y.goalPitch=e.exteriorPose.pitch,Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.horizSpeed=0,Y.sprinting=!1,Y.settleT=1;let t=_p(Y.x,Y.z);return Y.feetY=t,Y.y=t+Ot,Y.active&&(D.position.set(Y.x,Y.y,Y.z),D.rotation.set(Y.pitch,Y.yaw,0),D.updateMatrixWorld()),Rn(),!0}function Wn(){U||Rn();let e=U;if(!e)return!1;if(e.kind===`enter_building`)return Bn(e.id);if(e.kind===`exit_building`)return Vn();if(e.kind===`board_vehicle`)return Hn(e.id);if(e.kind===`hop_off`)return Un();if(e.kind===`sit`){let t=e.execute?.();if(t?.ok&&t.pose){if(t.pose.isInterior)Y.localX=t.pose.x,Y.localY=t.pose.y,Y.localZ=t.pose.z,Y.y=t.pose.worldEyeY;else{Y.x=t.pose.x,Y.z=t.pose.z;let e=_p(t.pose.x,t.pose.z);Y.feetY=e+t.pose.y,Y.y=e+t.pose.eyeY}Y.yaw=Y.goalYaw=t.pose.yaw,Y.pitch=Y.goalPitch=-.04,Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.horizSpeed=0}return Rn(),!!t?.ok}if(e.kind===`stand_up`){let e=H.standUp();if(e?.ok&&e.pose){if(e.pose.isInterior)Y.localX=e.pose.x,Y.localY=0,Y.localZ=e.pose.z,Y.y=cf.y+Ot;else{Y.x=e.pose.x,Y.z=e.pose.z;let t=Cn(e.pose.x,e.pose.z,Y.feetY);Y.walkSurfaceY=t,Y.feetY=t,Y.y=t+Ot}Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.horizSpeed=0}return Rn(),!!e?.ok}if(e.kind===`interactive_creation`){let n=e.execute?.();return n?.creation&&(Le=n.creation.id,n.message&&t.onInteractiveEvent?.(n.creation,n.message)),Rn(),!!n?.ok}let n=e.execute?.();return Rn(),!!(n?.ok??!0)}function Gn(e,t,n=q.az,r=null,i=null){let a=e,o=t,s=r||9.5,c=-.02;if(r)typeof i==`number`&&(c=Math.min(.22,Math.max(.01,(i*.42-Ot)/s)));else for(let n of Pe.values())if(n.data.category===`building`||n.data.behavior?.type===`landmark`){let r=n.footprintRadius||3.4;if(Math.hypot(e-n.x,t-n.z)<r+4.2){a=n.x,o=n.z,s=Math.max(8.5,r+5.4),c=Math.min(.2,Math.max(.01,((n.topY||5)*.42-Ot)/s));break}}let l=[0,.3,-.3,.62,-.62,.96,-.96,1.35,-1.35,1.85,-1.85,Math.PI],u=[s,s+3.6,s+7.2],d=null;outer:for(let e of u)for(let t of l){let r=n+t,i=a+Math.sin(r)*e,s=o+Math.cos(r)*e;if(wn(i,s,.35)){d=[i,s];break outer}}d||=Tn(a+Math.sin(n)*s,o+Math.cos(n)*s),Y.x=d[0],Y.z=d[1];let f=a-Y.x,p=o-Y.z,m=Math.hypot(f,p)>.2?Math.atan2(-f,-p):n;Y.yaw=Y.goalYaw=m,Y.pitch=Y.goalPitch=c,Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.settleT=+!!Je;let h=Cn(Y.x,Y.z,0);Y.walkSurfaceY=h,Y.feetY=h,Y.y=h+(Je?Ot:2.8)}function Kn(){if(!Y.active){if(nt(),tr=null,nr.clear(),rr=null,ir=!1,dn.right=0,dn.fwd=0,fn=null,(!De&&Math.hypot(q.goalTx-0,q.goalTz- -2)<2.5||Oe&&Math.hypot(q.goalTx-Oe.x,q.goalTz-Oe.z)<2.5)&&wn(Y.x,Y.z,.1)){let[e,t]=Tn(Y.x,Y.z,Y.feetY);Y.x=e,Y.z=t,Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.pitch=Y.goalPitch=-.02,Y.settleT=+!!Je;let n=Cn(Y.x,Y.z,Y.feetY);Y.walkSurfaceY=n,Y.feetY=n,Y.y=n+(Je?Ot:2.8)}else Gn(q.tx,q.tz,q.az);De=!0,Y.active=!0,Ce.setFirstPersonMode(!0),R.intensity=2.25,ee.intensity=1.12,V.visible=!0,V.position.set(Y.x,0,Y.z),D.position.set(Y.x,Y.y,Y.z),D.rotation.set(Y.pitch,Y.yaw,0),D.updateMatrixWorld(),F(D),e.style.cursor=vn(),mn=null,Et(),t.onHoverCreation?.(null,0,0,null),Rn(),hn()}}function qn(t=!1){if(H.isInside()&&Vn(),H.isRiding()&&Un(),H.isSitting()){let e=H.standUp();e?.ok&&e.pose&&!e.pose.isInterior&&(Y.x=e.pose.x,Y.z=e.pose.z)}if(Y.active){if(Y.active=!1,Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.horizSpeed=0,Y.sprinting=!1,dn.right=0,dn.fwd=0,fn=null,mn=null,tr=null,nr.clear(),un.clear(),gn(),Ce.setFirstPersonMode(!1),R.intensity=2.25,ee.intensity=1.12,V.visible=!1,F(E),t)Oe={x:0,z:-2};else{let e=Math.max(-185,Math.min(185,Y.x-Math.sin(Y.yaw)*6.5)),t=Math.max(-185,Math.min(185,Y.z-Math.cos(Y.yaw)*6.5));Oe={x:e,z:t},q.tx=q.goalTx=e,q.tz=q.goalTz=t,q.az=q.goalAz=Y.yaw,q.el=Je?Be:.24,q.goalEl=Be,q.ty=qe(q.el),q.goalTy=0,q.zoom=Je?Ue():1.52,q.goalZoom=Ue()}e.style.cursor=vn(),Rn()}}function Jn(n){let r=n===`walk`?`walk`:n===`orbit`?`orbit`:`pan`;nt(r),r===`walk`?(ln=`walk`,Kn()):(Y.active&&qn(!1),ln=r,!tr&&nr.size===0&&(e.style.cursor=vn())),t.onDragModeChange?.(ln)}function Yn(){return ln}function Xn(t,n){let r=e.clientHeight||window.innerHeight,i=68/(q.zoom*r),a=t*i,o=n*i/Math.max(.28,Math.sin(q.el)),s=Math.cos(q.az),c=Math.sin(q.az);q.goalTx+=a*s+o*c,q.goalTz+=-a*c+o*s,rt()}function Zn(e,t,n){let r=Math.min(3.4,Math.max(.22,q.goalZoom*e)),i=Mt(t,n);if(i&&Math.hypot(i[0]-q.goalTx,i[1]-q.goalTz)<135){let e=1-q.goalZoom/r;q.goalTx+=(i[0]-q.goalTx)*e,q.goalTz+=(i[1]-q.goalTz)*e,rt()}q.goalZoom=r}function Qn(e,t){q.goalAz-=e*.0068,q.goalEl=Math.max(Ve,Math.min(He,q.goalEl+t*.0054)),q.goalTy=qe(q.goalEl)}function $n(){if(nt(),H.isInside()&&Vn(),H.isRiding()&&Un(),H.isSitting()){let e=H.standUp();e?.ok&&e.pose&&!e.pose.isInterior&&(Y.x=e.pose.x,Y.z=e.pose.z)}Y.active&&qn(!0),q.az=ze+Ke(q.az-ze),q.goalTx=0,q.goalTy=0,q.goalTz=-2,q.goalZoom=Ue(),q.goalAz=ze,q.goalEl=Be}let er=0;e.addEventListener(`wheel`,t=>{if(t.preventDefault(),nt(),Y.active){if(t.ctrlKey||t.metaKey){let n=(e.clientWidth||1280)/Math.max(1,e.clientHeight||800)<.8?72:62;D.fov=Math.max(42,Math.min(82,D.fov*Math.exp(t.deltaY*.0035))),D.updateProjectionMatrix(),F(D),Math.abs(D.fov-n)<.4&&(D.fov=n);return}let n=performance.now();if((t.deltaMode!==0||t.deltaX===0&&Math.abs(t.wheelDeltaY)>=120&&t.wheelDeltaY%120==0)&&n-er>400){if(H.isRiding())return;if(H.isSitting()){let e=H.standUp();e?.ok&&e.pose&&(e.pose.isInterior?(Y.localX=e.pose.x,Y.localZ=e.pose.z):(Y.x=e.pose.x,Y.z=e.pose.z))}let e=-Math.sign(t.deltaY)*2.2;if(H.isInside()){let[t,n]=H.resolveInteriorWalkPosition(Y.localX-Math.sin(Y.yaw)*e,Y.localZ-Math.cos(Y.yaw)*e);Y.localX=t,Y.localZ=n;return}let[n,r]=Tn(Y.x-Math.sin(Y.yaw)*e,Y.z-Math.cos(Y.yaw)*e);Y.x=n,Y.z=r;return}er=n,Y.goalYaw-=t.deltaX*.0038,Y.goalPitch=Math.max(kt,Math.min(At,Y.goalPitch-t.deltaY*.0032));return}if(t.ctrlKey||t.metaKey){Zn(Math.exp(-t.deltaY*.0085),t.clientX,t.clientY);return}if(t.shiftKey){Qn(t.deltaX,t.deltaY);return}let n=performance.now();(t.deltaMode!==0||t.deltaX===0&&Math.abs(t.wheelDeltaY)>=120&&t.wheelDeltaY%120==0)&&n-er>400?Zn(Math.exp(-Math.sign(t.deltaY)*.16),t.clientX,t.clientY):(er=n,Xn(t.deltaX,t.deltaY))},{passive:!1}),document.addEventListener(`pointerlockchange`,()=>{document.pointerLockElement===e?(mn=null,Et(),t.onHoverCreation?.(null,0,0,null)):(mn=null,pn?pn=!1:Y.active&&!document.querySelector(`dialog[open]`)&&document.visibilityState===`visible`&&document.hasFocus()&&Jn(`pan`))}),e.addEventListener(`pointerenter`,()=>{mn=null}),e.addEventListener(`pointerleave`,()=>{mn=null}),document.addEventListener(`mousemove`,t=>{Y.active&&document.pointerLockElement===e&&(Y.goalYaw-=(t.movementX||0)*.0026,Y.goalPitch=Math.max(kt,Math.min(At,Y.goalPitch-(t.movementY||0)*.0024)))});let tr=null,nr=new Map,rr=null,ir=!1;function ar(){let e=nr.values(),t=e.next().value,n=e.next().value;return!t||!n?null:{p1:t,p2:n,midX:(t.x+n.x)*.5,midY:(t.y+n.y)*.5,dist:Math.hypot(n.x-t.x,n.y-t.y),angle:Math.atan2(n.y-t.y,n.x-t.x)}}e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,n=>{nt();try{e.setPointerCapture(n.pointerId)}catch{}if(Y.active){if(n.pointerType===`touch`){fn||={id:n.pointerId,startX:n.clientX,startY:n.clientY,lastX:n.clientX,lastY:n.clientY,moved:!1},t.onHoverCreation?.(null,n.clientX,n.clientY,null);return}n.button===0&&document.pointerLockElement!==e&&hn(),tr={id:n.pointerId,kind:`fp_look`,button:n.button,startX:n.clientX,startY:n.clientY,lastX:n.clientX,lastY:n.clientY,moved:!1};return}if(nr.set(n.pointerId,{x:n.clientX,y:n.clientY,vx:0,vy:0}),nr.size>=2){ir=!0,tr=null,rr=ar(),t.onHoverCreation?.(null,n.clientX,n.clientY,null);return}ir=!1,rr=null;let r=ln===`orbit`||n.button===2||n.button===1||n.altKey;tr={id:n.pointerId,kind:r?`orbit`:`pan`,button:n.button,startX:n.clientX,startY:n.clientY,lastX:n.clientX,lastY:n.clientY,moved:!1}}),e.addEventListener(`pointermove`,n=>{if(Y.active){if(fn&&fn.id===n.pointerId){let e=n.clientX-fn.lastX,t=n.clientY-fn.lastY;fn.lastX=n.clientX,fn.lastY=n.clientY,Math.hypot(n.clientX-fn.startX,n.clientY-fn.startY)>4&&(fn.moved=!0),fn.moved&&(Y.goalYaw-=e*.0092,Y.goalPitch=Math.max(kt,Math.min(At,Y.goalPitch-t*.0072)));return}if(document.pointerLockElement===e){tr&&tr.kind===`fp_look`&&tr.id===n.pointerId&&Math.hypot(n.movementX||0,n.movementY||0)>4&&(tr.moved=!0);return}if(n.pointerType!==`touch`&&!document.querySelector(`dialog[open]`)){let r=performance.now();if(mn&&r-mn.t<240){let e=Math.max(-90,Math.min(90,n.clientX-mn.x)),r=Math.max(-90,Math.min(90,n.clientY-mn.y));(e!==0||r!==0)&&(tr&&tr.kind===`fp_look`&&tr.id===n.pointerId&&Math.hypot(n.clientX-tr.startX,n.clientY-tr.startY)>4&&(tr.moved=!0),t.onHoverCreation?.(null,n.clientX,n.clientY,null),Y.goalYaw-=e*.0034,Y.goalPitch=Math.max(kt,Math.min(At,Y.goalPitch-r*.0028)))}mn={x:n.clientX,y:n.clientY,t:r},e.style.cursor=vn()}return}if(nr.has(n.pointerId)){let e=nr.get(n.pointerId),t=n.clientX-e.x,r=n.clientY-e.y;for(let[e,i]of nr.entries())e===n.pointerId?(i.x=n.clientX,i.y=n.clientY,i.vx=i.vx*.35+t*.65,i.vy=i.vy*.35+r*.65):(i.vx*=.88,i.vy*=.88)}if(nr.size>=2){Ct=null;let e=ar();if(e&&rr){let t=e.midX-rr.midX,n=e.midY-rr.midY,{p1:r,p2:i}=e;if(r.vy*i.vy>.25&&Math.abs(r.vy+i.vy)>Math.abs(r.vx+i.vx)*1.25&&Math.abs(r.vy-i.vy)<Math.abs(r.vy+i.vy)*.65)q.goalEl=Math.max(Ve,Math.min(He,q.goalEl+n*.0085)),q.goalTy=qe(q.goalEl),Xn(-t*.4,0);else{if(rr.dist>14&&e.dist>14){let t=e.dist/rr.dist;Math.abs(t-1)>.002&&Zn(t,e.midX,e.midY)}if(rr.dist>24&&e.dist>24){let t=Ke(e.angle-rr.angle);q.goalAz+=t}Xn(-t,-n)}}rr=e;return}if(je.mode===`picking`&&!tr&&nr.size===0){let e=Mt(n.clientX,n.clientY);if(e){let t=at(e[0],e[1],Me);je.x=t[0],je.z=t[1],G.group.position.set(t[0],0,t[1])}}if(!tr){if(je.mode===`picking`){Et(),t.onHoverCreation?.(null,n.clientX,n.clientY,null),e.style.cursor=`crosshair`;return}Ct={x:n.clientX,y:n.clientY};return}if(tr.id!==n.pointerId)return;let r=n.clientX-tr.lastX,i=n.clientY-tr.lastY;tr.lastX=n.clientX,tr.lastY=n.clientY,Math.hypot(n.clientX-tr.startX,n.clientY-tr.startY)>4.5&&(tr.moved=!0,Et()),tr.moved&&(tr.kind===`orbit`?(Qn(r,i),e.style.cursor=`grabbing`):(Xn(-r,-i),e.style.cursor=`grabbing`))});function or(){if(!Ct)return;let{x:n,y:r}=Ct;if(Ct=null,tr?.moved||nr.size>=2||Y.active&&document.pointerLockElement===e)return;let i=Dt(n,r);if(i){yt&&yt!==i.ent&&yt.interactive?.setHovered?.(null),yt=i.ent,yt.interactive?.setHovered?.(i.action);let a=Ne[i.ent.id]||null;t.onHoverCreation?.(i.ent.data,n,r,a),e.style.cursor=`pointer`;return}yt&&=(yt.interactive?.setHovered?.(null),null);let a=Pt(n,r),o=a&&a.id!==`__city_sign__`&&Ne[a.id]||null;t.onHoverCreation?.(a?a.data:null,n,r,o),e.style.cursor=a?`pointer`:vn()}let sr=(e,n)=>{let r=Dt(e,n);if(r){Le=r.ent.id;let e=r.ent.interactive?.trigger?.(r.action);e?t.onInteractiveEvent?.(r.ent.data,e):t.onSelectCreation?.(r.ent.data,Ne[r.ent.id]||null);return}let i=Pt(e,n);i&&(i.id!==`__city_sign__`&&(Le=i.id),i.triggerEyeSpinFlourish?.(),i.interactive?.onInspectFocus?.(),t.onSelectCreation?.(i.data,Ne[i.id]||null))},cr=n=>{if(Y.active){if(fn&&fn.id===n.pointerId){let e=!fn.moved&&n.type===`pointerup`;fn=null,e&&sr(n.clientX,n.clientY);return}if(tr&&tr.id===n.pointerId){let t=!tr.moved&&tr.button===0&&n.type===`pointerup`;if(tr=null,e.style.cursor=vn(),t){let t=document.pointerLockElement===e,r=t?(e.clientWidth||window.innerWidth)*.5:n.clientX,i=t?(e.clientHeight||window.innerHeight)*.5:n.clientY;sr(r,i)}}return}if(nr.delete(n.pointerId),nr.size>=2){rr=ar();return}if(nr.size===1){rr=null;let[e,t]=nr.entries().next().value;tr={id:e,kind:ln===`orbit`?`orbit`:`pan`,button:0,startX:t.x,startY:t.y,lastX:t.x,lastY:t.y,moved:!0};return}rr=null;let r=ir;if(ir=!1,!tr||tr.id!==n.pointerId){tr=null,e.style.cursor=vn();return}let i=!r&&!tr.moved&&tr.button===0;if(tr=null,e.style.cursor=vn(),i){if((je.mode===`picking`||je.mode===`staked`)&&!(je.mode===`staked`&&Pt(n.clientX,n.clientY))){let e=Mt(n.clientX,n.clientY);if(e){let[n,r]=at(e[0],e[1],Me);je.x=n,je.z=r,G.group.position.set(n,0,r),t.onPickGroundSpot?.(n,r)}return}if(je.mode===`hidden`){let e=Dt(n.clientX,n.clientY);if(e){Le=e.ent.id,(Math.hypot(q.goalTx-e.ent.x,q.goalTz-e.ent.z)>10.5||q.goalZoom<1.38)&&fr(e.ent.x,e.ent.z,Math.max(1.88,q.goalZoom));let n=e.ent.interactive?.trigger?.(e.action);n?t.onInteractiveEvent?.(e.ent.data,n):t.onSelectCreation?.(e.ent.data,Ne[e.ent.id]||null);return}}let e=Pt(n.clientX,n.clientY);if(e){e.id!==`__city_sign__`&&(Le=e.id),e.triggerEyeSpinFlourish?.();let n=e.data?.scaleClass,r=n===`colossal`?.86:n===`large`?1.28:n===`tiny`?2:1.55;e.interactive&&(r=Math.max(1.88,r),e.interactive.onInspectFocus?.()),fr(e.x,e.z,r),t.onSelectCreation?.(e.data,Ne[e.id]||null)}}};e.addEventListener(`pointerup`,cr),e.addEventListener(`pointercancel`,cr),e.addEventListener(`lostpointercapture`,cr),e.addEventListener(`pointerleave`,Et);let lr=(...e)=>e.some(e=>un.has(e));window.addEventListener(`blur`,()=>{un.clear()}),document.addEventListener(`visibilitychange`,()=>{document.visibilityState!==`visible`&&un.clear()}),window.addEventListener(`keyup`,e=>{e.code&&un.delete(e.code),e.key&&un.delete(String(e.key).toLowerCase())});function ur(e){if(!e||typeof e!=`object`)return!1;if(e.isContentEditable)return!0;let t=typeof e.tagName==`string`?e.tagName.toUpperCase():``;return!!(t===`INPUT`||t===`TEXTAREA`||t===`SELECT`||typeof e.closest==`function`&&e.closest(`dialog[open]`))}function dr(e){return!!(e.metaKey||e.ctrlKey||e.altKey||ur(e.target)||ur(document.activeElement)||document.querySelector?.(`dialog[open]`))}window.addEventListener(`keydown`,e=>{if(dr(e))return;let t=e.key?String(e.key).toLowerCase():``;if(!e.repeat&&(e.code===`KeyE`||t===`e`)){Wn()&&e.preventDefault();return}if(!e.repeat&&(Y.active&&(e.code===`KeyQ`||t===`q`)||e.code===`KeyG`||t===`g`)){e.preventDefault(),On();return}if(Y.active){if(e.code===`Space`&&e.target?.matches?.(`button, a`))return;if(e.code===`Space`){if(e.preventDefault(),!e.repeat&&H.isRiding()){Un();return}if(!e.repeat&&H.isSitting()){let e=H.standUp();e?.ok&&e.pose&&(e.pose.isInterior?(Y.localX=e.pose.x,Y.localY=0,Y.localZ=e.pose.z):(Y.x=e.pose.x,Y.z=e.pose.z)),Rn();return}Y.jumpY<=.002&&(Y.jumpVy=5.2)}e.code&&un.add(e.code),t&&un.add(t),(e.key===`ArrowUp`||e.key===`ArrowDown`||e.key===`ArrowLeft`||e.key===`ArrowRight`)&&e.preventDefault();return}(e.key===`ArrowLeft`||e.key===`ArrowRight`||e.key===`ArrowUp`||e.key===`ArrowDown`||t===`a`||t===`d`||t===`w`||t===`s`||t===`q`||t===`e`)&&nt();let n=7/Math.max(.5,q.zoom);e.key===`ArrowLeft`||t===`a`?q.goalTx-=n:e.key===`ArrowRight`||t===`d`?q.goalTx+=n:e.key===`ArrowUp`||t===`w`?q.goalTz-=n:e.key===`ArrowDown`||t===`s`?q.goalTz+=n:t===`q`?q.goalAz-=.14:t===`e`&&(q.goalAz+=.14),rt()});function fr(e,t,n=1.45){nt(),q.goalTx=e,q.goalTz=t,q.goalZoom=n,rt()}function pr({tx:e,tz:t,zoom:n,az:r,el:i,ty:a,instant:o=!0}={}){nt(),Y.active&&qn(!1),typeof e==`number`&&(q.goalTx=e),typeof t==`number`&&(q.goalTz=t),typeof n==`number`&&(q.goalZoom=Math.min(3.4,Math.max(.22,n))),typeof r==`number`&&(q.goalAz=r),typeof i==`number`&&(q.goalEl=Math.max(Ve,Math.min(He,i))),q.goalTy=typeof a==`number`?a:qe(q.goalEl),rt(),o&&(q.tx=q.goalTx,q.ty=q.goalTy,q.tz=q.goalTz,q.zoom=q.goalZoom,q.az=q.goalAz,q.el=q.goalEl)}function mr(e){let t=rn(e);if(!t)return;if(Le=e,t.triggerEyeSpinFlourish?.(),Y.active){H.isInside()&&Vn(),H.isRiding()&&Un(),H.isSitting()&&H.standUp();let e=Math.max(7.5,(t.footprintRadius||3.4)+5);Gn(t.x,t.z,Y.yaw,e,t.topY),Rn();return}let n=t.y>1?t.y/Math.max(.35,Math.tan(q.el)):0,r=t.x-Math.sin(q.az)*n,i=t.z-Math.cos(q.az)*n,a=t.data?.scaleClass,o=t.y>4?1.22:a===`colossal`?.86:a===`large`?1.28:a===`tiny`?2.05:1.62;t.interactive&&(o=Math.max(1.88,o),t.interactive.onInspectFocus?.()),fr(r,i,o)}function hr(){let e=window.devicePixelRatio||1;return Math.max(.5,Math.min(2.5,Math.min(e,b)*S))}function gr(){let e=Math.max(320,window.innerWidth),t=Math.max(240,window.innerHeight);f.setPixelRatio(hr()),f.setSize(e,t,!1);let n=e/t;E.left=-34*n,E.right=34*n,E.top=34,E.bottom=-34,E.updateProjectionMatrix(),D.aspect=n,K.usingFpCam||(D.fov=n<.8?72:62),D.updateProjectionMatrix(),O&&k&&(O.setSize(e,t),j?.setSize(e,t),M?.setSize?.(e,t),N?.setSize(e,t),F(Y.active||K.usingFpCam?D:E)),r&&Ie&&Zt()}window.addEventListener(`resize`,gr);function _r({preset:e,resolutionScale:n,userInitiated:r=!0}={}){if(r&&(C=!0),typeof n==`number`&&Number.isFinite(n)&&(S=Math.max(.5,Math.min(1.5,n))),typeof e==`string`){let t=e.toLowerCase();(t===`low`||t===`medium`||t===`high`||t===`ultra`)&&(x=t)}let a=!0,o=L,s=!1;return x===`low`?(b=g?.75:.85,a=!1,o=1024,s=!1):x===`medium`?(b=1,a=!g,o=1024,s=!1):x===`high`?(b=_?1.35:1.5,a=!g,o=2048,s=!1):x===`ultra`&&(b=2,a=!g,o=_?2048:4096,g||(P(),s=!!O)),k=s,f.shadowMap.enabled!==a&&(f.shadowMap.enabled=a,R.castShadow=a,i.traverse(e=>{e.isMesh&&e.material&&(Array.isArray(e.material)?e.material.forEach(e=>{e.needsUpdate=!0}):e.material.needsUpdate=!0)})),a&&L!==o&&(L=o,R.shadow.mapSize.set(L,L),R.shadow.map&&(R.shadow.map.dispose(),R.shadow.map=null)),gr(),t.onGraphicsChange?.(vr()),vr()}function vr(){return{preset:x,resolutionScale:S,effectivePixelRatio:Number(f.getPixelRatio().toFixed(2)),shadowsEnabled:f.shadowMap.enabled,shadowRes:L,postProcessing:k,fps:w,isTouchDevice:_,isLowTierGpu:v}}let yr=!1;function br(e){return yr=!!e,yr}function xr(){return yr}function Sr(){if(!Y.active)return!1;if(H.isRiding())return Un(),!0;if(H.isSitting()){let e=H.standUp();return e?.ok&&e.pose&&(e.pose.isInterior?(Y.localX=e.pose.x,Y.localY=0,Y.localZ=e.pose.z):(Y.x=e.pose.x,Y.z=e.pose.z)),Rn(),!0}return Y.jumpY<=.002&&(Y.jumpVy=5.2,!0)}let Cr=new J(0,1,0),wr=I.clone().normalize(),Tr=new J().crossVectors(Cr,wr).normalize(),Er=new J().crossVectors(wr,Tr).normalize(),Dr=new J,Or=new J;function kr(e,t){if(!f.shadowMap.enabled)return;let n=172/L;Dr.set(e,0,t);let r=Math.round(Dr.dot(Tr)/n)*n,i=Math.round(Dr.dot(Er)/n)*n,a=Dr.dot(wr);Or.set(0,0,0).addScaledVector(Tr,r).addScaledVector(Er,i).addScaledVector(wr,a),R.target.position.copy(Or),R.position.copy(Or).add(I),R.target.updateMatrixWorld()}let jr=performance.now(),Mr=0,Nr=NaN,Pr=null,Fr=0,Ir=0,Lr=0,Rr=0,zr=0,Br={vehicles:lt,buildings:ut,focusX:0,focusZ:0,frameTick:0};function Vr(e){let t=f.getContext();if(t&&typeof t.fenceSync==`function`){let n=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush();let r=()=>{(n&&t.getSyncParameter(n,t.SYNC_STATUS))===t.UNSIGNALED?window.setTimeout(r,5):(t.deleteSync(n),window.setTimeout(e,80))};window.setTimeout(r,5)}else requestAnimationFrame(e)}function Hr(){g&&!r?Vr(()=>Ur(performance.now())):requestAnimationFrame(Ur)}function Ur(n){if(!r&&document.visibilityState===`hidden`){jr=n,requestAnimationFrame(Ur);return}let a=n-jr,o=Math.min(.05,Math.max(.001,a/1e3));jr=n;let s=n*.001;if(Fr=Fr+1|0,a>2&&a<500&&(Rr++,zr+=a,Rr>=20&&(w=Math.min(144,Math.max(1,Math.round(1e3/(zr/Rr)))),Rr=0,zr=0,t.onFpsUpdate?.(w,x))),we>0&&(we=Math.max(0,we-o)),un.size>0&&document.querySelector?.(`dialog[open]`)&&un.clear(),!r&&!C&&!en&&Ie&&a>4&&a<240&&(Ir++,Lr+=a,Ir>=65)){let e=Lr/Ir;Ir=0,Lr=0,x===`ultra`&&e>24.5?_r({preset:`high`,userInitiated:!1}):x===`high`&&e>26.5?_r({preset:`medium`,userInitiated:!1}):x===`medium`&&e>30&&_r({preset:`low`,userInitiated:!1})}z.uTime.value=s,ie.stepCount(o,!K.active||K.elapsed>=.24),r||Je||x===`low`&&Fr&1||ae.step(s);let c=H.isInside(),l=Y.active?Y.x:q.tx,u=Y.active?Y.z:q.tz,d=Y.active?Y.yaw:q.az,p=Y.active&&!c?Y:null;gt(),Br.vehicles=lt,Br.buildings=ut,Br.focusX=l,Br.focusZ=u,Br.frameTick=Fr;for(let e=0;e<ct.length;e++)ct[e].step(o,s,ct,ft,d,p,Br);lt.length>0&&sp({dt:o,t:s,vehicleEntities:lt,buildingEntities:ut,pondProps:ft,allEntities:ct,citySignPos:cp,clampPointToIslandFn:gp,onTrafficIncident:r?null:t.onTrafficIncident});for(let e=1;e<mt.length;e++){let t=mt[e];t.ent&&!t.ent.staticRootFrozen&&(t.x=t.ent.x,t.z=t.ent.z)}for(let e=0;e<pt.length;e++)pt[e].step(o,s,lt,ft,pt,mt);let m=0,h=0,g=!1;if(Y.active&&(m=dn.fwd,h=dn.right,lr(`KeyW`,`w`,`ArrowUp`,`arrowup`)&&(m+=1),lr(`KeyS`,`s`,`ArrowDown`,`arrowdown`)&&--m,lr(`KeyD`,`d`)&&(h+=1),lr(`KeyA`,`a`)&&--h,g=yr||Math.hypot(dn.fwd,dn.right)>.92||lr(`ShiftLeft`,`ShiftRight`,`shift`),H.isSitting())){let e=H.handleMovementWake(Math.hypot(m,h),Y.jumpY>.02||Y.jumpVy>0);e?.ok&&e.pose&&(e.pose.isInterior?(Y.localX=e.pose.x,Y.localY=0,Y.localZ=e.pose.z):(Y.x=e.pose.x,Y.z=e.pose.z))}r||H.step(o,s,Y.active?{inFwd:m,inRight:h,jumping:Y.jumpY>.02}:null);let _=(e,n)=>{let r=Ke(Y.yaw-ze);t.onCameraChange&&(Number.isNaN(Nr)||Math.abs(Y.yaw-Nr)>.004||Pr!==!1)&&(Nr=Y.yaw,Pr=!1,t.onCameraChange({az:Y.yaw,el:Y.pitch,zoom:1,tx:e,tz:n,azDeltaFromHome:r,isHome:!1,fpActive:!0}))};if(Y.active){let e=1.95;lr(`ArrowLeft`,`arrowleft`)&&(Y.goalYaw+=e*o),lr(`ArrowRight`,`arrowright`)&&(Y.goalYaw-=e*o),lr(`PageUp`,`pageup`)&&(Y.goalPitch=Math.min(At,Y.goalPitch+1.15*o)),lr(`PageDown`,`pagedown`)&&(Y.goalPitch=Math.max(kt,Y.goalPitch-1.15*o));let t=1-Math.exp(-o*20),n=H.isRiding()?H.getRidingState():null,i=n?H.computePassengerPose(n.rideId,n.seat):null;if(n&&!i&&Un(),i)i.deltaYaw&&(Y.yaw+=i.deltaYaw,Y.goalYaw+=i.deltaYaw),Y.yaw+=(Y.goalYaw-Y.yaw)*t,Y.pitch+=(Y.goalPitch-Y.pitch)*t,Y.x=i.x,Y.z=i.z,Y.feetY=i.y,Y.y=i.eyeY,Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.horizSpeed=0,Y.sprinting=!1,D.position.set(i.eyeX,i.eyeY,i.eyeZ),D.rotation.set(Y.pitch,Y.yaw,0),D.updateMatrixWorld(),R.intensity=2.25,ee.intensity=1.12,V.visible=!0,V.position.set(i.x,0,i.z),B.position.set(i.x,-.56,i.z),z.uFocusXZ.value.set(i.x,i.z),z.uHorizonRange.value.set(96,238),kr(i.x-Math.sin(Y.yaw)*18,i.z-Math.cos(Y.yaw)*18),_(i.x,i.z),Ce.root.visible=!r,Ce.root.position.set(i.x,Math.min(i.y,i.eyeY-1.24),i.z),Ce.applyPose({dt:o,t:s,yaw:Y.yaw,pitch:Y.pitch,speed:0,anim:`ride`,jumpY:0,waveTimer:we,isFirstPerson:!0});else if(H.isInside()){Y.yaw+=(Y.goalYaw-Y.yaw)*t,Y.pitch+=(Y.goalPitch-Y.pitch)*t,R.intensity=.28,ee.intensity=.68,V.visible=!0,V.position.set(cf.x,cf.y-12,cf.z);let e=H.isSitting()?H.getSeatPose():null;if(e)Y.localX=e.x,Y.localY=e.y,Y.localZ=e.z,Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.horizSpeed=0,Y.sprinting=!1,Y.y=e.worldEyeY,D.position.set(e.worldX,e.worldEyeY,e.worldZ),D.rotation.set(Y.pitch,Y.yaw,0),D.updateMatrixWorld(),Ce.root.visible=!r,Ce.root.position.set(e.worldX,Math.min(e.worldY,e.worldEyeY-1.24),e.worldZ),Ce.applyPose({dt:o,t:s,yaw:Y.yaw,pitch:Y.pitch,speed:0,anim:`sit`,jumpY:0,waveTimer:we,isFirstPerson:!0});else{let e=g?6.8:4.6,t=-Math.sin(Y.yaw),n=-Math.cos(Y.yaw),i=Math.cos(Y.yaw),a=-Math.sin(Y.yaw),c=0,l=0,u=Math.hypot(m,h);if(u>.02){let r=Math.min(1,u)/u,o=m*r,s=h*r;c=(t*o+i*s)*e,l=(n*o+a*s)*e}let d=1-Math.exp(-o*14);Y.vx+=(c-Y.vx)*d,Y.vz+=(l-Y.vz)*d;let f=Y.localX,p=Y.localZ,[_,v]=H.resolveInteriorWalkPosition(Y.localX+Y.vx*o,Y.localZ+Y.vz*o);Y.localX=_,Y.localZ=v,(Y.jumpY>0||Y.jumpVy>0)&&(Y.jumpY+=Y.jumpVy*o,Y.jumpVy-=15.5*o,Y.jumpY<=0&&(Y.jumpY=0,Y.jumpVy=0));let y=H.getInteriorFloorHeight?.(Y.localX,Y.localZ)||0;Y.localY=y+Y.jumpY;let b=Math.hypot(Y.localX-f,Y.localZ-p)/Math.max(.001,o);Y.horizSpeed=b,Y.sprinting=g&&b>5.4;let x=Je||Y.jumpY>.02?0:Math.min(1,b/4.4);x>.02&&(Y.bobPhase+=o*(7+b*.5));let S=Math.sin(Y.bobPhase*2)*.032*x,C=Math.cos(Y.bobPhase)*.014*x,w=cf.x+Y.localX,T=cf.z+Y.localZ,E=cf.y+Y.localY;Y.y=E+Ot+S,D.position.set(w+i*C,Y.y,T+a*C),D.rotation.set(Y.pitch,Y.yaw,0),D.updateMatrixWorld();let O=Y.jumpY>.03?`jump`:Y.sprinting?`run`:b>.35?`walk`:we>0?`wave`:`idle`;Ce.root.visible=!r,Ce.root.position.set(w,E,T),Ce.applyPose({dt:o,t:s,yaw:Y.yaw,pitch:Y.pitch,speed:b,anim:O,jumpY:Y.jumpY,waveTimer:we,isFirstPerson:!0})}_(Y.x,Y.z)}else if(H.isSitting()){Y.yaw+=(Y.goalYaw-Y.yaw)*t,Y.pitch+=(Y.goalPitch-Y.pitch)*t;let e=H.getSeatPose(),n=_p(e.x,e.z),i=n+e.y,a=n+e.eyeY;Y.x=e.x,Y.z=e.z,Y.feetY=i,Y.y=a,Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.horizSpeed=0,Y.sprinting=!1,D.position.set(e.x,a,e.z),D.rotation.set(Y.pitch,Y.yaw,0),D.updateMatrixWorld(),R.intensity=2.25,ee.intensity=1.12,V.visible=!0,V.position.set(Y.x,0,Y.z),B.position.set(Y.x,-.56,Y.z),z.uFocusXZ.value.set(Y.x,Y.z),z.uHorizonRange.value.set(96,238),kr(Y.x-Math.sin(Y.yaw)*18,Y.z-Math.cos(Y.yaw)*18),_(Y.x,Y.z),Ce.root.visible=!r,Ce.root.position.set(e.x,Math.min(i,a-1.24),e.z),Ce.applyPose({dt:o,t:s,yaw:Y.yaw,pitch:Y.pitch,speed:0,anim:`sit`,jumpY:0,waveTimer:we,isFirstPerson:!0})}else{Y.yaw+=(Y.goalYaw-Y.yaw)*t,Y.pitch+=(Y.goalPitch-Y.pitch)*t;let e=g?9.6:5.8,n=-Math.sin(Y.yaw),i=-Math.cos(Y.yaw),a=Math.cos(Y.yaw),c=-Math.sin(Y.yaw),l=0,u=0,d=Math.hypot(m,h);if(d>.02){let t=Math.min(1,d)/d,r=m*t,o=h*t;l=(n*r+a*o)*e,u=(i*r+c*o)*e}let f=1-Math.exp(-o*14);Y.vx+=(l-Y.vx)*f,Y.vz+=(u-Y.vz)*f;let p=Y.x,v=Y.z,[y,b]=Tn(Y.x+Y.vx*o,Y.z+Y.vz*o,Y.feetY);Y.x=y,Y.z=b,(Y.jumpY>0||Y.jumpVy>0)&&(Y.jumpY+=Y.jumpVy*o,Y.jumpVy-=15.5*o,Y.jumpY<=0&&(Y.jumpY=0,Y.jumpVy=0)),Y.settleT<1&&(Y.settleT=Math.min(1,Y.settleT+o*3.4));let x=(1-(1-(1-Y.settleT)**3))*1.15,S=Math.hypot(Y.x-p,Y.z-v)/Math.max(.001,o);Y.horizSpeed=S,Y.sprinting=g&&S>6.4;let C=Je||Y.jumpY>.02?0:Math.min(1,S/4.8);C>.02&&(Y.bobPhase+=o*(7.2+S*.52));let w=Math.sin(Y.bobPhase*2)*.036*C,T=Math.cos(Y.bobPhase)*.016*C,E=Cn(Y.x,Y.z,Y.feetY);Number.isFinite(Y.walkSurfaceY)?Y.walkSurfaceY+=(E-Y.walkSurfaceY)*(1-Math.exp(-o*22)):Y.walkSurfaceY=E;let O=Y.walkSurfaceY;Y.feetY=O+Y.jumpY,Y.y=O+Ot+x+Y.jumpY+w,D.position.set(Y.x+a*T,Y.y,Y.z+c*T),D.rotation.set(Y.pitch,Y.yaw,0),D.updateMatrixWorld(),R.intensity=2.25,ee.intensity=1.12,V.visible=!0,V.position.set(Y.x,0,Y.z),B.position.set(Y.x,-.56,Y.z),z.uFocusXZ.value.set(Y.x,Y.z),z.uHorizonRange.value.set(96,238),kr(Y.x+n*18,Y.z+i*18),_(Y.x,Y.z);let k=Y.jumpY>.03?`jump`:Y.sprinting?`run`:S>.35?`walk`:we>0?`wave`:`idle`;Ce.root.visible=!r,Ce.root.position.set(Y.x,O+x+Y.jumpY,Y.z),Ce.applyPose({dt:o,t:s,yaw:Y.yaw,pitch:Y.pitch,speed:S,anim:k,jumpY:Y.jumpY,waveTimer:we,isFirstPerson:!0})}}else{R.intensity=2.25,ee.intensity=1.12;let n=!1,i=!1;if(K.active){Ie||Mr>.45?K.elapsed+=o:Mr+=o;let a=Ue(),c=a*.88;q.goalZoom=a;let l=K.holdSec,u=l+K.panDurSec,d=u+K.orbitDurSec;if(K.elapsed<l)q.tx=K.fromTx,q.ty=K.fromTy,q.tz=K.fromTz,q.zoom=K.fromZoom,q.az=K.fromAz,q.el=K.fromEl;else if(K.elapsed<u){K.firedPan||(K.firedPan=!0,ln=`pan`,t.onIntroDemoStep?.(`pan`));let e=Ge((K.elapsed-l)/K.panDurSec);q.tx=K.fromTx+(0-K.fromTx)*e,q.ty=K.fromTy+(0-K.fromTy)*e,q.tz=K.fromTz+(-2-K.fromTz)*e,q.zoom=K.fromZoom+(c-K.fromZoom)*e,q.az=K.fromAz+(ze-K.fromAz)*e,q.el=K.fromEl+(Be-K.fromEl)*e}else if(K.elapsed<d){K.firedOrbit||(K.firedOrbit=!0,ln=`orbit`,t.onIntroDemoStep?.(`orbit`));let e=Ge((K.elapsed-u)/K.orbitDurSec);q.tx=0,q.ty=0,q.tz=-2,q.zoom=c,q.az=ze+Math.PI*2*e,q.el=Be-Math.sin(e*Math.PI)*.08}else{if(!K.firedWalk){K.firedWalk=!0;let[e,n]=Tn(K.walkX,K.walkZ);K.walkX=e,K.walkZ=n,Y.x=e,Y.z=n,K.walkYaw=Math.atan2(-(2.4-e),-(-18.5-n)),Y.yaw=Y.goalYaw=K.walkYaw,K.walkPitch=.045,K.usingFpCam=!0,ln=`walk`,t.onIntroDemoStep?.(`walk`)}let l=(K.elapsed-d)/K.walkDurSec;if(l<1){n=!0,i=l>.78;let e=Ge(l),r=We(),a=34/c,o=Math.tan(bt.degToRad(r*.5)),s=14*o,u=a/5600,d=a*(s/a)**+e,f=u+(o-u)*e**1.35,p=bt.radToDeg(Math.atan(f)*2),m=d/f,h=K.walkYaw,g=K.walkPitch,_=-Math.sin(h)*Math.cos(g),v=Math.sin(g),y=-Math.cos(h)*Math.cos(g),b=_p(K.walkX,K.walkZ),x=K.walkX+_*14,S=b+Ot+v*14,C=K.walkZ+y*14,w=ze+Math.PI*2,T=0+(x-0)*e,E=S*e,O=-2+(C- -2)*e,k=w+Ke(h-w)*e,A=Be+(-g-Be)*e,j=T+Math.sin(k)*Math.cos(A)*m,M=E+Math.sin(A)*m,N=O+Math.cos(k)*Math.cos(A)*m;V.visible=!0,V.position.set(j,M,N),D.fov=p,D.near=Math.max(.14,Math.min(120,m*.25)),D.far=Math.max(820,m+950),D.position.set(j,M,N),D.rotation.set(-A,k,0),D.updateProjectionMatrix(),D.updateMatrixWorld(),F(D);let P=0+(K.walkX-0)*e,I=-2+(K.walkZ- -2)*e,L=Ke(k-ze);t.onCameraChange&&(Number.isNaN(Nr)||Math.abs(k-Nr)>.004)&&(Nr=k,Pr=!1,t.onCameraChange({az:k,el:-A,zoom:1,tx:P,tz:I,azDeltaFromHome:L,isHome:!1,fpActive:!1})),B.position.set(P,-.56,I),z.uFocusXZ.value.set(P,I),z.uHorizonRange.value.set(145+-49*e,295+-57*e);let R=K.walkX-Math.sin(h)*18,ee=K.walkZ-Math.cos(h)*18;kr(0+(R-0)*e,-2+(ee- -2)*e)}else{n=!0,K.active=!1,K.usingFpCam=!1;let[i,c]=Tn(K.walkX,K.walkZ);Y.x=i,Y.z=c;let l=_p(i,c);Y.feetY=l,Y.y=l+Ot,Y.yaw=Y.goalYaw=K.walkYaw,Y.pitch=Y.goalPitch=K.walkPitch,Y.vx=0,Y.vz=0,Y.jumpY=0,Y.jumpVy=0,Y.horizSpeed=0,Y.sprinting=!1,Y.settleT=1,Y.active=!0,De=!0,ln=`walk`,q.tx=q.goalTx=0,q.ty=q.goalTy=0,q.tz=q.goalTz=-2,q.zoom=q.goalZoom=a,q.az=q.goalAz=ze,q.el=q.goalEl=Be,V.visible=!0,V.position.set(Y.x,0,Y.z),D.fov=We(),D.near=.14,D.far=820,D.position.set(Y.x,Y.y,Y.z),D.rotation.set(Y.pitch,Y.yaw,0),D.updateProjectionMatrix(),D.updateMatrixWorld(),F(D),e.style.cursor=vn(),t.onDragModeChange?.(`walk`),B.position.set(Y.x,-.56,Y.z),z.uFocusXZ.value.set(Y.x,Y.z),z.uHorizonRange.value.set(96,238),kr(Y.x-Math.sin(Y.yaw)*18,Y.z-Math.cos(Y.yaw)*18),Ce.root.visible=!r,Ce.root.position.set(Y.x,l,Y.z),Ce.applyPose({dt:o,t:s,yaw:Y.yaw,pitch:Y.pitch,speed:0,anim:we>0?`wave`:`idle`,jumpY:0,waveTimer:we,isFirstPerson:!0})}}}else{let e=1-Math.exp(-o*11);q.tx+=(q.goalTx-q.tx)*e,q.ty+=(q.goalTy-q.ty)*e,q.tz+=(q.goalTz-q.tz)*e,q.zoom+=(q.goalZoom-q.zoom)*e,q.az+=(q.goalAz-q.az)*e,q.el+=(q.goalEl-q.el)*e}if(!n){V.visible=!1;let e=Math.cos(q.el)*240;E.position.set(q.tx+Math.sin(q.az)*e,q.ty+Math.sin(q.el)*240,q.tz+Math.cos(q.az)*e),E.lookAt(q.tx,q.ty,q.tz),E.zoom=q.zoom,E.updateProjectionMatrix();let n=Ke(q.az-ze),r=!K.active&&Math.abs(n)<.03&&Math.abs(q.el-Be)<.03&&Math.abs(q.zoom-Ue())<.04&&Math.hypot(q.tx-0,q.tz- -2)<1.2;t.onCameraChange&&(Number.isNaN(Nr)||Math.abs(q.az-Nr)>.004||r!==Pr)&&(Nr=q.az,Pr=r,t.onCameraChange({az:q.az,el:q.el,zoom:q.zoom,tx:q.tx,tz:q.tz,azDeltaFromHome:n,isHome:r,fpActive:!1})),B.position.set(q.tx,-.56,q.tz),z.uFocusXZ.value.set(q.tx,q.tz);let i=Math.max(0,Math.min(1,(q.el-.14)/.24)),a=i*i*(3-2*i);z.uHorizonRange.value.set(72+73*a,142+153*a),kr(q.tx,q.tz)}if(!Y.active){let e=_p(Y.x,Y.z);Y.feetY=e,Y.horizSpeed=0,Y.sprinting=!1,Ce.root.visible=!r,Ce.root.position.set(Y.x,e,Y.z),Ce.applyPose({dt:o,t:s,yaw:Y.yaw,pitch:0,speed:0,anim:we>0?`wave`:`idle`,jumpY:0,waveTimer:we,isFirstPerson:i})}}if(Te.group.visible=!r,r||Te.step(o,s,{localRoomId:H.getCurrentRoomId(),interiorOrigin:cf,resolveRidePose:(e,t)=>H.computePassengerPose(e,t),getGroundHeight:_p}),Rn(),or(),!r&&!H.isInside()&&Le&&Pe.has(Le)){let e=Pe.get(Le);if(e.y<=2.5){ke.visible=!0,ke.position.set(e.x,.122,e.z);let t=Math.max(1.8,(e.footprintRadius||2.8)+.6);ke.scale.setScalar(t*(1+Math.sin(s*2.5)*.035))}else ke.visible=!1}else ke.visible=!1;if(G.group.visible){let e=G.getPlotRadius();if(G.ring.scale.setScalar(e*(1+Math.sin(s*3.2)*.035)),G.scaffoldGroup.visible){let t=Math.max(.75,Math.min(3.4,e*.36)),n=Math.max(1,Math.min(3.6,.9+e*.22));G.floatingCubes.forEach((e,r)=>{let i=s*2.2+r*Math.PI*2/3;e.position.set(Math.cos(i)*t,n+Math.sin(s*3.8+r*1.4)*.38,Math.sin(i)*t),e.rotation.y=s*1.8+r,e.rotation.x=Math.sin(s*2.1+r)*.35})}}k&&O?O.render():f.render(i,Y.active||K.usingFpCam?D:E),r&&Ie&&(Re++,Re>=6&&!window.__geminIslandOgReady&&(window.__geminIslandOgReady=!0)),Hr()}try{let e=V.visible;if(V.visible=!0,f.compile(i,D),V.visible=e,f.compile(i,E),j&&j._fsQuad?._mesh){let e=new Ha(-1,1,1,-1,0,1);j._fsQuad.material=j.gtaoMaterial,F(D),f.compile(j._fsQuad._mesh,e),F(E),f.compile(j._fsQuad._mesh,e)}}catch{}return requestAnimationFrame(Ur),{applyWorldSnapshot:sn,applyLiveFeeds:Qt,setSpotPickerState:cn,setPreviewPrompt:ot,focusCreationById:mr,focusOn:fr,setCameraPose:pr,recenterCamera:$n,setDragMode:Jn,getDragMode:Yn,setJoystickInput:_n,setGraphicsSettings:_r,getGraphicsSettings:vr,setMobileSprint:br,getMobileSprint:xr,triggerMobileJump:Sr,enterFirstPerson:()=>Jn(`walk`),exitFirstPerson:()=>Jn(`pan`),isFirstPerson:()=>Y.active,releaseWalkPointerLock:gn,setLocalAppearance:En,getLocalAppearance:Dn,triggerLocalWave:On,getLocalMultiplayerPose:An,syncMultiplayerWelcome:jn,upsertRemotePlayer:Mn,updateRemotePlayerPose:Nn,updateRemotePlayerProfile:Pn,triggerRemotePlayerEmote:Fn,removeRemotePlayer:In,getRemotePlayerCount:Ln,triggerActiveInteraction:Wn,getActiveInteractionPrompt:zn,enterBuildingById:Bn,exitCurrentBuilding:Vn,isInsideBuilding:()=>H.isInside(),getCurrentRoomId:()=>H.getCurrentRoomId(),boardVehicleById:Hn,hopOffCurrentVehicle:Un,getRidingState:()=>H.getRidingState(),getCameraTarget:()=>Y.active?{x:Y.x,z:Y.z,zoom:1}:{x:q.tx,z:q.tz,zoom:q.zoom},getCameraState:()=>({tx:q.tx,ty:q.ty,tz:q.tz,zoom:q.zoom,az:q.az,el:q.el,dragMode:ln,introActive:K.active,fpActive:Y.active,fpX:Y.x,fpY:Y.y,fpZ:Y.z,fpYaw:Y.yaw,fpPitch:Y.pitch,joyRight:dn.right,joyFwd:dn.fwd,insideRoom:H.getCurrentRoomId(),riding:H.getRidingState()}),getPlotRadius:()=>G.getPlotRadius(),isPointerActive:()=>!!tr||!!fn||Math.hypot(dn.right,dn.fwd)>.01||nr.size>0,getCreationEntity:e=>rn(e),getPerfStats:()=>{let e=e=>{let t=0,n=0,r=0,i=0;return e.traverse(e=>{if(!e.isMesh)return;t++,e.castShadow&&n++,e.matrixAutoUpdate===!1&&i++;let a=e.geometry;if(a){let t=a.index?a.index.count/3:(a.attributes.position?.count||0)/3;r+=e.isInstancedMesh?t*(e.count||1):t}}),{meshes:t,shadowCasters:n,triangles:Math.round(r),frozenMeshes:i}};return{fps:w,graphicsPreset:x,resolutionScale:S,entityCount:Pe.size,pendingCreations:tn.size,isStreamingCreations:en,usePostProcessing:k,isLowTierGpu:v,isTouchDevice:_,activeMaxDpr:b,pixelRatio:f.getPixelRatio(),shadowRes:L,render:{...f.info.render},memory:{...f.info.memory},sceneTotal:e(i),ground:e(ne),perimeterTrees:e(oe),paths:e(ve),props:e(ye),creations:e(be),villagers:e(xe),remotePlayers:e(Te.group)}}}}var qp=new Set([`backpack`,`cape`,`wings`,`guitar`,`jetpack`]),Jp=[{id:`head`,label:`Head`},{id:`hat`,label:`Hat`},{id:`face`,label:`Face`},{id:`outfit`,label:`Outfit`},{id:`gear`,label:`Gear`}];function Yp(){let e=document.createElement(`canvas`);e.width=128,e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,8,64,64,60);n.addColorStop(0,`rgba(18, 32, 20, 0.34)`),n.addColorStop(.55,`rgba(18, 32, 20, 0.14)`),n.addColorStop(1,`rgba(18, 32, 20, 0.0)`),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new Ai(e);return r.colorSpace=Ae,r}function Xp({dialogEl:e=null,onChange:t=null,onSave:n=null}={}){let r=e;!r&&typeof document<`u`&&(r=document.getElementById(`avatar-dialog`),r||(r=document.createElement(`dialog`),r.id=`avatar-dialog`,document.body.appendChild(r))),r.classList.add(`avatar-dialog`),r.setAttribute(`closedby`,`any`);let i=od(),a=`head`;r.innerHTML=`
    <div class="cb-shell">
      <div class="cb-stage">
        <canvas class="cb-preview-canvas" aria-label="3D character preview"></canvas>
      </div>
      <div class="cb-panel">
        <div class="cb-top-row">
          <input
            type="text"
            id="cb-name-input"
            name="characterName"
            class="cb-name-input"
            placeholder="Name"
            maxlength="16"
            aria-label="Character name"
            autocomplete="off"
            spellcheck="false"
          />
          <button type="button" class="cb-close-btn" aria-label="Close">&times;</button>
        </div>
        <div class="cb-tabs" role="tablist" aria-label="Appearance categories"></div>
        <div class="cb-body"></div>
        <div class="cb-footer">
          <button type="button" class="cb-btn cb-btn-secondary" data-cb-action="randomize" aria-label="Randomize">
            <svg class="cb-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" />
              <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" />
              <circle cx="12" cy="12" r="1.2" fill="currentColor" />
              <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" />
              <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" />
            </svg>
            <span>Randomize</span>
          </button>
          <button type="button" class="cb-btn cb-btn-secondary" data-cb-action="wave" aria-label="Wave">
            <span>Wave</span>
          </button>
          <button type="button" class="cb-btn cb-btn-primary" data-cb-action="save">
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  `;let o=r.querySelector(`.cb-stage`),s=r.querySelector(`.cb-preview-canvas`),c=r.querySelector(`.cb-name-input`),l=r.querySelector(`.cb-close-btn`),u=r.querySelector(`.cb-tabs`),d=r.querySelector(`.cb-body`),f=r.querySelector(`[data-cb-action="randomize"]`),p=r.querySelector(`[data-cb-action="wave"]`),m=r.querySelector(`[data-cb-action="save"]`),h=e=>{e.target===r&&r.close()};r.addEventListener(`click`,h);let g=e=>{e.key!==`Escape`&&e.stopPropagation()};r.addEventListener(`keydown`,g),r.addEventListener(`keyup`,g);let _=null,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=null,E=null,D=0,O=0,k=0,A=-.2,j=-.2,M=0,N=!1,P=null,F=0,I=0,L=0,R=0,ee=0,te=1.22,z=1.16,ne=4.35,re=1.22,B=1.16,V=4.35;function ie(e=`hop`){e===`wave`?(L=2,ee=Math.max(ee,2),R=Math.max(R,.01)):(ee=2.4,R=Math.max(R,.01))}function ae(){if(v||!s)return;v=new kn,y=new za(38,1,.1,30);let e=new Da(15989247,8833124,1.35);v.add(e);let t=new Wa(16774366,2.05);t.position.set(3.4,5.6,4.4),v.add(t);let n=new Wa(14282495,.65);n.position.set(-3.6,2.6,2.8),v.add(n);let a=new Wa(16770493,.55);a.position.set(-1.8,3.8,-4.2),v.add(a),S=new Fi(.76,.82,.09,32),C=new ra({color:`#89cb67`,roughness:.85,metalness:.02});let c=new fi(S,C);c.position.y=-.046,v.add(c),x=Yp(),w=new Wi(1.18,1.18),T=new ei({map:x,transparent:!0,depthWrite:!1});let l=new fi(w,T);l.rotation.x=-Math.PI*.5,l.position.y=.003,v.add(l),b=vd(i,{isLocalPlayer:!1,scale:.145,castShadow:!1}),v.add(b.root);try{_=new Nl({canvas:s,alpha:!0,antialias:!0,powerPreference:`high-performance`}),_.outputColorSpace=Ae,_.toneMapping=4,_.toneMappingExposure=1.04,_.setClearColor(0,0)}catch{_=null}typeof ResizeObserver<`u`&&o&&(E=new ResizeObserver(()=>{r.open&&oe()}),E.observe(o))}function oe(){if(!_||!y||!o)return;let e=o.getBoundingClientRect(),t=Math.max(120,Math.round(e.width)),n=Math.max(120,Math.round(e.height)),r=Math.min(window.devicePixelRatio||1,2);_.setPixelRatio(r),_.setSize(t,n,!1),y.aspect=t/n,y.updateProjectionMatrix()}function se(){a===`face`?(te=1.36,z=1.31,ne=3.68,j=-.14):(te=1.22,z=1.16,ne=4.35,a===`gear`&&qp.has(i.accessory)?j=2.45:Math.abs(j)>1.6&&a!==`gear`&&(j=-.2))}function ce(e){if(D=0,!r.open)return;let t=O>0?Math.min(.05,Math.max(.001,(e-O)*.001)):.016;if(O=e,k+=t,!N){Math.abs(M)>.002?(j+=M*t,M*=Math.exp(-t*6.5)):M=0;let e=j-A;A+=e*(1-Math.exp(-t*12))}L>0&&(L=Math.max(0,L-t)),(R>0||ee>0)&&(R+=ee*t,ee-=14.5*t,R<=0&&(R=0,ee=0));let n=1-Math.exp(-t*9);if(re+=(te-re)*n,B+=(z-B)*n,V+=(ne-V)*n,b){b.root.position.set(0,R,0);let e=N?0:Math.sin(k*1.15)*.06;b.applyPose({dt:t,t:k,yaw:Math.PI+A+e,pitch:.05,speed:0,anim:R>.03?`jump`:L>0?`wave`:`idle`,jumpY:R,waveTimer:L,isFirstPerson:!1})}if(_&&v&&y){let e=Math.max(1,.54/Math.max(.4,y.aspect||1));y.position.set(0,re,V*e),y.lookAt(0,B,0),_.render(v,y)}D=requestAnimationFrame(ce)}function le(){r.open&&!D&&(ae(),oe(),O=0,D=requestAnimationFrame(ce))}function ue(){D&&=(cancelAnimationFrame(D),0),O=0}o.addEventListener(`pointerdown`,e=>{N=!0,P=e.pointerId,F=e.clientX,I=0,M=0;try{o.setPointerCapture(e.pointerId)}catch{}}),o.addEventListener(`pointermove`,e=>{if(!N||e.pointerId!==P)return;let t=e.clientX-F;F=e.clientX,I+=Math.abs(t);let n=t*.013;A+=n,j=A,M=n*24});let de=e=>{!N||P!==null&&e.pointerId!==P||(N=!1,P=null,I<5&&ie(`wave`))};o.addEventListener(`pointerup`,de),o.addEventListener(`pointercancel`,de);function fe(e,t,n){let r=document.createElement(`div`);r.className=`cb-chips`;for(let i of e){let e=document.createElement(`button`);e.type=`button`,e.className=`cb-chip`+(i===t?` is-active`:``),e.setAttribute(`aria-pressed`,i===t?`true`:`false`),e.textContent=Zu[i]||i,e.addEventListener(`click`,()=>n(i)),r.appendChild(e)}return r}function pe(e,t,n,{dimmed:r=!1,leadingShoeIcon:i=!1}={}){let a=document.createElement(`div`);if(a.className=`cb-swatches`+(r?` is-dimmed`:``),i){let e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);e.setAttribute(`viewBox`,`0 0 24 24`),e.setAttribute(`fill`,`none`),e.setAttribute(`stroke`,`currentColor`),e.setAttribute(`stroke-width`,`1.9`),e.setAttribute(`stroke-linecap`,`round`),e.setAttribute(`stroke-linejoin`,`round`),e.setAttribute(`aria-hidden`,`true`),e.setAttribute(`class`,`cb-swatch-icon`),e.innerHTML=`<path d="M3 17h18v-2.5c0-1.6-1.3-2.9-2.9-3l-3.6-.3-3.2-4.2H8.5L7 12.2 3 13.5V17z"/><path d="M3 19.5h18"/>`,a.appendChild(e)}let o=String(t||``).toLowerCase();for(let t=0;t<e.length;t++){let r=e[t],i=r.toLowerCase()===o,s=document.createElement(`button`);s.type=`button`,s.className=`cb-swatch`+(i?` is-active`:``),s.style.backgroundColor=r,s.setAttribute(`aria-label`,`Color ${t+1}`),s.setAttribute(`aria-pressed`,i?`true`:`false`),s.addEventListener(`click`,()=>n(r)),a.appendChild(s)}return a}function me(e,n=`hop`){i=td({...i,...e}),c.value!==i.name&&document.activeElement!==c&&(c.value=i.name),b&&b.setAppearance(i),se(),n&&ie(n),ge(),t?.({...i})}function he(){u.innerHTML=``;for(let e of Jp){let t=e.id===a,n=document.createElement(`button`);n.type=`button`,n.role=`tab`,n.className=`cb-tab-btn`+(t?` is-active`:``),n.setAttribute(`aria-selected`,t?`true`:`false`),n.textContent=e.label,n.addEventListener(`click`,()=>{a=e.id,se(),he(),ge()}),u.appendChild(n)}}function ge(){if(d.innerHTML=``,a===`head`){let e=document.createElement(`div`);e.className=`cb-group-card`,e.appendChild(pe(Xu.skinColors,i.skin,e=>me({skin:e},`hop`))),d.appendChild(e);let t=document.createElement(`div`);t.className=`cb-group-card`,t.appendChild(fe(Xu.hairStyles,i.hairStyle,e=>me({hairStyle:e},`hop`))),t.appendChild(pe(Xu.hairColors,i.hairColor,e=>me({hairColor:e},null),{dimmed:i.hairStyle===`none`})),d.appendChild(t)}else if(a===`hat`){let e=document.createElement(`div`);e.className=`cb-group-card`,e.appendChild(fe(Xu.hatStyles,i.hatStyle,e=>me({hatStyle:e},`hop`))),e.appendChild(pe(Xu.hatColors,i.hatColor,e=>me({hatColor:e},null),{dimmed:i.hatStyle===`none`||i.hatStyle===`sprout`})),d.appendChild(e)}else if(a===`face`){let e=document.createElement(`div`);e.className=`cb-group-card`,e.appendChild(fe(Xu.eyeStyles,i.eyeStyle,e=>me({eyeStyle:e},`hop`))),d.appendChild(e)}else if(a===`outfit`){let e=document.createElement(`div`);e.className=`cb-group-card`,e.appendChild(fe(Xu.topStyles,i.topStyle,e=>me({topStyle:e},`hop`))),e.appendChild(pe(Xu.topColors,i.topColor,e=>me({topColor:e},null))),d.appendChild(e);let t=document.createElement(`div`);t.className=`cb-group-card`,t.appendChild(fe(Xu.bottomStyles,i.bottomStyle,e=>me({bottomStyle:e},`hop`))),t.appendChild(pe(Xu.bottomColors,i.bottomColor,e=>me({bottomColor:e},null))),d.appendChild(t);let n=document.createElement(`div`);n.className=`cb-group-card`,n.appendChild(pe(Xu.shoeColors,i.shoeColor,e=>me({shoeColor:e},null),{leadingShoeIcon:!0})),d.appendChild(n)}else if(a===`gear`){let e=document.createElement(`div`);e.className=`cb-group-card`,e.appendChild(fe(Xu.accessories,i.accessory,e=>{j=qp.has(e)?2.45:-.2,me({accessory:e},`hop`)})),e.appendChild(pe(Xu.accessoryColors,i.accessoryColor,e=>me({accessoryColor:e},null),{dimmed:i.accessory===`none`})),d.appendChild(e)}}c.addEventListener(`input`,()=>{i=td({...i,name:c.value}),t?.({...i})}),c.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),_e())}),l.addEventListener(`click`,()=>{ye()}),f.addEventListener(`click`,()=>{i=rd(!0,c.value),b&&b.setAppearance(i),j=-.32,ie(`wave`),ge(),t?.({...i})}),p.addEventListener(`click`,()=>{j=-.25,ie(`wave`)});function _e(){i=td({...i,name:c.value});let e=ad(i);n?.({...e}),ye()}m.addEventListener(`click`,_e),r.addEventListener(`close`,()=>{ue()});function ve(e=null){i=e&&typeof e==`object`?td(e):od(),c.value=i.name,A=-.32,j=-.32,M=0,ae(),b&&b.setAppearance(i),se(),he(),ge(),r.open||(typeof r.showModal==`function`?r.showModal():r.setAttribute(`open`,``)),ie(`wave`),le()}function ye(){ue(),r.open&&(typeof r.close==`function`?r.close():r.removeAttribute(`open`))}function be(){return!!r.open}function xe(){return{...i}}function Se(e){return i=td(e),c.value=i.name,b&&b.setAppearance(i),r.open&&ge(),{...i}}function Ce(){ue(),r.removeEventListener(`click`,h),r.removeEventListener(`keydown`,g),r.removeEventListener(`keyup`,g),E&&=(E.disconnect(),null),b&&=(b.dispose(),null),S?.dispose(),C?.dispose(),w?.dispose(),T?.dispose(),x?.dispose(),_&&=(_.dispose(),null),v=null,y=null}return he(),ge(),{dialogEl:r,open:ve,close:ye,isOpen:be,getAppearance:xe,setAppearance:Se,dispose:Ce}}var Zp=25e3,Qp=95,$p=220,em=2400,tm=28e3,nm=4500,rm=.015,im=.025,am=1500,om=12e3,sm=1.8,cm=210,lm=260,um=[`skin`,`hairStyle`,`hairColor`,`hatStyle`,`hatColor`,`eyeStyle`,`accessory`,`accessoryColor`,`topStyle`,`topColor`,`bottomStyle`,`bottomColor`,`shoeColor`],dm=new Set([`idle`,`walk`,`run`,`jump`,`ride`,`sit`,`wave`]),fm=new Set([`wave`,`jump`,`cheer`]),pm=/^[a-zA-Z0-9_#-]+$/,mm=/^[a-zA-Z0-9_-]+$/,hm=/[\u0000-\u001F\u007F-\u009F\u200B-\u200F\u202A-\u202E\u2066-\u2069]/g;function gm(e){return typeof e==`string`?e.replace(hm,``):``}function _m(e,t,n,r,i=0){if(typeof e!=`number`||!Number.isFinite(e))return i;let a=Math.round(Math.max(t,Math.min(n,e))*r)/r;return a===0?0:a}function vm(e,t=0){if(typeof e!=`number`||!Number.isFinite(e))return t;let n=Math.PI*2,r=((e+Math.PI)%n+n)%n-Math.PI;r=Math.max(-n,Math.min(n,r));let i=Math.round(r*1e3)/1e3;return i===0?0:i}function ym(e,t){let n=Math.PI*2,r=(e-t)%n;return r>Math.PI&&(r-=n),r<-Math.PI&&(r+=n),r}function bm(e,t){if(e==null||e===``||typeof e!=`string`)return null;let n=gm(e).trim().slice(0,48);return n&&t.test(n)?n:null}function xm(e){let t=e&&typeof e==`object`?e:{},n=t.mode===`aerial`?`aerial`:`walk`,r=typeof t.anim==`string`&&dm.has(t.anim)?t.anim:`idle`,i=typeof t.seat==`number`&&Number.isFinite(t.seat)?Math.max(0,Math.min(3,Math.trunc(t.seat))):0;return{mode:n,x:_m(t.x,-240,240,1e3,0),y:_m(t.y,-20,600,1e3,0),z:_m(t.z,-240,240,1e3,0),yaw:vm(t.yaw,0),pitch:_m(t.pitch,-1.6,1.6,1e3,0),vx:_m(t.vx,-25,25,100,0),vz:_m(t.vz,-25,25,100,0),anim:r,ride:bm(t.ride,pm),seat:i,room:bm(t.room,mm)}}function Sm(e){if(!e||typeof e!=`object`)return{name:``,appearance:{}};let t=e.appearance&&typeof e.appearance==`object`&&!Array.isArray(e.appearance)?e.appearance:e,n=gm(typeof e.name==`string`?e.name:typeof t.name==`string`?t.name:``).replace(/\s+/g,` `).trim().slice(0,16),r={};for(let e of um)if(typeof t[e]==`string`){let n=gm(t[e]).trim().slice(0,24);n&&(r[e]=n)}return{name:n,appearance:r}}function Cm(e,t,n,r){if(!t||n-r>=nm||e.mode!==t.mode||e.anim!==t.anim||e.ride!==t.ride||e.seat!==t.seat||e.room!==t.room||Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z)>rm)return!0;let i=Math.abs(ym(e.yaw,t.yaw)),a=Math.abs(e.pitch-t.pitch);if(i>im||a>im)return!0;let o=Math.hypot(t.vx,t.vz),s=Math.hypot(e.vx,e.vz);return o>.05&&s<=.01}function wm(e={}){let{multiplayerEnabled:t=!0,getLocalPose:n,getLocalProfile:r,getExtraHeaders:i,onWorldMessage:a,onWelcome:o,onPeerJoin:s,onPeerPose:c,onPeerProfile:l,onPeerEmote:u,onPeerLeave:d,onOnlineCountChange:f}=e,p=null,m=!1,h=null,g=0,_=!1,v=null,y=[],b=null,x=!1,S=null,C=null,w=0,T=null,E=null,D=null,O=null,k=0,A=0,j=0,M=null;function N(e){let t=typeof e==`number`&&Number.isFinite(e)&&e>=0?Math.trunc(e):0;t!==g&&(g=t,f?.(g))}function P(){return!!(p&&typeof WebSocket<`u`&&p.readyState===WebSocket.OPEN)}function F(){return P()||_}function I(e){if(!e||typeof e!=`object`)return!1;if(e.t===`pose`){let t=y.findIndex(e=>e.t===`pose`);if(t>=0)return y[t]=e,!0}else e.t===`hello`&&(y=y.filter(e=>e.t!==`hello`&&e.t!==`pose`));return y.length<24&&y.push(e),!0}function L(e){if(P())try{return p.send(JSON.stringify(e)),!0}catch{return!1}return _?I(e):!1}function R(){let e=r?.();return e&&typeof e==`object`?Sm(e):M||{name:``,appearance:{}}}function ee(){return xm(n?.())}function te(){if(!t||!F())return!1;let e=R(),n=ee(),r=L({t:`hello`,name:e.name,appearance:e.appearance,...n});return r&&(O=n,k=Date.now(),A=k),r}function z(e=!1){if(!t||!F())return!1;let r=n?.();if(!r&&!e)return!1;let i=Date.now(),a=xm(r);if(!e&&!Cm(a,O,i,k))return!1;let o=L({t:`pose`,...a});return o&&(O=a,k=i),o}function ne(){if(D=null,!t||!F()||!M)return!1;let e=Date.now(),n=L({t:`profile`,name:M.name,appearance:M.appearance});return n&&(A=e),n}function re(e){if(M=Sm(e??r?.()),!t||!F())return!1;let n=Date.now()-A;return n>=cm?(D!==null&&(clearTimeout(D),D=null),ne()):(D===null&&(D=setTimeout(ne,Math.max(16,cm-n))),!0)}function B(e){if(!t||!F()||typeof e!=`string`||!fm.has(e))return!1;let n=Date.now();if(n-j<lm)return!1;let r=L({t:`emote`,kind:e});return r&&(j=n),r}function V(){return z(!0)}function ie(){T!==null&&(clearInterval(T),T=null),E!==null&&(clearInterval(E),E=null),D!==null&&(clearTimeout(D),D=null)}function ae(e=!1){let t=v;if(_=!1,v=null,y=[],b!==null&&(clearInterval(b),b=null),S!==null&&(clearInterval(S),S=null),e&&t&&typeof fetch==`function`)try{fetch(`/api/mp`,{method:`POST`,keepalive:!0,headers:{"content-type":`application/json`,"x-meadow-client":`1`,...i?.()||{}},body:JSON.stringify({sessionId:t,disconnect:!0})}).catch(()=>{})}catch{}}let oe=0;async function se(){if(m||!_||x||typeof fetch!=`function`)return;t&&z(!1),x=!0;let e=y.splice(0,y.length);try{let n=await fetch(`/api/mp`,{method:`POST`,headers:{"content-type":`application/json`,"x-meadow-client":`1`,...i?.()||{}},body:JSON.stringify({...v?{sessionId:v}:{},events:e})});if(!n.ok){oe+=1,(n.status===403||n.status===404||oe>=5)&&ae(!1);return}if(!(n.headers.get(`content-type`)||``).includes(`application/json`)){ae(!1);return}oe=0;let r=await n.json();if(!r?.ok||!_||m)return;let a=r.sessionId&&r.sessionId!==v;if(typeof r.sessionId==`string`&&(v=r.sessionId),a&&t&&!e.some(e=>e.t===`hello`)&&te(),Array.isArray(r.messages))for(let e of r.messages)ue(e)}catch{oe+=1,oe>=5&&ae(!1)}finally{x=!1}}function ce(){m||_||P()||(_=!0,v=null,y=[],O=null,k=0,t&&te(),se(),b=setInterval(()=>{se()},$p),S=setInterval(()=>{!m&&_&&!p&&fe(!0)},tm))}function le(){if(m||C!==null||_)return;let e=Math.min(om,Math.round(am*sm**+w));w+=1,C=setTimeout(()=>{C=null,fe()},e)}function ue(e){if(e&&typeof e==`object`&&typeof e.type==`string`){if(e.type===`world_updated`||e.type===`creation_placed`||e.type===`queue_tick`||e.type===`pong`||!e.type.startsWith(`mp_`))a?.(e);else if(t)switch(e.type){case`mp_welcome`:h=typeof e.selfId==`string`?e.selfId:null,typeof e.onlineCount==`number`&&(g=Math.max(1,Math.trunc(e.onlineCount)),f?.(g)),o?.(e);break;case`mp_join`:typeof e.onlineCount==`number`&&N(e.onlineCount),e.player&&e.player.id&&e.player.id!==h&&s?.(e.player,e);break;case`mp_pose`:e.id&&e.id!==h&&c?.(e);break;case`mp_profile`:e.id&&e.id!==h&&l?.(e);break;case`mp_emote`:e.id&&e.id!==h&&u?.(e);break;case`mp_leave`:typeof e.onlineCount==`number`&&N(e.onlineCount),e.id&&e.id!==h&&d?.(e.id,e)}}}function de(e){let t;try{t=typeof e==`string`?JSON.parse(e):e}catch{return}ue(t)}function fe(e=!1){if(m||typeof location>`u`)return;if(typeof WebSocket>`u`){ce();return}if(p&&(p.readyState===WebSocket.OPEN||p.readyState===WebSocket.CONNECTING))return;let n=location.protocol===`https:`?`wss:`:`ws:`,r;try{r=new WebSocket(`${n}//${location.host}/ws`)}catch{e||ce();return}p=r;let i=!1,a=setTimeout(()=>{if(p===r&&r.readyState!==WebSocket.OPEN){try{r.close()}catch{}p=null,ce()}},em);r.addEventListener(`open`,()=>{if(clearTimeout(a),m||p!==r)try{r.close(1e3,`Disposed`)}catch{}else i=!0,_&&ae(!0),w=0,O=null,k=0,ie(),T=setInterval(()=>{if(p===r&&r.readyState===WebSocket.OPEN)try{r.send(`ping`)}catch{}},Zp),t&&(te(),E=setInterval(()=>{z(!1)},Qp))}),r.addEventListener(`message`,e=>{m||p!==r||de(String(e.data))}),r.addEventListener(`close`,()=>{clearTimeout(a),p===r&&(p=null,ie(),i?(h=null,O=null,t&&N(0),le()):ce())}),r.addEventListener(`error`,()=>{})}function pe(){m||typeof document>`u`||document.visibilityState===`visible`&&(F()?t&&V():(!p||typeof WebSocket<`u`&&p.readyState===WebSocket.CLOSED)&&(C!==null&&(clearTimeout(C),C=null),w=0,fe()))}function me(){m||F()||(C!==null&&(clearTimeout(C),C=null),w=0,fe())}function he(){C!==null&&(clearTimeout(C),C=null),ie(),ae(!0);let e=p;if(p=null,h=null,O=null,e)try{e.close(1e3,`unload`)}catch{}}function ge(e){m||e&&e.persisted&&!F()&&(w=0,fe())}typeof document<`u`&&typeof document.addEventListener==`function`&&document.addEventListener(`visibilitychange`,pe),typeof window<`u`&&typeof window.addEventListener==`function`&&(window.addEventListener(`online`,me),window.addEventListener(`pagehide`,he),window.addEventListener(`beforeunload`,he),window.addEventListener(`pageshow`,ge)),fe();function _e(){if(m)return;m=!0,C!==null&&(clearTimeout(C),C=null),ie(),ae(!0),typeof document<`u`&&typeof document.removeEventListener==`function`&&document.removeEventListener(`visibilitychange`,pe),typeof window<`u`&&typeof window.removeEventListener==`function`&&(window.removeEventListener(`online`,me),window.removeEventListener(`pagehide`,he),window.removeEventListener(`beforeunload`,he),window.removeEventListener(`pageshow`,ge));let e=p;if(p=null,h=null,g=0,O=null,e)try{e.close(1e3,`Client disposed`)}catch{}}return{sendProfile:re,sendEmote:B,forcePoseSync:V,getSelfId:()=>h,getOnlineCount:()=>g,getTransport:()=>P()?`ws`:_?`http`:`connecting`,isConnected:F,dispose:_e}}var Tm=new URLSearchParams(location.search).get(`og`)===`1`;Tm&&(document.body.dataset.ogCapture=`1`);var Em=document.getElementById(`world-canvas`),Dm=document.getElementById(`add-btn`),Om=document.getElementById(`pick-spot-pill`),km=document.getElementById(`cancel-pick-btn`),Am=document.getElementById(`bottom-builder`),jm=document.getElementById(`move-spot-btn`),Mm=document.getElementById(`close-builder-btn`),Nm=document.getElementById(`drop-zone`),Pm=document.getElementById(`image-input`),Fm=document.getElementById(`drop-empty`),Im=document.getElementById(`drop-preview-wrap`),Lm=document.getElementById(`drop-preview-img`),Rm=document.getElementById(`clear-image-btn`),zm=document.getElementById(`prompt-input`),Bm=document.getElementById(`sculpt-btn`),Vm=document.getElementById(`form-error`),Hm=document.getElementById(`building-pill`),Um=document.getElementById(`building-pill-label`),Wm=document.getElementById(`building-pill-sub`),Gm=document.getElementById(`ready-goto-btn`),Km=document.getElementById(`ready-goto-label`),qm=document.getElementById(`locate-mine-btn`),Jm=document.getElementById(`locate-mine-label`),Ym=document.getElementById(`hover-card`),Xm=document.getElementById(`hover-name`),Zm=document.getElementById(`hover-feed`),Qm=document.getElementById(`hover-status`),$m=document.getElementById(`weave-toast`),eh=document.getElementById(`cam-pan-btn`),th=document.getElementById(`cam-orbit-btn`),nh=document.getElementById(`cam-walk-btn`),rh=document.getElementById(`recenter-btn`),ih=document.getElementById(`recenter-compass`),ah=document.getElementById(`avatar-btn`),oh=document.getElementById(`avatar-swatch-dot`),sh=document.getElementById(`online-pill`),ch=document.getElementById(`online-count`),lh=document.getElementById(`interact-prompt`),uh=document.getElementById(`interact-key`),dh=document.getElementById(`interact-label`),fh=document.getElementById(`walk-esc-hint`),ph=document.getElementById(`avatar-dialog`),mh=document.getElementById(`walk-joystick`),hh=document.getElementById(`walk-joystick-knob`),gh=document.getElementById(`walk-joy-up`),_h=document.getElementById(`walk-joy-down`),vh=document.getElementById(`walk-joy-left`),yh=document.getElementById(`walk-joy-right`),bh=document.getElementById(`mobile-fps-actions`),xh=document.getElementById(`mobile-sprint-btn`),Sh=document.getElementById(`mobile-jump-btn`),Ch=document.getElementById(`gfx-btn`),wh=document.getElementById(`gfx-popover`),Th=document.getElementById(`gfx-close-btn`),Eh=document.getElementById(`gfx-preset-grid`),Dh=document.getElementById(`gfx-res-slider`),Oh=document.getElementById(`gfx-res-value`),kh=document.getElementById(`gfx-fps-toggle`),Ah=document.getElementById(`gfx-fps-readout`),jh=document.getElementById(`gfx-landscape-btn`),Mh=document.getElementById(`fps-hud-pill`),Nh=document.getElementById(`fps-hud-val`),Ph=document.getElementById(`fps-hud-preset`),Fh=document.getElementById(`landscape-banner`),Ih=document.getElementById(`landscape-lock-btn`),Lh=document.getElementById(`landscape-dismiss-btn`),Rh=`geminisland_gfx_v1`,zh=(()=>{try{let e=typeof localStorage<`u`?localStorage.getItem(Rh):null;return e?JSON.parse(e):null}catch{return null}})(),Bh=!!zh?.showFps,Vh=!1;function Hh(e={}){let t=$?.getGraphicsSettings?.()||{},n={preset:e.preset??t.preset??zh?.preset??`high`,resolutionScale:e.resolutionScale??t.resolutionScale??zh?.resolutionScale??1,showFps:e.showFps??Bh};zh=n;try{typeof localStorage<`u`&&localStorage.setItem(Rh,JSON.stringify(n))}catch{}}var Uh=`idle`,Wh=null,Gh=null,Kh=null,qh=null,Jh=null,Yh=null,Xh=null,Zh=null,Qh=!1,$h=`geminisland_visitor_token_v1`,eg=(()=>{try{return typeof localStorage<`u`?localStorage.getItem($h):null}catch{return null}})(),tg=(()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone||``}catch{return``}})();function ng(e){if(typeof e==`string`&&e.includes(`.`)){eg=e;try{typeof localStorage<`u`&&localStorage.setItem($h,e)}catch{}}}function rg(e={}){let t={...e};return eg&&(t[`x-meadow-visitor`]=eg),tg&&(t[`x-meadow-tz`]=tg),t}window.__geminIslandVisitorHeaders=rg;function ig(e,t=4200){e&&!Tm&&($m.textContent=e,$m.hidden=!1,Yh&&clearTimeout(Yh),Yh=setTimeout(()=>{$m.hidden=!0},t))}function ag(){Wm&&(Wm.textContent=`Being built with Gemini 4 Hydrogen`),Um.textContent=Xh?Xh.status===`queued`&&Xh.position>=1?Xh.position===1?`Next in queue…`:`Waiting in queue (#${Xh.position})…`:Xh.phase===`approving`?`Approving query…`:Xh.phase===`reviewing`?`Reviewing 3D model…`:Xh.phase===`refining`?`Polishing details…`:Xh.phase===`placing`?`Placing on island…`:`Sculpting voxels…`:`Approving query…`}function og(){Xh=null,Zh&&=(clearInterval(Zh),null)}var $=null,sg=null,cg=null,lg=null,ug=-1e3,dg=`pan`,fg=!1,pg=null;function mg(e){if(!oh||!e||typeof e!=`object`)return;let t=typeof e.topColor==`string`&&e.topColor||typeof e.hatColor==`string`&&e.hatColor||`#4c82d4`;oh.style.backgroundColor=t}function hg(e){sh&&(Tm||typeof e!=`number`||!Number.isFinite(e)||e<1?sh.hidden=!0:(ch&&(ch.textContent=String(Math.max(1,Math.trunc(e)))),sh.hidden=!1))}function gg(){return fg||typeof window<`u`&&window.Capacitor?.isNativePlatform?.()||window.matchMedia?.(`(pointer: coarse)`)?.matches||navigator.maxTouchPoints>0&&window.innerWidth<=1024?!0:window.innerWidth<=768||window.innerHeight<=460}function _g(){if(!xh)return;let e=!!$?.getMobileSprint?.();xh.classList.toggle(`is-active`,e),xh.setAttribute(`aria-pressed`,e?`true`:`false`)}function vg(){pg=null,mh?.classList.remove(`is-active`),hh?.setAttribute(`transform`,`translate(0 0)`),gh?.classList.remove(`is-lit`),_h?.classList.remove(`is-lit`),vh?.classList.remove(`is-lit`),yh?.classList.remove(`is-lit`),$?.setJoystickInput(0,0)}function yg(){let e=!Tm&&dg===`walk`&&gg();mh&&(mh.hidden=!e),bh&&(bh.hidden=!e),e?(document.body.dataset.walkMobile=`1`,_g()):(delete document.body.dataset.walkMobile,vg(),$?.setMobileSprint?.(!1),_g())}function bg(){if(!Fh)return;if(Tm||Vh){Fh.hidden=!0;return}let e=fg||!!window.matchMedia?.(`(pointer: coarse)`)?.matches||window.innerWidth<=920,t=window.innerHeight>window.innerWidth*1.05&&window.innerWidth<=640;Fh.hidden=!(e&&t)}async function xg(){try{let e=document.documentElement;!document.fullscreenElement&&typeof e.requestFullscreen==`function`&&await e.requestFullscreen({navigationUI:`hide`})}catch{}try{screen.orientation&&typeof screen.orientation.lock==`function`&&await screen.orientation.lock(`landscape`)}catch{}Vh=!0,bg(),ig(`Landscape fullscreen mode active`,2600)}function Sg(e){let t=e||$?.getGraphicsSettings?.();if(!t)return;let n=t.preset||`high`,r=Math.round((t.resolutionScale||1)*100);Eh&&Eh.querySelectorAll(`[data-gfx-preset]`).forEach(e=>{let t=e.getAttribute(`data-gfx-preset`)===n;e.classList.toggle(`is-active`,t),e.setAttribute(`aria-checked`,t?`true`:`false`)}),Dh&&document.activeElement!==Dh&&(Dh.value=String(r)),Oh&&(Oh.textContent=`${r}%`),Ph&&(Ph.textContent=n.toUpperCase()),kh&&(kh.checked=Bh),Mh&&(Mh.hidden=Tm||!Bh),typeof t.fps==`number`&&t.fps>0&&Cg(t.fps,n)}function Cg(e,t){let n=Math.max(1,Math.min(240,Math.round(e||60)));Ah&&(Ah.textContent=`${n} FPS`),Nh&&(Nh.textContent=`${n} FPS`),Ph&&t&&(Ph.textContent=String(t).toUpperCase()),Mh&&Mh.classList.toggle(`is-warn`,n<35)}function wg(e){dg=e;let t=e===`pan`,n=e===`orbit`,r=e===`walk`;eh&&(eh.classList.toggle(`is-active`,t),eh.setAttribute(`aria-pressed`,t?`true`:`false`)),th&&(th.classList.toggle(`is-active`,n),th.setAttribute(`aria-pressed`,n?`true`:`false`)),nh&&(nh.classList.toggle(`is-active`,r),nh.setAttribute(`aria-pressed`,r?`true`:`false`)),yg(),fh&&(fh.hidden=Tm||!r||gg())}var Tg=new WeakMap;function Eg(e){wg(e);let t=e===`walk`?nh:e===`orbit`?th:eh;if(!t||Tm)return;let n=Tg.get(t);n&&clearTimeout(n),t.classList.remove(`is-demo-click`),t.offsetWidth,t.classList.add(`is-demo-click`),Tg.set(t,setTimeout(()=>{t.classList.remove(`is-demo-click`)},740))}var Dg=new Map;async function Og(e){if(Tm||!e||typeof e.vehicleId!=`string`)return;let t=Date.now();if(!(t-(Dg.get(e.vehicleId)||0)<25e3)){Dg.set(e.vehicleId,t);try{await fetch(`/api/traffic-incident`,{method:`POST`,headers:rg({"content-type":`application/json`,"x-meadow-client":`1`}),body:JSON.stringify({vehicleId:e.vehicleId,peerVehicleId:e.peerVehicleId||null,x:e.x,z:e.z,reason:e.reason||`self_restored`})})}catch{}}}$=Kp(Em,{onHoverCreation(e,t,n,r){!e||Uh===`picking`||Tm||lg&&$?.isFirstPerson?.()?Ym.hidden=!0:(Xm.textContent=e.name,r?.summary?(Zm.textContent=r.summary,Zm.hidden=!1):Zm.hidden=!0,Qm.textContent=e.description||e.behavior?.statusLine||``,Ym.style.left=`${t}px`,Ym.style.top=`${n}px`,Ym.hidden=!1)},onSelectCreation(e,t){if(!e||Tm)return;let n=e.description||e.behavior?.statusLine||``,r=t?.summary?n?`${t.summary} · ${n}`:t.summary:n;ig(r?`${e.name} — ${r}`:e.name)},onInteractiveEvent(e,t){t&&!Tm&&ig(t)},onPickGroundSpot(e,t){Jh={x:e,z:t},Uh=`composing`,Mg(),window.innerWidth>640&&zm.focus({preventScroll:!0})},onAutoNudgeSpot(e,t){Jh&&={x:e,z:t}},onDragModeChange(e){wg(e)},onIntroDemoStep(e){Eg(e)},onCameraChange(e){if(ih&&typeof e?.azDeltaFromHome==`number`){let t=(e.azDeltaFromHome*180/Math.PI).toFixed(1);ih.setAttribute(`transform`,`rotate(${t} 12 12)`)}},onInteractionPromptChange(e){lg=e||null,lh&&(!e||Tm?lh.hidden=!0:(uh&&(uh.textContent=e.keyHint||`E`),dh&&(dh.textContent=e.label||`Interact`),lh.hidden=!1,$?.isFirstPerson?.()&&(Ym.hidden=!0)))},onLocalEmote(e){cg?.sendEmote(e)},onInteriorChange(e){e?(document.body.dataset.inInterior=`1`,(Uh===`picking`||Uh===`composing`)&&(Lg(),Jh=null,Uh=`idle`,Mg())):delete document.body.dataset.inInterior,Ym.hidden=!0,cg?.forcePoseSync()},onTrafficIncident(e){Og(e)},onFpsUpdate(e,t){Cg(e,t)},onGraphicsChange(e){Sg(e)}},{ogMode:Tm}),zh&&!Tm&&$.setGraphicsSettings({preset:zh.preset,resolutionScale:zh.resolutionScale,lock:!!zh.preset}),Sg($.getGraphicsSettings()),bg(),window.__geminIslandCam=()=>$.getCameraState(),window.__geminIslandEngine=$;function kg(){wh&&!wh.hidden&&(wh.hidden=!0,Ch?.classList.remove(`is-active`),Ch?.setAttribute(`aria-expanded`,`false`))}function Ag(){wh&&!Tm&&(wh.hidden?(Ym.hidden=!0,$?.releaseWalkPointerLock?.(),Sg($?.getGraphicsSettings?.()),wh.hidden=!1,Ch?.classList.add(`is-active`),Ch?.setAttribute(`aria-expanded`,`true`)):kg())}if(Ch?.addEventListener(`click`,e=>{e.stopPropagation(),Ag()}),Th?.addEventListener(`click`,e=>{e.stopPropagation(),kg()}),Eh?.addEventListener(`click`,e=>{let t=e.target instanceof Element?e.target.closest(`[data-gfx-preset]`):null;if(!t)return;let n=t.getAttribute(`data-gfx-preset`);if(!n)return;let r=$?.setGraphicsSettings?.({preset:n,lock:!0});Hh({preset:r?.preset||n}),Sg(r)}),Dh?.addEventListener(`input`,()=>{let e=Number(Dh.value)||100,t=Math.max(.5,Math.min(1.5,e/100));Oh&&(Oh.textContent=`${Math.round(t*100)}%`);let n=$?.setGraphicsSettings?.({resolutionScale:t,lock:!0});Hh({resolutionScale:n?.resolutionScale??t})}),kh?.addEventListener(`change`,()=>{Bh=!!kh.checked,Mh&&(Mh.hidden=Tm||!Bh),Hh({showFps:Bh})}),jh?.addEventListener(`click`,()=>{xg()}),Ih?.addEventListener(`click`,()=>{xg()}),Lh?.addEventListener(`click`,()=>{Vh=!0,bg()}),window.addEventListener(`pointerdown`,e=>{if(!wh||wh.hidden)return;let t=e.target;t instanceof Node&&!wh.contains(t)&&(!Ch||!Ch.contains(t))&&kg()}),Sh){Sh.addEventListener(`contextmenu`,e=>e.preventDefault()),Sh.addEventListener(`pointerdown`,e=>{e.stopPropagation(),e.preventDefault(),Sh.classList.add(`is-pressed`),$?.triggerMobileJump?.()});let e=()=>Sh.classList.remove(`is-pressed`);Sh.addEventListener(`pointerup`,e),Sh.addEventListener(`pointercancel`,e),Sh.addEventListener(`pointerleave`,e)}xh&&(xh.addEventListener(`contextmenu`,e=>e.preventDefault()),xh.addEventListener(`pointerdown`,e=>{e.stopPropagation(),e.preventDefault();let t=!$?.getMobileSprint?.();$?.setMobileSprint?.(t),_g()})),lh?.addEventListener(`click`,e=>{e.stopPropagation(),$?.triggerActiveInteraction?.(),lh.blur()}),sg=Xp({dialogEl:ph,onChange(e){$?.setLocalAppearance?.(e),mg(e)},onSave(e){$?.setLocalAppearance?.(e),mg(e),cg?.sendProfile(e)}}),ph?.addEventListener(`close`,()=>{ug=performance.now(),ah?.blur(),queueMicrotask(()=>ah?.blur())}),ph?.querySelector(`[data-cb-action="wave"]`)?.addEventListener(`click`,()=>{$?.triggerLocalWave?.(),cg?.sendEmote(`wave`)}),mg($?.getLocalAppearance?.()||sg?.getAppearance?.()),ah?.addEventListener(`click`,()=>{Tm||(kg(),ah?.blur(),Ym.hidden=!0,vg(),$?.releaseWalkPointerLock?.(),sg?.open($?.getLocalAppearance?.()))}),fh?.addEventListener(`click`,()=>{Ym.hidden=!0,$?.setDragMode(`pan`),fh.blur()}),window.__geminIslandCharacterBuilder=sg,eh?.addEventListener(`click`,()=>{$.setDragMode(`pan`)}),th?.addEventListener(`click`,()=>{$.setDragMode(`orbit`)}),nh?.addEventListener(`click`,()=>{Ym.hidden=!0,$.isFirstPerson()?$.setDragMode(`pan`):((Uh===`picking`||Uh===`composing`)&&(Lg(),Jh=null,Uh=`idle`,Mg()),$.setDragMode(`walk`),nh.blur())}),rh?.addEventListener(`click`,()=>{$.recenterCamera(),$.setDragMode(`pan`)}),window.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`&&!fg&&(fg=!0,yg(),bg())},{passive:!0}),window.addEventListener(`resize`,()=>{yg(),bg(),fh&&(fh.hidden=Tm||dg!==`walk`||gg())}),window.addEventListener(`orientationchange`,()=>{yg(),bg()}),window.addEventListener(`blur`,()=>{pg!==null&&vg()}),document.addEventListener(`visibilitychange`,()=>{document.visibilityState!==`visible`&&pg!==null&&vg()});function jg(e,t){if(!mh)return;let n=mh.getBoundingClientRect(),r=n.left+n.width*.5,i=n.top+n.height*.5,a=Math.max(24,n.width*.31),o=e-r,s=t-i,c=Math.hypot(o,s),l=Math.min(a,c),u=c>1e-4?o/c:0,d=c>1e-4?s/c:0,f=l/a*u*34,p=l/a*d*34;hh?.setAttribute(`transform`,`translate(${f.toFixed(1)} ${p.toFixed(1)})`);let m=l/a,h=.08,g=m<=h?0:(m-h)/.92,_=u*g,v=-d*g;gh?.classList.toggle(`is-lit`,v>.28),_h?.classList.toggle(`is-lit`,v<-.28),vh?.classList.toggle(`is-lit`,_<-.28),yh?.classList.toggle(`is-lit`,_>.28),$?.setJoystickInput(_,v)}if(mh){mh.addEventListener(`contextmenu`,e=>e.preventDefault()),mh.addEventListener(`pointerdown`,e=>{if(e.stopPropagation(),e.preventDefault(),pg===null){pg=e.pointerId,mh.classList.add(`is-active`),Ym.hidden=!0;try{mh.setPointerCapture(e.pointerId)}catch{}jg(e.clientX,e.clientY)}}),mh.addEventListener(`pointermove`,e=>{pg===e.pointerId&&(e.stopPropagation(),e.preventDefault(),jg(e.clientX,e.clientY))});let e=e=>{pg===e.pointerId&&(e.stopPropagation(),vg())};mh.addEventListener(`pointerup`,e),mh.addEventListener(`pointercancel`,e),mh.addEventListener(`lostpointercapture`,e)}function Mg(){if(!Tm)switch(Dm.hidden=!0,Om.hidden=!0,Am.hidden=!0,Hm.hidden=!0,Gm.hidden=!0,qm.hidden=!0,Wh&&Uh!==`ready`&&(Uh=`placed`),Uh){case`picking`:Om.hidden=!1,$.setSpotPickerState({mode:`picking`,...Jh?{x:Jh.x,z:Jh.z}:{}});break;case`composing`:Am.hidden=!1,$.setPreviewPrompt(zm.value),$.setSpotPickerState({mode:`staked`,x:Jh?.x??16,z:Jh?.z??10});break;case`building`:Hm.hidden=!1,ag(),$.setSpotPickerState({mode:`building`,x:Jh?.x??16,z:Jh?.z??10});break;case`ready`:Gm.hidden=!1,Km.textContent=`Ready · Go to ${Gh?.name||`your creation`}`,$.setSpotPickerState({mode:`hidden`});break;case`placed`:{qm.hidden=!1;let e=Kh?.creations?.find(e=>e.id===Wh);Jm.textContent=e?`Locate · ${e.name}`:`Locate yours`,$.setSpotPickerState({mode:`hidden`});break}default:Dm.hidden=!1,$.setSpotPickerState({mode:`hidden`})}}async function Ng(){if(Xh&&!Qh){Qh=!0;try{let e=await fetch(`/api/job?id=${encodeURIComponent(Xh.jobId)}`,{headers:rg()});if(!e.ok)return;let t=await e.json();if(t?.visitorToken&&ng(t.visitorToken),!t.ok||!t.job)return;let n=t.job;if(n.status===`done`){og(),Bm.disabled=!1,t.world&&(Kh=t.world,$.applyWorldSnapshot(Kh)),t.feeds&&$.applyLiveFeeds(t.feeds),Wh=n.creationId||t.world?.myCreationId||Wh,Gh=n.creation||Kh?.creations?.find(e=>e.id===Wh)||null,Uh=`ready`,Mg();return}if(n.status===`failed`){if(og(),Bm.disabled=!1,n.creationId){Wh=n.creationId,Uh=`placed`,Mg();return}Uh=`composing`,Mg(),Ig(n.error||`Could not build that right now — try again.`);return}Xh={...n},ag()}catch{}finally{Qh=!1}}}function Pg(e){og(),Xh={...e},Uh=`building`,Mg(),Zh=setInterval(()=>{Uh===`building`&&Xh&&Ng()},2500)}zm.addEventListener(`input`,()=>{$.setPreviewPrompt(zm.value)}),Dm.addEventListener(`click`,()=>{$.isFirstPerson()&&$.setDragMode(`pan`),Wh?(Uh=`placed`,Mg()):(Ym.hidden=!0,$.setPreviewPrompt(zm.value),Uh=`picking`,Mg())}),km.addEventListener(`click`,()=>{Jh=null,Uh=`idle`,Mg()}),jm.addEventListener(`click`,()=>{Uh=`picking`,Mg()}),Mm.addEventListener(`click`,()=>{Lg(),Jh=null,Uh=`idle`,Mg()}),window.addEventListener(`keydown`,e=>{if(e.key===`Escape`){if(wh&&!wh.hidden){e.preventDefault(),kg();return}if(sg?.isOpen?.()||ph&&(ph.open||e.target instanceof Node&&ph.contains(e.target))||performance.now()-ug<80)return;Uh===`picking`||Uh===`composing`?(e.preventDefault(),Lg(),Jh=null,Uh=`idle`,Mg()):$.isFirstPerson()&&(e.preventDefault(),Ym.hidden=!0,$.setDragMode(`pan`))}}),Em.addEventListener(`pointerleave`,()=>{Ym.hidden=!0}),Gm.addEventListener(`click`,()=>{if(!Wh)return;Ym.hidden=!0,Uh=`placed`,Mg(),$.focusCreationById(Wh);let e=Kh?.creations?.find(e=>e.id===Wh)||Gh;if(e){let t=e.description||e.behavior?.statusLine||``;ig(t?`${e.name} — ${t}`:e.name,4600)}}),qm.addEventListener(`click`,()=>{if(!Wh)return;Ym.hidden=!0,$.focusCreationById(Wh);let e=Kh?.creations?.find(e=>e.id===Wh);if(e){let t=e.description||e.behavior?.statusLine||``;ig(t?`${e.name} — ${t}`:e.name)}});async function Fg(e){return new Promise((t,n)=>{let r=new FileReader;r.onerror=()=>n(Error(`Could not read image file`)),r.onload=()=>{let e=new Image;e.onerror=()=>n(Error(`Unsupported image format`)),e.onload=()=>{let{width:n,height:r}=e;(n>960||r>960)&&(n>=r?(r=Math.round(r*960/n),n=960):(n=Math.round(n*960/r),r=960));let i=document.createElement(`canvas`);i.width=Math.max(1,n),i.height=Math.max(1,r);let a=i.getContext(`2d`);a.fillStyle=`#ffffff`,a.fillRect(0,0,i.width,i.height),a.drawImage(e,0,0,i.width,i.height),t(i.toDataURL(`image/jpeg`,.86))},e.src=String(r.result)},r.readAsDataURL(e)})}function Ig(e){Vm.textContent=e,Vm.hidden=!1}function Lg(){Vm.hidden=!0}async function Rg(e){if(!e||!e.type.startsWith(`image/`))Ig(`Choose a PNG, JPG, or WebP image.`);else{Lg();try{qh=await Fg(e),Lm.src=qh,Fm.hidden=!0,Im.hidden=!1}catch(e){Ig(e.message||`Could not process that image.`)}}}Pm.addEventListener(`change`,()=>{let e=Pm.files?.[0];e&&Rg(e)}),Rm.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),qh=null,Pm.value=``,Lm.removeAttribute(`src`),Im.hidden=!0,Fm.hidden=!1}),Nm.addEventListener(`dragover`,e=>{e.preventDefault(),Nm.classList.add(`dragover`)}),Nm.addEventListener(`dragleave`,()=>{Nm.classList.remove(`dragover`)}),Nm.addEventListener(`drop`,e=>{e.preventDefault(),Nm.classList.remove(`dragover`);let t=e.dataTransfer?.files?.[0];t&&Rg(t)}),window.addEventListener(`paste`,e=>{if(Uh!==`composing`)return;let t=e.clipboardData?.items||[];for(let e of t)if(e.type.startsWith(`image/`)){let t=e.getAsFile();t&&Rg(t);break}}),Bm.addEventListener(`click`,async()=>{if(Uh===`building`)return;Lg();let e=zm.value.trim();if(!e&&!qh){Ig(`Add a photo or short description first.`);return}$.setPreviewPrompt(e);let t=Jh?.x??null,n=Jh?.z??null;Uh=`building`,Bm.disabled=!0,Um.textContent=`Approving query…`,Wm&&(Wm.textContent=`Being built with Gemini 4 Hydrogen`),Mg();try{let r=await fetch(`/api/build`,{method:`POST`,headers:rg({"content-type":`application/json`,"x-meadow-client":`1`}),body:JSON.stringify({prompt:e,imageDataUrl:qh||void 0,x:t,z:n})}),i=await r.json();if(i?.visitorToken&&ng(i.visitorToken),!r.ok||!i.ok){if(Bm.disabled=!1,i.alreadyPlaced&&i.myCreationId){Wh=i.myCreationId,Uh=`placed`,Mg();return}Uh=`composing`,Mg(),Ig(i.error||`Could not build that right now — try again.`);return}if(i.job){Pg(i.job);return}Bm.disabled=!1,Kh=i.world,Wh=i.creation.id,Gh=i.creation,i.feeds&&$.applyLiveFeeds(i.feeds),$.applyWorldSnapshot(Kh),Uh=`ready`,Mg()}catch{Bm.disabled=!1,Uh=`composing`,Mg(),Ig(zg?`Offline APK mode — connect to a live GeminIsland server to sculpt new AI creations.`:`Network hiccup while building — try again.`)}}),zm.addEventListener(`keydown`,e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),Bm.click())});var zg=!1;async function Bg(){if(!zg)try{let e=await fetch(`/api/feeds`);if(!e.ok||!(e.headers.get(`content-type`)||``).includes(`application/json`))return;let t=await e.json();t.ok&&t.feeds&&$.applyLiveFeeds(t.feeds)}catch{}}async function Vg(){if(!(Tm||zg||Uh===`building`||Uh===`ready`))try{let e=await fetch(`/api/world`,{headers:rg()});if(!e.ok||!(e.headers.get(`content-type`)||``).includes(`application/json`))return;let t=await e.json();t?.visitorToken&&ng(t.visitorToken),Kh=t,Wh=t.myCreationId||null,$.applyWorldSnapshot(Kh),t.myActiveJob&&!Wh?Pg(t.myActiveJob):!Wh&&Uh===`placed`&&(Uh=`idle`,Mg())}catch{}}document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&(Uh===`building`&&Xh?Ng():Vg())});function Hg(e){if(e&&typeof e==`object`){if(e.type===`queue_tick`&&Xh&&Uh===`building`){let t=Array.isArray(e.queuedIds)?e.queuedIds.indexOf(Xh.jobId):-1,n=Array.isArray(e.sculpting)?e.sculpting.find(e=>e.jobId===Xh.jobId):null;t>=0?(Xh.status=`queued`,Xh.phase=`queued`,Xh.position=t+1,ag()):n&&(Xh.status=`sculpting`,n.phase?Xh.phase=n.phase:Xh.phase===`queued`&&(Xh.phase=`sculpting`),Xh.position=0,ag()),Ng()}else(e.type===`creation_placed`||e.type===`world_updated`)&&e.world&&(Kh={...e.world,myCreationId:Wh},$.applyWorldSnapshot(Kh),Uh===`building`&&Xh?Ng():(Uh===`placed`||Uh===`ready`)&&Mg(),Bg(),e.type===`creation_placed`&&e.creation&&e.creation.id!==Wh&&Uh!==`building`&&ig(`Someone added "${e.creation.name}" to GeminIsland!`,4200))}}var Ug=typeof window<`u`&&!!window.Capacitor?.isNativePlatform?.();!Tm&&!Ug&&(cg=wm({multiplayerEnabled:!Tm,getLocalPose:()=>$?.getLocalMultiplayerPose?.(),getLocalProfile:()=>$?.getLocalAppearance?.(),getExtraHeaders:()=>rg(),onWorldMessage:Hg,onWelcome(e){$?.syncMultiplayerWelcome?.(e?.players||[]),typeof e?.onlineCount==`number`&&hg(e.onlineCount)},onPeerJoin(e,t){$?.upsertRemotePlayer?.(e),typeof t?.onlineCount==`number`&&hg(t.onlineCount)},onPeerPose(e){$?.updateRemotePlayerPose?.(e)},onPeerProfile(e){$?.updateRemotePlayerProfile?.(e)},onPeerEmote(e){$?.triggerRemotePlayerEmote?.(e)},onPeerLeave(e,t){$?.removeRemotePlayer?.(e),typeof t?.onlineCount==`number`&&hg(t.onlineCount)},onOnlineCountChange(e){hg(e)}})),window.__geminIslandMp=cg;async function Wg(){let e=await fetch(`/world-seed.json`);if(!e.ok)throw Error(`Bundled seed HTTP ${e.status}`);let t=await e.json();return{version:t.version||1,creations:Array.isArray(t.creations)?t.creations:[],myCreationId:null,myActiveJob:null}}async function Gg(){let e=!1;if(!Ug)try{let t=await fetch(`/api/world`,{headers:rg()}),n=t.headers.get(`content-type`)||``;t.ok&&n.includes(`application/json`)&&(Kh=await t.json(),Kh?.visitorToken&&ng(Kh.visitorToken),Wh=Kh.myCreationId||Wh||null,e=!0)}catch{}if(!e)try{Kh=await Wg(),zg=!0}catch(e){console.error(`Failed to fetch initial world:`,e)}Kh&&($.applyWorldSnapshot(Kh),Tm||(Wh?(Uh=`placed`,Mg()):Kh.myActiveJob?Pg(Kh.myActiveJob):(Uh=`idle`,Mg()))),Bg(),!Tm&&!zg&&(setInterval(Bg,9e4),setInterval(Vg,6e5))}Gg();