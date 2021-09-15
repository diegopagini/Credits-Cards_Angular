import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';

const routes: Routes = [
  {
    path: '',
    component: CreditCardComponent,
  },
  { path: 'credit-card-list', component: CreditCardListComponent },
  { path: '**', component: CreditCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
