'use strict'
const Project = use('App/Models/Project')

/**
 * Resourceful controller for interacting with projects
 */
class ProjectController {
  /**
   * Show a list of all projects.
   * GET projects
   */
  async index ({ request, response }) {
    const projects = await Project.query().with('customer').with('tasks').fetch()

    response.status(200).json({
      message: 'Here are your projects.',
      data: projects
    })
  }

  /**
   * Render a form to be used for creating a new project.
   * GET projects/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new project.
   * POST projects
   */
  async store ({ request, response }) {
    const { name, description, completed, customer_id, tags } = request.post()

    const project = await Project.create({ name, description, completed, customer_id })

    if (tags && tags.length > 0) {
      await project.tags().attach(tags)
      project.tags = await project.tags().fetch()
    }

    response.status(201).json({
      message: 'Successfully created a new project.',
      data: project
    })
  }

  /**
   * Display a single project.
   * GET projects/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing project.
   * GET projects/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update project details.
   * PUT or PATCH projects/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a project with id.
   * DELETE projects/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProjectController
