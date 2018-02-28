exports.seed = function(knex, Promise) {
  return knex('event_players')
    .del()
    .then(function() {
      return knex('event_players').insert([
        { id: 1, event_id: 1, players_id: 1 },
        { id: 2, event_id: 1, players_id: 2 },
        { id: 3, event_id: 1, players_id: 3 },
        { id: 4, event_id: 1, players_id: 4 },
        { id: 5, event_id: 2, players_id: 1 },
        { id: 6, event_id: 2, players_id: 5 },
        { id: 7, event_id: 3, players_id: 1 },
        { id: 8, event_id: 3, players_id: 2 },
        { id: 9, event_id: 3, players_id: 3 }
      ])
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE event_players_id_seq RESTART WITH 10;')
    })
}
