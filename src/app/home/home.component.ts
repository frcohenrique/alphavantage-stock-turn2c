import { BrapiService } from '../services/brapi.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Stock, StockData } from '../shared/interfaces/stock-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public quoteDetail: Stock | undefined = undefined;
  constructor(private readonly _brapiService: BrapiService, private readonly _dataService: DataService){

  }

  getBrapiQuoteList(){
    return this._brapiService.getBrapiQuoteList().subscribe({next: (res) => {
      this._dataService.setBrapiQuotesList(res?.body)
    }, error: (err) => {
      console.error(err)
    }})
  }

  onEmitQuoteData($event: Stock){
    this.quoteDetail = $event;
  }

  getContainerStyles() {
    return {
      display: this.quoteDetail ? 'flex' : 'block',
      width: this.quoteDetail ? 'auto' : '100%'
    };
  }
  ngOnInit(): void {
    this.getBrapiQuoteList();
  }
}
