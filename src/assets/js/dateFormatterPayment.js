// module.exports.dateFormatterPayment(result){
//
// }


function dateFormatterPayment(date) {
    //2024-03-01
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let result = year + "-" + (month < 10 ? "0" + (month + 1) :
        (month + 1)) + "-" + ((day+7) < 10 ? "0" + (day+7) : (day+7)) ;
    // console.log("wremia"+result);
    return result;
}
// {{{dateBuy}}}