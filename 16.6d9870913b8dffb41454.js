(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"qL/h":function(e,n,t){"use strict";t.r(n),n.default='import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'udemo-switch-basic\',\n  template: `\n  <u-switch [(ngModel)]="result"></u-switch>\n  <u-switch [(ngModel)]="result" uCheckedChildren="\u5f00" uUnCheckedChildren="\u5173"></u-switch>\n  <u-switch [(ngModel)]="result" [uCheckedChildren]="checkedTemplate" [uUnCheckedChildren]="unCheckedTemplate"></u-switch>\n  <ng-template #checkedTemplate><span style="background-color: blue;width: 100%;">\u2642</span></ng-template>\n  <ng-template #unCheckedTemplate><span style="background-color: pink;width: 100%;">\u2640</span></ng-template>\n`,\n})\nexport class UdemoSwitchBasicComponent {\n  result = false;\n}\n'},qZwN:function(e,n,t){"use strict";t.r(n),t.d(n,"UdemoSwitchModule",function(){return M});var c=t("3Pt+"),o=t("D55j"),s=t("fXoL"),u=t("k6Ga"),l=t("Lvqh"),r=t("gSzy"),i=t("OwIC");function d(e,n){1&e&&(s.Qb(0,"span",5),s.sc(1,"\u2642"),s.Pb())}function a(e,n){1&e&&(s.Qb(0,"span",6),s.sc(1,"\u2640"),s.Pb())}let h=(()=>{class e{constructor(){this.result=!1}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["udemo-switch-basic"]],decls:7,vars:5,consts:[[3,"ngModel","ngModelChange"],["uCheckedChildren","\u5f00","uUnCheckedChildren","\u5173",3,"ngModel","ngModelChange"],[3,"ngModel","uCheckedChildren","uUnCheckedChildren","ngModelChange"],["checkedTemplate",""],["unCheckedTemplate",""],[2,"background-color","blue","width","100%"],[2,"background-color","pink","width","100%"]],template:function(e,n){if(1&e&&(s.Qb(0,"u-switch",0),s.Xb("ngModelChange",function(e){return n.result=e}),s.Pb(),s.Qb(1,"u-switch",1),s.Xb("ngModelChange",function(e){return n.result=e}),s.Pb(),s.Qb(2,"u-switch",2),s.Xb("ngModelChange",function(e){return n.result=e}),s.Pb(),s.qc(3,d,2,0,"ng-template",null,3,s.rc),s.qc(5,a,2,0,"ng-template",null,4,s.rc)),2&e){const e=s.kc(4),t=s.kc(6);s.gc("ngModel",n.result),s.Ab(1),s.gc("ngModel",n.result),s.Ab(1),s.gc("ngModel",n.result)("uCheckedChildren",e)("uUnCheckedChildren",t)}},directives:[i.a,c.e,c.f],encapsulation:2}),e})();var b=t("lR5k");let p=(()=>{class e{constructor(){this.basic=t("qL/h").default}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["udemo-switch"]],decls:11,vars:1,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c\u4f7f\u7528","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],["intro",""],["src","switch/basic.md"],["uTitle","Switch \u5f00\u5173"],["src","switch/switch.md"],["uTitle","API"],["src","switch/switch-api.md"]],template:function(e,n){1&e&&(s.Qb(0,"u-tabs"),s.Qb(1,"u-tab",0),s.Qb(2,"udemo-code-box",1),s.Qb(3,"div",2),s.Lb(4,"udemo-switch-basic"),s.Pb(),s.Qb(5,"div",3),s.Lb(6,"markdown",4),s.Pb(),s.Pb(),s.Pb(),s.Qb(7,"u-tab",5),s.Lb(8,"markdown",6),s.Pb(),s.Qb(9,"u-tab",7),s.Lb(10,"markdown",8),s.Pb(),s.Pb()),2&e&&(s.Ab(2),s.gc("uCode",n.basic))},directives:[u.a,l.a,r.a,h,b.b],encapsulation:2}),e})();var g=t("JnqV"),m=t("tyNb"),w=t("ofXK"),C=t("tk/3"),k=t("5NC8");const f=[{path:"",component:p}];let M=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(n){return new(n||e)},imports:[[w.b,c.b,m.c.forChild(f),C.b,b.c.forRoot({loader:C.a}),g.a,k.k,o.a]]}),e})()}}]);