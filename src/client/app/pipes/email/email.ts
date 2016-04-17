import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'email'
})
export class Email implements PipeTransform {
   transform(value: any, args?: any): any {
      console.log(value, args);
      return null;
   }
}
