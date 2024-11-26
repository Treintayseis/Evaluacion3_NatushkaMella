import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  titulo: string="";
  descripcion: string="";
  lugar: string="";
  fecha: string="";
  hora: string="";

  constructor( private alertcontroller:AlertController,
               private router: Router,
  ) {}
  async modificarEvento(){
    const alert = await this.alertcontroller.create({
      header: 'El evento ha sido modificado exitosamente',
      mode:'ios',
      buttons: [
        {
          text: 'Volver',
          role: 'confirm',
          handler: () => {
             this.router.navigate(['/tab1']);
          },
        },
      ],
    });

    await alert.present();
  }

}
