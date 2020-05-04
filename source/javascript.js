var header_state=0;

function logoClick () {
    if (header_state==0) {
        document.getElementById("section_header").style="height:440px;";
        document.getElementById("main_extend").style="padding-top:440px";        
        document.getElementById("logo_wrap").firstElementChild.src="home/img/huge.svg";
        document.getElementById("logo_wrap").firstElementChild.style="width:60px";
        header_state=1;
    }
    else {
        document.getElementById("section_header").style="height:0px;";
        document.getElementById("main_extend").style="padding-top:0px";        
        document.getElementById("logo_wrap").firstElementChild.src="home/img/h.svg";
        document.getElementById("logo_wrap").firstElementChild.style="width:20px";
        header_state=0;
    }
} 