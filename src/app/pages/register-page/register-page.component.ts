import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'register-page',
  templateUrl: 'register-page.component.html',
  styleUrls: ['register-page.component.css'],
})
export class RegisterPage {
  raw55n9: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('RegisterPage - Togthr template')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'RegisterPage - Togthr template',
      },
    ])
  }
}
