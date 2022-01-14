// Write your "actions" router here!
const express = require("express")

const { handleError, checkActionId } = require("./actions-middlware")
const Actions = require("./actions-model")
const router = express.Router()

router.get("/", (req, res, next) => {
  Actions.get(req.params.id)
    .then((action) => {
      res.status(200).json(action)
    })
    .catch(next)
})

router.get("/:id", checkActionId, (req, res) => {
  res.status(200).json(req.projectFromDb)
})

router.post("/", (req, res, next) => {
  Actions.insert(req.body)
    .then((action) => {
      res.status(201).json(action)
    })
    .catch(next)
})

router.use(handleError)
module.exports = router
