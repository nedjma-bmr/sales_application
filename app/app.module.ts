import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientModalPage } from './pages/client-modal/client-modal.page';
import { CommandeModalPage } from './pages/commande-modal/commande-modal/commande-modal.page';
import { IonicSelectableModule } from 'ionic-selectable';



@NgModule({
  declarations: [AppComponent , ClientModalPage, CommandeModalPage],
  entryComponents: [ClientModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule, IonicSelectableModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
