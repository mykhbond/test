function dateFormatter(date) {
    //2024-03-01
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return year + "-" + (month < 10 ? "0" + (month + 1) :
        (month + 1)) + "-" + (day < 10 ? "0" + day : day);
}

function addDaysToDate(daysToAdd, toDate) {
    if (!toDate) {
        return toDate;
    }
    if (!daysToAdd || daysToAdd < 1) {
        return toDate;
    }
    let dayInMs = 86400000;
    daysToAdd *= dayInMs;
    let newMs = toDate.getTime() + daysToAdd;
    return new Date(newMs);
}
function addDaysToDateReturnDateAsString(daysToAdd, toDate){
    return dateFormatter(addDaysToDate(daysToAdd, toDate))
}
module.exports={
    addDaysToDate:addDaysToDate,
    dateToString:dateFormatter,
    addDaysToDateReturnDateAsString:addDaysToDateReturnDateAsString
}