import {Component, Input, OnInit, AfterViewInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-catalog-type-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class CatalogTypeIndexComponent implements OnInit, AfterViewInit {
  @Input() catalog;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $('.detect-inview').addClass('visible');
    });
  }

}
