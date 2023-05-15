import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-news',
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css'],
})
export class News {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
