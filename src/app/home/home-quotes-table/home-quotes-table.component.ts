import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Stock, StockData } from '../../shared/interfaces/stock-data';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home-quotes-table',
  templateUrl: './home-quotes-table.component.html',
  styleUrl: './home-quotes-table.component.scss'
})
export class HomeQuotesTableComponent implements OnInit {

  public quotesListData: StockData | undefined;
  @Output('dataQuoteEmit') emitQuoteData = new EventEmitter<Stock>();

  constructor(private readonly _dataService: DataService){

  }

  onDetailClick(list: Stock) {
    this.emitQuoteData.emit(list);
  }

  ngOnInit(): void {
    this._dataService.brapiQuotesList$.subscribe({next: (res: StockData) => this.quotesListData = res, error: (err) => {
      console.error(err);
    }})
  }

}
