function utcMinus6() { //함수이름 바꾸기
    var date = new Date();
    var hour=date.getHours()-13; //표준시 바꾸기
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var remainSeconds=60000-(seconds*1000);        

    for (i=0; i<document.getElementsByClassName('utc-6').length; i++) //클래스네임바꾸기

    if(hour>12) {
        if(minutes<10) {                
            document.getElementsByClassName('utc-6')[i].innerHTML=(hour-12)+" : "+("0"+minutes)+" PM";
        }
        else {                   
            document.getElementsByClassName('utc-6')[i].innerHTML=(hour-12)+" : "+minutes+" PM";
        }
    }

    else if(hour==12) {
        if(minutes<10) {                 
            document.getElementsByClassName('utc-6')[i].innerHTML=hour+" : "+("0"+minutes)+" PM";
        }
        else {              
            document.getElementsByClassName('utc-6')[i].innerHTML=hour+" : "+minutes+" PM";
         }
    }

    else if(hour==0) {
        if(minutes<10) {                 
            document.getElementsByClassName('utc-6')[i].innerHTML=12+" : "+("0"+minutes)+" AM";
        }
        else {              
            document.getElementsByClassName('utc-6')[i].innerHTML=12+" : "+minutes+" AM";
         }
    }

    else {
        if(minutes<10) {                  
            document.getElementsByClassName('utc-6')[i].innerHTML=hour+" : "+("0"+minutes)+" AM";
        }
        else {                 
            document.getElementsByClassName('utc-6')[i].innerHTML=hour+" : "+minutes+" AM";
         }
    }
}

utcMinus6(); //

function updateUtcMinus6() { //함수이름 바꾸기
    var date = new Date();            
    var seconds=date.getSeconds();
    var remainSeconds=60000-(seconds*1000);

    utcMinus6(); //
    setTimeout(utcMinus6, remainSeconds); //
    setTimeout(oneMinutes,remainSeconds);

        function oneMinutes() {
        setInterval(utcMinus6,60000); //
         }
}

updateUtcMinus6();

//////////////////////////////////////////////////////////////////////////////////////////

function utcMinus5() { //함수이름 바꾸기
    var date = new Date();
    var hour=date.getHours()-15; //표준시 바꾸기
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var remainSeconds=60000-(seconds*1000);        

    for (i=0; i<document.getElementsByClassName('utc-5').length; i++) //클래스네임바꾸기

    if(hour>12) {
        if(minutes<10) {                
            document.getElementsByClassName('utc-5')[i].innerHTML=(hour-12)+" : "+("0"+minutes)+" PM";
        }
        else {                   
            document.getElementsByClassName('utc-5')[i].innerHTML=(hour-12)+" : "+minutes+" PM";
        }
    }

    else if(hour==12) {
        if(minutes<10) {                 
            document.getElementsByClassName('utc-5')[i].innerHTML=hour+" : "+("0"+minutes)+" PM";
        }
        else {              
            document.getElementsByClassName('utc-5')[i].innerHTML=hour+" : "+minutes+" PM";
         }
    }

    else if(hour==0) {
        if(minutes<10) {                 
            document.getElementsByClassName('utc-5')[i].innerHTML=12+" : "+("0"+minutes)+" AM";
        }
        else {              
            document.getElementsByClassName('utc-5')[i].innerHTML=12+" : "+minutes+" AM";
         }
    }

    else {
        if(minutes<10) {                  
            document.getElementsByClassName('utc-5')[i].innerHTML=hour+" : "+("0"+minutes)+" AM";
        }
        else {                 
            document.getElementsByClassName('utc-5')[i].innerHTML=hour+" : "+minutes+" AM";
         }
    }
}

utcMinus5(); //

function updateUtcMinus5() { //함수이름 바꾸기
    var date = new Date();            
    var seconds=date.getSeconds();
    var remainSeconds=60000-(seconds*1000);

    utcMinus5(); //
    setTimeout(utcMinus5, remainSeconds); //
    setTimeout(oneMinutes,remainSeconds);

        function oneMinutes() {
        setInterval(utcMinus5,60000); //
         }
}

updateUtcMinus5();

//////////////////////////////////////////////////////////////////////////////////////////


function utc0() { //함수이름 바꾸기
    var date = new Date();
    var hour=date.getHours()-8; //표준시 바꾸기
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var remainSeconds=60000-(seconds*1000);        

    for (i=0; i<document.getElementsByClassName('utc0').length; i++) //클래스네임바꾸기

    if(hour>12) {
        if(minutes<10) {                
            document.getElementsByClassName('utc0')[i].innerHTML=(hour-12)+" : "+("0"+minutes)+" PM";
        }
        else {                   
            document.getElementsByClassName('utc0')[i].innerHTML=(hour-12)+" : "+minutes+" PM";
        }
    }

    else if(hour==12) {
        if(minutes<10) {                 
            document.getElementsByClassName('utc0')[i].innerHTML=hour+" : "+("0"+minutes)+" PM";
        }
        else {              
            document.getElementsByClassName('utc0')[i].innerHTML=hour+" : "+minutes+" PM";
         }
    }

    else if(hour==0) {
        if(minutes<10) {                 
            document.getElementsByClassName('utc0')[i].innerHTML=12+" : "+("0"+minutes)+" AM";
        }
        else {              
            document.getElementsByClassName('utc0')[i].innerHTML=12+" : "+minutes+" AM";
         }
    }

    else {
        if(minutes<10) {                  
            document.getElementsByClassName('utc0')[i].innerHTML=hour+" : "+("0"+minutes)+" AM";
        }
        else {                 
            document.getElementsByClassName('utc0')[i].innerHTML=hour+" : "+minutes+" AM";
         }
    }
}

utc0(); //

function updateUtc0() { //함수이름 바꾸기
    var date = new Date();            
    var seconds=date.getSeconds();
    var remainSeconds=60000-(seconds*1000);

    utcMinus5(); //
    setTimeout(utc0, remainSeconds); //
    setTimeout(oneMinutes,remainSeconds);

        function oneMinutes() {
        setInterval(utc0,60000); //
         }
}

updateUtc0();

//////////////////////////////////////////////////////////////////////////////////////////

function utcMinus8() { //함수이름 바꾸기
    var date = new Date();
    var hour=date.getHours()-17; //표준시 바꾸기
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var remainSeconds=60000-(seconds*1000);        

    for (i=0; i<document.getElementsByClassName('utc-8').length; i++) //클래스네임바꾸기

    if(hour>12) {
        if(minutes<10) {                
            document.getElementsByClassName('utc-8')[i].innerHTML=(hour-12)+" : "+("0"+minutes)+" PM";
        }
        else {                   
            document.getElementsByClassName('utc-8')[i].innerHTML=(hour-12)+" : "+minutes+" PM";
        }
    }

    else if(hour==12) {
        if(minutes<10) {                 
            document.getElementsByClassName('utc-8')[i].innerHTML=hour+" : "+("0"+minutes)+" PM";
        }
        else {              
            document.getElementsByClassName('utc-8')[i].innerHTML=hour+" : "+minutes+" PM";
         }
    }

    else if(hour==0) {
        if(minutes<10) {                 
            document.getElementsByClassName('utc-8')[i].innerHTML=12+" : "+("0"+minutes)+" AM";
        }
        else {              
            document.getElementsByClassName('utc-8')[i].innerHTML=12+" : "+minutes+" AM";
         }
    }

    else {
        if(minutes<10) {                  
            document.getElementsByClassName('utc-8')[i].innerHTML=hour+" : "+("0"+minutes)+" AM";
        }
        else {                 
            document.getElementsByClassName('utc-8')[i].innerHTML=hour+" : "+minutes+" AM";
         }
    }
}

utcMinus8(); //

function updateUtcMinus8() { //함수이름 바꾸기
    var date = new Date();            
    var seconds=date.getSeconds();
    var remainSeconds=60000-(seconds*1000);

    utcMinus8(); //
    setTimeout(utcMinus8, remainSeconds); //
    setTimeout(oneMinutes,remainSeconds);

        function oneMinutes() {
        setInterval(utcMinus8,60000); //
         }
}

updateUtcMinus8();

//////////////////////////////////////////////////////////////////////////////////////////

function utcPlus8() { //함수이름 바꾸기
    var date = new Date();
    var hour=date.getHours()-1; //표준시 바꾸기
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var remainSeconds=60000-(seconds*1000);        

    for (i=0; i<document.getElementsByClassName('utc+8').length; i++) //클래스네임바꾸기

    if(hour>12) {
        if(minutes<10) {                
            document.getElementsByClassName('utc+8')[i].innerHTML=(hour-12)+" : "+("0"+minutes)+" PM";
        }
        else {                   
            document.getElementsByClassName('utc+8')[i].innerHTML=(hour-12)+" : "+minutes+" PM";
        }
    }

    else if(hour==12) {
        if(minutes<10) {                 
            document.getElementsByClassName('utc+8')[i].innerHTML=hour+" : "+("0"+minutes)+" PM";
        }
        else {              
            document.getElementsByClassName('utc+8')[i].innerHTML=hour+" : "+minutes+" PM";
         }
    }

    else if(hour==0) {
        if(minutes<10) {                 
            document.getElementsByClassName('utc+8')[i].innerHTML=12+" : "+("0"+minutes)+" AM";
        }
        else {              
            document.getElementsByClassName('utc+8')[i].innerHTML=12+" : "+minutes+" AM";
         }
    }

    else {
        if(minutes<10) {                  
            document.getElementsByClassName('utc+8')[i].innerHTML=hour+" : "+("0"+minutes)+" AM";
        }
        else {                 
            document.getElementsByClassName('utc+8')[i].innerHTML=hour+" : "+minutes+" AM";
         }
    }
}

utcPlus8(); //

function updateUtcPlus8() { //함수이름 바꾸기
    var date = new Date();            
    var seconds=date.getSeconds();
    var remainSeconds=60000-(seconds*1000);

    utcPlus8(); //
    setTimeout(utcPlus8, remainSeconds); //
    setTimeout(oneMinutes,remainSeconds);

        function oneMinutes() {
        setInterval(utcPlus8,60000); //
         }
}

updateUtcPlus8();

//////////////////////////////////////////////////////////////////////////////////////////

function utcPlus9() { //함수이름 바꾸기
    var date = new Date();
    var hour=date.getHours(); //표준시 바꾸기
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var remainSeconds=60000-(seconds*1000);        

    for (i=0; i<document.getElementsByClassName('utc+9').length; i++) //클래스네임바꾸기

    if(hour>12) {
        if(minutes<10) {                
            document.getElementsByClassName('utc+9')[i].innerHTML=(hour-12)+" : "+("0"+minutes)+" PM";
        }
        else {                   
            document.getElementsByClassName('utc+9')[i].innerHTML=(hour-12)+" : "+minutes+" PM";
        }
    }

    else if(hour==12) {
        if(minutes<10) {                 
            document.getElementsByClassName('utc+9')[i].innerHTML=hour+" : "+("0"+minutes)+" PM";
        }
        else {              
            document.getElementsByClassName('utc+9')[i].innerHTML=hour+" : "+minutes+" PM";
         }
    }

    else if(hour==0) {
        if(minutes<10) {                 
            document.getElementsByClassName('utc+9')[i].innerHTML=12+" : "+("0"+minutes)+" AM";
        }
        else {              
            document.getElementsByClassName('utc+9')[i].innerHTML=12+" : "+minutes+" AM";
         }
    }

    else {
        if(minutes<10) {                  
            document.getElementsByClassName('utc+9')[i].innerHTML=hour+" : "+("0"+minutes)+" AM";
        }
        else {                 
            document.getElementsByClassName('utc+9')[i].innerHTML=hour+" : "+minutes+" AM";
         }
    }
}

utcPlus9(); //

function updateUtcPlus9() { //함수이름 바꾸기
    var date = new Date();            
    var seconds=date.getSeconds();
    var remainSeconds=60000-(seconds*1000);

    utcPlus9(); //
    setTimeout(utcPlus9, remainSeconds); //
    setTimeout(oneMinutes,remainSeconds);

        function oneMinutes() {
        setInterval(utcPlus9,60000); //
         }
}

updateUtcPlus9();

//////////////////////////////////////////////////////////////////////////////////////////