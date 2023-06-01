import { Injectable } from '@angular/core';
import notifier from 'notifier-js'
@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  private _TIMEOUT = 4000
  constructor() { }
  info(title: string,msg: string) {
    notifier.show(title, msg,'info','assets/themes/images/notifier/info.png');
  }
  success(title: string,msg: string) {
    notifier.show(title, msg,'success','assets/themes/images/notifier/ok.png');
  }
  warning(title: string,msg: string) {
    notifier.show(title, msg,'warning','assets/themes/images/notifier/warning.png');
  }
  danger(title: string,msg: string) {
    notifier.show(title, msg,'danger','assets/themes/images/notifier/priority.png');
  }
}
