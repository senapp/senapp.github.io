function calculateSpacing() {
  var w = window.innerWidth;

  var ulbottombar = document.getElementsByClassName("ulbottombar")[0];
  var ulbottombarsocials = document.getElementsByClassName(
    "ulbottombar-socials"
  )[0];
  var ultopbar = document.getElementsByClassName("ultopbar")[0];
  if (w < 525) {
    ultopbar.style.display = "none";
  } else {
    ultopbar.style.display = "unset";
  }
  if (w < 875) {
    ulbottombar.style.display = "none";
    ulbottombarsocials.style.display = "none";
  } else {
    ulbottombar.style.display = "unset";
    ulbottombarsocials.style.display = "unset";
  }
}
