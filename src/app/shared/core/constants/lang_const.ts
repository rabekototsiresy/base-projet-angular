import { ILang } from "../interfaces/ILang";
import { Translatable } from "./translatable_const";

const translate = new Translatable();
export const langList: ILang[] = [
  {
    flag: 'assets/themes/images/en.png',
    name: translate.__('lang.text_en'),
    lang: 'en',
  },
  {
    flag: 'assets/themes/images/fr.png',
    name: translate.__('lang.text_fr'),
    lang: 'fr'
  }
]
