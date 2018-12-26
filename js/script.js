var words = [
    "creatief",
    "een ontwerper",
    "een bedenker",
    "een designer",
    "een developer",
    "inovatief",
    "een dromer",
    "een codeur"
];

$(".section--slider__slider").text(words[Math.floor(Math.random()*words.length)]);
setInterval(function(){
    var i = 0;
    var fullWord = $(".section--slider__slider").text();
    var word = fullWord;
    function remove() {
    if (i <= fullWord.length) {
        $(".section--slider__slider").text(word.substring(0, word.length - i));
        word.substring(0, word.length - i);
        i++;
        setTimeout(remove, 50);
      }
    }

    var x = 0;
    var fullWord2 = words[Math.floor(Math.random()*words.length)];
    var word2 = "";
    function type() {
    if (x < fullWord2.length) {
        $(".section--slider__slider").text(word2+fullWord2[x]);
        word2 = word2 + fullWord2[x];
        x++;
        setTimeout(type, 50);
      }
    }

    remove();
    setTimeout(type, 2000);

}, 6000);

setInterval(function(){
    if(checkVisible(document.getElementById("quotes"))){
        //console.log("quotes");
        $(".background--1").fadeOut("slow", function(){});
        $(".background--2").fadeOut("slow", function(){});
        $(".background--3").fadeOut("slow", function(){});
        $(".background--4").fadeIn("slow", function(){});
        $(".header__navigation__element--quotes").addClass("header__navigation__element--selected");
        $(".header__navigation__element--info").removeClass("header__navigation__element--selected");
        $(".header__navigation__element--home").removeClass("header__navigation__element--selected");
    } else if(checkVisible(document.getElementById("info"))){
        //console.log("info");
        $(".background--1").fadeOut("slow", function(){});
        $(".background--2").fadeIn("slow", function(){});
        $(".background--3").fadeIn("slow", function(){});
        $(".background--4").fadeOut("slow", function(){});
        $(".header__navigation__element--info").addClass("header__navigation__element--selected");
        $(".header__navigation__element--quotes").removeClass("header__navigation__element--selected");
        $(".header__navigation__element--home").removeClass("header__navigation__element--selected");
    } else {
        //console.log("home");
        $(".background--1").fadeIn("slow", function(){});
        $(".background--2").fadeOut("slow", function(){});
        $(".background--3").fadeOut("slow", function(){});
        $(".background--4").fadeOut("slow", function(){});
        $(".header__navigation__element--home").addClass("header__navigation__element--selected");
        $(".header__navigation__element--info").removeClass("header__navigation__element--selected");
        $(".header__navigation__element--quotes").removeClass("header__navigation__element--selected");
    }
}, 500);

//source: https://stackoverflow.com/questions/5353934/check-if-element-is-visible-on-screen
function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}