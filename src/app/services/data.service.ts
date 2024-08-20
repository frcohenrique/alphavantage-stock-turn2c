import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StockData } from '../shared/interfaces/stock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private initialStockData: StockData = {
    indexes: [],
    stocks: [],
    availableSectors: [],
    availableStockTypes: [],
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 10,
    totalCount: 0,
    hasNextPage: false,
  };

  constructor() { }

  private brapiQuotesListSubject = new BehaviorSubject<StockData>(this.initialStockData);
  brapiQuotesList$: Observable<StockData> = this.brapiQuotesListSubject.asObservable();

  setBrapiQuotesList(data: StockData) {
    this.brapiQuotesListSubject.next(data);
  }
}
