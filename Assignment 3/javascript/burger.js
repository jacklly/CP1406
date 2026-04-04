function hamburger() {
    var menu = document.getElementById("burgermenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } 
    else {
        menu.style.display = "block";
    }
}