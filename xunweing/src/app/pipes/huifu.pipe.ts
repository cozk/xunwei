import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'huifu'
})
export class HuifuPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var new_fs=value.filter(function (fs,index) {
      if(fs.hfid==1)
        return fs;
    })
    return new_fs;
  }

}
