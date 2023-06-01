import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';
import { ESweetAlertIcon } from '../../enums/ESweetAlert';
import { CANCEL_BUTTON_COLOR, CONFIRM_BUTTON_COLOR } from '../../../constants';
@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }
  swal(title: string,text: string,icon: ESweetAlertIcon) {
    Swal.fire({
      title,
      text,
      confirmButtonColor: CONFIRM_BUTTON_COLOR
    })
  }

  swalProcessing(title: string, text: string, icon: ESweetAlertIcon, cancelButtonText = 'Annuler', confirmButtonText = 'Valider' ): Promise<SweetAlertResult<any>>{
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      cancelButtonColor: CANCEL_BUTTON_COLOR,
      cancelButtonText: cancelButtonText,
      confirmButtonColor: CONFIRM_BUTTON_COLOR,
      confirmButtonText: confirmButtonText
    })
  }
}
