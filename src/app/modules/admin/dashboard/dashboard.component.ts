import { Component, OnInit } from '@angular/core';
import  {sidebarmenu} from "./../../../../assets/libraries/js/sidebarmenu";
import '../../../../assets/libraries/js/perfect-scrollbar.jquery.min.js'
import { custom } from '../../../../assets/libraries/js/custom.min';
import { NotifierService } from 'src/app/shared/core/services/notifier/notifier.service';
import { SweetAlertService } from 'src/app/shared/core/services/sweetAlert/sweet-alert.service';
import { ESweetAlertIcon } from 'src/app/shared/core/enums/ESweetAlert';
import { initLayout } from '../../../../assets/libraries/js/layout';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private notifier: NotifierService,
    private _sweet: SweetAlertService
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

}

