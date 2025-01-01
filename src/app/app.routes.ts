import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {path:'' , redirectTo: 'home', pathMatch: 'full'},
    {path:'home',title: 'Home', loadComponent:()=>import ('./page/home/home.component').then(c => c.HomeComponent)},
    {path: 'login',
    title: 'login',
    loadComponent:()=>import ('./page/auth/login/login.component').then(c => c.LoginComponent)},
    {
        path: 'auth/google',
        title: 'google login',
        loadComponent: () => import('./page/auth/google/google.component').then(c => c.GoogleComponent)
      },

    {path: 'signup', title: 'signup', loadComponent:()=>import ('./page/auth/signup/signup.component').then(c => c.SignupComponent)},
    {path: 'forgot-password', title: 'Forgot Password', loadComponent:()=>import ('./page/auth/forgot-password/forgot-password.component').then(c => c.ForgotPasswordComponent)},
    
    {path: 'profile',canActivate:[authGuard], title: 'profile', loadComponent:()=>import ('./page/profile/profile.component').then(c => c.ProfileComponent)},

    {path:'products',children:[
        {path:'',title:'products',loadComponent:()=>import ('./page/products/products.component').then(c => c.ProductsComponent)},
        {path:':id',title:'products Details',loadComponent:()=>import ('./page/products-detailss/products-detailss.component').then(c => c.ProductsDetailssComponent)},

    ]},

    {path: '**', title: '404 Not Found', loadComponent:()=>import ('./page/not-found/not-found.component').then(c => c.NotFoundComponent)},


];
 
