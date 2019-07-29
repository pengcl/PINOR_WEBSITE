import {Component, OnInit} from '@angular/core';
import {ImprintService} from './imprint.service';

declare var $: any;

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {

  constructor(private imprintSvc: ImprintService) {
  }

  ngOnInit() {
  }

  imprint(state, e) {
    e.preventDefault();
    this.imprintSvc.imprint(state);
  }

}
