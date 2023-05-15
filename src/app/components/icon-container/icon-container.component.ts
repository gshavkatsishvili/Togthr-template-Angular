import { Component, Input } from '@angular/core'

@Component({
  selector: 'icon-container',
  templateUrl: 'icon-container.component.html',
  styleUrls: ['icon-container.component.css'],
})
export class IconContainer {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
