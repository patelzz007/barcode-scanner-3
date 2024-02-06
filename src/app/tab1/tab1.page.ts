import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  NgxScannerQrcodeService,
  NgxScannerQrcodeComponent,
  ScannerQRCodeSelectedFiles,
} from 'ngx-scanner-qrcode';
import { ScanQRPage } from '../scan-qr/scan-qr.component';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public QRValue: string = '';

  constructor(private modalCtrl: ModalController) {}

  public async scanQRCode() {
    console.log('Scanning QR code.');
    await this.modalCtrl.create({ component: ScanQRPage }).then((modal) => {
      console.log('Modal Controller :', modal);
      modal.present();
      modal.onDidDismiss().then((result) => {
        this.QRValue = result.data.result;
        console.log('result', result);
        console.log('result', this.QRValue);
      });
    });
  }
}
