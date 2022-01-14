// Write your "projects" router here!
const express = require("express")
const Projects = require("./projects-model")

const router = express.Router()

router.get("/", (req, res, next) => {
  Projects.get(req.params.id)
    .then((project) => {
      res.status(200).json(project)
    })
    .catch(next)
})

module.exports = router
