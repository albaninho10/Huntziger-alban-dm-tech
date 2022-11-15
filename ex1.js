//Écrivez un algorithme JavaScript pour inverser une chaîne de
//caractères.

function reverseString(string) {
    var splitString = string.split("");
    var reverseString = splitString.reverse(); 
    var newString = reverseString.join(""); 
    console.log(newString)
    return newString;
}

function reverseStringTwo(str) {
    var result = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        result += str[i];
    }
    console.log(result)
    return result;
}
 
reverseStringTwo("Hello c'est Alban");
 
//reverseString("Bonjour");