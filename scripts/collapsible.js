function collapsibleLoad() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("colActive");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.padding = "0 20px";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "20px 20px";
      }
    });
  }
}
