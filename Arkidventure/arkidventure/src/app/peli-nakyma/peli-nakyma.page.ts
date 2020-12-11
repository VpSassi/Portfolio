import { Component, OnInit } from '@angular/core';
import { OverlordService } from '../overlord.service';
import { ModalController } from '@ionic/angular';
import { PeliPopPage } from '../peli-pop/peli-pop.page';

@Component({
  selector: 'app-peli-nakyma',
  templateUrl: './peli-nakyma.page.html',
  styleUrls: ['./peli-nakyma.page.scss'],
})
export class PeliNakymaPage implements OnInit {

  constructor(private overlord : OverlordService, private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  avaaExpedition = async (id, raha, xp, nimi) : Promise<any> => {
    
    this.overlord.currentPeli.id = id;
    this.overlord.currentPeli.raha = raha;
    this.overlord.currentPeli.xp = xp;
    this.overlord.currentPeli.nimi = nimi;

    const modal = await this.modalCtrl.create({
                                                component : PeliPopPage,
                                                componentProps : {}
    });

    modal.present();
  }
}
