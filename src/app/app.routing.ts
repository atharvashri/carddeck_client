import { Routes } from '@angular/router';

import { LoginComponent } from '../app/login/login.component'
import { SignupComponent } from '../app/signup/signup.component'
import { CardDashboardComponent } from '../app/card-dashboard/card-dashboard.component'


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',

    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'dashboard',
        component: CardDashboardComponent,
    },
]