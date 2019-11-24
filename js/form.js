function slanje() {

    var ime = document.forma.ime.value;
    var reIme = /^[A-Z]{1}[a-z]{2,}$/;

    var greska = false;

    if (reIme.test(ime)) { /* testiramo da li je pattern tacan*/
        document.getElementById('greskaIme').innerHTML = "";
    } else {
        document.getElementById('greskaIme').innerHTML = "<p style='color:red;'>Pogresan format</p>";
        greska = true;
    }


    var prezime = document.forma.prezime.value;
    var rePrezime = /^[A-Z]{1}[a-z]{2,}$/;
    if (rePrezime.test(prezime)) { /* testiramo da li je pattern tacan*/
        document.getElementById('greskaPrezime').innerHTML = "";
    } else {
        greska = true;
        document.getElementById('greskaPrezime').innerHTML = "<p style='color:red;'>Pogresan format</p>";
    }


    var email = document.forma.email.value;
    var reEmail = /^[a-z]{2,}[0-9]{0,}@[a-z]{2,}\.[a-z]{3}$/;
    if (reEmail.test(email)) { /* testiramo da li je pattern tacan*/
        document.getElementById('greskaEmail').innerHTML = "";
    } else {
        greska = true;
        document.getElementById('greskaEmail').innerHTML = "<p style='color:red;'>Pogresan format</p>";
    }

    var poruka = document.forma.poruka.value;
    if (poruka.length > 20) {
        document.getElementById('greskaPoruka').innerHTML = "";
    } else {
        greska = true;
        document.getElementById('greskaPoruka').innerHTML = "<p style='color:red;'>Poruka je suvise kratka.</p>";
    }

    if (greska === false) {
        alert('Hvala Vam sto ste nas kontaktirali. Neko ce vas uskoro pozvati.');
        obrisi();
    }
}

function obrisi() {
    document.getElementById('ime').value = '';
    document.getElementById('prezime').value = '';
    document.getElementById('email').value = '';
    document.getElementById('poruka').value = '';
}