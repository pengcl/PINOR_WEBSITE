import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class MenuService {
  show = new BehaviorSubject(false);

  constructor() {
  }

  set(state: boolean) {
    this.show.next(state);
  }

  get(): Observable<boolean> {
    return this.show.asObservable();
  }

  submit(): Observable<boolean> {
    return of(true);
  }
}
