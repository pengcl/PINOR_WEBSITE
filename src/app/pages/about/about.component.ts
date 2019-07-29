import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';

import {PreloaderService} from '../../components/preloader/preloader.service';

@Component({
  selector: 'app-index',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
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
