'use strict'

const Customer = use('App/Models/Customer')

/**
 * Resourceful controller for interacting with customers
 */
class CustomerController {
  /**
   * Show a list of all customers.
   * GET customers
   */
  async index ({ response}) {

    const customer = await Customer.all()

    response.status(200).json({
      message: 'Here are your customers.',
      data: customer
    })

  }

  /**
   * Render a form to be used for creating a new customer.
   * GET customers/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new customer.
   * POST customers
   */
  async store ({ request, response }) {
    const { name, description } = request.post()

    const customer = await Customer.create({ name, description })

    response.status(201).json({
      message: 'Successfuly created a new customer.',
      data: customer
    })
  }

  /**
   * Display a single customer.
   * GET customers/:id
   */
  async show ({ request, response }) {

    const customer = request.post().customer

    response.status(200).json({
      message: 'Heres is your customer.',
      data: customer
    })

  }

  /**
   * Render a form to update an existing customer.
   * GET customers/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update customer details.
   * PUT or PATCH customers/:id
   */
  async update ({ request, response }) {

    const { name, description, customer } = request.post()

    customer.name = name
    customer.description = description

    await customer.save()

    response.status(200).json({
      message: 'Succssfuly updated a new customer.',
      data: customer
    })

  }

  /**
   * Delete a customer with id.
   * DELETE customers/:id
   */
  async destroy ({ request, response, params: { id } }) {

    const customer = request.post().customer

    await customer.delete()

    response.status(200).json({
      message: 'Succssfuly deleted this customer.',
      id
    })

  }
}

module.exports = CustomerController
