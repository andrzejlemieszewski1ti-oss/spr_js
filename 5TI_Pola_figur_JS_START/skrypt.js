let figura = document.getElementById("figura")
let malyTrojkat = document.getElementById("wybierz-trojkat")
let malyProsokat = document.getElementById("wybierz-prostokat")

malyTrojkat.addEventListener("click" , function(){
    figura.src = "1d.bmp"
})

malyProsokat.addEventListener("click" , function(){
    figura.src = "2d.bmp"
})




function oblicz(){
let podstawaBok = Number(document.getElementById("pierwszy-wymiar").value)
let wysokoscBok = Number(document.getElementById("drugi-wymiar").value)
let pole = 0;
if(figura.src.includes("2d.bmp")){
    pole = wysokoscBok * podstawaBok;
} else{
    pole = 0.5 * wysokoscBok * podstawaBok;
}
document.getElementById("wynik").innerHTML = pole;
}
document.getElementById("oblicz").addEventListener("click", oblicz);