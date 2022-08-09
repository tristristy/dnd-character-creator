const { SkillProf } = require("../models");

const skillData = [
  {
    name: "Acrobatics",
    AS_id: 2,
  },
  {
    name: "Animal Handling",
    AS_id: 5,
  },
  {
    name: "Arcana",
    AS_id: 4,
  },
  {
    name: "Athletics",
    AS_id: 1,
  },
  {
    name: "Deception",
    AS_id: 6,
  },
  {
    name: "History",
    AS_id: 4,
  },
  {
    name: "Insight",
    AS_id: 5,
  },
  {
    name: "Intimidation",
    AS_id: 6,
  },
  {
    name: "Investigation",
    AS_id: 4,
  },
  {
    name: "Medicine",
    AS_id: 5,
  },
  {
    name: "Nature",
    AS_id: 4,
  },
  {
    name: "Perception",
    AS_id: 5,
  },
  {
    name: "Performance",
    AS_id: 6,
  },
  {
    name: "Persuasion",
    AS_id: 6,
  },
  {
    name: "Religion",
    AS_id: 4,
  },
  {
    name: "Slight of Hand",
    AS_id: 2,
  },
  {
    name: "Stealth",
    AS_id: 2,
  },
  {
    name: "Survival",
    AS_id: 5,
  },
];

const seedSkill = () => SkillProf.bulkcreate(seedSkill);

module.exports = seedSkill;
