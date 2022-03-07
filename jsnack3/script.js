/**
 *
 *
    Crea due tag div con due id diversi:
    un div avrà il testo colorato di rosso mentre l'altro di verde.
    Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
    Se sono pari li stampo nell'div "rosso",
    se sono dispari li stampo nell'div "verde".
 *
 */

    function isEven(number){
        if (number % 2 === 0){
            return true;
        }
        return false;
    }
    const numbersArray = [44,57,68,89,2,18,9];
    
    for (let i = 0; i < numbersArray.length; i++){
        if (isEven(numbersArray[i])){
            document.getElementById("rosso").innerHTML+= " " + numbersArray[i];
        }else {
            document.getElementById("verde").innerHTML+=" " + numbersArray[i];
        }
    }