import { Component, Input, OnInit } from '@angular/core';
import {
  DynamicTemplate,
  RuntimeCompilerService,
} from './runtime-compiler.service';
@Component({
  selector: 'u-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit {
  @Input() context: any = {};
  @Input() template = '';
  dynamicTemplate: DynamicTemplate;

  constructor(private runtimeCompilerService: RuntimeCompilerService) {}

  ngOnInit(): void {
    this.generate();
  }

  generate(): void {
    this.runtimeCompilerService
      .createAndCompileTemplate(this.context, this.template)
      .then((data) => {
        this.dynamicTemplate = data;
      });
  }
}
