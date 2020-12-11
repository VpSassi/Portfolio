import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OverlordService } from '../overlord.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AsetuksetPopPage } from '../asetukset-pop/asetukset-pop.page';
var ProfiiliPage = /** @class */ (function () {
    function ProfiiliPage(overlord, router, modalCtrl) {
        var _this = this;
        this.overlord = overlord;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.logout = function () {
            _this.overlord.currentUser.username = "";
            _this.overlord.currentUser.password = "";
            _this.router.navigateByUrl('/home');
        };
        this.asetukset = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: AsetuksetPopPage,
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        }); };
        this.laskeLevel = function () {
            var apu = Math.floor(_this.overlord.currentUser.xp / 1000);
            return apu + 1;
        };
    }
    ProfiiliPage.prototype.ngOnInit = function () {
    };
    ProfiiliPage = tslib_1.__decorate([
        Component({
            selector: 'app-profiili',
            templateUrl: './profiili.page.html',
            styleUrls: ['./profiili.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [OverlordService, Router, ModalController])
    ], ProfiiliPage);
    return ProfiiliPage;
}());
export { ProfiiliPage };
//# sourceMappingURL=profiili.page.js.map