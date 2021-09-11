import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuFormComponent } from './meu-form.component';



@NgModule({
  declarations: [
    MeuFormComponent
  ],
  exports: [MeuFormComponent],
  imports: [
    CommonModule
  ]
})
export class MeuFormModule { }
