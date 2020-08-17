// https://stackblitz.com/edit/angular-moqyep

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  Compiler,
  CompilerFactory,
  CompilerOptions,
  COMPILER_OPTIONS,
  ViewEncapsulation,
  StaticProvider,
} from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { DynamicComponent } from './dynamic.component';

const compilerOptions: CompilerOptions = {
  useJit: true,
  defaultEncapsulation: ViewEncapsulation.None,
};

export function createCompiler(compilerFactory: CompilerFactory): Compiler {
  return compilerFactory.createCompiler([compilerOptions]);
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [
    { provide: COMPILER_OPTIONS, useValue: compilerOptions, multi: true },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS],
    },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] },
  ],
  declarations: [DynamicComponent],
  exports: [DynamicComponent],
  bootstrap: [DynamicComponent],
})
export class DynamicModule {}
