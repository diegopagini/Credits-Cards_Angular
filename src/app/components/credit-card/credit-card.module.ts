import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CreditCardComponent],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [CreditCardComponent],
})
export class CreditCardModule {}
