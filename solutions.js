// Sum of Two Numbers

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log("Los datos de entrada no son adecuados");
  }
  else{
  return a + b;
  }
}


// Factorial of a Number
function factorial(n) {
  if (typeof n !== 'number' ) {
    console.log("Los datos de entrada no son adecuados");
  }
  else if (n == 0 ||n == 1){
      return 1;
    }
  else if(n<0)
  {
    console.log("No se puede calcular el factorial de un numero negativo");

  }
  else{
    let resultado=1;
    for(let i=2;i<=n;i++){
      resultado*=i;
    }
  return resultado 
  }
  }


// Find the Largest Number
function findLargest(arr) {
  if (typeof arr !== 'number' ) {
    console.log("Los datos de entrada no son adecuados");
  }
  else{
    let numeroMayor=arr[0]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > numeroMayor) {
          numeroMayor = arr[i]; 
  }
}
}
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log("Los datos de entrada no son adecuados");
  }
  // Add your code here
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
