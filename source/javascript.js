var header_state=0;

function logoClick () {  
             
    if (document.body.clientWidth>767) {
        document.getElementById('hover_border').classList.add('open');
              
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
        document.getElementById('hover_border').classList.remove('open');
        
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


function borderOn() {  
    if (document.body.clientWidth>767) {
    document.getElementById('hover_border').style="border-top:90px solid #f4f4f4; border-right:50px solid #f4f4f4; border-bottom:50px solid #f4f4f4; border-left:50px solid #f4f4f4;";
    }
}  
    
function borderOff() {
    if (document.body.clientWidth>767) {
    document.getElementById('hover_border').style="border-top:0px solid #f4f4f4; border-right:0px solid #f4f4f4; border-bottom:0px solid #f4f4f4; border-left: 0px solid #f4f4f4;";
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("logo_wrap").style="top:52px; opacity:1;";
    } else {
        document.getElementById("logo_wrap").style="top:-74px; opacity:0;";
    }
        prevScrollpos = currentScrollPos;
}