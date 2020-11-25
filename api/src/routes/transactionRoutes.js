const router = require("express").Router();

const {
  payment,
  recharge 
} = require("../controllers/transactionControllers");

router
  .route("/payment")
  .post((req, res) => {
    const userId = req.user ? req.user.userId : false
    const {amount} = req.body;
    userId?
    payment(userId, amount)
      .then((user) => res.json(user).status(201))
      .catch((err) => res.status(400).json(err))
    :
    res.sendStatus(401)
  })

router
  .route("/recharge")
  .post((req, res) => {
    const userId = req.user ? req.user.userId : false
    const {amount} = req.body;
    userId?
    recharge(userId, amount)
      .then((user) => res.json(user).status(201))
      .catch((err) => res.status(400).json(err))
    :
    res.sendStatus(401)
  })

  module.exports = router;