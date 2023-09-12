import { Component, ViewChild, ElementRef} from '@angular/core';
import { GifsService } from '../../services/gifs.service';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('Tagsearch')
  public inputTag!: ElementRef<HTMLInputElement>;

  constructor(private tagService:GifsService){}

  searChTag(){
    const newTag=this.inputTag.nativeElement.value;
    this.tagService.searchTag(newTag);
    this.inputTag.nativeElement.value='';
  }

}
