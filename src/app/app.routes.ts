import { Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { BotsComponent } from './pages/bots/bots.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'bots', 
        component: BotsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'config', 
        component: SettingsComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**', redirectTo: 'login'
    },
];
