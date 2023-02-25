import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { allIconDefs, materialIconDefs, primerIconDefs, UIconDefinition, UIconDirective } from 'ng-ueqt';
import { provideIconChild } from 'ng-ueqt/components/icon/icon.provider';

@Component({
  selector: 'udemo-icon-basic',
  standalone: true,
  imports: [
    NgFor,
    UIconDirective
  ],
  providers: [
    provideIconChild(allIconDefs)
  ],
  template: `
  <h2>Primer Icons</h2>
  <ul>
    <li *ngFor="let icon of primerIcons">
        <i [uIcon]="icon.name" style="color:red;" [uIconSize]="24" uIconClass="icon-test"></i>
        <span>{{icon.name}}</span>
    </li>
</ul>
<hr/>
<h2>Material Icons</h2>
<ul>
    <li *ngFor="let icon of materialIcons">
        <i [uIcon]="icon.name" style="color:red;" [uIconSize]="24" uIconClass="icon-test"></i>
        <span>{{icon.name}}</span>
    </li>
</ul>
  <!-- <i uIcon="bars" style="color: red;"></i>
    <i uIcon="left"></i>
    <i uIcon="right"></i>
    <i uIcon="up"></i>
    <i uIcon="down"></i>
    <i uIcon="bars"></i> -->
    `,
  styles: [
    `
    ul {
      margin: 10px 0;
      overflow: hidden;
      list-style: none;
    }
    li {
      position: relative;
      float: left;
      width: 16.66%;
      height: 100px;
      margin: 3px 0;
      padding: 10px 0 0;
      overflow: hidden;
      color: #555;
      text-align: center;
      list-style: none;
      background-color: inherit;
      border-radius: 4px;
      cursor: pointer;
    }
    i {
      font-size: 24px;
      margin: 12px 0 8px;
    }
    span {
      display: block;
      font-family: Lucida Console,Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
      white-space: nowrap;
      text-align: center;
    }
    `
  ]
})
export class UdemoIconBasicComponent {
  primerIcons: UIconDefinition[] = [...primerIconDefs];
  materialIcons: UIconDefinition[] = [...materialIconDefs];
}
