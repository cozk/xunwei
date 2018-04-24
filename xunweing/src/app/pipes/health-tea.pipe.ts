import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'healthTea'
})
export class HealthTeaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value || args) {
      var new_healthtea = value.filter(function (health, index) {
        if (health.healthtype == 5)
          return health;
      });
    }
    return new_healthtea;
  }

}
