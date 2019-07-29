import {Component, OnInit} from '@angular/core';
import {ImprintService} from '../imprint/imprint.service';
import {MenuService} from './menu.service';

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

  constructor(private imprintSvc: ImprintService, private menuSvc: MenuService) {
  }

  ngOnInit() {
    this.menuSvc.get().subscribe(res => {
      this.show = res;
      console.log(this.show);
    });
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
