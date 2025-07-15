function topla(x, y) {
    return x + y;
}

function toplaV2(x: number, y: number): number {
    return x + y;

}

let toplaV3 = function (x: number, y: number): number {
    return x + y;
}

toplaV2(5, 10);

console.log(topla(5, 10));
console.log(toplaV2(5, 10));
console.log(toplaV3(5, 10));


function toplaV4(x: number, y: number =4): number {
    return x + y;
}

console.log(toplaV4(5));

function toplaV6(x: number, y?: number): number {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(toplaV6(5));
console.log(toplaV6(5, 10));

function davetEt(ilkDavetli: string, ...digerleri:string[]):string {
    return 'Davetli: ' + ilkDavetli + ', ve diğerleri:  ' + digerleri.join(', ');
}

console.log(davetEt('Fatih', 'Ali', 'Ayşe', 'Mehmet'));