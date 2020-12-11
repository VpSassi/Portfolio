import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var OverlordService = /** @class */ (function () {
    function OverlordService() {
        // muista salasanojen salaukset
        this.kayttajat = [
            {
                "id": 1,
                "name": "besserwisser",
                "password": "salasana123" // salasana123
            },
            {
                "id": 2,
                "name": "anomuumi1",
                "password": "läpälää" // läpälää
            }
        ];
        this.currentUser = {
            "id": 1,
            "username": "Muumi",
            "password": "salasana",
            "kuvaus": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id aliquet ligula. Donec justo eros, posuere id efficitur in, aliquam at ipsum. Nulla facilisi. Phasellus maximus vehicula elit a posuere.",
            "xp": 3800,
            "raha": 153000
        };
        this.logo = 'assets/kuvat/testilogo.png';
        this.profilePic = "assets/kuvat/" + this.currentUser.id + ".png";
        this.map = "assets/kuvat/kartta.png";
        this.mainos = "assets/kuvat/mainos.png";
        this.peliMapImg = "assets/kuvat/placeholdermap.png";
    }
    OverlordService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], OverlordService);
    return OverlordService;
}());
export { OverlordService };
//# sourceMappingURL=overlord.service.js.map