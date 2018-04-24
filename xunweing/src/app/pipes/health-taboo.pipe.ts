import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'healthTaboo'
})
export class HealthTabooPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value || args) {
      var new_healthtaboo = value.filter(function (health, index) {
        if (health.healthtype == '2')
          return health;
      });
    }
    return new_healthtaboo;
  }

}
