'use strict'

const Tag = use('App/Models/Tag')

/**
 * Resourceful controller for interacting with tags
 */
class TagController {
  /**
   * Show a list of all tags.
   * GET tags
   */
  async index ({ request, response }) {
    const tag = await Tag.all()

    response.status(200).json({
      message: 'Here are your tags',
      data: tag
    })
  }

  /**
   * Render a form to be used for creating a new tag.
   * GET tags/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new tag.
   * POST tags
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single tag.
   * GET tags/:id
   */
  async show ({ response, tag }) {
    response.status(200).json({
      message: 'Here are your selected tag',
      data: tag
    })
  }

  /**
   * Render a form to update an existing tag.
   * GET tags/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update tag details.
   * PUT or PATCH tags/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a tag with id.
   * DELETE tags/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TagController
