import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcDiscover,
} from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CreditCard } from 'src/app/models/credit-card.interface';
import { SharingService } from 'src/app/services/sharing.service';

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
  public expirationMonths: any[] = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 },
  ];
  public isTheFrontOfTheCard: boolean = true;
  public expirationYears: number[];
  public updateCard: CreditCard;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private sharingService: SharingService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.creditCardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.minLength(12)]],
      cardHolder: ['', [Validators.required]],
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
        } else {
          this.creditCardType = this.creditCards.discover;
        }
      });

    this.expirationYears = this.createExpirationYears();

    this.updateCard = this.sharingService.updateCard;
    if (this.updateCard) {
      this.creditCardForm.patchValue(this.updateCard);
      this.sharingService.updateCard = null;
    }

    this.creditCardForm.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((formValues) => {
        if (formValues.cardCCV) {
          this.isTheFrontOfTheCard = false;
        } else {
          this.isTheFrontOfTheCard = true;
        }
      });
  }

  public setCreditCardBackground(): boolean {
    let creditCardNumber: any = this.creditCardForm.get('cardNumber').value;

    if (creditCardNumber) {
      creditCardNumber = creditCardNumber.toString();

      if (
        creditCardNumber &&
        !creditCardNumber.startsWith('3') &&
        !creditCardNumber.startsWith('4') &&
        !creditCardNumber.startsWith('5')
      ) {
        return true;
      }
    }
  }

  public isDisabled(previousInput, currentInput): void {
    if (!previousInput) {
      this.creditCardForm.controls[currentInput].disable();
    } else {
      this.creditCardForm.controls[currentInput].enable();
    }
  }

  private createExpirationYears(): number[] {
    let currentYear = new Date().getFullYear();
    let yearsArr = [];
    for (let i = 0; i < 10; i++) {
      yearsArr.push(currentYear++);
    }
    return yearsArr;
  }

  public addCard() {
    if (this.creditCardForm.valid) {
      this.sharingService.addCreditCard(this.creditCardForm.value);
      this.toastr.success('The card was saved successfully!', 'Card saved!');
      this.creditCardForm.reset();
      this.router.navigate(['credit-card-list']);
    } else {
      this.creditCardForm.markAllAsTouched();
    }
  }

  get cardNumberNoValid(): boolean {
    return (
      this.creditCardForm.get('cardNumber').invalid &&
      this.creditCardForm.get('cardNumber').touched
    );
  }

  get cardHolderNoValid(): boolean {
    return (
      this.creditCardForm.get('cardHolder').invalid &&
      this.creditCardForm.get('cardHolder').touched
    );
  }

  get cardExpirationYearNoValid(): boolean {
    return (
      this.creditCardForm.get('cardExpirationYear').invalid &&
      this.creditCardForm.get('cardExpirationYear').touched
    );
  }

  get cardExpirationMonthNoValid(): boolean {
    return (
      this.creditCardForm.get('cardExpirationMonth').invalid &&
      this.creditCardForm.get('cardExpirationMonth').touched
    );
  }

  get cardCCVNoValid(): boolean {
    return (
      this.creditCardForm.get('cardCCV').invalid &&
      this.creditCardForm.get('cardCCV').touched
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
