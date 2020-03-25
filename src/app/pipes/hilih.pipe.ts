import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hilih'
})
export class HilihPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.replace(/[aueo]/g, 'i');
  }

}
