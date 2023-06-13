import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../core/services/storage/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private _storage: LocalStorageService) {}
  @ViewChild('navbarSupportedContent') navbarSupportedContent: ElementRef<HTMLDivElement> | undefined;
  ngOnInit(): void {}
  logout() {
    this._storage.clearAll();
    this.router.navigate(['app', 'auth', 'login']);
  }

  toggleMenu() {
    console.log(this.navbarSupportedContent,'kkkkk')
    this.navbarSupportedContent?.nativeElement.classList.toggle('show');
  }
}
