"use strict";
var router_1 = require("@angular/router");
var crise_component_1 = require("./usine/crise/crise.component");
var lot_component_1 = require("./usine/lot/lot.component");
var ajoutlotf_component_1 = require("./usine/lot/ajoutlot/ajoutlotf.component");
var defaut_component_1 = require("./usine/defaut/defaut.component");
var login_component_1 = require("./usine/login/login.component");
var ajoutdefaut_component_1 = require("./usine/defaut/ajoutdefaut/ajoutdefaut.component");
var etude_component_1 = require("./usine/etude/etude.component");
var ajoutcrise_component_1 = require("./usine/crise/ajoutcrise/ajoutcrise.component");
var home_component_1 = require("./usine/home/home.component");
var AppRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'crise', component: crise_component_1.CriseComponent },
            { path: 'lot', component: lot_component_1.LotComponent },
            { path: 'lot/:idcrise', component: lot_component_1.LotComponent },
            { path: 'defaut', component: defaut_component_1.DefautComponent },
            { path: 'defaut/:idlot', component: defaut_component_1.DefautComponent },
            { path: 'etude', component: etude_component_1.EtudeComponent },
            { path: 'ajoutlot', component: ajoutlotf_component_1.AjoutlotComponent },
            { path: 'ajoutdefaut', component: ajoutdefaut_component_1.AjoutdefautComponent },
            { path: 'ajoutcrise', component: ajoutcrise_component_1.AjoutcriseComponent }
        ]
    },
];
exports.routing = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=router.js.map