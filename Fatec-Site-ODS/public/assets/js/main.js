var themeToggle = document.querySelector(".theme-toggle");
var pageBanner = document.querySelector(".page-banner");
var body = document.body;

function setTheme() {
  var theme = localStorage.getItem("theme");
  body.classList.remove("light", "dark");
  body.classList.add(theme || "light");
  if (theme == "dark") {
    pageBanner.setAttribute("src", pageBanner.dataset.bannerDark);
  } else {
    pageBanner.setAttribute("src", pageBanner.dataset.bannerLight);
  }
}

setTheme(); // chamada ao iniciar a página

themeToggle.addEventListener("click", function () {
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "light");
    setTheme();
  } else {
    localStorage.setItem("theme", "dark");
    setTheme();
  }
});
