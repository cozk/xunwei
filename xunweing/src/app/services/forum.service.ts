
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class ForumService {
  url:string='http://127.0.0.1:3000/forum';
  constructor(
    private http:HttpClient
  ) {}

  getAllPost(callback){
    this.http.get(this.url+'/all').subscribe(function (result) {
      callback(result);
    })
  }
  getAllCai(callback){
    this.http.get(this.url+'/allcai').subscribe(function (result) {
      callback(result);
    })
  }

  getDetail(title,callback){
    this.getAllPost(function (_forumbody) {
      let ho=_forumbody.filter(function (item,index) {
        if(item.title==title){
          return item;
        }
      });
      callback(ho);

    })
  }
  getDetailCai(title,callback){
    this.getAllCai(function (_forumbody) {
      let ho=_forumbody.filter(function (item,index) {
        if(item.biaoti==title){
          return item;
        }
      });
      callback(ho);

    })
  }
  addat(clcontent,callback){
    this.http.post(this.url+'/addat',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  addhf(clcontent,callback){
    this.http.post(this.url+'/addhf',clcontent).subscribe(
      function (result) {
        callback(result);
      })
  }

  gethf(clcontent,callback){
    this.http.post(this.url+'/gethf',clcontent).subscribe(
      function (result) {
        callback(result);
      })
  }

  deleteat(clcontent,callback){
    this.http.post(this.url+'/deleteat',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  addguanzhu(clcontent,callback){
    this.http.post(this.url+'/addguanzhu',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  addliulan(clcontent,callback){
    this.http.post(this.url+'/addliulan',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  addcailiulan(clcontent,callback){
    this.http.post(this.url+'/addcailiulan',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  deleteguanzhu(clcontent,callback){
    this.http.post(this.url+'/deleteguanzhu',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  addfensi(clcontent,callback){
    this.http.post(this.url+'/addfensi',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  deletefensi(clcontent,callback){
    this.http.post(this.url+'/deletefensi',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  searchgz(clcontent,callback){
    this.http.post(this.url+'/searchgz',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

}
