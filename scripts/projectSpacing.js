function projectSpacing() {
  var w = window.innerWidth;
  var logo = document
    .getElementsByClassName("project-icon")[0]
    .getElementsByTagName("img")[0];
  var infoRight = document.getElementsByClassName("project-info-right")[0];
  var info = document.getElementsByClassName("project-info")[0];
  var bottombar = document.getElementsByClassName("bottombar")[0];

  if (w < 600) {
    bottombar.style.bottom = -500 + "px";
    infoRight.style.width = 80 + "%";
    infoRight.style.top = 55 + "%";
    info.style.top = 90 + "%";
    info.style.height = 400 + "px";
    logo.style.left = 50 + "%";
    logo.style.top = 32.5 + "%";
    logo.style.msTransform = "translate(-50%, -50%)";
    logo.style.transform = "translate(-50%, -50%)";
  } else if (w < 750) {
    bottombar.style.bottom = -60 + "px";
    infoRight.style.width = 40 + "%";
    infoRight.style.top = 17.5 + "%";
    info.style.height = 35 + "%";
    info.style.top = 55 + "%";
    logo.style.left = 10 + "%";
    logo.style.top = 17.5 + "%";
    logo.style.msTransform = "unset";
    logo.style.transform = "unset";
  } else if (w < 1050) {
    bottombar.style.bottom = -60 + "px";
    infoRight.style.width = 50 + "%";
    infoRight.style.top = 17.5 + "%";
    info.style.height = 35 + "%";
    info.style.top = 55 + "%";
    logo.style.left = 10 + "%";
    logo.style.top = 17.5 + "%";
    logo.style.msTransform = "unset";
    logo.style.transform = "unset";
  } else {
    bottombar.style.bottom = -60 + "px";
    infoRight.style.width = 60 + "%";
    infoRight.style.top = 17.5 + "%";
    info.style.height = 35 + "%";
    info.style.top = 55 + "%";
    logo.style.left = 10 + "%";
    logo.style.top = 17.5 + "%";
    logo.style.msTransform = "unset";
    logo.style.transform = "unset";
  }
}
