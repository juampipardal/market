import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './models/quote';
import { QuotesService } from './services/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private quotesService: QuotesService) { }

  quotesLoading$: Observable<boolean> = this.quotesService.isLoadingState;
  quotes$: Observable<Quote[]> = this.quotesService.getQuotes();

}
