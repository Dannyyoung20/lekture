import { HomeComponent } from './../components/home/home.component';
import { Routes } from '@angular/router';
import { LoginComponent } from '../../pages/user/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
