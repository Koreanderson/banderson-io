(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,4],{305:function(t,e,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("b940d314",content,!0,{sourceMap:!1})},307:function(t,e,n){"use strict";n(305)},308:function(t,e,n){var o=n(26)((function(i){return i[1]}));o.push([t.i,".squares[data-v-b93fe006]{position:absolute;transition-delay:.5s}.top[data-v-b93fe006]{background-color:#beeed2;top:0;left:0;width:25%;height:25%;-webkit-animation:fade-up;animation:fade-up;-webkit-animation-delay:1.25s;animation-delay:1.25s;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.middle[data-v-b93fe006],.top[data-v-b93fe006]{position:absolute;opacity:0}.middle[data-v-b93fe006]{background-color:rgba(190,238,210,.5);right:0;width:46%;height:46%;top:15%;z-index:0;-webkit-animation:fade-up;animation:fade-up;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:.8s;animation-delay:.8s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.bottom[data-v-b93fe006]{background-color:#e9fff2;position:absolute;bottom:0;left:25%;width:60%;height:60%;z-index:-10;-webkit-animation:fade-up;animation:fade-up;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;opacity:0}",""]),o.locals={},t.exports=o},309:function(t,e,n){"use strict";n.r(e);var o={name:"Squares",props:{size:{type:String,default:"64px"}},computed:{squaresStyles:function(){return{width:this.size,height:this.size}}}},r=(n(307),n(33)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"squares",style:t.squaresStyles},[n("div",{staticClass:"top"}),t._v(" "),n("div",{staticClass:"middle"}),t._v(" "),n("div",{staticClass:"bottom"})])}),[],!1,null,"b93fe006",null);e.default=component.exports},312:function(t,e,n){"use strict";n.r(e);var o={name:"Experience",props:{roles:Array},setup:function(){}},r=n(33),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.roles,(function(e){return n("div",{key:e.company,staticClass:"mb-10 md:mt-10"},[n("h3",[t._v(t._s(e.company))]),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row justify-between flex-wrap"},[n("h6",[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"h6"},[t._v(t._s(e.duration))]),t._v(" "),n("div",{staticClass:"mt-5 w-full text-sm"},[t._v(t._s(e.description))])])])})),0)}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("8b1fdc3c",content,!0,{sourceMap:!1})},322:function(t,e,n){"use strict";n(315)},323:function(t,e,n){var o=n(26)((function(i){return i[1]}));o.push([t.i,'.wrapper[data-v-c8628b7c]:before{background-color:#e9fff2;content:"";display:none;position:absolute;top:0;bottom:0;left:-1.25rem;height:7.75rem;width:11rem;z-index:-20;-webkit-animation:fade-up;animation:fade-up;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;opacity:0}@media only screen and (min-width:768px){.wrapper[data-v-c8628b7c]:before{display:block;top:0;bottom:0;left:-1.25rem;width:13rem;height:auto}}',""]),o.locals={},t.exports=o},340:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(49),{name:"Experience",transitions:"page",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,o=t.error,e.next=3,n("experience").fetch().catch((function(t){o({statusCode:404,message:"Page not found"})}));case 3:return r=e.sent,e.abrupt("return",{page:r});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Experience"}},setup:function(){}}),l=(n(322),n(33)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper relative md:py-20 py-5 mx-auto mb-20 max-w-screen-xl"},[n("Squares",{staticClass:"absolute top-0 right-0",attrs:{size:"120px"}}),t._v(" "),n("div",{staticClass:"relative max-w-xl"},[n("NuxtContent",{attrs:{document:t.page}}),t._v(" "),n("ExperienceContent",{attrs:{roles:t.page.roles}})],1)],1)}),[],!1,null,"c8628b7c",null);e.default=component.exports;installComponents(component,{Squares:n(309).default,ExperienceContent:n(312).default})}}]);