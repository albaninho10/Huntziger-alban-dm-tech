//Écrire un algorithme qui demande un nombre de départ, et qui
//calcule la somme des entiers jusqu’à ce nombre. Par exemple, si
//l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15 NB
//: on souhaite afficher uniquement le résultat, pas la décomposition
//du calcul.


const prompt = require("prompt-sync")();

function sumToNumber() {

    let inputNumber = prompt("Choisissez votre nombre : ");
    let inputToInt = parseInt(inputNumber)
    
    if(isNaN(inputToInt)){
        
        console.log("Ce n'est pas un chiffre")
        sumToNumber()
        
    }else{
        
        let result = 0
        for(let i = 1; i != inputToInt + 1; i++){
            result = result + i
        }
        console.log(result)            
        return result
    }
}
 
sumToNumber();