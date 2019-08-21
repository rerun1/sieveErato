var userNumber = 0;
var primes = [];


$(document).ready(function(){

  $("form#userNumber").submit(function(event){
    event.preventDefault();

    userNumber = parseInt($("input#userNumber").val());

    console.log(userNumber);
    console.log(typeof userNumber);

    for (var index = 2; index = ((index*index)>userNumber); index += 1) {
      primes.push(index);

      maybe map?


      if (index === (!index*index)) {
        get rid of it
      }
    }

  });

});
