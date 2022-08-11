const basicInfoEl = document.querySelector('.baseinfo');
const levelsEl = document.querySelector('.levels');
const classEl = document.querySelector('.classes');
const proficienciesEl = document.querySelector('.proficiencies');
const equipEl = document.querySelector('.equip');
const spellsEl = document.querySelector('.spells');
const miscEl = document.querySelector('.miscinfo');

function showBasicInfo(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    document.getElementById("infoDropdown").classList.toggle("show");
}

function showLevels(event) {
    if (!event.target.matches('.levels')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    document.getElementById("levelsDropdown").classList.toggle("show");
}

function showClass(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    document.getElementById("classesDropdown").classList.toggle("show");
}

function showProficiencies(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    document.getElementById("profDropdown").classList.toggle("show");
}

function showEquip(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    document.getElementById("equipDropdown").classList.toggle("show");
}

function showSpells(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    document.getElementById("spellsDropdown").classList.toggle("show");
}

function showMisc(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    document.getElementById("miscDropdown").classList.toggle("show");
}


basicInfoEl.addEventListener("click", showBasicInfo);
levelsEl.addEventListener("click", showLevels);
classEl.addEventListener("click", showClass);
proficienciesEl.addEventListener("click", showProficiencies);
equipEl.addEventListener("click", showEquip);
spellsEl.addEventListener("click", showSpells);
miscEl.addEventListener("click", showMisc);