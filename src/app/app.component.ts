import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PaymentSuccessPage } from '../pages/payment-success/payment-success';
import { SearchBusPage } from '../pages/search-bus/search-bus';
import { PassengerDetailsPage } from '../pages/passenger-details/passenger-details';
import { BusFilterPage } from '../pages/bus-filter/bus-filter';
import { BusListPage } from '../pages/bus-list/bus-list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { FilterAmentitiesPage } from '../pages/filter-amentities/filter-amentities';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Payment Success', component: PaymentSuccessPage },
      { title: 'Search Bus', component: SearchBusPage },
      { title: 'Passenger Details', component: PassengerDetailsPage },
      { title: 'Bus Filter', component: BusFilterPage },
      { title: 'Bus List', component: BusListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Signup', component: SignupPage },
      { title: 'Filter Amentities', component: FilterAmentitiesPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
