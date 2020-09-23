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
      var colap = document.getElementsByClassName("collapsible");
      var bar = document.getElementsByClassName("bottombar")[0];
      var combinedHeight = 0;
      for (x = 0; x < colap.length; x++) {
        if (colap[x].nextElementSibling.style.maxHeight) {
          combinedHeight += colap[x].nextElementSibling.scrollHeight;
        }
      }
      bar.style.bottom = "-" + (200 + combinedHeight) + "px";
    });
  }
}
