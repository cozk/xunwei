import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams,HttpRequest} from '@angular/common/http';
import { LocalStorage } from './../services/localStorage.service';
@Injectable()
export class UsersService {

  url:string='http://127.0.0.1:3000/users';
  constructor(
    private http:HttpClient,
    private ls:LocalStorage,
  ) {}

  login(user,callback){
    this.http.post(this.url+'/login',user).subscribe(function (result) {//subscribe（）异步处理，如果需要用返回的数据，最好把方法写在里面。
        callback(result);
      },
      function (error) {
        console.log(error.message);
      })
  }
  register(user,callback){
    this.http.post(this.url+'/regist',user).subscribe(function (result) {//subscribe（）异步处理，如果需要用返回的数据，最好把方法写在里面。
        callback(result);
      },
      function (error) {
        console.log(error.message);
      })
  }
  edit(user,callback){
    let headers = new HttpHeaders({ "token": this.ls.get('token')});
    headers.append("Accept", "application/json");
    this.http.post(this.url+'/edit',user,{headers:headers}).subscribe(function (result) {//subscribe（）异步处理，如果需要用返回的数据，最好把方法写在里面。
        callback(result);
      },
      function (error) {
        console.log(error.message);
      })
  }
  editpass(user,callback){
    let headers = new HttpHeaders({ "token": this.ls.get('token')});
    headers.append("Accept", "application/json");
    this.http.post(this.url+'/editpass',user,{headers:headers}).subscribe(function (result) {//subscribe（）异步处理，如果需要用返回的数据，最好把方法写在里面。
        callback(result);
      },
      function (error) {
        console.log(error.message);
      })
  }
//  发送验证码
  sendMessage(user, callback) {
    this.http.post(this.url + '/sms', user).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      });
  }
}
