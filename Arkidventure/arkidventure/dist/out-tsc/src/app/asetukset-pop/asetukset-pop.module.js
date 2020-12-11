import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AsetuksetPopPage } from './asetukset-pop.page';
var routes = [
    {
        path: '',
        component: AsetuksetPopPage
    }
];
var AsetuksetPopPageModule = /** @class */ (function () {
    function AsetuksetPopPageModule() {
    }
    AsetuksetPopPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AsetuksetPopPage]
        })
    ], AsetuksetPopPageModule);
    return AsetuksetPopPageModule;
}());
export { AsetuksetPopPageModule };
//# sourceMappingURL=asetukset-pop.module.js.map