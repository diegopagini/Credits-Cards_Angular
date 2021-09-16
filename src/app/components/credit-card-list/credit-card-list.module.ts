import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardListComponent } from './credit-card-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CreditCardListComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [CreditCardListComponent],
})
export class CreditCardListModule {}
