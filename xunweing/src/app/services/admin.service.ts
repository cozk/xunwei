import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AdminService {

  urlcook: string = 'http://127.0.0.1:3000/cookbook';
  urlusercook: string = 'http://127.0.0.1:3000/usercookbook';
  urlpost: string = 'http://127.0.0.1:3000/post';

  constructor(private http: HttpClient) {
  }

  getAllCookbook(callback) {
    this.http.get(this.urlcook+'/').subscribe(function (result) {
      callback(result);
    });
  }

  getAllUserCookbook(callback) {
    this.http.get(this.urlusercook).subscribe(function (result) {
      callback(result);
    });
  }

  getAllPost(callback) {
    this.http.get(this.urlpost).subscribe(function (result) {
      callback(result);
    });
  }

  deleteMenu(menuid, callback) {
    console.log('service' + menuid);
    // const headers = new HttpHeaders({id: menuid});
    // console.log(headers);
    this.http.post(this.urlcook + '/delmenu', {'ckid': menuid}).subscribe(function (result) {
        callback(result);
        // console.log(result);
      },
      function (error) {
        console.log(error.message);
      });
  }

  deleteUserMenu(menuid, callback) {
    console.log('service' + menuid);
    // const headers = new HttpHeaders({id: menuid});
    // console.log(headers);
    this.http.post(this.urlusercook + '/delusermenu', {'cookid': menuid}).subscribe(function (result) {
        callback(result);
        // console.log(result);
      },
      function (error) {
        console.log(error.message);
      });
  }

  deletePost(posttitle, callback) {
    console.log('service' + posttitle);
    // const headers = new HttpHeaders({id: menuid});
    // console.log(headers);
    this.http.post(this.urlpost + '/delpost', {'title': posttitle}).subscribe(function (result) {
        callback(result);
        // console.log(result);
      },
      function (error) {
        console.log(error.message);
      });
  }
}
