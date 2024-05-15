function f() {
    document.getElementById("second_message").innerHTML="";
    var overlay = document.getElementById("overlay");
    overlay.classList.toggle("show");

    setTimeout(function() {
        overlay.classList.toggle("show");
        var secMes= document.getElementById("second_message");
        secMes.innerHTML="Fammelo un sorriso ora, dai<br>♥"
    }, 12000);
}
