import {inject} from 'aurelia-framework';
import {TournamentStore} from '~/services/tournament';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(TournamentStore, EventAggregator)
export class tournament {
  constructor(tournamentStore, ea) {
    this.tournaments = [];
    this.tournamentStore = tournamentStore;
    this.ea = ea;
  }

  activate() {
    this.tournamentStore.setTournaments();
    this.ea.subscribe('tournament:indexed', () => {
      this.tournaments = this.tournamentStore.tournaments.results;
    });
  }
}
