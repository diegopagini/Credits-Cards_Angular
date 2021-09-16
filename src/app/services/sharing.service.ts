import { Injectable } from '@angular/core';
import { CreditCard } from '../models/credit-card.interface';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private creditCardList: CreditCard[] = [];

  public addCreditCard(card: CreditCard) {
    this.creditCardList.push(card);
  }

  public getCreditCardList(): CreditCard[] {
    return this.creditCardList;
  }

  public deleteCeditCard(index): void {
    this.creditCardList.splice(index, 1);
  }
}
