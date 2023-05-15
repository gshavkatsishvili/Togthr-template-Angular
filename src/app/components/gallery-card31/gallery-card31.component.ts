import { Component, Input } from '@angular/core'

@Component({
  selector: 'gallery-card31',
  templateUrl: 'gallery-card31.component.html',
  styleUrls: ['gallery-card31.component.css'],
})
export class GalleryCard31 {
  @Input()
  rootClassName: string = ''
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000'
  @Input()
  subtitle: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  @Input()
  title: string = 'Project Title'
  @Input()
  image_alt: string = 'image'
  constructor() {}
}
