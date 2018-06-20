import { NotFoundComponent } from './../components/not-found/not-found.component';
import { HomeComponent } from './../components/home/home.component';
import { Routes } from '@angular/router';
import { LoginComponent } from '../../pages/user/login/login.component';
import { AuthGuard } from '../guards/auth/auth-guard.service';

export const routes: Routes = [
        {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
