const { abilityScore } = require('../models');
const AbilityScore = require('../models/AbilityScore');

const abilityData = [
    {
        AS_name: 'Strength'
    },
    {
        AS_name: 'Dexterity'
    },
    {
        AS_name: 'Constitution'
    },
    {
        AS_name: 'Inteligence'
    },
    {
        AS_name: 'Wisdom'
    },
    {
        AS_name: 'Charisma'
    },
]

const seedAS = () => AbilityScore.bulkcreate(abilityData);
module.exports = seedAS;
