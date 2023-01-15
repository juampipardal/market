import { Component, Input } from '@angular/core';
import { Quote } from 'src/app/models/quote';

@Component({
  selector: 'app-market-dashboard',
  templateUrl: './market-dashboard.component.html',
  styleUrls: ['./market-dashboard.component.scss']
})
export class MarketDashboardComponent {

  @Input() isLoading: boolean = true;
  @Input() quotes: Quote[] = [];

  constructor() { }

}
