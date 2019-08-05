import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {ArticleService} from '../../../article/article.service';

declare var $: any;

@Component({
  selector: 'app-catalog-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CatalogTypeListComponent implements OnInit {
  @Input() catalog;
  query = {
    _limit: 10,
    _sort: 'id',
    _start: 0,
    catalog: ''
  };
  articles = [];

  constructor(private articleSvc: ArticleService) {
  }

  ngOnInit() {
    this.query.catalog = this.catalog._id;
    this.articleSvc.list(this.query).subscribe(res => {
      let list = [];
      res.forEach((article, i) => {
        list.push(article);
        if (list.length === 2 || res.length === i + 1) {
          this.articles.push(list);
          list = [];
        }
      });
      setTimeout(() => {
        $('.detect-inview').addClass('visible');
      });
    });
  }

}
