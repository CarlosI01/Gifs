import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { SearchResponse, gif } from '../interface/search';
@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apikey = "6LOVwG5zYaLK6Gv8d9G9YNOmX6mCy6V9";
  private ghipiUrl = 'https://api.giphy.com/v1/gifs/';
  constructor(private http: HttpClient) {
    this.LoadLocalStorage();
   }

  public gifs: gif[] = [];

  private _tagHistory: string[] = [];

  get tagHistory() {
    return [...this._tagHistory];
  }

  private validaciones(tag: string) {
    tag = tag.toLocaleLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((response) => 
        response !== tag
      );
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.SaveLocalStorage();
  }

  private SaveLocalStorage(){
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }
  private LoadLocalStorage(){
    if(!localStorage.getItem('history')) return;
    this._tagHistory= JSON.parse(localStorage.getItem('history')!);
    if(this._tagHistory.length ===0) return;

    this.searchTag(this._tagHistory[0]);
  }


  searchTag(tag: string) {
    if (tag.length === 0) return;
    this.validaciones(tag);
    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', 12)
      .set('q', tag);
    this.http.get<SearchResponse>(`${this.ghipiUrl}search`, { params }).subscribe((response) => {
      this.gifs = response.data;
    });
  }
}
