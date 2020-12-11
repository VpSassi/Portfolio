import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { OverlordService } from '../overlord.service';

@Component({
  selector: 'app-peli-pop',
  templateUrl: './peli-pop.page.html',
  styleUrls: ['./peli-pop.page.scss'],
})
export class PeliPopPage implements OnInit {

  constructor(private overlord : OverlordService, private modalCtrl : ModalController, private router : Router) { }

  ngOnInit() {
  }

  sulje = () => {
    this.modalCtrl.dismiss();
  }

  play = () => {

    this.modalCtrl.dismiss();

    this.router.navigateByUrl('/game');
  }
}
