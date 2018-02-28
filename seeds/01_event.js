exports.seed = function(knex, Promise) {
  return knex('event')
    .del()
    .then(function() {
      return knex('event').insert([
        {
          id: 1,
          title: 'weekly pwn zone',
          date: '3/16/18',
          time: '7:00pm',
          description: 'killing n00bs only time for a few games'
        },
        {
          id: 2,
          title: 'Friday night games',
          date: '3/19/18',
          time: '7:00pm',
          description: 'ranked push for gold'
        },
        {
          id: 3,
          title: 'cassual sunday',
          date: '3/21/18',
          time: '2:00pm',
          description: 'LFT to work on my toplane'
        }
      ])
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE event_id_seq RESTART WITH 4;')
    })
}
