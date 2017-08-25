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
var defaut_service_1 = require("../service/defaut.service");
var DefautComponent = (function () {
    function DefautComponent(route, router, defautService) {
        this.route = route;
        this.router = router;
        this.defautService = defautService;
        this.loading = false;
    }
    DefautComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.defautService.getDefaultList()
            .subscribe(function (response) {
            _this.getdata = response;
            console.log(_this.getdata);
        }, function (error) { return console.log("error : " + error); });
    };
    DefautComponent.prototype.goAjoutdefaut = function () {
        this.router.navigate(['home/ajoutdefaut']);
    };
    return DefautComponent;
}());
DefautComponent = __decorate([
    core_1.Component({
        selector: 'defaut',
        styleUrls: ['./defaut.component.css'],
        templateUrl: './defaut.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, defaut_service_1.DefautService])
], DefautComponent);
exports.DefautComponent = DefautComponent;
//# sourceMappingURL=defaut.component.js.map