function getParameter() {
  var x = document.URL;
  var strings = x.split("?");
  if (strings.length != 1) {
    var coll = document.getElementsByClassName("collapsible");
    var id = parseInt(strings[1]);
    console.log(id);
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
  }
}
