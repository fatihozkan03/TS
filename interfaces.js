var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    console.log(product.name + " kaydedildi.");
}
save({ id: 1, name: "laptop", unitPrice: 3 });
function save2(product2) {
    console.log(product2.name + " kaydedildi.");
}
var mouse = new Product2();
mouse.name = "ATech";
save2(mouse);
