import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Renderer2} from '@angular/core';
import {CatalogService} from './catalog.service';

declare var $: any;
declare var onInitScrollAppearance: any;
declare var scrollAppearance: any;

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, AfterViewInit {
  id;
  catalog;
  @ViewChild('content', {static: false, read: ElementRef}) content: ElementRef;
  @ViewChild('section', {static: false}) section: ElementRef;

  constructor(private route: ActivatedRoute, private renderer: Renderer2, private catalogSvc: CatalogService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      this.catalogSvc.get(this.id).subscribe(res => {
        this.catalog = res;
        console.log(this.catalog);
        setTimeout(() => {
          $('.detect-inview').addClass('visible');
        });
        $('.section-wrap').mCustomScrollbar({
          axis: 'y',
          scrollInertia: 100,
          callbacks: {}
        });
      });
    });
  }

  ngAfterViewInit() {
  }

}
