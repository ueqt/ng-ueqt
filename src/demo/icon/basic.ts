import { Component } from '@angular/core';
import { allIcons, UIconDefinition } from 'ng-ueqt';

@Component({
  selector: 'udemo-icon-basic',
  template: `
  <ul>
    <li *ngFor="let icon of icons">
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
  primerIcons = allIcons as {
    [key: string]: UIconDefinition;
  };

  icons: UIconDefinition[] = Object.keys(this.primerIcons).map(key => this.primerIcons[key]);
}
