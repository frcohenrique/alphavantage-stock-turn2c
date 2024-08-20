import { Component, Input } from '@angular/core';
import { Stock } from '../../shared/interfaces/stock-data';

@Component({
  selector: 'app-home-quote-detail',
  templateUrl: './home-quote-detail.component.html',
  styleUrl: './home-quote-detail.component.scss'
})
export class HomeQuoteDetailComponent {

  @Input() quoteDetail: Stock | undefined;

}
