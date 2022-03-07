/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.
 */

//Chiedo all'utente di inserire un numero
const userNumber = parseInt(prompt('Inserisci un numero'));
//Verifico che l'utente inserisca un numero intero altrimenti non vado avanti 
    while (isNaN(userNumber)){
        userNumber = parseInt(prompt('Inserisci un numero'));
    }
//Creo un array vuoto nel quale andrò ad inserire gli array generati
    const newArray = [];
//Avvio un ciclo che genera tanti array quanti ne richiede il numero inserito
    for (let i = 0; i < userNumber; i++){
//Creo un array vuoto che andrò a popolare con i numeri randomici
        const numbersArray = [];
//Estraggo 10 numeri casuali tra 4 e 4532 e li inserisco nell'array generato
        while (numbersArray.length < 10){
        numbersArray.push(Math.floor(Math.random() * 4528 + 4));
        }
//Inserisco ogni array generato nel newArray come contenitore generale
        newArray.push(numbersArray);
        console.log(numbersArray);
    }
