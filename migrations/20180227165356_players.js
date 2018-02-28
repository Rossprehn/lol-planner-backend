exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', table => {
    table.increments('id').primary()
    table.text('name')
    table.text('primary')
    table.text('secondary')
    table.text('rank')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('players')
}
