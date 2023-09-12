import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LaziImageComponent } from './components/lazi-image/lazi-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LaziImageComponent, LaziImageComponent
  ],
  exports: [
    SidebarComponent, LaziImageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
