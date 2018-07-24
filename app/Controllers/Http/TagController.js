'use strict'

/**
 * Resourceful controller for interacting with tags
 */
class TagController {
  /**
   * Show a list of all tags.
   * GET tags
   */
  async index ({ request, response, view }) {
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
  async show ({ params, request, response, view }) {
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
