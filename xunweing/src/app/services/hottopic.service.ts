import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class HottopicService {
  url:string='http://127.0.0.1:3000/forum';
  constructor(
    private http:HttpClient
  ) {}

  getAllHottopic(callback){
    this.http.get(this.url).subscribe(function (result) {
      callback(result);
      console.log(result);
    });
  }
}
