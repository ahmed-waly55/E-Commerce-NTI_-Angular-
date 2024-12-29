import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'' , redirectTo: 'home', pathMatch: 'full'},
    {path:'home',title: 'Home', loadComponent:()=>import ('./page/home/home.component').then(c => c.HomeComponent)},
    {path: 'login', title: 'login', loadComponent:()=>import ('./page/auth/login/login.component').then(c => c.LoginComponent)},
    {path: 'signup', title: 'signup', loadComponent:()=>import ('./page/auth/signup/signup.component').then(c => c.SignupComponent)},

    {path:'products',children:[
        {path:'',title:'products',loadComponent:()=>import ('./page/products/products.component').then(c => c.ProductsComponent)},
        {path:':id',title:'products Details',loadComponent:()=>import ('./page/products-detailss/products-detailss.component').then(c => c.ProductsDetailssComponent)},

    ]},

    {path: '**', title: '404 Not Found', loadComponent:()=>import ('./page/not-found/not-found.component').then(c => c.NotFoundComponent)},


];
 
