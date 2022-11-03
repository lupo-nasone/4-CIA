const utenti= ["ciccioGamer", "icardi", "khaby", "rocco", "anna", "matteo"];
const password= ["ciccio1", "wandanara", "tiktok", "siffredi33" , "tatangelo", "faginali"];


function login(){
    let temp;
    let utente = document.getElementById("username").value;
    let passworda = document.getElementById("password").value;

    for(let i=0 ;i<utenti.length; i++){
        if(utenti[i]==utente){
            temp = i;
        }
    }

    if(temp == null){
        document.getElementById("messaggio").innerHTML = "il nome utente o la passwod non sono corretti"
        document.getElementById("messaggio").classList.toggle("errore");
    }
    else{
        if(utenti[temp]==utente && passworda==password[temp]){
            document.getElementById("messaggio").innerHTML = "login effettuato con successo"
            document.getElementById("messaggio").classList.toggle("giusto")
        }
    }
}

function hide(){
    document.getElementById("si").classList.toggle("hide")
}
hide();

function registra(){
    utenti[utenti.length] = document.getElementById("name").value
    password[password.length] = document.getElementById("pass").value
    console.log("successo")
    hide();
}
