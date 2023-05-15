import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { RegisterPage } from './register-page.component'

const routes = [
  {
    path: '',
    component: RegisterPage,
  },
]

@NgModule({
  declarations: [RegisterPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [RegisterPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterPageModule {}
