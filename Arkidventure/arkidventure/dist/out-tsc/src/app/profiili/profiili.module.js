import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfiiliPage } from './profiili.page';
var routes = [
    {
        path: '',
        component: ProfiiliPage
    }
];
var ProfiiliPageModule = /** @class */ (function () {
    function ProfiiliPageModule() {
    }
    ProfiiliPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProfiiliPage]
        })
    ], ProfiiliPageModule);
    return ProfiiliPageModule;
}());
export { ProfiiliPageModule };
//# sourceMappingURL=profiili.module.js.map