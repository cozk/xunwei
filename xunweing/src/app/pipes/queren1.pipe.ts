import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'queren1'
})
export class Queren1Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value || args) {

      var new_fs = value.filter(function (fs, index) {
        if (fs.guanfang == 1)
          return fs;
      });
    }
    return new_fs;
  }

}
