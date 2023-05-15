import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { LHome } from './-home.component'

const routes = [
  {
    path: '',
    component: LHome,
  },
]

@NgModule({
  declarations: [LHome],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LHome],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
