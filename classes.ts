class Ev{
    _odaSayisi: number;
    _pencereSayisi: number;
    _katSayisi: number;
    constructor(odasayisi:number,pencereSayisi:number,katSayisi:number){
        this._odaSayisi = odasayisi;
        this._pencereSayisi = pencereSayisi;
        this._katSayisi = katSayisi;
    }

    yemekYe(){
        console.log('Yemek yeniyor. Kat: ' + this._katSayisi);
    }
}

let ev = new Ev(3, 6, 2);
ev.yemekYe();
console.log('Oda Sayısı: ' + ev._odaSayisi);

class Kisi {
    public sahip: string;
    protected isim: string;
    private soyisim: string;
    kaydet(){
        console.log('Kişi kaydedildi.');
    }
}

class Musteri extends Kisi {
    satisYap(){
        console.log('Satis yapildi.');
    }
}

class Personel extends Kisi {
    maasOde(){
        this.isim = 'Fatih'; // protected özelliğe erişim
        console.log('Maaş ödendi.');
    }
}

let musteri = new Musteri();
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();

personel.sahip = 'Ahmet'; // public özelliğe erişim