import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import {format} from 'objection-find-query';
import {buildQueryString} from 'aurelia-path';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(HttpClient, EventAggregator)
export class InstitutionStore {
  constructor(http, ea) {
    this.http = http;
    this.ea = ea;
  }

  setInstitutions(filters) {
    let query = 'institutions';
    if (filters) {
      query = `${query}?${buildQueryString(format(filters, 'where'))}`;
    }

    return this.http.fetch(query)
      .then(response => response.json())
      .then(data => {
        this._institutions = data;
        this.ea.publish('institution:indexed');
      })
      .catch(error => {
        this._error = error;
      });
  }

  get institutions() {
    return this._institutions;
  }

  createInstitution(institution) {
    return this.http.fetch('institutions', {
      method: 'POST',
      body: json(institution)
    });
  }

}

