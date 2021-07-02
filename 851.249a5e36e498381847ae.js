(self.webpackChunksite=self.webpackChunksite||[]).push([[851],{4851:(o,n,t)=>{"use strict";t.r(n),t.d(n,{UdemoRadarModule:()=>g});var s=t(4631),a=t(7716),r=t(9157),e=t(9770),i=t(77),c=t(6473),d=t(1788);let u=(()=>{class o{constructor(){this.options=new c.rl,this.options.captions=["HP","MP","\u653b\u51fb","\u9632\u5fa1","\u667a\u529b","\u7cbe\u795e","\u901f\u5ea6"],this.options.datas=[[1200,690,320,310,374,255,330],[1999,200,232,231,174,363,281]],this.options.max=[1999,1999,375,375,375,375,375],this.options.colors=["#cc333f","#00a0b0"]}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=a.Xpm({type:o,selectors:[["udemo-radar-basic"]],decls:1,vars:1,consts:[[3,"uOptions"]],template:function(o,n){1&o&&a._UZ(0,"u-radar",0),2&o&&a.Q6J("uOptions",n.options)},directives:[d.w],encapsulation:2}),o})();var p=t(6715);let l=(()=>{class o{constructor(){this.basic=t(7455).Z}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=a.Xpm({type:o,selectors:[["udemo-radar"]],decls:11,vars:1,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c\u4f7f\u7528","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],["intro",""],["src","icon/basic.md"],["uTitle","Radar \u96f7\u8fbe\u56fe"],["src","radar/radar.md"],["uTitle","API"],["src","radar/radar-api.md"]],template:function(o,n){1&o&&(a.TgZ(0,"u-tabs"),a.TgZ(1,"u-tab",0),a.TgZ(2,"udemo-code-box",1),a.TgZ(3,"div",2),a._UZ(4,"udemo-radar-basic"),a.qZA(),a.TgZ(5,"div",3),a._UZ(6,"markdown",4),a.qZA(),a.qZA(),a.qZA(),a.TgZ(7,"u-tab",5),a._UZ(8,"markdown",6),a.qZA(),a.TgZ(9,"u-tab",7),a._UZ(10,"markdown",8),a.qZA(),a.qZA()),2&o&&(a.xp6(2),a.Q6J("uCode",n.basic))},directives:[r.p,e.A,i.n,u,p.lF],encapsulation:2}),o})();var m=t(2670),Z=t(8583),f=t(1841);t(4827);const h=[{path:"",component:l}],b=[c.kE.uiconLeft,c.kE.uiconRight,c.kE.uiconUp,c.kE.uiconDown,c.kE.uiconBars];let g=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[Z.ez,m.Bz.forChild(h),f.JF,p.JP.forRoot({loader:f.eN}),s.h,c.Jd,c._y,c.QH.forRoot(b)]]}),o})()},7455:(o,n,t)=>{"use strict";t.d(n,{Z:()=>s});const s="import { Component } from '@angular/core';\nimport { URadarModel } from 'ng-ueqt';\n\n@Component({\n  selector: 'udemo-radar-basic',\n  template: '<u-radar [uOptions]=\"options\"></u-radar>',\n})\nexport class UdemoRadarBasicComponent {\n\n  options = new URadarModel();\n\n  constructor() {\n    this.options.captions = ['HP', 'MP', '\u653b\u51fb', '\u9632\u5fa1', '\u667a\u529b', '\u7cbe\u795e', '\u901f\u5ea6'];\n    this.options.datas = [\n      [1200, 690, 320, 310, 374, 255, 330],\n      [1999, 200, 232, 231, 174, 363, 281]\n    ];\n    this.options.max = [1999, 1999, 375, 375, 375, 375, 375];\n    this.options.colors = [\n      '#cc333f',\n      '#00a0b0'\n    ];\n  }\n}\n"}}]);