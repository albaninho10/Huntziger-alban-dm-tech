//Écrire un algorithme qui demande un nombre de départ, et qui
//ensuite affiche les dix nombres suivants. Par exemple, si
//l'utilisateur entre le nombre 17, le programme affichera les
//nombres de 18 à 27

const prompt = require("prompt-sync")();

function numberAddTen() {

    let inputNumber = prompt("Choisissez votre nombre : ");
    let inputToInt = parseInt(inputNumber)

    if(isNaN(inputToInt)){
        console.log("Ce n'est pas un chiffre")
        numberAddTen()
    }else{
        let maxNumber = inputToInt + 10
        for(let i = 0; inputToInt != maxNumber; i++){
            inputToInt++;
            console.log(inputToInt);
        }
    }
}
 
numberAddTen();