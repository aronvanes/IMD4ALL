setInterval(function(){
    if(checkVisible(document.getElementById("quotes"))){
        //console.log("quotes");
        $(".background--1").fadeOut("slow", function(){});
        $(".background--2").fadeOut("slow", function(){});
        $(".background--3").fadeOut("slow", function(){});
        $(".background--4").fadeIn("slow", function(){});
    } else if(checkVisible(document.getElementById("info"))){
        //console.log("info");
        $(".background--1").fadeOut("slow", function(){});
        $(".background--2").fadeIn("slow", function(){});
        $(".background--3").fadeIn("slow", function(){});
        $(".background--4").fadeOut("slow", function(){});
    } else {
        //console.log("home");
        $(".background--1").fadeIn("slow", function(){});
        $(".background--2").fadeOut("slow", function(){});
        $(".background--3").fadeOut("slow", function(){});
        $(".background--4").fadeOut("slow", function(){});
    }
}, 1000);


//source: https://stackoverflow.com/questions/5353934/check-if-element-is-visible-on-screen
function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}