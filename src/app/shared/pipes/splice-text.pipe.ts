import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string): string {
    const wordLimit = 10; 

    if (!value || value.split(' ').length <= wordLimit) {
      return value; // Return the original value if it's within the limit
    } else {
      const words = value.split(' ');
      const truncated = words.slice(0, wordLimit).join(' ');
      return truncated + '...'; // Return truncated text with ellipsis
    }
  }
}