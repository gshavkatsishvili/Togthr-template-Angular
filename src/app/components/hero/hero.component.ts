import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css'],
})
export class Hero {
  @Input()
  Icon_alt: string = 'image'
  @Input()
  Register: string = 'Register'
  @Input()
  video_src: string =
    'https://presentation-website-assets.teleporthq.io/templates/togthr/togthr-video.mp4'
  @Input()
  image_src: string = '/assets/playground_assets/logo.svg'
  @Input()
  text1: string = 'Features'
  @Input()
  image_alt: string = 'image'
  @Input()
  text2: string = 'Pricing'
  @Input()
  Branding_src: string = '/assets/playground_assets/logo.svg'
  @Input()
  Branding_alt: string = 'image'
  @Input()
  text: string = 'About'
  @Input()
  Icon_src: string = '/assets/playground_assets/hamburger.svg'
  @Input()
  text3: string = 'Team'
  @Input()
  text4: string = 'Blog'
  @Input()
  Login: string = 'Login'
  constructor() {}
}
