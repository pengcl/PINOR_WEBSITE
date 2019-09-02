import {Component, Input, OnInit, ViewChild, AfterViewInit, ElementRef} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-catalog-type-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class CatalogTypeIndexComponent implements OnInit, AfterViewInit {
  @Input() catalog;
  @ViewChild('content', {static: false}) content;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $('.detect-inview').addClass('visible');
      $('.map').css({height: $(window).innerHeight() + 'px'});
      $('.first-step').css({height: $(window).innerHeight() + 'px'});
      $(document).on('click', '.about-wrap .first-step .btn-down', () => {
        $('.section-wrap').mCustomScrollbar('scrollTo', $('.wrap-bg'), {
          scrollInertia: 1000,
          scrollEasing: 'easeOut'
        });

      });

      $('.second-step__list').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 30000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    });
  }

}
