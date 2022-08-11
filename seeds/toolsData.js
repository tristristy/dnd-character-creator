const { Tools } = require("../models");
  
const toolsData = [
    {
        tool_name: 'Alchemists Supplies',
        tool_type: 'Artisans Tools',
        tool_description: 'Alchemists supplies enable a character to produce useful concoctions, such as acid or alchemists fire. Components: Alchemists supplies include two glass beakers, a metal frame to hold a beaker in place over an open flame, a glass stirring rod, a small mortar and pestle, and a pouch of common alchemical ingredients, including salt, powdered iron, and purified water.Arcana. Proficiency with alchemists supplies allows you to unlock more information on Arcana checks involving potions and similar materials. Investigation: When you inspect an area for clues, proficiency with alchemists supplies grants additional insight into any chemicals or other substances that might have been used in the area. Alchemical Crafting: You can use this tool proficiency to create alchemical items. A character can s pend money to collect raw materials, which weigh 1 pound for every 50 gp spent. The DM can allow a character to make a check using the indicated skill with advantage. As part of a long rest, you can use alchemists supplies to make one dose of acid, alchemists fire, antitoxin, oil, perfume, or soap. Subtract half the value of the created item from the total gp worth of raw materials you are carrying.'
    },
    {
        tool_name: 'Brewers Supplies', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Brewing is the art of producing beer. Not only does beer serve as an alcoholic beverage, but the process of brewing purifies water. Crafting beer takes weeks of fermentation, but only a few hours of work. Components: Brewers supplies include a large glass jug, a quantity of hops, a siphon, and several feet of tubing. History: Proficiency with brewers supplies gives you additional insight on Intelligence (History) checks concerning events that involve alcohol as a significant element. Medicine: This tool proficiency grants additional insight when you treat anyone suffering from alcohol poisoning or when you can use alcohol to dull pain. Persuasion: A stiff drink can help soften the hardest heart. Your proficiency with brewers supplies can help you ply someone with drink, giving them just enough alcohol to mellow their mood. Potable Water. Your knowledge of brewing enables you to purify water that would otherwise be undrinkable. As part of a long rest, you can purify up to 6 gallons of water, or 1 gallon as part of a short rest.'
    },
    {
        tool_name: 'Caligraphers Supplies', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Calligraphy treats writing as a delicate, beautiful art. Calligraphers produce text that is pleasing to the eye, using a style that is difficult to forge. Their supplies also give them some ability to examine scripts and determine if they are legitimate, since a calligraphers training involves long hours of studying writing and attempting to replicate its style and design. Components: Calligraphers supplies include ink, a dozen sheets of parchment, and three quills. Arcana: Although calligraphy is of little help in deciphering the content of magical writings, proficiency with these supplies can aid in identifying who wrote a script of a magical nature. History: This tool proficiency can augment the benefit of successful checks made to analyze or investigate ancient writings, scrolls, or other texts, including runes etched in stone or messages in frescoes or other displays. Decipher Treasure Map: This tool proficiency grants you expertise in examining maps. You can make an Intelligence check to determine a maps age, whether a map includes any hidden messages, or similar facts.'
    },
    {
        tool_name: 'Carpenters Tools', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Skill at carpentry enables a character to construct wooden structures. A carpenter can build a house, a shack, a wooden cabinet, or similar items. Components. Carpenters tools include a saw, a hammer, nails, a hatchet, a square, a ruler, an adze, a plane, and a chisel. History: This tool proficiency aids you in identifying the use and the origin of wooden buildings and other large wooden objects. Investigation: You gain additional insight when inspecting areas within wooden structures, because you know tricks of construction that can conceal areas from discovery. Perception.:You can spot irregularities in wooden walls or floors, making it easier to find trap doors and secret passages. Stealth: You can quickly assess the weak spots in a wooden floor, making it easier to avoid the places that creak and groan when theyre stepped on. Fortify: With 1 minute of work and raw materials, you can make a door or window harder to force open. Increase the DC needed to open it by 5. Temporary Shelter: As part of a long rest, you can construct a lean-to or a similar shelter to keep your group dry and in the shade for the duration of the rest. Because it was fashioned quickly from whatever wood was available , the shelter collapses 1d3 days after being assembled.'
    },
    {
        tool_name: 'Cartographers Tools', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Using cartographers tools, you can create accurate maps to make travel easier for yourself and those who come after you. These maps can range from large-scale depictions of mountain ranges to diagrams that show the layout of a dungeon level. Components: Cartographers tools consist of a quill, ink, parchment, a pair of compasses, calipers, and a ruler. Arcana: History, Religion. You can use your knowledge of maps and locations to unearth more detailed information when you use these skills. For instance, you might spot hidden messages in a map, identify when the map was made to determine if geographical features have changed since then, and so forth. Nature: Your familiarity with physical geography makes it easier for you to answer questions or solve issues relating to the terrain around you. Survival: Your understanding of geography makes it easier to find paths to civilization, to predict areas where villages or towns might be found, and to avoid becoming lost. You have studied so many maps that common patterns, such as how trade routes evolve and where settlements a rise in relation to geographic locations, are familiar to you. Craft a Map: While traveling, you can draw a map as you go in addition to engaging in other activity.'
    },
    {
        tool_name: 'Cobblers Tools', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Although the cobblers trade might seem too humble for an adventurer, a good pair of boots will see a character across rugged wilderness and through deadly dungeons. Components: Cobblers tools consist of a hammer, an awl, a knife, a shoe stand, a cutter, spare leather, and thread. Arcana: Your knowledge of shoes aids you in identifying the magical properties of enchanted boots or the history of such items. Investigation: Footwear holds a surprising number of secrets. You can learn where someone has recently visited by examining the wear and the dirt that has accumulated on their shoes. Your experience in repairing shoes makes it easier for you to identify where damage might come from. Maintain Shoes: As part of a long rest, you can repair your companions shoes. For the next 24 hours, up to six creatures of your choice who wear shoes you worked on can travel up to 10 hours a day without making saving throws to avoid exhaustion. Craft Hidden Compartment: With 8 hours of work, you can add a hidden compartment to a pair of shoes. The compartment can hold an object up to 3 inches long and 1 inch wide and deep. You make an Intelligence check using your tool proficiency to determine the Intelligence (Investigation) check DC needed to find the compartment.'
    },
    {
        tool_name: 'Cooks Utensils', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Adventuring is a hard life. With a cook along on the journey, your meals will be much better than the typical mix of hardtack and dried fruit. Components: Cooks utensils include a metal pot, knives, forks, a stirring spoon, and a ladle. History: Your knowledge of cooking techniques allows you to assess the social patterns involved in a cultures eating habits. Medicine: When administering treatment, you can transform medicine that is bitter or sour into a pleasing concoction. Survival: When foraging for food, you can make do with ingredients you scavenge that others would be unable to transform into nourishing meals. Prepare Meals: As part of a short rest, you can prepare a tasty meal that helps your companions regain their strength. You and up to five creatures of your choice regain 1 extra hit point per Hit Die spent during a short rest, provided you have access to your cooks utensils and sufficient food.'
    },
    {
        tool_name: 'Glassblowers Tools', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Someone who is proficient with glassblowers tools has not only the ability to shape glass, but also specialized knowledge of the methods used to produce glass objects. Components: The tools include a blowpipe, a small marver, blocks, and tweezers. You need a source of heat to work glass. Arcana: Your knowledge of glassmaking techniques a ids you when you examine glass objects, such as potion bottles or glass items found in a treasure hoard. For instance, you can study how a glass potion bottle has been changed by its contents to help determine a potions effects. (A potion might leave behind a residue, deform the glass, or stain it.)Investigation: When you study an area, your knowledge can aid you if the clues include broken glass or glass objects. Identify Weakness: With 1 minute of study, you can identify the weak points in a glass object. Any damage dealt to the object by striking a weak spot is doubled.'
    },
    {
        tool_name: 'Jewelers Tools', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Training with jewelers tools includes the basic techniques needed to beautify gems. It also gives you expertise in identifying precious stones. Components: Jewelers tools consist of a small saw and hammer, files, pliers, and tweezers. Arcana: Proficiency with jewelers tools grants you knowledge about the reputed mystical uses of gems. This insight proves handy when you make Arcana checks related to gems or gem-encrusted items. Investigation: When you inspect jeweled objects, your proficiency with jewelers tools aids you in picking out clues they might hold. Identify Gems: You can identify gems and determine their value at a glance.'
    },
    {
        tool_name: 'Leatherworkers Tools', 
        tool_type:'Artisans Tools', 
        tool_description: 'Knowledge of leatherworking extends to lore concerning animal hides and their properties. It also confers knowledge of leather armor and similar goods. Components: Leatherworkers tools include a knife, a small mallet, an edger, a hole punch, thread, and leather scraps. Arcana: Your expertise in working with leather grants you added insight when you inspect magic items crafted from leather, such as boots and some cloaks. Investigation: You gain added insight when studying leather items or clues related to them, as you draw on your knowledge of leather to pick out details that others would overlook. Identify Hides: When looking at a hide or a leather item, you can determine the source of the leather and any special techniques used to treat it. For example, you can spot the difference between leather crafted using dwarven methods and leather crafted using halfling methods.'
    },
    {
        tool_name: 'Masons Tools', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Masons tools allow you to craft stone structures, including walls and buildings crafted from brick. Components: Masons tools consist of a trowel, a hammer, a chisel, brushes, and a square. History: Your expertise aids you in identifying a stone buildings date of construction and purpose, along with insight into who might have built it. Investigation: You gain additional insight when inspecting areas within stone structures. Perception: You can spot irregularities in stone walls or floors, making it easier to find trap doors and secret passages. Demolition: Your knowledge of masonry allows you to spot weak points in brick walls. You deal double damage to such structures with your weapon attacks.'
    },
    {
        tool_name: 'Painters Supplies', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Proficiency with painters supplies represents your ability to paint and draw. You also acquire an understanding of art history, which can aid you in examining works of art. Components: Painters supplies include an easel, canvas, paints, brushes, charcoal sticks, and a palette. Arcana, History, Religion: Your expertise aids you in uncovering lore of any sort that is attached to a work of art, such as the magical properties of a painting or the origins of a strange mural found in a dungeon. Investigation, Perception: When you inspect a painting or a similar work of visual art, your knowledge of the practices behind creating it can grant you additional insight. Painting and Drawing. As part of a short or long rest, you can produce a simple work of art. Although your work might lack precision, you can capture an image or a scene, or make a quick copy of a piece of art you saw.'
    },
    {
        tool_name: 'Potters Tools', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Potters tools are used to create a variety of ceramic objects, most typically pots and similar vessels. Components: Potters tools include potters needles, ribs, scrapers, a knife, and calipers. History: Your expertise aids you in identifying ceramic objects, including when they were created and their likely place or culture of origin. Investigation, Perception: You gain additional insight when inspecting ceramics, uncovering clues others would overlook by spotting minor irregularities. Reconstruction: By examining pottery shards, you can determine an objects original, intact form and its likely purpose.'
    },
    {
        tool_name: 'Smiths Tools', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Smiths tools allow you to work metal, beating it to alter its shape, repair damage, or work raw ingots into useful items. Components: Smiths tools include hammers, tongs, charcoal, rags, and a whetstone. Arcana and History: Your expertise lends you additional insight when examining metal objects, such as weapons. Investigation: You can spot clues and make deductions that others might overlook when an investigation involves armor, weapons, or other metalwork. Repair: With access to your tools and an open flame hot enough to make metal pliable, you can restore 10 hit points to a damaged metal object for each hour of work.'
    },
    {
        tool_name: 'Tinkers Tools', 
        tool_type: 'Artisans Tools', 
        tool_description: 'A set of tinkers tools is designed to enable you to repair many mundane objects. Though you cant manufacture much with tinkers tools, you can mend torn clothes, sharpen a worn sword, and patch a tattered suit of chain mail. Components: Tinkers tools include a variety of hand tools, thread, needles, a whetstone, scraps of cloth and leather, and a small pot of glue. History: You can determine the age and origin of objects, even if you have only a few pieces remaining from the original.Investigation: When you inspect a damaged object, you gain knowledge of how it was damaged and how long ago. Repair. You can restore 10 hit points to a damaged object for each hour of work. For any object, you need access to the raw materials required to repair it. For metal objects, you need access to an open flame hot enough to make the metal pliable.'
    },
    {
        tool_name: 'Weavers Tools', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Weavers tools allow you to create cloth and tailor it into articles of clothing. Components: Weavers tools include thread, needles, and scraps of cloth. You know how to work a loom, but such equipment is too large to transport. Arcana, History: Your expertise lends you additional insight when examining cloth objects, including cloaks and robes. Investigation: Using your knowledge of the process of creating cloth objects, you can spot clues and make deductions that others would overlook when you examine tapestries, upholstery, clothing, and other woven items. Repair: As part of a short rest, you can repair a single damaged cloth object. Craft Clothing: Assuming you have access to sufficient cloth and thread, you can create an outfit for a creature as part of a long rest.'
    },
    {
        tool_name: 'Woodcarvers Tools', 
        tool_type: 'Artisans Tools', 
        tool_description: 'Woodcarvers tools allow you to craft intricate objects from wood, such as wooden tokens or arrows. Components: Woodcarvers tools consist of a knife, a gouge, and a small saw. Arcana, History: Your expertise lends you additional insight when you examine wooden objects, such as figurines or arrows. Nature: Your knowledge of wooden objects gives you some added insight when you examine trees. Repair: As part of a short rest, you can repair a single damaged wooden object. Craft Arrows. As part of a short rest, you can craft up to five arrows. As part of a long rest, you can craft up to twenty. You must have enough wood on hand to produce them.'
    },
    {
        tool_name: 'Bagpipes', 
        tool_type: 'Musical Instrument', 
        tool_description: 'A reeded woodwind instrument consisting of several pipes connected to a bladder filled with air. The bladder itself would be made of various types of leather. More expensive bagpipes might have gold or silver inlays along the pipes and chanter (the pipe with holes which you cover to produce different notes.)'
    },
    {
        tool_name:'Drum', 
        tool_type: 'Musical Instrument', 
        tool_description: 'A drum in the fantasy setting refers to any form of leather pulled over an open wooden barrel. The size of the barrel and tautness of the leather all greatly affect the pitch and sound of the drum, so a single musician may carry multiple to create a deeper harmony.'
    },
    {
        tool_name: 'Dulcimer', 
        tool_type: 'Musical Instrument', 
        tool_description: 'Dulcimers come in many shapes and sizes, but consist of a hollow wooden slab with strings running along the body, much like a guitar or violin. These strings however, are hit with small hammers to produce notes instead of being plucked. A musician would likely carry a uniquely shaped dulcimer to garner interest.'
    },
    {
        tool_name: 'Flute', 
        tool_type: 'Musical Instrument', 
        tool_description: 'A very simple instrument consisting of a wooden, or sometimes metal, tube with holes that are covered to create sounds. Medieval flutes would look much more similar to a sideways recorder than they would to a modern flute which has a series of valves running along the body.'
    },
    {
        tool_name: 'Lute', 
        tool_type: 'Musical Instrument', 
        tool_description: 'A plucked string instrument with a deep hollow body made of wood. Typically lutes have an opening on the front for sound to come out of, but there are some enclosed lutes which create a more eerie and muffled sound.'
    },
    {
        tool_name:'Lyre', 
        tool_type: 'Musical Instrument', 
        tool_description: 'Lyres have a U-shaped body with a connecting piece along the top of the U and several plucked strings running parallel to the sides. These range from very simple to extremely ornate and can have any number of strings, although a standard lyre is wooden with 7 strings.'
    },
    {
        tool_name: 'Horn', 
        tool_type: 'Musical Instrument', 
        tool_description: 'Horns are a wide range of instruments consisting of a brass tube with a bell shaped opening on one end and a smaller mouthpiece on the other. Typically speaking, the smaller the length of pipe is, the higher of a pitch the instrument will make. Depending on the technological state of your world, horns may even have valve-like openings which , when pressed, change the pitch of the instrument.'
    },
    {
        tool_name: 'Pan Flute', 
        tool_type: 'Musical Instrument', 
        tool_description: 'A series of wooden thin wooden tubes of various lengths joined together side by side. The result is what looks like a triangle with the shortest tube on one side and the longest at the other. The musician blows through the top, shifting to different tubes to produce different notes.'
    },
    {
        tool_name: 'Shawn', 
        tool_type: 'Musical Instrument', 
        tool_description: 'A length of wood ending in a flared bell, much like a horn. Instead of a mouthpiece, the shawm has a reed which the musician vibrates to create pitches. Shawms can be of various sizes, with the smaller being the higher pitched, but all have a series of holes bored into them to create the different individual notes.'
    },
    {
        tool_name: 'Viol', 
        tool_type: 'Musical Instrument', 
        tool_description: 'A six stringed instrument, the precursor of most stringed instruments like the violin, cello, etc. The strings, which line a hollow body, can be plucked or pressed against the body at different lengths along the neck, and have a string drawn against them to create a distinctly vibrato (vibrating) sound. Viols come in various sizes, which eventually become the specific instruments of the viol family'
    },
    {
        tool_name: 'Disguise Kit', 
        tool_type: 'Miscellaneous', 
        tool_description: 'The perfect tool for anyone who wants to engage in trickery, a disguise kit enables its owner to adopt a false identity. Components: A disguise kit includes cosmetics, hair dye, small props, and a few pieces of clothing. Deception: In certain cases, a disguise can improve your ability to weave convincing lies. Intimidation: The right disguise can make you look more fearsome, whether you want to scare someone away by posing as a plague victim or intimidate a gang of thugs by taking the appearance of a bully. Performance: A cunning disguise can enhance an audiences enjoyment of a performance, provided the disguise is properly designed to evoke the desired reaction. Persuasion: Folk tend to trust a person in uniform. If you disguise yourself as an authority figure, your efforts to persuade others are often more effective. Create Disguise: As part of a long rest, you can create a disguise. It takes you 1 minute to don such a disguise once you have created it. You can carry only one such disguise on you at a time without drawing undue attention, unless you have a Bag of Holding or a similar method to keep them hidden. Each disguise weighs 1 pound. At other times, it takes 10 minutes to craft a disguise that involves moderate changes to your appearance, and 30 minutes for one that requires more extensive changes.'
    },
    {
        tool_name: 'Forgery Kit', 
        tool_type: 'Miscellaneous', 
        tool_description: 'A forgery kit is designed to duplicate documents and to make it easier to copy a persons seal or signature. Components: A forgery kit includes several different types of ink, a variety of parchments and papers, several quills, seals and sealing wax, gold and silver leaf, and small tools to sculpt melted wax to mimic a seal. Arcana: A forgery kit can be used in conjunction with the Arcana skill to determine if a magic item is real or fake. Deception: A well-crafted forgery, such as papers proclaiming you to be a noble or a writ that grants you safe passage, can lend credence to a lie. History: A forgery kit combined with your knowledge of history improves your ability to create fake historical documents or to tell if an old document is authentic. Investigation: When you examine objects, proficiency with a forgery kit is useful for determining how an object was made and whether it is genuine. Other Tools: Knowledge of other tools makes your forgeries that much more believable. For example, you could combine proficiency with a forgery kit and proficiency with cartographers tools to make a fake map. Quick Fake: As part of a short rest, you can produce a forged document no more than one page in length. As part of a long rest, you can produce a document that is up to four pages long. Your Intelligence check using a forgery kit determines the DC for someone elses Intelligence (Investigation) check to spot the fake.'
    },
    {
        tool_name: 'Herbalism Kit', 
        tool_type: 'Miscellaneous', 
        tool_description: 'Proficiency with an herbalism kit allows you to identify plants and safely collect their useful elements. Components: An herbalism kit includes pouches to store herbs, clippers and leather gloves for collecting plants, a mortar and pestle, and several glass jars. Arcana: Your knowledge of the nature and uses of herbs can add insight to your magical studies that deal with plants and your attempts to identify potions. Investigation: When you inspect an area overgrown with plants, your proficiency can help you pick out details and clues that others might miss. Medicine: Your mastery of herbalism improves your ability to treat illnesses and wounds by augmenting your methods of care with medicinal plants. Nature and Survival: When you travel in the wild, your skill in herbalism makes it easier to identify plants and spot sources of food that others might overlook. Identify Plants: You can identify most plants with a quick inspection of their appearance and smell.'
    },
    {
        tool_name: 'Navigators Tools', 
        tool_type: 'Miscellaneous', 
        tool_description: 'Proficiency with navigators tools helps you determine a true course based on observing the stars. It also grants you insight into charts and maps while developing your sense of direction. Components. Navigators tools include a sextant, a compass, calipers, a ruler, parchment, ink, and a quill. Survival. Knowledge of navigators tools helps you avoid becoming lost and also grants you insight into the most likely location for roads and settlements. Sighting. By taking careful measurements, you can determine your position on a nautical chart and the time of day.'
    },
    {
        tool_name: 'Poisoners Kit', 
        tool_type: 'Miscellaneous', 
        tool_description: 'A poisoners kit is a favored resource for thieves, assassins, and others who engage in skulduggery. It allows you to apply poisons and create them from various materials. Your knowledge of poisons also helps you treat them. Components: A poisoners kit includes glass vials, a mortar and pestle, chemicals, and a glass stirring rod. History: Your training with poisons can help you when you try to recall facts about infamous poisonings. Investigation, Perception: Your knowledge of poisons has taught you to handle those substances carefully, giving you an edge when you inspect poisoned objects or try to extract clues from events that involve poison. Medicine: When you treat the victim of a poison, your knowledge grants you added insight into how to provide the best care to your patient. Nature, Survival: Working with poisons enables you to acquire lore about which plants and animals are poisonous. Handle Poison: Your proficiency allows you to handle and apply a poison without risk of exposing yourself to its effects.'
    },
    {
        tool_name: 'Thieves Tools', 
        tool_type: 'Miscellaneous', 
        tool_description: 'Perhaps the most common tools used by adventurers, thieves tools are designed for picking locks and foiling traps. Proficiency with the tools also grants you a general knowledge of traps and locks. Components: Thieves tools include a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. History: Your knowledge of traps grants you insight when answering questions about locations that are renowned for their traps. Investigation and Perception: You gain additional insight when looking for traps, because you have learned a variety of common signs that betray their presence. Set a Trap: Just as you can disable traps, you can also set them. As part of a short rest, you can create a trap using items you have on hand. The total of your check becomes the DC for someone elses attempt to discover or disable the trap. The trap deals damage appropriate to the materials used in crafting it (such as poison or a weapon) or damage equal to half the total of your check, whichever the DM deems appropriate.'
    }
]  

const seedTools = () => Tools.bulkcreate(toolsData);
module.exports = seedTools;