const arr=[1,2,3,4,5,6]

const text= "hello world"



for (let i = 0; i<text.length; i++){
    console.log(text[i])
}

console.log("====================")

console.log(text.includes("o w"))
console.log(arr.includes(1))
console.log(text.split(" ").includes("hello")); 

console.log("===========")

 
const arr1 = [3,-5,8, 1, 6, 4, 9, 2, 7, 5, 10, -1];

const findIndex = (arr, value) =>{

for (let i = 0; i < arr1.length; i++) {
    
    if (arr1[i] === value) return i 
        
}

}

console.log(findIndex(arr1, 8)) 

console.log("==================")

console.log(arr1.findIndex((n) => n ===6))

console.log(arr1.find((n) =>{
    return n < 0
}))
 console.log("================================")

 function ehPalindromo1(frase) {
    const fraseLowerCase = frase.toLowerCase();
    const tamanho = fraseLowerCase.length;
    
    let inicio = 0;
    let fim = tamanho - 1;
    
    while (inicio < fim) {
        while (fraseLowerCase[inicio] === ' ') {
            inicio++;
        }
        while (fraseLowerCase[fim] === ' ') {
            fim--;
        }
        
        
        if (fraseLowerCase[inicio] !== fraseLowerCase[fim]) {
            return false; 
        }
        
        
        inicio++;
        fim--;
    }
    
    return true; 

 }
 console.log(ehPalindromo1("ARARA") === true);
 console.log(ehPalindromo1("luz azul") === true ); 
 console.log(ehPalindromo1("Teste de palíndromo") === false); 
 console.log("-")

function ehPalindromo2(frase) {
    const fraseLowerCase = frase.toLowerCase().replace(/ /g,"");
    
    let i = 0;
    let j = fraseLowerCase.length - 1;
    
    while (i < j) {
        
        if (fraseLowerCase[i] !== fraseLowerCase[j]) {
            return false; 
        }
        
        
        i++;
        j--;
    }
    
    return true; 

 }
console.log(ehPalindromo2("ARARA") === true);
console.log(ehPalindromo2("luz azul") === true ); 
console.log(ehPalindromo2("Teste de palíndromo") === false); 
console.log("-");

function ehPalindromo3(frase) {
    const fraseLowerCase = frase.toLowerCase().replace(/ /g,"");
    const reverse = fraseLowerCase.split("").reverse().join("")
    reverse === fraseLowerCase
    
    return true; 

 }
console.log(ehPalindromo3("ARARA") === true);
console.log(ehPalindromo3("luz azul") === true ); 
console.log(ehPalindromo3("Teste de palíndromo") === false); 

console.log("=================================");

arr1.forEach((n, idx) => {
    console.log(idx, n)
})

let sum = 0
const notas = [10 , 7, 8]
notas.forEach((notas)=> {
    sum+=notas

})

console.log (sum / notas.length)

console.log("==========")

// ["a" , "b", "c", "d", ] -> ["A", "B", "C", "D"]
// [-1,-2,-3] -> [1,2,3]

const negativeNumbers = [-1, -2, -3]
const positiveNumbers = negativeNumbers.map((n) => {
    return n* -1
})

console.log(positiveNumbers)
console.log(negativeNumbers)

const map = (arr, cb) =>{
    const newArr = []
    for (let i = 0; i<arr.length; i++) {
        const newElement = cb(arr[i])
        newArr.push(newElement)

    }

    return newArr
    
}


const arr2 = [1, 3, 4, 5]

const arr2multiplicado = arr2.map((n) => n*2)

console.log(arr2multiplicado)

const arr3 = [2, 4, 6, 8]

const arr3Quadrado = arr3.map((n) => n ** 2)

console.log(arr3Quadrado)

const arr4 = [2, 4, 6, 8, 10]; 

console.log(arr4.find((n) => n % 2 === 0))

//filter

const fullName = ["igor", undefined , "faustino"]

const names = fullName.filter ((str) => str)

console.log(names.join(" "))

const arr5 = [2, 4, 6, 8, 10, 1, 3]; 

const arr5SemPares = arr5.filter (n => n% 2 !== 0)

console.log(arr5SemPares)

const isAllNumbersPositives1 = (arr) => {
    for (let number of arr){
        if (number <0 ) return false
    }
    return true
}
  
console.log(isAllNumbersPositives1([1,22,3,4,5]) === true)
console.log(isAllNumbersPositives1([1,-2,3,-4]) === false)
console.log(isAllNumbersPositives1([]) === true)
console.log(isAllNumbersPositives1([0]) === true)

console.log("-")

const isAllNumbersPositives2 = (arr) => {
    return !arr.filter((n) => n < 0 )  
}

console.log(isAllNumbersPositives1([1,22,3,4,5]) === true)
console.log(isAllNumbersPositives1([1,-2,3,-4]) === false)
console.log(isAllNumbersPositives1([]) === true)
console.log(isAllNumbersPositives1([0]) === true)

console.log("-")

const t = [1,2,3,4]
console.log(t.every((n)=> n >= 0))


