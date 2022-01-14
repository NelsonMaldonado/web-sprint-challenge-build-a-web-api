// Write your "actions" router here!
const express = require("express")
const { handleError } = require("./actions-middlware")
const Actions = require("./actions-model")
const router = express.Router()

route.get("/", (req, res, next) => {
  res.send("hello from actions enpoint")
})

module.exports = router
