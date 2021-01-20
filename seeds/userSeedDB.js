const mongoose = require("mongoose");
const db = require("../models");

// This file is for development purposes. Will seed the database with the following settlementList. 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rpg-generator", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

const userSeed = [
    {
        name: "john smith",
        password: "safasfdolfdsj[;pfsda",
        order: "smithing tools",
    }
]

db.User.collection.insertMany(userSeed)
  .then(data => {
    console.log(`${data.result} successfully inserted!`);
    process.exit(0)
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });