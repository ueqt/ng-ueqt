(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1cVq":function(o,n,t){"use strict";t.r(n),n.default="import { Component } from '@angular/core';\nimport { UContributionsModel } from 'ng-ueqt';\n\n@Component({\n  selector: 'udemo-contributions-basic',\n  template: `<u-contributions [options]=\"options\"></u-contributions>`,\n})\nexport class UdemoContributionsBasicComponent {\n\n  options = new UContributionsModel();\n\n  constructor() {\n    this.options.year = 2020;\n    this.options.datas = {\n      '01-01': 5,\n      '01-04': 6,\n      '02-05': 44,\n      '03-02': 89,\n      '06-12': 421,\n      '12-20': 999\n    };\n    this.options.pieces = [\n      { min: 721, max: 999999, color: '#5d2116' }, // \u5341\u4e8c\u5c0f\u65f6\u4ee5\u4e0a\n      { min: 481, max: 720, color: '#950231' }, // \u5341\u4e8c\u5c0f\u65f6\u6218\u6597\n      { min: 301, max: 480, color: '#be013f' }, // \u516b\u5c0f\u65f6\u6218\u6597\n      { min: 181, max: 300, color: '#eb316d' }, // \u4e94\u5c0f\u65f6\u6218\u6597\n      { min: 61, max: 180, color: '#fb82a8' }, // \u4e09\u5c0f\u65f6\u6218\u6597\n      { min: 31, max: 60, color: '#febed1' }, // \u4e00\u5c0f\u65f6\u6218\u6597\n      { min: 0, max: 30, color: '#fee6ee' }, // 60\u6218\u4ee5\u4e0b\uff0c\u76f8\u5f53\u4e8e\u73a9\u4e86\u534a\u5c0f\u65f6\u5de6\u53f3\n    ];\n  }\n}\n"},"DP0/":function(o,n,t){"use strict";t.r(n),t.d(n,"UdemoContributionsModule",function(){return w});var c=t("JnqV"),i=t("fXoL"),e=t("k6Ga"),r=t("Lvqh"),s=t("gSzy"),a=t("5NC8"),u=t("wXd1");let m=(()=>{class o{constructor(){this.options=new a.c,this.options.year=2020,this.options.datas={"01-01":5,"01-04":6,"02-05":44,"03-02":89,"06-12":421,"12-20":999},this.options.pieces=[{min:721,max:999999,color:"#5d2116"},{min:481,max:720,color:"#950231"},{min:301,max:480,color:"#be013f"},{min:181,max:300,color:"#eb316d"},{min:61,max:180,color:"#fb82a8"},{min:31,max:60,color:"#febed1"},{min:0,max:30,color:"#fee6ee"}]}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=i.qc({type:o,selectors:[["udemo-contributions-basic"]],decls:1,vars:1,consts:[[3,"options"]],template:function(o,n){1&o&&i.xc(0,"u-contributions",0),2&o&&i.Sc("options",n.options)},directives:[u.a],encapsulation:2}),o})();var d=t("lR5k");let l=(()=>{class o{constructor(){this.basic=t("1cVq").default}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=i.qc({type:o,selectors:[["udemo-contributions"]],decls:11,vars:1,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c\u4f7f\u7528","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],["intro",""],["src","contributions/basic.md"],["uTitle","radar \u96f7\u8fbe\u56fe"],["src","contributions/contributions.md"],["uTitle","API"],["src","contributions/contributions-api.md"]],template:function(o,n){1&o&&(i.Cc(0,"u-tabs"),i.Cc(1,"u-tab",0),i.Cc(2,"udemo-code-box",1),i.Cc(3,"div",2),i.xc(4,"udemo-contributions-basic"),i.Bc(),i.Cc(5,"div",3),i.xc(6,"markdown",4),i.Bc(),i.Bc(),i.Bc(),i.Cc(7,"u-tab",5),i.xc(8,"markdown",6),i.Bc(),i.Cc(9,"u-tab",7),i.xc(10,"markdown",8),i.Bc(),i.Bc()),2&o&&(i.mc(2),i.Sc("uCode",n.basic))},directives:[e.a,r.a,s.a,m,d.b],encapsulation:2}),o})();var b=t("tyNb"),p=t("ofXK"),f=t("tk/3");t("rAj6");const x=[{path:"",component:l}],C=[a.a.UIconLeft,a.a.UIconRight,a.a.UIconUp,a.a.UIconDown,a.a.UIconBars];let w=(()=>{class o{}return o.\u0275mod=i.uc({type:o}),o.\u0275inj=i.tc({factory:function(n){return new(n||o)},imports:[[p.b,b.c.forChild(x),f.b,d.c.forRoot({loader:f.a}),c.a,a.j,a.d,a.e.forRoot(C)]]}),o})()}}]);