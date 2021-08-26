import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcDiscover,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent implements OnInit {
  public creditCards = {
    visa: faCcVisa,
    master: faCcMastercard,
    amex: faCcAmex,
    discover: faCcDiscover,
  };
  public creditCardForm: FormGroup;

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

  ngOnInit(): void {}
}
