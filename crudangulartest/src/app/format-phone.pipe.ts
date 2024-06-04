import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatPhone',
  standalone: true
})
export class FormatPhonePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 10) {
      return value.slice(0, 3) + "..."
    }
    return value;
  }
}
