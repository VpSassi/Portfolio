import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Map, tileLayer } from 'leaflet';
var GamePage = /** @class */ (function () {
    function GamePage() {
        var _this = this;
        this.kartta = Map;
        this.map = Map;
        this.lat = 61.68073;
        this.lon = 27.25636;
        this.lataaKartta = function () {
            _this.kartta = new Map('kartta').setView([_this.lat, _this.lon], 16);
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy OpenStreetMap.com'
            }).addTo(_this.kartta);
        };
    }
    GamePage.prototype.ngOnInit = function () {
    };
    GamePage.prototype.ionViewDidEnter = function () {
        this.lataaKartta();
    };
    GamePage = tslib_1.__decorate([
        Component({
            selector: 'app-game',
            templateUrl: './game.page.html',
            styleUrls: ['./game.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GamePage);
    return GamePage;
}());
export { GamePage };
//# sourceMappingURL=game.page.js.map