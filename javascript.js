function f() {
    document.getElementById("second_message").innerHTML="";
    var overlay = document.getElementById("overlay");
    overlay.classList.toggle("show");

    setTimeout(function() {
        overlay.classList.toggle("show");
        var secMes= document.getElementById("second_message");
        var nome = sessionStorage.getItem("name");
        secMes.innerHTML="Fammelo un sorriso ora "+nome+", dai<br>♥"
    }, 12000);
}
function f2()
{
 var nome = document.getElementById("nm2").value;
 sessionStorage.setItem("name", nome);
 document.getElementById("form").submit();
}
function f3()
{
    var nome=sessionStorage.getItem("name");
    document.getElementById("premimi-button").textContent=""+nome+", ecco una sorpresina per te"
    alert(nome);
}
