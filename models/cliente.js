"use strict";
var Camara = /** @class */ (function () {
    function Camara(nombre, precioMax, direccion) {
        this.equipos = new Array();
        this.nombre = nombre;
        this.precioMax = precioMax;
        this.direccion = direccion;
    }
    Camara.prototype.addEquipo = function (Equipo) {
        this.equipos.push(Equipo);
    };
    Object.defineProperty(Camara.prototype, "totalPrecioEquipos", {
        get: function () {
            var total = 0;
            for (var _i = 0, _a = this.equipos; _i < _a.length; _i++) {
                var equipo = _a[_i];
                total += equipo.precioEnfriador;
            }
            return total;
        },
        enumerable: false,
        configurable: true
    });
    return Camara;
}());
