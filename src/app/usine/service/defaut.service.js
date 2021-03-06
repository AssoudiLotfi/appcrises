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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DefautService = (function () {
    function DefautService(http) {
        this.http = http;
    }
    DefautService.prototype.getDefaultList = function () {
        return this.http.get('http://localhost:8080/GestionCrise/rest/defaut/byLot')
            .map(function (res) { return res.json(); });
    };
    DefautService.prototype.getdefautbyLot = function (idlot) {
        return this.http.get('http://localhost:8080/GestionCrise/rest/defaut/ByIdLot/' + idlot)
            .map(function (res) { return res.json(); });
    };
    DefautService.prototype.save = function (defaut) {
        console.log(defaut);
        return this.http.post('http://localhost:8080/GestionCrise/rest/defaut/savedefaut', defaut)
            .subscribe(
        // Successful responses call the first callback.
        function (data) { console.log(data); }, 
        // Errors will call this callback instead:
        function (err) {
            console.log('Something went wrong!', err);
        });
    };
    DefautService.prototype.delete = function (iddefaut) {
        return this.http.delete('http://localhost:8080/GestionCrise/rest/defaut/byid/' + iddefaut)
            .subscribe(function (ok) { console.log(ok); });
    };
    return DefautService;
}());
DefautService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DefautService);
exports.DefautService = DefautService;
//# sourceMappingURL=defaut.service.js.map