import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringSeparatedEachFourCharactersDirective } from './string-separated-each-four-characters.directive';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { OnlyLettersDirective } from './only-letters.directive';

@NgModule({
  declarations: [
    StringSeparatedEachFourCharactersDirective,
    OnlyNumbersDirective,
    OnlyLettersDirective,
  ],
  imports: [CommonModule],
  exports: [
    StringSeparatedEachFourCharactersDirective,
    OnlyNumbersDirective,
    OnlyLettersDirective,
  ],
})
export class DirectivesModule {}
