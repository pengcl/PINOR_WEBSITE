import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

declare var $: any;

@Injectable({providedIn: 'root'})
export class ImprintService {
  show = new BehaviorSubject(true);

  constructor() {
  }

  set(state: boolean) {
    this.show.next(state);
  }

  get(): Observable<boolean> {
    return this.show.asObservable();
  }

  imprint(state) {
    const wrap = $('.wrap');
    if (state === 'open') {
      wrap.removeClass('menu-open');
      setTimeout(() => {
        wrap.addClass('imprint-open');
        setTimeout(() => {
          $('.imprint .border-left').animate({
            height: $(window).height() - 60
          }, 1000, () => {
            $('.imprint .border-bott').animate({
              width: $(window).width() - 60
            }, 1000);
          });
          $('.imprint  .border-top').animate({
            width: $(window).width() - 60
          }, 1000, () => {
            $('.imprint .border-right').animate({
              height: $(window).height() - 60
            }, 1000);
          });
        }, 700);
      }, 700);
    } else {
      wrap.removeClass('imprint-open');
    }
  }
}
