(self.webpackChunksite=self.webpackChunksite||[]).push([[74],{74:(o,n,t)=>{"use strict";t.r(n),t.d(n,{UdemoModalModule:()=>T});var e=t(6728),c=t(2432),u=t(2803),s=t(1116),i=t(2693),r=t(1111),l=t(691),a=t(5366),m=t(6686),d=t(5021),p=t(8044),f=t(4762),C=t(19),v=t(7531);const b=["tp"];function h(o,n){if(1&o&&(a.TgZ(0,"div",6),a._uU(1),a.qZA(),a.TgZ(2,"div",7),a.TgZ(3,"u-button",8),a._uU(4,"\u5173\u95ed"),a.qZA(),a.qZA()),2&o){const o=n.$implicit,t=a.oxw();a.xp6(1),a.hij("Hello ",o.abc,""),a.xp6(1),a.Udp("border-top-color",o.modal.styleBorderColor),a.xp6(1),a.Q6J("uClick",t.close)("uClickArgs",o)}}let Z=(()=>{class o{constructor(o){this.modalService=o,this.info=()=>(0,f.mG)(this,void 0,void 0,function*(){this.modalService.info("<b>info</b>")}),this.success=()=>(0,f.mG)(this,void 0,void 0,function*(){const o=this.modalService.success("success<br/>wow");setTimeout(()=>{o.close()},3e3)}),this.error=()=>(0,f.mG)(this,void 0,void 0,function*(){this.modalService.error("error")}),this.warn=()=>(0,f.mG)(this,void 0,void 0,function*(){this.modalService.warn("warn",()=>{console.log("warn close")},"\u5173\u95ed")}),this.confirm=()=>(0,f.mG)(this,void 0,void 0,function*(){this.modalService.confirm("confirm",()=>{console.log("\u786e\u5b9a")},()=>{console.log("\u53d6\u6d88")},"\u786e\u8ba4")}),this.customComponent=()=>(0,f.mG)(this,void 0,void 0,function*(){this.modalService.custom(g,{abc:"world"},"\u6d4b\u8bd5\u81ea\u5b9a\u4e49")}),this.customTemplateRef=()=>(0,f.mG)(this,void 0,void 0,function*(){this.modalService.custom(this.tp,{abc:"world"},"\u81ea\u5b9a\u4e49\u6a21\u677f")}),this.close=(o,n)=>(0,f.mG)(this,void 0,void 0,function*(){n.modal.close()})}}return o.\u0275fac=function(n){return new(n||o)(a.Y36(C.J))},o.\u0275cmp=a.Xpm({type:o,selectors:[["udemo-modal-basic"]],viewQuery:function(o,n){if(1&o&&a.Gf(b,5),2&o){let o;a.iGM(o=a.CRH())&&(n.tp=o.first)}},decls:16,vars:7,consts:[["uColor","var(--u-text)",3,"uClick"],["uColor","var(--u-primary)",3,"uClick"],["uColor","var(--u-warn)",3,"uClick"],["uColor","var(--u-accent)",3,"uClick"],[3,"uClick"],["tp",""],[1,"u-modal-body"],[1,"u-modal-footer"],[3,"uClick","uClickArgs"]],template:function(o,n){1&o&&(a.TgZ(0,"u-button",0),a._uU(1,"Info"),a.qZA(),a.TgZ(2,"u-button",1),a._uU(3,"Success"),a.qZA(),a.TgZ(4,"u-button",2),a._uU(5,"Error"),a.qZA(),a.TgZ(6,"u-button",3),a._uU(7,"Warn"),a.qZA(),a.TgZ(8,"u-button",1),a._uU(9,"Confirm"),a.qZA(),a.TgZ(10,"u-button",4),a._uU(11,"Custom Component"),a.qZA(),a.TgZ(12,"u-button",4),a._uU(13,"Custom TemplateRef"),a.qZA(),a.YNc(14,h,5,5,"ng-template",null,5,a.W1O)),2&o&&(a.Q6J("uClick",n.info),a.xp6(2),a.Q6J("uClick",n.success),a.xp6(2),a.Q6J("uClick",n.error),a.xp6(2),a.Q6J("uClick",n.warn),a.xp6(2),a.Q6J("uClick",n.confirm),a.xp6(2),a.Q6J("uClick",n.customComponent),a.xp6(2),a.Q6J("uClick",n.customTemplateRef))},directives:[v.e],encapsulation:2}),o})(),g=(()=>{class o{constructor(){this.close=()=>(0,f.mG)(this,void 0,void 0,function*(){this.modal.close()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=a.Xpm({type:o,selectors:[["udemo-modal-test"]],inputs:{abc:"abc"},decls:5,vars:4,consts:[[1,"u-modal-body"],[1,"u-modal-footer"],[3,"uClick"]],template:function(o,n){1&o&&(a.TgZ(0,"div",0),a._uU(1),a.qZA(),a.TgZ(2,"div",1),a.TgZ(3,"u-button",2),a._uU(4,"\u5173\u95ed"),a.qZA(),a.qZA()),2&o&&(a.xp6(1),a.hij("Hello ",n.abc,""),a.xp6(1),a.Udp("border-top-color",n.modal.styleBorderColor),a.xp6(1),a.Q6J("uClick",n.close))},directives:[v.e],encapsulation:2}),o})();const k=[{path:"",component:(()=>{class o{constructor(){this.basic=t(4533).Z}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=a.Xpm({type:o,selectors:[["udemo-modal"]],decls:11,vars:1,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c\u4f7f\u7528","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],["intro",""],["src","modal/basic.md"],["uTitle","Modal \u6a21\u6001\u6846"],["src","modal/modal.md"],["uTitle","API"],["src","modal/modal-api.md"]],template:function(o,n){1&o&&(a.TgZ(0,"u-tabs"),a.TgZ(1,"u-tab",0),a.TgZ(2,"udemo-code-box",1),a.TgZ(3,"div",2),a._UZ(4,"udemo-modal-basic"),a.qZA(),a.TgZ(5,"div",3),a._UZ(6,"markdown",4),a.qZA(),a.qZA(),a.qZA(),a.TgZ(7,"u-tab",5),a._UZ(8,"markdown",6),a.qZA(),a.TgZ(9,"u-tab",7),a._UZ(10,"markdown",8),a.qZA(),a.qZA()),2&o&&(a.xp6(2),a.Q6J("uCode",n.basic))},directives:[m.p,d.A,p.n,Z,r.lF],encapsulation:2}),o})()}];let T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[s.ez,e.u5,u.Bz.forChild(k),i.JF,r.JP.forRoot({loader:i.eN}),c.h,l.Jd,l.lk,l.Pf]]}),o})()},4533:(o,n,t)=>{"use strict";t.d(n,{Z:()=>e});const e="import { UModalComponent } from './../../../ng-ueqt/src/components/modal/modal.component';\nimport { UModalService } from './../../../ng-ueqt/src/components/modal/modal.service';\nimport { UButtonComponent } from './../../../ng-ueqt/src/components/button/button.component';\nimport { Component, Input, TemplateRef, ViewChild } from '@angular/core';\nimport { sleep } from 'ng-ueqt/components/core/util';\n\n@Component({\n  selector: 'udemo-modal-basic',\n  template: `\n  <u-button [uClick]=\"info\" uColor=\"var(--u-text)\">Info</u-button>\n  <u-button [uClick]=\"success\" uColor=\"var(--u-primary)\">Success</u-button>\n  <u-button [uClick]=\"error\" uColor=\"var(--u-warn)\">Error</u-button>\n  <u-button [uClick]=\"warn\" uColor=\"var(--u-accent)\">Warn</u-button>\n  <u-button [uClick]=\"confirm\" uColor=\"var(--u-primary)\">Confirm</u-button>\n  <u-button [uClick]=\"customComponent\">Custom Component</u-button>\n  <u-button [uClick]=\"customTemplateRef\">Custom TemplateRef</u-button>\n  <ng-template #tp let-data>\n    <div class=\"u-modal-body\">Hello {{data.abc}}</div>\n    <div class=\"u-modal-footer\" [style.border-top-color]=\"data.modal.styleBorderColor\">\n      <u-button [uClick]=\"close\" [uClickArgs]=\"data\">\u5173\u95ed</u-button>\n    </div>\n  </ng-template>\n`,\n})\nexport class UdemoModalBasicComponent {\n\n  @ViewChild('tp') tp: TemplateRef<unknown>;\n\n  constructor(private modalService: UModalService) { }\n\n  info = async () => {\n    this.modalService.info('<b>info</b>');\n  }\n\n  success = async () => {\n    const ref = this.modalService.success('success<br/>wow');\n    setTimeout(() => {\n      ref.close();\n    }, 3000);\n  }\n\n  error = async () => {\n    this.modalService.error('error');\n  }\n\n  warn = async () => {\n    this.modalService.warn('warn', () => {\n      console.log('warn close');\n    }, '\u5173\u95ed');\n  }\n\n  confirm = async () => {\n    this.modalService.confirm('confirm', () => {\n      console.log('\u786e\u5b9a');\n    }, () => {\n      console.log('\u53d6\u6d88');\n    }, '\u786e\u8ba4');\n  }\n\n  customComponent = async () => {\n    const ref = this.modalService.custom(UdemoModalTestComponent, {\n      abc: 'world'\n    }, '\u6d4b\u8bd5\u81ea\u5b9a\u4e49');\n  }\n\n  customTemplateRef = async () => {\n    const ref = this.modalService.custom(this.tp, {\n      abc: 'world'\n    }, '\u81ea\u5b9a\u4e49\u6a21\u677f');\n  }\n\n  close = async (_: UButtonComponent, data: any) => {\n    data.modal.close();\n  }\n}\n\n@Component({\n  selector: 'udemo-modal-test',\n  template: `\n<div class=\"u-modal-body\">Hello {{abc}}</div>\n<div class=\"u-modal-footer\" [style.border-top-color]=\"modal.styleBorderColor\">\n  <u-button [uClick]=\"close\">\u5173\u95ed</u-button>\n</div>\n`\n})\nexport class UdemoModalTestComponent {\n\n  modal: UModalComponent;\n\n  @Input() abc: string;\n\n  close = async () => {\n    this.modal.close();\n  }\n}\n"}}]);