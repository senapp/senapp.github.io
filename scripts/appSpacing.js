function appSpacing() {
  var w = window.innerWidth;
  var bottombarapps = document.getElementsByClassName("bottombar-apps")[0];

  var appcontainer = document.getElementsByClassName("appcontainer")[0];

  if (appcontainer != null) {
    if (w < 550) {
      appcontainer.style.gridTemplateColumns = "auto";
      bottombarapps.style.bottom = -appcontainer.childElementCount * 300 + "px";
    } else if (w < 825) {
      appcontainer.style.gridTemplateColumns = "auto auto";
      bottombarapps.style.bottom =
        -Math.ceil(appcontainer.childElementCount / 2) * 300 + "px";
    } else if (w < 1100) {
      appcontainer.style.gridTemplateColumns = "auto auto auto";
      bottombarapps.style.bottom =
        -Math.ceil(appcontainer.childElementCount / 3) * 300 + "px";
    } else {
      appcontainer.style.gridTemplateColumns = "auto auto auto auto";
      bottombarapps.style.bottom =
        -Math.ceil(appcontainer.childElementCount / 4) * 300 + "px";
    }
  }
}
