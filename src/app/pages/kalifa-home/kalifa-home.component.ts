import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'kalifa-home',
  templateUrl: 'kalifa-home.component.html',
  styleUrls: ['kalifa-home.component.css'],
})
export class KalifaHome {
  raw5bo2: string = ' '
  rawtjiz: string = ' '
  rawkxsp: string = ' '
  raw7zsv: string = ' '
  rawcgzb: string = ' '
  raw2sk5: string = ' '
  rawbety: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('KalifaHome - Togthr template')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'KalifaHome - Togthr template',
      },
    ])
  }
}
