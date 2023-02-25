import { Component } from '@angular/core';
import { allIcons, provideIconChild, sleep,
  UButtonComponent, UButtonGroupComponent, UIconDefinition, UIconDirective, UInputComponent } from 'ng-ueqt';

const icons: UIconDefinition[] = [
  allIcons.uiconLeft,
  allIcons.uiconRight,
  allIcons.uiconUp,
  allIcons.uiconDown,
  allIcons.uiconBars,
];

@Component({
  selector: 'udemo-button-basic',
  standalone: true,
  imports: [
    UButtonComponent,
    UButtonGroupComponent,
    UInputComponent,
    UIconDirective,
  ],
  providers: [
    provideIconChild(icons)
  ],
  template: `
  <u-button [uClick]="test">Primary</u-button>
  <u-button uColor="red" [uIconOnly]="true" [uClick]="test">
    <i uIcon="down"></i>
  </u-button>
  <u-button uColor="var(--u-accent)" [uClick]="testArgs" [uClickArgs]="['abc', 1]">Accent</u-button>
  <u-button [uDisabled]="true" [uClick]="test">禁用</u-button>

  <hr />

  <u-button-group>
    <u-button uColor="red" [uIconOnly]="true" [uClick]="test">
      <i uIcon="down"></i>
    </u-button>
    <u-button uColor="var(--u-accent)" [uClick]="testArgs" [uClickArgs]="['abc', 1]">Accent</u-button>
    <u-button [uClick]="test">Primary</u-button>
  </u-button-group>

  <hr />

  <u-button-group>
    <u-button uColor="red" [uIconOnly]="true" [uClick]="test">
      <i uIcon="down"></i>
    </u-button>
    <u-input uType="select" style="background-color: var(--u-accent);color: var(--u-accent-c);" [uOptions]="options"></u-input>
  </u-button-group>
`,
})
export class UdemoButtonBasicComponent {

  options = [
    { label: 'abc', value: 'def' },
    { label: 'abc1', value: 'def1' },
    { label: 'abc2', value: 'def2' },
  ];

  test = async () => {
    console.log(this);
    await sleep(5000);
    console.log('test');
  };

  testArgs = async (button: UButtonComponent, args: any[]) => {
    console.log(this);
    console.log(args);
    await sleep(5000);
    console.log('testArgs');
  };
}
