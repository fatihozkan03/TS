function deger(x: number): number {
    return x;
}

function deger2(x: string): string {
    return x;
}

let sayi = deger(10)
console.log(sayi)

let sehir = deger2("ankara")
console.log(sehir)

function deger3<T>(x:T):T{
    console.log(x)
    return x;
}

let sayi3 = deger3<number>(2)
let sehir3 = deger3<string>("izmir")