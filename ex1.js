//Écrivez un algorithme JavaScript pour inverser une chaîne de
//caractères.

function reverseString(string) {
    var splitString = string.split("");
    
    console.log(string)
    
    var reverseString = splitString.reverse(); 

    var newString = reverseString.join(""); 
    console.log(newString)
    //console.log(newString)
    return newString;
}
 
reverseString("bonjour");