import { Routes } from '@angular/router';
import { LoginComponent } from './page/auth/login/login.component';

export const routes: Routes = [
    {path:'' , redirectTo: 'home', pathMatch: 'full'},
    {path:'home',title: 'Home', loadComponent:()=>import ('./page/home/home.component').then(c => c.HomeComponent)},
    {path: 'login', title: 'login', loadComponent:()=>import ('./page/auth/login/login.component').then(c => c.LoginComponent)},
    {path: 'signup', title: 'signup', loadComponent:()=>import ('./page/auth/signup/signup.component').then(c => c.SignupComponent)},


    // {path:'**' , title:'404 Not Found'}

];
 