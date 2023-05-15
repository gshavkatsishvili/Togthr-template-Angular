import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-heading',
  templateUrl: 'heading.component.html',
  styleUrls: ['heading.component.css'],
})
export class Heading {
  @Input()
  Heading: string = 'nawvalebi'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
