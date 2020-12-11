import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, icon, Marker } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { matkatJSON } from './matkatJSON';
import { OverlordService } from '../overlord.service';
import { Router } from '@angular/router';

const iconRetinaUrl = 'assets/kuvat/marker-icon-2x.png';
const iconUrl = 'assets/kuvat/marker-icon.png';
const shadowUrl = 'assets/kuvat/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;

const kohdeMarker = icon({
  iconRetinaUrl : 'assets/kuvat/kohde-2x.png',
  iconUrl : 'assets/kuvat/kohde.png',
  shadowUrl,
  iconSize : [25, 41],
  iconAnchor : [12, 41],
  popupAnchor : [1, -34],
  tooltipAnchor : [16, -28],
  shadowSize : [41, 41]
});

const loppuMarker = icon({
  iconRetinaUrl : 'assets/kuvat/loppu-2x.png',
  iconUrl : 'assets/kuvat/loppu.png',
  shadowUrl,
  iconSize : [25, 41],
  iconAnchor : [12, 41],
  popupAnchor : [1, -34],
  tooltipAnchor : [16, -28],
  shadowSize : [41, 41]
});

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  raha : number;
  xp : number;

  kartta : Map;

  mJson : any = matkatJSON;
  currentMatka = this.overlord.currentPeli.id;
  indeksi = 0;

  alku : any = {lat : 0, lon : 0};
  loppu : any = {lat : 0, lon : 0};

  currentMap : any =  [];

  piste : any;
  kohde : any;

  viimeinen : boolean = false;

  constructor(private geoLoc : Geolocation, private overlord : OverlordService, private router : Router) {}

  ngOnInit() {}

  ionViewDidEnter() { 
    this.lataaKartta();

    setInterval(() => { this.onkoPerilla() }, 2000);
  }

  lataaKartta = async () : Promise<any> => {

    await this.geoLoc.getCurrentPosition().then((resp) => {

      this.alku.lat = resp.coords.latitude;
      this.alku.lon = resp.coords.longitude;

      this.loppu.lat = resp.coords.latitude;
      this.loppu.lon = resp.coords.longitude;

    }).catch((error) => {

      console.log('Sijaintia ei löydetty: ', error);

      this.alku.lat = 61.680050099999995;
      this.alku.lon = 27.2535754;

      this.loppu.lat = 61.680050099999995;
      this.loppu.lon = 27.2535754;
    });

    await this.currentMap.push(this.mJson[this.currentMatka]);

    console.log("Nykymatkan pituus: ", this.currentMap[0].length);

    console.log("Oma sijainti = ","lat: ", this.alku.lat, " lon: ", this.alku.lon);

    this.kartta = new Map('mappi').setView([this.alku.lat, this.alku.lon], 16);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy OpenStreetMap.com',
    }).addTo(this.kartta);

    this.piste = new Marker([this.alku.lat, this.alku.lon]);
    this.kartta.addLayer(this.piste);

    this.kohde = new Marker([this.currentMap[0][this.indeksi].lat, this.currentMap[0][this.indeksi].lon], {icon: kohdeMarker});
    this.kartta.addLayer(this.kohde);

    this.indeksi++;

    console.log("indeksi: ", this.indeksi);
  }

  ionViewWillLeave() {
    this.kartta.remove();
  }

  onkoPerilla = async () : Promise<any> => {

    await this.geoLoc.getCurrentPosition().then((resp) => {

      if (resp.coords.latitude == this.kohde._latlng.lat && resp.coords.longitude == this.kohde._latlng.lng){

      if (!this.viimeinen){

          this.kartta.removeLayer(this.piste);
          this.kartta.removeLayer(this.kohde);

          this.piste = new Marker([resp.coords.latitude, resp.coords.longitude]);
          this.kartta.addLayer(this.piste);

          if(this.indeksi +1 != this.currentMap[0].length){

            this.kohde = new Marker([this.currentMap[this.currentMatka][this.indeksi].lat, this.currentMap[this.currentMatka][this.indeksi].lon], {icon: kohdeMarker});
            this.kartta.addLayer(this.kohde);

            this.indeksi++;
            
          } else {

            this.kohde = new Marker([this.loppu.lat, this.loppu.lon], {icon : loppuMarker});
            this.kartta.addLayer(this.kohde);

            this.viimeinen = true;
          }
          
        } else {

          var apuRaha = this.overlord.currentUser.raha + this.overlord.currentPeli.raha;
          var apuXp = this.overlord.currentUser.xp + this.overlord.currentPeli.xp;

          apuRaha.push(this.overlord.currentUser.raha);
          apuXp.push(this.overlord.currentUser.xp);

          this.router.navigateByUrl('/peli-nakyma');
        }
      } else {

        this.kartta.removeLayer(this.piste);

        this.piste = new Marker([resp.coords.latitude, resp.coords.longitude]);
        this.kartta.addLayer(this.piste);
      }
    }).catch((error) => {
      console.log('Sijaintia ei löydetty: ', error);
    });
  }

}