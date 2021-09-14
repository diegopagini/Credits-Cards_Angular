import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormErrorModule } from '../form-error/form-error.module';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [CreditCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormErrorModule,
    DirectivesModule,
  ],
  exports: [CreditCardComponent],
})
export class CreditCardModule {}
