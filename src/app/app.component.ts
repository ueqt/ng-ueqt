import { NgUeqtService } from './../../ng-ueqt/src/lib/ng-ueqt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'udemo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'site';

  constructor(private ueqtSerivce: NgUeqtService) {}

  ngOnInit(): void {
    this.title = this.ueqtSerivce.print();
  }
}
