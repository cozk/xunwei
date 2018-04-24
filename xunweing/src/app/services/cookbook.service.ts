
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class CookbookService {
  url:string = 'http://127.0.0.1:3000/cookbook';
  constructor(
    private http:HttpClient
  ) {}

  getAllCookbook(callback){
    this.http.get(this.url+'/').subscribe(function (result) {
      callback(result);
      console.log(result);
    })
  }

  getDetailCookbook(biaoti,callback){
    this.getAllCookbook(function (_forumbody) {
      let ho = _forumbody.filter(function (item, index) {
        if (item.ckname == biaoti) {
          return item;
        }
      });
      callback(ho);
    })
  }

  getIndexCookBook(callback) {
    this.getAllCookbook(function (_cookbookbody) {
      let cb = _cookbookbody.filter(function (item, index) {
        if (item.ckhot == '1') {
          return item;
        }
      });
      callback(cb);
    });
  }

  getDetailjia(biaoti,callback){
    this.getAllCookbook(function (_forumbody) {
      let ho=_forumbody.filter(function (item,index) {
        if(item.cktypedetail==biaoti){
          return item;
        }
      });
      callback(ho);

    })
  }

}
