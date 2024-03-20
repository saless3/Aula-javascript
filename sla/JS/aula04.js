document.write('<h1> Operadores aritmeticos</h1>')

document.write("<h2> + adição / concatenação");

let idade = 17;

document.write("<br>")

document.write(idade + 20)//37

//=========================================================================
let n1 = n_1
let n2 = n_2
document.write("<br>");
document.write("adição" + (n1 + n2) );//15
document.write("<br>");

document.write("<hr>");
document.write("subtração");
document.write

//criando função basica

function Sub() {

    //1°passo : saber se a funcão esta vinculada
    //console.log("CHAMA!!!!!!!");

    //2° referncia da localização da teg
    let n01 = document.getElementById("n_1");
    let n02 = document.getElementById("n_2");
    console.log(n01.value);
    console.log(n02.value);
    
    let resultado = parseInt (n01.value) - parseInt (n02.value);
    
    window.alert(resultado);
}

function Mul() {

    //1°passo : saber se a funcão esta vinculada
    //console.log("CHAMA!!!!!!!");

    //2° referncia da localização da teg
    let n01 = document.getElementById("n_1");
    let n02 = document.getElementById("n_2");
    console.log(n01.value);
    console.log(n02.value);
    
    let resultado = parseInt (n01.value) * parseInt (n02.value);
    
    window.alert(resultado);
}

function Som() {

    //1°passo : saber se a funcão esta vinculada
    //console.log("CHAMA!!!!!!!");

    //2° referncia da localização da teg
    let n01 = document.getElementById("n_1");
    let n02 = document.getElementById("n_2");
    console.log(n01.value);
    console.log(n02.value);
    
    let resultado = parseInt (n01.value) + parseInt (n02.value);
    
    window.alert(resultado);
}

function Div() {

    //1°passo : saber se a funcão esta vinculada
    //console.log("CHAMA!!!!!!!");

    //2° referncia da localização da teg
    let n01 = document.getElementById("n_1");
    let n02 = document.getElementById("n_2");
    console.log(n01.value);
    console.log(n02.value);
    
    let resultado = parseInt (n01.value) / parseInt (n02.value);
    
    window.alert(resultado);
}