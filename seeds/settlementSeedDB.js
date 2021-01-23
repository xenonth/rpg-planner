const mongoose = require("mongoose");
const db = require("../models");

// This file is for development purposes. Will seed the database with the following settlementList. 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rpg-generator", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

const settlementSeed = [{
    name: "CrestWood",
    type: "town",
    size: 2739,
    government: "matriarchy",
    description: "A sparse and famous wine district where many of its brands are known and imported on an international scale.  Due to this wealth manors and mansions are intertwined with distilleries.  The secret to its success is rumours of mistreatment of an underclass labour force.",

    population: {
        numberOfRaces: 3,
        races: [
            {
                raceOne: "gnome-rock",
                percentage: 35,
            },
              {
                raceTwo:"elf-high",
                percentage: 50,
            },
            {
                raceThree:"snekfolk",
                percentage: 15,
            }
        ]
    },
  
    otherInformation: "A mighty bushfire is set ablaze and the residents must act quickly to survive the ensuing calamity.",
    date: new Date(Date.now())
  }, 
  {
    name: "SylvanWood",
    type: "village",
    size: 505,
    government: "monarchy",
    description: "A vast underground mining settlement.  Approximately 90% of the population are minors with a handful of surface buildings which act as warehouses and tradestores for the town to negotiate bulk orders of its wares.  Main product is iron, steel, and some precious gems.  All races in this settlement have developed a echolocation and a type of heatvision to see better in the dark.",

    population: {
        numberOfRaces: 2,
        races: [
             {
                raceOne:"human",
                percentage: 10,
            },
            {
                raceTwo:"dwarf-mountain",
                percentage: 90,
            },
        ]
    },
  
    otherInformation: "There is an entity in the local area that delights in causing mischief, minor inconveniences like tools going missing, clothing falling apart, sheets of paper going missing.",
    date: new Date(Date.now()),
  }, 
  {
    name: "Northbrough",
    type: "city",
    size: 7619,
    government: "satrapy",
    description: "This settlement is home to an ancient monastic order which protects the settlement from any and all outside dangers.  Resulting, in a strong and prideful spirit of independence and refuse to become a vassal province under any ruler, group or organisation.",

    population: {
        numberOfRaces: 4,
        races: [
            {
                raceOne:"elf-wood",
                percentage: 30,
            },
            {
                raceTwo:"gnome-forest",
                percentage: 30,
            },
            {
                raceThree: "aasimar",
                percentage: 25,
            },
            {
                raceFour:"snekfolk",
                percentage: 15
            }
        ]
    },
  
    otherInformation: "Overnight, plant life in the surrounding area have grown fair beyond their normal size, bearing flowers, ripe juicy fruit, and mouths, some which can talk, others which can eat.",
    date: new Date(Date.now()),
  }, 
  {
    name: "Northford",
    type: "town",
    size: 4644,
    government: "theocracy",
    description: "A peaceful seaside settlement which whose officials act as ambassadors for the kingdom to neighbouring sea-dwelling kingdoms.  However, there are radicalson both sides who wish to end the stable peace treaty.",

    population: {
        numberOfRaces: 3,
        races: [
             {
                raceOne:"halfling",
                percentage: 70,
            },
            {
                raceTwo:"gnome-forest",
                percentage: 15,
            },
            {
                raceThree:"tiefling",
                percentage: 15,
            }
        ]
    },
  
    otherInformation: "There is an entity in the local area that delights in causing mischief, minor inconveniences like tools going missing, clothing falling apart, sheets of paper going missing.",
    date: new Date(Date.now()),
  }, 
  {
    name: "WinterVille",
    type: "town",
    size: 3468,
    government: "confederacy",
    description: "This settlement screams wealthy, anyone important strives to come here for a break as it is the current must be destination.  This settlement is recently completed as an entertainment city for the wealthy.  All forms of entertainment can be found here ranging from family friendly to more adult content later at night.  Rumour has it that the headquarters of one of the countries most powerful crime syndicate dwells here.",

    population: {
        numberOfRaces: 3,
        races: [
            {
                raceOne:"human",
                percentage: 60,
            },
            {
                raceTwo:"elf-high",
                percentage: 20,
            },
            {
                raceThree:"catfolk",
                percentage: 20,
            }
        ]
    },
  
    otherInformation: "The location the PC's are staying at is about to be raided on suspicion of links to being spies of a notorious mercenary troupe belonging to a enemy territory.  Adventurers Mercenaries are the same thing",
    date: new Date(Date.now()),
  }];
//empty database collection

//insert seedfile into database

db.Settlement.collection.insertMany(settlementSeed)
  .then(data => {
    console.log(`${data.result} successfully inserted!`);
    process.exit(0)
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });