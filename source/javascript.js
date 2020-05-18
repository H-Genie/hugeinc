var header_state=0;

function logoClick () {
    if (document.body.clientWidth>767) {

        if (header_state==0) {
            document.getElementById("section_header").style="height:440px;";
            document.getElementById("main_extend").style="padding-top:440px";
            document.getElementById("logo_wrap2").style="display:flex;";
            document.getElementById("logo_wrap").style="display:none;";
            header_state=1;
        }
    }

        else {
            if (header_state==0) {
                document.getElementById("section_header").style="height:65vh";
                document.getElementById("main_extend").style="padding-top:440px";
                document.getElementById("logo_wrap2").style="display:flex;";
                document.getElementById("logo_wrap").style="display:none;";
                header_state=1;
            }
        }
    }

function logo2Click () {
    if (document.body.clientWidth>767) {

        if (header_state==1) {
            document.getElementById("section_header").style="height:0px;";
            document.getElementById("main_extend").style="padding-top:0px";
            document.getElementById("logo_wrap").style="display:flex;";
            document.getElementById("logo_wrap2").style="display:none;";
            header_state=0;
        }
    }

        else {
            if (header_state==1) {
                document.getElementById("section_header").style="height:0px;";
            document.getElementById("main_extend").style="padding-top:0px";
            document.getElementById("logo_wrap").style="display:flex;";
            document.getElementById("logo_wrap2").style="display:none;";
            header_state=0;
            }
        }
    }