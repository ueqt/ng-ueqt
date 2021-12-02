"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[693],{6693:(r,c,n)=>{n.r(c),n.d(c,{UdemoThemeModule:()=>A});var s=n(4510),u=n(2188),d=n(6019),a=n(4522),l=n(5668),h=n(627),e=n(3668),p=n(250),f=n(9263),T=n(3800),g=n(9753),v=n(5086);function U(t,m){if(1&t&&(e.TgZ(0,"div",2),e._uU(1),e.qZA()),2&t){const o=m.$implicit;e.Udp("color","var("+o+")"),e.xp6(1),e.Oqu(o)}}let Z=(()=>{class t{constructor(o){this.theme=o,this.theme.themes={default:["#f0f2f5","#000000","#1890ff","#ff0000","#001520"],pink:["#f2eeff","#cca7c8","#d890a8","#b46988","#685f04"]}}change(){this.theme.change("default"===this.theme.currentTheme?"pink":"default")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(g.P))},t.\u0275cmp=e.Xpm({type:t,selectors:[["udemo-theme-basic"]],decls:4,vars:1,consts:[[3,"click"],["style","border: solid 1px black;display: inline-block;margin-right: 10px; padding: 5px;",3,"color",4,"ngFor","ngForOf"],[2,"border","solid 1px black","display","inline-block","margin-right","10px","padding","5px"]],template:function(o,i){1&o&&(e.TgZ(0,"u-button",0),e.NdJ("click",function(){return i.change()}),e._uU(1,"\u4fee\u6539\u76ae\u80a4"),e.qZA(),e.TgZ(2,"div"),e.YNc(3,U,2,3,"div",1),e.qZA()),2&o&&(e.xp6(3),e.Q6J("ngForOf",i.theme.colorNames))},directives:[v.e,d.sg],encapsulation:2}),t})();const b=[{path:"",component:(()=>{class t{constructor(){this.basic=n(6731).Z}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["udemo-theme"]],decls:11,vars:1,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],[1,"theme-demo"],["intro",""],["src","theme/basic.md"],["uTitle","Theme \u76ae\u80a4"],["src","theme/theme.md"],["uTitle","API"],["src","theme/theme-api.md"]],template:function(o,i){1&o&&(e.TgZ(0,"u-tabs"),e.TgZ(1,"u-tab",0),e.TgZ(2,"udemo-code-box",1),e.TgZ(3,"div",2),e._UZ(4,"udemo-theme-basic",3),e.qZA(),e.TgZ(5,"div",4),e._UZ(6,"markdown",5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"u-tab",6),e._UZ(8,"markdown",7),e.qZA(),e.TgZ(9,"u-tab",8),e._UZ(10,"markdown",9),e.qZA(),e.qZA()),2&o&&(e.xp6(2),e.Q6J("uCode",i.basic))},directives:[p.p,f.A,T.n,Z,l.lF],encapsulation:2}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,u.Bz.forChild(b),a.JF,l.JP.forRoot({loader:a.eN}),s.h,h.Jd,h.lk]]}),t})()},6731:(r,c,n)=>{n.d(c,{Z:()=>s});const s="import { UThemeService } from './../../../ng-ueqt/src/components/theme/theme.service';\nimport { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'udemo-theme-basic',\n  template: `\n<u-button (click)=\"change()\">\u4fee\u6539\u76ae\u80a4</u-button>\n<div>\n  <div *ngFor=\"let t of theme.colorNames\"\n    style=\"border: solid 1px black;display: inline-block;margin-right: 10px; padding: 5px;\"\n    [style.color]=\"'var('+ t + ')'\">{{t}}</div>\n</div>\n`\n})\nexport class UdemoThemeBasicComponent {\n  constructor(public theme: UThemeService) {\n    this.theme.themes = {\n      default: ['#f0f2f5', '#000000', '#1890ff', '#ff0000', '#001520'],\n      pink: ['#f2eeff', '#cca7c8', '#d890a8', '#b46988', '#685f04'],\n    };\n  }\n\n  change(): void {\n    if (this.theme.currentTheme === 'default') {\n      this.theme.change('pink');\n    } else {\n      this.theme.change('default');\n    }\n  }\n}\n"}}]);