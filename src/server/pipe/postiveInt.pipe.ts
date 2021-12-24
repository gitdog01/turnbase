import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      throw new Error('Not a number');
    }
    if (parsedValue < 0) {
      throw new Error('Not a positive number');
    }
    return parsedValue;
  }
}
