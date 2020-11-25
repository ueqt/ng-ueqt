(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{UTN0:function(t,e,n){"use strict";n.r(e),n.d(e,"UdemoTabsModule",function(){return A});var a=n("JnqV"),o=n("tyNb"),c=n("ofXK"),l=n("tk/3"),u=n("lR5k"),b=n("fXoL"),m=n("k6Ga"),r=n("Lvqh"),i=n("gSzy"),s=n("bbQo");function d(t,e){1&t&&b.cd(0,"It's Lazy")}function g(t,e){1&t&&b.vc(0,"udemo-tab-content-lazy")}let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.oc({type:t,selectors:[["udemo-tabs-basic"]],decls:25,vars:1,consts:[["uTitle","eagerly"],[3,"uCustomTitle"],["titleTemplate",""],["uTab",""],["uTitle","long tab name 1"],["uTitle","long tab name 2"],["uTitle","long tab name 3"],["uTitle","long tab name 4"],["uTitle","long tab name 5"],["uTitle","long tab name 6"],["uTitle","long tab name 7"],["uTitle","long tab name 8"],["uTitle","long tab name 9"]],template:function(t,e){if(1&t&&(b.Ac(0,"u-tabs"),b.Ac(1,"u-tab",0),b.vc(2,"udemo-tab-content-eagerly"),b.zc(),b.Ac(3,"u-tab",1),b.ad(4,d,1,0,"ng-template",null,2,b.bd),b.ad(6,g,1,0,"ng-template",3),b.zc(),b.Ac(7,"u-tab",4),b.vc(8,"udemo-tab-content-eagerly"),b.zc(),b.Ac(9,"u-tab",5),b.vc(10,"udemo-tab-content-eagerly"),b.zc(),b.Ac(11,"u-tab",6),b.vc(12,"udemo-tab-content-eagerly"),b.zc(),b.Ac(13,"u-tab",7),b.vc(14,"udemo-tab-content-eagerly"),b.zc(),b.Ac(15,"u-tab",8),b.vc(16,"udemo-tab-content-eagerly"),b.zc(),b.Ac(17,"u-tab",9),b.vc(18,"udemo-tab-content-eagerly"),b.zc(),b.Ac(19,"u-tab",10),b.vc(20,"udemo-tab-content-eagerly"),b.zc(),b.Ac(21,"u-tab",11),b.vc(22,"udemo-tab-content-eagerly"),b.zc(),b.Ac(23,"u-tab",12),b.vc(24,"udemo-tab-content-eagerly"),b.zc(),b.zc()),2&t){const t=b.Uc(5);b.kc(3),b.Qc("uCustomTitle",t)}},directives:function(){return[m.a,r.a,p,s.a,T]},encapsulation:2}),t})(),p=(()=>{class t{ngOnInit(){console.log("I will init eagerly")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.oc({type:t,selectors:[["udemo-tab-content-eagerly"]],decls:1,vars:0,template:function(t,e){1&t&&b.cd(0," eagerly ")},encapsulation:2}),t})(),T=(()=>{class t{ngOnInit(){console.log("I will init when tab active")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.oc({type:t,selectors:[["udemo-tab-content-lazy"]],decls:1,vars:0,template:function(t,e){1&t&&b.cd(0," lazy ")},encapsulation:2}),t})(),z=(()=>{class t{constructor(){this.basic=n("hQzA").default}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.oc({type:t,selectors:[["udemo-tabs"]],decls:11,vars:1,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],[1,"tabs-demo"],["intro",""],["src","tabs/basic.md"],["uTitle","Tabs \u6807\u7b7e\u9875"],["src","tabs/tabs.md"],["uTitle","API"],["src","tabs/tabs-api.md"]],template:function(t,e){1&t&&(b.Ac(0,"u-tabs"),b.Ac(1,"u-tab",0),b.Ac(2,"udemo-code-box",1),b.Ac(3,"div",2),b.vc(4,"udemo-tabs-basic",3),b.zc(),b.Ac(5,"div",4),b.vc(6,"markdown",5),b.zc(),b.zc(),b.zc(),b.Ac(7,"u-tab",6),b.vc(8,"markdown",7),b.zc(),b.Ac(9,"u-tab",8),b.vc(10,"markdown",9),b.zc(),b.zc()),2&t&&(b.kc(2),b.Qc("uCode",e.basic))},directives:[m.a,r.a,i.a,y,u.b],encapsulation:2}),t})();var v=n("5NC8");const f=[{path:"",component:z}];let A=(()=>{class t{}return t.\u0275mod=b.sc({type:t}),t.\u0275inj=b.rc({factory:function(e){return new(e||t)},imports:[[c.b,o.c.forChild(f),l.b,u.c.forRoot({loader:l.a}),a.a,v.j]]}),t})()},hQzA:function(t,e,n){"use strict";n.r(e),e.default='import { Component, OnInit } from \'@angular/core\';\n\n@Component({\n  selector: \'udemo-tabs-basic\',\n  template: `\n    <u-tabs>\n      <u-tab uTitle="eagerly">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab [uCustomTitle]="titleTemplate">\n        <ng-template #titleTemplate>It\'s Lazy</ng-template>\n        <ng-template uTab\n          ><udemo-tab-content-lazy></udemo-tab-content-lazy></ng-template\n      ></u-tab>\n      <u-tab uTitle="long tab name 1">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 2">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 3">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 4">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 5">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 6">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 7">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 8">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 9">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n    </u-tabs>\n  `,\n})\nexport class UdemoTabsBasicComponent {}\n\n@Component({\n  selector: \'udemo-tab-content-eagerly\',\n  template: ` eagerly `,\n})\nexport class UDemoTabContentEagerlyComponent implements OnInit {\n  ngOnInit(): void {\n    console.log(`I will init eagerly`);\n  }\n}\n\n@Component({\n  selector: \'udemo-tab-content-lazy\',\n  template: ` lazy `,\n})\nexport class UDemoTabContentLazyComponent implements OnInit {\n  ngOnInit(): void {\n    console.log(`I will init when tab active`);\n  }\n}\n'}}]);