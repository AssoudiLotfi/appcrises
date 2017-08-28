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
var lot_service_1 = require("../service/lot.service");
var Subject_1 = require("rxjs/Subject");
var LotComponent = (function () {
    function LotComponent(route, router, lotService) {
        this.route = route;
        this.router = router;
        this.lotService = lotService;
        this.loading = false;
        this.searchTerm$ = new Subject_1.Subject();
    }
    LotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.idcrise = +params['idcrise'];
            _this.loading = true;
            if (_this.idcrise) {
                _this.lotService.getLotByIdCrise(_this.idcrise)
                    .subscribe(function (response) { return _this.getdata = response; });
                console.log(_this.getdata);
            }
            else {
                _this.lotService.getListLot()
                    .subscribe(function (response) {
                    _this.getdata = response;
                    console.log(_this.getdata);
                }, function (error) { return console.log("error : " + error); });
            }
        });
    };
    LotComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LotComponent.prototype.goAjoutlot = function () {
        this.router.navigate(['home/ajoutlot']);
    };
    LotComponent.prototype.doSomething = function () {
    };
    return LotComponent;
}());
LotComponent = __decorate([
    core_1.Component({
        selector: 'lot',
        styleUrls: ['./lot.component.css'],
        templateUrl: './lot.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, lot_service_1.LotService])
], LotComponent);
exports.LotComponent = LotComponent;
//# sourceMappingURL=lot.component.js.map