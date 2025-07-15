interface Product{
    id:number;
    name:string;
    unitPrice:number;

}

class Product2{
    id:number;
    name:string;
    unitPrice:number;

}

function save (product:Product){
    console.log(product.name + " kaydedildi.")
}

save({id:1, name:"laptop",unitPrice:3});

function save2 (product2:Product2){
    console.log(product2.name + " kaydedildi.")
}

let mouse = new Product2();
mouse.name = "ATech"
save2(mouse)

interface PersonalService{
    save():void;
}

class CustomerService implements PersonalService{
    save(): void {
        throw new Error("Method not implemented.");
    }
    
}