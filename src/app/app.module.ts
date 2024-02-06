import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanQRPage } from './scan-qr/scan-qr.component';

// Links as reference for "ngx-scanner-qrcode"
// Link 1 : https://github.com/id1945/ngx-scanner-qrcode-single
// Link 2 : https://www.npmjs.com/package/ngx-scanner-qrcode
// Link 3 : https://stackblitz.com/edit/angular-ngx-scanner-qrcode?file=src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fapp.component.html,src%2Findex.html
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

@NgModule({
  declarations: [AppComponent, ScanQRPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxScannerQrcodeModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
