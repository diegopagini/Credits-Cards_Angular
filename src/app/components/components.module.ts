import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardModule } from './credit-card/credit-card.module';
import { CreditCardListModule } from './credit-card-list/credit-card-list.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  imports: [CommonModule, CreditCardModule, CreditCardListModule, NavbarModule],
  exports: [CreditCardModule, CreditCardListModule, NavbarModule],
})
export class ComponentsModule {}
