const player = Math.floor ((Math.random() *6) +1);
const cpu =  Math.floor ((Math.random() *6) +1);

if(player > cpu){
    document.getElementById("risultato").innerHTML=`Complimenti, hai ottenuto ${player}, mentre il PC ha ottenuto ${cpu}, hai vinto!`
    document.getElementById("risultato").classList.add("vinto")
}
else if(player < cpu){
    document.getElementById("risultato").innerHTML=`Mi dispiace amico, il PC ha ottenuto ${cpu}, mentre tu hai ottenuto ${player}, hai perso.`
    document.getElementById("risultato").classList.add("perso")
}
else {
    document.getElementById("risultato").innerHTML=`Ti è endata bene amico, hai ottenuto ${player}, ed il computer ha ottenuto ${cpu}, avete pareggiato`
    document.getElementById("risultato").classList.add("pareggio")
}