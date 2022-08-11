const sequelize = require('../config/connection');
const seedLanguage = require('./languageData');
const seedSkill = require('./skillData');
const seedTool = require('./toolData');
const seedBackground = require('./backgroundData');



const seedAll = async () => {
    await sequelize.sync({ force: true});

    await seedLanguage();
    await seedSkill();
    await seedTool();
    await seedBackground();



    process.exit(0)

};

seedAll();