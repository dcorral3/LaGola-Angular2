webpackJsonp([1],{0:function(e,t,n){e.exports=n("cDNt")},"2alI":function(e,t,n){e.exports=n.p+"fondoMenu.adfb8648e172378390b5.jpg"},BJbv:function(e,t,n){"use strict";var r=n("qbdv"),i=n("/oeL"),o=n("fL27"),a=n("MVVB"),c=n("ECCM");n.d(t,"a",function(){return d});var s=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},d=function(){function e(){}return e}();d=s([n.i(i.b)({imports:[o.a,r.a,a.a],declarations:[c.a]})],d)},ECCM:function(e,t,n){"use strict";var r=n("/oeL");n.d(t,"a",function(){return o});var i=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},o=function(){function e(){}return e}();o=i([n.i(r.c)({selector:"app-home",template:n("PpIx"),styles:[n("Y/Sa")]})],o)},"K/uD":function(e,t){e.exports='<div class="bgImg"></div>\r\n\r\n<div class="row ">\r\n    <mz-card *ngFor="let menu of menus" class="col s12 m12 l6" [backgroundClass]="\'txt-color2 bg-color1 z-depth-4 myFlex\'">\r\n        <mz-card-title>\r\n            <h1 class="titleMenu">{{menu.title}}</h1>\r\n        \r\n        </mz-card-title>\r\n        <mz-card-content style="text-align:center;">\r\n            <h4>{{menu.header1}}</h4><br>\r\n            <h5  *ngFor="let primero of menu.primeros">{{primero}}<br></h5><br>\r\n            <div class="divider"></div>\r\n            <br>\r\n            <h4>{{menu.header2}}</h4>\r\n            <br>\r\n            <h5 *ngFor="let segundo of menu.segundos">{{segundo}}<br></h5>\r\n            <br>\r\n            <div class="divider"></div>\r\n            <br>\r\n            <h6>*{{menu.included}}</h6>\r\n            \r\n        </mz-card-content>\r\n    </mz-card>\r\n</div>'},PpIx:function(e,t){e.exports='<div class="container">\r\n  <mz-parallax class="header-background" [height]="261">\r\n    <img src="assets/prallax1.png">\r\n  </mz-parallax>\r\n  <div class="header-text">\r\n    <h1 class="title"><span>LA GOLA</span></h1>\r\n    <h2 class="subtitle"><span>(COMER y BEBER)</span></h2>\r\n  </div>\r\n\r\n  <mz-card [backgroundClass]="\'txt-color1 bg-color2 introCard z-depth-5\'">\r\n    <mz-card-title>\r\n      <h2>Bienvenidos</h2>\r\n    </mz-card-title>\r\n    <mz-card-content>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni fugiat molestiae illum adipisci hic mollitia provident\r\n        eveniet minima ut architecto ad, deserunt quisquam ab voluptas repudiandae perspiciatis modi animi! Lorem ipsum dolor\r\n        sit amet, consectetur adipisicing elit. Voluptates, consequuntur sequi neque dicta cum deleniti laborum error sit\r\n        consequatur cupiditate eum qui, accusantium facilis! Quam dignissimos recusandae quos, hic rerum.</p>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni fugiat molestiae illum adipisci hic mollitia provident\r\n        eveniet minima ut architecto ad, deserunt quisquam ab voluptas repudiandae perspiciatis modi animi! Lorem ipsum dolor\r\n        sit amet, consectetur adipisicing elit. Voluptates, consequuntur sequi neque dicta cum deleniti laborum error sit\r\n        consequatur cupiditate eum qui, accusantium facilis! Quam dignissimos recusandae quos, hic rerum.</p>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni fugiat molestiae illum adipisci hic mollitia provident\r\n        eveniet minima ut architecto ad, deserunt quisquam ab voluptas repudiandae perspiciatis modi animi! Lorem ipsum dolor\r\n        sit amet, consectetur adipisicing elit. Voluptates, consequuntur sequi neque dicta cum deleniti laborum error sit\r\n        consequatur cupiditate eum qui, accusantium facilis! Quam dignissimos recusandae quos, hic rerum.</p>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni fugiat molestiae illum adipisci hic mollitia provident\r\n        eveniet minima ut architecto ad, deserunt quisquam ab voluptas repudiandae perspiciatis modi animi! Lorem ipsum dolor\r\n        sit amet, consectetur adipisicing elit. Voluptates, consequuntur sequi neque dicta cum deleniti laborum error sit\r\n        consequatur cupiditate eum qui, accusantium facilis! Quam dignissimos recusandae quos, hic rerum.</p>\r\n\r\n    </mz-card-content>\r\n  </mz-card>\r\n\r\n\r\n\r\n</div>'},Topf:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".bg-color1{background-color:#d6d4c2!important}.bg-color2{background-color:#343f48!important}.txt-color1{color:#d6d4c2}.txt-color2{color:#343f48}.bgImg{background-image:url("+n("2alI")+");position:fixed;top:0;right:0;width:100%;height:100vh;background-size:cover}@media only screen and (max-width:992px){.bgImg{padding-top:55px}}.row{margin:2em}.titleMenu{text-align:center!important;margin:0!important;padding:10px!important;margin-bottom:50px!important;padding-bottom:10px;border-bottom-style:solid;border-width:1px}h4{text-decoration:underline}.divider{background-color:#d6d4c2;border-top-style:dashed;border-width:1px;display:block!important;-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important;width:60%;margin:auto}.myFlex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-line-pack:center!important;align-content:center!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}",""]),e.exports=e.exports.toString()},W675:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".bg-color1{background-color:#d6d4c2!important}.bg-color2{background-color:#343f48!important}.txt-color1{color:#d6d4c2}.txt-color2{color:#343f48}header /deep/ .side-nav{padding-bottom:0;height:100%}header /deep/ .sidenav-background,header /deep/ .sidenav-button{background:#343f48!important}header /deep/ .sidenav-button{position:fixed;top:16px;left:16px;z-index:24}header .sidenav-header{display:block}header a{font-family:Ailerons;text-align:center;font-size:30px;color:#d6d4c2;height:auto;padding:0}header .laGola-logo{display:block;margin:0 auto;width:100%}@media only screen and (min-width:993px){main{padding-left:300px}}.button-share{color:#d6d4c2;border-radius:50%!important;background-color:#343f48}",""]),e.exports=e.exports.toString()},"Y/Sa":function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".bg-color1{background-color:#d6d4c2!important}.bg-color2{background-color:#343f48!important}.txt-color1{color:#d6d4c2}.txt-color2{color:#343f48}.header-background{box-shadow:inset 0 -1px 32px rgba(0,0,0,.33);position:absolute;left:0;top:0;width:100%}.title{text-align:center;color:#000;font-size:100px;margin-bottom:13px!important;text-shadow:2px 1px 2px #969696}@media only screen and (min-width:601px){.title{font-size:100px}}.title span{padding-bottom:20px}.subtitle{text-align:center;color:#000;font-size:50.2px;text-shadow:2px 1px 2px #969696}@media only screen and (min-width:601px){.subtitle{font-size:60px}}.subtitle span{margin:0;padding-bottom:11px}.header-text{margin-top:15px;margin-bottom:45px}@media only screen and (min-width:601px){.header-text{margin-bottom:40px}}.container{width:100%!important;padding-left:2%;padding-right:2%}.introCard{padding:50px!important}",""]),e.exports=e.exports.toString()},"aR8+":function(e,t,n){"use strict";var r=n("fc+i"),i=n("/oeL"),o=n("fL27"),a=n("BkNc"),c=n("MVVB"),s=n("jHMo"),d=n("wQAS"),l=n("BJbv"),u=n("xPtR");n.d(t,"a",function(){return m});var p=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},m=function(){function e(){}return e}();m=p([n.i(i.b)({declarations:[d.a],imports:[r.a,o.a,a.a.forRoot(s.a),c.a.forRoot(),l.a,u.a],providers:[],bootstrap:[d.a]})],m)},cDNt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/oeL"),i=n("Qa4U"),o=n("aR8+");n("p5Ee").a.production&&n.i(r.a)(),n.i(i.a)().bootstrapModule(o.a)},efyd:function(e,t){e.exports='<header>\r\n  <mz-sidenav #sidenav [id]="\'sidenav\'" [collapseButtonId]="\'btn-sidenav\'" [fixed]="\'true\'" [backgroundClass]="\'sidenav-background\'">\r\n\r\n    <mz-sidenav-header class="sidenav-header z-depth-1">\r\n      <a [routerLink]="\'home\'">\r\n        <img class="laGola-logo" src="assets/LaGola_Red1.jpg">\r\n      </a>\r\n    </mz-sidenav-header>\r\n\r\n    <mz-sidenav-link>\r\n      <a [routerLink]="\'home\'" class="waves-effect">Inicio</a>\r\n    </mz-sidenav-link>\r\n    <mz-sidenav-link>\r\n      <a [routerLink]="\'menu\'" class="waves-effect">Menús</a>\r\n    </mz-sidenav-link>\r\n    <mz-sidenav-link>\r\n      <a [routerLink]="\'home\'" class="waves-effect">Carta</a>\r\n    </mz-sidenav-link>\r\n    <mz-sidenav-link>\r\n      <a [routerLink]="\'home\'" class="waves-effect">Opina</a>\r\n    </mz-sidenav-link>\r\n    <mz-sidenav-link>\r\n      <a [routerLink]="\'home\'" class="waves-effect">Contacto</a>\r\n    </mz-sidenav-link>\r\n  </mz-sidenav>\r\n\r\n  <button mz-button class="sidenav-button hide-on-large-only" id="btn-sidenav" [float]="false" [large]="false">\r\n    <i mz-icon-mdi [icon]="\'menu\'"></i>\r\n  </button>\r\n  <div class="fixed-action-btn click-to-toggle horizontal">\r\n    <a class="btn-floating btn-large button-share">\r\n      <i class="large material-icons">share</i>\r\n    </a>\r\n    <ul>\r\n      <li>\r\n        <a mz-button [float]="\'true\'" ButtonType="LinkButton" href="https://es-es.facebook.com/lagolacomerybeber/" target="_blank">\r\n            <i mz-icon-mdi\r\n            [align]="\'right\'"\r\n            [icon]="\'facebook\'"\r\n            [size]="\'small\'">\r\n            </i>\r\n        </a>\r\n      </li>\r\n      <li class="hide-on-med-and-down">\r\n        <a mz-button [float]="\'true\'" ButtonType="LinkButton" href="https://twitter.com/lagolacyb" target="_blank">\r\n            <i mz-icon-mdi\r\n            [align]="\'right\'"\r\n            [icon]="\'twitter\'"\r\n            [size]="\'small\'">\r\n            </i>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a mz-button [float]="\'true\'" ButtonType="LinkButton" href="https://goo.gl/maps/B4CXigfJdmt" target="_blank">\r\n            <i mz-icon-mdi\r\n            [align]="\'right\'"\r\n            [icon]="\'google\'"\r\n            [size]="\'small\'">\r\n            </i>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a mz-button [float]="\'true\'" ButtonType="LinkButton" href="https://www.tripadvisor.es/Restaurant_Review-g562644-d12064396-Reviews-La_Gola-Alcala_De_Henares.html"\r\n          target="_blank">\r\n           <i class="fa fa-tripadvisor"></i>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a mz-button [float]="\'true\'" ButtonType="LinkButton" href="https://es-es.facebook.com/lagolacomerybeber/" target="_blank">\r\n            <i mz-icon-mdi\r\n            [align]="\'right\'"\r\n            [icon]="\'instagram\'"\r\n            [size]="\'small\'">\r\n            </i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</header>\r\n\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<footer>\r\n</footer>'},hw7I:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(){function e(e,t,n,r,i,o){this.title=e,this.header1=t,this.primeros=n,this.header2=r,this.segundos=i,this.included=o}return e}()},jHMo:function(e,t,n){"use strict";var r=n("ECCM"),i=n("xdOQ");n.d(t,"a",function(){return o});var o=[{path:"home",component:r.a},{path:"menu",component:i.a},{path:"**",redirectTo:"home"}]},n7du:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="n7du"},p5Ee:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={production:!1}},wQAS:function(e,t,n){"use strict";var r=n("/oeL");n.d(t,"a",function(){return o});var i=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},o=function(){function e(){this.title="app"}return e}();o=i([n.i(r.c)({selector:"app-root",template:n("efyd"),styles:[n("W675")]})],o)},xPtR:function(e,t,n){"use strict";var r=n("qbdv"),i=n("/oeL"),o=n("fL27"),a=n("MVVB"),c=n("xdOQ");n.d(t,"a",function(){return d});var s=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},d=function(){function e(){}return e}();d=s([n.i(i.b)({imports:[o.a,r.a,a.a],declarations:[c.a]})],d)},xdOQ:function(e,t,n){"use strict";var r=n("/oeL"),i=n("hw7I");n.d(t,"a",function(){return a});var o=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},a=function(){function e(){this.menus=[new i.a("Menú diario","Primeros",["Ensalada de pasta","Crema de setas","Revuelto de morcilla","Gazpacho"],"Segundos",["Costillas ibericas","Alitas fritas con salsa picante","Chanquetes"],"Postre, pan y bebida incluidos"),new i.a("Menú Especial","Primeros",["Paella de marisco","Pimiento relleno de queso y cangrejo","Ensalada de pollo y manzana","Gazpacho"],"Segundos",["Pierna de cordero asada","Entrecot con pimiento de padrón","Bacalao a la riojana"],"Postre, pan y bebida incluidos")]}return e}();a=o([n.i(r.c)({selector:"app-menu",template:n("K/uD"),styles:[n("Topf")]})],a)}},[0]);