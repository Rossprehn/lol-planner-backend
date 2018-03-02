select from event 
  join event_players on event.id = event_players.event_id
  join players on event_players.players_id = players.id;
