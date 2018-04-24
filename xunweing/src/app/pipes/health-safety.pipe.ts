import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'healthSafety'
})
export class HealthSafetyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value || args) {
      var new_healthsafety = value.filter(function (health, index) {
        if (health.healthtype == 4)
          return health;
      });
    }
    return new_healthsafety;
  }

}
