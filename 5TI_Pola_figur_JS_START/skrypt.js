let figura = document.getElementById("figura")
let malyTrojkat = document.getElementById("wybierz-trojkat")
let malyProsokat = document.getElementById("wybierz-prostokat")

malyTrojkat.addEventListener("click" , function(){
    figura.src = "1m.bmp"
})

malyProsokat.addEventListener("click" , function(){
    figura.src = "2m.bmp"
})

let podstawaBok = Number(document.getElementById("pierwszy-wymiar"))
let wysokoscBok = Number(document.getElementById("drugi-wymiar"))

let pole = 0;

function oblicz(){
if(figura.src.includes("2m.bmp")){
    pole = wysokoscBok * podstawaBok;
    document.getElementById("wynik").innerHTML = pole
} else{
    pole = 0.5 * wysokoscBok * podstawaBok;
    document.getElementById("wynik").innerHTML = pole
}
}
