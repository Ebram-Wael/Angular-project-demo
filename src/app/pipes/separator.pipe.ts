import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separator',
  standalone: true
})
export class SeparatorPipe implements PipeTransform {

  transform(value: string, sep: string = '-') {
    let chunks: string[] = [];
    for (let i = 0; i < value.length; i += 3) {
      chunks.push(value.substring(i, i + 3));
    }
    return chunks.join(sep);
  }
}
