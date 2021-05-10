function calculateSpacing() {
  var w = window.innerWidth;
  var h = window.innerHeight;

  var ulbottombar = document.getElementsByClassName("bottombar-nav")[0];
  var ulbottombarsocials = document.getElementsByClassName("social-media")[0];

  var topmenuicon = document.getElementsByClassName("menu-nav-icon-top")[0];
  var bottommenuicon = document.getElementsByClassName(
    "menu-nav-icon-bottom"
  )[0];

  var ultopbar = document.getElementsByClassName("topbar-nav")[0];

  if (h / w > 0.7 && !barActive) {
    ultopbar.style.display = "none";
    topmenuicon.style.display = "unset";
    topmenuicon.parentElement.style.display = "unset";
  } else if (!barActive) {
    ultopbar.style.display = "unset";
    topmenuicon.style.display = "none";
    topmenuicon.parentElement.style.display = "none";
  }
  if (h / w > 0.7 && !barActive) {
    ulbottombar.style.display = "none";
    ulbottombarsocials.style.display = "none";
    bottommenuicon.style.display = "unset";
    bottommenuicon.parentElement.style.display = "unset";
  } else if (!barActive) {
    ulbottombar.style.display = "unset";
    ulbottombarsocials.style.display = "unset";
    bottommenuicon.style.display = "none";
    bottommenuicon.parentElement.style.display = "none";
  }
}

barActive = false;
function menuBarClick(topbar) {
  var ulbottombar = document.getElementsByClassName("bottombar-nav")[0];
  var ultopbar = document.getElementsByClassName("topbar-nav")[0];
  var liTopbar = document
    .getElementsByClassName("topbar-nav")[0]
    .getElementsByTagName("li");
  var liBottombar = document
    .getElementsByClassName("bottombar-nav")[0]
    .getElementsByTagName("li");

  var body = document.getElementsByTagName("body")[0];
  var ulbottombarsocials = document.getElementsByClassName("social-media")[0];

  if (topbar) {
    if (!barActive) {
      setTimeout(() => window.scrollTo(0, 0), 100);
      setTimeout(function () {
        body.style.overflow = "hidden";
      }, 150);
      ultopbar.style.display = "unset";
      ultopbar.style.top = "60px";
      ultopbar.style.left = "0px";
      for (i = 0; i < liTopbar.length; i++) {
        liTopbar[i].style.display = "block";
      }
      ultopbar.parentElement.parentElement.style.height = "100%";
      barActive = true;
    } else {
      ultopbar.style.display = "none";
      body.style.overflow = "unset";
      ultopbar.style.top = "15px";
      ultopbar.style.left = "17.5px";
      for (i = 0; i < liTopbar.length; i++) {
        liTopbar[i].style.display = "inline-block";
      }
      ultopbar.parentElement.parentElement.style.height = "60px";
      barActive = false;
    }
  } else {
    if (!barActive) {
      setTimeout(() => window.scrollTo(0, 0), 100);
      setTimeout(function () {
        body.style.overflow = "hidden";
      }, 150);
      ulbottombar.style.display = "unset";
      ulbottombar.style.top = "80px";
      ulbottombar.style.left = "0px";
      ulbottombar.style.width = "100%";
      ulbottombarsocials.style.display = "block";
      ulbottombarsocials.style.width = "100%";
      ulbottombarsocials.style.top = "90%";
      ulbottombarsocials.style.right = "unset";
      ulbottombarsocials.style.textAlign = "center";
      for (i = 0; i < liBottombar.length; i++) {
        liBottombar[i].style.display = "block";
      }
      ulbottombar.parentElement.style.zIndex = 1;
      ulbottombar.parentElement.style.height = "100vh";
      ulbottombar.parentElement.style.top = "0px";
      ultopbar.style.display = "none";
      barActive = true;
    } else {
      ulbottombar.style.display = "none";
      body.style.overflow = "unset";
      ulbottombar.style.top = "15px";
      ulbottombar.style.left = "17.5px";
      ulbottombar.style.width = "100%";
      ulbottombarsocials.style.display = "none";
      ulbottombarsocials.style.width = "100%";
      ulbottombarsocials.style.top = "10px";
      ulbottombarsocials.style.right = "17.5px";
      ulbottombarsocials.style.textAlign = "unset";
      for (i = 0; i < liBottombar.length; i++) {
        liBottombar[i].style.display = "inline-block";
      }
      ulbottombar.parentElement.style.zIndex = "unset";
      ulbottombar.parentElement.style.height = "80px";
      ulbottombar.parentElement.style.top = "unset";
      barActive = false;
    }
  }
  calculateSpacing();
}
