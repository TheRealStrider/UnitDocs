function menuToggle() {
    let menu = document.getElementById("menu-bar");
    if (window.getComputedStyle(menu).getPropertyValue("margin-left") == "0px") {
        menu.style.marginLeft = '-15em';
    }
    else {
        menu.style.marginLeft = '0';
    }
}