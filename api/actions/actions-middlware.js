// add middlewares here related to actions
const { getProjectActions } = require("../projects/projects-model")
const Actions = require("./actions-model")

function handleError(err, req, res, next) {
  res.status(err.status || 400).json({ message: err.message })
}

function checkActionId(req, res, next) {
  Actions.get(req.params.id)
    .then((action) => {
      if (action) {
        req.actionFromDb = action
        next()
      } else {
        next({ status: 404, message: "no action found" })
      }
    })
    .catch(next)
}

module.exports = {
  handleError,
  checkActionId,
}
