import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterbarComponent } from './components/footerbar/footerbar.component';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TestComponent } from './test/test.component';
import { PolicyPersonalInfoComponent } from './components/policy-personal-info/policy-personal-info.component';
import { PolicyServiceComponent } from './components/policy-service/policy-service.component';
import { PolicyLocationComponent } from './components/policy-location/policy-location.component';
import { PolicyRentComponent } from './components/policy-rent/policy-rent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    FooterbarComponent,
    TestComponent,
    PolicyPersonalInfoComponent,
    PolicyServiceComponent,
    PolicyLocationComponent,
    PolicyRentComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    NgFlashMessagesModule,
    AppRoutingModule,
    RouterModule.forRoot([
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'policy-personal-info',
      component: PolicyPersonalInfoComponent
    },
    {
      path: 'policy-service',
      component: PolicyServiceComponent
    },
    {
      path: 'policy-location',
      component: PolicyLocationComponent
    },
    {
      path: 'policy-rent',
      component: PolicyRentComponent
    }
  ])
],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent,]
})
export class AppModule { }
