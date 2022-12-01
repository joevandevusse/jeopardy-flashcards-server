const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (request, response) => {
    db.any("SELECT * FROM clues;")
    .then(rows => {
        //console.log(rows);
        response.json(rows);
    })
    .catch(error => {
        console.log(error)
    })
})

router.post('/correct', (req, res) => {
  //merchant_model.createMerchant(req.body)
  db.any("UPDATE clues SET correct = correct + 1 WHERE id = ($1);", req.body.updateId)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

module.exports = router;