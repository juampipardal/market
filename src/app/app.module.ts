import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MarketDashboardComponent } from './components/market-dashboard/market-dashboard.component';
import { MarketDashboardItemComponent } from './components/market-dashboard-item/market-dashboard-item.component';
import { MarketDashboardGroupComponent } from './components/market-dashboard-group/market-dashboard-group.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketDashboardComponent,
    MarketDashboardItemComponent,
    MarketDashboardGroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
