"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._tabSejour = [new Sejour('Londres', 200), new Sejour('Moscou', 400), new Sejour('Sydney', 1500)];
    }
    SejourService.prototype.getSejourByName = function (nomSejour) {
        var sejourTrouve;
        for (var _i = 0, _a = this._tabSejour; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.getNom() === nomSejour) {
                sejourTrouve = sejour;
                return sejourTrouve;
            }
        }
        ;
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.getSejourByName('Londres'));
console.log(sejourService.getSejourByName('Tokyo'));
