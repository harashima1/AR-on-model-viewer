import{n as g,x as je,D as ba,u as ga}from"./vendor-CyzJZPUM.js";import{A as va,a as ya,N as wa,D as Sa,C as Y,S as Ea,b as xa,V as Ne,M as Ca,P as Ta,T as pe,$ as x,c as M,d as Aa,e as kn,O as Ma,R as ht,W as Ra,f as Bt,g as Ue,h as Fn,i as Dn,F,j as qe,L as We,k as Vn,l as Pn,m as Nn,n as Un,o as de,p as zn,q as Ze,r as Hn,s as ei,t as Ia,u as _a,v as La,G as Oa,w as $a,x as ka,y as q,z as si,B as Fa,E as Da,H as Va,I as Pa,J as Na,K as Kt,Q as Ua,U as za,X as Ha}from"./three-BbVIs4F1.js";/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,jn=Bn&&self.XRSession.prototype.requestHitTestSource!=null,Ye=self.ResizeObserver!=null,Je=self.IntersectionObserver!=null,qn=jn;(()=>{const a=navigator.userAgent||navigator.vendor||self.opera;let t=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(t=!0),t})();const Ba=/android/i.test(navigator.userAgent),ja=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,qa=/firefox/i.test(navigator.userAgent),Wa=/OculusBrowser/.test(navigator.userAgent),Ga=Ba&&!qa&&!Wa,Xa=!!(window.webkit&&window.webkit.messageHandlers),ii=(()=>{if(ja){if(Xa)return!!/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent);{const a=document.createElement("a");return!!(a.relList&&a.relList.supports&&a.relList.supports("ar"))}}else return!1})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=a=>a&&a!=="null"?Qa(a):null,Lr=()=>{if(qn)return;const a=[];throw Bn||a.push("WebXR Device API"),jn||a.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${a.join(", ")}`)},Qa=a=>new URL(a,window.location.toString()).toString(),Za=(a,t)=>{let e=null;const i=(...s)=>{e==null&&(a(...s),e=self.setTimeout(()=>e=null,t))};return i.flush=()=>{e!=null&&(self.clearTimeout(e),e=null)},i},ni=(a,t)=>{let e=null;return(...i)=>{e!=null&&self.clearTimeout(e),e=self.setTimeout(()=>{e=null,a(...i)},t)}},Ge=(a,t,e)=>Math.max(t,Math.min(e,a)),Or=(()=>{const a="model-viewer-debug-mode",t=new RegExp(`[?&]${a}(&|$)`);return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(t)})(),$r=(a=0)=>new Promise(t=>setTimeout(t,a)),Ya=(a,t,e=null)=>new Promise(i=>{function s(r){(!e||e(r))&&(i(r),a.removeEventListener(t,s))}a.addEventListener(t,s)});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt=function(a,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,t,e,i);else for(var o=a.length-1;o>=0;o--)(n=a[o])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r};const Ja=.5,to=0,eo=1,so=1,ve=Symbol("currentEnvironmentMap"),ye=Symbol("currentBackground"),Gs=Symbol("updateEnvironment"),we=Symbol("cancelEnvironmentUpdate"),io=a=>{var t,e,i;class s extends a{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=to,this.shadowSoftness=eo,this.exposure=so,this.toneMapping="auto",this.skyboxHeight="0",this[t]=null,this[e]=null,this[i]=null}updated(n){super.updated(n),n.has("shadowIntensity")&&(this[u].setShadowIntensity(this.shadowIntensity*Ja),this[D]()),n.has("shadowSoftness")&&(this[u].setShadowSoftness(this.shadowSoftness),this[D]()),n.has("exposure")&&(this[u].exposure=this.exposure,this[D]()),n.has("toneMapping")&&(this[u].toneMapping=this.toneMapping==="aces"?va:this.toneMapping==="agx"?ya:wa,this[D]()),(n.has("environmentImage")||n.has("skyboxImage"))&&this[Wt]()&&this[Gs](),n.has("skyboxHeight")&&(this[u].setGroundedSkybox(),this[D]())}hasBakedShadow(){return this[u].bakedShadows.size>0}async[(t=ve,e=ye,i=we,Gs)](){const{skyboxImage:n,environmentImage:o}=this;this[we]!=null&&(this[we](),this[we]=null);const{textureUtils:l}=this[R];if(l==null)return;const c=this[St].beginActivity("environment-update");try{const{environmentMap:f,skybox:m}=await l.generateEnvironmentMapAndSkybox(Ka(n),o,b=>c(Ge(b,0,1)),this.withCredentials);this[ve]!==f&&(this[ve]=f,this.dispatchEvent(new CustomEvent("environment-change"))),m!=null?this[ye]=m.name===f.name?f:m:this[ye]=null,this[u].setEnvironmentAndSkybox(this[ve],this[ye])}catch(f){if(f instanceof Error)throw this[u].setEnvironmentAndSkybox(null,null),f}finally{c(1)}}}return pt([g({type:String,attribute:"environment-image"})],s.prototype,"environmentImage",void 0),pt([g({type:String,attribute:"skybox-image"})],s.prototype,"skyboxImage",void 0),pt([g({type:Number,attribute:"shadow-intensity"})],s.prototype,"shadowIntensity",void 0),pt([g({type:Number,attribute:"shadow-softness"})],s.prototype,"shadowSoftness",void 0),pt([g({type:Number})],s.prototype,"exposure",void 0),pt([g({type:String,attribute:"tone-mapping"})],s.prototype,"toneMapping",void 0),pt([g({type:String,attribute:"skybox-height"})],s.prototype,"skyboxHeight",void 0),s};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=je`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=je`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=je`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=je`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
  outline-offset: -1px;
  outline-width: 1px;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          role="button"
          href="javascript:void(0);"
          aria-label="View in your space">
        ${oo}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${ao}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${no}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,lo=a=>{ba(ro,a)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ai,oi;const j=Symbol("retainerCount"),J=Symbol("recentlyUsed"),Se=Symbol("evict"),Qt=Symbol("evictionThreshold"),ts=Symbol("cache");class kr{constructor(t,e=5){this[ai]=new Map,this[oi]=[],this[ts]=t,this[Qt]=e}set evictionThreshold(t){this[Qt]=t,this[Se]()}get evictionThreshold(){return this[Qt]}get cache(){return this[ts]}retainerCount(t){return this[j].get(t)||0}reset(){this[j].clear(),this[J]=[]}retain(t){this[j].has(t)||this[j].set(t,0),this[j].set(t,this[j].get(t)+1);const e=this[J].indexOf(t);e!==-1&&this[J].splice(e,1),this[J].unshift(t),this[Se]()}release(t){this[j].has(t)&&this[j].set(t,Math.max(this[j].get(t)-1,0)),this[Se]()}[(ai=j,oi=J,Se)](){if(!(this[J].length<this[Qt]))for(let t=this[J].length-1;t>=this[Qt];--t){const e=this[J][t];this[j].get(e)===0&&(this[ts].delete(e),this[J].splice(t,1))}}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=(a,t)=>({type:"number",number:a,unit:t}),Js=(()=>{const a={};return e=>{const i=e;if(i in a)return a[i];const s=[];let r=0;for(;e;){if(++r>1e3){e="";break}const n=Wn(e),o=n.nodes[0];if(o==null||o.terms.length===0)break;s.push(o),e=n.remainingInput}return a[i]=s}})(),Wn=(()=>{const a=/^(\-\-|[a-z\u0240-\uffff])/i,t=/^([\*\+\/]|[\-]\s)/i,e=/^[\),]/,i="(",s="#";return r=>{const n=[];for(;r.length&&(r=r.trim(),!e.test(r));)if(r[0]===i){const{nodes:o,remainingInput:l}=ri(r);r=l,n.push({type:"function",name:{type:"ident",value:"calc"},arguments:o})}else if(a.test(r)){const o=co(r),l=o.nodes[0];if(r=o.remainingInput,r[0]===i){const{nodes:c,remainingInput:f}=ri(r);n.push({type:"function",name:l,arguments:c}),r=f}else n.push(l)}else if(t.test(r))n.push({type:"operator",value:r[0]}),r=r.slice(1);else{const{nodes:o,remainingInput:l}=r[0]===s?uo(r):ho(r);if(o.length===0)break;n.push(o[0]),r=l}return{nodes:[{type:"expression",terms:n}],remainingInput:r}}})(),co=(()=>{const a=/[^a-z0-9_\-\u0240-\uffff]/i;return t=>{const e=t.match(a),i=e==null?t:t.substr(0,e.index),s=e==null?"":t.substr(e.index);return{nodes:[{type:"ident",value:i}],remainingInput:s}}})(),ho=(()=>{const a=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,t=/^[a-z%]+/i,e=/^(m|mm|cm|rad|deg|[%])$/;return i=>{const s=i.match(a),r=s==null?"0":s[0];i=r==null?i:i.slice(r.length);const n=i.match(t);let o=n!=null&&n[0]!==""?n[0]:null;const l=n==null?i:i.slice(o.length);return o!=null&&!e.test(o)&&(o=null),{nodes:[{type:"number",number:parseFloat(r)||0,unit:o}],remainingInput:l}}})(),uo=(()=>{const a=/^[a-f0-9]*/i;return t=>{t=t.slice(1).trim();const e=t.match(a);return{nodes:e==null?[]:[{type:"hex",value:e[0]}],remainingInput:e==null?t:t.slice(e[0].length)}}})(),ri=a=>{const t=[];for(a=a.slice(1).trim();a.length;){const e=Wn(a);if(t.push(e.nodes[0]),a=e.remainingInput.trim(),a[0]===",")a=a.slice(1).trim();else if(a[0]===")"){a=a.slice(1);break}}return{nodes:t,remainingInput:a}},li=Symbol("visitedTypes");class mo{constructor(t){this[li]=t}walk(t,e){const i=t.slice();for(;i.length;){const s=i.shift();switch(this[li].indexOf(s.type)>-1&&e(s),s.type){case"expression":i.unshift(...s.terms);break;case"function":i.unshift(s.name,...s.arguments);break}}}}const dt=Object.freeze({type:"number",number:0,unit:null});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=(a,t=0)=>{let{number:e,unit:i}=a;if(!isFinite(e))e=t,i="rad";else if(a.unit==="rad"||a.unit==null)return a;return{type:"number",number:(i==="deg"&&e!=null?e:0)*Math.PI/180,unit:"rad"}},ci=(a,t=0)=>{let{number:e,unit:i}=a;if(!isFinite(e))e=t,i="m";else if(a.unit==="m")return a;let s;switch(i){default:s=1;break;case"cm":s=1/100;break;case"mm":s=1/1e3;break}return{type:"number",number:s*e,unit:"m"}},me=(()=>{const a=e=>e,t={rad:a,deg:Xe,m:a,mm:ci,cm:ci};return(e,i=dt)=>{isFinite(e.number)||(e.number=i.number,e.unit=i.unit);const{unit:s}=e;if(s==null)return e;const r=t[s];return r==null?i:r(e)}})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn,hi,ui;const Gt=Symbol("evaluate"),Ve=Symbol("lastValue");class L{constructor(){this[Gn]=null}static evaluatableFor(t,e=dt){if(t instanceof L)return t;if(t.type==="number")return t.unit==="%"?new po(t,e):t;switch(t.name.value){case"calc":return new go(t,e);case"env":return new fo(t)}return dt}static evaluate(t){return t instanceof L?t.evaluate():t}static isConstant(t){return t instanceof L?t.isConstant:!0}static applyIntrinsics(t,e){const{basis:i,keywords:s}=e,{auto:r}=s;return i.map((n,o)=>{const l=r[o]==null?n:r[o];let c=t[o]?t[o]:l;if(c.type==="ident"){const f=c.value;f in s&&(c=s[f][o])}return(c==null||c.type==="ident")&&(c=l),c.unit==="%"?V(c.number/100*n.number,n.unit):(c=me(c,n),c.unit!==n.unit?n:c)})}get isConstant(){return!1}evaluate(){return(!this.isConstant||this[Ve]==null)&&(this[Ve]=this[Gt]()),this[Ve]}}Gn=Ve;const di=Symbol("percentage"),es=Symbol("basis");class po extends L{constructor(t,e){super(),this[di]=t,this[es]=e}get isConstant(){return!0}[Gt](){return V(this[di].number/100*this[es].number,this[es].unit)}}const Ee=Symbol("identNode");class fo extends L{constructor(t){super(),this[hi]=null;const e=t.arguments.length?t.arguments[0].terms[0]:null;e!=null&&e.type==="ident"&&(this[Ee]=e)}get isConstant(){return!1}[(hi=Ee,Gt)](){if(this[Ee]!=null)switch(this[Ee].value){case"window-scroll-y":const t=window.pageYOffset,e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);return{type:"number",number:t/(e-window.innerHeight)||0,unit:null}}return dt}}const bo=/[\*\/]/,At=Symbol("evaluator");class go extends L{constructor(t,e=dt){if(super(),this[ui]=null,t.arguments.length!==1)return;const i=t.arguments[0].terms.slice(),s=[];for(;i.length;){const r=i.shift();if(s.length>0){const n=s[s.length-1];if(n.type==="operator"&&bo.test(n.value)){const o=s.pop(),l=s.pop();if(l==null)return;s.push(new pi(o,L.evaluatableFor(l,e),L.evaluatableFor(r,e)));continue}}s.push(r.type==="operator"?r:L.evaluatableFor(r,e))}for(;s.length>2;){const[r,n,o]=s.splice(0,3);if(n.type!=="operator")return;s.unshift(new pi(n,L.evaluatableFor(r,e),L.evaluatableFor(o,e)))}s.length===1&&(this[At]=s[0])}get isConstant(){return this[At]==null||L.isConstant(this[At])}[(ui=At,Gt)](){return this[At]!=null?L.evaluate(this[At]):dt}}const mi=Symbol("operator"),ss=Symbol("left"),is=Symbol("right");class pi extends L{constructor(t,e,i){super(),this[mi]=t,this[ss]=e,this[is]=i}get isConstant(){return L.isConstant(this[ss])&&L.isConstant(this[is])}[Gt](){const t=me(L.evaluate(this[ss])),e=me(L.evaluate(this[is])),{number:i,unit:s}=t,{number:r,unit:n}=e;if(n!=null&&s!=null&&n!=s)return dt;const o=s||n;let l;switch(this[mi].value){case"+":l=i+r;break;case"-":l=i-r;break;case"/":l=i/r;break;case"*":l=i*r;break;default:return dt}return{type:"number",number:l,unit:o}}}const ns=Symbol("evaluatables"),fi=Symbol("intrinsics");class Xn extends L{constructor(t,e){super(),this[fi]=e;const i=t[0],s=i!=null?i.terms:[];this[ns]=e.basis.map((r,n)=>{const o=s[n];return o==null?{type:"ident",value:"auto"}:o.type==="ident"?o:L.evaluatableFor(o,r)})}get isConstant(){for(const t of this[ns])if(!L.isConstant(t))return!1;return!0}[Gt](){const t=this[ns].map(e=>L.evaluate(e));return L.applyIntrinsics(t,this[fi]).map(e=>e.number)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn,Qn,Zn,Yn;const Mt=Symbol("instances"),bi=Symbol("activateListener"),gi=Symbol("deactivateListener"),as=Symbol("notifyInstances"),vi=Symbol("notify"),yi=Symbol("callback");class G{constructor(t){this[yi]=t}static[as](){for(const t of G[Mt])t[vi]()}static[(Kn=Mt,bi)](){window.addEventListener("scroll",this[as],{passive:!0})}static[gi](){window.removeEventListener("scroll",this[as])}observe(){G[Mt].size===0&&G[bi](),G[Mt].add(this)}disconnect(){G[Mt].delete(this),G[Mt].size===0&&G[gi]()}[vi](){this[yi]()}}G[Kn]=new Set;const wi=Symbol("computeStyleCallback"),Jn=Symbol("astWalker"),le=Symbol("dependencies"),ta=Symbol("onScroll");class vo{constructor(t){this[Qn]={},this[Zn]=new mo(["function"]),this[Yn]=()=>{this[wi]({relatedState:"window-scroll"})},this[wi]=t}observeEffectsFor(t){const e={},i=this[le];this[Jn].walk(t,s=>{const{name:r}=s,o=s.arguments[0].terms[0];if(!(r.value!=="env"||o==null||o.type!=="ident"))switch(o.value){case"window-scroll-y":if(e["window-scroll"]==null){const l="window-scroll"in i?i["window-scroll"]:new G(this[ta]);l.observe(),delete i["window-scroll"],e["window-scroll"]=l}break}});for(const s in i)i[s].disconnect();this[le]=e}dispose(){for(const t in this[le])this[le][t].disconnect()}}Qn=le,Zn=Jn,Yn=ta;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=a=>{const t=a.observeEffects||!1,e=a.intrinsics instanceof Function?a.intrinsics:()=>a.intrinsics;return(i,s)=>{const r=i.updated,n=i.connectedCallback,o=i.disconnectedCallback,l=Symbol(`${s}StyleEffector`),c=Symbol(`${s}StyleEvaluator`),f=Symbol(`${s}UpdateEvaluator`),m=Symbol(`${s}EvaluateAndSync`);Object.defineProperties(i,{[l]:{value:null,writable:!0},[c]:{value:null,writable:!0},[f]:{value:function(){const b=Js(this[s]);this[c]=new Xn(b,e(this)),this[l]==null&&t&&(this[l]=new vo(()=>this[m]())),this[l]!=null&&this[l].observeEffectsFor(b)}},[m]:{value:function(){if(this[c]==null)return;const b=this[c].evaluate();this[a.updateHandler](b)}},updated:{value:function(b){b.has(s)&&(this[f](),this[m]()),r.call(this,b)}},connectedCallback:{value:function(){n.call(this),this.requestUpdate(s,this[s])}},disconnectedCallback:{value:function(){o.call(this),this[l]!=null&&(this[l].dispose(),this[l]=null)}}})}};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=a=>a<.5?2*a*a:-1+(4-2*a)*a,yo=(a,t,e=ea)=>i=>a+(t-a)*e(i),wo=(a,t)=>{const e=s=>r=>s+=r,i=t.map(e(0));return s=>{s=Ge(s,0,1),s*=i[i.length-1];const r=i.findIndex(l=>l>=s),n=r<1?0:i[r-1],o=i[r];return a[r]((s-n)/(o-n))}},Ut=a=>{const t=[],e=[];let i=a.initialValue;for(let s=0;s<a.keyframes.length;++s){const r=a.keyframes[s],{value:n,frames:o}=r,l=r.ease||ea,c=yo(i,n,l);t.push(c),e.push(o),i=n}return wo(t,e)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $=function(a,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,t,e,i);else for(var o=a.length-1;o>=0;o--)(n=a[o])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r};const So=5e3,Eo=Ut({initialValue:0,keyframes:[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]}),xo=Ut({initialValue:0,keyframes:[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]}),Co=30,To=12,sa="0deg 75deg 105%",Ao="auto auto auto",Mo="auto",Ro=2.2,Io=["front","right","back","left"],_o=["upper-","","lower-"],Lo=3e3,Oo=". Use mouse, touch or arrow keys to move.",xe={AUTO:"auto"},os={BASIC:"basic",WIGGLE:"wiggle"},$o={NONE:"none"},Si=()=>({basis:[Xe(V(Co,"deg"))],keywords:{auto:[null]}}),ko=()=>({basis:[Xe(V(To,"deg"))],keywords:{auto:[null]}}),ia=(()=>{const a=Js(sa)[0].terms,t=me(a[0]),e=me(a[1]);return i=>{const s=i[u].idealCameraDistance();return{basis:[t,e,V(s,"m")],keywords:{auto:[null,null,V(105,"%")]}}}})(),Fo=a=>{const t=Ro*a[u].boundingSphere.radius;return{basis:[V(-1/0,"rad"),V(0,"rad"),V(t,"m")],keywords:{auto:[null,null,null]}}},Do=a=>{const t=ia(a),i=new Xn([],t).evaluate()[2];return{basis:[V(1/0,"rad"),V(Math.PI,"rad"),V(i,"m")],keywords:{auto:[null,null,null]}}},Vo=a=>{const t=a[u].boundingBox.getCenter(new Ne);return{basis:[V(t.x,"m"),V(t.y,"m"),V(t.z,"m")],keywords:{auto:[null,null,null]}}},na=Math.PI/2,Po=Math.PI/3,No=na/2,Uo=2*Math.PI,A=Symbol("controls"),zo=Symbol("panElement"),rs=Symbol("promptElement"),Ce=Symbol("promptAnimatedContainer"),ls=Symbol("fingerAnimatedContainers"),Te=Symbol("deferInteractionPrompt"),Ei=Symbol("updateAria"),tt=Symbol("a11y"),xi=Symbol("updateA11y"),Ci=Symbol("updateCameraForRadius"),Rt=Symbol("cancelPrompts"),cs=Symbol("onChange"),Zt=Symbol("onPointerChange"),ft=Symbol("waitingToPromptUser"),Ae=Symbol("userHasInteracted"),It=Symbol("promptElementVisibleTime"),Yt=Symbol("lastPromptOffset"),Me=Symbol("cancellationSource"),hs=Symbol("lastSpherical"),Jt=Symbol("jumpCamera"),us=Symbol("initialized"),te=Symbol("maintainThetaPhi"),Ti=Symbol("syncCameraOrbit"),Ai=Symbol("syncFieldOfView"),Mi=Symbol("syncCameraTarget"),Ri=Symbol("syncMinCameraOrbit"),Ii=Symbol("syncMaxCameraOrbit"),_i=Symbol("syncMinFieldOfView"),Li=Symbol("syncMaxFieldOfView"),Ho=a=>{var t,e,i,s,r,n,o,l,c,f,m,b,h,w,S,y,_,P;class C extends a{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit=sa,this.cameraTarget=Ao,this.fieldOfView=Mo,this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=Lo,this.interactionPrompt=xe.AUTO,this.interactionPromptStyle=os.WIGGLE,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.touchAction=$o.NONE,this.disableZoom=!1,this.disablePan=!1,this.disableTap=!1,this.interpolationDecay=Sa,this.a11y=null,this[t]=this.shadowRoot.querySelector(".interaction-prompt"),this[e]=this.shadowRoot.querySelector("#prompt"),this[i]=[this.shadowRoot.querySelector("#finger0"),this.shadowRoot.querySelector("#finger1")],this[s]=this.shadowRoot.querySelector(".pan-target"),this[r]=0,this[n]=1/0,this[o]=!1,this[l]=!1,this[c]=Y.AUTOMATIC,this[f]=new Ea(this[u].camera,this[W],this[u]),this[m]=new xa,this[b]=!1,this[h]=!1,this[w]=!1,this[S]={},this[y]=()=>{const d=this[A].changeSource;this[Me]=d,d===Y.USER_INTERACTION&&(this[Ae]=!0,this[Te]())},this[_]=()=>{this[Ei](),this[D]();const d=this[A].changeSource;this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:d}}))},this[P]=d=>{this[Pe].classList.toggle("pointer-tumbling",d.type==="pointer-change-start")}}get inputSensitivity(){return this[A].inputSensitivity}set inputSensitivity(d){this[A].inputSensitivity=d}getCameraOrbit(){const{theta:d,phi:E,radius:T}=this[hs];return{theta:d,phi:E,radius:T,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return ct(this[R].isPresenting?this[R].arRenderer.target:this[u].getDynamicTarget())}getFieldOfView(){return this[A].getFieldOfView()}getMinimumFieldOfView(){return this[A].options.minimumFieldOfView}getMaximumFieldOfView(){return this[A].options.maximumFieldOfView}getIdealAspect(){return this[u].idealAspect}jumpCameraToGoal(){this[Jt]=!0,this.requestUpdate(Jt,!1)}resetInteractionPrompt(){this[Yt]=0,this[It]=1/0,this[Ae]=!1,this[ft]=this.interactionPrompt===xe.AUTO&&this.cameraControls}zoom(d){const E=new WheelEvent("wheel",{deltaY:-30*d});this[W].dispatchEvent(E)}connectedCallback(){super.connectedCallback(),this[A].addEventListener("user-interaction",this[Rt]),this[A].addEventListener("pointer-change-start",this[Zt]),this[A].addEventListener("pointer-change-end",this[Zt])}disconnectedCallback(){super.disconnectedCallback(),this[A].removeEventListener("user-interaction",this[Rt]),this[A].removeEventListener("pointer-change-start",this[Zt]),this[A].removeEventListener("pointer-change-end",this[Zt])}updated(d){super.updated(d);const E=this[A],T=this[u];if(d.has("cameraControls")&&(this.cameraControls?(E.enableInteraction(),this.interactionPrompt===xe.AUTO&&(this[ft]=!0)):(E.disableInteraction(),this[Te]()),this[W].setAttribute("aria-label",this[Ht])),d.has("disableZoom")&&(E.disableZoom=this.disableZoom),d.has("disablePan")&&(E.enablePan=!this.disablePan),d.has("disableTap")&&(E.enableTap=!this.disableTap),(d.has("interactionPrompt")||d.has("cameraControls")||d.has("src"))&&(this.interactionPrompt===xe.AUTO&&this.cameraControls&&!this[Ae]?this[ft]=!0:this[Te]()),d.has("interactionPromptStyle")&&(this[Ce].style.opacity=this.interactionPromptStyle==os.BASIC?"1":"0"),d.has("touchAction")){const O=this.touchAction;E.applyOptions({touchAction:O}),E.updateTouchActionStyle()}d.has("orbitSensitivity")&&(E.orbitSensitivity=this.orbitSensitivity),d.has("zoomSensitivity")&&(E.zoomSensitivity=this.zoomSensitivity),d.has("panSensitivity")&&(E.panSensitivity=this.panSensitivity),d.has("interpolationDecay")&&(E.setDamperDecayTime(this.interpolationDecay),T.setTargetDamperDecayTime(this.interpolationDecay)),d.has("a11y")&&this[xi](),this[Jt]===!0&&Promise.resolve().then(()=>{E.jumpToGoal(),T.jumpToGoal(),this[cs](),this[Jt]=!1})}async updateFraming(){const d=this[u],E=d.adjustedFoV(d.framedFoVDeg);await d.updateFraming();const T=d.adjustedFoV(d.framedFoVDeg),O=this[A].getFieldOfView()/E;this[A].setFieldOfView(T*O),this[te]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),this.requestUpdate("cameraOrbit"),await this.updateComplete}interact(d,E,T){const O=this[W],B=this[ls];if(B[0].style.opacity==="1"){console.warn("interact() failed because an existing interaction is running.");return}const z=new Array;z.push({x:Ut(E.x),y:Ut(E.y)});const ot=[{x:z[0].x(0),y:z[0].y(0)}];T!=null&&(z.push({x:Ut(T.x),y:Ut(T.y)}),ot.push({x:z[1].x(0),y:z[1].y(0)}));let K=performance.now();const{width:mt,height:be}=this[u],ge=this.getBoundingClientRect(),xt=Q=>{for(const[Ct,Z]of ot.entries()){const{style:Tt}=B[Ct];Tt.transform=`translateX(${mt*Z.x}px) translateY(${be*Z.y}px)`,Q==="pointerdown"?Tt.opacity="1":Q==="pointerup"&&(Tt.opacity="0");const fa={pointerId:Ct-5678,pointerType:"touch",target:O,clientX:mt*Z.x+ge.x,clientY:be*Z.y+ge.y,altKey:!0};O.dispatchEvent(new PointerEvent(Q,fa))}},ti=()=>{const Q=this[Me];if(Q!==Y.AUTOMATIC||!O.isConnected){for(const Z of this[ls])Z.style.opacity="0";xt("pointercancel"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:Q}})),document.removeEventListener("visibilitychange",Qe);return}const Ct=Math.min(1,(performance.now()-K)/d);for(const[Z,Tt]of ot.entries())Tt.x=z[Z].x(Ct),Tt.y=z[Z].y(Ct);xt("pointermove"),Ct<1?requestAnimationFrame(ti):(xt("pointerup"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:Y.AUTOMATIC}})),document.removeEventListener("visibilitychange",Qe))},Qe=()=>{let Q=0;document.visibilityState==="hidden"?Q=performance.now()-K:K=performance.now()-Q};document.addEventListener("visibilitychange",Qe),xt("pointerdown"),this[Me]=Y.AUTOMATIC,requestAnimationFrame(ti)}[(t=rs,e=Ce,i=ls,s=zo,r=Yt,n=It,o=Ae,l=ft,c=Me,f=A,m=hs,b=Jt,h=us,w=te,S=tt,Ai)](d){const E=this[A],T=this[u];T.framedFoVDeg=d[0]*180/Math.PI,E.changeSource=Y.NONE,E.setFieldOfView(T.adjustedFoV(T.framedFoVDeg)),this[Rt]()}[Ti](d){const E=this[A];if(this[te]){const{theta:T,phi:O}=this.getCameraOrbit();d[0]=T,d[1]=O,this[te]=!1}E.changeSource=Y.NONE,E.setOrbit(d[0],d[1],d[2]),this[Rt]()}[Ri](d){this[A].applyOptions({minimumAzimuthalAngle:d[0],minimumPolarAngle:d[1],minimumRadius:d[2]}),this.jumpCameraToGoal()}[Ii](d){this[A].applyOptions({maximumAzimuthalAngle:d[0],maximumPolarAngle:d[1],maximumRadius:d[2]}),this[Ci](d[2]),this.jumpCameraToGoal()}[_i](d){this[A].applyOptions({minimumFieldOfView:d[0]*180/Math.PI}),this.jumpCameraToGoal()}[Li](d){const E=this[u].adjustedFoV(d[0]*180/Math.PI);this[A].applyOptions({maximumFieldOfView:E}),this.jumpCameraToGoal()}[Mi](d){const[E,T,O]=d;this[R].arRenderer.isPresenting||this[u].setTarget(E,T,O),this[A].changeSource=Y.NONE,this[R].arRenderer.updateTarget(),this[Rt]()}[at](d,E){if(super[at](d,E),this[R].isPresenting||!this[Et]())return;const T=this[A],O=this[u],B=performance.now();if(this[ft]&&this.loaded&&B>this[ue]+this.interactionPromptThreshold&&(this[ft]=!1,this[It]=B,this[rs].classList.add("visible")),isFinite(this[It])&&this.interactionPromptStyle===os.WIGGLE){const K=(B-this[It])/So%1,mt=Eo(K),be=xo(K);if(this[Ce].style.opacity=`${be}`,mt!==this[Yt]){const ge=mt*O.width*.05,xt=(mt-this[Yt])*Math.PI/16;this[Ce].style.transform=`translateX(${ge}px)`,T.changeSource=Y.AUTOMATIC,T.adjustOrbit(xt,0,0),this[Yt]=mt}}const z=T.update(d,E),ot=O.updateTarget(E);(z||ot)&&this[cs]()}[Te](){this[ft]=!1,this[rs].classList.remove("visible"),this[It]=1/0}[Ci](d){const E=Math.max(this[u].farRadius(),d),T=0,O=Math.abs(2*E);this[A].updateNearFar(T,O)}[Ei](){const{theta:d,phi:E}=this[A].getCameraSpherical(this[hs]),T=(4+Math.floor((d%Uo+No)/na))%4,O=Math.floor(E/Po),B=Io[T],ot=`${_o[O]}${B}`,K=ot;K in this[tt]?this[He](this[tt][K]):this[He](`View from stage ${ot}`)}get[Ht](){let d=Oo;return"interaction-prompt"in this[tt]&&(d=`. ${this[tt]["interaction-prompt"]}`),super[Ht].replace(/\.$/,"")+(this.cameraControls?d:"")}async[Be](d){const E=this[A],T=this[u],O=T.adjustedFoV(T.framedFoVDeg);super[Be](d);const B=T.adjustedFoV(T.framedFoVDeg)/O,z=E.getFieldOfView()*(isFinite(B)?B:1);E.updateAspect(this[u].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),await this.updateComplete,this[A].setFieldOfView(z),this.jumpCameraToGoal()}[X](){super[X](),this[us]?this[te]=!0:this[us]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}[(y=Rt,_=cs,P=Zt,xi)](){if(typeof this.a11y=="string")if(this.a11y.startsWith("{"))try{this[tt]=JSON.parse(this.a11y)}catch(d){console.warn("Error parsing a11y JSON:",d)}else this.a11y.length>0?console.warn("Error not supported format, should be a JSON string:",this.a11y):this[tt]={};else typeof this.a11y=="object"&&this.a11y!=null?this[tt]=Object.assign({},this.a11y):this[tt]={};this[W].setAttribute("aria-label",this[Ht])}}return $([g({type:Boolean,attribute:"camera-controls"})],C.prototype,"cameraControls",void 0),$([lt({intrinsics:ia,observeEffects:!0,updateHandler:Ti}),g({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],C.prototype,"cameraOrbit",void 0),$([lt({intrinsics:Vo,observeEffects:!0,updateHandler:Mi}),g({type:String,attribute:"camera-target",hasChanged:()=>!0})],C.prototype,"cameraTarget",void 0),$([lt({intrinsics:Si,observeEffects:!0,updateHandler:Ai}),g({type:String,attribute:"field-of-view",hasChanged:()=>!0})],C.prototype,"fieldOfView",void 0),$([lt({intrinsics:Fo,updateHandler:Ri}),g({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],C.prototype,"minCameraOrbit",void 0),$([lt({intrinsics:Do,updateHandler:Ii}),g({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],C.prototype,"maxCameraOrbit",void 0),$([lt({intrinsics:ko,updateHandler:_i}),g({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],C.prototype,"minFieldOfView",void 0),$([lt({intrinsics:Si,updateHandler:Li}),g({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],C.prototype,"maxFieldOfView",void 0),$([g({type:Number,attribute:"interaction-prompt-threshold"})],C.prototype,"interactionPromptThreshold",void 0),$([g({type:String,attribute:"interaction-prompt"})],C.prototype,"interactionPrompt",void 0),$([g({type:String,attribute:"interaction-prompt-style"})],C.prototype,"interactionPromptStyle",void 0),$([g({type:Number,attribute:"orbit-sensitivity"})],C.prototype,"orbitSensitivity",void 0),$([g({type:Number,attribute:"zoom-sensitivity"})],C.prototype,"zoomSensitivity",void 0),$([g({type:Number,attribute:"pan-sensitivity"})],C.prototype,"panSensitivity",void 0),$([g({type:String,attribute:"touch-action"})],C.prototype,"touchAction",void 0),$([g({type:Boolean,attribute:"disable-zoom"})],C.prototype,"disableZoom",void 0),$([g({type:Boolean,attribute:"disable-pan"})],C.prototype,"disablePan",void 0),$([g({type:Boolean,attribute:"disable-tap"})],C.prototype,"disableTap",void 0),$([g({type:Number,attribute:"interpolation-decay"})],C.prototype,"interpolationDecay",void 0),$([g()],C.prototype,"a11y",void 0),C};/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Ca,Bo=new Ta(2,2);let jo=0;const N=Symbol("threeTexture"),$i=Symbol("threeTextures");class qo extends pe{get[N](){var t;return(t=this[x])===null||t===void 0?void 0:t.values().next().value}get[$i](){return this[x]}constructor(t,e){super(t,new Set(e?[e]:[])),this[N].image.src||(this[N].image.src=e.name?e.name:"adhoc_image"+jo++),this[N].image.name||(this[N].image.name=e&&e.image&&e.image.src?e.image.src.split("/").pop():"adhoc_image")}get name(){return this[N].image.name||""}get uri(){return this[N].image.src}get bufferView(){return this[N].image.bufferView}get element(){const t=this[N];if(t&&(t.isCanvasTexture||t.isVideoTexture))return t.image}get animation(){const t=this[N];if(t&&t.isCanvasTexture&&t.animation)return t.animation}get type(){return this.uri!=null?"external":"embedded"}set name(t){for(const e of this[$i])e.image.name=t}update(){const t=this[N];t&&t.isCanvasTexture&&!t.animation&&(this[N].needsUpdate=!0,this[M]())}async createThumbnail(t,e){const i=new Aa;Oi.map=this[N];const s=new kn(Bo,Oi);i.add(s);const r=new Ma(-1,1,1,-1,0,1),{threeRenderer:n}=ht.singleton,o=new Ra(t,e);n.setRenderTarget(o),n.render(i,r),n.setRenderTarget(null);const l=new Uint8Array(t*e*4);n.readRenderTargetPixels(o,0,0,t,e,l),ut.width=t,ut.height=e;const c=ut.getContext("2d"),f=c.createImageData(t,e);return f.data.set(l),c.putImageData(f,0,0),new Promise(async(m,b)=>{ut.toBlob(h=>{if(!h)return b("Failed to capture thumbnail.");m(URL.createObjectURL(h))},"image/png")})}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Map([[Bt.Repeat,Ue],[Bt.ClampToEdge,Fn],[Bt.MirroredRepeat,Dn]]),Xs=new Map([[Ue,Bt.Repeat],[Fn,Bt.ClampToEdge],[Dn,Bt.MirroredRepeat]]),Wo=new Map([[F.Nearest,qe],[F.Linear,We],[F.NearestMipmapNearest,Vn],[F.LinearMipmapNearest,Pn],[F.NearestMipmapLinear,Nn],[F.LinearMipmapLinear,Un]]),aa=new Map([[qe,F.Nearest],[We,F.Linear],[Vn,F.NearestMipmapNearest],[Pn,F.LinearMipmapNearest],[Nn,F.NearestMipmapLinear],[Un,F.LinearMipmapLinear]]),Go=new Map([[F.Nearest,qe],[F.Linear,We]]),oa=new Map([[qe,F.Nearest],[We,F.Linear]]),Xo=a=>aa.has(a),Ko=a=>oa.has(a),Qo=a=>Xs.has(a),Zo=(a,t)=>{switch(a){case"minFilter":return Xo(t);case"magFilter":return Ko(t);case"wrapS":case"wrapT":return Qo(t);case"rotation":case"repeat":case"offset":return!0;default:throw new Error(`Cannot configure property "${a}" on Sampler`)}},et=Symbol("threeTexture"),Fi=Symbol("threeTextures"),rt=Symbol("setProperty");class Yo extends pe{get[et](){var t;return(t=this[x])===null||t===void 0?void 0:t.values().next().value}get[Fi](){return this[x]}constructor(t,e){super(t,new Set(e?[e]:[]))}get name(){return this[et].name||""}get minFilter(){return aa.get(this[et].minFilter)}get magFilter(){return oa.get(this[et].magFilter)}get wrapS(){return Xs.get(this[et].wrapS)}get wrapT(){return Xs.get(this[et].wrapT)}get rotation(){return this[et].rotation}get scale(){return Ys(this[et].repeat)}get offset(){return Ys(this[et].offset)}setMinFilter(t){this[rt]("minFilter",Wo.get(t))}setMagFilter(t){this[rt]("magFilter",Go.get(t))}setWrapS(t){this[rt]("wrapS",ki.get(t))}setWrapT(t){this[rt]("wrapT",ki.get(t))}setRotation(t){t==null&&(t=0),this[rt]("rotation",t)}setScale(t){t==null&&(t={u:1,v:1}),this[rt]("repeat",new de(t.u,t.v))}setOffset(t){t==null&&(t={u:0,v:0}),this[rt]("offset",new de(t.u,t.v))}[rt](t,e){if(Zo(t,e))for(const i of this[Fi])i[t]=e,i.needsUpdate=!0;this[M]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=Symbol("image"),Vi=Symbol("sampler"),Pi=Symbol("threeTexture");class ra extends pe{constructor(t,e){super(t,new Set(e?[e]:[])),this[Vi]=new Yo(t,e),this[Di]=new qo(t,e)}get[Pi](){var t;return(t=this[x])===null||t===void 0?void 0:t.values().next().value}get name(){return this[Pi].name||""}set name(t){for(const e of this[x])e.name=t}get sampler(){return this[Vi]}get source(){return this[Di]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var la,ca,ha;const vt=Symbol("texture"),yt=Symbol("transform"),ds=Symbol("materials"),Ni=Symbol("usage"),_t=Symbol("onUpdate"),ce=Symbol("activeVideo");var v;(function(a){a[a.Base=0]="Base",a[a.MetallicRoughness=1]="MetallicRoughness",a[a.Normal=2]="Normal",a[a.Occlusion=3]="Occlusion",a[a.Emissive=4]="Emissive",a[a.Clearcoat=5]="Clearcoat",a[a.ClearcoatRoughness=6]="ClearcoatRoughness",a[a.ClearcoatNormal=7]="ClearcoatNormal",a[a.SheenColor=8]="SheenColor",a[a.SheenRoughness=9]="SheenRoughness",a[a.Transmission=10]="Transmission",a[a.Thickness=11]="Thickness",a[a.Specular=12]="Specular",a[a.SpecularColor=13]="SpecularColor",a[a.Iridescence=14]="Iridescence",a[a.IridescenceThickness=15]="IridescenceThickness",a[a.Anisotropy=16]="Anisotropy"})(v||(v={}));class zt{constructor(t,e,i,s){this[la]=null,this[ca]={rotation:0,scale:new de(1,1),offset:new de(0,0)},this[ha]=!1,i&&(this[yt].rotation=i.rotation,this[yt].scale.copy(i.repeat),this[yt].offset.copy(i.offset),this[vt]=new ra(t,i)),this[_t]=t,this[ds]=s,this[Ni]=e}get texture(){return this[vt]}setTexture(t){var e,i;const s=t!=null?t.source[N]:null,r=(e=this[vt])===null||e===void 0?void 0:e.source[N];if(r!=null&&r.isVideoTexture?this[ce]=!1:!((i=this[vt])===null||i===void 0)&&i.source.animation&&this[vt].source.animation.removeEventListener("enterFrame",this[_t]),this[vt]=t,s!=null&&s.isVideoTexture){const o=s.image;if(this[ce]=!0,o.requestVideoFrameCallback!=null){const l=()=>{this[ce]&&(this[_t](),o.requestVideoFrameCallback(l))};o.requestVideoFrameCallback(l)}else{const l=()=>{this[ce]&&(this[_t](),requestAnimationFrame(l))};requestAnimationFrame(l)}}else(t==null?void 0:t.source.animation)!=null&&t.source.animation.addEventListener("enterFrame",this[_t]);let n=zn;if(this[ds])for(const o of this[ds]){switch(this[Ni]){case v.Base:o.map=s;break;case v.MetallicRoughness:n=Ze,o.metalnessMap=s,o.roughnessMap=s;break;case v.Normal:n=Ze,o.normalMap=s;break;case v.Occlusion:n=Ze,o.aoMap=s;break;case v.Emissive:o.emissiveMap=s;break;case v.Clearcoat:o.clearcoatMap=s;break;case v.ClearcoatRoughness:o.clearcoatRoughnessMap=s;break;case v.ClearcoatNormal:o.clearcoatNormalMap=s;break;case v.SheenColor:o.sheenColorMap=s;break;case v.SheenRoughness:o.sheenRoughnessMap=s;break;case v.Transmission:o.transmissionMap=s;break;case v.Thickness:o.thicknessMap=s;break;case v.Specular:o.specularIntensityMap=s;break;case v.SpecularColor:o.specularColorMap=s;break;case v.Iridescence:o.iridescenceMap=s;break;case v.IridescenceThickness:o.iridescenceThicknessMap=s;break;case v.Anisotropy:o.anisotropyMap=s;break}o.needsUpdate=!0}s&&(s.colorSpace=n,s.rotation=this[yt].rotation,s.repeat=this[yt].scale,s.offset=this[yt].offset),this[_t]()}}la=vt,ca=yt,ha=ce;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=Symbol("threeMaterial"),Re=Symbol("threeMaterials"),Ui=Symbol("baseColorTexture"),zi=Symbol("metallicRoughnessTexture");class Jo extends pe{constructor(t,e){super(t,e);const{map:i,metalnessMap:s}=e.values().next().value;this[Ui]=new zt(t,v.Base,i,e),this[zi]=new zt(t,v.MetallicRoughness,s,e)}get[Re](){return this[x]}get[ee](){var t;return(t=this[x])===null||t===void 0?void 0:t.values().next().value}get baseColorFactor(){const t=[0,0,0,this[ee].opacity];return this[ee].color.toArray(t),t}get metallicFactor(){return this[ee].metalness}get roughnessFactor(){return this[ee].roughness}get baseColorTexture(){return this[Ui]}get metallicRoughnessTexture(){return this[zi]}setBaseColorFactor(t){const e=new Hn;t instanceof Array?e.fromArray(t):e.set(t);for(const i of this[Re])i.color.set(e),t instanceof Array&&t.length>3?i.opacity=t[3]:(t=[0,0,0,i.opacity],e.toArray(t));this[M]()}setMetallicFactor(t){for(const e of this[Re])e.metalness=t;this[M]()}setRoughnessFactor(t){for(const e of this[Re])e.roughness=t;this[M]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hi,Bi;const ji=Symbol("pbrMetallicRoughness"),qi=Symbol("normalTexture"),Wi=Symbol("occlusionTexture"),Gi=Symbol("emissiveTexture"),I=Symbol("backingThreeMaterial"),Xi=Symbol("applyAlphaCutoff"),ms=Symbol("getAlphaMode"),Lt=Symbol("lazyLoadGLTFInfo"),ps=Symbol("initialize"),Ks=Symbol("getLoadedMaterial"),p=Symbol("ensureMaterialIsLoaded"),Ki=Symbol("gltfIndex"),he=Symbol("setActive"),jt=Symbol("variantIndices"),fs=Symbol("isActive"),Qi=Symbol("modelVariants"),bs=Symbol("name"),U=Symbol("pbrTextures");class gs extends pe{constructor(t,e,i,s,r,n,o=void 0){super(t,r),this[Hi]=new Set,this[Bi]=new Map,this[Ki]=e,this[fs]=i,this[Qi]=s,this[bs]=n,o==null?this[ps]():this[Lt]=o}get[(Hi=jt,Bi=U,I)](){return this[x].values().next().value}[ps](){const t=this[M],e=this[x];this[ji]=new Jo(t,e);const{normalMap:i,aoMap:s,emissiveMap:r}=e.values().next().value;this[qi]=new zt(t,v.Normal,i,e),this[Wi]=new zt(t,v.Occlusion,s,e),this[Gi]=new zt(t,v.Emissive,r,e);const n=o=>{this[U].set(o,new zt(t,o,null,e))};n(v.Clearcoat),n(v.ClearcoatRoughness),n(v.ClearcoatNormal),n(v.SheenColor),n(v.SheenRoughness),n(v.Transmission),n(v.Thickness),n(v.Specular),n(v.SpecularColor),n(v.Iridescence),n(v.IridescenceThickness),n(v.Anisotropy)}async[Ks](){if(this[Lt]!=null){const t=await this[Lt].doLazyLoad();return this[ps](),this[Lt]=void 0,this.ensureLoaded=async()=>{},t}return null}colorFromRgb(t){const e=new Hn;return t instanceof Array?e.fromArray(t):e.set(t),e}[p](){if(this[Lt]!=null)throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[Ks]()}get isLoaded(){return this[Lt]==null}get isActive(){return this[fs]}[he](t){this[fs]=t}get name(){return this[bs]||""}set name(t){if(this[bs]=t,this[x]!=null)for(const e of this[x])e.name=t}get pbrMetallicRoughness(){return this[p](),this[ji]}get normalTexture(){return this[p](),this[qi]}get occlusionTexture(){return this[p](),this[Wi]}get emissiveTexture(){return this[p](),this[Gi]}get emissiveFactor(){return this[p](),this[I].emissive.toArray()}get index(){return this[Ki]}hasVariant(t){const e=this[Qi].get(t);return e!=null&&this[jt].has(e.index)}setEmissiveFactor(t){this[p]();const e=this.colorFromRgb(t);for(const i of this[x])i.emissive.set(e);this[M]()}[ms](){return this[I].transparent?"BLEND":this[I].alphaTest>0?"MASK":"OPAQUE"}[Xi](){this[p]();for(const t of this[x])this[ms]()==="MASK"?t.alphaTest==null&&(t.alphaTest=.5):t.alphaTest=void 0,t.needsUpdate=!0}setAlphaCutoff(t){this[p]();for(const e of this[x])e.alphaTest=t,e.needsUpdate=!0;this[Xi](),this[M]()}getAlphaCutoff(){return this[p](),this[I].alphaTest}setDoubleSided(t){this[p]();for(const e of this[x])e.side=t?ei:Ia,e.needsUpdate=!0;this[M]()}getDoubleSided(){return this[p](),this[I].side==ei}setAlphaMode(t){this[p]();const e=(i,s)=>{i.transparent=s,i.depthWrite=!s};for(const i of this[x])e(i,t==="BLEND"),t==="MASK"?i.alphaTest=.5:i.alphaTest=void 0,i.needsUpdate=!0;this[M]()}getAlphaMode(){return this[p](),this[ms]()}get emissiveStrength(){return this[p](),this[I].emissiveIntensity}setEmissiveStrength(t){this[p]();for(const e of this[x])e.emissiveIntensity=t;this[M]()}get clearcoatFactor(){return this[p](),this[I].clearcoat}get clearcoatRoughnessFactor(){return this[p](),this[I].clearcoatRoughness}get clearcoatTexture(){return this[p](),this[U].get(v.Clearcoat)}get clearcoatRoughnessTexture(){return this[p](),this[U].get(v.ClearcoatRoughness)}get clearcoatNormalTexture(){return this[p](),this[U].get(v.ClearcoatNormal)}get clearcoatNormalScale(){return this[p](),this[I].clearcoatNormalScale.x}setClearcoatFactor(t){this[p]();for(const e of this[x])e.clearcoat=t;this[M]()}setClearcoatRoughnessFactor(t){this[p]();for(const e of this[x])e.clearcoatRoughness=t;this[M]()}setClearcoatNormalScale(t){this[p]();for(const e of this[x])e.clearcoatNormalScale=new de(t,t);this[M]()}get ior(){return this[p](),this[I].ior}setIor(t){this[p]();for(const e of this[x])e.ior=t;this[M]()}get sheenColorFactor(){return this[p](),this[I].sheenColor.toArray()}get sheenColorTexture(){return this[p](),this[U].get(v.SheenColor)}get sheenRoughnessFactor(){return this[p](),this[I].sheenRoughness}get sheenRoughnessTexture(){return this[p](),this[U].get(v.SheenRoughness)}setSheenColorFactor(t){this[p]();const e=this.colorFromRgb(t);for(const i of this[x])i.sheenColor.set(e),i.sheen=1;this[M]()}setSheenRoughnessFactor(t){this[p]();for(const e of this[x])e.sheenRoughness=t,e.sheen=1;this[M]()}get transmissionFactor(){return this[p](),this[I].transmission}get transmissionTexture(){return this[p](),this[U].get(v.Transmission)}setTransmissionFactor(t){this[p]();for(const e of this[x])e.transmission=t;this[M]()}get thicknessFactor(){return this[p](),this[I].thickness}get thicknessTexture(){return this[p](),this[U].get(v.Thickness)}get attenuationDistance(){return this[p](),this[I].attenuationDistance}get attenuationColor(){return this[p](),this[I].attenuationColor.toArray()}setThicknessFactor(t){this[p]();for(const e of this[x])e.thickness=t;this[M]()}setAttenuationDistance(t){this[p]();for(const e of this[x])e.attenuationDistance=t;this[M]()}setAttenuationColor(t){this[p]();const e=this.colorFromRgb(t);for(const i of this[x])i.attenuationColor.set(e);this[M]()}get specularFactor(){return this[p](),this[I].specularIntensity}get specularTexture(){return this[p](),this[U].get(v.Specular)}get specularColorFactor(){return this[p](),this[I].specularColor.toArray()}get specularColorTexture(){return this[p](),this[U].get(v.SheenColor)}setSpecularFactor(t){this[p]();for(const e of this[x])e.specularIntensity=t;this[M]()}setSpecularColorFactor(t){this[p]();const e=this.colorFromRgb(t);for(const i of this[x])i.specularColor.set(e);this[M]()}get iridescenceFactor(){return this[p](),this[I].iridescence}get iridescenceTexture(){return this[p](),this[U].get(v.Iridescence)}get iridescenceIor(){return this[p](),this[I].iridescenceIOR}get iridescenceThicknessMinimum(){return this[p](),this[I].iridescenceThicknessRange[0]}get iridescenceThicknessMaximum(){return this[p](),this[I].iridescenceThicknessRange[1]}get iridescenceThicknessTexture(){return this[p](),this[U].get(v.IridescenceThickness)}setIridescenceFactor(t){this[p]();for(const e of this[x])e.iridescence=t;this[M]()}setIridescenceIor(t){this[p]();for(const e of this[x])e.iridescenceIOR=t;this[M]()}setIridescenceThicknessMinimum(t){this[p]();for(const e of this[x])e.iridescenceThicknessRange[0]=t;this[M]()}setIridescenceThicknessMaximum(t){this[p]();for(const e of this[x])e.iridescenceThicknessRange[1]=t;this[M]()}get anisotropyStrength(){return this[p](),this[I].anisotropy}get anisotropyRotation(){return this[p](),this[I].anisotropyRotation}get anisotropyTexture(){return this[p](),this[U].get(v.Anisotropy)}setAnisotropyStrength(t){this[p]();for(const e of this[x])e.anisotropy=t;this[M]()}setAnisotropyRotation(t){this[p]();for(const e of this[x])e.anisotropyRotation=t;this[M]()}}class ua{constructor(t){this.name="",this.children=new Array,this.name=t}}class vs extends ua{constructor(t,e,i,s){super(t.name),this.materials=new Map,this.variantToMaterialMap=new Map,this.initialMaterialIdx=0,this.activeMaterialIdx=0,this.mesh=t;const{gltf:r,threeGLTF:n,threeObjectMap:o}=s;this.parser=n.parser,this.modelVariants=i,this.mesh.userData.variantData=i;const l=o.get(t.material);l.materials!=null?this.initialMaterialIdx=this.activeMaterialIdx=l.materials:console.error(`Primitive (${t.name}) missing initial material reference.`);const c=t.userData.associations||{};if(c.meshes==null){console.error("Mesh is missing primitive index association");return}const b=((r.meshes||[])[c.meshes].primitives||[])[c.primitives];if(b==null){console.error("Mesh primitive definition is missing.");return}if(b.material!=null)this.materials.set(b.material,e[b.material]);else{const h=e.findIndex(w=>w.name==="Default");h>=0?this.materials.set(h,e[h]):console.warn("gltfPrimitive has no material!")}if(b.extensions&&b.extensions.KHR_materials_variants){const h=b.extensions.KHR_materials_variants,S=n.parser.json.extensions.KHR_materials_variants.variants;for(const y of h.mappings){const _=e[y.material];this.materials.set(y.material,_);for(const P of y.variants){const{name:C}=S[P];this.variantToMaterialMap.set(P,_),_[jt].add(P),i.has(C)||i.set(C,{name:C,index:P})}}}}async setActiveMaterial(t){const e=this.materials.get(t);if(t!==this.activeMaterialIdx){const i=e[x],s=await e[Ks]();s!=null?this.mesh.material=s:this.mesh.material=i.values().next().value,this.parser.assignFinalMaterial(this.mesh),i.add(this.mesh.material),this.activeMaterialIdx=t}return this.mesh.material}getActiveMaterial(){return this.materials.get(this.activeMaterialIdx)}getMaterial(t){return this.materials.get(t)}async enableVariant(t){if(t==null)return this.setActiveMaterial(this.initialMaterialIdx);if(this.variantToMaterialMap!=null&&this.modelVariants.has(t)){const e=this.modelVariants.get(t);return this.enableVariantHelper(e.index)}return null}async enableVariantHelper(t){if(this.variantToMaterialMap!=null&&t!=null){const e=this.variantToMaterialMap.get(t);if(e!=null)return this.setActiveMaterial(e.index)}return null}async instantiateVariants(){if(this.variantToMaterialMap!=null)for(const t of this.variantToMaterialMap.keys()){const e=this.mesh.userData.variantMaterials.get(t);if(e.material!=null)continue;const i=await this.enableVariantHelper(t);i!=null&&(e.material=i)}}get variantInfo(){return this.variantToMaterialMap}addVariant(t,e){if(!this.ensureVariantIsUnused(e))return!1;this.modelVariants.has(e)||this.modelVariants.set(e,{name:e,index:this.modelVariants.size});const s=this.modelVariants.get(e).index;return t[jt].add(s),this.variantToMaterialMap.set(s,t),this.materials.set(t.index,t),this.updateVariantUserData(s,t),!0}deleteVariant(t){if(this.variantInfo.has(t)){this.variantInfo.delete(t);const e=this.mesh.userData.variantMaterials;e!=null&&e.delete(t)}}updateVariantUserData(t,e){e[jt].add(t),this.mesh.userData.variantData=this.modelVariants,this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map,this.mesh.userData.variantMaterials.set(t,{material:e[x].values().next().value,gltfMaterialIndex:e.index})}ensureVariantIsUnused(t){const e=this.modelVariants.get(t);return e!=null&&this.variantInfo.has(e.index)?(console.warn(`Primitive cannot add variant '${t}' for this material, it already exists.`),!1):!0}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zi,Yi,Ji,tn,en,sn;const bt=Symbol("materials"),Ie=Symbol("hierarchy"),nn=Symbol("roots"),st=Symbol("primitives"),da=Symbol("prepareVariantsForExport"),ma=Symbol("switchVariant"),pa=Symbol("materialFromPoint"),an=Symbol("nodeFromPoint"),tr=Symbol("nodeFromIndex"),k=Symbol("variantData"),Qs=Symbol("availableVariants"),ys=Symbol("modelOnUpdate"),on=Symbol("cloneMaterial");class er{constructor(t,e,i,s){this.gltf=t,this.gltfElementMap=e,this.mapKey=i,this.doLazyLoad=s}}class sr{constructor(t,e=()=>{}){this[Zi]=new Array,this[Yi]=new Array,this[Ji]=new Array,this[tn]=new Array,this[en]=()=>{},this[sn]=new Map,this[ys]=e;const{gltf:i,threeGLTF:s,gltfElementMap:r}=t;for(const[l,c]of i.materials.entries()){const f=r.get(c);if(f!=null)this[bt].push(new gs(e,l,!0,this[k],f,c.name));else{const b=(i.materials||[])[l],h=new Set;r.set(b,h);const w=async()=>{const S=await s.parser.getDependency("material",l);return h.add(S),S};this[bt].push(new gs(e,l,!1,this[k],h,c.name,new er(i,r,b,w)))}}const n=new Map,o=new Array;for(const l of s.scene.children)o.push(l);for(;o.length>0;){const l=o.pop();let c=null;l instanceof kn?(c=new vs(l,this.materials,this[k],t),this[st].push(c)):c=new ua(l.name);const f=n.get(l);f!=null?f.children.push(c):this[nn].push(c),this[Ie].push(c);for(const m of l.children)o.push(m),n.set(l,c)}}get materials(){return this[bt]}[(Zi=bt,Yi=Ie,Ji=nn,tn=st,en=ys,sn=k,Qs)](){const t=Array.from(this[k].values());return t.sort((e,i)=>e.index-i.index),t.map(e=>e.name)}getMaterialByName(t){const e=this[bt].filter(i=>i.name===t);return e.length>0?e[0]:null}[tr](t,e){const i=this[Ie].find(s=>{if(s instanceof vs){const{meshes:r,primitives:n}=s.mesh.userData.associations;if(r==t&&n==e)return!0}return!1});return i??null}[an](t){return this[Ie].find(e=>e instanceof vs&&e.mesh===t.object)}[pa](t){return this[an](t).getActiveMaterial()}async[ma](t){for(const e of this[st])await e.enableVariant(t);for(const e of this.materials)e[he](!1);for(const e of this[st])this.materials[e.getActiveMaterial().index][he](!0)}async[da](){const t=new Array;for(const e of this[st])t.push(e.instantiateVariants());await Promise.all(t)}[on](t,e){const i=this.materials[t];i.isLoaded||console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);const s=i[x],r=new Set;for(const[o,l]of s.entries()){const c=l.clone();c.name=e+(s.size>1?"_inst"+o:""),r.add(c)}const n=new gs(this[ys],this[bt].length,!1,this[k],r,e);return this[bt].push(n),n}createMaterialInstanceForVariant(t,e,i,s=!0){let r=null;for(const n of this[st]){const o=this[k].get(i);o!=null&&n.variantInfo.has(o.index)||n.getMaterial(t)!=null&&(this.hasVariant(i)||this.createVariant(i),r==null&&(r=this[on](t,e)),n.addVariant(r,i))}if(s&&r!=null){r[he](!0),this.materials[t][he](!1);for(const n of this[st])n.enableVariant(i)}return r}createVariant(t){this[k].has(t)?console.warn(`Variant '${t}'' already exists`):this[k].set(t,{name:t,index:this[k].size})}hasVariant(t){return this[k].has(t)}setMaterialToVariant(t,e){if(this[Qs]().find(i=>i===e)==null){console.warn(`Can't add material to '${e}', the variant does not exist.'`);return}if(t<0||t>=this.materials.length){console.error("setMaterialToVariant(): materialIndex is out of bounds.");return}for(const i of this[st]){const s=i.getMaterial(t);s!=null&&i.addVariant(s,e)}}updateVariantName(t,e){const i=this[k].get(t);i!=null&&(i.name=e,this[k].set(e,i),this[k].delete(t))}deleteVariant(t){const e=this[k].get(t);if(e!=null){for(const i of this.materials)i.hasVariant(t)&&i[jt].delete(e.index);for(const i of this[st])i.deleteVariant(e.index);this[k].delete(t)}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ws=function(a,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,t,e,i);else for(var o=a.length-1;o>=0;o--)(n=a[o])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r};const Ss=Symbol("currentGLTF"),Es=Symbol("originalGltfJson"),Ot=Symbol("model"),xs=Symbol("getOnUpdateMethod"),se=Symbol("buildTexture"),ir=a=>{var t,e,i;class s extends a{constructor(){super(...arguments),this[t]=void 0,this[e]=null,this[i]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[Ot]}get availableVariants(){return this.model?this.model[Qs]():[]}get originalGltfJson(){return this[Es]}[(t=Ot,e=Ss,i=Es,xs)](){return()=>{this[D]()}}[se](n){return n.colorSpace=zn,n.wrapS=Ue,n.wrapT=Ue,new ra(this[xs](),n)}async createTexture(n,o="image/png"){const{textureUtils:l}=this[R],c=await l.loadImage(n,this.withCredentials);return c.userData.mimeType=o,this[se](c)}async createLottieTexture(n,o=1){const{textureUtils:l}=this[R],c=await l.loadLottie(n,o,this.withCredentials);return this[se](c)}createVideoTexture(n){const o=document.createElement("video");o.crossOrigin=this.withCredentials?"use-credentials":"anonymous",o.src=n,o.muted=!0,o.playsInline=!0,o.loop=!0,o.play();const l=new _a(o);return this[se](l)}createCanvasTexture(){const n=document.createElement("canvas"),o=new La(n);return this[se](o)}async updated(n){if(super.updated(n),n.has("variantName")){const o=this[St].beginActivity("variant-update");o(.1);const l=this[Ot],{variantName:c}=this;l!=null&&(await l[ma](c),this[D](),this.dispatchEvent(new CustomEvent("variant-applied"))),o(1)}if(n.has("orientation")||n.has("scale")){if(!this.loaded)return;const o=this[u];o.applyTransform(),o.updateBoundingBox(),o.updateShadow(),this[R].arRenderer.onUpdateScene(),this[D]()}}[X](){super[X]();const{currentGLTF:n}=this[u];if(n!=null){const{correlatedSceneGraph:o}=n;o!=null&&n!==this[Ss]&&(this[Ot]=new sr(o,this[xs]()),this[Es]=JSON.parse(JSON.stringify(o.gltf))),"variants"in n.userData&&this.requestUpdate("variantName")}this[Ss]=n}async exportScene(n){const o=this[u];return new Promise(async(l,c)=>{const f={binary:!0,onlyVisible:!0,maxTextureSize:1/0,includeCustomExtensions:!1,forceIndices:!1};Object.assign(f,n),f.animations=o.animations,f.truncateDrawRange=!0;const m=o.shadow;let b=!1;m!=null&&(b=m.visible,m.visible=!1),await this[Ot][da](),new Oa().register(w=>new $a(w)).parse(o.model,w=>l(new Blob([f.binary?w:JSON.stringify(w)],{type:f.binary?"application/octet-stream":"application/json"})),()=>c("glTF export failed"),f),m!=null&&(m.visible=b)})}materialFromPoint(n,o){const l=this[Ot];if(l==null)return null;const c=this[u],f=c.getNDC(n,o),m=c.hitFromPoint(f);return m==null||m.face==null?null:l[pa](m)}}return ws([g({type:String,attribute:"variant-name"})],s.prototype,"variantName",void 0),ws([g({type:String,attribute:"orientation"})],s.prototype,"orientation",void 0),ws([g({type:String,attribute:"scale"})],s.prototype,"scale",void 0),s};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(t){const e={progress:0,completed:!1};return this.ongoingActivities.add(e),this.ongoingActivityCount===1&&this.announceTotalProgress(e,0,t),i=>{let s;return s=Math.max(Ge(i,0,1),e.progress),s!==e.progress&&this.announceTotalProgress(e,s,t),e.progress}}announceTotalProgress(t,e,i){let s=0,r=0;e==1&&(t.completed=!0);for(const l of this.ongoingActivities){const{progress:c}=l;s+=1-c,l.completed&&r++}const n=t.progress;t.progress=e,this.totalProgress+=(e-n)*(1-this.totalProgress)/s;const o=r===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:o,reason:i}})),r===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke=function(a,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,t,e,i);else for(var o=a.length-1;o>=0;o--)(n=a[o])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},rn,ln,cn,hn,un,dn,mn,pn,fn,bn,gn,vn,yn;const ar=10,or=50,rr=0,lr=300,cr=150,ut=document.createElement("canvas"),Cs=Symbol("fallbackResizeHandler"),wn=Symbol("defaultAriaLabel"),_e=Symbol("resizeObserver"),$t=Symbol("clearModelTimeout"),Ts=Symbol("onContextLost"),kt=Symbol("loaded"),As=Symbol("status"),Ms=Symbol("onFocus"),Rs=Symbol("onBlur"),ie=Symbol("updateSize"),Le=Symbol("intersectionObserver"),wt=Symbol("isElementInViewport"),ze=Symbol("announceModelVisibility"),Ht=Symbol("ariaLabel"),Zs=Symbol("altDefaulted"),ne=Symbol("statusElement"),He=Symbol("updateStatus"),ue=Symbol("loadedTime"),qt=Symbol("updateSource"),Sn=Symbol("markLoaded"),Pe=Symbol("container"),W=Symbol("input"),En=Symbol("canvas"),u=Symbol("scene"),D=Symbol("needsRender"),at=Symbol("tick"),X=Symbol("onModelLoad"),Be=Symbol("onResize"),R=Symbol("renderer"),St=Symbol("progressTracker"),xn=Symbol("getLoaded"),Et=Symbol("getModelIsVisible"),Wt=Symbol("shouldAttemptPreload"),ct=a=>({x:a.x,y:a.y,z:a.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),Ys=a=>({u:a.x,v:a.y,toString(){return`${this.u} ${this.v}`}});class fe extends ga{constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this.generateSchema=!1,this[rn]=!1,this[ln]=!1,this[cn]=0,this[hn]="",this[un]=null,this[dn]=ni(()=>{const s=this.getBoundingClientRect();this[ie](s)},or),this[mn]=ni(s=>{const r=this.modelIsVisible;r!==s&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:r}}))},rr),this[pn]=null,this[fn]=null,this[bn]=new nr,this[gn]=()=>{this[ne].textContent=this[As]},this[vn]=()=>{this[ne].textContent=""},this[yn]=s=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:s.sourceEvent}}))},this.attachShadow({mode:"open"});const t=this.shadowRoot;lo(t),this[Pe]=t.querySelector(".container"),this[W]=t.querySelector(".userInput"),this[En]=t.querySelector("canvas"),this[ne]=t.querySelector("#status"),this[wn]=this[W].getAttribute("aria-label");let e,i;if(this.isConnected){const s=this.getBoundingClientRect();e=s.width,i=s.height}else e=lr,i=cr;this[u]=new ka({canvas:this[En],element:this,width:e,height:i}),Promise.resolve().then(()=>{this[ie](this.getBoundingClientRect())}),Ye&&(this[_e]=new ResizeObserver(s=>{if(!this[R].isPresenting)for(let r of s)r.target===this&&this[ie](r.contentRect)})),Je?this[Le]=new IntersectionObserver(s=>{for(let r of s)if(r.target===this){const n=this.modelIsVisible;this[wt]=r.isIntersecting,this[ze](n),this[wt]&&!this.loaded&&this[qt]()}},{root:null,rootMargin:"0px",threshold:1e-5}):this[wt]=!0}static get is(){return"model-viewer"}static set modelCacheSize(t){q[si].evictionThreshold=t}static get modelCacheSize(){return q[si].evictionThreshold}static set minimumRenderScale(t){t>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),t<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),ht.singleton.minScale=t}static get minimumRenderScale(){return ht.singleton.minScale}get loaded(){return this[xn]()}get[(rn=wt,ln=kt,cn=ue,hn=As,un=$t,dn=Cs,mn=ze,pn=_e,fn=Le,bn=St,R)](){return ht.singleton}get modelIsVisible(){return this[Et]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),Ye?this[_e].observe(this):self.addEventListener("resize",this[Cs]),Je&&this[Le].observe(this),this.addEventListener("focus",this[Ms]),this.addEventListener("blur",this[Rs]);const t=this[R];t.addEventListener("contextlost",this[Ts]),t.registerScene(this[u]),this[$t]!=null&&(self.clearTimeout(this[$t]),this[$t]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Ye?this[_e].unobserve(this):self.removeEventListener("resize",this[Cs]),Je&&this[Le].unobserve(this),this.removeEventListener("focus",this[Ms]),this.removeEventListener("blur",this[Rs]);const t=this[R];t.removeEventListener("contextlost",this[Ts]),t.unregisterScene(this[u]),this[$t]=self.setTimeout(()=>{this[u].dispose(),this[$t]=null},ar)}updated(t){super.updated(t),t.has("src")&&(this.src==null?(this[kt]=!1,this[ue]=0,this[u].reset()):this.src!==this[u].url&&(this[kt]=!1,this[ue]=0,this[qt]())),t.has("alt")&&this[W].setAttribute("aria-label",this[Ht]),t.has("generateSchema")&&(this.generateSchema?this[u].updateSchema(this.src):this[u].updateSchema(null))}toDataURL(t,e){return this[R].displayCanvas(this[u]).toDataURL(t,e)}async toBlob(t){const e=t?t.mimeType:void 0,i=t?t.qualityArgument:void 0,s=t?t.idealAspect:void 0,{width:r,height:n,idealAspect:o,aspect:l}=this[u],{dpr:c,scaleFactor:f}=this[R];let m=r*f*c,b=n*f*c,h=0,w=0;if(s===!0)if(o>l){const S=b;b=Math.round(m/o),w=(S-b)/2}else{const S=m;m=Math.round(b*o),h=(S-m)/2}ut.width=m,ut.height=b;try{return new Promise(async(S,y)=>{ut.getContext("2d").drawImage(this[R].displayCanvas(this[u]),h,w,m,b,0,0,m,b),ut.toBlob(_=>{if(!_)return y(new Error("Unable to retrieve canvas blob"));S(_)},e,i)})}finally{this[ie]({width:r,height:n})}}registerEffectComposer(t){t.setRenderer(this[R].threeRenderer),t.setMainCamera(this[u].getCamera()),t.setMainScene(this[u]),this[u].effectRenderer=t}unregisterEffectComposer(){this[u].effectRenderer=null}registerRenderer(t){this[u].externalRenderer=t}unregisterRenderer(){this[u].externalRenderer=null}get[Ht](){return this[Zs]}get[Zs](){return this.alt==null||this.alt==="null"?this[wn]:this.alt}[xn](){return this[kt]}[Et](){return this.loaded&&this[wt]}[Wt](){return!!this.src&&this[wt]}[ie]({width:t,height:e}){t===0||e===0||(this[Pe].style.width=`${t}px`,this[Pe].style.height=`${e}px`,this[Be]({width:t,height:e}))}[at](t,e){var i;(i=this[u].effectRenderer)===null||i===void 0||i.beforeRender(t,e)}[Sn](){this[kt]||(this[kt]=!0,this[ue]=performance.now())}[D](){this[u].queueRender()}[X](){}[He](t){this[As]=t;const e=this.getRootNode();e!=null&&e.activeElement===this&&this[ne].textContent!=t&&(this[ne].textContent=t)}[(gn=Ms,vn=Rs,Be)](t){this[u].setSize(t.width,t.height)}async[(yn=Ts,qt)](){const t=this[u];if(this.loaded||!this[Wt]()||this.src===t.url)return;this.generateSchema&&t.updateSchema(this.src),this[He]("Loading"),t.stopAnimation();const e=this[St].beginActivity("model-load"),i=this.src;try{const s=t.setSource(i,n=>e(Ge(n,0,1)*.95)),r=this[Gs]();await Promise.all([s,r]),this[Sn](),this[X](),this.updateComplete.then(()=>{this.dispatchEvent(new CustomEvent("before-render"))}),await new Promise(n=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("load",{detail:{url:i}})),n()})})})}catch(s){this.dispatchEvent(new CustomEvent("error",{detail:{type:"loadfailure",sourceError:s}}))}finally{e(1)}}}Ke([g({type:String})],fe.prototype,"alt",void 0);Ke([g({type:String})],fe.prototype,"src",void 0);Ke([g({type:Boolean,attribute:"with-credentials"})],fe.prototype,"withCredentials",void 0);Ke([g({type:Boolean,attribute:"generate-schema"})],fe.prototype,"generateSchema",void 0);/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Is=function(a,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,t,e,i);else for(var o=a.length-1;o>=0;o--)(n=a[o])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r};const Cn=1e3,Oe=Symbol("changeAnimation"),it=Symbol("paused"),hr={repetitions:1/0,pingpong:!1},ur=a=>{var t;class e extends a{constructor(...s){super(s),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[t]=!0,this[u].subscribeMixerEvent("loop",r=>{const n=r.action._loopCount;this.dispatchEvent(new CustomEvent("loop",{detail:{count:n}}))}),this[u].subscribeMixerEvent("finished",()=>{this[it]=!0,this.dispatchEvent(new CustomEvent("finished"))})}get availableAnimations(){return this.loaded?this[u].animationNames:[]}get duration(){return this[u].duration}get paused(){return this[it]}get currentTime(){return this[u].animationTime}set currentTime(s){this[u].animationTime=s,this[D]()}get timeScale(){return this[u].animationTimeScale}set timeScale(s){this[u].animationTimeScale=s}pause(){this[it]||(this[it]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(s){this.availableAnimations.length>0&&(this[it]=!1,this[Oe](s),this.dispatchEvent(new CustomEvent("play")))}[(t=it,X)](){super[X](),this[it]=!0,this.animationName!=null&&this[Oe](),this.autoplay&&this.play()}[at](s,r){super[at](s,r),!(this[it]||!this[Et]()&&!this[R].isPresenting)&&(this[u].updateAnimation(r/Cn),this[D]())}updated(s){super.updated(s),s.has("autoplay")&&this.autoplay&&this.play(),s.has("animationName")&&this[Oe]()}[Oe](s=hr){var r;const n=(r=s.repetitions)!==null&&r!==void 0?r:1/0,o=s.pingpong?Fa:n===1?Da:Va;this[u].playAnimation(this.animationName,this.animationCrossfadeDuration/Cn,o,n),this[it]&&(this[u].updateAnimation(0),this[D]())}}return Is([g({type:Boolean})],e.prototype,"autoplay",void 0),Is([g({type:String,attribute:"animation-name"})],e.prototype,"animationName",void 0),Is([g({type:Number,attribute:"animation-crossfade-duration"})],e.prototype,"animationCrossfadeDuration",void 0),e};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=Symbol("hotspotMap"),_s=Symbol("mutationCallback"),ae=Symbol("observer"),Ls=Symbol("addHotspot"),Tn=Symbol("removeHotspot"),Os=new Pa,dr=a=>{var t,e,i;class s extends a{constructor(){super(...arguments),this[t]=new Map,this[e]=n=>{n.forEach(o=>{(!(o instanceof MutationRecord)||o.type==="childList")&&(o.addedNodes.forEach(l=>{this[Ls](l)}),o.removedNodes.forEach(l=>{this[Tn](l)}),this[D]())})},this[i]=new MutationObserver(this[_s])}connectedCallback(){super.connectedCallback();for(let o=0;o<this.children.length;++o)this[Ls](this.children[o]);const{ShadyDOM:n}=self;n==null?this[ae].observe(this,{childList:!0}):this[ae]=n.observeChildren(this,this[_s])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:n}=self;n==null?this[ae].disconnect():n.unobserveChildren(this[ae])}[(t=gt,e=_s,i=ae,X)](){super[X]();const n=this[u];n.forHotspots(o=>{n.updateSurfaceHotspot(o)})}[at](n,o){super[at](n,o);const l=this[u],{annotationRenderer:c}=l,f=l.getCamera();l.shouldRender()&&(l.animateSurfaceHotspots(),l.updateHotspotsVisibility(f.position),c.domElement.style.display="",c.render(l,f))}updateHotspot(n){const o=this[gt].get(n.name);o!=null&&(o.updatePosition(n.position),o.updateNormal(n.normal),o.surface=n.surface,this[u].updateSurfaceHotspot(o),this[D]())}queryHotspot(n){const o=this[gt].get(n);if(o==null)return null;const l=ct(o.position),c=ct(o.normal),f=o.facingCamera,m=this[u],b=m.getCamera(),h=new Ne;h.setFromMatrixPosition(o.matrixWorld),h.project(b);const w=m.width/2,S=m.height/2;h.x=h.x*w+w,h.y=-(h.y*S)+S;const y=ct(new Ne(h.x,h.y,h.z));return!Number.isFinite(y.x)||!Number.isFinite(y.y)?null:{position:l,normal:c,canvasPosition:y,facingCamera:f}}positionAndNormalFromPoint(n,o){const l=this[u],c=l.getNDC(n,o),f=l.positionAndNormalFromPoint(c);if(f==null)return null;Os.copy(l.target.matrixWorld).invert();const m=ct(f.position.applyMatrix4(Os)),b=ct(f.normal.transformDirection(Os));let h=null;return f.uv!=null&&(h=Ys(f.uv)),{position:m,normal:b,uv:h}}surfaceFromPoint(n,o){const l=this[u],c=l.getNDC(n,o);return l.surfaceFromPoint(c)}[Ls](n){if(!(n instanceof HTMLElement&&n.slot.indexOf("hotspot")===0))return;let o=this[gt].get(n.slot);o!=null?o.increment():(o=new Na({name:n.slot,position:n.dataset.position,normal:n.dataset.normal,surface:n.dataset.surface}),this[gt].set(n.slot,o),this[u].addHotspot(o)),this[u].queueRender()}[Tn](n){if(!(n instanceof HTMLElement))return;const o=this[gt].get(n.slot);o&&(o.decrement()&&(this[u].removeHotspot(o),this[gt].delete(n.slot)),this[u].queueRender())}}return s};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=a=>t=>{try{const e=Js(t),i=(e.length?e[0].terms:[]).filter(s=>s&&s.type==="ident").map(s=>s.value).filter(s=>a.indexOf(s)>-1);return new Set(i)}catch{}return new Set};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft=function(a,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,t,e,i);else for(var o=a.length-1;o>=0;o--)(n=a[o])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r};let An=!1,Mn=!1;const Rn="#model-viewer-no-ar-fallback",pr=mr(["quick-look","scene-viewer","webxr","none"]),fr="webxr scene-viewer quick-look",H={QUICK_LOOK:"quick-look",SCENE_VIEWER:"scene-viewer",WEBXR:"webxr",NONE:"none"},nt=Symbol("arButtonContainer"),In=Symbol("enterARWithWebXR"),_n=Symbol("openSceneViewer"),Ln=Symbol("openIOSARQuickLook"),br=Symbol("canActivateAR"),$e=Symbol("arMode"),$s=Symbol("arModes"),Dt=Symbol("arAnchor"),ke=Symbol("preload"),Fe=Symbol("onARButtonContainerClick"),ks=Symbol("onARStatus"),Fs=Symbol("onARTracking"),Ds=Symbol("onARTap"),oe=Symbol("selectARMode"),Vs=Symbol("triggerLoad"),gr=a=>{var t,e,i,s,r,n,o,l,c,f;class m extends a{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes=fr,this.iosSrc=null,this.xrEnvironment=!1,this[t]=!1,this[e]=this.shadowRoot.querySelector(".ar-button"),this[i]=document.createElement("a"),this[s]=new Set,this[r]=H.NONE,this[n]=!1,this[o]=h=>{h.preventDefault(),this.activateAR()},this[l]=({status:h})=>{(h===Kt.NOT_PRESENTING||this[R].arRenderer.presentedScene===this[u])&&(this.setAttribute("ar-status",h),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:h}})),h===Kt.NOT_PRESENTING?this.removeAttribute("ar-tracking"):h===Kt.SESSION_STARTED&&this.setAttribute("ar-tracking",Ua.TRACKING))},this[c]=({status:h})=>{this.setAttribute("ar-tracking",h),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:h}}))},this[f]=h=>{h.data=="_apple_ar_quicklook_button_tapped"&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[$e]!==H.NONE}connectedCallback(){super.connectedCallback(),this[R].arRenderer.addEventListener("status",this[ks]),this.setAttribute("ar-status",Kt.NOT_PRESENTING),this[R].arRenderer.addEventListener("tracking",this[Fs]),this[Dt].addEventListener("message",this[Ds])}disconnectedCallback(){super.disconnectedCallback(),this[R].arRenderer.removeEventListener("status",this[ks]),this[R].arRenderer.removeEventListener("tracking",this[Fs]),this[Dt].removeEventListener("message",this[Ds])}update(h){super.update(h),h.has("arScale")&&(this[u].canScale=this.arScale!=="fixed"),h.has("arPlacement")&&(this[u].updateShadow(),this[D]()),h.has("arModes")&&(this[$s]=pr(this.arModes)),(h.has("ar")||h.has("arModes")||h.has("src")||h.has("iosSrc"))&&this[oe]()}async activateAR(){switch(this[$e]){case H.QUICK_LOOK:await this[Ln]();break;case H.WEBXR:await this[In]();break;case H.SCENE_VIEWER:this[_n]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities");break}}async[(t=br,e=nt,i=Dt,s=$s,r=$e,n=ke,o=Fe,l=ks,c=Fs,f=Ds,oe)](){var h;let w=H.NONE;if(this.ar){if(this.src!=null)for(const S of this[$s]){if(S==="webxr"&&qn&&!An&&await this[R].arRenderer.supportsPresentation()){w=H.WEBXR;break}if(S==="scene-viewer"&&!Mn&&(Ga||navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues&&(!((h=(await navigator.userAgentData.getHighEntropyValues(["formFactor"])).formFactor)===null||h===void 0)&&h.includes("XR")))){w=H.SCENE_VIEWER;break}if(S==="quick-look"&&ii){w=H.QUICK_LOOK;break}}w===H.NONE&&this.iosSrc!=null&&ii&&(w=H.QUICK_LOOK)}if(w!==H.NONE)this[nt].classList.add("enabled"),this[nt].addEventListener("click",this[Fe]);else if(this[nt].classList.contains("enabled")){this[nt].removeEventListener("click",this[Fe]),this[nt].classList.remove("enabled");const S=Kt.FAILED;this.setAttribute("ar-status",S),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:S}}))}this[$e]=w}async[In](){console.log("Attempting to present in AR with WebXR..."),await this[Vs]();try{this[nt].removeEventListener("click",this[Fe]);const{arRenderer:h}=this[R];h.placeOnWall=this.arPlacement==="wall",await h.present(this[u],this.xrEnvironment)}catch(h){console.warn("Error while trying to present in AR with WebXR"),console.error(h),await this[R].arRenderer.stopPresenting(),An=!0,console.warn("Falling back to next ar-mode"),await this[oe](),this.activateAR()}finally{this[oe]()}}async[Vs](){this.loaded||(this[ke]=!0,this[qt](),await Ya(this,"load"),this[ke]=!1)}[Wt](){return super[Wt]()||this[ke]}[_n](){const h=self.location.toString(),w=new URL(h),S=new URL(this.src,h);S.hash&&(S.hash="");const y=new URLSearchParams(S.search);if(w.hash=Rn,y.set("mode","ar_preferred"),y.has("disable_occlusion")||y.set("disable_occlusion","true"),this.arScale==="fixed"&&y.set("resizable","false"),this.arPlacement==="wall"&&y.set("enable_vertical_placement","true"),y.has("sound")){const C=new URL(y.get("sound"),h);y.set("sound",C.toString())}if(y.has("link")){const C=new URL(y.get("link"),h);y.set("link",C.toString())}const _=`intent://arvr.google.com/scene-viewer/1.2?${y.toString()+"&file="+encodeURIComponent(S.toString())}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(w.toString())};end;`,P=()=>{self.location.hash===Rn&&(Mn=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[oe]())};self.addEventListener("hashchange",P,{once:!0}),this[Dt].setAttribute("href",_),console.log("Attempting to present in AR with Scene Viewer..."),this[Dt].click()}async[Ln](){const h=!this.iosSrc;this[nt].classList.remove("enabled");const w=h?await this.prepareUSDZ():this.iosSrc,S=new URL(w,self.location.toString());if(h){const P=self.location.toString(),C=new URL(P),Xt=new URL(this.src,C);Xt.hash&&(S.hash=Xt.hash)}this.arScale==="fixed"&&(S.hash&&(S.hash+="&"),S.hash+="allowsContentScaling=0");const y=this[Dt];y.setAttribute("rel","ar");const _=document.createElement("img");y.appendChild(_),y.setAttribute("href",S.toString()),h&&y.setAttribute("download","model.usdz"),y.style.display="none",y.isConnected||this.shadowRoot.appendChild(y),console.log("Attempting to present in AR with Quick Look..."),y.click(),y.removeChild(_),h&&URL.revokeObjectURL(w),this[nt].classList.add("enabled")}async prepareUSDZ(){const h=this[St].beginActivity("usdz-conversion");await this[Vs]();const{model:w,shadow:S,target:y}=this[u];if(w==null)return"";let _=!1;S!=null&&(_=S.visible,S.visible=!1),h(.2);const P=new za;y.remove(w),w.position.copy(y.position),w.updateWorldMatrix(!1,!0);const C=await P.parseAsync(w);w.position.set(0,0,0),y.add(w);const Xt=new Blob([C],{type:"model/vnd.usdz+zip"}),d=URL.createObjectURL(Xt);return h(1),S!=null&&(S.visible=_),d}}return Ft([g({type:Boolean,attribute:"ar"})],m.prototype,"ar",void 0),Ft([g({type:String,attribute:"ar-scale"})],m.prototype,"arScale",void 0),Ft([g({type:String,attribute:"ar-placement"})],m.prototype,"arPlacement",void 0),Ft([g({type:String,attribute:"ar-modes"})],m.prototype,"arModes",void 0),Ft([g({type:String,attribute:"ios-src"})],m.prototype,"iosSrc",void 0),Ft([g({type:Boolean,attribute:"xr-environment"})],m.prototype,"xrEnvironment",void 0),m};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ps=function(a,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,t,e,i);else for(var o=a.length-1;o>=0;o--)(n=a[o])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r};const vr=100,yr="https://www.gstatic.com/draco/versioned/decoders/1.5.6/",wr="https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/",Sr="https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/LottieLoader.js",Ns={AUTO:"auto"},On={AUTO:"auto",EAGER:"eager"},Vt=Symbol("defaultProgressBarElement"),Us=Symbol("posterContainerElement"),Pt=Symbol("defaultPosterElement"),re=Symbol("shouldDismissPoster"),zs=Symbol("hidePoster"),De=Symbol("modelIsRevealed"),Hs=Symbol("updateProgressBar"),Er=Symbol("ariaLabelCallToAction"),Bs=Symbol("onProgress"),xr=a=>{var t,e,i,s,r,n,o,l;class c extends a{constructor(...m){super(...m),this.poster=null,this.reveal=Ns.AUTO,this.loading=On.AUTO,this[t]=!1,this[e]=!1,this[i]=this.shadowRoot.querySelector(".slot.poster"),this[s]=this.shadowRoot.querySelector("#default-poster"),this[r]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[n]=this[Pt].getAttribute("aria-label"),this[o]=Za(y=>{const _=this[Vt].parentNode;requestAnimationFrame(()=>{this[Vt].style.transform=`scaleX(${y})`,y===0&&(_.removeChild(this[Vt]),_.appendChild(this[Vt])),this[Vt].classList.toggle("hide",y===1)})},vr),this[l]=y=>{const _=y.detail.totalProgress,P=y.detail.reason;_===1&&(this[Hs].flush(),this.loaded&&(this[re]||this.reveal===Ns.AUTO)&&this[zs]()),this[Hs](_),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:_,reason:P}}))};const b=self.ModelViewerElement||{},h=b.dracoDecoderLocation||yr;q.setDRACODecoderLocation(h);const w=b.ktx2TranscoderLocation||wr;q.setKTX2TranscoderLocation(w),b.meshoptDecoderLocation&&q.setMeshoptDecoderLocation(b.meshoptDecoderLocation);const S=b.lottieLoaderLocation||Sr;ht.singleton.textureUtils.lottieLoaderUrl=S}static set dracoDecoderLocation(m){q.setDRACODecoderLocation(m)}static get dracoDecoderLocation(){return q.getDRACODecoderLocation()}static set ktx2TranscoderLocation(m){q.setKTX2TranscoderLocation(m)}static get ktx2TranscoderLocation(){return q.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(m){q.setMeshoptDecoderLocation(m)}static get meshoptDecoderLocation(){return q.getMeshoptDecoderLocation()}static set lottieLoaderLocation(m){ht.singleton.textureUtils.lottieLoaderUrl=m}static get lottieLoaderLocation(){return ht.singleton.textureUtils.lottieLoaderUrl}static mapURLs(m){ht.singleton.loader[Ha].manager.setURLModifier(m)}dismissPoster(){this.loaded?this[zs]():(this[re]=!0,this[qt]())}showPoster(){const m=this[Us];if(m.classList.contains("show"))return;m.classList.add("show"),this[W].classList.remove("show");const b=this[Pt];b.removeAttribute("tabindex"),b.removeAttribute("aria-hidden");const h=this.modelIsVisible;this[De]=!1,this[ze](h)}getDimensions(){return ct(this[u].size)}getBoundingBoxCenter(){return ct(this[u].boundingBox.getCenter(new Ne))}connectedCallback(){super.connectedCallback(),this.loaded||this.showPoster(),this[St].addEventListener("progress",this[Bs])}disconnectedCallback(){super.disconnectedCallback(),this[St].removeEventListener("progress",this[Bs])}async updated(m){super.updated(m),m.has("poster")&&this.poster!=null&&(this[Pt].style.backgroundImage=`url(${this.poster})`),m.has("alt")&&this[Pt].setAttribute("aria-label",this[Zs]),(m.has("reveal")||m.has("loading"))&&this[qt]()}[(t=De,e=re,i=Us,s=Pt,r=Vt,n=Er,o=Hs,l=Bs,Wt)](){return!!this.src&&(this[re]||this.loading===On.EAGER||this.reveal===Ns.AUTO&&this[wt])}[zs](){this[re]=!1;const m=this[Us];if(!m.classList.contains("show"))return;m.classList.remove("show"),this[W].classList.add("show");const b=this.modelIsVisible;this[De]=!0,this[ze](b);const h=this.getRootNode();h&&h.activeElement===this&&this[W].focus();const w=this[Pt];w.setAttribute("aria-hidden","true"),w.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))}[Et](){return super[Et]()&&this[De]}}return Ps([g({type:String})],c.prototype,"poster",void 0),Ps([g({type:String})],c.prototype,"reveal",void 0),Ps([g({type:String})],c.prototype,"loading",void 0),c};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var js=function(a,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,t,e,i);else for(var o=a.length-1;o>=0;o--)(n=a[o])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r};const Cr=Math.PI/32,Tr=3e3,Ar={basis:[Xe(V(Cr,"rad"))],keywords:{auto:[null]}},Nt=Symbol("autoRotateStartTime"),qs=Symbol("radiansPerSecond"),$n=Symbol("syncRotationRate"),Ws=Symbol("onCameraChange"),Mr=a=>{var t,e,i;class s extends a{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=Tr,this.rotationPerSecond="auto",this[t]=performance.now(),this[e]=0,this[i]=n=>{this.autoRotate&&n.detail.source==="user-interaction"&&(this[Nt]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[Ws]),this[Nt]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[Ws]),this[Nt]=performance.now()}updated(n){super.updated(n),n.has("autoRotate")&&(this[Nt]=performance.now())}[(t=Nt,e=qs,$n)](n){this[qs]=n[0]}[at](n,o){if(super[at](n,o),!this.autoRotate||!this[Et]()||this[R].isPresenting)return;const l=Math.min(o,n-this[Nt]-this.autoRotateDelay);l>0&&(this[u].yaw=this.turntableRotation+this[qs]*l*.001)}get turntableRotation(){return this[u].yaw}resetTurntableRotation(n=0){this[u].yaw=n}}return i=Ws,js([g({type:Boolean,attribute:"auto-rotate"})],s.prototype,"autoRotate",void 0),js([g({type:Number,attribute:"auto-rotate-delay"})],s.prototype,"autoRotateDelay",void 0),js([lt({intrinsics:Ar,updateHandler:$n}),g({type:String,attribute:"rotation-per-second"})],s.prototype,"rotationPerSecond",void 0),s};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=dr(ir(Mr(io(Ho(gr(xr(ur(fe))))))));customElements.define("model-viewer",Rr);export{zo as $,kr as C,Lr as a,ve as b,Ge as c,ye as d,Ka as e,Gs as f,En as g,ie as h,Or as i,at as j,R as k,Ss as l,Es as m,me as n,Ot as o,Js as p,an as q,tr as r,$r as t};
