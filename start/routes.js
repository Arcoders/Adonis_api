'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', () => { greeting: 'Hello world in JSON' })


// Customers -----------------------------------------------

Route.get('customers', 'CustomerController.index')
Route.get('customers/:id', 'CustomerController.show').middleware(['findCustomer'])
Route.post('customers', 'CustomerController.store')
Route.patch('customers/:id', 'CustomerController.update').middleware(['findCustomer'])
Route.delete('customers/:id', 'CustomerController.destroy').middleware(['findCustomer'])

// Projects -----------------------------------------------

Route.get('projects', 'ProjectController.index')
Route.post('projects', 'ProjectController.store')
Route.patch('projects/:id', 'ProjectController.update').middleware(['findProject'])

// Tasks -----------------------------------------------

Route.get('tasks', 'TaskController.index')
Route.post('tasks', 'TaskController.store')

// Tasks -----------------------------------------------

Route.get('tags', 'TagController.index')
Route.get('tags/:tagId', 'TagController.show').bind('App/Models/Tag', 'tag', 'tagId', '_id');

