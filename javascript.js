function f() {
    var overlay = document.getElementById("overlay");
    overlay.classList.add("show");

    setTimeout(function() {
        overlay.classList.remove("show");
        var button = document.getElementById("premimi-button");
        //button.style.backgroundColor = getRandomColor();
    }, 12000);
}

function getRandomColor() {
    //var letters = '0123456789ABCDEF';
    //var color = '#';
    //for (var i = 0; i < 6; i++) {
    //    color += letters[Math.floor(Math.random() * 16)];
    //}
    //return color;
}
