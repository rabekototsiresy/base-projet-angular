import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ErrorService } from '../../services/error/error.service';
import { LoggingService } from '../../services/error/logging.service';
import { ToastrService } from '../../services/toastr/toastr.service';
import { NotifierService } from '../notifier/notifier.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private _injector: Injector,
    private __notifier: NotifierService
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    const errorService = this._injector.get(ErrorService);
    const logger = this._injector.get(LoggingService);
    let message;
    let stackTrace;

    if (error instanceof HttpErrorResponse) {
      // Server Error
      message = errorService.getServerMessage(error);
      stackTrace = errorService.getServerStack(error);
      this.__notifier.danger('Erreur client', message);
    } else {
      // Client Error
      message = errorService.getClientMessage(error);
      stackTrace = errorService.getClientStack(error);
      this.__notifier.danger('Erreur serveur', message);
    }

    // Always log errors
    logger.logError(message, stackTrace);
    console.error(error);
  }
}
