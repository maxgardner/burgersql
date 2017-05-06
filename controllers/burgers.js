// Require Express and set up the router to control routes
let express = require("express");
let router = express.Router();

// Import models to interact with ORM
let db = require("../models");

// Router paths here https://expressjs.com/en/guide/routing.html

router.get("/", (req, res) => {
  db.Burger.findAll()
  .then((data) => {
    let burgers = {
      hitlist: [],
      devoured: []
    };
    for (i in data) {
      if (data[i].devoured === 1) {
        burgers.devoured.push(data[i]);
      } else {
        burgers.hitlist.push(data[i]);
      }
    }
    res.render("index", burgers);
  });
});

router.post("/", (req, res) => {
  db.Burger.create(req.body)
  .then((result) => {
    res.json(result);
  });
});

router.put("/", function(req, res) {
  db.Burger.update(
    req.body, {
      where: {
        id: req.body.id
      }
    })
    .then((result) => {
    res.json(result);
  });
});

module.exports = router;
