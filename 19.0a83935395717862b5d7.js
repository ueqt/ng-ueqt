(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{S54s:function(e,a,n){"use strict";n.r(a),n.d(a,"UdemoViewerModule",function(){return T});var t=n("Yzd5"),c=n("3Pt+"),i=n("fXoL"),o=n("k6Ga"),b=n("Lvqh"),r=n("gSzy"),s=n("FTrZ"),m=n("ofXK");function l(e,a){if(1&e&&i.vc(0),2&e){const e=a.$implicit;i.zc(" A: ",e.a," B: ",e.b," C: ",e.c," ")}}function d(e,a){if(1&e&&(i.vc(0),i.dc(1,"json"),i.dc(2,"json")),2&e){const e=a.$implicit,n=a.filterColumns;i.Ac(" A: ",e.a," B: ",e.b," C: ",e.c," ",i.ec(1,5,a.orderColumns)," ",i.ec(2,7,n)," ")}}let u=(()=>{class e{constructor(){this.columnDefs=[{id:"a",name:"A",type:"number"},{id:"b",name:"B",disableSort:!0},{id:"c",name:"C"}],this.datas=[{a:"1",b:"11",c:"12"},{a:"2",b:"21",c:"22"},{a:"3",b:"31",c:"32"},{a:"11",b:"11",c:"12"},{a:"12",b:"21",c:"22"},{a:"13",b:"31",c:"32"},{a:"21",b:"11",c:"12"},{a:"22",b:"21",c:"22"},{a:"23",b:"31",c:"32"},{a:"31",b:"11",c:"12"},{a:"32",b:"21",c:"22"},{a:"33",b:"31",c:"32"},{a:"41",b:"11",c:"12"},{a:"42",b:"21",c:"22"},{a:"43",b:"31",c:"32"},{a:"51",b:"11",c:"12"},{a:"52",b:"21",c:"22"},{a:"53",b:"31",c:"32"}]}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["udemo-viewer-basic"]],decls:7,vars:12,consts:[[3,"columnDefs","datas","dataTemplate","itemHeight","tableHeight"],["dataTmpl",""],[3,"columnDefs","datas","dataTemplate","itemHeight","itemWidth","tableHeight","maxOrderNumber"],["dataTmpl2",""]],template:function(e,a){if(1&e&&(i.Mb(0,"u-viewer",0),i.tc(1,l,1,3,"ng-template",null,1,i.uc),i.Mb(3,"br"),i.Mb(4,"u-viewer",2),i.tc(5,d,3,9,"ng-template",null,3,i.uc)),2&e){const e=i.nc(2),n=i.nc(6);i.ic("columnDefs",a.columnDefs)("datas",a.datas)("dataTemplate",e)("itemHeight",40)("tableHeight","200px"),i.Bb(4),i.ic("columnDefs",a.columnDefs)("datas",a.datas)("dataTemplate",n)("itemHeight",40)("itemWidth",500)("tableHeight","200px")("maxOrderNumber",1)}},directives:[s.a],pipes:[m.e],encapsulation:2}),e})();var p=n("lR5k");let f=(()=>{class e{constructor(){this.basic=n("WIsQ").default}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["udemo-viewer"]],decls:11,vars:1,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c\u4f7f\u7528","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],["intro",""],["src","switch/basic.md"],["uTitle","Viewer \u89c6\u56fe"],["src","viewer/viewer.md"],["uTitle","API"],["src","viewer/viewer-api.md"]],template:function(e,a){1&e&&(i.Rb(0,"u-tabs"),i.Rb(1,"u-tab",0),i.Rb(2,"udemo-code-box",1),i.Rb(3,"div",2),i.Mb(4,"udemo-viewer-basic"),i.Qb(),i.Rb(5,"div",3),i.Mb(6,"markdown",4),i.Qb(),i.Qb(),i.Qb(),i.Rb(7,"u-tab",5),i.Mb(8,"markdown",6),i.Qb(),i.Rb(9,"u-tab",7),i.Mb(10,"markdown",8),i.Qb(),i.Qb()),2&e&&(i.Bb(2),i.ic("uCode",a.basic))},directives:[o.a,b.a,r.a,u,p.b],encapsulation:2}),e})();var w=n("JnqV"),v=n("tyNb"),g=n("tk/3"),h=n("5NC8");const C=[{path:"",component:f}];let T=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({imports:[[m.b,c.b,v.c.forChild(C),g.b,p.c.forRoot({loader:g.a}),w.a,h.k,t.a]]}),e})()},WIsQ:function(e,a,n){"use strict";n.r(a),a.default="import { UViewerColumnDef } from './../../../ng-ueqt/src/components/viewer/viewer.component';\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'udemo-viewer-basic',\n  template: `\n  <u-viewer [columnDefs]=\"columnDefs\" [datas]=\"datas\" [dataTemplate]=\"dataTmpl\" [itemHeight]=\"40\" [tableHeight]=\"'200px'\">\n  </u-viewer>\n  <ng-template #dataTmpl let-data>\n      A: {{ data.a }}\n      B: {{ data.b }}\n      C: {{ data.c }}\n  </ng-template>\n\n  <br/>\n\n  <u-viewer [columnDefs]=\"columnDefs\" [datas]=\"datas\" [dataTemplate]=\"dataTmpl2\" [itemHeight]=\"40\" [itemWidth]=\"500\" [tableHeight]=\"'200px'\" [maxOrderNumber]=\"1\">\n  </u-viewer>\n  <ng-template #dataTmpl2 let-data let-orderColumns='orderColumns' let-filterColumns=\"filterColumns\">\n      A: {{ data.a }}\n      B: {{ data.b }}\n      C: {{ data.c }}\n      {{ orderColumns | json }}\n      {{ filterColumns | json }}\n  </ng-template>\n`\n})\nexport class UdemoViewerBasicComponent {\n  columnDefs: UViewerColumnDef[] = [\n    {\n      id: 'a',\n      name: 'A',\n      type: 'number'\n    },\n    {\n      id: 'b',\n      name: 'B',\n      disableSort: true\n    },\n    {\n      id: 'c',\n      name: 'C'\n    }\n  ];\n\n  datas = [\n    { a: '1', b: '11', c: '12' },\n    { a: '2', b: '21', c: '22' },\n    { a: '3', b: '31', c: '32' },\n    { a: '11', b: '11', c: '12' },\n    { a: '12', b: '21', c: '22' },\n    { a: '13', b: '31', c: '32' },\n    { a: '21', b: '11', c: '12' },\n    { a: '22', b: '21', c: '22' },\n    { a: '23', b: '31', c: '32' },\n    { a: '31', b: '11', c: '12' },\n    { a: '32', b: '21', c: '22' },\n    { a: '33', b: '31', c: '32' },\n    { a: '41', b: '11', c: '12' },\n    { a: '42', b: '21', c: '22' },\n    { a: '43', b: '31', c: '32' },\n    { a: '51', b: '11', c: '12' },\n    { a: '52', b: '21', c: '22' },\n    { a: '53', b: '31', c: '32' },\n  ];\n}\n"}}]);