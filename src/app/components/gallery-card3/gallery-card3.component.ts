import { Component, Input } from '@angular/core'

@Component({
  selector: 'gallery-card3',
  templateUrl: 'gallery-card3.component.html',
  styleUrls: ['gallery-card3.component.css'],
})
export class GalleryCard3 {
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000'
  @Input()
  image_alt: string = 'image'
  @Input()
  subtitle: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  @Input()
  rootClassName: string = ''
  @Input()
  title: string = 'Project Title'
  constructor() {}
}
