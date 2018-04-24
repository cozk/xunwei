import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HealthService {
  url: string = 'http://127.0.0.1:3000/health';

  constructor(private http: HttpClient) {
  }

  getAllHealth(callback) {
    this.http.get(this.url).subscribe(function (result) {
      callback(result);
    });
  }

  getDetailHealth(title, callback) {
    this.getAllHealth(function (_healthbody) {
      let ho = _healthbody.filter(function (item, index) {
        if (item.healthtitle == title) {
          return item;
        }
      });
      callback(ho);
    });
  }
  getIndexHealth(callback) {
    this.getAllHealth(function (_healthbody) {
      let ho = _healthbody.filter(function (item, index) {
        if (item.index == '1') {
          return item;
        }
      });
      callback(ho);
    });
  }
}
