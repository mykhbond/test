const express = require('express');// подключение express
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');//Для получения
                                          // форм из запроса
const htmlPdf = require('html-pdf');//Do tworzenia pliku pdf
const fs = require('fs');
const dateFormatter = require('./src/assets/js/dateFormatter')
const factura = require('./src/app/model/faktura')
const product = require('./src/app/model/product')
const app = express();// tworzymy Aplikację Express//
                      // создаем объект приложения
const urlencodedParser = bodyParser.urlencoded({
    extended: true,
})
app.use(urlencodedParser);
exphbs.register
app.engine('handlebars', exphbs({
    partialsDir: __dirname + '/views/partials'
}));// silnika widoku Handlebars
app.set('view engine', 'handlebars');

const port = 3000;
//обрабатываем GET-запросы протокола HTTP и позволяем связать маршруты с определенными обработчиками.
// Для этого первым параметром передается маршрут, а вторым - обработчик,
// который будет вызываться, если запрос к серверу соответствует данному маршруту
//Маршрут "/" представляет корневой маршрут.
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/app', 'homePage.html'));


});

app.get('/post-app.get', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/app/', 'post.html'));

});


app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/app', 'aboutUs.html'));

});

app.get('/hello', (req, res) => {

    res.send('Hello1111');

});
app.get('/style', (req, res) => {


    res.sendFile(path.resolve(__dirname, 'src/assets/css', 'homePage.css'));

});

app.post('/post-app', (req, res) => {
    let f = factura.Factura(req.body)
    let p = product.Product(req.body)
    // let dp = datePyament(dateFormatterPayment(date))
    f.setProduct(p);

    res.render('faktura', {
        // hello:'super',

        layout: false,
        maxDatePayment:dateFormatter.addDaysToDateReturnDateAsString(7,new Date(f.dateBuy1)),

        numer: f.numer,
        adress: f.adress,
        kodPocztowy1: f.kodPocztowy,

        dateBuy: f.dateBuy1,
        productName1: f.product19.name,
        id: f.product19.id,
        cost1: f.product19.cost,
        quantity: f.product19.quantity,
        wartoscNetto: f.product19.cost * f.product19.quantity,

        kwotaNetto: f.product19.cost * f.product19.quantity * 0.23,
        wartoscBrutto: (f.product19.cost * f.product19.quantity) + (f.product19.cost * f.product19.quantity * 0.23)


    }, (err, html) => {
        if (err) {
            console.log("ERROR:" + err);
        }
        // console.log("dateBuy===" +9999999);
        let options = {format: "A4"}
        htmlPdf.create(html, options)
            .toFile(path.join(__dirname, "assets", "pdf-upload", "test.pdf")
                , (err, data) => {
                    if (!err) {

                        res.sendFile(data.filename, () => {
                            fs.unlink(data.filename, (err) => {
                                if (err) {
                                    console.log("error on delete:" + err)
                                }
                                // console.log("done");
                                // console.log("dirname:"+__dirname)
                                res.end()
                            })
                        })
                    }
                    // console.log("DATAaaaa:\n" + JSON.stringify(data));
                    // console.log("data.filename:\n" + data.filename);
                    // console.log("ERROR:" + err);
                    // console.log("wremia"+result)
                })
        // console.log("dateBuy====="+ ${dateBuy} );
    });

});


app.listen(port, () => {
    console.log(`Example index.js listening on port ${port}!`);//Przykładowa aplikacja
    // nasłuchująca na porcie 3000!

});

// console.log("wremia"+result)
// let num = Math.random();
// console.log(" num===" + num);
// num = num * 100;
// console.log(" num * 100===" + num);
// //1, 0.01 0.99, 0.00, 0.3333333
// let banknotes = Math.floor(num);
// let coins = num - banknotes;
// coins = Math.floor(coins * 100);
// if (coins < 10) {
//     coins = "0" + coins;
// }
//
// console.log(banknotes + "," + coins + " zl");



