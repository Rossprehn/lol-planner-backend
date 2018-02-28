exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', table => {
    table.increments('id').primary()
    table.text('title')
    table.date('date')
    table.time('time')
    table.text('description')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('event')
}
