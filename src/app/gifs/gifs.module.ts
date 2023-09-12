import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardGifComponent } from './components/card-gif/card-gif.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    SearchBoxComponent,
    CardListComponent,
    CardGifComponent,
  
  ],
  exports:[
  HomeComponent, SearchBoxComponent, CardListComponent, CardGifComponent
  ],
  imports: [
    CommonModule, SharedModule
  ]
})
export class GifsModule { }
