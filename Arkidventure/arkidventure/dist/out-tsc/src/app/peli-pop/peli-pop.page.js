import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OverlordService } from '../overlord.service';
import { ModalController } from '@ionic/angular';
var PeliPopPage = /** @class */ (function () {
    function PeliPopPage(overlord, modalCtrl) {
        var _this = this;
        this.overlord = overlord;
        this.modalCtrl = modalCtrl;
        this.sulje = function () {
            _this.modalCtrl.dismiss();
        };
        // tee pelinäkymä
        this.play = function () {
            _this.modalCtrl.dismiss();
        };
    }
    PeliPopPage.prototype.ngOnInit = function () {
    };
    PeliPopPage = tslib_1.__decorate([
        Component({
            selector: 'app-peli-pop',
            templateUrl: './peli-pop.page.html',
            styleUrls: ['./peli-pop.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [OverlordService, ModalController])
    ], PeliPopPage);
    return PeliPopPage;
}());
export { PeliPopPage };
//# sourceMappingURL=peli-pop.page.js.map