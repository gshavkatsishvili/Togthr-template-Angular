import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.css'],
})
export class LoginPage {
  rawew9x: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('LoginPage - Togthr template')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'LoginPage - Togthr template',
      },
    ])
  }
}
