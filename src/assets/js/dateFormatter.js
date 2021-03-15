function dateFormatter(date) {
    //2024-03-01
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return  year + "-" + (month < 10 ? "0" + (month + 1) :
        (month + 1)) + "-" + (day < 10 ? "0" + day : day) ;

}
