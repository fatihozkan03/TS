var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(odasayisi, pencereSayisi, katSayisi) {
        this._odaSayisi = odasayisi;
        this._pencereSayisi = pencereSayisi;
        this._katSayisi = katSayisi;
    }
    Ev.prototype.yemekYe = function () {
        console.log('Yemek yeniyor. Kat: ' + this._katSayisi);
    };
    return Ev;
}());
var ev = new Ev(3, 6, 2);
ev.yemekYe();
console.log('Oda Sayısı: ' + ev._odaSayisi);
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Kisi.prototype.kaydet = function () {
        console.log('Kişi kaydedildi.');
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satisYap = function () {
        console.log('Satis yapildi.');
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log('Maaş ödendi.');
    };
    return Personel;
}(Kisi));
var musteri = new Musteri();
musteri.kaydet();
musteri.satisYap();
var personel = new Personel();
personel.kaydet();
personel.maasOde();
