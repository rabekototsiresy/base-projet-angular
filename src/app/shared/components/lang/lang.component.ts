import { Component, OnInit } from '@angular/core';
import { Translatable } from '../../core/constants/translatable_const';
import { langList as ll } from '../../core/constants/lang_const';
import { ILang } from '../../core/interfaces/ILang';
import { LocalStorageService } from '../../core/services/storage/local-storage.service';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss'],
})
export class LangComponent extends Translatable implements OnInit {
  public langList: ILang[] = ll;
  public currentLang: ILang | any;
  constructor(private _storage: LocalStorageService) {
    super();
  }

  ngOnInit(): void {
    const langInLocalStorage = this._storage.get('lang') || 'fr';
    this.currentLang = this.langList.find(
      (lang: ILang) => lang.lang == langInLocalStorage
    );
  }
  getSeletedLang({ lang }: ILang) {
    this._storage.set('lang', lang);
    window.location.reload();
  }
}
