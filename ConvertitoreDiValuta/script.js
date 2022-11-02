//function on keyup
function calcola() {
    

    let valore = document.getElementById("valore").value;
    document.getElementById("dollaro").innerHTML = (valore * 0.99).toFixed(2);
    document.getElementById("sterlina").innerHTML = (valore * 0.86).toFixed(2);
    document.getElementById("yen").innerHTML = (valore * 145.2).toFixed(2);

    console.log(valore);
}