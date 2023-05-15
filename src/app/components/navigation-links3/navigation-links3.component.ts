import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links3',
  templateUrl: 'navigation-links3.component.html',
  styleUrls: ['navigation-links3.component.css'],
})
export class NavigationLinks3 {
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = 'About'
  @Input()
  text2: string = 'Pricing'
  @Input()
  text4: string = 'Blog'
  @Input()
  text1: string = 'Features'
  @Input()
  text3: string = 'Team'
  constructor() {}
}
