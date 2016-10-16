import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import {format} from 'objection-find-query';
import {buildQueryString} from 'aurelia-path';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(HttpClient, EventAggregator)
export class TournamentStore {
  constructor(http, ea) {
    this.http = http;
    this.ea = ea;
  }

  setTournaments(filters) {
    let query = 'tournaments';
    if (filters) {
      query = `${query}?${buildQueryString(format(filters, 'where'))}`;
    }

    return this.http.fetch(query)
      .then(response => response.json())
      .then(data => {
        this._tournaments = data;
        this.ea.publish('tournament:indexed');
      })
      .catch(error => {
        this._error = error;
      });
  }

  get tournaments() {
    return this._tournaments;
  }

  createTournament(tournament) {
    return this.http.fetch('tournaments', {
      method: 'POST',
      body: json(tournament)
    });
  }

}
