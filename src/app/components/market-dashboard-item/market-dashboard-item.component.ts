import { Component, Input } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { QuoteField } from 'src/app/models/quote-field';

@Component({
  selector: 'app-market-dashboard-item',
  templateUrl: './market-dashboard-item.component.html',
  styleUrls: ['./market-dashboard-item.component.scss']
})
export class MarketDashboardItemComponent {

  @Input() field: QuoteField;

  constructor() { }

}
