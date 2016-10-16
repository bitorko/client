import {customElement, inject} from 'aurelia-framework';
import {TournamentStore} from '~/services/tournament';

@customElement('tournament-form')
@inject(TournamentStore)
export class TournamentForm {
  constructor(tournamentStore) {
    this.tournamentStore = tournamentStore;
  }

  submit(tournament) {
    this.tournamentStore.createTournament(tournament);
  }
}

