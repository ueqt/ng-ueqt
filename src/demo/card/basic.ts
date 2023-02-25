import { Component } from '@angular/core';
import { UButtonComponent, UCARDS } from 'ng-ueqt';

@Component({
  selector: 'udemo-card-basic',
  standalone: true,
  imports: [
    UCARDS,
    UButtonComponent,
  ],
  template: `
    <u-card class="example-card">
      <u-card-header>
        <u-card-avatar class="example-header-image"></u-card-avatar>
        <u-card-title>标题</u-card-title>
        <u-card-subtitle>副标题</u-card-subtitle>
      </u-card-header>
      <u-card-image>
        <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
      </u-card-image>
      <u-card-content>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
          bred for hunting.
        </p>
      </u-card-content>
      <u-card-actions>
        <u-button>LIKE</u-button>
        <u-button>SHARE</u-button>
      </u-card-actions>
    </u-card>
  `,
  styles: [
    `
.example-card {
  max-width: 400px;
}
.example-header-image {
  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
  background-size: cover;
}`
  ]
})
export class UdemoCardBasicComponent { }
