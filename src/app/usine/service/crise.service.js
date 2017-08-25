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
var CriseService = (function () {
    function CriseService(http) {
        this.http = http;
    }
    CriseService.prototype.getCriseListByUsine = function (idusine) {
        return this.http.get('http://localhost:8080/GestionCrise/rest/crise/byUsine/' + idusine)
            .map(function (res) { return res.json(); });
    };
    CriseService.prototype.delete = function (idcrise) {
        return this.http.delete('http://localhost:8080/GestionCrise/rest/crise/byid/' + idcrise)
            .subscribe(function (ok) { console.log(ok); });
    };
    CriseService.prototype.save = function (crise) {
        return this.http.post('http://localhost:8080/GestionCrise/rest/crise/savecrise', crise)
            .map(function (data) { return data.json(); });
    };
    return CriseService;
}());
CriseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CriseService);
exports.CriseService = CriseService;
//# sourceMappingURL=crise.service.js.map