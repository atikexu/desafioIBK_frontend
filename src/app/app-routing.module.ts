import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { QueryListComponent } from './query-list/query-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'exchange-rate', component: ExchangeRateComponent },
  { path: 'query-list', component: QueryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
