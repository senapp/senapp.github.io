function calculateSpacing() {
  var w = window.innerWidth;

  var ulbottombar = document.getElementsByClassName("ulbottombar")[0];
  var ulbottombarsocials = document.getElementsByClassName(
    "ulbottombar-socials"
  )[0];

  var topmenuicon = document.getElementsByClassName("menu-nav-icon-top")[0];
  var bottommenuicon = document.getElementsByClassName(
    "menu-nav-icon-bottom"
  )[0];

  var ultopbar = document.getElementsByClassName("ultopbar")[0];
  var bottombarapps = document.getElementsByClassName("bottombar-apps")[0];

  var appcontainer = document.getElementsByClassName("appcontainer")[0];

  if (appcontainer != null) {
    if (w < 550) {
      appcontainer.style.gridTemplateColumns = "auto";
      bottombarapps.style.bottom = "-700px";
    } else if (w < 825) {
      appcontainer.style.gridTemplateColumns = "auto auto";
      bottombarapps.style.bottom = "-425px";
    } else if (w < 1100) {
      appcontainer.style.gridTemplateColumns = "auto auto auto";
      bottombarapps.style.bottom = "-150px";
    } else {
      appcontainer.style.gridTemplateColumns = "auto auto auto auto";
      bottombarapps.style.bottom = "-150px";
    }
  }

  if (w < 525) {
    ultopbar.style.display = "none";
    topmenuicon.style.display = "unset";
    topmenuicon.parentElement.style.display = "unset";
  } else {
    ultopbar.style.display = "unset";
    topmenuicon.style.display = "none";
    topmenuicon.parentElement.style.display = "none";
  }
  if (w < 875) {
    ulbottombar.style.display = "none";
    ulbottombarsocials.style.display = "none";
    bottommenuicon.style.display = "unset";
    bottommenuicon.parentElement.style.display = "unset";
  } else {
    ulbottombar.style.display = "unset";
    ulbottombarsocials.style.display = "unset";
    bottommenuicon.style.display = "none";
    bottommenuicon.parentElement.style.display = "none";
  }
}

barActive = false;
function menuBarClick(topbar) {
  var ulbottombar = document.getElementsByClassName("ulbottombar")[0];
  var ultopbar = document.getElementsByClassName("ultopbar")[0];
  var menubar = document.getElementsByClassName("menubar-overlay")[0];

  if (topbar) {
    if (!barActive) {
      ultopbar.style.display = "unset";
      menubar.style.display = "unset";
      barActive = true;
    } else {
      ultopbar.style.display = "none";
      menubar.style.display = "none";
      barActive = false;
    }
  } else {
    if (!barActive) {
      ulbottombar.style.display = "unset";
      ulbottombar.parentElement.style.zIndex = 1;
      ultopbar.style.display = "none";
      menubar.style.display = "unset";
      barActive = true;
    }
    if (!barActive) {
      ulbottombar.style.display = "none";
      menubar.style.display = "none";
      ulbottombar.parentElement.style.zIndex = "unset";
      barActive = true;
    }
  }
}
