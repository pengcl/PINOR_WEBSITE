import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Renderer2} from '@angular/core';
import {CatalogService} from './catalog.service';

declare var $: any;

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, AfterViewInit {
  id;
  catalog;
  type;

  constructor(private route: ActivatedRoute, private renderer: Renderer2, private catalogSvc: CatalogService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.catalog = this.route.snapshot.data.catalog;
      this.type = this.catalog.type.name;
      console.log(this.type);
      setTimeout(() => {
        $('.detect-inview').addClass('visible');
      });
      $('.section-wrap').mCustomScrollbar({
        axis: 'y',
        scrollInertia: 100,
        callbacks: {}
      });
    });
  }

  ngAfterViewInit() {
  }

}
