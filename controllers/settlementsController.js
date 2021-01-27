const db = require("../models");

//Methods for finding, updating and creating new settlements.
module.exports = {
    findAll: function(req, res) {
        db.Settlement.find(req.query).sort({name: 1})
            .then(settlementList => res.json(settlementList))
            .catch(err => res.status(422).json(err))
    },
    // Allow user to search by settlement ID will be used to link to users
    findById: function(req, res) {
        db.Settlement.findByID(req.params.id)
            .then(settlementList => res.json(settlementList))
            .catch(err => res.status(422).json(err))
    },
    // Allow user to search by settlement Name
    findByName: function(req, res) {
        db.Settlement.find({name: req.query})
            .then(settlementName => res.json(settlementName))
            .catch(err => res.status(422).json(err))
    },
    //Create settlement and add it to the database
    create: function(req, res) {
        console.log(req.body)
        db.Settlement.create(req.body)
            
          .then(dbModel => res.json(dbModel))

          .catch(err => {console.log(err); res.status(422).json(err)});
      },
      //Update an existing settlement with new information
    update: function(req, res) {
        db.Settlement.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
      },
      //remove settlement if it is no longer required.
    remove: function(req, res) {
        db.Settlement.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
      }
}