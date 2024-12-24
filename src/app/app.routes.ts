import { Routes } from '@angular/router';
import { LoginComponent } from './page/auth/login/login.component';

export const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'signup', component:LoginComponent},

];
