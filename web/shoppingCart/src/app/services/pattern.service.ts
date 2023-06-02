import { Injectable } from '@angular/core';
import { REGEX_VALIDATE } from '../constants/const';

@Injectable({
  providedIn: 'root',
})
export class PatternService {
  constructor() {}
  inputNumbersOnly(event: any, numbers: any): boolean {
    if (this.getValidateNotNumber(event, numbers)) {
      return false;
    }
    return REGEX_VALIDATE.onlyNumbers.test(event.key);
  }
  getValidateNotNumber(event: any, numbers: any): boolean {
    return event.keyCode === 48 && numbers === '';
  }
}
