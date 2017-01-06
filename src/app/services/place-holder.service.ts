import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PlaceHolderService {

  constructor(private http:Http) { 
    console.log('Servie iniciated..');
  }

  getPost(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts')
   .map(res => res.json()); 
  }
//='https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US'
//https://jsonplaceholder.typicode.com/posts?_page=7&_limit=6

  getCardsScroll(_start:number,_end:number){
     return this.http.get('https://jsonplaceholder.typicode.com/posts?_start='+_start+'&_end='+_end+'')
   .map(res => res.json());
  }

  getCards(){
       return this.http.get('https://jsonplaceholder.typicode.com/posts')
   .map(res => res.json());
  }

  getCardsPagination(){
      return this.http.get('https://jsonplaceholder.typicode.com/photos')
        .map(res => res.json());
  }
}