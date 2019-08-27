import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {getIndex} from '../@shared';

@Pipe({
  name: 'repairDate',
  pure: false
})

@Injectable()
export class RepairDatePipe implements PipeTransform {
  transform(value): any {
    value = value.split('.')[0].replace(/\-/g, '/');
    return value;
  }
}


@Pipe({
  name: 'html'
})
export class HtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(style) {
    return this.sanitizer.bypassSecurityTrustHtml(style);
  }

}
