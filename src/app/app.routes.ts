import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LoginComponent } from './pages/login/login.component';
import { Page404Component } from './pages/page404/page404.component';
import {GestionUtilisateurComponent} from './pages/gestion-utilisateur/gestion-utilisateur.component';
import { EditionUtilisateurComponent } from './pages/edition-utilisateur/edition-utilisateur.component';
import { GestionChantierComponent } from './pages/gestion-chantier/gestion-chantier.component';
import { EditionChantierComponent } from './pages/edition-chantier/edition-chantier.component';
import { adminGuard } from './admin.guard';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { EditionSiteComponent } from './pages/edition-site/edition-site.component';
import { GestionSitesComponent } from './pages/gestion-sites/gestion-sites.component';

export const routes: Routes = [
    {path:"accueil", component: AccueilComponent},
    {path:'login',component: LoginComponent},
    {path:'inscription',component: InscriptionComponent},
    {path:'gestion-utilisateur', component: GestionUtilisateurComponent},
    {path:'edition-utilisateur', component: EditionUtilisateurComponent},
    {path:'edition-utilisateur/:id', component: EditionUtilisateurComponent},
    {path:'edition-chantier/:id', component: EditionChantierComponent, canActivate: [adminGuard]},
    {path:'edition-chantiers', component: EditionChantierComponent, canActivate: [adminGuard]},
    {path:'gestion-chantier', component: GestionChantierComponent, canActivate: [adminGuard]},
    {path:'edition-site', component: EditionSiteComponent},
    {path:'edition-site/:id', component: EditionSiteComponent},
    {path:'gestion-site', component: GestionSitesComponent},
    {path:'', redirectTo: 'accueil', pathMatch:'full'},
    {path: '**', component : Page404Component}
];
