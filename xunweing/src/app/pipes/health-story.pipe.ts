import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'healthStory'
})
export class HealthStoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value || args) {
      var new_healthstory = value.filter(function (health, index) {
        if (health.healthtype == 3)
          return health;
      });
    }
    return new_healthstory;
  }

}
