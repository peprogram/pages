window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("fix").style.padding = "0";
    document.getElementById("head").style.position = "fixed";
    document.getElementById("main").style.marginTop = "30vh";
    document.getElementById("head").style.transition = "height 2s";
    // document.getElementById("main").style.transition = "all 0.3s linear";
    if (screen.width<=560) {
      document.getElementById("hb").style.display = "none";
      document.getElementById("fix").style.marginBottom = "-10px";
    }
  } else {
    document.getElementById("head").style.position = "static";
    document.getElementById("fix").style.padding = "10px 0";
    document.getElementById("fix").style.marginBottom = "0px";
    document.getElementById("main").style.marginTop = "0px";
    document.getElementById("head").style.transition = "none";
    // document.getElementById("main").style.transition = "none";
    document.getElementById("hb").style.display = "block";
  }
}

function hamburger() {
  var x = document.getElementById("smallbar");
  if (x.className === "bar") {
    x.className += " responsive";
  } else {
    x.className = "bar";
  }
}

function drop() {
  var x = document.getElementById("menu");
  if (x.className.indexOf("show") == -1) { 
    x.className += " show";
    x.style.display="block";
  } else {
    x.className = x.className.replace(" show", "");
    x.style.display="none";
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("now");
    } else {
      reveals[i].classList.remove("now");
    }
  }
}
window.addEventListener("scroll", reveal);


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

var dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);