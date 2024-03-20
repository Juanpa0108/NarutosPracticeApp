import { Routes } from '@angular/router';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';
import { ClanesPageComponent } from './pages/clanes-page/clanes-page.component';
import { KekkeiGenkaiPageComponent } from './pages/kekkei-genkai-page/kekkei-genkai-page.component';
import { InfoPersonalPageComponent } from './pages/info-personal-page/info-personal-page.component';

export const routes: Routes = [
  { path: 'PrincipalPage', component: PrincipalPageComponent},
  { path: 'clanes', component: ClanesPageComponent },
  { path: 'kekkeiGenkai', component: KekkeiGenkaiPageComponent },
  { path: 'infoPersonal/:id', component: InfoPersonalPageComponent },

  { path: '**', redirectTo: 'PrincipalPage', pathMatch: 'full' },
];
