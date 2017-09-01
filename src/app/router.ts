import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CriseComponent} from './usine/crise/crise.component';
import { LotComponent} from './usine/lot/lot.component';
import {AjoutlotComponent } from './usine/lot/ajoutlot/ajoutlotf.component';
import {DefautComponent } from './usine/defaut/defaut.component';
import {LoginComponent } from './usine/login/login.component';
import {AjoutdefautComponent } from './usine/defaut/ajoutdefaut/ajoutdefaut.component';
import { EtudeComponent } from './usine/etude/etude.component';
import { AjoutcriseComponent } from './usine/crise/ajoutcrise/ajoutcrise.component';
import { HomeComponent} from './usine/home/home.component'

const AppRoutes: Routes = [
    { path: '', redirectTo : 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
  
    { path: 'home'  , component : HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'crise', component: CriseComponent},
      { path: 'lot', component: LotComponent },
      { path: 'lot/:idcrise', component: LotComponent },      
      { path: 'defaut', component: DefautComponent }, 
      {path : 'defaut/:idlot' , component : DefautComponent},   
      { path: 'etude'  , component : EtudeComponent },
      { path: 'ajoutlot', component: AjoutlotComponent },
      { path: 'ajoutdefaut' , component : AjoutdefautComponent },
      { path: 'ajoutcrise'  , component : AjoutcriseComponent}
      
    ]
  },

   
];

export const routing = RouterModule.forRoot(AppRoutes);