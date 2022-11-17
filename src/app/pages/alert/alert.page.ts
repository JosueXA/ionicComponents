import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( private alertCtrl: AlertController ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertMulti() {
    const alertMulti = await this.alertCtrl.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Click en cancelar');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Click en OK');
          },
        },
      ],
    });

    await alertMulti.present();
  }

  async presentAlertPrompt() {
    const alertPromt = await this.alertCtrl.create({
      header: 'Please enter your info',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Click en cancelar');
          },
        },
        {
          text: 'OK',
          handler: ( data: any ) => {
            console.log(data);
          },
        },
      ],
      inputs: [
        {
          name: 'name1',
          placeholder: 'Name',
          type: 'text',
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alertPromt.present();
  }



}
