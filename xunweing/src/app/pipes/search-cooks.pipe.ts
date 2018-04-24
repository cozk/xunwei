import { Pipe, PipeTransform } from '@angular/core';
import { GlobalPropertyService } from "../services/global-property.service";

@Pipe({
  name: 'searchCooks'
})
export class SearchCooksPipe implements PipeTransform {
  constructor( private glo:GlobalPropertyService
  ) { }
  transform(cooks: any, args?: any): any {
    if(args && cooks) {
      var new_cooks = cooks.filter(function (cook,index) {
        // if(cook.cktypedetail.indexOf(args) != -1 ||cook.ckname.indexOf(args) != -1|| cook.cktype.indexOf(args)!=-1){
        //   return cook;
        // }
        if(cook.ckname.indexOf(args) != -1){
          return cook;
        }

      });
      // this.glo.cooklength = new_cooks.length;
      return new_cooks;
    }
    else{
        // this.glo.cooklength = _cooks.length;
      return cooks;
    }
  }

}
