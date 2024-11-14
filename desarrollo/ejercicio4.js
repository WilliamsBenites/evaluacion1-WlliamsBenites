function numero (num1,num2,num3){
    if (num1 >= num2 && num1 >=3) {
        return num1;
    }else if (num2 >= num1 && num2 >= num3 ) {
        return num2;
    } else {
        return num3;
    }
}

console.log (numero(23,45,21));
console.log (numero(45,23,2));
console.log (numero(5,3,1));
console.log (numero(65,4,67));
console.log (numero(98,555,601));