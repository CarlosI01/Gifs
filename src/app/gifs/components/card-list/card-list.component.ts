import { Component, Input } from '@angular/core';
import { SearchResponse, gif } from '../../interface/search';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  constructor(private gigSerivices: GifsService){}
  
  @Input()
  public gifsList: gif[] = [];

  get gifs(): gif[]{
    return this.gigSerivices.gifs;
  }

}
