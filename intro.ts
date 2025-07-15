function greeter(name: string) {
    return "merhaba" + name;
}

let mesaj = greeter(' Ali');

console.log(mesaj);

let sayi: number

sayi = 10;
sayi = 10.4;

let sehir: string;
sehir = "İstanbul";

let dogruMu: boolean = false;
dogruMu = true;

let sayilar: number[] = [123,124,125];

let sayilar2 : Array<number> = [123,124,125];

let degerler: (number | string)[] = [123, "Ali", 125, "Veli",2, "Ayşe", "Fatma", "Zeynep", "Mehmet"];

let değerler2: [number, string, boolean] = [123, "Ali", true,];

console.log(degerler[2].toString());

enum Renk {
    Kirmizi = 1,
    Yeşil = 2,
    Mavi = 3}

let renk: Renk = Renk.Kirmizi;

let deger : any = 123;
deger = "ali";

let deger2 : void = undefined;

function selamVer2() : void {
    console.log("Selam");
}

//undifined - null
let yas : number;
yas = 25;

class Musteri{
    
}