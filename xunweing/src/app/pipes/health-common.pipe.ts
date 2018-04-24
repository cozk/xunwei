import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'healthCommon'
})
export class HealthCommonPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value || args) {
      var new_healthcommen = value.filter(function (health, index) {
        if (health.healthtype == '1')
          return health;
      });
    }
    return new_healthcommen;
  }
}
