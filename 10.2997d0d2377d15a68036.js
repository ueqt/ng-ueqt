(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{DIMG:function(n,e,t){"use strict";t.r(e),t.d(e,"UdemoDynamicModule",function(){return w});var c=t("JnqV"),i=t("tyNb"),a=t("ofXK"),o=t("tk/3"),r=t("lR5k"),s=t("5NC8"),m=t("fXoL"),d=t("k6Ga"),u=t("Lvqh"),b=t("gSzy"),l=t("i0Ed");const p=["parent"];let y=(()=>{class n{constructor(n){this.dynamicService=n}ngAfterViewInit(){this.dynamicService.render(this.parent.nativeElement,f,{abc:"world"})}}return n.\u0275fac=function(e){return new(e||n)(m.Kb(l.a))},n.\u0275cmp=m.Eb({type:n,selectors:[["udemo-dynamic-basic"]],viewQuery:function(n,e){if(1&n&&m.wc(p,1),2&n){let n;m.jc(n=m.Yb())&&(e.parent=n.first)}},decls:2,vars:0,consts:[["parent",""]],template:function(n,e){1&n&&m.Lb(0,"div",null,0)},encapsulation:2}),n})(),f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=m.Eb({type:n,selectors:[["udemo-dynamic-test"]],inputs:{abc:"abc"},decls:2,vars:1,template:function(n,e){1&n&&(m.Qb(0,"div"),m.sc(1),m.Pb()),2&n&&(m.Ab(1),m.uc("Hello ",e.abc,""))},encapsulation:2}),n})();const v=[{path:"",component:(()=>{class n{constructor(){this.basic=t("K0Kz").default}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=m.Eb({type:n,selectors:[["udemo-dynamic"]],decls:11,vars:1,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],[1,"dynamic-demo"],["intro",""],["src","dynamic/basic.md"],["uTitle","Dynamic \u52a8\u6001"],["src","dynamic/dynamic.md"],["uTitle","API"],["src","dynamic/dynamic-api.md"]],template:function(n,e){1&n&&(m.Qb(0,"u-tabs"),m.Qb(1,"u-tab",0),m.Qb(2,"udemo-code-box",1),m.Qb(3,"div",2),m.Lb(4,"udemo-dynamic-basic",3),m.Pb(),m.Qb(5,"div",4),m.Lb(6,"markdown",5),m.Pb(),m.Pb(),m.Pb(),m.Qb(7,"u-tab",6),m.Lb(8,"markdown",7),m.Pb(),m.Qb(9,"u-tab",8),m.Lb(10,"markdown",9),m.Pb(),m.Pb()),2&n&&(m.Ab(2),m.gc("uCode",e.basic))},directives:[d.a,u.a,b.a,y,r.b],encapsulation:2}),n})()}];let w=(()=>{class n{}return n.\u0275mod=m.Ib({type:n}),n.\u0275inj=m.Hb({factory:function(e){return new(e||n)},imports:[[a.b,i.c.forChild(v),o.b,r.c.forRoot({loader:o.a}),c.a,s.k,s.b]]}),n})()},K0Kz:function(n,e,t){"use strict";t.r(e),e.default="import { UDynamicService } from './../../../ng-ueqt/src/components/dynamic/dynamic.service';\nimport { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';\n\n\n@Component({\n  selector: 'udemo-dynamic-basic',\n  template: `<div #parent></div>`\n})\nexport class UdemoDynamicBasicComponent implements AfterViewInit {\n\n  @ViewChild('parent') parent: ElementRef;\n\n  constructor(\n    public dynamicService: UDynamicService\n  ) {\n  }\n\n  ngAfterViewInit(): void {\n    this.dynamicService.render(this.parent.nativeElement, UdemoDynamicTestComponent, {\n      abc: 'world'\n    });\n  }\n}\n\n@Component({\n  selector: 'udemo-dynamic-test',\n  template: '<div>Hello {{abc}}</div>'\n})\nexport class UdemoDynamicTestComponent {\n  @Input() abc: string;\n}\n"}}]);