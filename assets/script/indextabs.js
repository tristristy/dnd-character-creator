function openDesc(evt, paraDesc) {
    var i, fulldesc, desctab;
    fulldesc = document.getElementsByClassName("fulldesc");
    for (i = 0; i < fulldesc.length; i++) {
      fulldesc[i].style.display = "none";
    }
    desctab = document.getElementsByClassName("desctab");
    for (i = 0; i < desctab.length; i++) {
      desctab[i].className = desctab[i].className.replace(" active", "");
    }
    document.getElementById(paraDesc).style.display = "block";
    evt.currentTarget.className += " active";
  };

  document.getElementById("defaultOpen").click();