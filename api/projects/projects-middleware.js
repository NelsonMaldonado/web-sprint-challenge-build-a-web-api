// add middlewares here related to projects
const Projects = require("./projects-model")

function handleError(err, req, res, next) {
  res.status(err.status || 500).json({ message: err.message })
}

module.exports = {
  handleError,
}
