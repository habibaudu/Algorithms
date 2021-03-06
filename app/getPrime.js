'use strict'
 
 const getPrimes=(n)=>{
  var primes = [2,3];

  const checkPrime = (n)=> {
    var numIsPrime;
    for(let i = 2; i < n; i++){
           if(n % i === 0){
               numIsPrime = false ;
               break;
           }
           else {
            numIsPrime = true;
           }
      }
      return numIsPrime;
  }

  if (n < 0) {
    return "negative integers can not be prime";
  }
  else if(n ===0){

    return "0 is not prime";

  }
  else if (n=== 1) {
    return '1 is not a prime number';  
  }
  else if (n === 2) {
    return [2];
  }
  else if (n=== 3) {
    return primes;
  }
  else {
    for(let i = 4; i <= n; i++) {
          if(checkPrime(i) === true ){
              primes.push(i);
          }
    }
    return primes;
  }
}

module.exports=getPrimes;