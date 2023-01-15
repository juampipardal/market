import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { QuotesDeserializer } from '../deserializers/quotes.deserializer';
import { QoutesResponse } from '../interfaces/quote.response';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private static QUOTES_URL = 'https://integra1.solutions.webfg.ch/restweb/quotes/2970161-1058-814?fields=LVAL_NORM,CLOSE_ADJ_NORM,NC2_PR_NORM,NC2_NORM,VOL,TUR,PY_CLOSE,YTD_PR_NORM';
  private isLoading$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<Quote[]> {
    this.isLoading$.next(true);
    return this.http.get<QoutesResponse>(QuotesService.QUOTES_URL)
      .pipe(
        tap(response => this.isLoading$.next(false)),
        map(QuotesDeserializer.DeserializeQuotesResponse)
      );
  }

  get isLoadingState(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }
  
}
