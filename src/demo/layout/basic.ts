import { Component } from '@angular/core';
import { ULAYOUTS } from 'ng-ueqt';

@Component({
  selector: 'udemo-layout-basic',
  standalone: true,
  imports: [
    ULAYOUTS,
  ],
  template: `
    <u-layout>
      <u-header>Header</u-header>
      <u-content>Content</u-content>
      <u-footer>Footer</u-footer>
    </u-layout>
    <u-layout>
      <u-header>Header</u-header>
      <u-layout>
        <u-sider>Sider</u-sider>
        <u-content>Content</u-content>
      </u-layout>
      <u-footer>Footer</u-footer>
    </u-layout>
    <u-layout>
      <u-header>Header</u-header>
      <u-layout>
        <u-content>Content</u-content>
        <u-sider>Sider</u-sider>
      </u-layout>
      <u-footer>Footer</u-footer>
    </u-layout>
    <u-layout>
      <u-sider>Sider</u-sider>
      <u-layout>
        <u-header>Header</u-header>
        <u-content>Content</u-content>
        <u-footer>Footer</u-footer>
      </u-layout>
    </u-layout>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
      u-header,
      u-footer {
        background: #7dbcea;
        color: #fff;
      }
      u-footer {
        line-height: 1.5;
      }
      u-sider {
        background: #3ba0e9;
        color: #fff;
        line-height: 120px;
      }
      u-content {
        background: rgba(16, 142, 233, 1);
        color: #fff;
        min-height: 120px;
        line-height: 120px;
      }
      u-layout {
        margin-bottom: 48px;
      }
      u-layout:last-child {
        margin: 0;
      }
    `,
  ],
})
export class UdemoLayoutBasicComponent {}
