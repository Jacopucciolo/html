function f() {
    var overlay = document.getElementById("overlay");
    overlay.classList.toggle("show");

    setTimeout(function() {
        overlay.classList.toggle("show");
    }, 12000);
}
