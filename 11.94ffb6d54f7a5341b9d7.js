(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{UTN0:function(t,e,n){"use strict";n.r(e),n.d(e,"UdemoTabsModule",(function(){return v}));var a=n("fC46"),o=n("JnqV"),c=n("tyNb"),l=n("ofXK"),u=n("tk/3"),b=n("lR5k"),m=n("fXoL"),r=n("k6Ga"),i=n("Lvqh"),s=n("gSzy"),d=n("bbQo");function g(t,e){1&t&&m.cd(0,"It's Lazy")}function y(t,e){1&t&&m.vc(0,"udemo-tab-content-lazy")}let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m.oc({type:t,selectors:[["udemo-tabs-basic"]],decls:25,vars:1,consts:[["uTitle","eagerly"],[3,"uCustomTitle"],["titleTemplate",""],["uTab",""],["uTitle","long tab name 1"],["uTitle","long tab name 2"],["uTitle","long tab name 3"],["uTitle","long tab name 4"],["uTitle","long tab name 5"],["uTitle","long tab name 6"],["uTitle","long tab name 7"],["uTitle","long tab name 8"],["uTitle","long tab name 9"]],template:function(t,e){if(1&t&&(m.Ac(0,"u-tabs"),m.Ac(1,"u-tab",0),m.vc(2,"udemo-tab-content-eagerly"),m.zc(),m.Ac(3,"u-tab",1),m.ad(4,g,1,0,"ng-template",null,2,m.bd),m.ad(6,y,1,0,"ng-template",3),m.zc(),m.Ac(7,"u-tab",4),m.vc(8,"udemo-tab-content-eagerly"),m.zc(),m.Ac(9,"u-tab",5),m.vc(10,"udemo-tab-content-eagerly"),m.zc(),m.Ac(11,"u-tab",6),m.vc(12,"udemo-tab-content-eagerly"),m.zc(),m.Ac(13,"u-tab",7),m.vc(14,"udemo-tab-content-eagerly"),m.zc(),m.Ac(15,"u-tab",8),m.vc(16,"udemo-tab-content-eagerly"),m.zc(),m.Ac(17,"u-tab",9),m.vc(18,"udemo-tab-content-eagerly"),m.zc(),m.Ac(19,"u-tab",10),m.vc(20,"udemo-tab-content-eagerly"),m.zc(),m.Ac(21,"u-tab",11),m.vc(22,"udemo-tab-content-eagerly"),m.zc(),m.Ac(23,"u-tab",12),m.vc(24,"udemo-tab-content-eagerly"),m.zc(),m.zc()),2&t){const t=m.Uc(5);m.kc(3),m.Qc("uCustomTitle",t)}},directives:function(){return[r.a,i.a,T,d.a,z]},encapsulation:2}),t})(),T=(()=>{class t{ngOnInit(){console.log("I will init eagerly")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m.oc({type:t,selectors:[["udemo-tab-content-eagerly"]],decls:1,vars:0,template:function(t,e){1&t&&m.cd(0," eagerly ")},encapsulation:2}),t})(),z=(()=>{class t{ngOnInit(){console.log("I will init when tab active")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m.oc({type:t,selectors:[["udemo-tab-content-lazy"]],decls:1,vars:0,template:function(t,e){1&t&&m.cd(0," lazy ")},encapsulation:2}),t})();const f=[{path:"",component:(()=>{class t{constructor(){this.basic=n("hQzA").default}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m.oc({type:t,selectors:[["udemo-tabs"]],decls:11,vars:1,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],[1,"tabs-demo"],["intro",""],["src","tabs/basic.md"],["uTitle","Tabs \u6807\u7b7e\u9875"],["src","tabs/tabs.md"],["uTitle","API"],["src","tabs/tabs-api.md"]],template:function(t,e){1&t&&(m.Ac(0,"u-tabs"),m.Ac(1,"u-tab",0),m.Ac(2,"udemo-code-box",1),m.Ac(3,"div",2),m.vc(4,"udemo-tabs-basic",3),m.zc(),m.Ac(5,"div",4),m.vc(6,"markdown",5),m.zc(),m.zc(),m.zc(),m.Ac(7,"u-tab",6),m.vc(8,"markdown",7),m.zc(),m.Ac(9,"u-tab",8),m.vc(10,"markdown",9),m.zc(),m.zc()),2&t&&(m.kc(2),m.Qc("uCode",e.basic))},directives:[r.a,i.a,s.a,p,b.b],encapsulation:2}),t})()}];let v=(()=>{class t{}return t.\u0275mod=m.sc({type:t}),t.\u0275inj=m.rc({factory:function(e){return new(e||t)},imports:[[l.b,c.c.forChild(f),u.b,b.c.forRoot({loader:u.a}),o.a,a.a]]}),t})()},hQzA:function(t,e,n){"use strict";n.r(e),e.default='import { Component, OnInit } from \'@angular/core\';\n\n@Component({\n  selector: \'udemo-tabs-basic\',\n  template: `\n    <u-tabs>\n      <u-tab uTitle="eagerly">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab [uCustomTitle]="titleTemplate">\n        <ng-template #titleTemplate>It\'s Lazy</ng-template>\n        <ng-template uTab\n          ><udemo-tab-content-lazy></udemo-tab-content-lazy></ng-template\n      ></u-tab>\n      <u-tab uTitle="long tab name 1">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 2">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 3">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 4">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 5">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 6">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 7">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 8">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n      <u-tab uTitle="long tab name 9">\n        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>\n      </u-tab>\n    </u-tabs>\n  `,\n})\nexport class UdemoTabsBasicComponent {}\n\n@Component({\n  selector: \'udemo-tab-content-eagerly\',\n  template: ` eagerly `,\n})\nexport class UDemoTabContentEagerlyComponent implements OnInit {\n  ngOnInit(): void {\n    console.log(`I will init eagerly`);\n  }\n}\n\n@Component({\n  selector: \'udemo-tab-content-lazy\',\n  template: ` lazy `,\n})\nexport class UDemoTabContentLazyComponent implements OnInit {\n  ngOnInit(): void {\n    console.log(`I will init when tab active`);\n  }\n}\n'}}]);