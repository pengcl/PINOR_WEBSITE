import {Component} from '@angular/core';
import {timer as observableTimer} from 'rxjs';
import {PreloaderService} from './components/preloader/preloader.service';
import {MenuService} from './components/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  menuState: boolean;

  constructor(private preloaderSvc: PreloaderService, private menuSvc: MenuService) {
    preloaderSvc.set(true);
    observableTimer(1500).subscribe(() => {
      preloaderSvc.set(false);
    });

    menuSvc.get().subscribe(res => {
      console.log(res);
      this.menuState = res;
    });
  }
}
