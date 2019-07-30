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

    $(window).resize(() => {
      $('.menu__top-part, .menu__bott-part').height(($(window).height() - $('.nav-main').height()) / 2 - 2);
    });
  }

  menu(catalog, e) {
    e.preventDefault();
    this.menuSvc.set(false);
    this.router.navigate(['/catalog', catalog._id]);
  }

  hover(state, e) {
    console.log(e);
  }

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
