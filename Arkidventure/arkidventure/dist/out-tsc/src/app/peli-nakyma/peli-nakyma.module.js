import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PeliNakymaPage } from './peli-nakyma.page';
var routes = [
    {
        path: '',
        component: PeliNakymaPage
    }
];
var PeliNakymaPageModule = /** @class */ (function () {
    function PeliNakymaPageModule() {
    }
    PeliNakymaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PeliNakymaPage]
        })
    ], PeliNakymaPageModule);
    return PeliNakymaPageModule;
}());
export { PeliNakymaPageModule };
//# sourceMappingURL=peli-nakyma.module.js.map