import { Component, OnInit } from '@angular/core';
import  {sidebarmenu} from "./../../../../assets/libraries/js/sidebarmenu";
import '../../../../assets/libraries/js/perfect-scrollbar.jquery.min.js'
import { custom } from '../../../../assets/libraries/js/custom.min';
import { NotifierService } from 'src/app/shared/core/services/notifier/notifier.service';
import { SweetAlertService } from 'src/app/shared/core/services/sweetAlert/sweet-alert.service';
import { ESweetAlertIcon } from 'src/app/shared/core/enums/ESweetAlert';
import { initLayout } from '../../../../assets/libraries/js/layout';
import { HttpService } from '../../../shared/core/services/http/http.service';
import { environment } from 'src/environments/environment';
import { IApiResponse } from 'src/app/shared/core/interfaces/IApiResponse';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private notifier: NotifierService,
    private _sweet: SweetAlertService,
    private _http: HttpService
  ) {
    initLayout();
  }

  ngOnInit(): void {
    // this.notifier.danger('hello','hello hyues')
    // this._sweet.swalProcessing('test question?','fafaiko any ty aaan',ESweetAlertIcon.QUESTION).then(
    //   result => {
    //     console.log(result,'result')
    //     this._sweet.swal('test','test',ESweetAlertIcon.ERROR)
    //   }
    // )

  }
  getDataPrivate() {
    this._http
    .get( environment.register)
    .subscribe(
      (response: IApiResponse) => {
       console.log('response',response)
        // Redirect to protected route or perform other actions upon successful login
      },
      (error) => {
        console.log(error);
        // Handle error cases
      }
    );
  }
}

