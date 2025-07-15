abstract class KrediBase{
    constructor(){

    }
    kaydet(): void{
        console.log("Kaydedildi.")
    }

    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase{
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Tüketici kredisine göre hesaplandı.")
    }
    
}

class MortgageKredi extends KrediBase{
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Mortgage kredisine göre hesaplandı.")
    }
    anotherMethod(): void {
        console.log("Bu mortgage kredisine özel bir metot.")
    }
}

let tuketiciKredisi = new TuketiciKredi();
tuketiciKredisi.kaydet();
tuketiciKredisi.hesapla();

let mortgageKredisi = new MortgageKredi();
mortgageKredisi.kaydet();
mortgageKredisi.hesapla();
mortgageKredisi.anotherMethod();

let kredi : KrediBase;
kredi = new TuketiciKredi();
kredi = new MortgageKredi(); // KrediBase türünde bir referans, MortgageKredi türünde bir nesneye atanabilir.