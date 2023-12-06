/*

    passi da implementare:
    1) per ogni numero da 1 a 100
        - Verificare se il numero è un multiplo di 3 e/o di 5:
            - se il numero è mulitplo di 3, stampo in console Fizz
            - se il numero è mulitplo di 5, stampo in console Buzz
            - se il numero è multiplo sia di 3 che di 5, stampo in console fizzbuzz
            - altrimenti, stampo in console il numero che sto esaminando

*/


const fizzBuzzContainer = document.querySelector('.fizzbuzz_container');
console.log('fizzBuzzContainer', fizzBuzzContainer, typeof fizzBuzzContainer);


for (let i = 1; i <= 100; i++) {
    // console.log(i);

    const newElement = document.createElement('div');

    let robaDaStampareInConsole = i;

    //i è multiplo sia di 3 che di 5
    if ((i % 3 == 0) && (i % 5 == 0)) {
        robaDaStampareInConsole = 'FizzBuzz';
        newElement.classList.add('fizzbuzz');
    }

    //i è multiplo di 3
    else if (i % 3 == 0) {
        robaDaStampareInConsole = 'Fizz';
        newElement.classList.add('fizz');
    }

    //i è multiplo di 5
    else if (i % 5 == 0) {
        robaDaStampareInConsole = 'Buzz';
        newElement.classList.add('buzz');
    }

    // console.log(robaDaStampareInConsole);
    newElement.innerHTML = robaDaStampareInConsole;

    fizzBuzzContainer.append(newElement);
    
}




