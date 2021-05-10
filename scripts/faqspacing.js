function faqspacing() {
  var bottombar = document.getElementsByClassName("bottombar")[0];
  var div = document.getElementsByClassName("faq-container")[0];
  var height = 0;
  for (var i = 0; i < div.childElementCount; i++) {
    height += div.children[i].clientHeight;
  }

  bottombar.style.bottom = Math.min(-80, outerHeight / 2 - height - 100) + "px";
}
