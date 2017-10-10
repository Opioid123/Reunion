import { FormControl, AbstractControl } from '@angular/forms';

export function ValidateSelectOption(control: AbstractControl) {
  if (!(control.value.indexOf('Select') >=0 )) {console.log(control.value);
    return { validOption: true };
  }
  return { validOption: false };
}