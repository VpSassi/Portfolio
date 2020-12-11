import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GamePage } from './game.page';
var routes = [
    {
        path: '',
        component: GamePage
    }
];
var GamePageModule = /** @class */ (function () {
    function GamePageModule() {
    }
    GamePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [GamePage]
        })
    ], GamePageModule);
    return GamePageModule;
}());
export { GamePageModule };
//# sourceMappingURL=game.module.js.map