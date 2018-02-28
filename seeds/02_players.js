exports.seed = function(knex, Promise) {
  return knex('players')
    .del()
    .then(function() {
      return knex('players').insert([
        { id: 1, name: 'Grimbite', primary: 'ADC', secondary: 'support', rank: 'silver 2' },
        { id: 2, name: 'Heart of Doom', primary: 'Top', secondary: 'Jungle', rank: 'gold 5' },
        { id: 3, name: 'Hemlock', primary: 'Middle', secondary: 'support', rank: 'silver 4' },
        { id: 4, name: 'Thunder Ring', primary: 'Support', secondary: 'ADC', rank: 'silver 5' },
        { id: 5, name: 'Chieftain Drum', primary: 'Jungle', secondary: 'Middle', rank: 'bronze 1' }
      ])
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE players_id_seq RESTART WITH 6;')
    })
}
