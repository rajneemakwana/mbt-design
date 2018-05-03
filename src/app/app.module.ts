import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PaymentSuccessPage } from '../pages/payment-success/payment-success';
import { SearchBusPage } from '../pages/search-bus/search-bus';
import { PassengerDetailsPage } from '../pages/passenger-details/passenger-details';
import { BusFilterPage } from '../pages/bus-filter/bus-filter';
import { BusListPage } from '../pages/bus-list/bus-list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PaymentSuccessPage,
    SearchBusPage,
    PassengerDetailsPage,
    BusFilterPage,
    BusListPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PaymentSuccessPage,
    SearchBusPage,
    PassengerDetailsPage,
    BusFilterPage,
    BusListPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
