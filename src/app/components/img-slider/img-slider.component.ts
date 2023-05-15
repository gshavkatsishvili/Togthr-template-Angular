import { Component, Input } from '@angular/core'

@Component({
  selector: 'img-slider',
  templateUrl: 'img-slider.component.html',
  styleUrls: ['img-slider.component.css'],
})
export class ImgSlider {
  @Input()
  rootClassName: string = ''
  @Input()
  image_src: string = '/assets/playground_assets/experience-1500h.png'
  @Input()
  image_alt: string = 'image'
  constructor() {}
}
