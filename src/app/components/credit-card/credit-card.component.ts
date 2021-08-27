import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcDiscover,
} from '@fortawesome/free-brands-svg-icons';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent implements OnInit, OnDestroy {
  public creditCards = {
    visa: faCcVisa,
    master: faCcMastercard,
    amex: faCcAmex,
    discover: faCcDiscover,
  };
  public creditCardForm: FormGroup;
  public creditCardType: IconDefinition;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder) {
    this.creditCardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.minLength(16)]],
      cardHolder: ['', [Validators.required, Validators.minLength(3)]],
      cardExpirationYear: ['', [Validators.required]],
      cardExpirationMonth: ['', [Validators.required]],
      cardCCV: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      ],
    });
  }

  ngOnInit(): void {
    this.creditCardForm
      .get('cardNumber')
      .valueChanges.pipe(filter(Boolean), takeUntil(this.unsubscribe$))
      .subscribe((cardNumber: number) => {
        let card = cardNumber.toString();
        if (card.startsWith('4')) {
          this.creditCardType = this.creditCards.visa;
        } else if (card.startsWith('5')) {
          this.creditCardType = this.creditCards.master;
        } else if (card.startsWith('3')) {
          this.creditCardType = this.creditCards.amex;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
