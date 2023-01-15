import { Component, Input } from '@angular/core';
import { FieldGroup } from 'src/app/models/field-group';

@Component({
  selector: 'app-market-dashboard-group',
  templateUrl: './market-dashboard-group.component.html',
  styleUrls: ['./market-dashboard-group.component.scss']
})
export class MarketDashboardGroupComponent {

  @Input() group: FieldGroup;
  @Input() noBorder: boolean = false;

  constructor() { }


}
