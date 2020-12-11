import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'peli-nakyma', pathMatch: 'full' },
  { path: 'peli-nakyma', loadChildren: './peli-nakyma/peli-nakyma.module#PeliNakymaPageModule' },
  { path: 'peli-pop', loadChildren: './peli-pop/peli-pop.module#PeliPopPageModule' },
  { path: 'game', loadChildren: './game/game.module#GamePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
