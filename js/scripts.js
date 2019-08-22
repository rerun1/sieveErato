var userNumber = 0;
var numbers = [];
var primes = [];

var findPrimes = function(number) {
  //Create and populate number array
  for (var i = 0; i <= userNumber; i++) {
    numbers.push(true);
  }

  //Remove multiples of prime numbers
  for (var i = 2; i <= userNumber; i++) {
    for (var j = i * i; j <= userNumber; j += i) {
      numbers[j] = false;
    }
  }

  //Create and populate array of prime numbers
  for (var i = 2; i <= userNumber; i++) {
    if (numbers[i]) {
      primes.push(i);
    }
  }
  return primes;
}

$(document).ready(function(){


  $("form#userNumber").submit(function(event){
    event.preventDefault();

    primes = [];

    $("ul#primesText").empty();

    userNumber = parseInt($("input#userNumber").val());

    findPrimes(userNumber);

    var primesParagraph = primes.join(", ");
    console.log(primesParagraph);


    $("p#primesText").text("The list of prime numbers up to your number is: " + primesParagraph);

  });

});
