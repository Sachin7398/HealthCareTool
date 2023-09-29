const sidenav = document.getElementById("sidenav");
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const hamburger = document.getElementById("hamburger");

sidebarToggle.addEventListener("click", () => {
    sidebar.style.display = "block";
    sidenav.style.display = "none";
});

hamburger.addEventListener("click", () =>{
    sidenav.style.display = "block";
    sidebar.style.display = "none";

});