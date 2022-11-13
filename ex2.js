//Écrivez un algorithme JavaScript pour trouver le plus grand des
//trois entiers donnés.(tableau donné en paramètre de la fonction)

//solution 1
function findBiggest(array) {
    let biggest = Math.max.apply(Math, array);
    console.log(biggest)
    return biggest;
}

//solution 2
function findBiggest2(arr){
    var largest= 0;

    for (i=0; i<arr.length; i++){
        if (arr[i]>largest) {
            largest=arr[i];
        }
    }

    console.log(largest)
    return(largest)
}
 
findBiggest([1,6,9, 18, 11, 19, 99, 3]);
findBiggest2([1,6,9, 18, 11, 19, 99, 3]);