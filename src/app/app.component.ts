import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { VirtualUtilsService } from 'src/virtual/services/virtual-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'killer-buk';
  showBetslip = false;

  constructor(private _virtualUtilsService: VirtualUtilsService, private translate: TranslateService) {
    this._virtualUtilsService.isShowBetslip.subscribe(isShow => {
      this.showBetslip = isShow;
    });

  }
  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}