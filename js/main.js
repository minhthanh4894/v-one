document.addEventListener("DOMContentLoaded", function() {
  var form_search = document.querySelector(".header__form");
  var search_btn = document.querySelector("i.fas.fa-search");
  var nav_bar = document.querySelector("nav.nav");
  var nav_btn = document.querySelector("i.fas.fa-bars");
  // console.log(search_btn);
  search_btn.addEventListener("click", function() {
    event.preventDefault();
    nav_bar.classList.remove("is-open");
    form_search.classList.toggle("is-open");
  });
  nav_btn.addEventListener("click", function() {
    event.preventDefault();
    form_search.classList.remove("is-open");
    nav_bar.classList.toggle("is-open");
  });
});
