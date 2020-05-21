function hugeTime() {
    var date=new Date();
    var utcHour=date.getUTCHours();
    var utcMin=date.getUTCMinutes();
    var timeZone=[-4,-5,-4,-5,-4,-4,1,-7,-5,-7,8,-4,9]

        //24시간 보정 함수
        function hourAdjustment(a) {
            a=utcHour+a;
            if(a>24) {a-=24;} else if(a<0) {a+=24;}    
            return a;
        }

        //오전오후 판단 함수
        function meridiem(a) { 
            if(a>=12) {b="PM"} else if(a==24 || a==0) {b="AM"} else if(a<12) {b="AM"}    
            return b;
        }

        //분 보정 함수
        function minDigit(a) {
            if(a<10) {a="0"+a;}
            return a;
        }

        //12시간 보정 함수
        function hourAdjustment12(a) {  
            if(a>12) {a-=12;} else if(a==24 || a==0) {a=12;} else if(a<=12) {a=a;}    
            return a;
        }

    for (i=0; i<13; i++) {
        document.getElementsByClassName('hour')[i].innerHTML=hourAdjustment12(hourAdjustment(timeZone[i]));
        document.getElementsByClassName('minutes')[i].innerHTML=minDigit(utcMin);
        document.getElementsByClassName('meridiem')[i].innerHTML=meridiem(hourAdjustment(timeZone[i]));
        

        if(6<=hourAdjustment(timeZone[i]) && hourAdjustment(timeZone[i])<=18) {
            document.getElementsByClassName("office_card")[i].style="color:black; background-color:#fff;";
            document.getElementsByClassName("sign")[i].src="contact/img/am.svg";       
        }
        else {
            document.getElementsByClassName("office_card")[i].style="color:white; background-color:#161616;";
            document.getElementsByClassName("sign")[i].src="contact/img/pm.svg";
        }
    }
}

function updateTime() {
    var date = new Date();            
    var seconds=date.getSeconds();
    var remainSeconds=60000-(seconds*1000);

    hugeTime();
    setTimeout(hugeTime, remainSeconds);
    setTimeout(oneMinutes,remainSeconds);

        function oneMinutes() {
        setInterval(hugeTime,6000);
         }
}

updateTime();