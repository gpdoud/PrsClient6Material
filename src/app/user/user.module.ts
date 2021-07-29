import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as user from './index';


@NgModule({
  declarations: [
    user.UserListComponent,user.UserDetailComponent,user.UserCreateComponent,user.UserEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    user.UserListComponent,user.UserDetailComponent,user.UserCreateComponent,user.UserEditComponent
  ]
})
export class UserModule { }
