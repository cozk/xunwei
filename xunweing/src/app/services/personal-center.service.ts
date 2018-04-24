import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class PersonalCenterService {

  url:string='http://127.0.0.1:3000/personal';
  constructor(
    private http:HttpClient
  ) {}

  work(user,callback){
    this.http.post(this.url+'/work',user).subscribe(function (result) {//subscribe（）异步处理，如果需要用返回的数据，最好把方法写在里面。
        callback(result);
      },
      function (error) {
        console.log(error.message);
      })
  }

  comm(user,callback){
    this.http.post(this.url+'/comm',user).subscribe(function (result) {//subscribe（）异步处理，如果需要用返回的数据，最好把方法写在里面。
        callback(result);
      },
      function (error) {
        console.log(error.message);
      })
  }
}
