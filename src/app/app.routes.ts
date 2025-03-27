import { Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { BotsComponent } from './pages/bots/bots.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/bots', pathMatch: 'full'
    },
    {
        path: 'bots', component: BotsComponent
    },
    {
        path: 'config', component: SettingsComponent
    }
];
