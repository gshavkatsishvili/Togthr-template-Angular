import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { ShaviHome } from './shavi-home.component'

const routes = [
  {
    path: '',
    component: ShaviHome,
  },
]

@NgModule({
  declarations: [ShaviHome],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ShaviHome],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShaviHomeModule {}
