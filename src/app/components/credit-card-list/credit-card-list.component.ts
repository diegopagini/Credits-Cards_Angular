import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/credit-card.interface';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss'],
})
export class CreditCardListComponent implements OnInit {
  public creditCardList: CreditCard[] = [];

  constructor(
    private sharingService: SharingService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.creditCardList = this.sharingService.getCreditCardList();
  }

  public editCard() {
    console.log('edit');
  }

  public deleteCard(index) {
    this.sharingService.deleteCeditCard(index);
    this.toastr.error('The card was removed successfully!', 'Deleted card!');
  }
}
