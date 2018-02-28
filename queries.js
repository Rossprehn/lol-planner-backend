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
  update(table, id, question) {
    return database(table)
      .update(question)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  },
  delete(table, id) {
    return database(table)
      .delete()
      .where('id', id)
  },
  signedup(eventID) {
    return database('players')
      .join('event_players', 'players.id', '=', 'event_players.players_id')
      .join('event', 'event.id', '=', 'event_playerss.event_id')
      .select('playerss.players_name')
      .where('event.id', eventID)
  }
}
