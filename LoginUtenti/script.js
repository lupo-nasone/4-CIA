const utenti = ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const password = ["ciccio1", "wandanara", "tiktok", "siffredi33", "tatangelo"];
let newUser = document.getElementById("newUser");
let newPass = document.getElementById("newPass");

function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  for (let i = 0; i < utenti.length; i++) {
    if (user == utenti[i] && pass == password[i]) {
      successo.innerHTML = "Benvenuto " + user;
      successo.classList.remove("error");
      successo.classList.add("success");
      return;
    }
  }
  successo.innerHTML = "Username o password errati";
  successo.classList.add("error");
  successo.classList.remove("success");
}

function apparire() {
  document.getElementById("prova").classList.remove("hidden");
}

function createAccount() {
  let user = document.getElementById("newUser").value;
  let pass = document.getElementById("newPass").value;

  for (let i = 0; i < utenti.length; i++) {
    if (user == utenti[i]) {
      alert("Username già esistente");
      newUser.value = "";
      newPass.value = "";
      return;
    }
  }
  utenti[utenti.length] = user;
  password[password.length] = pass;
  console.log(utenti);
  console.log(password);

  document.getElementById("prova").classList.add("hidden");
}

let prec = 0;
let prec2 = 0;
let test = document.getElementById("test");
let successo = document.getElementById("successo/no");

function sposta() {
  const a = [-50, 0, 50];
  const b = [0, 100, 150, 200];
  if (
    document.getElementById("pass").value == "" &&
    document.getElementById("user").value == ""
  ) {
    //random form 0 to 10

    do {
      var random = Math.floor(Math.random() * 3);
    } while (random == prec);
    do {
      var random2 = Math.floor(Math.random() * 4);
    } while (random2 == prec2);
    prec = random;
    prec2 = random2;
    console.log(random);
    console.log(random2);
    test.style.marginLeft = a[random] + "%";
    test.style.marginTop = b[random2] + "px";
    successo.innerHTML = "Non hai inserito username e password";
    successo.classList.add("error");
  }
}
