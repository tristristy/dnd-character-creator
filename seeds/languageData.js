const { Language } = require("../models");

const languageData = [
  {
    language_name: "Common",
  },
  {
    language_name: "Dwarvish",
  },
  {
    language_name: "Elvish",
  },
  {
    language_name: "Giant",
  },
  {
    language_name: "Gnomish",
  },
  {
    language_name: "Goblin",
  },
  {
    language_name: "Halfling",
  },
  {
    language_name: "Orc",
  },
  {
    language_name: "Abyssal",
  },
  {
    language_name: "Celestial",
  },
  {
    language_name: "Deep Speech",
  },
  {
    language_name: "Draconic",
  },
  {
    language_name: "Infernal",
  },
  {
    language_name: "Primordial",
  },
  {
    language_name: "Sylvian",
  },
  {
    language_name: "Undercommon",
  },
  {
    language_name: "One of your choice",
  },
  {
    language_name: "Two of your choice",
  },
];

const seedLanguage = () => Language.bulkcreate(languageData);
module.exports = seedLanguage;
