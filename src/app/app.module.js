"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var pipe_1 = require("./usine/filter/pipe");
var router_1 = require("./router");
var crise_component_1 = require("./usine/crise/crise.component");
var lot_component_1 = require("./usine/lot/lot.component");
var ajoutlotf_component_1 = require("./usine/lot/ajoutlot/ajoutlotf.component");
var defaut_component_1 = require("./usine/defaut/defaut.component");
var login_component_1 = require("./usine/login/login.component");
var ajoutdefaut_component_1 = require("./usine/defaut/ajoutdefaut/ajoutdefaut.component");
var etude_component_1 = require("./usine/etude/etude.component");
var ajoutcrise_component_1 = require("./usine/crise/ajoutcrise/ajoutcrise.component");
var home_component_1 = require("./usine/home/home.component");
var authentification_service_1 = require("./usine/service/authentification.service");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var crise_service_1 = require("./usine/service/crise.service");
var lot_service_1 = require("./usine/service/lot.service");
var defaut_service_1 = require("./usine/service/defaut.service");
var usine_service_1 = require("./usine/service/usine.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [router_1.routing, platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [app_component_1.AppComponent,
            crise_component_1.CriseComponent, lot_component_1.LotComponent,
            ajoutlotf_component_1.AjoutlotComponent, defaut_component_1.DefautComponent,
            login_component_1.LoginComponent, ajoutdefaut_component_1.AjoutdefautComponent,
            etude_component_1.EtudeComponent, ajoutcrise_component_1.AjoutcriseComponent,
            home_component_1.HomeComponent, pipe_1.SearchPipe
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            authentification_service_1.AuthenticationService, crise_service_1.CriseService, lot_service_1.LotService, defaut_service_1.DefautService, usine_service_1.UsineService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map