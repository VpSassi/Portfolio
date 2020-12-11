import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'alku', pathMatch: 'full' },
    { path: 'alku', loadChildren: './alku/home.module#HomePageModule' },
    { path: 'peli-nakyma', loadChildren: './peli-nakyma/peli-nakyma.module#PeliNakymaPageModule' },
    { path: 'peli-pop', loadChildren: './peli-pop/peli-pop.module#PeliPopPageModule' },
    { path: 'profiili', loadChildren: './profiili/profiili.module#ProfiiliPageModule' },
    { path: 'game', loadChildren: './game/game.module#GamePageModule' },
    { path: 'asetukset-pop', loadChildren: './asetukset-pop/asetukset-pop.module#AsetuksetPopPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map