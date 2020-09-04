function calculateSpacing() {
  var sW = screen.width;
  var sH = screen.height;
  var w = window.innerWidth;
  var h = window.innerHeight;

  var topbar = document.getElementsByClassName("topbar");
  var logo = document.getElementById("logo");
  var ultopbar = document.getElementsByClassName("ultopbar");
  var main = document.getElementsByClassName("main");
  var legalmain = document.getElementsByClassName("legalmain");

  if (w < sW && w > 750) {
    logo.style.left = "25px";
    topbar[0].style.height = "75px";
    ultopbar[0].style.top = "25px";
    ultopbar[0].style.left = (25 + (300 * (sW - w)) / sW).toString() + "px";
    ultopbar[0].style.right = "0";
    ultopbar[0].style.width = "500px";
    if (main.length != 0) main[0].style.top = "75px";
    if (legalmain.length != 0) legalmain[0].style.top = "75px";
  } else if (w <= 750) {
    topbar[0].style.height = "130px";
    logo.style.left = w / 2 - 100 + "px";
    ultopbar[0].style.top = "75px";
    ultopbar[0].style.left = "50px";
    ultopbar[0].style.width = "500px";
    if (w < 550) {
      if (w < 400) {
        ultopbar[0].style.width = 330 + "px";
      } else {
        ultopbar[0].style.width = 500 + "px";
      }
      ultopbar[0].style.left = (50 * w) / 550 / 2 + "px";
    } else {
      ultopbar[0].style.width = "500px";
    }
    ultopbar[0].style.right = "0";
    if (main.length != 0) main[0].style.top = "125px";
    if (legalmain.length != 0) legalmain[0].style.top = "125px";
  } else {
    logo.style.left = "25px";
    topbar[0].style.height = "75px";
    ultopbar[0].style.top = "25px";
    ultopbar[0].style.left = "50px";
    ultopbar[0].style.width = "500px";

    ultopbar[0].style.right = "0";
    if (main.length != 0) main[0].style.top = "75px";
    if (legalmain.length != 0) legalmain[0].style.top = "75px";
  }
}
