const express = require('express')
const app = express()
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (request, response) => {
  queries
    .list('event')
    .then(event =>
      queries.list('players').then(players =>
        queries.list('event_players').then(event_players =>
          response.json({
            event: event,
            players: players,
            event_players: event_players
          })
        )
      )
    )
    .catch(console.error)
})

//event
app.get('/event', (request, response) => {
  queries
    .list('event')
    .then(event => {
      response.json({ event })
    })
    .catch(console.error)
})

app.post('/event', (request, response) => {
  queries
    .create('event', request.body)
    .then(event => {
      response.status(201).json({ event })
    })
    .catch(console.error)
})

//event id
app.get('/event/:id', (request, response) => {
  queries
    .read('event', request.params.id)
    .then(event => {
      event ? response.json({ event }) : response.sendStatus(404)
    })
    .catch(console.error)
})

//for join table
// app.get('/event/:id', (request, response) =>
//   queries
//     .getJoinedData()
//     .where('event.id', request.params.id)
//     .then(data => response.send(data))
// )
app.delete('/event/:id', (request, response) => {
  queries
    .delete('event', request.params.id)
    .then(() => {
      response.sendStatus(204)
    })
    .catch(console.error)
})

app.put('/event/:id', (request, response) => {
  console.log('hello from put')

  queries
    .update('event', request.params.id, request.body)
    .then(event => {
      response.json({ event })
    })
    .catch(console.error)
})

//players
app.get('/players', (request, response) => {
  queries
    .list('players')
    .then(players => {
      response.json({ players })
    })
    .catch(console.error)
})
app.post('/players', (request, response) => {
  queries
    .create('players', request.body)
    .then(players => {
      response.status(201).json({ players })
    })
    .catch(console.error)
})
//players id
app.get('/players/:id', (request, response) => {
  queries
    .read('players', request.params.id)
    .then(players => {
      players ? response.json({ players }) : response.sendStatus(404)
    })
    .catch(console.error)
})
app.delete('/players/:id', (request, response) => {
  queries
    .delete('players', request.params.id)
    .then(() => {
      response.sendStatus(204)
    })
    .catch(console.error)
})

app.put('/players/:id', (request, response) => {
  queries
    .update('players', request.params.id, request.body)
    .then(players => {
      response.json({ players })
    })
    .catch(console.error)
})

//event players
app.get('/event_players', (request, response) =>
  queries.getJoinedData().then(data => response.send(data))
)
app.get('/event_players', (request, response) => {
  queries
    .list('event_players')
    .then(event_players => {
      response.json({ event_players })
    })
    .catch(console.error)
})
app.post('/event_players', (request, response) => {
  queries
    .create('event_players', request.body)
    .then(event_players => {
      response.status(201).json({ event_players })
    })
    .catch(console.error)
})

app.get('/event_players/:id', (request, response) => {
  queries
    .read('event_players', request.params.id)
    .then(event_players => {
      event_players ? response.json({ event_players }) : response.sendStatus(404)
    })
    .catch(console.error)
})
app.get('/event_players/:id', (request, response) =>
  queries
    .getJoinedData()
    .where('players.id', request.params.id)
    .then(data => response.send(data))
)
app.delete('/event_players/:id', (request, response) => {
  queries
    .delete('event_players', request.params.id)
    .then(() => {
      response.sendStatus(204)
    })
    .catch(console.error)
})

app.use((request, response) => {
  response.sendStatus(404)
})

module.exports = app
