function getParameter() {
  var x = document.URL;
  var strings = x.split("?");
  if (strings.length != 1) {
    var coll = document.getElementsByClassName("collapsible");
    var id = parseInt(strings[1]);
    if (id < coll.length) {
      coll[id].classList.toggle("colActive");
      var content = coll[id].nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.padding = "0 20px";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "20px 20px";
      }
    }
    var colap = document.getElementsByClassName("collapsible");
    var bar = document.getElementsByClassName("bottombar")[0];
    var combinedHeight = 0;
    for (x = 0; x < colap.length; x++) {
      if (colap[x].nextElementSibling.style.maxHeight) {
        combinedHeight += colap[x].nextElementSibling.scrollHeight;
      }
    }
    bar.style.bottom = "-" + (200 + combinedHeight) + "px";
  }
}
