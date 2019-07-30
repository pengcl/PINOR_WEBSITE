import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {ListComponent} from './pages/article/list/list.component';
import {ItemComponent} from './pages/article/item/item.component';
import {CatalogComponent} from './pages/catalog/catalog.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'index', pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'item/:id',
    component: ItemComponent,
  },
  {
    path: 'catalog/:id',
    component: CatalogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
