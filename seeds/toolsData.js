const { Tool } = require('../models');

const toolData = [
  {
    //1
    name: "Artisans Tools",
  },
  {
    //2
    name: "Gaming Sets",
  },
  {
    //3
    name: "Musical Instrument",
  },
  {
    //4
    name: "Navigator's Tools",
  },
  {
    //5
    name: "Thieves' Tools",
  },
  {
    //6
    name: "Forgery Kit",
  },
  {
    //7
    name: "Disguise Kit",
  },
  {
    //8
    name: "Herbalism Kit",
  },
  {
    //9
    name: "Land Vehicle",
  },
  {
    //10
    name: "Water Vehicle",
  },
];

const seedTool = () => Tool.bulkcreate(seedTool);

module.exports = seedTool;