// add middlewares here related to projects
const Projects = require("./projects-model")

function handleError(err, req, res, next) {
  res.status(err.status || 500).json({ message: err.message })
}

function checkProjectId(req, res, next) {
  Projects.get(req.params.id)
    .then((project) => {
      if (project) {
        req.projectFromDb = project
        next()
      } else {
        next({ status: 404, message: "no project found" })
      }
    })
    .catch(next)
}

module.exports = {
  handleError,
}
