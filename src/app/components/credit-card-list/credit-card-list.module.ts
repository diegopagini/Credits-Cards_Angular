import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardListComponent } from './credit-card-list.component';

@NgModule({
  declarations: [CreditCardListComponent],
  imports: [CommonModule],
  exports: [CreditCardListComponent],
})
export class CreditCardListModule {}
