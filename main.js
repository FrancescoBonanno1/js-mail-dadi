const mail = document.getElementById("fill");
let authorized = ["francescosoapbonanno@gmail.com" , "stalker@gmail.com" , "pisnelopisnelo@gmail.com" , "CIA@yahoo.com" , "vladimirputin@hotmail.ru"];
let button = document.getElementById("proceed");

if( mail == authorized )
{
    button.addEventListener("click", function() {
        alert("La stavamo aspettando, maestro");
    })}

else {
    button.addEventListener("click", function (){
        Error("E tu chi diavolo sei? Fuori di qui!");
    })
}