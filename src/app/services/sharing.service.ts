import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCard } from '../models/credit-card.interface';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private creditCardList: CreditCard[] = [];
  public updateCard: CreditCard;

  constructor(private router: Router) {}

  public addCreditCard(card: CreditCard) {
    this.creditCardList.push(card);
  }

  public getCreditCardList(): CreditCard[] {
    return this.creditCardList;
  }

  public deleteCeditCard(index): void {
    this.creditCardList.splice(index, 1);
  }

  public editCreditCard(index): void {
    this.router.navigate(['']);
    const cardValues = this.creditCardList[index];
    this.updateCard = cardValues;
    this.creditCardList.splice(index, 1);
  }
}
