(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{aGRN:function(n,e,t){"use strict";t.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'udemo-layout-basic',\n  template: `\n    <u-layout>\n      <u-header>Header</u-header>\n      <u-content>Content</u-content>\n      <u-footer>Footer</u-footer>\n    </u-layout>\n    <u-layout>\n      <u-header>Header</u-header>\n      <u-layout>\n        <u-sider>Sider</u-sider>\n        <u-content>Content</u-content>\n      </u-layout>\n      <u-footer>Footer</u-footer>\n    </u-layout>\n    <u-layout>\n      <u-header>Header</u-header>\n      <u-layout>\n        <u-content>Content</u-content>\n        <u-sider>Sider</u-sider>\n      </u-layout>\n      <u-footer>Footer</u-footer>\n    </u-layout>\n    <u-layout>\n      <u-sider>Sider</u-sider>\n      <u-layout>\n        <u-header>Header</u-header>\n        <u-content>Content</u-content>\n        <u-footer>Footer</u-footer>\n      </u-layout>\n    </u-layout>\n  `,\n  styles: [\n    `\n      :host {\n        text-align: center;\n      }\n      u-header,\n      u-footer {\n        background: #7dbcea;\n        color: #fff;\n      }\n      u-footer {\n        line-height: 1.5;\n      }\n      u-sider {\n        background: #3ba0e9;\n        color: #fff;\n        line-height: 120px;\n      }\n      u-content {\n        background: rgba(16, 142, 233, 1);\n        color: #fff;\n        min-height: 120px;\n        line-height: 120px;\n      }\n      u-layout {\n        margin-bottom: 48px;\n      }\n      u-layout:last-child {\n        margin: 0;\n      }\n    `,\n  ],\n})\nexport class UdemoLayoutBasicComponent {}\n"},"kc+q":function(n,e,t){"use strict";t.r(e),t.d(e,"UdemoLayoutModule",(function(){return k}));var o=t("fC46"),u=t("vQRz"),c=t("JnqV"),r=t("fXoL"),a=t("k6Ga"),d=t("Lvqh"),l=t("lR5k"),i=t("gSzy"),s=t("OvLL"),f=t("KAf0"),y=t("yOz0");const b=["*"];let h=(()=>{class n{constructor(n,e){this.elementRef=n,this.renderer=e,this.renderer.addClass(this.elementRef.nativeElement,"u-layout-footer")}}return n.\u0275fac=function(e){return new(e||n)(r.uc(r.r),r.uc(r.N))},n.\u0275cmp=r.oc({type:n,selectors:[["u-footer"]],exportAs:["uFooter"],ngContentSelectors:b,decls:1,vars:0,template:function(n,e){1&n&&(r.Pc(),r.Oc(0))},encapsulation:2,changeDetection:0}),n})();var m=t("PiTa");let g=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.oc({type:n,selectors:[["udemo-layout-basic"]],decls:37,vars:0,template:function(n,e){1&n&&(r.Ac(0,"u-layout"),r.Ac(1,"u-header"),r.bd(2,"Header"),r.zc(),r.Ac(3,"u-content"),r.bd(4,"Content"),r.zc(),r.Ac(5,"u-footer"),r.bd(6,"Footer"),r.zc(),r.zc(),r.Ac(7,"u-layout"),r.Ac(8,"u-header"),r.bd(9,"Header"),r.zc(),r.Ac(10,"u-layout"),r.Ac(11,"u-sider"),r.bd(12,"Sider"),r.zc(),r.Ac(13,"u-content"),r.bd(14,"Content"),r.zc(),r.zc(),r.Ac(15,"u-footer"),r.bd(16,"Footer"),r.zc(),r.zc(),r.Ac(17,"u-layout"),r.Ac(18,"u-header"),r.bd(19,"Header"),r.zc(),r.Ac(20,"u-layout"),r.Ac(21,"u-content"),r.bd(22,"Content"),r.zc(),r.Ac(23,"u-sider"),r.bd(24,"Sider"),r.zc(),r.zc(),r.Ac(25,"u-footer"),r.bd(26,"Footer"),r.zc(),r.zc(),r.Ac(27,"u-layout"),r.Ac(28,"u-sider"),r.bd(29,"Sider"),r.zc(),r.Ac(30,"u-layout"),r.Ac(31,"u-header"),r.bd(32,"Header"),r.zc(),r.Ac(33,"u-content"),r.bd(34,"Content"),r.zc(),r.Ac(35,"u-footer"),r.bd(36,"Footer"),r.zc(),r.zc(),r.zc())},directives:[s.a,f.a,y.a,h,m.a],styles:["[_nghost-%COMP%] {\n        text-align: center;\n      }\n      u-header[_ngcontent-%COMP%], u-footer[_ngcontent-%COMP%] {\n        background: #7dbcea;\n        color: #fff;\n      }\n      u-footer[_ngcontent-%COMP%] {\n        line-height: 1.5;\n      }\n      u-sider[_ngcontent-%COMP%] {\n        background: #3ba0e9;\n        color: #fff;\n        line-height: 120px;\n      }\n      u-content[_ngcontent-%COMP%] {\n        background: rgba(16, 142, 233, 1);\n        color: #fff;\n        min-height: 120px;\n        line-height: 120px;\n      }\n      u-layout[_ngcontent-%COMP%] {\n        margin-bottom: 48px;\n      }\n      u-layout[_ngcontent-%COMP%]:last-child {\n        margin: 0;\n      }"]}),n})(),p=(()=>{class n{constructor(){this.basic=t("aGRN").default}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.oc({type:n,selectors:[["udemo-layout"]],decls:11,vars:1,consts:[["uTitle","Layout \u5e03\u5c40"],["src","layout/layout.md"],["uTitle","API"],["src","layout/layout-api.md"],["uTitle","\u57fa\u672c\u7ed3\u6784"],["uTitle","\u57fa\u672c\u7ed3\u6784","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],[1,"layout-demo"],["intro",""],["src","layout/basic.md"]],template:function(n,e){1&n&&(r.Ac(0,"u-tabs"),r.Ac(1,"u-tab",0),r.vc(2,"markdown",1),r.zc(),r.Ac(3,"u-tab",2),r.vc(4,"markdown",3),r.zc(),r.Ac(5,"u-tab",4),r.Ac(6,"udemo-code-box",5),r.Ac(7,"div",6),r.vc(8,"udemo-layout-basic",7),r.zc(),r.Ac(9,"div",8),r.vc(10,"markdown",9),r.zc(),r.zc(),r.zc(),r.zc()),2&n&&(r.kc(6),r.Qc("uCode",e.basic))},directives:[a.a,d.a,l.b,i.a,g],encapsulation:2}),n})();var z=t("tyNb"),A=t("ofXK"),C=t("tk/3");const v=[{path:"",component:p}];let k=(()=>{class n{}return n.\u0275mod=r.sc({type:n}),n.\u0275inj=r.rc({factory:function(e){return new(e||n)},imports:[[A.b,z.c.forChild(v),C.b,l.c.forRoot({loader:C.a}),c.a,o.a,u.a]]}),n})()}}]);