import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value: string): string {
    return "Nazwa to " + value;
  }

}
