import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PeliPopPage } from './peli-pop.page';
var routes = [
    {
        path: '',
        component: PeliPopPage
    }
];
var PeliPopPageModule = /** @class */ (function () {
    function PeliPopPageModule() {
    }
    PeliPopPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PeliPopPage]
        })
    ], PeliPopPageModule);
    return PeliPopPageModule;
}());
export { PeliPopPageModule };
//# sourceMappingURL=peli-pop.module.js.map