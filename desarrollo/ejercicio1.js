const numeros=[99,12,19,8,43]

function SumaArray (array) {
    let suma = 0;
    for(let num of array){
        suma+=num;
    }
    return suma;
}
console.log(SumaArray(numeros))