import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {HomeQuotesTableComponent } from './home-quotes-table/home-quotes-table.component';
import { HomeQuoteDetailComponent } from './home-quote-detail/home-quote-detail.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, HomeQuotesTableComponent, HomeQuoteDetailComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
