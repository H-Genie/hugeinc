var header = 0;

function logoClick () {
    if (header==0) {
        document.getElementById("section_header").style="visibility:visible;";
        header=1;
    }
    else {
        document.getElementById("section_header").style="visibility:hidden;";
        header=0;
    }
}