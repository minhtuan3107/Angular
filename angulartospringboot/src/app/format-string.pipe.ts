import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatString',
  standalone: true
})
export class FormatStringPipe implements PipeTransform {
  transform(value: string) {
   if (value.length > 30){
     return value.slice(0, 27) + "..."
   }
    return value;
  }

}
