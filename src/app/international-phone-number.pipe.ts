import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intPhoneNumber'
})
export class InternationalPhoneNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let result = "";
    let parsedString = value.toString();
    for(let i = 0; i < parsedString.length; i++) {
      result += parsedString[i];
      if((i+1) % 2 == 0) {
        result += " ";
      } 
    }
    return '+33 ' + result;
  }
}
