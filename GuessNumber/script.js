
let temp = false;
function istruzioni(){
    document.getElementById("istruzioni2").classList.toggle("nascosto");
}

function gioca(){
    document.getElementById("gioco").classList.toggle("nascosto");
}
let tent = 7;
let rand = Math.floor(Math.random() * 101);
let nins = "";
console.log(tent)
console.log(rand)

function check(){
    let test = document.getElementById("inp").value;
    console.log(test)
    if(test == rand){
        win()
        console.log("vittoria")
    }

        if(test-rand < 0){
            document.getElementById("suggerimenti").innerHTML = "il numero è piu grande"
        }
        else{
            document.getElementById("suggerimenti").innerHTML = "il numero è piu piccolo"
        }

        document.getElementById("tentativi").innerHTML = tent;

        nins += test + "-";
        document.getElementById("numinseriti").innerHTML = nins;
        tent--;
}

function win(){
    document.getElementById("col-12").classList.add("nascosto");
    
}