// basic grabs
const backgroundEl = document.querySelector('.background');
const raceEl = document.querySelector('.race');
const skillsEl = document.querySelector('.skills');
const classEl = document.querySelector('.classes');
const subclassEl = document.querySelector('.subclasses');
const proficienciesEl = document.querySelector('.proficiencies');
const equipEl = document.querySelector('.equip');
const spellsEl = document.querySelector('.spells');
const mainFormEl =document.querySelector('.charaform');
const deleteBtn =document.querySelector('.deletebtn');

// background choices
const bgInputEl = document.getElementById("bg-input");
const acolyteBG = document.getElementById("acolyte");
const charlatanBG = document.getElementById("charlatan");
const spyBG = document.getElementById("spy");
const criminalBG = document.getElementById("criminal");
const entertainerBG = document.getElementById("entertainer");
const gladiatorBG = document.getElementById("gladiator");
const folkHeroBG = document.getElementById("folk-hero");
const guildArtisanBG = document.getElementById("guild-artisan");
const guildMerchantBG = document.getElementById("guild-merchant");
const hermitBG = document.getElementById("hermit");
const nobleBG = document.getElementById("noble");
const knightBG = document.getElementById("knight");
const retainersBG = document.getElementById("retainers");
const outlanderBG = document.getElementById("outlander");
const sageBG = document.getElementById("sage");
const sailorBG = document.getElementById("sailor");
const pirateBG = document.getElementById("pirate");
const soldierBG = document.getElementById("soldier");
const urchinBG = document.getElementById("urchin");

// race choices 
const raceInputEl = document.getElementById('race-input')
const dragonbornBtn = document.getElementById('dragonborn')
const dwarfBtn = document.getElementById('dwarf')
const elfBtn = document.getElementById('elf')
const gnomeBtn = document.getElementById('gnome')
const halfElfBtn = document.getElementById('half-elf')
const halflingBtn = document.getElementById('halfling')
const halfOrcBtn = document.getElementById('half-orc')
const humanBtn = document.getElementById('human')
const tieflingBtn = document.getElementById('tiefling')

// class choices
const classInputEl = document.getElementById('class-input')
const barbarianBtn = document.getElementById('barbarian')
const bardBtn = document.getElementById('bard')
const clericBtn = document.getElementById('cleric')
const druidBtn = document.getElementById('druid')
const fighterBtn = document.getElementById('fighter')
const monkBtn = document.getElementById('monk')
const paladinBtn = document.getElementById('paladin')
const rangerBtn = document.getElementById('ranger')
const rogueBtn = document.getElementById('rogue')
const sorcererBtn = document.getElementById('sorcerer')

//subclass 
const subclassInputEl = document.getElementById('subclass-input');
const subclassDropdown = document.querySelector('.dropdown-content');

backgroundEl.onclick = event => {
  //drop down
  if (!event.target.matches('.background')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
  }
  document.getElementById("backgroundDropdown").classList.toggle("show");

  //choices for the sheet
  acolyteBG.onclick = () => {bgInputEl.textContent = "Background: Acolyte"}
  charlatanBG.onclick = () => {bgInputEl.textContent = "Background: Charlatan"}
  spyBG.onclick = () => {bgInputEl.textContent = "Background: Spy"}
  criminalBG.onclick = () => {bgInputEl.textContent = "Background: Criminal"}
  entertainerBG.onclick = () => {bgInputEl.textContent = "Background: Entertainer"}
  gladiatorBG.onclick = () => {bgInputEl.textContent = "Background: Gladiator"}
  folkHeroBG.onclick = () => {bgInputEl.textContent = "Background: Folk Hero"}
  guildArtisanBG.onclick = () => {bgInputEl.textContent = "Background: Guild Artisan"}
  guildMerchantBG.onclick = () => {bgInputEl.textContent = "Background: Guild Merchant"}
  hermitBG.onclick = () => {bgInputEl.textContent = "Background: Hermit"}
  nobleBG.onclick = () => {bgInputEl.textContent = "Background: Noble"}
  knightBG.onclick = () => {bgInputEl.textContent = "Background: Knight"}
  retainersBG.onclick = () => {bgInputEl.textContent = "Background: Retainers"}
  outlanderBG.onclick = () => {bgInputEl.textContent = "Background: Outlander"}
  sageBG.onclick = () => {bgInputEl.textContent = "Background: Sage"}
  sailorBG.onclick = () => {bgInputEl.textContent = "Background: Sailor"}
  pirateBG.onclick = () => {bgInputEl.textContent = "Background: Pirate"}
  soldierBG.onclick = () => {bgInputEl.textContent = "Background: Soldier"}
  urchinBG.onclick = () => {bgInputEl.textContent = "Background: Urchin"}
}

raceEl.onclick = event => {
    //drop down
    if (!event.target.matches('.race')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
    document.getElementById("raceDropdown").classList.toggle("show");

    // choices for sheet
    dragonbornBtn.onclick = () => {raceInputEl.textContent = "Race: Dragonborn"}
    dwarfBtn.onclick = () => {raceInputEl.textContent = "Race: Dwarf"}
    elfBtn.onclick = () => {raceInputEl.textContent = "Race: Elf"}
    gnomeBtn.onclick = () => {raceInputEl.textContent = "Race: Gnome"}
    halfElfBtn.onclick = () => {raceInputEl.textContent = "Race: Half Elf"}
    halflingBtn.onclick = () => {raceInputEl.textContent = "Race: Halfling"}
    halfOrcBtn.onclick = () => {raceInputEl.textContent = "Race: Half Orc"}
    humanBtn.onclick = () => {raceInputEl.textContent = "Race: Human"}
    tieflingBtn.onclick = () => {raceInputEl.textContent = "Race: Tiefling"}
}

classEl.onclick = event => {
    // dropdown
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
    
    // choices for sheet
    barbarianBtn.onclick = () => {
      // class form fillout
      classInputEl.textContent = "Class: Barbarian";

      //barbarian subclass drops
      subclassDropdown.textContent = "";
      var barbarianSubclass = document.getElementById('subclass');
      barbarianSubclass.textContent = 'Path of the Berserker';
      var barbarianSubclass2 = document.getElementById('subclass2');
      barbarianSubclass2.textContent = 'Path of the Totem Warrior';

      //extras
      var subclass3 = document.getElementById('subclass3');
      var subclass4 = document.getElementById('subclass4');
      var subclass5 = document.getElementById('subclass5');
      var subclass6 = document.getElementById('subclass6');
      var subclass7 = document.getElementById('subclass7');
      subclass3.textContent = "";
      subclass4.textContent = "";
      subclass5.textContent = "";
      subclass6.textContent = "";
      subclass7.textContent = "";

      // clear out old subclass
      subclassInputEl.textContent = "Subclass:";

      // subclass form
      barbarianSubclass.onclick = () => {subclassInputEl.textContent = 'Subclass: Path of the Berserker'}
      barbarianSubclass2.onclick = () => {subclassInputEl.textContent = 'Subclass: Path of the Totem Warrior'}
    }
    bardBtn.onclick = () => {
      // class form
      classInputEl.textContent = "Class: Bard";

      // subclass drops
      var bardSubclass = document.getElementById('subclass');
      bardSubclass.textContent = 'College of Lore';
      var bardSubclass2 = document.getElementById('subclass2');
      bardSubclass2.textContent = 'College of Valor';

      //extras
      var subclass3 = document.getElementById('subclass3');
      var subclass4 = document.getElementById('subclass4');
      var subclass5 = document.getElementById('subclass5');
      var subclass6 = document.getElementById('subclass6');
      var subclass7 = document.getElementById('subclass7');
      subclass3.textContent = "";
      subclass4.textContent = "";
      subclass5.textContent = "";
      subclass6.textContent = "";
      subclass7.textContent = "";

      // clear out old subclass
      subclassInputEl.textContent = "Subclass:";

      // subclass form
      bardSubclass.onclick = () => {subclassInputEl.textContent = 'Subclass: College of Lore'}
      bardSubclass2.onclick = () => {subclassInputEl.textContent = 'Subclass: College of Valor'}
    }
    clericBtn.onclick = () => {
      // class form
      classInputEl.textContent = "Class: Cleric";

      // subclass drops
      var clericSubclass = document.getElementById('subclass');
      clericSubclass.textContent = 'Knowledge Domain';
      var clericSubclass2 = document.getElementById('subclass2');
      clericSubclass2.textContent = 'Life Domain';
      var clericSubclass3 = document.getElementById('subclass3');
      clericSubclass3.textContent = 'Light Domain';
      var clericSubclass4 = document.getElementById('subclass4');
      clericSubclass4.textContent = 'Nature Domain';
      var clericSubclass5 = document.getElementById('subclass5');
      clericSubclass5.textContent = 'Tempest Domain';
      var clericSubclass6 = document.getElementById('subclass6');
      clericSubclass6.textContent = 'Trickery Domain';
      var clericSubclass7 = document.getElementById('subclass7');
      clericSubclass7.textContent = 'War Domain';

      // clear out old subclass
      subclassInputEl.textContent = "Subclass:";

      // subclass form
      clericSubclass.onclick = () => {subclassInputEl.textContent = 'Subclass: Knowledge Domain'}
      clericSubclass2.onclick = () => {subclassInputEl.textContent = 'Subclass: Life Domain'}
      clericSubclass3.onclick = () => {subclassInputEl.textContent = 'Subclass: Light Domain'}
      clericSubclass4.onclick = () => {subclassInputEl.textContent = 'Subclass: Nature Domain'}
      clericSubclass5.onclick = () => {subclassInputEl.textContent = 'Subclass: Tempest Domain'}
      clericSubclass6.onclick = () => {subclassInputEl.textContent = 'Subclass: Trickery Domain'}
      clericSubclass7.onclick = () => {subclassInputEl.textContent = 'Subclass: War Domain'}
    }
    druidBtn.onclick = () => {
      // class form
      classInputEl.textContent = "Class: Druid";

      // subclass drops
      var druidSubclass = document.getElementById('subclass');
      druidSubclass.textContent = 'Circle of the Land';
      var druidSubclass2 = document.getElementById('subclass2');
      druidSubclass2.textContent = 'Circle of the Moon';

      //extras
      var subclass3 = document.getElementById('subclass3');
      var subclass4 = document.getElementById('subclass4');
      var subclass5 = document.getElementById('subclass5');
      var subclass6 = document.getElementById('subclass6');
      var subclass7 = document.getElementById('subclass7');
      subclass3.textContent = "";
      subclass4.textContent = "";
      subclass5.textContent = "";
      subclass6.textContent = "";
      subclass7.textContent = "";

      // clear out old subclass
      subclassInputEl.textContent = "Subclass:";

      // subclass form
      druidSubclass.onclick = () => {subclassInputEl.textContent = 'Subclass: Circle of the Land'}
      druidSubclass2.onclick = () => {subclassInputEl.textContent = 'Subclass: Circle of the Moon'}
    }
    fighterBtn.onclick = () => {
      // class form
      classInputEl.textContent = "Class: Fighter";

      // subclass drops
      var fighterSubclass = document.getElementById('subclass');
      fighterSubclass.textContent = 'Champion';
      var fighterSubclass2 = document.getElementById('subclass2');
      fighterSubclass2.textContent = 'Battle Master';
      var fighterSubclass3 = document.getElementById('subclass3');
      fighterSubclass3.textContent = 'Eldritch Knight';

      //extras
      var subclass4 = document.getElementById('subclass4');
      var subclass5 = document.getElementById('subclass5');
      var subclass6 = document.getElementById('subclass6');
      var subclass7 = document.getElementById('subclass7');
      subclass4.textContent = "";
      subclass5.textContent = "";
      subclass6.textContent = "";
      subclass7.textContent = "";
      
      // clear out old subclass
      subclassInputEl.textContent = "Subclass:";

      // subclass form
      fighterSubclass.onclick = () => {subclassInputEl.textContent = 'Subclass: Champion'}
      fighterSubclass2.onclick = () => {subclassInputEl.textContent = 'Subclass: Battle Master'}
      fighterSubclass3.onclick = () => {subclassInputEl.textContent = 'Subclass: Eldritch Knight'}
    }
    monkBtn.onclick = () => {
      // class form
      classInputEl.textContent = "Class: Monk";

      // subclass drops
      var monkSubclass = document.getElementById('subclass');
      monkSubclass.textContent = 'Way of the Open Hand';
      var monkSubclass2 = document.getElementById('subclass2');
      monkSubclass2.textContent = 'Way of the Shadow';
      var monkSubclass3 = document.getElementById('subclass3');
      monkSubclass3.textContent = 'Way of the Four Elements';

      //extras
      var subclass4 = document.getElementById('subclass4');
      var subclass5 = document.getElementById('subclass5');
      var subclass6 = document.getElementById('subclass6');
      var subclass7 = document.getElementById('subclass7');
      subclass4.textContent = "";
      subclass5.textContent = "";
      subclass6.textContent = "";
      subclass7.textContent = "";

      // clear out old subclass
      subclassInputEl.textContent = "Subclass:";

      // subclass form
      monkSubclass.onclick = () => {subclassInputEl.textContent = 'Subclass: Way of the Open Hand'}
      monkSubclass2.onclick = () => {subclassInputEl.textContent = 'Subclass: Way of the Shadow'}
      monkSubclass3.onclick = () => {subclassInputEl.textContent = 'Subclass: Way of the Four Elements'}
    }
    paladinBtn.onclick = () => {
      // class form
      classInputEl.textContent = "Class: Paladin";

      // subclass drops
      var paladinSubclass = document.getElementById('subclass');
      paladinSubclass.textContent = 'Oath of Devotion';
      var paladinSubclass2 = document.getElementById('subclass2');
      paladinSubclass2.textContent = 'Oath of the Ancients';
      var paladinSubclass3 = document.getElementById('subclass3');
      paladinSubclass3.textContent = 'Oath of Vengeance';

      //extras
      var subclass4 = document.getElementById('subclass4');
      var subclass5 = document.getElementById('subclass5');
      var subclass6 = document.getElementById('subclass6');
      var subclass7 = document.getElementById('subclass7');
      subclass4.textContent = "";
      subclass5.textContent = "";
      subclass6.textContent = "";
      subclass7.textContent = "";

      // clear out old subclass
      subclassInputEl.textContent = "Subclass:";

      // subclass form
      paladinSubclass.onclick = () => {subclassInputEl.textContent = 'Subclass: Oath of Devotion'}
      paladinSubclass2.onclick = () => {subclassInputEl.textContent = 'Subclass: Oath of the Ancients'}
      paladinSubclass3.onclick = () => {subclassInputEl.textContent = 'Subclass: Oath of Vengeance'}
    }
    rangerBtn.onclick = () => {
      // class form
      classInputEl.textContent = "Class: Ranger";

      // subclass drops
      var rangerSubclass = document.getElementById('subclass');
      rangerSubclass.textContent = 'Hunter';
      var rangerSubclass2 = document.getElementById('subclass2');
      rangerSubclass2.textContent = 'Beast Master';

      //extras
      var subclass3 = document.getElementById('subclass3');
      var subclass4 = document.getElementById('subclass4');
      var subclass5 = document.getElementById('subclass5');
      var subclass6 = document.getElementById('subclass6');
      var subclass7 = document.getElementById('subclass7');
      subclass3.textContent = "";
      subclass4.textContent = "";
      subclass5.textContent = "";
      subclass6.textContent = "";
      subclass7.textContent = "";

      // clear out old subclass
      subclassInputEl.textContent = "Subclass:";

      // subclass form
      rangerSubclass.onclick = () => {subclassInputEl.textContent = 'Subclass: Hunter'}
      rangerSubclass2.onclick = () => {subclassInputEl.textContent = 'Subclass: Beast Master'}
    }
    rogueBtn.onclick = () => {
      // class form
      classInputEl.textContent = "Class: Rogue";

      // subclass drops
      var rogueSubclass = document.getElementById('subclass');
      rogueSubclass.textContent = 'Thief';
      var rogueSubclass2 = document.getElementById('subclass2');
      rogueSubclass2.textContent = 'Assassin';
      var rogueSubclass3 = document.getElementById('subclass3');
      rogueSubclass3.textContent = 'Arcane Trickster';

      //extras
      var subclass4 = document.getElementById('subclass4');
      var subclass5 = document.getElementById('subclass5');
      var subclass6 = document.getElementById('subclass6');
      var subclass7 = document.getElementById('subclass7');
      subclass4.textContent = "";
      subclass5.textContent = "";
      subclass6.textContent = "";
      subclass7.textContent = "";

      // clear out old subclass
      subclassInputEl.textContent = "Subclass:";

      // subclass form
      rogueSubclass.onclick = () => {subclassInputEl.textContent = 'Subclass: Thief'}
      rogueSubclass2.onclick = () => {subclassInputEl.textContent = 'Subclass: Assassin'}
      rogueSubclass3.onclick = () => {subclassInputEl.textContent = 'Subclass: Arcane Trickster'}
    }
    sorcererBtn.onclick = () => {
      // class form
      classInputEl.textContent = "Class: Sorcerer";

      // subclass drops
      var sorcererSubclass = document.getElementById('subclass');
      sorcererSubclass.textContent = 'Draconic Bloodline';
      var sorcererSubclass2 = document.getElementById('subclass2');
      sorcererSubclass2.textContent = 'Wild Magic';

      //extras
      var subclass3 = document.getElementById('subclass3');
      var subclass4 = document.getElementById('subclass4');
      var subclass5 = document.getElementById('subclass5');
      var subclass6 = document.getElementById('subclass6');
      var subclass7 = document.getElementById('subclass7');
      subclass3.textContent = "";
      subclass4.textContent = "";
      subclass5.textContent = "";
      subclass6.textContent = "";
      subclass7.textContent = "";

      // clear out old subclass
      subclassInputEl.textContent = "Subclass:";

      // subclass form
      sorcererSubclass.onclick = () => {subclassInputEl.textContent = 'Subclass: Draconic Bloodline'}
      sorcererSubclass2.onclick = () => {subclassInputEl.textContent = 'Subclass: Wild Magic'}
    }
}

subclassEl.onclick = event => {
  // dropdown
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
  document.getElementById("subclassesDropdown").classList.toggle("show");
}

proficienciesEl.onclick = event => {
    // dropdown
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

skillsEl.onclick = event => {
  //drop down
  if (!event.target.matches('.skills')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
  }
  document.getElementById("skillsDropdown").classList.toggle("show");

  // main form
  var levelsForm = document.querySelector('.levelForm')
  levelsForm.classList.remove('hide');
  levelsForm.classList.toggle('show');
}

equipEl.onclick = event => {
    // dropdown
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


    // main form
    var equipForm = document.querySelector('.equipForm')
    equipForm.classList.remove('hide');
    equipForm.classList.toggle('show');
}

spellsEl.onclick = event => {
    //dropdown
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

    // main form
    var spellsForm = document.querySelector('.spellsForm')
    spellsForm.classList.remove('hide');
    spellsForm.classList.toggle('show');
}

// miscEl.onclick = event => {
//     //dropdown
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//           var openDropdown = dropdowns[i];
//           if (openDropdown.classList.contains('show')) {
//             openDropdown.classList.remove('show');
//           }
//         }
//       }
//     document.getElementById("miscDropdown").classList.toggle("show");

//     // main form
//     var miscForm = document.querySelector('.miscInfoForm')
//     miscForm.classList.remove('hide');
//     miscForm.classList.toggle('show');
// }

deleteBtn.onclick = () => {
  var elements = document.getElementsByTagName("input");
  for (var ii=0; ii < elements.length; ii++) {
    if (elements[ii].type == "text") {
      elements[ii].value = "";
    }
  }
}