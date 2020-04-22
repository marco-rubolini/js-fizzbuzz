// //Scrivi un programma che stampi i numeri da 1 a 100:
for (var i = 1; (i <= 100); i++) {
    // al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');

    }
// al posto dei multipli di 3 stampi "Fizz"
    else if (i % 3 == 0) {
        console.log('Fizz');
    }

    // al posto dei multipli di 5 stampi "Buzz"

    else if (i % 5 == 0){
        console.log('Buzz');
    }
    //stampa numero normale nel caso in cui non sia multiplo ne di 3 ne di 5 ne di entrambi
    else {
        console.log([i]);
    }
}
