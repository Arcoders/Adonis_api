'use strict'

const Task = use('App/Models/Task')

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  /**
   * Show a list of all tasks.
   * GET tasks
   */
  async index ({ response }) {
    const tasks = await Task.query().with('project').fetch()

    response.status(200).json({
      message: 'Here are your tasks',
      data: tasks
    })
  }

  /**
   * Render a form to be used for creating a new task.
   * GET tasks/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new task.
   * POST tasks
   */
  async store ({ request, response }) {
    const { name, description, project_id } = request.post()

    const task = await Task.create({ name, description, project_id })

    response.status(201).json({
      message: 'Successfully created a new task.',
      data: task
    })
  }

  /**
   * Display a single task.
   * GET tasks/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing task.
   * GET tasks/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TaskController
