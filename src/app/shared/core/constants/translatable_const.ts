import { LocalStorageService } from "../services/storage/local-storage.service";

declare var require: any;
declare var window: any;

export class Translatable {
  static data: Array<any> = [];
  public lang: string = '';
  private _allowLang: string[] = ['en', 'fr'];

  constructor() {
    console.log('kaiza')
    if (!this.lang) {
      const currentLang = localStorage.getItem('lang');
      if (currentLang && this._allowLang.includes(currentLang)) {
        this.lang = currentLang;
      } else {
        this.lang = 'fr';
      }
    }
    Translatable.data = require(`../../../../assets/i18n/${this.lang}/lang.json`);

  }

  public __(key: string) {
    console.log('path')

    try {

      let path = `Translatable.data.${key} || '${key}'`;
      return eval(path);
    } catch (e) {
      console.log(e,'error')

      return key;
    }
  }
}
