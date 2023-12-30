let searchBar = document.querySelector("#search");
let searchBtn = document.querySelector(".search");

searchBtn.addEventListener("click", () => {
    searchBar.classList.toggle("active");
    searchBtn.classList.toggle("active");
    searchBar.focus();
});
