/**
 * Created by 你们的爸爸 on 2017/9/26.
 */
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class AddplService {
  url:string='http://127.0.0.1:3000/addpl';
  constructor(
    private http:HttpClient
  ) {}

addpl(plcontent,callback){
    this.http.post(this.url+'/add',plcontent).subscribe(
      function (result) {
      callback(result);
      console.log(result)
    })
}


}
