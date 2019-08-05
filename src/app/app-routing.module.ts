import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {ListComponent} from './pages/article/list/list.component';
import {ArticleItemComponent} from './pages/article/item/item.component';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {CatalogResolve} from './pages/catalog/catalog.resolve';

const routes: Routes = [
  {
    path: '', redirectTo: 'index', pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'article/:id',
    component: ArticleItemComponent
  },
  {
    path: 'catalog/:id',
    component: CatalogComponent,
    resolve: {
      catalog: CatalogResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
