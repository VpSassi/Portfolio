import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeliNakymaPage } from './peli-nakyma.page';

const routes: Routes = [
  {
    path: '',
    component: PeliNakymaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeliNakymaPage]
})
export class PeliNakymaPageModule {}
