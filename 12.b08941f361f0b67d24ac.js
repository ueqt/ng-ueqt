(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{HFvl:function(n,o,i){"use strict";i.r(o),i.d(o,"UdemoIconModule",function(){return w});var e=i("JnqV"),t=i("fXoL"),c=i("k6Ga"),s=i("Lvqh"),r=i("gSzy"),a=i("5NC8"),l=i("ofXK"),u=i("RovX");function p(n,o){if(1&n&&(t.Rb(0,"li"),t.Mb(1,"i",1),t.Rb(2,"span"),t.vc(3),t.Qb(),t.Qb()),2&n){const n=o.$implicit;t.Bb(1),t.ic("uIcon",n.name)("uIconSize",24),t.Bb(2),t.wc(n.name)}}let d=(()=>{class n{constructor(){this.primerIcons=a.s,this.icons=Object.keys(this.primerIcons).map(n=>this.primerIcons[n])}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Fb({type:n,selectors:[["udemo-icon-basic"]],decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],["uIconClass","icon-test",2,"color","red",3,"uIcon","uIconSize"]],template:function(n,o){1&n&&(t.Rb(0,"ul"),t.tc(1,p,4,3,"li",0),t.Qb()),2&n&&(t.Bb(1),t.ic("ngForOf",o.icons))},directives:[l.j,u.a],styles:["ul[_ngcontent-%COMP%] {\n      margin: 10px 0;\n      overflow: hidden;\n      list-style: none;\n    }\n    li[_ngcontent-%COMP%] {\n      position: relative;\n      float: left;\n      width: 16.66%;\n      height: 100px;\n      margin: 3px 0;\n      padding: 10px 0 0;\n      overflow: hidden;\n      color: #555;\n      text-align: center;\n      list-style: none;\n      background-color: inherit;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n    i[_ngcontent-%COMP%] {\n      font-size: 24px;\n      margin: 12px 0 8px;\n    }\n    span[_ngcontent-%COMP%] {\n      display: block;\n      font-family: Lucida Console,Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;\n      white-space: nowrap;\n      text-align: center;\n    }"]}),n})();var b=i("lR5k");let m=(()=>{class n{constructor(){this.basic=i("XcAR").default}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Fb({type:n,selectors:[["udemo-icon"]],decls:11,vars:1,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c\u4f7f\u7528","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],["intro",""],["src","icon/basic.md"],["uTitle","Icon \u56fe\u6807"],["src","icon/icon.md"],["uTitle","API"],["src","icon/icon-api.md"]],template:function(n,o){1&n&&(t.Rb(0,"u-tabs"),t.Rb(1,"u-tab",0),t.Rb(2,"udemo-code-box",1),t.Rb(3,"div",2),t.Mb(4,"udemo-icon-basic"),t.Qb(),t.Rb(5,"div",3),t.Mb(6,"markdown",4),t.Qb(),t.Qb(),t.Qb(),t.Rb(7,"u-tab",5),t.Mb(8,"markdown",6),t.Qb(),t.Rb(9,"u-tab",7),t.Mb(10,"markdown",8),t.Qb(),t.Qb()),2&n&&(t.Bb(2),t.ic("uCode",o.basic))},directives:[c.a,s.a,r.a,d,b.b],encapsulation:2}),n})();var f=i("tyNb"),g=i("tk/3");i("rAj6");const I=[{path:"",component:m}],h=[a.s.uiconLeft,a.s.uiconRight,a.s.uiconUp,a.s.uiconDown,a.s.uiconBars];let w=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.Jb({type:n}),n.\u0275inj=t.Ib({imports:[[l.b,f.c.forChild(I),g.b,b.c.forRoot({loader:g.a}),e.a,a.p,a.h.forRoot(h)]]}),n})()},XcAR:function(n,o,i){"use strict";i.r(o),o.default='import { Component } from \'@angular/core\';\nimport { allIcons, UIconDefinition } from \'ng-ueqt\';\n\n@Component({\n  selector: \'udemo-icon-basic\',\n  template: `\n  <ul>\n    <li *ngFor="let icon of icons">\n        <i [uIcon]="icon.name" style="color:red;" [uIconSize]="24" uIconClass="icon-test"></i>\n        <span>{{icon.name}}</span>\n    </li>\n</ul>\n  \x3c!-- <i uIcon="bars" style="color: red;"></i>\n    <i uIcon="left"></i>\n    <i uIcon="right"></i>\n    <i uIcon="up"></i>\n    <i uIcon="down"></i>\n    <i uIcon="bars"></i> --\x3e\n    `,\n  styles: [\n    `\n    ul {\n      margin: 10px 0;\n      overflow: hidden;\n      list-style: none;\n    }\n    li {\n      position: relative;\n      float: left;\n      width: 16.66%;\n      height: 100px;\n      margin: 3px 0;\n      padding: 10px 0 0;\n      overflow: hidden;\n      color: #555;\n      text-align: center;\n      list-style: none;\n      background-color: inherit;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n    i {\n      font-size: 24px;\n      margin: 12px 0 8px;\n    }\n    span {\n      display: block;\n      font-family: Lucida Console,Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;\n      white-space: nowrap;\n      text-align: center;\n    }\n    `\n  ]\n})\nexport class UdemoIconBasicComponent {\n  primerIcons = allIcons as {\n    [key: string]: UIconDefinition;\n  };\n\n  icons: UIconDefinition[] = Object.keys(this.primerIcons).map(key => this.primerIcons[key]);\n}\n'}}]);