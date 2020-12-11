import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OverlordService } from '../overlord.service';
import { Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(overlord, router) {
        var _this = this;
        this.overlord = overlord;
        this.router = router;
        this.username = "";
        this.password = "";
        this.kirjaudu = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                // lisää käyttäjän tarkistus
                this.overlord.currentUser.username = this.username;
                this.overlord.currentUser.password = this.password;
                this.router.navigateByUrl('/peli-nakyma'); // sai taas kaivella
                return [2 /*return*/];
            });
        }); };
    }
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [OverlordService, Router])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map