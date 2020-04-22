// //Scrivi un programma che stampi i numeri da 1 a 100:
for (var numero = 1; (numero <= 100); numero++) {
    // al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

    if (numero % 3 == 0 && numero % 5 == 0) {
        console.log('FizzBuzz');

    }
// al posto dei multipli di 3 stampi "Fizz"
    else if (numero % 3 == 0) {
        console.log('Fizz');
    }

    // al posto dei multipli di 5 stampi "Buzz"

    else if (numero % 5 == 0){
        console.log('Buzz');
    }
    //stampa numero normale nel caso in cui non sia multiplo ne di 3 ne di 5 ne di entrambi
    else {
        console.log([numero]);
    }
}
