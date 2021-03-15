module.exports.Factura = (data10) => {
    return new Factura(data10);
}
class Factura {
    constructor(data1) {
        this.numer = data1.numer;
        this.region = data1.region;
        this.adress = data1.adress;
        this.kodPocztowy = data1.kodPocztowy;
        this.dateBuy1 = data1.dateBuy;
        console.log("this.numer class factura=" + this.numer);
        console.log("data1.numer class factura=" + data1.numer);
        console.log("data1=" + JSON.stringify(data1));
        console.log("dateBuy====="+this.dateBuy1 );

    }

    setProduct(product) {
        this.product19 = product;

    }
}





