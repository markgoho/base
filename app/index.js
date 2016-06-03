System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/+home/home.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-home",templateUrl:"home.component.html",styleUrls:["home.component.css"]}),e("design:paramtypes",[])],a)}();return b.HomeComponent=g,c.exports}),System.registerDynamic("app/+home/index.js",["./home.component"],!0,function(a,b,c){"use strict";var d=a("./home.component");return b.HomeComponent=d.HomeComponent,c.exports}),System.registerDynamic("app/+fbtest/fbtest.component.js",["@angular/core","angularfire2"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("angularfire2"),h=function(){function a(a){this.af=a,this.items=a.database.list("/items")}return a.prototype.ngOnInit=function(){},a.prototype.add=function(a){this.items.push({text:a})},a.prototype.update=function(a,b){this.items.update(b,{size:a})},a.prototype.deleteItem=function(a){this.items.remove(a)},a.prototype.deleteEverything=function(){this.items.remove()},a=d([f.Component({moduleId:c.id,selector:"app-fbtest",templateUrl:"fbtest.component.html",styleUrls:["fbtest.component.css"]}),e("design:paramtypes",[g.AngularFire])],a)}();return b.FbtestComponent=h,c.exports}),System.registerDynamic("app/+fbtest/index.js",["./fbtest.component"],!0,function(a,b,c){"use strict";var d=a("./fbtest.component");return b.FbtestComponent=d.FbtestComponent,c.exports}),System.registerDynamic("app/auth/auth.component.js",["@angular/core","@angular2-material/button","@angular2-material/card/card","@angular2-material/icon","@angular2-material/icon/icon-registry","angularfire2"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular2-material/button"),h=a("@angular2-material/card/card"),i=a("@angular2-material/icon"),j=a("@angular2-material/icon/icon-registry"),k=a("angularfire2"),l=function(){function a(a){var b=this;this.auth=a,this.authCardOpen=!1,a.subscribe(function(a){b.authData=a})}return a.prototype.ngOnInit=function(){},a.prototype.toggleCardOpen=function(){this.authData&&(this.authCardOpen=!this.authCardOpen)},a.prototype.login=function(){this.auth.login()},a.prototype.logout=function(){this.auth.logout()},a=d([f.Component({moduleId:c.id,selector:"app-auth",templateUrl:"auth.component.html",styleUrls:["auth.component.css"],directives:[g.MdButton,h.MD_CARD_DIRECTIVES,i.MdIcon],providers:[j.MdIconRegistry]}),e("design:paramtypes",[k.FirebaseAuth])],a)}();return b.AuthComponent=l,c.exports}),System.registerDynamic("app/auth/index.js",["./auth.component"],!0,function(a,b,c){"use strict";var d=a("./auth.component");return b.AuthComponent=d.AuthComponent,c.exports}),System.registerDynamic("app/base.component.js",["@angular/core","@angular/router","./+home","@angular2-material/toolbar","@angular2-material/button","@angular2-material/sidenav","@angular2-material/icon","@angular2-material/icon/icon-registry","@angular2-material/list","./+fbtest","./auth"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=a("./+home"),i=a("@angular2-material/toolbar"),j=a("@angular2-material/button"),k=a("@angular2-material/sidenav"),l=a("@angular2-material/icon"),m=a("@angular2-material/icon/icon-registry"),n=a("@angular2-material/list"),o=a("./+fbtest"),p=a("./auth"),q=function(){function a(){this.navItems=[{route:["/"],label:"Home",icon:"home",description:"Go Home"},{route:["/fbtest"],label:"Firebase Test",icon:"storage",description:"Firebase Tests"},{route:["/snippet"],label:"Snippets",icon:"content_cut",description:"Code Snippets"}]}return a=d([f.Component({moduleId:c.id,selector:"base-app",templateUrl:"base.component.html",styleUrls:["base.component.css"],directives:[g.ROUTER_DIRECTIVES,k.MD_SIDENAV_DIRECTIVES,n.MD_LIST_DIRECTIVES,i.MdToolbar,l.MdIcon,j.MdButton,p.AuthComponent],providers:[m.MdIconRegistry,g.ROUTER_PROVIDERS]}),g.Routes([{path:"/",component:h.HomeComponent},{path:"/fbtest",component:o.FbtestComponent}]),e("design:paramtypes",[])],a)}();return b.BaseAppComponent=q,c.exports}),System.registerDynamic("app/index.js",["./environment","./base.component"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}return d(a("./environment")),d(a("./base.component")),c.exports});