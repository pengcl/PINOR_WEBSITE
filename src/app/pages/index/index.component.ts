import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';

import {PreloaderService} from '../../components/preloader/preloader.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  stable = false;
  @ViewChild('section', {static: false}) private section: ElementRef;

  constructor(private preloaderSvc: PreloaderService) {
    preloaderSvc.get().subscribe(res => {
      this.stable = !res;
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
