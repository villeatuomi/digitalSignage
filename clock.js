function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let weekday = today.getDay();

    let dayname;

    //console.log(weekday);
    switch (weekday) {
        case 1:
            dayname = 'Maanantai';
            break;

        case 2:
            dayname = 'Tiistai';
            break;

        case 3:
            dayname = 'Keskiviikko';
            break;

        case 4:
            dayname = 'Torstai';
            break;

        case 5:
            dayname = 'Perjantai';
            break;

        case 6:
            dayname = 'Lauantai';
            break;

        case 0:
            dayname = 'Sunnuntai';
            break;
    }

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        dayname+ ' ' + day + '.' + month + '.' + year + ' - ' + h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}