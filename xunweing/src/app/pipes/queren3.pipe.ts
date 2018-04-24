import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'queren3'
})
export class Queren3Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value || args) {
      var new_fs = value.filter(function (fs, index) {
        if (fs.guanfang == 3)
          return fs;
      });
    }
    return new_fs;
  }

}
