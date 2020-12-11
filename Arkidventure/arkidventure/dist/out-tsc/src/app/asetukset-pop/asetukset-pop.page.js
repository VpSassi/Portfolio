import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OverlordService } from '../overlord.service';
var AsetuksetPopPage = /** @class */ (function () {
    function AsetuksetPopPage(modalCtrl, overlord) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.overlord = overlord;
        this.kuvaus = this.overlord.currentUser.kuvaus;
        this.sulje = function () {
            _this.modalCtrl.dismiss();
        };
        this.uusiKuvaus = function () {
            _this.overlord.currentUser.kuvaus = _this.kuvaus;
        };
        this.tyhjenna = function () {
            _this.kuvaus = "";
        };
    }
    AsetuksetPopPage.prototype.ngOnInit = function () {
    };
    AsetuksetPopPage = tslib_1.__decorate([
        Component({
            selector: 'app-asetukset-pop',
            templateUrl: './asetukset-pop.page.html',
            styleUrls: ['./asetukset-pop.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, OverlordService])
    ], AsetuksetPopPage);
    return AsetuksetPopPage;
}());
export { AsetuksetPopPage };
//# sourceMappingURL=asetukset-pop.page.js.map