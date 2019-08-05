import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {CatalogService} from './catalog.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogResolve implements Resolve<any> {
  constructor(
    public service: CatalogService,
    public router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this.service.get(id)
      .pipe(map(res => {
        console.log(res);
        if (res) {
          return res;
        } else {
          return [];
        }
      }));
  }
}
