import { NgModule}      from '@angular/core';
import {RouterModule, Routes} from  '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {SearchPipe} from './usine/filter/pipe'
import { routing} from './router';
import { CriseComponent} from './usine/crise/crise.component';
import { LotComponent } from './usine/lot/lot.component';
import {AjoutlotComponent } from './usine/lot/ajoutlot/ajoutlotf.component';
import {DefautComponent } from './usine/defaut/defaut.component';
import {LoginComponent } from './usine/login/login.component';
import {AjoutdefautComponent } from './usine/defaut/ajoutdefaut/ajoutdefaut.component';
import { EtudeComponent } from './usine/etude/etude.component';
import { AjoutcriseComponent } from './usine/crise/ajoutcrise/ajoutcrise.component';
import { HomeComponent} from './usine/home/home.component';
import { AuthenticationService} from './usine/service/authentification.service';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { CriseService } from './usine/service/crise.service';
import {LotService} from './usine/service/lot.service';
import {DefautService} from './usine/service/defaut.service';


@NgModule({
  imports:      [routing,BrowserModule,
    FormsModule, 
    HttpModule
     ],

  declarations: [ AppComponent,
                  CriseComponent,LotComponent,
                  AjoutlotComponent,DefautComponent,
                  LoginComponent, AjoutdefautComponent,
                  EtudeComponent, AjoutcriseComponent,
                  HomeComponent,SearchPipe               
  ],
  bootstrap:  [AppComponent],

   providers: [
        AuthenticationService,CriseService,LotService,DefautService
    ],
})
export class AppModule { }
