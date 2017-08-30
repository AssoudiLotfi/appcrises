"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var defaut_service_1 = require("../../service/defaut.service");
var AjoutdefautComponent = (function () {
    function AjoutdefautComponent(route, defautService, router) {
        this.route = route;
        this.defautService = defautService;
        this.router = router;
        this.model = {
            progression: "New"
        };
    }
    AjoutdefautComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    AjoutdefautComponent.prototype.save = function (model) {
        model.lot_idlot = 2;
        console.log(model);
        this.defautService.save(model);
        this.router.navigate(['home/defaut']);
    };
    AjoutdefautComponent.prototype.godefaut = function () {
        this.router.navigate(['defaut']);
    };
    AjoutdefautComponent.prototype.gohome = function () {
        this.router.navigate(['home']);
    };
    return AjoutdefautComponent;
}());
AjoutdefautComponent = __decorate([
    core_1.Component({
        selector: 'ajoutdefaut',
        styleUrls: ['./ajoutdefaut.component.css'],
        templateUrl: './ajoutdefaut.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, defaut_service_1.DefautService, router_1.Router])
], AjoutdefautComponent);
exports.AjoutdefautComponent = AjoutdefautComponent;
//# sourceMappingURL=ajoutdefaut.component.js.map