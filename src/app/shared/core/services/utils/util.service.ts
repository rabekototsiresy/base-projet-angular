import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
    /**
   *
   * @param form :formGroup
   * @param name : formControlname
   * @returns
   */
     errorField(form: FormGroup | any,name: string) {
      return form.get(name).invalid && (form.get(name).dirty || form.get(name).touched)
    }

    errorText(form: FormGroup | any,name: string,errorType: string) {
      return form.get(name).hasError(errorType);
    }
}
