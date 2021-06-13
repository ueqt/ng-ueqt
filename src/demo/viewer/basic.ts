import { UViewerColumnDef } from './../../../ng-ueqt/src/components/viewer/viewer.component';
import { Component } from '@angular/core';

@Component({
  selector: 'udemo-viewer-basic',
  template: `
  <u-viewer [columnDefs]="columnDefs" [datas]="datas" [dataTemplate]="dataTmpl" [itemHeight]="40" [tableHeight]="'200px'">
  </u-viewer>
  <ng-template #dataTmpl let-data>
      A: {{ data.a }}
      B: {{ data.b }}
      C: {{ data.c }}
  </ng-template>

  <br/>

  <u-viewer [columnDefs]="columnDefs" [datas]="datas" [dataTemplate]="dataTmpl2" [itemHeight]="40" [itemWidth]="500" [tableHeight]="'200px'" [maxOrderNumber]="1">
  </u-viewer>
  <ng-template #dataTmpl2 let-data let-orderColumns='orderColumns'>
      A: {{ data.a }}
      B: {{ data.b }}
      C: {{ data.c }}
      {{ orderColumns | json }}
  </ng-template>
`
})
export class UdemoViewerBasicComponent {
  columnDefs: UViewerColumnDef[] = [
    {
      id: 'a',
      name: 'A',
      type: 'number'
    },
    {
      id: 'b',
      name: 'B',
      disableSort: true
    },
    {
      id: 'c',
      name: 'C'
    }
  ];

  datas = [
    { a: '1', b: '11', c: '12' },
    { a: '2', b: '21', c: '22' },
    { a: '3', b: '31', c: '32' },
    { a: '11', b: '11', c: '12' },
    { a: '12', b: '21', c: '22' },
    { a: '13', b: '31', c: '32' },
    { a: '21', b: '11', c: '12' },
    { a: '22', b: '21', c: '22' },
    { a: '23', b: '31', c: '32' },
    { a: '31', b: '11', c: '12' },
    { a: '32', b: '21', c: '22' },
    { a: '33', b: '31', c: '32' },
    { a: '41', b: '11', c: '12' },
    { a: '42', b: '21', c: '22' },
    { a: '43', b: '31', c: '32' },
    { a: '51', b: '11', c: '12' },
    { a: '52', b: '21', c: '22' },
    { a: '53', b: '31', c: '32' },
  ];
}
