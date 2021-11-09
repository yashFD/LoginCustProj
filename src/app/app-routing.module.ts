import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CustomerComponent } from './customer/customer.component';
import { FormComponent } from './form/form.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
      path: 'login', component: LoginLayoutComponent, data: {title: 'First Component'},
      children: [
        {path: '', component: LoginComponent}
      ]
    },
    { path: 'main', canActivate:[AuthGuard] ,component: HomeLayoutComponent,
      children: [
        { path: '', redirectTo: 'customer', pathMatch: 'full' },
        { path: 'customer', component: CustomerComponent },
        { path: 'form', component: FormComponent }
      ]
    }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
