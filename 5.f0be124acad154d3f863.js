(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5mS6":function(n,e,a){"use strict";a.r(e),a.d(e,"UdemoMenuModule",function(){return N});var t=a("JnqV"),o=a("fXoL"),d=a("k6Ga"),u=a("Lvqh"),s=a("gSzy"),c=a("IDza");let m=(()=>{class n{constructor(){this.datas=[{name:"aaa",children:[{name:"aaa-1",children:[{name:"aaa-1-1"}]}]},{name:"bbb"}]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Eb({type:n,selectors:[["udemo-menu-basic"]],decls:1,vars:1,consts:[[3,"datas"]],template:function(n,e){1&n&&o.Lb(0,"u-menu",0),2&n&&o.gc("datas",e.datas)},directives:[c.a],encapsulation:2}),n})();var i=a("lR5k"),r=a("RovX");function b(n,e){if(1&n&&(o.Lb(0,"i",2),o.Qb(1,"span"),o.sc(2),o.Pb()),2&n){const n=e.node;o.Ab(2),o.vc("",n.addition," ",n.name,"")}}let l=(()=>{class n{constructor(){this.datas=[{name:"aaa",addition:"1",children:[{name:"aaa-1",addition:"2",children:[{name:"aaa-1-1",addition:"3"}]}]},{name:"bbb",addition:"4"}]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Eb({type:n,selectors:[["udemo-menu-custom-node"]],decls:3,vars:2,consts:[[3,"datas","customNode"],["custom",""],["uIcon","bars",2,"margin-right","10px"]],template:function(n,e){if(1&n&&(o.Lb(0,"u-menu",0),o.qc(1,b,3,2,"ng-template",null,1,o.rc)),2&n){const n=o.kc(2);o.gc("datas",e.datas)("customNode",n)}},directives:[c.a,r.a],encapsulation:2}),n})(),p=(()=>{class n{constructor(){this.basic=a("aqm8").default,this.customNode=a("CtBM").default}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Eb({type:n,selectors:[["udemo-menu"]],decls:16,vars:2,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c\u4f7f\u7528","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo","",2,"width","200px"],["intro",""],["src","menu/basic.md"],["uTitle","\u81ea\u5b9a\u4e49\u663e\u793a","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["src","menu/custom-node.md"],["uTitle","Menu \u83dc\u5355"],["src","menu/menu.md"],["uTitle","API"],["src","menu/menu-api.md"]],template:function(n,e){1&n&&(o.Qb(0,"u-tabs"),o.Qb(1,"u-tab",0),o.Qb(2,"udemo-code-box",1),o.Qb(3,"div",2),o.Lb(4,"udemo-menu-basic"),o.Pb(),o.Qb(5,"div",3),o.Lb(6,"markdown",4),o.Pb(),o.Pb(),o.Qb(7,"udemo-code-box",5),o.Qb(8,"div",2),o.Lb(9,"udemo-menu-custom-node"),o.Pb(),o.Qb(10,"div",3),o.Lb(11,"markdown",6),o.Pb(),o.Pb(),o.Pb(),o.Qb(12,"u-tab",7),o.Lb(13,"markdown",8),o.Pb(),o.Qb(14,"u-tab",9),o.Lb(15,"markdown",10),o.Pb(),o.Pb()),2&n&&(o.Ab(2),o.gc("uCode",e.basic),o.Ab(5),o.gc("uCode",e.customNode))},directives:[d.a,u.a,s.a,m,i.b,l],encapsulation:2}),n})();var f=a("tyNb"),g=a("ofXK"),h=a("tk/3"),v=a("5NC8");a("rAj6");const C=[{path:"",component:p}],w=[v.a.UIconBars];let N=(()=>{class n{}return n.\u0275mod=o.Ib({type:n}),n.\u0275inj=o.Hb({factory:function(e){return new(e||n)},imports:[[g.b,f.c.forChild(C),h.b,i.c.forRoot({loader:h.a}),t.a,v.e.forChild(w),v.k,v.g]]}),n})()},CtBM:function(n,e,a){"use strict";a.r(e),e.default="import { UMenuNode } from 'ng-ueqt';\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'udemo-menu-custom-node',\n  template: `<u-menu [datas]=\"datas\" [customNode]=\"custom\"></u-menu>\n    <ng-template #custom let-node=\"node\"\n      ><i uIcon=\"bars\" style=\"margin-right: 10px;\"></i>\n      <span>{{ node.addition }} {{ node.name }}</span></ng-template\n    > `,\n})\nexport class UdemoMenuCustomNodeComponent {\n  datas: UMenuNode[] = [\n    {\n      name: 'aaa',\n      addition: '1',\n      children: [\n        {\n          name: 'aaa-1',\n          addition: '2',\n          children: [\n            {\n              name: 'aaa-1-1',\n              addition: '3',\n            },\n          ],\n        },\n      ],\n    },\n    {\n      name: 'bbb',\n      addition: '4',\n    },\n  ];\n}\n"},aqm8:function(n,e,a){"use strict";a.r(e),e.default="import { UMenuNode } from 'ng-ueqt';\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'udemo-menu-basic',\n  template: `<u-menu [datas]=\"datas\"></u-menu>`,\n})\nexport class UdemoMenuBasicComponent {\n  datas: UMenuNode[] = [\n    {\n      name: 'aaa',\n      children: [\n        {\n          name: 'aaa-1',\n          children: [\n            {\n              name: 'aaa-1-1',\n            },\n          ],\n        },\n      ],\n    },\n    {\n      name: 'bbb',\n    },\n  ];\n}\n"}}]);