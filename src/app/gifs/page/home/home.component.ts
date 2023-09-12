import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { gif } from '../../interface/search';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private gifService:GifsService){}

  get gifs(): gif[]{
    return this.gifService.gifs;
  }
}
