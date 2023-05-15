import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { KalifaHome } from './kalifa-home.component'

const routes = [
  {
    path: '',
    component: KalifaHome,
  },
]

@NgModule({
  declarations: [KalifaHome],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [KalifaHome],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class KalifaHomeModule {}
