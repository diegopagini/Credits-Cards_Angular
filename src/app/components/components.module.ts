import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardModule } from './credit-card/credit-card.module';
import { CreditCardListModule } from './credit-card-list/credit-card-list.module';

@NgModule({
  imports: [CommonModule, CreditCardModule, CreditCardListModule],
  exports: [CreditCardModule, CreditCardListModule],
})
export class ComponentsModule {}
