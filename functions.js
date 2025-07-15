function topla(x, y) {
    return x + y;
}
function toplaV2(x, y) {
    return x + y;
}
var toplaV3 = function (x, y) {
    return x + y;
};
toplaV2(5, 10);
console.log(topla(5, 10));
console.log(toplaV2(5, 10));
console.log(toplaV3(5, 10));
function toplaV4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(toplaV4(5));
function toplaV6(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(toplaV6(5));
console.log(toplaV6(5, 10));
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return 'Davetli: ' + ilkDavetli + ', ve diğerleri:  ' + digerleri.join(', ');
}
console.log(davetEt('Fatih', 'Ali', 'Ayşe', 'Mehmet'));
