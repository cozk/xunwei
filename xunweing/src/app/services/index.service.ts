import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class IndexService {
  url:string='http://127.0.0.1:3000/cookbook';
  constructor(
    private http:HttpClient
  ) {}

  getAllCookbook(callback){
    this.http.get(this.url).subscribe(function (result) {
      callback(result);
      console.log(result);
    });
  }
}
