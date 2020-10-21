function projectSpacing() {
  var w = window.innerWidth;
  var logo = document
    .getElementsByClassName("project-icon")[0]
    .getElementsByTagName("img")[0];
  var infoRight = document.getElementsByClassName("project-info-right")[0];
  var info = document.getElementsByClassName("project-info")[0];
  var projectName = document.getElementsByClassName("project-name")[0];
  var projectToolsText = document.getElementsByClassName(
    "project-tools-text"
  )[0];
  var bottombar = document.getElementsByClassName("bottombar")[0];

  if (projectName.innerHTML.length > 15 && w < 650)
    projectName.style.fontSize = "22px";
  else projectName.style.fontSize = "30px";
  if (w < 650) projectToolsText.style.fontSize = "22px";
  else projectToolsText.style.fontSize = "26px";

  if (w < 750) {
    bottombar.style.bottom = -60 - info.scrollHeight + "px";
    infoRight.style.width = 80 + "%";
    infoRight.style.top = 55 + "%";
    info.style.top = 90 + "%";
    logo.style.left = 50 + "%";
    logo.style.top = 32.5 + "%";
    logo.style.msTransform = "translate(-50%, -50%)";
    logo.style.transform = "translate(-50%, -50%)";
  } else if (w < 1050) {
    bottombar.style.bottom = -60 - info.scrollHeight + "px";
    infoRight.style.top = 16 + "%";
    infoRight.style.width = 50 + "%";
    info.style.top = 50 + "%";
    logo.style.left = 10 + "%";
    logo.style.top = 17.5 + "%";
    logo.style.msTransform = "unset";
    logo.style.transform = "unset";
  } else {
    bottombar.style.bottom = -60 - info.scrollHeight + "px";
    infoRight.style.top = 16 + "%";
    infoRight.style.width = 60 + "%";
    info.style.top = 50 + "%";
    logo.style.left = 10 + "%";
    logo.style.top = 17.5 + "%";
    logo.style.msTransform = "unset";
    logo.style.transform = "unset";
  }
}
