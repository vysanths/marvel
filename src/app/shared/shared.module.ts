import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavPage } from './sidenav/sidenav.page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    SidenavPage
  ]
})
export class SharedModule { }
