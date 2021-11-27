import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './container/login.component';
import { SignupComponent } from './container/signup.component';

const routes: Routes = [{path:'login', component: LoginComponent},{path:'signup', component: SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
