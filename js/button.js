function funkcijaZaDugme1() {
    var tacke1 = document.getElementById("tacke1")
    var moreText1 = document.getElementById("vise1");
    var btnText1 = document.getElementById("btn1");
  
    if (tacke1.style.display === "none") {
      tacke1.style.display = "inline";
      btnText1.innerHTML = "Prikaži više";
      moreText1.style.display = "none";
    } else {
      tacke1.style.display = "none";
      btnText1.innerHTML = "Prikaži manje";
      moreText1.style.display = "inline";
    }
  }

  function funkcijaZaDugme2() {
    var tacke2 = document.getElementById("tacke2")
    var moreText2 = document.getElementById("vise2");
    var btnText2 = document.getElementById("btn2");
  
    if (tacke2.style.display === "none") {
      tacke2.style.display = "inline";
      btnText2.innerHTML = "Prikaži više";
      moreText2.style.display = "none";
    } else {
      tacke2.style.display = "none";
      btnText2.innerHTML = "Prikaži manje";
      moreText2.style.display = "inline";
    }
  }

  function funkcijaZaDugme3() {
    var tacke3 = document.getElementById("tacke3")
    var moreText3 = document.getElementById("vise3");
    var btnText3 = document.getElementById("btn3");
  
    if (tacke3.style.display === "none") {
      tacke3.style.display = "inline";
      btnText3.innerHTML = "Prikaži više";
      moreText3.style.display = "none";
    } else {
      tacke3.style.display = "none";
      btnText3.innerHTML = "Prikaži manje";
      moreText3.style.display = "inline";
    }
  }