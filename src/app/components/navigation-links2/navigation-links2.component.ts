import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links2',
  templateUrl: 'navigation-links2.component.html',
  styleUrls: ['navigation-links2.component.css'],
})
export class NavigationLinks2 {
  @Input()
  text4: string = 'Blog'
  @Input()
  text: string = 'About'
  @Input()
  text1: string = 'Features'
  @Input()
  text2: string = 'Pricing'
  @Input()
  rootClassName: string = ''
  @Input()
  text3: string = 'Team'
  constructor() {}
}
