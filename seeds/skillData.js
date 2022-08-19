const { SkillProf } = require("../models");

const skillData = [
  {
    //1
    name: "Acrobatics",
    AS_id: 2,
  },
  {
    //2
    name: "Animal Handling",
    AS_id: 5,
  },
  {
    //3
    name: "Arcana",
    AS_id: 4,
  },
  {
    //4
    name: "Athletics",
    AS_id: 1,
  },
  {
    //5
    name: "Deception",
    AS_id: 6,
  },
  {
    //6
    name: "History",
    AS_id: 4,
  },
  {
    //7
    name: "Insight",
    AS_id: 5,
  },
  {
    //8
    name: "Intimidation",
    AS_id: 6,
  },
  {
    //9
    name: "Investigation",
    AS_id: 4,
  },
  {
    //10
    name: "Medicine",
    AS_id: 5,
  },
  {
    //11
    name: "Nature",
    AS_id: 4,
  },
  {
    //12
    name: "Perception",
    AS_id: 5,
  },
  {
    //13
    name: "Performance",
    AS_id: 6,
  },
  {
    //14
    name: "Persuasion",
    AS_id: 6,
  },
  {
    //15
    name: "Religion",
    AS_id: 4,
  },
  {
    //16
    name: "Slight of Hand",
    AS_id: 2,
  },
  {
    //17
    name: "Stealth",
    AS_id: 2,
  },
  {
    //18
    name: "Survival",
    AS_id: 5,
  },
];

const seedSkill = () => SkillProf.bulkcreate(seedSkill);

module.exports = seedSkill;
