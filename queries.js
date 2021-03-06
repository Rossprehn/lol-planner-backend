const database = require('./database-connection')

module.exports = {
  list(table) {
    return database(table).select()
  },
  read(table, id) {
    return database(table)
      .select()
      .where('id', id)
      .first()
  },
  create(table, item) {
    return database(table)
      .insert(item)
      .returning('*')
      .then(record => record[0])
  },
  update(table, id, event) {
    return database(table)
      .update(event)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  },
  delete(table, id) {
    return database(table)
      .delete()
      .where('id', id)
  },
  // getJoinedData() {
  //   return database('event')
  //     .join('event_players', 'event.id', '=', 'event_players.event_id')
  //     .join('players', 'players.id', '=', 'event_players.players_id')
  // },
  getPlayerId(id) {
    return getJoinedData().where('players_id', id)
  },

  testJoin(table) {
    console.log('Sql string:', getJoinedData().toSQL())
  }
}
