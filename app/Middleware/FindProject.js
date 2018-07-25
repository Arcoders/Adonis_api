'use strict'
const Project = use('App/Models/Project')

class FindProject {
  async handle ({ request, response, params: {id} }, next) {

    const project = await Project.find(id)

    if (!project) {
      return response.status(404).json({
        message: 'Project not found.',
        id
      })
    }

    request.body.project = project

    await next()
  }
}

module.exports = FindProject
