const mail = document.getElementById("fill").innerHTML;
let authorized = ["francescosoapbonanno@gmail.com" , "stalker@gmail.com" , "pisnelopisnelo@gmail.com" , "CIA@yahoo.com" , "vladimirputin@hotmail.ru"]

if( mail == authorized )
{
    document.getElementById("proceed").addEventListener("click", function() {
        alert("La stavamo aspettando, maestro");
    })}

else {
    document.getElementById("proceed").addEventListener("click", function (){
        Error("E tu chi diavolo sei? Fuori di qui!");
    })
}