import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderbyPipe implements PipeTransform {

  transform(cooks: any, args?: any): any {
    if(args==2 && cooks){
      let new_cooks = cooks || [];
      new_cooks.sort(function(a,b){
        return Date.parse(b.cktime) - Date.parse(a.cktime);//时间正序
      });
      return new_cooks;
    }else if(args==1 && cooks){
      let new_cooks = cooks || [];
      new_cooks.sort(function(a,b){
        return Date.parse(b.ckrenqi) - Date.parse(a.ckrenqi);//时间正序
      });
      return new_cooks;
    }


  }

}
