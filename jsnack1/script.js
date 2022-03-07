/**
 *
 *
    Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
    Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
 *
 */

    let newArray = [];
    let sum = 0;
    while(sum < 200){
        let userNumber=parseInt(prompt('Inserisci un numero'));
        if (isNaN(userNumber)){
            parseInt(prompt('Numeri, non lettere, pleaseeeeee')); 
        } else{
        newArray.push(userNumber);
        sum += userNumber;
        }
    }
    console.log (newArray);