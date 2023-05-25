var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LiberoProf = /** @class */ (function () {
    function LiberoProf(ReddAnnuo, codRett, TasseIrpef, TasseInps) {
        this.ReddAnnuo = ReddAnnuo;
        this.codRett = codRett;
        this.TasseIrpef = TasseIrpef;
        this.TasseInps = TasseInps;
    }
    return LiberoProf;
}());
var Artigiano = /** @class */ (function () {
    function Artigiano(ReddAnnuo, codRett, TasseIrpef, TasseInps) {
        this.ReddAnnuo = ReddAnnuo;
        this.codRett = codRett;
        this.TasseIrpef = TasseIrpef;
        this.TasseInps = TasseInps;
    }
    return Artigiano;
}());
var Commerciante = /** @class */ (function () {
    function Commerciante(ReddAnnuo, codRett, TasseIrpef, TasseInps) {
        this.ReddAnnuo = ReddAnnuo;
        this.codRett = codRett;
        this.TasseIrpef = TasseIrpef;
        this.TasseInps = TasseInps;
    }
    return Commerciante;
}());
var AnnuoNettoProf = /** @class */ (function (_super) {
    __extends(AnnuoNettoProf, _super);
    function AnnuoNettoProf(ReddAnnuo, codRett, TasseIrpef, TasseInps) {
        return _super.call(this, ReddAnnuo, codRett, TasseIrpef, TasseInps) || this;
    }
    AnnuoNettoProf.prototype.getUtileTasse = function () {
        return this.ReddAnnuo * this.codRett / 100;
    };
    AnnuoNettoProf.prototype.getTasseInps = function () {
        return this.getUtileTasse() * this.TasseInps / 100;
    };
    AnnuoNettoProf.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.TasseIrpef / 100;
    };
    AnnuoNettoProf.prototype.getReddAnnuoNetto = function () {
        return this.ReddAnnuo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return AnnuoNettoProf;
}(LiberoProf));
var reddprof = new AnnuoNettoProf(27500, 78, 5, 25.72);
var utiltassprof = reddprof.getUtileTasse();
console.log('\n');
console.log('utile tasse professionista:' + utiltassprof + '€');
var tassinpsprof = reddprof.getTasseInps();
var tassirpefprof = reddprof.getTasseIrpef();
var reddannuoprof = reddprof.getReddAnnuoNetto();
console.log('tasse inps professionista:' + tassinpsprof + '€');
console.log('tasse irpef professionista:' + tassirpefprof + '€');
console.log('reddito annuo netto professionista:' + reddannuoprof + '€');
console.log('-------------------------------------------------');
var AnnuoNettoArt = /** @class */ (function (_super) {
    __extends(AnnuoNettoArt, _super);
    function AnnuoNettoArt(RedditoAnnuo, codRett, TasseIrpef, TasseInps) {
        return _super.call(this, RedditoAnnuo, codRett, TasseIrpef, TasseInps) || this;
    }
    AnnuoNettoArt.prototype.getUtileTasse = function () {
        return this.ReddAnnuo * this.codRett / 100;
    };
    AnnuoNettoArt.prototype.getTasseInps = function () {
        return this.TasseInps;
    };
    AnnuoNettoArt.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.TasseIrpef / 100;
    };
    AnnuoNettoArt.prototype.getReddAnnuoNetto = function () {
        return this.ReddAnnuo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return AnnuoNettoArt;
}(Artigiano));
var artigiano = new AnnuoNettoArt(67500, 67, 15, 3500);
var utiltassart = artigiano.getUtileTasse();
console.log('utile tasse artigiano:' + utiltassart + '€');
var tassinpsart = artigiano.getTasseInps();
var tassirpefart = artigiano.getTasseIrpef();
var reddannuoart = artigiano.getReddAnnuoNetto();
console.log('tasse inps artigiano:' + tassinpsart + '€');
console.log('tasse irpef artigiano:' + tassirpefart + '€');
console.log('reddito annuo netto artigiano:' + reddannuoart + '€');
console.log('-------------------------------------------------');
var AnnuoNettoComm = /** @class */ (function (_super) {
    __extends(AnnuoNettoComm, _super);
    function AnnuoNettoComm(RedditoAnnuo, codRett, TasseIrpef, TasseInps) {
        return _super.call(this, RedditoAnnuo, codRett, TasseIrpef, TasseInps) || this;
    }
    AnnuoNettoComm.prototype.getUtileTasse = function () {
        return this.ReddAnnuo * this.codRett / 100;
    };
    AnnuoNettoComm.prototype.getTasseInps = function () {
        return this.TasseInps;
    };
    AnnuoNettoComm.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.TasseIrpef / 100;
    };
    AnnuoNettoComm.prototype.getReddAnnuoNetto = function () {
        return this.ReddAnnuo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return AnnuoNettoComm;
}(Commerciante));
var commerciante = new AnnuoNettoComm(97500, 40, 15, 3500);
var utiltasscomm = commerciante.getUtileTasse();
console.log('utile tasse commerciante:' + utiltasscomm + '€');
var tassinpscomm = commerciante.getTasseInps();
var tassirpefcomm = commerciante.getTasseIrpef();
var reddannuocomm = commerciante.getReddAnnuoNetto();
console.log('tasse inps commerciante:' + tassinpscomm + '€');
console.log('tasse irpef commerciante:' + tassirpefcomm + '€');
console.log('reddito annuo netto commerciante:' + reddannuocomm + '€');
