import {Component, OnInit} from '@angular/core';

import * as $ from 'assets/js/app.js';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  constructor(){}

  ngOnInit():void {

    /* common */
    $(document).ready(function() {

      $('.top-information1 select').styler();

      $(".scroll1").mCustomScrollbar({
        axis:"x"
      });

    });

  }
}
