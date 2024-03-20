//criar uma função referencia que espere carregar
//todos nosso elemento do html

//lembrar isso no Jquerry

window.onload = function(){

//pegar o elemento de entrada campo
let numero = document.getElementsByTagName("input");
//pegar o botao
let bt = document.getElementsByClassName("ClassBt");

let tagSpan = document.querySelector(".ver")

//disparar o clique

bt[0].onclick = function() {
    //alert('sadsa');
    //(se() senão() senão se())
    tagSpan.style.color = "red";
    tagSpan.style.border = "thick solid #0000FF";
    //(e) &&   || (ou)

    if(numero[0].value > 10 || numero[0].value < 12) {
        //pegar referencia da tag span
       tagSpan.innerHTML="maior";
    } else{
        tagSpan.innerHTML="menor";
    }
    //limpar campo
    numero[0].value ="";

}



}//fim onload




