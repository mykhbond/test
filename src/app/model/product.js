module.exports.Product = (data) => {
    return new Product(data);

}

class Product {
    constructor(data) {
        this.id = data.idProdukt;
        this.name = data.productName;
        this.VAT = data.VAT;
        this.cost = data.wartoscProduktu;
        this.quantity = data.iloscProduktu;
        console.log("this.name class Product==" + this.name)
        console.log("data.productName class Product==" + data.productName)
        console.log("data.wartoscProduktu==" + data.wartoscProduktu)
    }
}

console.log("this.name class Product===" + this.name)