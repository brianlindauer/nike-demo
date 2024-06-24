import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevenueComponent } from './revenue/revenue.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';

const routes: Routes = [
  { path: '', redirectTo: 'revenue', pathMatch: 'full' }, //default route
  { path: 'revenue-prediction', component: RevenueComponent },
  { path: 'similar-products', component: SimilarProductsComponent },  
  { path: 'sales-history', component: SalesHistoryComponent },    
  { path: '**', component: RevenueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
