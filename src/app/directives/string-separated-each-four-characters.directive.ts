import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[string-separated-each-four-characters]',
})
export class StringSeparatedEachFourCharactersDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;

    this.el.nativeElement.value = initalValue
      .replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
