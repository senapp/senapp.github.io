function appSpacing() {
  var w = window.innerWidth;
  var bottombarapps = document.getElementsByClassName("bottombar")[0];

  var appcontainer = document.getElementsByClassName("appcontainer")[0];

  if (appcontainer != null) {
    if (w < 550) {
      appcontainer.style.gridTemplateColumns = "auto";
      bottombarapps.style.bottom =
        Math.min(-Math.ceil(appcontainer.childElementCount / 1) * 50, -80) +
        "px";
    } else if (w < 825 && appcontainer.childElementCount > 1) {
      appcontainer.style.gridTemplateColumns = "auto auto";
      bottombarapps.style.bottom =
        Math.min(-Math.ceil(appcontainer.childElementCount / 2) * 50, -80) +
        "px";
    } else if (w < 1100 && appcontainer.childElementCount > 2) {
      appcontainer.style.gridTemplateColumns = "auto auto auto";
      bottombarapps.style.bottom =
        Math.min(-Math.ceil(appcontainer.childElementCount / 3) * 50, -80) +
        "px";
    } else if (appcontainer.childElementCount > 3) {
      appcontainer.style.gridTemplateColumns = "auto auto auto auto";
      bottombarapps.style.bottom =
        Math.min(-Math.ceil(appcontainer.childElementCount / 4) * 50, -80) +
        "px";
    } else {
      if (appcontainer.childElementCount == 1) {
        appcontainer.style.gridTemplateColumns = "auto";
        bottombarapps.style.bottom =
          Math.min(-Math.ceil(appcontainer.childElementCount / 1) * 50, -80) +
          "px";
      } else if (appcontainer.childElementCount == 2) {
        appcontainer.style.gridTemplateColumns = "auto auto";
        bottombarapps.style.bottom =
          Math.min(-Math.ceil(appcontainer.childElementCount / 2) * 50, -80) +
          "px";
      } else if (appcontainer.childElementCount == 3) {
        appcontainer.style.gridTemplateColumns = "auto auto auto";
        bottombarapps.style.bottom =
          Math.min(-Math.ceil(appcontainer.childElementCount / 3) * 50, -80) +
          "px";
      } else if (appcontainer.childElementCount >= 4) {
        appcontainer.style.gridTemplateColumns = "auto auto auto auto";
        bottombarapps.style.bottom =
          Math.min(-Math.ceil(appcontainer.childElementCount / 4) * 50, -80) +
          "px";
      }
    }
  }
}
