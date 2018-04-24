import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexcook'
})
export class IndexcookPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var new_hotmenu = value.filter(function (hotmenu,index) {
      if(hotmenu.hot == 1)
        return hotmenu;

    });
    return new_hotmenu;
  }

}
