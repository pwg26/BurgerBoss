const express = require("express");

const router = express.Router();

// Import the burgers.js to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(["name"], [req.body.name], (result) => {
    // Send back the ID of the new burger input
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  cat.updateOne(
    {
      eaten: req.body.eaten,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
