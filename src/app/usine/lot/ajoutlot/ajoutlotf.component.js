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
var lot_service_1 = require("../../service/lot.service");
var AjoutlotComponent = (function () {
    function AjoutlotComponent(route, lotService, router) {
        this.route = route;
        this.lotService = lotService;
        this.router = router;
        this.model = {
            progression: "New"
        };
    }
    AjoutlotComponent.prototype.ngOnInit = function () {
    };
    AjoutlotComponent.prototype.save = function (model) {
        model.crise_idcrise = 31;
        this.lotService.save(model);
        this.router.navigate(['home/lot']);
    };
    AjoutlotComponent.prototype.gohome = function () {
        this.router.navigate(['home']);
    };
    AjoutlotComponent.prototype.golot = function () {
        this.router.navigate(['home/lot']);
    };
    return AjoutlotComponent;
}());
AjoutlotComponent = __decorate([
    core_1.Component({
        selector: 'Ajoutlot',
        styleUrls: ['./ajoutlot.component.css'],
        templateUrl: './ajoutlot.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, lot_service_1.LotService, router_1.Router])
], AjoutlotComponent);
exports.AjoutlotComponent = AjoutlotComponent;
//# sourceMappingURL=ajoutlotf.component.js.map