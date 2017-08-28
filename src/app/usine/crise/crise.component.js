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
var crise_service_1 = require("../service/crise.service");
var CriseComponent = (function () {
    function CriseComponent(route, router, criseService) {
        this.route = route;
        this.router = router;
        this.criseService = criseService;
        this.loading = false;
    }
    CriseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.criseService.getCriseListByUsine(JSON.parse(localStorage.getItem('currentUser')).usine_idusine)
            .subscribe(function (response) {
            _this.getdata = response;
            console.log(_this.getdata);
        }, function (error) { return console.log("error : " + error); });
    };
    CriseComponent.prototype.delete = function (idcrise) {
        console.log(idcrise);
        this.criseService.delete(idcrise);
    };
    CriseComponent.prototype.savecrise = function () {
    };
    CriseComponent.prototype.refresh = function () {
        this.router.navigate(["crise"]);
    };
    CriseComponent.prototype.goAcrise = function () {
        this.router.navigate(['home/ajoutcrise']);
    };
    CriseComponent.prototype.getLotbyCrise = function (idcrise) {
        this.router.navigate(['home/lot/{idcrise}'], { queryParams: { page: idcrise } });
    };
    CriseComponent.prototype.doSomething = function () {
    };
    return CriseComponent;
}());
CriseComponent = __decorate([
    core_1.Component({
        selector: 'crise',
        styleUrls: ['./crise.component.css'],
        templateUrl: './crise.component.html',
        providers: [crise_service_1.CriseService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
        crise_service_1.CriseService])
], CriseComponent);
exports.CriseComponent = CriseComponent;
//# sourceMappingURL=crise.component.js.map