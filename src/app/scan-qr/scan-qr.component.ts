import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {
  NgxScannerQrcodeModule,
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  NgxScannerQrcodeService,
  NgxScannerQrcodeComponent,
  ScannerQRCodeDevice,
  ScannerQRCodeSelectedFiles,
} from 'ngx-scanner-qrcode';
import { SafePipe } from '../../app/safe.pipe';
import { ModalController } from '@ionic/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-scan-qr',
  templateUrl: 'scan-qr.component.html',
  styleUrls: ['scan-qr.component.scss'],
})
export class ScanQRPage implements AfterViewInit {
  @ViewChild(NgxScannerQrcodeComponent) scanner!: NgxScannerQrcodeComponent;

  public e: ScannerQRCodeResult[] = [];
  public config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth,
      },
    },
    isBeep: false,
  };

  public QRValue: string = '';

  constructor(private modalCtrl: ModalController) {
    console.log('config', this.config);
  }

  ngAfterViewInit(): void {
    this.scanner.isReady.pipe(untilDestroyed(this)).subscribe((res) => {
      console.log('scanner isReady', res);
      this.handle(this.scanner, 'start');
    });

    this.scanner.devices.pipe(untilDestroyed(this)).subscribe((res) => {
      console.log('devices', res);
    });
  }

  public close(): void {
    this.handle(this.scanner, 'stop');
    this.modalCtrl.dismiss({
      result: this.QRValue,
    });
  }

  public onEvent(
    e: ScannerQRCodeResult[],
    action?: NgxScannerQrcodeComponent
  ): void {
    // e && action && action.pause();
    console.log(e[0].value);
    this.QRValue = e[0].value;
    if (this.QRValue && action) this.handle(this.scanner, 'stop');
  }

  public handle(
    action: NgxScannerQrcodeComponent,
    fn: keyof NgxScannerQrcodeComponent
  ): void {
    console.log('action 1', action);
    console.log('fn', fn);
    const playDeviceFacingBack = (devices: ScannerQRCodeDevice[]) => {
      console.log(devices);
      // front camera or back camera check here!
      const device = devices.find((f) =>
        /back|rear|environment/gi.test(f.label)
      ); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    };

    if (fn === 'start') {
      action[fn](playDeviceFacingBack)
        .pipe(untilDestroyed(this))
        .subscribe({
          next: (r: any) => console.log(fn, r),
          error: (e: any) => console.log(fn, e),
          complete: () => console.log(fn, 'complete'),
        });
    } else {
      action[fn]()
        .pipe(untilDestroyed(this))
        .subscribe({
          next: (r: any) => console.log(fn, r),
          error: (e: any) => console.log(fn, e),
          complete: () => console.log(fn, 'complete'),
        });
    }
  }
}
