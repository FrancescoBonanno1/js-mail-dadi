const player = Math.floor ((Math.random() *6) +1);
const cpu =  Math.floor ((Math.random() *6) +1);

if(player > cpu){
    document.getElementById("vinto").innerHTML= (`Complimenti, hai ottenuto ${player}, mentre il PC ha ottenuto ${cpu}, hai vinto!`)
}
else{
    document.getElementById("perso").innerHTML= (`Mi dispiace amico, il PC ha ottenuto ${cpu}, mentre tu hai ottenuto ${player}, hai perso.`)
}