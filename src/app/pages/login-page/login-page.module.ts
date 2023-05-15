import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LoginPage } from './login-page.component'

const routes = [
  {
    path: '',
    component: LoginPage,
  },
]

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LoginPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginPageModule {}
