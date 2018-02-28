exports.up = function(knex, Promise) {
  return knex.schema.createTable('event_players', table => {
    table.increments('id').primary()
    table.integer('event_id')
    table.foreign('event_id').references('event.id')
    table.integer('players_id')
    table.foreign('players_id').references('players.id')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('event_players')
}
