import { NgModule } from '@angular/core';
import { ModalDetailsComponent } from './modal-details/modal-details.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [ModalDetailsComponent, ModalConfirmComponent],
  exports: [ModalDetailsComponent, ModalConfirmComponent],
  imports: [
    CommonModule,
    FormsModule,
    
   
  ]
})
export class SharedModule { }
