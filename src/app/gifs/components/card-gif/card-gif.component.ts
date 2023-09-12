import { Component, Input, OnInit } from '@angular/core';
import { SearchResponse, gif } from '../../interface/search';

@Component({
  selector: 'app-card-gif',
  templateUrl: './card-gif.component.html',
  styleUrls: ['./card-gif.component.css']
})
export class CardGifComponent implements OnInit {
 
  @Input()
  public cardList: gif[]=[];
  ngOnInit(): void {
    if(!this.cardList) throw new Error('La propiedad es requerida');
  }

}
