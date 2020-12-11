import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OverlordService } from '../overlord.service';
import { ModalController } from '@ionic/angular';
import { PeliPopPage } from '../peli-pop/peli-pop.page';
var PeliNakymaPage = /** @class */ (function () {
    function PeliNakymaPage(overlord, modalCtrl) {
        var _this = this;
        this.overlord = overlord;
        this.modalCtrl = modalCtrl;
        this.avaaExpedition = function (id) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: PeliPopPage,
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        }); };
    }
    PeliNakymaPage.prototype.ngOnInit = function () {
    };
    PeliNakymaPage = tslib_1.__decorate([
        Component({
            selector: 'app-peli-nakyma',
            templateUrl: './peli-nakyma.page.html',
            styleUrls: ['./peli-nakyma.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [OverlordService, ModalController])
    ], PeliNakymaPage);
    return PeliNakymaPage;
}());
export { PeliNakymaPage };
//# sourceMappingURL=peli-nakyma.page.js.map