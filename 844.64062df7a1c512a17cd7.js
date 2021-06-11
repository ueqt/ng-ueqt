(self.webpackChunksite=self.webpackChunksite||[]).push([[844],{4844:(t,n,o)=>{"use strict";o.r(n),o.d(n,{UdemoButtonModule:()=>h});var u=o(847),e=o(2432),c=o(2803),s=o(1116),l=o(2693),i=o(1111),r=o(5474),a=o(5366),b=o(6686),p=o(5021),d=o(8044),g=o(4762);function m(t){return new Promise(n=>setTimeout(n,t))}var Z=o(7531),C=o(5250),A=o(8225),k=o(8670);const f=function(){return["abc",1]};let U=(()=>{class t{constructor(){this.options=[{label:"abc",value:"def"},{label:"abc1",value:"def1"},{label:"abc2",value:"def2"}],this.test=()=>(0,g.mG)(this,void 0,void 0,function*(){console.log(this),yield m(5e3),console.log("test")}),this.testArgs=(t,n)=>(0,g.mG)(this,void 0,void 0,function*(){console.log(this),console.log(n),yield m(5e3),console.log("testArgs")})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["udemo-button-basic"]],decls:21,vars:17,consts:[[3,"uClick"],["uColor","red",3,"uIconOnly","uClick"],["uIcon","down"],["uColor","var(--u-accent)",3,"uClick","uClickArgs"],[3,"uDisabled","uClick"],["uType","select",2,"background-color","var(--u-accent)","color","var(--u-accent-c)",3,"uOptions"]],template:function(t,n){1&t&&(a.TgZ(0,"u-button",0),a._uU(1,"Primary"),a.qZA(),a.TgZ(2,"u-button",1),a._UZ(3,"i",2),a.qZA(),a.TgZ(4,"u-button",3),a._uU(5,"Accent"),a.qZA(),a.TgZ(6,"u-button",4),a._uU(7,"\u7981\u7528"),a.qZA(),a._UZ(8,"hr"),a.TgZ(9,"u-button-group"),a.TgZ(10,"u-button",1),a._UZ(11,"i",2),a.qZA(),a.TgZ(12,"u-button",3),a._uU(13,"Accent"),a.qZA(),a.TgZ(14,"u-button",0),a._uU(15,"Primary"),a.qZA(),a.qZA(),a._UZ(16,"hr"),a.TgZ(17,"u-button-group"),a.TgZ(18,"u-button",1),a._UZ(19,"i",2),a.qZA(),a._UZ(20,"u-input",5),a.qZA()),2&t&&(a.Q6J("uClick",n.test),a.xp6(2),a.Q6J("uIconOnly",!0)("uClick",n.test),a.xp6(2),a.Q6J("uClick",n.testArgs)("uClickArgs",a.DdM(15,f)),a.xp6(2),a.Q6J("uDisabled",!0)("uClick",n.test),a.xp6(4),a.Q6J("uIconOnly",!0)("uClick",n.test),a.xp6(2),a.Q6J("uClick",n.testArgs)("uClickArgs",a.DdM(16,f)),a.xp6(2),a.Q6J("uClick",n.test),a.xp6(4),a.Q6J("uIconOnly",!0)("uClick",n.test),a.xp6(2),a.Q6J("uOptions",n.options))},directives:[Z.e,C.R,A.P,k.$],encapsulation:2}),t})(),v=(()=>{class t{constructor(){this.basic=o(7145).Z}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["udemo-button"]],decls:11,vars:1,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c\u4f7f\u7528","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],["intro",""],["src","button/basic.md"],["uTitle","Button \u6309\u94ae"],["src","button/button.md"],["uTitle","API"],["src","button/button-api.md"]],template:function(t,n){1&t&&(a.TgZ(0,"u-tabs"),a.TgZ(1,"u-tab",0),a.TgZ(2,"udemo-code-box",1),a.TgZ(3,"div",2),a._UZ(4,"udemo-button-basic"),a.qZA(),a.TgZ(5,"div",3),a._UZ(6,"markdown",4),a.qZA(),a.qZA(),a.qZA(),a.TgZ(7,"u-tab",5),a._UZ(8,"markdown",6),a.qZA(),a.TgZ(9,"u-tab",7),a._UZ(10,"markdown",8),a.qZA(),a.qZA()),2&t&&(a.xp6(2),a.Q6J("uCode",n.basic))},directives:[b.p,p.A,d.n,U,i.lF],encapsulation:2}),t})();o(6060);const T=[{path:"",component:v}],y=[r.Ni.UIconLeft,r.Ni.UIconRight,r.Ni.UIconUp,r.Ni.UIconDown,r.Ni.UIconBars];let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[s.ez,c.Bz.forChild(T),l.JF,i.JP.forRoot({loader:l.eN}),e.h,r.Jd,r.lk,u.m,r.QH.forRoot(y)]]}),t})()},7145:(t,n,o)=>{"use strict";o.d(n,{Z:()=>u});const u='import { UButtonComponent } from \'./../../../ng-ueqt/src/components/button/button.component\';\nimport { Component } from \'@angular/core\';\nimport { sleep } from \'ng-ueqt/components/core/util\';\n\n@Component({\n  selector: \'udemo-button-basic\',\n  template: `\n  <u-button [uClick]="test">Primary</u-button>\n  <u-button uColor="red" [uIconOnly]="true" [uClick]="test">\n    <i uIcon="down"></i>\n  </u-button>\n  <u-button uColor="var(--u-accent)" [uClick]="testArgs" [uClickArgs]="[\'abc\', 1]">Accent</u-button>\n  <u-button [uDisabled]="true" [uClick]="test">\u7981\u7528</u-button>\n\n  <hr />\n\n  <u-button-group>\n    <u-button uColor="red" [uIconOnly]="true" [uClick]="test">\n      <i uIcon="down"></i>\n    </u-button>\n    <u-button uColor="var(--u-accent)" [uClick]="testArgs" [uClickArgs]="[\'abc\', 1]">Accent</u-button>\n    <u-button [uClick]="test">Primary</u-button>\n  </u-button-group>\n\n  <hr />\n\n  <u-button-group>\n    <u-button uColor="red" [uIconOnly]="true" [uClick]="test">\n      <i uIcon="down"></i>\n    </u-button>\n    <u-input uType="select" style="background-color: var(--u-accent);color: var(--u-accent-c);" [uOptions]="options"></u-input>\n  </u-button-group>\n`,\n})\nexport class UdemoButtonBasicComponent {\n\n  options = [\n    { label: \'abc\', value: \'def\' },\n    { label: \'abc1\', value: \'def1\' },\n    { label: \'abc2\', value: \'def2\' },\n  ];\n\n  test = async () => {\n    console.log(this);\n    await sleep(5000);\n    console.log(\'test\');\n  }\n\n  testArgs = async (button: UButtonComponent, args: any[]) => {\n    console.log(this);\n    console.log(args);\n    await sleep(5000);\n    console.log(\'testArgs\');\n  }\n}\n'}}]);