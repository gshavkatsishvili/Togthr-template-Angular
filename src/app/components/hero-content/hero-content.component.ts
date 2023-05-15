import { Component, Input } from '@angular/core'

@Component({
  selector: 'hero-content',
  templateUrl: 'hero-content.component.html',
  styleUrls: ['hero-content.component.css'],
})
export class HeroContent {
  @Input()
  Caption: string = 'Providing Photovoltaic Power Plant Installation Services'
  constructor() {}
}
