function addition(a,b){

    return a + b;
}

function subtraction(a,b){
    if(a > b){
        return a - b;
    }else{
        return b - a;
    }
}

function multiplication(a,b){
    return a * b;
}

function quotient(a,b){
    return a / b;
}


//callbacks 


function test(a,b,f){


    console.log(f(a,b));
}


function ex(event){


    console.log(event.target);

}


test(1,2,(a,b)=>{
return a+b+5;
});


let form = document.querySelector(".form");

let createButton = document.querySelector('.create-button');

let inptName = document.querySelector('#full-name');

let inptAge = document.querySelector('#age');

let inptEmail = document.querySelector('#email');


let inptPassword = document.querySelector('#password');

createButton.addEventListener('click', ex);



inptName.addEventListener('click',ex);

inptAge.addEventListener('click',ex);

inptEmail.addEventListener('click',ex);

inptPassword.addEventListener('click',ex);


