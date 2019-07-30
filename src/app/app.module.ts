import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IndexComponent} from './pages/index/index.component';
import {ListComponent} from './pages/article/list/list.component';
import {ItemComponent} from './pages/article/item/item.component';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {ImprintComponent} from './components/imprint/imprint.component';
import {MenuComponent} from './components/menu/menu.component';
import {PreloaderComponent} from './components/preloader/preloader.component';
import {LogoComponent} from './components/logo/logo.component';
import {HelpMenuComponent} from './components/help-menu/help-menu.component';
import {OverlayComponent} from './components/overlay/overlay.component';
import {ControlsComponent} from './components/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListComponent,
    ItemComponent,
    CatalogComponent,
    ImprintComponent,
    MenuComponent,
    PreloaderComponent,
    LogoComponent,
    HelpMenuComponent,
    OverlayComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
