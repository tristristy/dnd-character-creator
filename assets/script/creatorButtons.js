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
const createBtn = document.querySelector('.createchara');

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

// proficeincies
const profInputEl = document.getElementById('prof-input');
const strengthBtn = document.getElementById('strength');
const dexterityBtn = document.getElementById('dexterity');
const constitutionBtn = document.getElementById('constitution');
const intelligenceBtn = document.getElementById('intelligence');
const wisdomBtn = document.getElementById('wisdom');
const charismaBtn = document.getElementById('charisma');

// skills
const skillsDropdown = document.querySelector('.dropdown-content');
const skillsInputEl = document.getElementById('skills-input');

// tools
const toolsInputEl = document.getElementById('tools-input');

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
  acolyteBG.onclick = () => {
    bgInputEl.textContent = "Background: Acolyte";
    skillsInputEl.textContent = 'Skills: Athletics, Religion';
    toolsInputEl.textContent = 'Equipment:';
  }
  charlatanBG.onclick = () => {
    bgInputEl.textContent = "Background: Charlatan";
    skillsInputEl.textContent = 'Skills: Deception, Slight of Hand';
    toolsInputEl.textContent = 'Equipment: Forgery Kit, Disguise Kit';
  }
  spyBG.onclick = () => {
    bgInputEl.textContent = "Background: Spy";
    skillsInputEl.textContent = 'Skills: Deception, Stealth';
    toolsInputEl.textContent = 'Equipment: Gaming Set, Thieves Tools';
  }
  criminalBG.onclick = () => {
    bgInputEl.textContent = "Background: Criminal";
    skillsInputEl.textContent = 'Skills: Deception, Stealth';
    toolsInputEl.textContent = 'Equipment: Gaming Set, Thieves Tools';
  }
  entertainerBG.onclick = () => {
    bgInputEl.textContent = "Background: Entertainer";
    skillsInputEl.textContent = 'Skills: Acrobatics, Performance';
    toolsInputEl.textContent = 'Equipment: Disguise Kit, Musical Instrument';
  }
  gladiatorBG.onclick = () => {
    bgInputEl.textContent = "Background: Gladiator";
    skillsInputEl.textContent = 'Skills: Acrobatics, Performance';
    toolsInputEl.textContent = 'Equipment: Disguise Kit, Musical Instrument';
  }
  folkHeroBG.onclick = () => {
    bgInputEl.textContent = "Background: Folk Hero";
    skillsInputEl.textContent = 'Skills: Animal Handling, Survival';
    toolsInputEl.textContent = 'Equipment: Artisans Tools, Land Vehicle';
  }
  guildArtisanBG.onclick = () => {
    bgInputEl.textContent = "Background: Guild Artisan";
    skillsInputEl.textContent = 'Skills: Insight, Persuasion';
    toolsInputEl.textContent = 'Equipment: Artisans Tools';
  }
  guildMerchantBG.onclick = () => {
    bgInputEl.textContent = "Background: Guild Merchant";
    skillsInputEl.textContent = 'Skills: Insight, Persuasion';
    toolsInputEl.textContent = 'Equipment: Artisans Tools';
  }
  hermitBG.onclick = () => {
    bgInputEl.textContent = "Background: Hermit";
    skillsInputEl.textContent = 'Skills: Medicine, Religion';
    toolsInputEl.textContent = 'Equipment: Herbalism Kit';
  }
  nobleBG.onclick = () => {
    bgInputEl.textContent = "Background: Noble";
    skillsInputEl.textContent = 'Skills: History, Persuasion';
    toolsInputEl.textContent = 'Equipment: Gaming Set';
  }
  knightBG.onclick = () => {
    bgInputEl.textContent = "Background: Knight";
    skillsInputEl.textContent = 'Skills: History, Persuasion';
    toolsInputEl.textContent = 'Equipment: Gaming Set';
  }
  retainersBG.onclick = () => {
    bgInputEl.textContent = "Background: Retainers";
    skillsInputEl.textContent = 'Skills: History, Persuasion';
    toolsInputEl.textContent = 'Equipment: Gaming Set';
  }
  outlanderBG.onclick = () => {
    bgInputEl.textContent = "Background: Outlander";
    skillsInputEl.textContent = 'Skills: Athletics, Survival';
    toolsInputEl.textContent = 'Equipment: Musical Instrument';
  }
  sageBG.onclick = () => {
    bgInputEl.textContent = "Background: Sage";
    skillsInputEl.textContent = 'Skills: Arcana, History';
    toolsInputEl.textContent = 'Equipment:';
  }
  sailorBG.onclick = () => {
    bgInputEl.textContent = "Background: Sailor";
    skillsInputEl.textContent = 'Skills: Athletics, Perception';
    toolsInputEl.textContent = 'Equipment: Navigators Tools, Vechicles (Water)';
  }
  pirateBG.onclick = () => {
    bgInputEl.textContent = "Background: Pirate";
    skillsInputEl.textContent = 'Skills: Athletics, Perception';
    toolsInputEl.textContent = 'Equipment: Navigators Tools, Vechicles (Water)';
  }
  soldierBG.onclick = () => {
    bgInputEl.textContent = "Background: Soldier";
    skillsInputEl.textContent = 'Skills: Athletics, Intimidation';
    toolsInputEl.textContent = 'Equipment: Gaming Set, Vehicles (Land)';
  }
  urchinBG.onclick = () => {
    bgInputEl.textContent = "Background: Urchin";
    skillsInputEl.textContent = 'Skills: Slight of Hand, Survival';
    toolsInputEl.textContent = 'Equipment: Disguise Kit, Thieves Tools';
  }
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

    // dropdown choices
    strengthBtn.onclick = () => {
      // proficiency form
      profInputEl.textContent = 'Proficiencies: Strength';

      //skills drops
      skillsDropdown.textContent = "";
      var strengthSkill = document.getElementById('skill');
      strengthSkill.textContent = 'Athletics';

      //extras
      var skill = document.getElementById('skill');
      var skill2 = document.getElementById('skill2');
      var skill3 = document.getElementById('skill3');
      var skill4 = document.getElementById('skill4');
      var skill5 = document.getElementById('skill5');
      skill.textContent = "";
      skill2.textContent = "";
      skill3.textContent = "";
      skill4.textContent = "";
      skill5.textContent = "";

      // clear out old skills
      // skillsInputEl.textContent = "Skills:";

      // skill form
      strengthSkill.onclick = () => {skillsInputEl.textContent = 'Skills: Athletics'}
    }
    dexterityBtn.onclick = () => {
      profInputEl.textContent = 'Proficiencies: Dexterity';

      //skills drops
      skillsDropdown.textContent = "";
      var dexteritySkill = document.getElementById('skill');
      dexteritySkill.textContent = 'Arobatics';
      var dexteritySkill2 = document.getElementById('skill2');
      dexteritySkill2.textContent = 'Slight of Hand';
      var dexteritySkill3 = document.getElementById('skill3');
      dexteritySkill3.textContent = 'Stealth';

      // extras
      var skill4 = document.getElementById('skill4');
      var skill5 = document.getElementById('skill5');
      skill4.textContent = "";
      skill5.textContent = "";

      // clear out old skills
      // skillsInputEl.textContent = "Skills:";

      // skill form
      dexteritySkill.onclick = () => {skillsInputEl.textContent = 'Skills: Acrobatics'}
      dexteritySkill2.onclick = () => {skillsInputEl.textContent = 'Skills: Slight of Hand'}
      dexteritySkill3.onclick = () => {skillsInputEl.textContent = 'Skills: Stealth'}
    }
    constitutionBtn.onclick = () => {
      // profieciency form
      profInputEl.textContent = 'Proficiencies: Constitution';
      
      //skills drops
      skillsDropdown.textContent = "";

      //extras
      var skill = document.getElementById('skill');
      var skill2 = document.getElementById('skill2');
      var skill3 = document.getElementById('skill3');
      var skill4 = document.getElementById('skill4');
      var skill5 = document.getElementById('skill5');
      skill.textContent = "";
      skill2.textContent = "";
      skill3.textContent = "";
      skill4.textContent = "";
      skill5.textContent = "";

      // clear out old skills
      // skillsInputEl.textContent = "Skills: None";
    }
    intelligenceBtn.onclick = () => {
      // proficiency form
      profInputEl.textContent = 'Proficiencies: Intelligence';

      //skills drops
      skillsDropdown.textContent = "";
      var intelSkill = document.getElementById('skill');
      intelSkill.textContent = 'Arcana';
      var intelSkill2 = document.getElementById('skill2');
      intelSkill2.textContent = 'History';
      var intelSkill3 = document.getElementById('skill3');
      intelSkill3.textContent = 'Investigation';
      var intelSkill4 = document.getElementById('skill4');
      intelSkill4.textContent = 'Nature';
      var intelSkill5 = document.getElementById('skill5');
      intelSkill5.textContent = 'Religion';

      // clear out old skills
      // skillsInputEl.textContent = "Skills:";

      // skill form
      intelSkill.onclick = () => {skillsInputEl.textContent = 'Skills: Arcana'}
      intelSkill2.onclick = () => {skillsInputEl.textContent = 'Skills: History'}
      intelSkill3.onclick = () => {skillsInputEl.textContent = 'Skills: Investigation'}
      intelSkill4.onclick = () => {skillsInputEl.textContent = 'Skills: Nature'}
      intelSkill5.onclick = () => {skillsInputEl.textContent = 'Skills: Religion'}
    }
    wisdomBtn.onclick = () => {
      profInputEl.textContent = 'Proficiencies: Wisdom';
      
      //skills drops
      skillsDropdown.textContent = "";
      var wisdomSkill = document.getElementById('skill');
      wisdomSkill.textContent = 'Animal Handling';
      var wisdomSkill2 = document.getElementById('skill2');
      wisdomSkill2.textContent = 'Insight';
      var wisdomSkill3 = document.getElementById('skill3');
      wisdomSkill3.textContent = 'Medicine';
      var wisdomSkill4 = document.getElementById('skill4');
      wisdomSkill4.textContent = 'Perception';
      var wisdomSkill5 = document.getElementById('skill5');
      wisdomSkill5.textContent = 'Survival';

      // clear out old skills
      // skillsInputEl.textContent = "Skills:";

      // skill form
      wisdomSkill.onclick = () => {skillsInputEl.textContent = 'Skills: Animal Handling'}
      wisdomSkill2.onclick = () => {skillsInputEl.textContent = 'Skills: Insight'}
      wisdomSkill3.onclick = () => {skillsInputEl.textContent = 'Skills: Medicine'}
      wisdomSkill4.onclick = () => {skillsInputEl.textContent = 'Skills: Perception'}
      wisdomSkill5.onclick = () => {skillsInputEl.textContent = 'Skills: Survival'}
    }
    charismaBtn.onclick = () => {
      profInputEl.textContent = 'Proficiencies: Charisma';

      //skills drops
      skillsDropdown.textContent = "";
      var charismaSkill = document.getElementById('skill');
      charismaSkill.textContent = 'Deception';
      var charismaSkill2 = document.getElementById('skill');
      charismaSkill2.textContent = 'Intimidation';
      var charismaSkill3 = document.getElementById('skill');
      charismaSkill3.textContent = 'Performance';
      var charismaSkill4 = document.getElementById('skill');
      charismaSkill4.textContent = 'Persuasion';

      //extras
      var skill5 = document.getElementById('skill5');
      skill5.textContent = "";

      // clear out old skills
      // skillsInputEl.textContent = "Skills:";

      // skill form
      charismaSkill.onclick = () => {skillsInputEl.textContent = 'Skills: Deception'}
      charismaSkill2.onclick = () => {skillsInputEl.textContent = 'Skills: Intimidation'}
      charismaSkill3.onclick = () => {skillsInputEl.textContent = 'Skills: Performance'}
      charismaSkill4.onclick = () => {skillsInputEl.textContent = 'Skills: Persuasion'}
    }
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

// delete button
deleteBtn.onclick = (event) => {
  event.preventDefault();
  var elements = document.getElementsByTagName("input");
  for (var ii=0; ii < elements.length; ii++) {
    if (elements[ii].type == "text") {
      elements[ii].value = "";
    }
  }
}

// create button
createBtn.onclick = (event) => {
  event.preventDefault();
  // player name 
  var playerName = document.getElementById('player-name').value;
  console.log(playerName);

  // player level
  var playerLevel = document.getElementById('player-level').value;
  console.log(playerLevel);

  // player background
  var playerBackgroundEl = document.getElementById('bg-input').textContent.split(' ');
  var playerBackground = playerBackgroundEl[1];
  console.log(playerBackground);

  // player race 
  var playerRaceEl = document.getElementById('race-input').textContent.split(' ');
  var playerRace = playerRaceEl[1];
  console.log(playerRace);

  // player class 
  var playerClassEl = document.getElementById('class-input').textContent.split(' ');
  var playerClass = playerClassEl[1];
  console.log(playerClass);

  // player subclass 
  var playerSubclassEl = document.getElementById('subclass-input').textContent.split(': ');
  var playerSubclass = playerSubclassEl[1];
  console.log(playerSubclass);

  // player proficiencies 
  var playerProfEl = document.getElementById('prof-input').textContent.split(' ');
  var playerProf = playerProfEl[1];
  console.log(playerProf);

  // player proficiencies 
  var playerSkillsEl = document.getElementById('skills-input').textContent.split(': ');
  var playerSkills = playerSkillsEl[1];
  console.log(playerSkills);

  // player tools
  var playerToolsEl = document.getElementById('tools-input').textContent.split(': ');
  var playerTools = playerToolsEl[1];
  console.log(playerTools);

  // player spells
};