'use strict'

const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()

      table.string('name')
      table.text('description')
      table.boolean('completed').default(false)

      table.integer('customer_id').unsigned()
      table.foreign('customer_id').references('customers.id').onDelete('cascade')

      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
