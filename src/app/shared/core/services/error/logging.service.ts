import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  logError(message: string, stack: string) {
    // enregistrement d'erreur
    // The console.log pour le test
    console.log('LoggingService: ' + message);
  }
}
