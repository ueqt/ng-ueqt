"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[619],{7619:(p,r,i)=>{i.r(r),i.d(r,{UdemoFlexModule:()=>g});var c=i(433),n=i(4650),x=i(5471),h=i(77),f=i(9770),v=i(9157),l=i(3679),b=i(8074),F=i(3192),A=i(7545);class a{constructor(){this.flexDirections=Object.keys(l.kY).map(t=>({label:t,value:l.kY[t]})),this.flexAlignmentHorizontals=Object.keys(l.M5).map(t=>({label:t,value:l.M5[t]})),this.flexAlignmentVerticals=Object.keys(l.eO).map(t=>({label:t,value:l.eO[t]})),this.direction=this.flexDirections[0],this.alignmentHorizontal=this.flexAlignmentHorizontals[0],this.alignmentVertical=this.flexAlignmentVerticals[0],this.fillDirection=l.kY.row}changeDirection(){this.fillDirection=this.fillDirection===l.kY.row?l.kY.column:l.kY.row}static#n=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275cmp=n.Xpm({type:a,selectors:[["udemo-flex-basic"]],decls:45,vars:13,consts:[["uDirection","row","uAlignmentHorizontal","space-around"],["uType","select","uLabel","\u65b9\u5411",3,"uOptions","ngModel","ngModelChange"],["uType","select","uLabel","\u6a2a\u5411\u6392\u5217",3,"uOptions","ngModel","ngModelChange"],["uType","select","uLabel","\u7eb5\u5411\u6392\u5217",3,"uOptions","ngModel","ngModelChange"],[2,"width","100%","height","500px","border","1px solid gray"],[3,"uDirection","uAlignmentHorizontal","uAlignmentVertical"],[1,"blocks","one"],[1,"blocks","two"],[1,"blocks","three"],[1,"blocks","four"],[1,"blocks","five"],[2,"width","100%","height","200px","border","1px solid gray",3,"click"],["uAlignmentVertical","stretch",3,"uDirection"],["uFlex","20","uFlexMd","50",1,"blocks","one"],["uFlex","80","uFlexMd","50",1,"blocks","two"],["uFlex","20",1,"blocks","one"],["uFlex","60",1,"blocks","two"],["uFlex","auto",1,"blocks","three"],["uDirectionMd","column","uAlignmentVertical","stretch",3,"uDirection","uGap"],["uFlex","20"],["uFlex","60"],["uFlex","120px"]],template:function(o,e){1&o&&(n.TgZ(0,"u-flex",0)(1,"u-input",1),n.NdJ("ngModelChange",function(s){return e.direction=s}),n.qZA(),n.TgZ(2,"u-input",2),n.NdJ("ngModelChange",function(s){return e.alignmentHorizontal=s}),n.qZA(),n.TgZ(3,"u-input",3),n.NdJ("ngModelChange",function(s){return e.alignmentVertical=s}),n.qZA()(),n._UZ(4,"hr"),n.TgZ(5,"div",4)(6,"u-flex",5)(7,"div",6),n._uU(8,"1"),n.qZA(),n.TgZ(9,"div",7),n._uU(10,"2"),n.qZA(),n.TgZ(11,"div",8),n._uU(12,"3"),n.qZA(),n.TgZ(13,"div",9),n._uU(14,"4"),n.qZA(),n.TgZ(15,"div",10),n._uU(16,"5"),n.qZA()()(),n._UZ(17,"hr"),n.TgZ(18,"div",11),n.NdJ("click",function(){return e.changeDirection()}),n.TgZ(19,"u-flex",12)(20,"div",13),n._uU(21,'uFlex="20"'),n.qZA(),n.TgZ(22,"div",14),n._uU(23,'uFlex="80"'),n.qZA()()(),n._UZ(24,"hr"),n.TgZ(25,"div",11),n.NdJ("click",function(){return e.changeDirection()}),n.TgZ(26,"u-flex",12)(27,"div",15),n._uU(28,'uFlex="20"'),n.qZA(),n.TgZ(29,"div",16),n._uU(30,'uFlex="60"'),n.qZA(),n.TgZ(31,"div",17),n._uU(32,'uFlex="auto"'),n.qZA()()(),n._UZ(33,"hr"),n.TgZ(34,"div",11),n.NdJ("click",function(){return e.changeDirection()}),n.TgZ(35,"u-flex",18)(36,"div",19)(37,"div",6),n._uU(38,'uFlex="20"'),n.qZA()(),n.TgZ(39,"div",20)(40,"div",7),n._uU(41,'uFlex="60"'),n.qZA()(),n.TgZ(42,"div",21)(43,"div",8),n._uU(44,'uFlex="120px"'),n.qZA()()()()),2&o&&(n.xp6(1),n.Q6J("uOptions",e.flexDirections)("ngModel",e.direction),n.xp6(1),n.Q6J("uOptions",e.flexAlignmentHorizontals)("ngModel",e.alignmentHorizontal),n.xp6(1),n.Q6J("uOptions",e.flexAlignmentVerticals)("ngModel",e.alignmentVertical),n.xp6(3),n.Q6J("uDirection",e.direction.value)("uAlignmentHorizontal",e.alignmentHorizontal.value)("uAlignmentVertical",e.alignmentVertical.value),n.xp6(13),n.Q6J("uDirection",e.fillDirection),n.xp6(7),n.Q6J("uDirection",e.fillDirection),n.xp6(9),n.Q6J("uDirection",e.fillDirection)("uGap",10))},dependencies:[c.JJ,c.On,b.$,F.C_,A.b],styles:[".blocks[_ngcontent-%COMP%]{min-width:75px;min-height:50px;border-radius:3px;padding:8px;box-shadow:0 2px 5px #342f33a1;opacity:.9;color:#fff;text-align:center}.one[_ngcontent-%COMP%]{background-color:#009688}.two[_ngcontent-%COMP%]{background-color:#3949ab;min-height:100px}.three[_ngcontent-%COMP%]{background-color:#9c27b0}.four[_ngcontent-%COMP%]{background-color:#b08752;min-height:75px}.five[_ngcontent-%COMP%]{background-color:#5ca6b0}"]})}class d{constructor(){this.basic=i(96).Z}static#n=this.\u0275fac=function(o){return new(o||d)};static#e=this.\u0275cmp=n.Xpm({type:d,selectors:[["udemo-flex"]],decls:11,vars:1,consts:[["uTitle","\u6f14\u793a"],["uTitle","\u57fa\u672c\u4f7f\u7528","uOnlineUrl","s/ng-ueqt-grid-basic-299jd",3,"uCode"],["demo",""],["intro",""],["src","flex/basic.md"],["uTitle","Flex Flex\u5e03\u5c40"],["src","flex/flex.md"],["uTitle","API"],["src","flex/flex-api.md"]],template:function(o,e){1&o&&(n.TgZ(0,"u-tabs")(1,"u-tab",0)(2,"udemo-code-box",1)(3,"div",2),n._UZ(4,"udemo-flex-basic"),n.qZA(),n.TgZ(5,"div",3),n._UZ(6,"markdown",4),n.qZA()()(),n.TgZ(7,"u-tab",5),n._UZ(8,"markdown",6),n.qZA(),n.TgZ(9,"u-tab",7),n._UZ(10,"markdown",8),n.qZA()()),2&o&&(n.xp6(2),n.Q6J("uCode",e.basic))},dependencies:[x.lF,h.n,f.A,v.p,a],encapsulation:2})}var k=i(4631),Z=i(8039),D=i(6895),m=i(529);const U=[{path:"",component:d}];class g{static#n=this.\u0275fac=function(o){return new(o||g)};static#e=this.\u0275mod=n.oAB({type:g});static#i=this.\u0275inj=n.cJS({imports:[D.ez,c.u5,Z.Bz.forChild(U),m.JF,x.JP.forRoot({loader:m.eN}),k.h,l.Jd,l.md,l.pM]})}},96:(p,r,i)=>{i.d(r,{Z:()=>c});const c='import { Component } from \'@angular/core\';\nimport { UFlexAlignmentHorizontals, UFlexAlignmentVerticals, UFlexDirections } from \'ng-ueqt\';\n\n@Component({\n  selector: \'udemo-flex-basic\',\n  template: `\n  <u-flex uDirection="row" uAlignmentHorizontal="space-around">\n    <u-input uType="select" uLabel="\u65b9\u5411" [uOptions]="flexDirections" [(ngModel)]="direction"></u-input>\n    <u-input uType="select" uLabel="\u6a2a\u5411\u6392\u5217" [uOptions]="flexAlignmentHorizontals" [(ngModel)]="alignmentHorizontal"></u-input>\n    <u-input uType="select" uLabel="\u7eb5\u5411\u6392\u5217" [uOptions]="flexAlignmentVerticals" [(ngModel)]="alignmentVertical"></u-input>\n  </u-flex>\n  <hr/>\n  <div style="width: 100%; height: 500px; border: 1px solid gray;">\n    <u-flex [uDirection]="direction.value"\n    [uAlignmentHorizontal]="alignmentHorizontal.value"\n    [uAlignmentVertical]="alignmentVertical.value">\n      <div class="blocks one">1</div>\n      <div class="blocks two">2</div>\n      <div class="blocks three">3</div>\n      <div class="blocks four">4</div>\n      <div class="blocks five">5</div>\n    </u-flex>\n  </div>\n\n  <hr />\n\n  <div style="width: 100%; height: 200px; border: 1px solid gray;" (click)="changeDirection()">\n    <u-flex [uDirection]="fillDirection" uAlignmentVertical="stretch">\n      <div uFlex="20" uFlexMd="50" class="blocks one">uFlex="20"</div>\n      <div uFlex="80" uFlexMd="50" class="blocks two">uFlex="80"</div>\n    </u-flex>\n  </div>\n\n  <hr />\n\n  <div style="width: 100%; height: 200px; border: 1px solid gray;" (click)="changeDirection()">\n    <u-flex [uDirection]="fillDirection" uAlignmentVertical="stretch">\n      <div uFlex="20" class="blocks one">uFlex="20"</div>\n      <div uFlex="60" class="blocks two">uFlex="60"</div>\n      <div uFlex="auto" class="blocks three">uFlex="auto"</div>\n    </u-flex>\n  </div>\n\n  <hr />\n\n  <div style="width: 100%; height: 200px; border: 1px solid gray;" (click)="changeDirection()">\n    <u-flex [uDirection]="fillDirection" uDirectionMd="column" uAlignmentVertical="stretch" [uGap]="10">\n      <div uFlex="20"><div class="blocks one">uFlex="20"</div></div>\n      <div uFlex="60"><div class="blocks two">uFlex="60"</div></div>\n      <div uFlex="120px"><div class="blocks three">uFlex="120px"</div></div>\n    </u-flex>\n  </div>\n`,\n  styles: [\n    `\n  .blocks {\n    min-width: 75px;\n    min-height: 50px;\n    border-radius: 3px;\n    padding: 8px;\n    box-shadow: 0 2px 5px 0 rgb(52 47 51 / 63%);\n    opacity: .9;\n    color: #fff;\n    text-align: center;\n  }\n\n  .one {\n    background-color: #009688;\n  }\n\n  .two {\n    background-color: #3949ab;\n    min-height: 100px;\n  }\n\n  .three {\n    background-color: #9c27b0;\n  }\n\n  .four {\n    background-color: #b08752;\n    min-height: 75px;\n  }\n\n  .five {\n    background-color: #5ca6b0;\n  }\n`\n  ]\n})\nexport class UdemoFlexBasicComponent {\n  flexDirections = Object.keys(UFlexDirections).map(key => ({ label: key, value: UFlexDirections[key] }));\n  flexAlignmentHorizontals = Object.keys(UFlexAlignmentHorizontals).map(key => ({ label: key, value: UFlexAlignmentHorizontals[key] }));\n  flexAlignmentVerticals = Object.keys(UFlexAlignmentVerticals).map(key => ({ label: key, value: UFlexAlignmentVerticals[key] }));\n  direction: any = this.flexDirections[0];\n  alignmentHorizontal: any = this.flexAlignmentHorizontals[0];\n  alignmentVertical: any = this.flexAlignmentVerticals[0];\n\n  fillDirection = UFlexDirections.row;\n\n  changeDirection(): void {\n    if (this.fillDirection === UFlexDirections.row) {\n      this.fillDirection = UFlexDirections.column;\n    } else {\n      this.fillDirection = UFlexDirections.row;\n    }\n  }\n}\n'}}]);