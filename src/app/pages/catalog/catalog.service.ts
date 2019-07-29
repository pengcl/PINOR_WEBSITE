import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of as observableOf} from 'rxjs';
import {mergeMap as observableMargeMap} from 'rxjs/operators';
import {getIndex} from '../../@shared';

@Injectable({providedIn: 'root'})
export class CatalogService {
  constructor(private http: HttpClient) {
  }

  get(id?): Observable<any> {
    if (id) {
      return this.http.get('api/catalogs/' + id);
    } else {
      return this.http.get('api/catalogs').pipe(observableMargeMap(res => {
        const list = [];

        function getCatalogs(catalogs) {
          const LIST = [];
          catalogs.forEach(catalog => {
            catalog.title = catalog.name;
            if (catalog.children && catalog.children.length > 0) {
              catalog.children = getCatalogs(catalog.children);
            } else {
              catalog.isLeaf = true;
            }
            LIST.push(res[getIndex(res, 'id', catalog.id)]);
          });
          return LIST;
        }

        getCatalogs(res).forEach(item => {
          if (!item.parent) {
            list.push(item);
          }
        });
        return observableOf(list);
      }));
    }
  }

  children(id) {
  }
}
