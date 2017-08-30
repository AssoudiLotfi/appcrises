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
var crise_service_1 = require("../../service/crise.service");
var AjoutcriseComponent = (function () {
    function AjoutcriseComponent(route, router, criseService) {
        this.route = route;
        this.router = router;
        this.criseService = criseService;
        this.model = {
            progression: "New"
        };
    }
    AjoutcriseComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    AjoutcriseComponent.prototype.save = function (model) {
        model.usine_idusine = JSON.parse(localStorage.getItem('currentUser')).usine_idusine;
        console.log(model);
        this.criseService.save(model);
        this.router.navigate(['home/crise']);
    };
    AjoutcriseComponent.prototype.godefaut = function () {
        this.router.navigate(['defaut']);
    };
    AjoutcriseComponent.prototype.gohome = function () {
        this.router.navigate(['home/crise']);
    };
    return AjoutcriseComponent;
}());
AjoutcriseComponent = __decorate([
    core_1.Component({
        selector: 'ajoutcrise',
        styleUrls: ['./ajoutcrise.component.css'],
        templateUrl: './ajoutcrise.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, crise_service_1.CriseService])
], AjoutcriseComponent);
exports.AjoutcriseComponent = AjoutcriseComponent;
//# sourceMappingURL=ajoutcrise.component.js.map