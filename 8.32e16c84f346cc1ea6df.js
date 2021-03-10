(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{MWHQ:function(t,n,o){"use strict";o.r(n),n.default='import { UButtonComponent } from \'./../../../ng-ueqt/src/components/button/button.component\';\nimport { Component } from \'@angular/core\';\nimport { sleep } from \'ng-ueqt/components/core/util\';\n\n@Component({\n  selector: \'udemo-button-basic\',\n  template: `\n  <u-button [uClick]="test">Primary</u-button>\n  <u-button uColor="red" [uIconOnly]="true" [uClick]="test">\n    <i uIcon="down"></i>\n  </u-button>\n  <u-button uColor="var(--u-accent)" [uClick]="testArgs" [uClickArgs]="[\'abc\', 1]">Accent</u-button>\n  <u-button [uDisabled]="true" [uClick]="test">\u7981\u7528</u-button>\n`,\n})\nexport class UdemoButtonBasicComponent {\n\n  test = async () => {\n    console.log(this);\n    await sleep(5000);\n    console.log(\'test\');\n  }\n\n  testArgs = async (button: UButtonComponent, args: any[]) => {\n    console.log(this);\n    console.log(args);\n    await sleep(5000);\n    console.log(\'testArgs\');\n  }\n\n}\n'},cSpG:function(t,n,o){"use strict";o.r(n),o.d(n,"UdemoButtonModule",function(){return y});var e=o("JnqV"),c=o("tyNb"),u=o("ofXK"),s=o("tk/3"),b=o("lR5k"),i=o("5NC8"),r=o("fXoL"),l=o("k6Ga"),a=o("Lvqh"),d=o("gSzy"),m=o("mrSG"),p=o("YjfF"),g=o("tKFb"),C=o("RovX");const f=function(){return["abc",1]};let k=(()=>{class t{constructor(){this.test=()=>Object(m.a)(this,void 0,void 0,function*(){console.log(this),yield Object(p.h)(5e3),console.log("test")}),this.testArgs=(t,n)=>Object(m.a)(this,void 0,void 0,function*(){console.log(this),console.log(n),yield Object(p.h)(5e3),console.log("testArgs")})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["udemo-button-basic"]],decls:8,vars:8,consts:[[3,"uClick"],["uColor","red",3,"uIconOnly","uClick"],["uIcon","down"],["uColor","var(--u-accent)",3,"uClick","uClickArgs"],[3,"uDisabled","uClick"]],template:function(t,n){1&t&&(r.Qb(0,"u-button",0),r.sc(1,"Primary"),r.Pb(),r.Qb(2,"u-button",1),r.Lb(3,"i",2),r.Pb(),r.Qb(4,"u-button",3),r.sc(5,"Accent"),r.Pb(),r.Qb(6,"u-button",4),r.sc(7,"\u7981\u7528"),r.Pb()),2&t&&(r.gc("uClick",n.test),r.Ab(2),r.gc("uIconOnly",!0)("uClick",n.test),r.Ab(2),r.gc("uClick",n.testArgs)("uClickArgs",r.hc(7,f)),r.Ab(2),r.gc("uDisabled",!0)("uClick",n.test))},directives:[g.a,C.a],encapsulation:2}),t})(),h=(()=>{class t{constructor(){this.basic=o("MWHQ").default}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["udemo-button"]],decls:11,vars:1,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c\u4f7f\u7528","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],["intro",""],["src","button/basic.md"],["uTitle","Button \u6309\u94ae"],["src","button/button.md"],["uTitle","API"],["src","button/button-api.md"]],template:function(t,n){1&t&&(r.Qb(0,"u-tabs"),r.Qb(1,"u-tab",0),r.Qb(2,"udemo-code-box",1),r.Qb(3,"div",2),r.Lb(4,"udemo-button-basic"),r.Pb(),r.Qb(5,"div",3),r.Lb(6,"markdown",4),r.Pb(),r.Pb(),r.Pb(),r.Qb(7,"u-tab",5),r.Lb(8,"markdown",6),r.Pb(),r.Qb(9,"u-tab",7),r.Lb(10,"markdown",8),r.Pb(),r.Pb()),2&t&&(r.Ab(2),r.gc("uCode",n.basic))},directives:[l.a,a.a,d.a,k,b.b],encapsulation:2}),t})();o("rAj6");const w=[{path:"",component:h}],A=[i.a.UIconLeft,i.a.UIconRight,i.a.UIconUp,i.a.UIconDown,i.a.UIconBars];let y=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(n){return new(n||t)},imports:[[u.b,c.c.forChild(w),s.b,b.c.forRoot({loader:s.a}),e.a,i.j,i.b,i.e.forRoot(A)]]}),t})()}}]);