import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PreloaderService {
  show = new BehaviorSubject(true);

  constructor() {
  }

  set(state: boolean) {
    this.show.next(state);
  }

  get(): Observable<boolean> {
    return this.show.asObservable();
  }
}
