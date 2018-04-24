
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class ForumplService {
  url: string = 'http://127.0.0.1:3000/forumpl';
  constructor(
    private http: HttpClient
  ) {}

  getAllPinglun(callback){
    this.http.get(this.url).subscribe(function (result) {
      callback(result);
      console.log(result);
    })
  }

  getDetailPinglun(title,callback){
    this.getAllPinglun(function (_forumbody) {
      console.log(_forumbody)
      let ho=_forumbody.filter(function (item,index) {
        if(item.pingluntitle==title){
          return item;
        }
      });
      callback(ho);
    })
  }

}
