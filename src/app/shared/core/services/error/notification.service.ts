import { Injectable } from '@angular/core';
import { NotifierService } from '../notifier/notifier.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private _notifier: NotifierService) {}

  showSuccess(message: string): void {
    this._notifier.success('Succès', message);
  }

  showError(message: string): void {
    this._notifier.danger('Erreur', message);
  }
}
