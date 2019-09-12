import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ImprintService} from '../imprint/imprint.service';
import {MenuService} from './menu.service';
import {CatalogService} from '../../pages/catalog/catalog.service';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  show: boolean;
  subscribeShow = false;
  focus = false;
  msg = {
    show: false,
    content: '订阅失败！'
  };

  catalogs;

  constructor(private router: Router,
              private imprintSvc: ImprintService,
              private menuSvc: MenuService,
              private catalogSvc: CatalogService) {
  }

  ngOnInit() {
    this.menuSvc.get().subscribe(res => {
      this.show = res;
    });
    this.catalogSvc.get().subscribe(res => {
      this.catalogs = res;
    });
    this.getHeight();
    $(window).resize(() => {
      this.getHeight();
    });

    $(document).on('mouseover', '.center-fixed > span', (e) => {
      const $target = $(e.currentTarget);
      const $parent = $(e.currentTarget.offsetParent);
      $target.addClass('active');

      const className = $target.attr('class').replace(' ', '-');
      console.log(e);
      $parent.addClass(className);
    });

    $(document).on('mouseout', '.center-fixed > span', (e) => {
      const $target = $(e.currentTarget);
      const $parent = $(e.currentTarget.offsetParent);
      $target.removeClass('active');
      $parent.attr('class', 'center-fixed');
      $('.center-fixed').eq(0).attr('class', 'active center-fixed');
    });
  }

  getHeight() {
    $('.menu__top-part, .menu__bott-part').height(($(window).height() - 524) / 2 - 2);
  }

  menu(catalog, e) {
    e.preventDefault();
    this.menuSvc.set(false);
    this.router.navigate(['/catalog', catalog._id]);
  }

  /*over(e) {
    e.stopPropagation();
    const $target = $(e.target);
    const $parent = $(e.target.offsetParent);
    $target.addClass('active');

    const className = $target.attr('class').replace(' ', '-');
    console.log(className);
    $parent.addClass(className);
    // console.log(e.target.className(e.target.className() + ' active'));
  }*/

  /*out(e) {
    e.stopPropagation();
    const $target = $(e.target);
    const $parent = $(e.target.offsetParent);
    $target.removeClass('active');
    $parent.attr('class', 'center-fixed');
  }*/

  toggle() {
    this.menuSvc.set(!this.show);
  }

  imprint(state, e) {
    e.preventDefault();
    this.imprintSvc.imprint(state);
  }

  subscribe(e) {
    e.preventDefault();
    this.subscribeShow = true;
    this.focus = true;
  }

  submit(e) {
    e.preventDefault();
    this.menuSvc.submit().subscribe(res => {
      if (res) {
        this.subscribeShow = false;
      } else {
        this.msg.show = true;
      }
    });
  }
}
