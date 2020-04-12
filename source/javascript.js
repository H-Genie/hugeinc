var header_state=0;

function logoClick () {
    if (header_state==0) {
        document.getElementById("section_header").style="height:440px;";
        header_state=1;
    }
    else {
        document.getElementById("section_header").style="height:0px;";
        header_state=0;
    }
} 