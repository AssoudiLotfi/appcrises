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
var router_2 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    AppComponent.prototype.gocontact = function () {
        this.router.navigate(['/table']);
    };
    AppComponent.prototype.gocrise = function () {
        this.router.navigate(['/crise']);
    };
    AppComponent.prototype.godefaut = function () {
        this.router.navigate(['/defaut']);
    };
    AppComponent.prototype.golot = function () {
        this.router.navigate(['/lot']);
    };
    AppComponent.prototype.goetude = function () {
        this.router.navigate(['/etude']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: [],
        templateUrl: './app.component.html',
    }),
    __metadata("design:paramtypes", [router_2.ActivatedRoute, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map