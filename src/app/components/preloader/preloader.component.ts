import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {timer as observableTimer, interval as observableInterval} from 'rxjs';
import {take} from 'rxjs/operators';
import {PreloaderService} from './preloader.service';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit, AfterViewInit {
  show;
  progress = 0;
  @ViewChild('preloader', {static: false}) private preloader: ElementRef;

  constructor(private preloaderSvc: PreloaderService) {
    preloaderSvc.get().subscribe(res => {
      this.show = res;
      if (this.show) {
        const fakeTime = 60;
        observableInterval(fakeTime).pipe(take(100)).subscribe(() => {
          this.progress = this.progress + 1;
          this.loadingScreen(this.progress);
        });
      } else {
        this.progress = 0;
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const fakeTime = 60;
    observableInterval(fakeTime).pipe(take(100)).subscribe(() => {
      this.progress = this.progress + 1;
      this.loadingScreen(this.progress);
    });
  }

  loadingScreen(progress) {
    if (progress === 100) {
      this.drawLines();
    }
  }

  drawLines() {
  }

}
