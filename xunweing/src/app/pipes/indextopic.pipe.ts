import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'indextopic'
})
export class IndextopicPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var new_hottopic = value.filter(function (hottopic, index) {
      if (hottopic.guanfang == 3)
        return hottopic;
    });
    return new_hottopic;
  }

}
