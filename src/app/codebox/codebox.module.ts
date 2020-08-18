import { FormsModule } from '@angular/forms';
import { UdemoCodeBoxComponent } from './codebox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [UdemoCodeBoxComponent],
  imports: [CommonModule, MarkdownModule.forRoot()],
  exports: [UdemoCodeBoxComponent],
})
export class UCodeboxModule {}
