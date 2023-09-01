import { NgModule } from '@angular/core';
import { ModalDetailsComponent } from './modal-details/modal-details.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';




@NgModule({
  declarations: [ModalDetailsComponent],
  exports: [ModalDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    
   
  ]
})
export class SharedModule { }
