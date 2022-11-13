//Écrire un algorithme qui tri un tableau d’entier dans l’ordre
//croissant

//solution 1
function sortArray(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < (arr.length-i-1); j++){
            if(arr[j] > arr[j+1]){
                let toSwitch = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = toSwitch
            }
        }
    }

    console.log(arr)
    return arr
}

//solution 2
function sortArray2(arr){
    let result = arr.sort(function (a, b) {  return a - b;  })
    console.log(result)
    return result
}


sortArray([2,15,76,87,775,60])
sortArray2([2,15,76,87,775,60])