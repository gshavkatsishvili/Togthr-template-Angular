import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { IconContainer } from './icon-container/icon-container.component'
import { Check } from './check/check.component'
import { ImgSlider } from './img-slider/img-slider.component'
import { NavigationLinks1 } from './navigation-links1/navigation-links1.component'
import { GalleryCard2 } from './gallery-card2/gallery-card2.component'
import { News } from './news/news.component'
import { NavigationLinks3 } from './navigation-links3/navigation-links3.component'
import { NavigationLinks } from './navigation-links/navigation-links.component'
import { GalleryCard31 } from './gallery-card31/gallery-card31.component'
import { Heading } from './heading/heading.component'
import { GalleryCard21 } from './gallery-card21/gallery-card21.component'
import { Hero } from './hero/hero.component'
import { ImgSlider1 } from './img-slider/img-slider.component1'
import { NavigationLinks4 } from './navigation-links4/navigation-links4.component'
import { Line } from './line/line.component'
import { GalleryCard3 } from './gallery-card3/gallery-card3.component'
import { NavigationLinks2 } from './navigation-links2/navigation-links2.component'
import { HeroContent } from './hero-content/hero-content.component'

@NgModule({
  declarations: [
    IconContainer,
    Check,
    ImgSlider,
    NavigationLinks1,
    GalleryCard2,
    News,
    NavigationLinks3,
    NavigationLinks,
    GalleryCard31,
    Heading,
    GalleryCard21,
    Hero,
    ImgSlider1,
    NavigationLinks4,
    Line,
    GalleryCard3,
    NavigationLinks2,
    HeroContent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    IconContainer,
    Check,
    ImgSlider,
    NavigationLinks1,
    GalleryCard2,
    News,
    NavigationLinks3,
    NavigationLinks,
    GalleryCard31,
    Heading,
    GalleryCard21,
    Hero,
    ImgSlider1,
    NavigationLinks4,
    Line,
    GalleryCard3,
    NavigationLinks2,
    HeroContent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
