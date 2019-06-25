var loveTimeDiv = document.querySelector('.love-time');
function loveTime (curDate) {
    var date = new Date();
    var year = date.getFullYear(),month = date.getMonth(),day = date.getDate();
    curDate = curDate.split('-');
    var startTime = new Date(curDate[0],(curDate[1]-1),curDate[2],0,0,0);
    var newDate = new Date(year,month,day,0,0,0);
    var loveTime = (newDate.getTime() - startTime.getTime())/86400000
    return loveTime
}
loveTimeDiv.innerHTML = loveTime('2017-08-14')