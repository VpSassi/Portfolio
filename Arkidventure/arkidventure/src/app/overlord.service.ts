import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlordService {

  currentPeli : any = {
                        "id" : 0,
                        "raha" : 0,
                        "xp" : 0,
                        "nimi" : ""
  }

  currentUser : any = {
                        "id" : 1,
                        "username" : "Muumi",
                        "password" : "salasana",
                        "xp" : 3800,
                        "raha" : 153000
}

  logo : string = 'assets/kuvat/testilogo.png';
  profilePic : string = `assets/kuvat/${this.currentUser.id}.png`;
  peliMapImg : string = "assets/kuvat/placeholdermap.png";

  constructor() {}
}
